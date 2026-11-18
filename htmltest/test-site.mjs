// Tes18 halaman internal DAFFTECH — jalankan: node test-site.mjs
import { JSDOM, VirtualConsole } from "jsdom";
import http from "node:http";
import fs from "node:fs";
import path from "node:path";

const ROOT = "C:/Users/user/OneDrive/Desktop/project Dinzz/dafftech-v2";
const TYPES = { ".html": "text/html; charset=utf-8", ".css": "text/css", ".js": "application/javascript", ".png": "image/png", ".xml": "application/xml" };

const server = http.createServer((req, res) => {
    const rel = decodeURIComponent(new URL(req.url, "http://x").pathname);
    const root = path.resolve(ROOT);
    const file = path.resolve(root, "." + (rel === "/" ? "/index.html" : rel));
    if (!file.toLowerCase().startsWith(root.toLowerCase()) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) {
        res.writeHead(404).end("nope"); return;
    }
    res.writeHead(200, { "Content-Type": TYPES[path.extname(file)] || "application/octet-stream" });
    res.end(fs.readFileSync(file));
});

const PAGES = [
    "produk.html", "jasa.html", "tentang.html", "kontak.html",
    "privasi.html", "syarat.html", "blog.html", "404.html",
    "produk/portfolio-template.html", "produk/website-template.html",
    "produk/ebook-programming.html", "produk/ai-productivity-tools.html",
    "produk/modern-ui-kit.html", "produk/digital-creator-bundle.html",
    "blog/belajar-web-dari-nol.html", "blog/memilih-template-website.html",
    "blog/prompt-ai-yang-benar-benar-dipakai.html", "blog/lisensi-aset-konten.html",
];

const results = [];
const check = (n, c, e = "") => results.push({ n, ok: !!c, e });

const vc = new VirtualConsole();
const problems = [];
vc.on("jsdomError", (e) => problems.push(String(e.message || e)));
vc.on("error", (m) => problems.push(String(m)));

for (const p of PAGES) {
    const html = fs.readFileSync(path.join(ROOT, p), "utf8");
    const dom = new JSDOM(html, { url: "http://x/" + p, runScripts: "outside-only", virtualConsole: vc });
    const d = dom.window.document;

    check(`${p}: ada header+footer`, !!d.querySelector("header.header") && !!d.querySelector("footer.footer"));
    check(`${p}: title unik`, (d.title || "").includes("DAFFTECH"), d.title);
    check(`${p}: canonical`, !!d.querySelector('link[rel="canonical"]'));
    check(`${p}: og:title`, !!d.querySelector('meta[property="og:title"]'));
    check(`${p}: nav minimal 5 link`, d.querySelectorAll(".nav-link").length >= 5);
    check(`${p}: footer FAQ link`, !!d.querySelector('.footer-links a[href*="#faq"]'));
    check(`${p}: footer legal`, !!d.querySelector('a[href*="privasi"]') && !!d.querySelector('a[href*="syarat"]'));
    check(`${p}: pages.css`, !!d.querySelector('link[href*="pages.css"]'));
    check(`${p}: forms.js`, !!d.querySelector('script[src*="forms.js"]'));
}

console.log("--- struktur file ---");
check("18 halaman ada", PAGES.every((p) => fs.existsSync(path.join(ROOT, p))));
check("css/pages.css ada", fs.existsSync(path.join(ROOT, "css/pages.css")));
check("js/forms.js ada", fs.existsSync(path.join(ROOT, "js/forms.js")));
check("api/contact.js ada", fs.existsSync(path.join(ROOT, "api/contact.js")));
check("api/subscribe.js ada", fs.existsSync(path.join(ROOT, "api/subscribe.js")));
check("api/health.js ada", fs.existsSync(path.join(ROOT, "api/health.js")));
check("vercel.json ada", fs.existsSync(path.join(ROOT, "vercel.json")));
check("konek-test.txt sudah dihapus", !fs.existsSync(path.join(ROOT, "konek-test.txt")));

console.log("--- isi halaman ---");
const katalog = fs.readFileSync(path.join(ROOT, "produk.html"), "utf8");
check("katalog: 6 kartu", (katalog.match(/class="cat-card"/g) || []).length === 6);
check("katalog: semua link detail", PAGES.slice(8, 14).every((p) => katalog.includes(p.replace("produk/", ""))));

const sm = fs.readFileSync(path.join(ROOT, "sitemap.xml"), "utf8");
check("sitemap: 18 URL", (sm.match(/<loc>/g) || []).length === 18);

const failed = results.filter((r) => !r.ok);
results.forEach((r) => console.log(`${r.ok ? "PASS" : "FAIL"}  ${r.n}${r.e ? "  [" + r.e + "]" : ""}`));
const real = problems.filter((m) => !/AOS is not defined/.test(m));
console.log(`\n${results.length - failed.length}/${results.length} lulus`);
if (real.length) console.log("errors:\n" + real.slice(0, 8).join("\n"));
server.close();
process.exit(failed.length || real.length ? 1 : 0);
