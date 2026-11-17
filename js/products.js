/* =========================================================
   DAFFTECH - PRODUCTS DATA
   ---------------------------------------------------------
   catatan penting untuk pemilik toko:
   - link kosong / "#"  => tombol beli TIDAK AKTIF
   - available: false   => tombol beli TIDAK AKTIF
   - isi `options` hanya dengan produk yang BENAR-BENAR ada,
     jangan mengarang isi paket (pembeli akan menagih)
   ========================================================= */


const products = [

    /* =====================================================
       1. PORTFOLIO TEMPLATE  ->  GRATIS (produk pembuka)
    ===================================================== */

    {
        id: 1,
        name: "Portfolio Template",
        category: "Template",

        type: "template",

        isFree: true,
        badge: "FREE",

        price: 0,
        originalPrice: "Rp35.000",

        description:
            "Template portfolio personal siap pakai. " +
            "Ringan, cepat, dan mudah diganti isinya — " +
            "cocok untuk freelancer, mahasiswa, dan " +
            "personal brand yang baru mulai.",

        image: "images/products/portfolio-template.png",

        features: [
            "Bagian profil, project, dan kontak",
            "HTML, CSS & JavaScript tanpa framework",
            "Gambar contoh mudah diganti",
            "Responsive desktop & mobile",
            "Panduan pemakaian (README)"
        ],

        /* pembelian gratis tetap lewat toko agar
           pengunjung terdaftar dan bisa ditawari produk lain */

        link: SITE_CONFIG.storeUrl,

        buttonText: "Get Free",

        /* upsell: pengunjung gratis diarahkan ke paket berbayar */

        crossSell: {
            text: "Butuh lebih banyak pilihan template?",
            target: 2
        },

        available: true
    },


    /* =====================================================
       2. WEBSITE TEMPLATE  ->  PAKET 5 TEMPLATE
       (AURELIA, NEXORA, NOVA, ORION, YOURBRAND)
    ===================================================== */

    {
        id: 2,
        name: "Website Template",
        category: "Template",

        type: "template",

        originalPrice: "Rp79.000",
        price: "Rp35.000",

        description:
            "Paket 5 template website modern untuk " +
            "kebutuhan personal maupun bisnis: AURELIA " +
            "(company profile), NEXORA & YOURBRAND " +
            "(form kontak langsung ke WhatsApp), NOVA " +
            "(SaaS gelap + tabel harga), dan ORION " +
            "(studio dengan aksen lime).",

        image: "images/products/website-template.png",

        /* isi paket nyata, sesuai file yang dikirim */

        options: [
            {
                name: "AURELIA",
                note: "Business & company profile, tampilan elegan"
            },
            {
                name: "NEXORA",
                note: "Business & agency, form kontak via WhatsApp"
            },
            {
                name: "NOVA",
                note: "Dark SaaS & startup, lengkap dengan pricing"
            },
            {
                name: "ORION",
                note: "Digital studio & agency, aksen lime"
            },
            {
                name: "YOURBRAND",
                note: "Bisnis modern, form langsung ke WhatsApp"
            }
        ],

        link: SITE_CONFIG.storeUrl,

        buttonText: "Buy Now",

        available: true
    },


    {
        id: 3,
        name: "E-Book Programming",
        category: "E-Book",

        type: "ebook",

        originalPrice: "Rp399.000",
        price: "Rp99.000",

        description:
            "Delapan bab dari pengenalan web sampai " +
            "menerbitkan website gratis: HTML, CSS, " +
            "JavaScript, proyek praktik landing page, " +
            "lengkap dengan latihan dan kunci jawaban.",

        image: "images/products/ebook-programming.png",

        options: [
            {
                name: "PDF 12 halaman",
                note: "Siap dibaca di HP atau dicetak — EBOOK-HTML-CSS-JAVASCRIPT-UNTUK-PEMULA.pdf"
            },
            {
                name: "Versi HTML + CSS",
                note: "ebook.html & ebook-style.css — dibuka di browser, huruf bisa diperbesar"
            },
            {
                name: "README & lisensi",
                note: "Cara baca, cara cetak, dan lisensi penggunaan file"
            }
        ],

        link: SITE_CONFIG.storeUrl,
        buttonText: "Buy Now",

        available: true
    },


    /* =====================================================
       4. AI PRODUCTIVITY TOOLS
    ===================================================== */

    {
        id: 4,
        name: "AI Productivity Tools",
        category: "AI",

        type: "resource",

        originalPrice: "Rp500.000",
        price: "Rp159.000",

        description:
            "Panduan AI untuk kerja harian: 9 alat AI " +
            "dijelaskan fungsinya dan biayanya, anatomi " +
            "prompt R-C-T-X, plus 19 prompt siap tempel " +
            "untuk kantor, kuliah, dan konten.",

        image: "images/products/ai-tools.png",

        options: [
            {
                name: "PDF 10 halaman",
                note: "PANDUAN-AI-PRODUCTIVITY-TOOLS.pdf — seluruh isi panduan"
            },
            {
                name: "Versi HTML + CSS",
                note: "ai.html & ai-style.css — navigasi bab, dibaca nyaman di browser"
            },
            {
                name: "README & lisensi",
                note: "Cara pakai prompt dan lisensi penggunaan file"
            }
        ],

        link: SITE_CONFIG.storeUrl,

        buttonText: "Buy Now",

        available: true
    },


    /* =====================================================
       5. MODERN UI KIT
    ===================================================== */

    {
        id: 5,
        name: "Modern UI Kit",
        category: "UI Design",

        type: "resource",

        originalPrice: "Rp100.000",
        price: "Rp50.000",

        description:
            "Set token desain untuk web, iOS, dan Android: " +
            "warna, huruf, ruang, serta komponen siap pakai " +
            "(tombol, kartu, form, badge, switch) lengkap " +
            "dengan pratinjau di browser.",

        image: "images/products/ui-kit.png",

        options: [
            {
                name: "Design tokens",
                note: "tokens.css (variabel CSS) & tokens.json — warna, tipografi, spasi, radius"
            },
            {
                name: "Komponen CSS",
                note: "components.css — dt-btn, dt-card, dt-field, dt-badge, dt-chip, dt-row, dt-switch"
            },
            {
                name: "SwiftUI",
                note: "ios/Components.swift — komponen memakai token yang sama"
            },
            {
                name: "Jetpack Compose",
                note: "android/Components.kt — komponen Android dengan token sama"
            },
            {
                name: "Pratinjau",
                note: "index.html (buka di browser) + PREVIEW.png + README"
            }
        ],

        link: SITE_CONFIG.storeUrl,

        buttonText: "Buy Now",

        available: true
    },


    /* =====================================================
       6. DIGITAL CREATOR BUNDLE
    ===================================================== */

    {
        id: 6,
        name: "Digital Creator Bundle",
        category: "Bundle",

        type: "bundle",

        originalPrice: "Rp500.000",
        price: "Rp100.000",

        description:
            "10 template post 1080×1080 dengan file " +
            "sumber HTML-nya, kalender konten 30 hari, " +
            "12 prompt caption, brand kit isi-sendiri, " +
            "dan panduan lisensi aset.",

        image: "images/products/digital-bundle.png",

        options: [
            {
                name: "10 PNG 1080×1080",
                note: "Sampul seri, tips, promo, kutipan, checklist, tutorial, cerita, cara beli, event, CTA"
            },
            {
                name: "10 file HTML",
                note: "Sumber tiap post — ganti teks dan warna, ekspor ulang"
            },
            {
                name: "Kalender 30 hari",
                note: "kalender-konten-30-hari.csv & .md — satu topik per hari"
            },
            {
                name: "12 prompt caption",
                note: "prompt-caption.md — promosi, edukasi, brand, dan hook"
            },
            {
                name: "Brand kit & lisensi",
                note: "brand-kit.html (isi-sendiri), panduan-lisensi-aset.md, README"
            }
        ],

        link: SITE_CONFIG.storeUrl,

        buttonText: "Buy Now",

        available: true
    }

];


