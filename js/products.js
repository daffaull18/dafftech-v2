/* =========================================================
   DAFFTECH - PRODUCTS DATA
========================================================= */

const products = [

    /* =====================================================
       1. PORTFOLIO TEMPLATE
       PREMIUM + FREE SEMENTARA
    ===================================================== */

    {
        id: 1,
        name: "Portfolio Template",
        category: "Template",

        type: "premium",

        price: 0,
        originalPrice: "Rp35.000",

        isFree: true,
        badge: "FREE",

        description:
            "5 modern portfolio website templates in one collection. Responsive, clean, customizable, and ready to use for designers, developers, freelancers, students, and digital creators.",

        image: "images/products/portfolio-template.png",

        features: [
            "5 Modern Portfolio Templates",
            "Responsive Desktop & Mobile",
            "HTML, CSS & JavaScript",
            "Easy to Customize",
            "Clean & Organized Structure",
            "README Documentation"
        ],

        link: "http://lynk.id/dafftech/p904wg2nlrmk",

        buttonText: "Get Free",

        available: true
    },


    /* =====================================================
       2. WEBSITE TEMPLATE
    ===================================================== */

    {
        id: 2,
        name: "Website Template",
        category: "Template",

        type: "premium",

        originalPrice: "Rp79.000",
        price: "Rp35.000",

        description:
            "Paket 5 template website modern untuk kebutuhan personal maupun bisnis.",

        image: "images/products/website-template.png",

        link: "http://lynk.id/dafftech/34e06d8zokx9",

        buttonText: "Buy Now",

        available: true
    },


    /* =====================================================
       3. E-BOOK PROGRAMMING
    ===================================================== */

    {
        id: 3,
        name: "E-Book Programming",
        category: "E-Book",

        type: "premium",

        originalPrice: "Rp399.000",
        price: "Rp99.000",

        description:
            "Panduan programming dasar untuk kamu yang ingin mulai coding.",

        image: "images/products/ebook-programming.png",

        link: "http://lynk.id/dafftech/emq835q8xovj",
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

        type: "premium",

        originalPrice: "Rp500.000",
        price: "Rp159.000",

        description:
            "Kumpulan tools dan resources AI untuk meningkatkan produktivitas.",

        image: "images/products/ai-tools.png",

        link: "#",

        buttonText: "Buy Now",

        available: false
    },


    /* =====================================================
       5. MODERN UI KIT
    ===================================================== */

    {
        id: 5,
        name: "Modern UI Kit",
        category: "UI Design",

        type: "premium",

        originalPrice: "Rp100.000",
        price: "Rp50.000",

        description:
            "Kumpulan komponen UI modern untuk kebutuhan desain digital.",

        image: "images/products/ui-kit.png",

        link: "#",

        buttonText: "Buy Now",

        available: false
    },


    /* =====================================================
       6. DIGITAL CREATOR BUNDLE
    ===================================================== */

    {
        id: 6,
        name: "Digital Creator Bundle",
        category: "Bundle",

        type: "premium",

        originalPrice: "Rp500.000",
        price: "Rp100.000",

        description:
            "Bundle resources digital untuk creator, designer, dan developer.",

        image: "images/products/digital-bundle.png",

        link: "#",

        buttonText: "Buy Now",

        available: false
    }

];


/* =========================================================
   PRODUCTS ELEMENT
========================================================= */

const productsGrid =
    document.getElementById("products-grid");

const filterButtons =
    document.querySelectorAll(".filter-btn");


/* =========================================================
   RENDER PRODUCTS
========================================================= */

function renderProducts(filter = "all") {

    if (!productsGrid) {
        return;
    }


    /* =====================================================
       FILTER LOGIC
    ===================================================== */

    const filteredProducts =
        filter === "all"
            ? products
            : filter === "free"
                ? products.filter(product => product.isFree === true)
                : filter === "premium"
                    ? products.filter(product => product.type === "premium")
                    : products.filter(product => product.type === filter);


    /* =====================================================
       EMPTY PRODUCTS
    ===================================================== */

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
       CREATE PRODUCT CARD
    ===================================================== */

    productsGrid.innerHTML =
        filteredProducts.map(product => {


            /* =================================================
               BADGE
            ================================================= */

            const badgeText =
                product.isFree
                    ? "FREE"
                    : "PREMIUM";


            /* =================================================
               BUTTON TEXT
            ================================================= */

            const buttonText =
                product.buttonText ||
                (
                    product.isFree
                        ? "Get Free"
                        : "Buy Now"
                );


            /* =================================================
               CHECK PRODUCT LINK
            ================================================= */

            const productAvailable =
                product.available === true &&
                product.link &&
                product.link !== "#";


            /* =================================================
               LINK ATTRIBUTE
            ================================================= */

            const linkAttributes =
                productAvailable
                    ? `
                        href="${product.link}"
                        target="_blank"
                        rel="noopener noreferrer"
                      `
                    : `
                        href="#"
                      `;


            /* =================================================
               PRICE
            ================================================= */

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

                `;

            }


            /* =================================================
               PRODUCT CARD
            ================================================= */

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


                    </div>


                </article>

            `;

        }).join("");

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
   HANDLE UNAVAILABLE PRODUCT
========================================================= */

document.addEventListener(
    "click",
    function (event) {


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


            alert(
                "🚀 " +
                productName +
                " belum tersedia.\n\n" +
                "Produk sedang dalam tahap persiapan.\n" +
                "Link pembelian akan segera tersedia."
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