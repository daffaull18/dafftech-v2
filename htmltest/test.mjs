import pkg from "jsdom";
const { JSDOM, VirtualConsole, requestInterceptor } = pkg;
import http from "node:http";
import fs from "node:fs";
import path from "node:path";

const ROOT = "C:/Users/user/OneDrive/Desktop/project Dinzz/dafftech-v2";

/* server statis kecil agar localStorage & origin sama seperti GitHub Pages */
const TYPES = {
    ".html": "text/html; charset=utf-8",
    ".js": "application/javascript; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".svg": "image/svg+xml",
    ".txt": "text/plain; charset=utf-8",
    ".xml": "application/xml; charset=utf-8",
};

const server = http.createServer((req, res) => {
    const rel = decodeURIComponent(new URL(req.url, "http://x").pathname);
    const rootResolved = path.resolve(ROOT);
    const file = path.resolve(rootResolved, "." + (rel === "/" ? "/index.html" : rel));
    if (!file.toLowerCase().startsWith(rootResolved.toLowerCase()) ||
        !fs.existsSync(file) || fs.statSync(file).isDirectory()) {
        res.writeHead(404).end("not found");
        return;
    }
    res.writeHead(200, {
        "Content-Type": TYPES[path.extname(file).toLowerCase()] || "application/octet-stream",
    });
    fs.createReadStream(file).pipe(res);
});

await new Promise((r) => server.listen(0, "127.0.0.1", r));
const ORIGIN = `http://127.0.0.1:${server.address().port}`;
const BASE = `${ORIGIN}/index.html`;
const FILE = `${ROOT}/index.html`;

/* hanya izinkan server lokal, balas kosong untuk CDN (font/AOS/FA) */
const localOnly = requestInterceptor((request) => {
    const url = String(request.url);
    if (!url.startsWith(ORIGIN) && !url.startsWith("file:")) {
        return new Response("/* blocked */", {
            status: 200,
            headers: { "Content-Type": "application/javascript" },
        });
    }
});

const problems = [];
const vc = new VirtualConsole();
vc.on("jsdomError", (e) => problems.push("jsdomError: " + e.message));
vc.on("error", (...a) => problems.push("console.error: " + a.join(" ")));
vc.on("warn", (...a) => problems.push("console.warn: " + a.join(" ")));

const dom = await JSDOM.fromURL(BASE, {
    runScripts: "dangerously",
    resources: { interceptors: [localOnly] },
    virtualConsole: vc,
    pretendToBeVisual: true,
});

const { window } = dom;
await new Promise((res) => {
    if (window.document.readyState === "complete") res();
    else window.addEventListener("load", res);
});
await new Promise((r) => setTimeout(r, 300));

const d = window.document;
const results = [];
const check = (name, cond, extra = "") => results.push({ name, ok: !!cond, extra });

/* ---------- 1. render produk ---------- */
const cards = d.querySelectorAll("#products-grid .product-card");
check("6 produk dirender", cards.length === 6, `dapat ${cards.length}`);

/* ---------- 2. semua produk punya link beli ---------- */
const buyLinks = [...d.querySelectorAll(".product-btn")];
const badLinks = buyLinks.filter((a) => {
    const ok = a.dataset.productAvailable === "true";
    const href = a.getAttribute("href");
    return !ok || !href || href === "#";
});
check("semua tombol beli aktif", badLinks.length === 0, `${badLinks.length} masih mati`);

const storeLinks = buyLinks.filter(
    (a) => a.getAttribute("href") === "https://lynk.id/dafftech"
);
check("link mengarah ke toko lynk.id", storeLinks.length === 6, `${storeLinks.length}/6`);

/* ---------- 3. badge diskon ---------- */
const discounts = d.querySelectorAll(".product-discount");
check("badge diskon tampil (5 produk berbayar)", discounts.length === 5, `${discounts.length}`);
const discountTexts = [...discounts].map((e) => e.textContent.trim());
check("diskon dihitung benar", discountTexts.join(",") === "-56%,-75%,-68%,-50%,-80%", discountTexts.join(","));

/* ---------- 4. isi paket (options) ---------- */
const optionBlocks = d.querySelectorAll(".product-options");
check("5 produk berbayar punya blok isi paket", optionBlocks.length === 5, `${optionBlocks.length}`);
const optionItems = d.querySelectorAll(".product-options li");
check("total isi paket = 21 item nyata (5+3+3+5+5)", optionItems.length === 21, `${optionItems.length}`);
const perBlock = [...optionBlocks].map((b) => b.querySelectorAll("li").length).join(",");
check("pola per blok 5,3,3,5,5", perBlock === "5,3,3,5,5", perBlock);

/* ---------- 5. fitur produk gratis ---------- */
check("produk gratis menampilkan fitur", d.querySelectorAll(".product-features li").length === 5);

/* ---------- 6. cross sell ---------- */
check("ada upsell dari produk gratis", d.querySelectorAll(".product-crosssell").length === 1);

