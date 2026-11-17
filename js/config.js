/* =========================================================
   DAFFTECH - SITE CONFIG (MONETIZATION)
   ---------------------------------------------------------
   Satu tempat untuk semua pengaturan cuan.

   isi nilai di bawah ini, kosongkan jika belum punya.
   nilai kosong = fitur OTOMATIS TIDAK AKTIF
   (tidak ada iklan rusak, tidak ada error, tidak ada ID palsu)
   ========================================================= */


const SITE_CONFIG = {


    /* =====================================================
       1. TOKO / LINK PEMBELIAN
       -----------------------------------------------------
       Dipakai semua produk berbayar yang belum punya
       link khusus di js/products.js
    ===================================================== */

    storeUrl: "https://lynk.id/dafftech",


    /* =====================================================
       2. GOOGLE ADSENSE
       -----------------------------------------------------
       cara mengisi:
       - client : "ca-pub-xxxxxxxxxxxxxxxx" (dasbor AdSense,
                  menu Account > Account information)
       - slot   : nomor slot iklan dari menu Ads > By ad unit

       SELAMA KOSONG -> slot iklan tidak dirender sama sekali.
    ===================================================== */

    adsense: {
        client: "",
        slot: ""
    },


    /* =====================================================
       3. GOOGLE ANALYTICS 4 (untuk tahu pengunjung & produk
       mana yang paling banyak diklik)
       -----------------------------------------------------
       isi "G-XXXXXXXXXX" dari analytics.google.com
       SELAMA KOSONG -> skrip analytics tidak dimuat.
    ===================================================== */

    analyticsId: "",


    /* =====================================================
       4. EMAILJS (dipakai form kontak & newsletter)
       -----------------------------------------------------
       publicKey & serviceId sudah aktif milik akunmu.
       contactTemplateId = template email kontak (sudah ada).
       newsletterTemplateId = template khusus newsletter,
       buat dulu di dashboard EmailJS lalu isi id-nya.
       SELAMA KOSONG -> newsletter memakai template kontak.
    ===================================================== */

    emailjs: {
        publicKey: "SJ70N4sQOA7hLTaYO",
        serviceId: "service_ieexk0e",
        contactTemplateId: "template_z3p8ihr",
        newsletterTemplateId: ""
    },


    /* =====================================================
       5. KONTAK
    ===================================================== */

    email: "hello@dafftech.id"

};


/* =========================================================
   ADSENSE LOADER
   hanya jalan jika client + slot sudah diisi
   ========================================================= */

function initAdSense() {

    const { client, slot } = SITE_CONFIG.adsense || {};
    const adBoxes = document.querySelectorAll(".ad-slot");


    /* belum dikonfigurasi -> sembunyikan slot iklan
       supaya tidak ada kotak kosong di halaman */

    if (!client || !slot) {

        adBoxes.forEach(box => {
            box.hidden = true;
        });

        return;

    }


    if (!document.querySelector('script[data-dafftech-adsense]')) {

        const script = document.createElement("script");

        script.async = true;
        script.crossOrigin = "anonymous";
        script.dataset.dafftechAdsense = "true";
        script.src =
            "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=" +
            encodeURIComponent(client);

        document.head.appendChild(script);

    }


    adBoxes.forEach(box => {

        box.hidden = false;

        box.innerHTML = `
            <ins class="adsbygoogle"
                 style="display:block"
                 data-ad-client="${client}"
                 data-ad-slot="${slot}"
                 data-ad-format="auto"
                 data-full-width-responsive="true">
            </ins>
        `;

        try {

            (window.adsbygoogle = window.adsbygoogle || [])
                .push({});

        } catch (error) {
            console.warn("AdSense:", error);
        }

    });

}


/* =========================================================
   GOOGLE ANALYTICS LOADER
   hanya jalan jika analyticsId sudah diisi
   ========================================================= */

function initAnalytics() {

    const id = SITE_CONFIG.analyticsId;

    if (!id) {
        return;
    }


    if (document.querySelector('script[data-dafftech-ga]')) {
        return;
    }


    const script = document.createElement("script");

    script.async = true;
    script.dataset.dafftechGa = "true";
    script.src =
        "https://www.googletagmanager.com/gtag/js?id=" +
        encodeURIComponent(id);

    document.head.appendChild(script);


    window.dataLayer = window.dataLayer || [];

    window.gtag = function () {
        window.dataLayer.push(arguments);
    };

    window.gtag("js", new Date());
    window.gtag("config", id, { anonymize_ip: true });

}


/* =========================================================
   INIT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    initAdSense();
    initAnalytics();

});
