// Layout bersama untuk semua halaman baru DAFFTECH
export const SITE = {
    base: "https://daffaull18.github.io/dafftech-v2",
    name: "DAFFTECH",
    email: "hello@dafftech.id",
    store: "https://lynk.id/dafftech",
    image: "https://daffaull18.github.io/dafftech-v2/images/hero-showcase.png",
};

/* path relatif menuju root: "produk.html" -> "", "blog/x.html" -> "../" */
export function prefix(path) {
    const depth = path.split("/").length - 1;
    return "../".repeat(depth);
}

function nav(p, active) {
    const items = [
        ["beranda", "Beranda", `${p}index.html`],
        ["produk", "Produk", `${p}produk.html`],
        ["beli", "Cara Beli", `${p}index.html#beli`],
        ["jasa", "Jasa", `${p}jasa.html`],
        ["blog", "Blog", `${p}blog.html`],
        ["faq", "FAQ", `${p}index.html#faq`],
        ["kontak", "Kontak", `${p}kontak.html`],
    ];
    return items.map(([id, label, href]) =>
        `<a href="${href}" class="nav-link${active === id ? " active" : ""}">${label}</a>`
    ).join("\n                ");
}

function header(p, active) {
    return `
    <header class="header">
        <div class="container header-inner">
            <a href="${p}index.html" class="logo" aria-label="DAFFTECH Beranda">
                <img src="${p}images/logo-mark-white.png" alt="Logo DAFFTECH">
                <span>DAFF<span>TECH</span></span>
            </a>
            <nav class="navbar" id="navbar">
                ${nav(p, active)}
            </nav>
            <div class="header-actions">
                <button id="theme-toggle" class="icon-btn" type="button" aria-label="Ganti tema terang atau gelap">
                    <i class="fa-solid fa-moon"></i>
                </button>
                <a href="${p}produk.html" class="header-btn">Lihat produk<i class="fa-solid fa-arrow-right"></i></a>
                <button class="menu-btn" id="menu-btn" aria-label="Buka menu" aria-expanded="false">
                    <i class="fa-solid fa-bars"></i>
                </button>
            </div>
        </div>
    </header>`;
}

function footer(p) {
    return `
    <footer class="footer">
        <div class="container footer-main">
            <div class="footer-brand">
                <a href="${p}index.html" class="logo">
                    <img src="${p}images/logo-mark-white.png" alt="Logo DAFFTECH">
                    <span>DAFF<span>TECH</span></span>
                </a>
                <p>Enam produk digital yang dibuat sendiri: template website, portfolio, e-book, UI kit, dan resource creator.</p>
                <div class="social-links">
                    <a href="https://www.instagram.com/d_a_p_p_u_l/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
                    <a href="https://www.tiktok.com/@d_a_p_p_u_l" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><i class="fa-brands fa-tiktok"></i></a>
                    <a href="https://github.com/daffaull18" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i class="fa-brands fa-github"></i></a>
                </div>
            </div>
            <div class="footer-links">
                <h4>Jelajahi</h4>
                <a href="${p}produk.html">Semua Produk</a>
                <a href="${p}index.html#beli">Cara Beli</a>
                <a href="${p}tentang.html">Tentang</a>
                <a href="${p}jasa.html">Jasa</a>
                <a href="${p}kontak.html">Kontak</a>
            </div>
            <div class="footer-links">
                <h4>Bantuan</h4>
                <a href="${p}index.html#faq">FAQ</a>
                <a href="${p}blog.html">Blog</a>
                <a href="https://lynk.id/dafftech" target="_blank" rel="noopener noreferrer">Toko Lynk.id</a>
                <a href="mailto:${SITE.email}">Email kami</a>
            </div>
            <div class="footer-links">
                <h4>Legal</h4>
                <a href="${p}privasi.html">Kebijakan Privasi</a>
                <a href="${p}syarat.html">Syarat &amp; Ketentuan</a>
                <a href="${p}produk.html">Koleksi Produk</a>
            </div>
        </div>
        <div class="container footer-bottom">
            <p>&copy; <span id="current-year"></span> DAFFTECH. Harga dalam Rupiah, pembayaran lewat Lynk.id.</p>
            <span>Dibuat &amp; dirawat di Indonesia.</span>
        </div>
    </footer>`;
}

/* shell halaman */
export function page({ path, title, desc, active, body, ld = [] }) {
    const p = prefix(path);
    const url = `${SITE.base}/${path}`;
    const ldHTML = ld.map((o) =>
        `\n    <script type="application/ld+json">${JSON.stringify(o)}</script>`
    ).join("");

    return `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="${desc}">
    <meta name="theme-color" content="#f3f0e9">
    <meta name="robots" content="index, follow, max-image-preview:large">
    <meta name="author" content="DAFFTECH">
    <link rel="canonical" href="${url}">
    <title>${title}</title>
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="DAFFTECH">
    <meta property="og:locale" content="id_ID">
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${desc}">
    <meta property="og:url" content="${url}">
    <meta property="og:image" content="${SITE.image}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${title}">
    <meta name="twitter:description" content="${desc}">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700;800&family=Geist+Mono:wght@400;500;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css">
    <link rel="stylesheet" href="${p}css/style.css">
    <link rel="stylesheet" href="${p}css/pages.css">${ldHTML}
</head>
<body>
${header(p, active)}

    <main>
${body}
    </main>

${footer(p)}

    <script src="${p}js/config.js"></script>
    <script src="${p}js/script.js"></script>
    <script src="${p}js/forms.js"></script>
</body>
</html>
`;
}