/* ---------- 7. filter ---------- */
const clickFilter = (f) => {
    const btn = d.querySelector(`.filter-btn[data-filter="${f}"]`);
    btn.dispatchEvent(new window.MouseEvent("click", { bubbles: true }));
    return d.querySelectorAll("#products-grid .product-card").length;
};
check("filter Free = 1 produk", clickFilter("free") === 1, `${clickFilter("free")}`);
check("filter Premium = 5 produk (free tidak ikut)", clickFilter("premium") === 5, `${clickFilter("premium")}`);
check("filter All kembali = 6 produk", clickFilter("all") === 6, `${clickFilter("all")}`);

/* ---------- 8. iklan disembunyikan karena belum dikonfigurasi ---------- */
const adSlots = d.querySelectorAll(".ad-slot");
const visibleAds = [...adSlots].filter((a) => !a.hidden);
check("slot iklan tersembunyi (AdSense belum diisi)", adSlots.length === 2 && visibleAds.length === 0,
    `${adSlots.length} slot, ${visibleAds.length} tampil`);

/* ---------- 9. analytics tidak dimuat ---------- */
check("analytics tidak dimuat (belum diisi)",
    !d.querySelector('script[src*="googletagmanager"]'));

/* ---------- 10. newsletter ---------- */
check("form newsletter ada", !!d.getElementById("newsletter-form"));
check("input email newsletter ada", !!d.getElementById("newsletter-email"));

/* ---------- 11. FAQ ---------- */
const faqs = d.querySelectorAll(".faq-item");
check("FAQ berisi 6 pertanyaan", faqs.length === 6, `${faqs.length}`);

/* ---------- 12. structured data valid ---------- */
const ldBlocks = [...d.querySelectorAll('script[type="application/ld+json"]')];
let ldOk = true;
const ldTypes = [];
ldBlocks.forEach((s) => {
    try {
        const j = JSON.parse(s.textContent);
        ldTypes.push(j["@type"] || "?");
    } catch (e) {
        ldOk = false;
    }
});
check("3 blok JSON-LD valid", ldBlocks.length === 3 && ldOk, ldTypes.join(","));
check("JSON-LD punya Organization, ItemList, FAQPage",
    ldTypes.includes("Organization") && ldTypes.includes("ItemList") && ldTypes.includes("FAQPage"),
    ldTypes.join(","));

/* ---------- 13. meta sosial ---------- */
check("Open Graph title ada", !!d.querySelector('meta[property="og:title"]'));
check("Open Graph image ada", !!d.querySelector('meta[property="og:image"]'));
check("canonical ada", !!d.querySelector('link[rel="canonical"]'));

/* ---------- 14. script urut ---------- */
const scripts = [...d.querySelectorAll("script[src]")].map((s) => s.getAttribute("src"));
check("config.js dimuat sebelum products.js",
    scripts.indexOf("js/config.js") >= 0 &&
    scripts.indexOf("js/config.js") < scripts.indexOf("js/products.js"),
    scripts.join(" -> "));

/* ---------- 15. sticky CTA ---------- */
check("sticky CTA mobile ada", !!d.getElementById("sticky-cta"));

/* ---------- 16. nav / footer FAQ ---------- */
check("footer punya link FAQ", !!d.querySelector('.footer-links a[href="#faq"]'));

/* ---------- 17. toast tidak memakai alert ---------- */
import { readFileSync } from "node:fs";

const productsSrc = readFileSync(
    "C:/Users/user/OneDrive/Desktop/project Dinzz/dafftech-v2/js/products.js",
    "utf8"
)
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/\/\/.*$/gm, "");

check("tombol beli tidak memakai alert()",
    !/(^|[^.\w])alert\s*\(/.test(productsSrc));

/* ---------- 18. toggle tema ---------- */
const toggle = d.getElementById("theme-toggle");
const isLightNow = () => d.body.classList.contains("light-mode");

check("tema awal terang", isLightNow() === true);

toggle.dispatchEvent(new window.MouseEvent("click", { bubbles: true }));
check("klik -> mode gelap (light-mode dilepas)", isLightNow() === false);

toggle.dispatchEvent(new window.MouseEvent("click", { bubbles: true }));
check("klik lagi -> mode terang", isLightNow() === true);

let stored = null;
try { stored = window.localStorage.getItem("dafftech-theme"); } catch (e) { stored = "(blocked)"; }
check("pilihan tema tersimpan", stored === "light", String(stored));

toggle.dispatchEvent(new window.MouseEvent("click", { bubbles: true }));
let storedDark = null;
try { storedDark = window.localStorage.getItem("dafftech-theme"); } catch (e) { storedDark = "(blocked)"; }
check("mode gelap tersimpan (reloading tetap gelap)", storedDark === "dark", String(storedDark));
check("saat gelap, light-mode benar-benar hilang", !d.body.classList.contains("light-mode"));

/* ---------- hasil ---------- */
const failed = results.filter((r) => !r.ok);
results.forEach((r) => console.log(`${r.ok ? "PASS" : "FAIL"}  ${r.name}${r.extra ? "  [" + r.extra + "]" : ""}`));

console.log("\n--- console/page errors ---");
const realErrors = problems.filter((p) => !/AOS is not defined|AOS\.init/.test(p));
console.log(realErrors.length ? realErrors.join("\n") : "(tidak ada error)");
console.log(`\n${results.length - failed.length}/${results.length} lulus`);

server.close();
process.exit(failed.length || realErrors.length ? 1 : 0);