/* =========================================================
   HELPERS
========================================================= */

const productsGrid =
    document.getElementById("products-grid");

const filterButtons =
    document.querySelectorAll(".filter-btn");


/* "Rp399.000" -> 399000 */
function parseRupiah(value) {

    if (typeof value === "number") {
        return value;
    }

    if (!value) {
        return 0;
    }

    const digits =
        String(value).replace(/[^0-9]/g, "");

    return Number(digits) || 0;
}


/* potongan harga dari harga coret, mis. 56 */
function getDiscountPercent(product) {

    const before =
        parseRupiah(product.originalPrice);

    const after =
        product.isFree
            ? 0
            : parseRupiah(product.price);


    if (!before || !after || after >= before) {
        return 0;
    }

    return Math.round(
        ((before - after) / before) * 100
    );
}


/* toast pengganti alert() */
function showToast(message) {

    let toast =
        document.getElementById("dafftech-toast");

    if (!toast) {

        toast = document.createElement("div");

        toast.id = "dafftech-toast";
        toast.className = "dafftech-toast";
        toast.setAttribute("role", "status");

        document.body.appendChild(toast);

    }


    toast.textContent = message;
    toast.classList.add("show");


    clearTimeout(showToast.timer);

    showToast.timer = setTimeout(() => {
        toast.classList.remove("show");
    }, 3500);

}


