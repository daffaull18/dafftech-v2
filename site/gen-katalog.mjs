// Generator katalog (produk.html) + 6 halaman detail (produk/*.html)
import { SITE, page } from "./layout.mjs";
import { DETAILS } from "./detail-data.mjs";

const BUY = "https://lynk.id/dafftech";

const strip = (s) => s.replace(/<[^>]+>/g, "");

/* diskon dari harga coret: (79-35)/79 -> 56 */
function discount(p) {
    const before = Number(p.originalPrice.replace(/[^0-9]/g, ""));
    const after = p.isFree ? 0 : Number(p.price.replace(/[^0-9]/g, ""));
    if (!before || !after || after >= before) return 0;
    return Math.round(((before - after) / before) * 100);
}

function card(p, prefix) {
    const d = discount(p);
    const price = p.isFree
        ? `<span class="old">${p.originalPrice}</span><span class="now free">FREE</span>`
        : `<span class="old">${p.originalPrice}</span><span class="now">${p.price}</span>`;

    return `
            <article class="cat-card">
                <a class="thumb" href="${prefix}produk/${p.slug}.html">
                    <img src="${prefix}${p.image}" alt="${p.name} — tampilan produk" loading="lazy">
                    ${p.isFree
                        ? `<span class="badge free">FREE</span>`
                        : `<span class="badge">-${d}%</span>`}
                </a>
                <div class="body">
                    <span class="kicker">${p.category}</span>
                    <h3><a href="${prefix}produk/${p.slug}.html">${p.name}</a></h3>
                    <p>${strip(p.lead).split(". ")[0]}.</p>
                    <ul class="mini-list">
                        ${p.pack.slice(0, 3).map(([f]) => `<li>${f}</li>`).join("")}
                    </ul>
                    <div class="price-row">${price}</div>
                    <div class="actions">
                        <a class="a-detail" href="${prefix}produk/${p.slug}.html">Lihat detail</a>
                        <a class="a-buy" href="${BUY}" target="_blank" rel="noopener noreferrer">
                            ${p.isFree ? "Ambil gratis" : "Beli sekarang"}
                        </a>
                    </div>
                </div>
            </article>`;
}

export function katalogPage() {
    const body = `
        <section class="page-hero">
            <div class="container">
                <div class="crumb"><a href="index.html">Beranda</a> / Katalog</div>
                <h1>Enam produk digital, <em>dibuat sendiri.</em></h1>
                <p class="lead">
                    Semua file di halaman ini kami susun sendiri: template website,
                    e-book, panduan AI, UI kit, dan resource creator. Tidak ada
                    template pihak ketiga yang dijual ulang, tidak ada janji yang
                    tidak bisa dicek isinya.
                </p>
                <div class="hero-meta">
                    <span class="tag brand">Bayar sekali lewat Lynk.id</span>
                    <span class="tag">File diunduh langsung setelah bayar</span>
                    <span class="tag">1 produk gratis untuk mencoba</span>
                </div>
            </div>
        </section>

        <section class="inner">
            <div class="container">
                <div class="grid-3">
                    ${DETAILS.map((p) => card(p, "")).join("")}
                </div>

                <div class="cta-band">
                    <div>
                        <h2>Belum yakin harus mulai dari mana?</h2>
                        <p>
                            Portfolio Template gratis — coba dulu kualitas file kami.
                            Kalau cocok, paket berbayarnya menunggu di halaman yang sama.
                        </p>
                    </div>
                    <a class="btn btn-dark" href="produk/portfolio-template.html">
                        Coba yang gratis <i class="fa-solid fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        </section>`;

    return {
        path: "produk.html",
        html: page({
            path: "produk.html",
            title: "Katalog Produk — DAFFTECH",
            desc: "Enam produk digital DAFFTECH: template website, portfolio gratis, e-book programming, panduan AI, UI kit, dan bundle creator. Harga sekali bayar lewat Lynk.id.",
            active: "produk",
            body,
        }),
    };
}

export function detailPages() {
    return DETAILS.map((p) => {
        const d = discount(p);
        const priceBlock = p.isFree
            ? `<div class="p-price"><span class="p-old">${p.originalPrice}</span><span class="p-now">FREE</span></div>
               <p class="p-note">Produk pembuka — ambil tanpa biaya.</p>`
            : `<div class="p-price"><span class="p-old">${p.originalPrice}</span><span class="p-now">${p.price}</span></div>
               <p class="p-note">Potongan ${d}% — sekali bayar, akses selamanya.</p>`;

        const related = DETAILS.filter((x) => x.slug !== p.slug).slice(0, 3);

        const body = `
        <section class="page-hero">
            <div class="container">
                <div class="crumb">
                    <a href="../index.html">Beranda</a> /
                    <a href="../produk.html">Produk</a> /
                    ${p.name}
                </div>
                <h1>${p.tagline}</h1>
                <p class="lead">${p.lead}</p>
                <div class="hero-meta">
                    <span class="tag brand">${p.category}</span>
                    <span class="tag">${p.file}</span>
                </div>
            </div>
        </section>

        <section class="inner">
            <div class="container">
                <div class="detail-grid">
                    <div>
                        <div class="detail-shot">
                            <img src="../${p.image}" alt="Tampilan ${p.name}">
                        </div>

                        <div class="prose" style="margin-top:36px">
                            ${p.sections.map((s) => `
                            <h2>${s.h}</h2>
                            ${s.p.map((t) => `<p>${t}</p>`).join("")}`).join("")}
                        </div>
                    </div>

                    <aside class="panel">
                        <span class="kicker" style="font-family:var(--font-mono);font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--accent)">
                            ${p.category}
                        </span>
                        ${priceBlock}
                        <a class="p-buy" href="${BUY}" target="_blank" rel="noopener noreferrer">
                            ${p.isFree ? "Ambil gratis di Lynk.id" : "Beli di Lynk.id"}
                        </a>
                        <span class="p-secure">
                            <i class="fa-solid fa-shield-halved"></i>
                            Pembayaran & unduhan diproses Lynk.id
                        </span>

                        <ul class="p-pack">
                            <li><strong>Yang kamu terima</strong></li>
                            ${p.pack.map(([f, note]) => `<li><strong>${f}</strong>${note}</li>`).join("")}
                        </ul>
                    </aside>
                </div>

                <div class="sub-head" style="margin-top:70px">
                    <h2>Produk lain</h2>
                    <p>Enam koleksi DAFFTECH saling melengkapi — lihat sisanya.</p>
                </div>
                <div class="grid-3">
                    ${related.map((r) => card(r, "../")).join("")}
                </div>
            </div>
        </section>`;

        return {
            path: `produk/${p.slug}.html`,
            html: page({
                path: `produk/${p.slug}.html`,
                title: `${p.name} — DAFFTECH`,
                desc: `${strip(p.lead).slice(0, 150)} Harga ${p.isFree ? "gratis" : p.price} lewat Lynk.id.`,
                active: "produk",
                body,
            }),
        };
    });
}