/* =========================================================
   RENDER PRODUCTS
========================================================= */

function renderProducts(filter = "all") {

    if (!productsGrid) {
        return;
    }


    /* =====================================================
       FILTER
    ===================================================== */

    const filteredProducts =
        filter === "all"
            ? products
            : filter === "free"
                ? products.filter(p => p.isFree === true)
                : filter === "premium"
                    ? products.filter(p => p.isFree !== true)
                    : products.filter(p => p.type === filter);


    if (filteredProducts.length === 0) {

        productsGrid.innerHTML = `

            <div class="empty-products">

                <i class="fa-solid fa-box-open"></i>

                <h3>
                    Produk Belum Tersedia
                </h3>

                <p>
                    Belum ada produk dalam kategori ini.
                </p>

            </div>

        `;

        return;
    }


    /* =====================================================
       PRODUCT CARD
    ===================================================== */

    productsGrid.innerHTML =
        filteredProducts.map(product => {


            /* ---------- badge ---------- */

            const badgeText =
                product.isFree ? "FREE" : "PREMIUM";


            /* ---------- diskon ---------- */

            const discount =
                getDiscountPercent(product);


            const discountHTML =
                discount > 0
                    ? `
                        <span class="product-discount">
                            -${discount}%
                        </span>
                    `
                    : "";


            /* ---------- tombol ---------- */

            const buttonText =
                product.buttonText ||
                (product.isFree ? "Get Free" : "Buy Now");


            const productAvailable =
                product.available === true &&
                product.link &&
                product.link !== "#";


            const linkAttributes =
                productAvailable
                    ? `
                        href="${product.link}"
                        target="_blank"
                        rel="noopener noreferrer"
                      `
                    : `href="#"`;


            /* ---------- harga ---------- */

            let priceHTML = "";

            if (product.isFree) {

                priceHTML = `

                    <div class="product-price-box">

                        <span class="product-original-price">
                            ${product.originalPrice}
                        </span>

                        <span class="product-price free-price">
                            FREE
                        </span>

                    </div>

                `;

            } else {

                priceHTML = `

                    <div class="product-price-box">

                        <span class="product-original-price">
                            ${product.originalPrice}
                        </span>

                        <span class="product-price">
                            ${product.price}
                        </span>

                    </div>

                    <span class="product-paynote">
                        Sekali bayar, akses selamanya
                    </span>

                `;

            }


            /* ---------- isi paket (options) ---------- */

            const hasOptions =
                Array.isArray(product.options) &&
                product.options.length > 0;


            const optionsHTML = hasOptions
                ? `

                    <div class="product-options">

                        <span class="product-options-label">

                            <i class="fa-solid fa-layer-group"></i>

                            Isi paket · ${product.options.length} pilihan

                        </span>

                        <ul>

                            ${product.options.map(option => `

                                <li>
                                    <strong>${option.name}</strong>
                                    ${option.note
                                        ? `<span>${option.note}</span>`
                                        : ""}
                                </li>

                            `).join("")}

                        </ul>

                    </div>

                `
                : "";


            /* ---------- fitur ---------- */

            const hasFeatures =
                Array.isArray(product.features) &&
                product.features.length > 0;


            const featuresHTML = hasFeatures
                ? `

                    <ul class="product-features">

                        ${product.features.map(feature => `

                            <li>
                                <i class="fa-solid fa-check"></i>
                                ${feature}
                            </li>

                        `).join("")}

                    </ul>

                `
                : "";


            /* ---------- cross sell (hanya produk gratis) ---------- */

            const crossSellHTML = product.crossSell
                ? `

                    <button
                        type="button"
                        class="product-crosssell"
                        data-scroll-to-product="${product.crossSell.target}"
                    >

                        ${product.crossSell.text}

                        <i class="fa-solid fa-arrow-right"></i>

                    </button>

                `
                : "";


            /* ---------- catatan pembayaran ---------- */

            const noteHTML = productAvailable
                ? (product.isFree
                    ? ""
                    : `
                        <span class="product-secure">
                            <i class="fa-solid fa-shield-halved"></i>
                            Pembayaran diproses oleh Lynk.id
                        </span>
                    `)
                : `
                    <span class="product-secure pending">
                        <i class="fa-solid fa-clock"></i>
                        Link pembelian sedang disiapkan
                    </span>
                `;


            /* ---------- kartu ---------- */

            return `

                <article class="product-card">


                    <div class="product-image">

                        <img
                            src="${product.image}"
                            alt="${product.name}"
                            loading="lazy"
                        >

                        <span
                            class="product-badge ${product.isFree ? "free" : "premium"}"
                        >
                            ${badgeText}
                        </span>

                        ${discountHTML}

                    </div>


                    <div class="product-content">


                        <span class="product-category">
                            ${product.category}
                        </span>


                        <h3>
                            ${product.name}
                        </h3>


                        <p>
                            ${product.description}
                        </p>


                        ${optionsHTML}

                        ${featuresHTML}


                        <div class="product-bottom">


                            <div class="product-price-wrapper">
                                ${priceHTML}
                            </div>


                            <a
                                ${linkAttributes}
                                class="product-btn"
                                data-product-id="${product.id}"
                                data-product-name="${product.name}"
                                data-product-available="${productAvailable}"
                            >

                                ${buttonText}

                                <i class="fa-solid fa-arrow-right"></i>

                            </a>


                        </div>


                        ${noteHTML}

                        ${crossSellHTML}


                    </div>


                </article>

            `;

        }).join("");


    /* AOS: kartu baru tetap tampil walau sudah lewat animasi */

    if (window.AOS && typeof window.AOS.refresh === "function") {
        window.AOS.refresh();
    }

}


/* =========================================================
   FILTER PRODUCTS
========================================================= */

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const filter =
            button.dataset.filter || "all";

        renderProducts(filter);

    });

});


/* =========================================================
   KLIK TOMBOL BELI
========================================================= */

document.addEventListener(
    "click",
    function (event) {


        /* ---------- cross sell ---------- */

        const crossSell =
            event.target.closest("[data-scroll-to-product]");

        if (crossSell) {

            /* pastikan filter kembali ke "All" supaya
               produk yang dituju pasti tampil */

            const allButton =
                document.querySelector(
                    '.filter-btn[data-filter="all"]'
                );

            if (allButton &&
                !allButton.classList.contains("active")) {
                allButton.click();
            }


            const section =
                document.getElementById("products");

            if (section) {
                section.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

            return;
        }


        /* ---------- tombol beli ---------- */

        const productButton =
            event.target.closest(".product-btn");

        if (!productButton) {
            return;
        }


        const isAvailable =
            productButton.dataset.productAvailable === "true";


        if (!isAvailable) {

            event.preventDefault();
            event.stopPropagation();

            const productName =
                productButton.dataset.productName ||
                "Produk ini";

            showToast(
                productName +
                " belum tersedia. Link pembelian sedang disiapkan."
            );

            return false;
        }

    },
    true
);


/* =========================================================
   INITIAL PRODUCTS
========================================================= */

renderProducts("all");
