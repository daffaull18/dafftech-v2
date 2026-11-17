/* ==================================================
   DAFFTECH - MAIN JAVASCRIPT
================================================== */


/* ==================================================
   DOM READY
================================================== */

document.addEventListener("DOMContentLoaded", () => {


    /* ==================================================
       MOBILE NAVIGATION
    ================================================== */

    const menuBtn =
        document.getElementById("menu-btn");

    const navbar =
        document.getElementById("navbar");


    if (menuBtn && navbar) {

        menuBtn.addEventListener("click", (event) => {

            event.preventDefault();
            event.stopPropagation();

            navbar.classList.toggle("active");

            const isOpen =
                navbar.classList.contains("active");


            menuBtn.setAttribute(
                "aria-expanded",
                String(isOpen)
            );


            menuBtn.innerHTML = isOpen
                ? '<i class="fa-solid fa-xmark"></i>'
                : '<i class="fa-solid fa-bars"></i>';

        });


        const navLinks =
            navbar.querySelectorAll("a");


        navLinks.forEach(link => {

            link.addEventListener("click", () => {

                navbar.classList.remove("active");

                menuBtn.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuBtn.innerHTML =
                    '<i class="fa-solid fa-bars"></i>';

            });

        });

    }


    /* ==================================================
       NAVBAR ACTIVE LINK
    ================================================== */

    const sections =
        document.querySelectorAll("section[id]");

    const navigationLinks =
        document.querySelectorAll(".nav-link");


    function updateActiveNavigation() {

        const scrollPosition =
            window.scrollY + 150;


        sections.forEach(section => {

            const sectionTop =
                section.offsetTop;

            const sectionHeight =
                section.offsetHeight;

            const sectionId =
                section.getAttribute("id");


            if (
                scrollPosition >= sectionTop &&
                scrollPosition < sectionTop + sectionHeight
            ) {

                navigationLinks.forEach(link => {

                    link.classList.remove("active");

                });


                const activeLink =
                    document.querySelector(
                        `.nav-link[href="#${sectionId}"]`
                    );


                if (activeLink) {

                    activeLink.classList.add("active");

                }

            }

        });

    }


    window.addEventListener(
        "scroll",
        updateActiveNavigation
    );


    /* ==================================================
    CONTACT FORM → EMAILJS
 ================================================== */

    const contactForm =
        document.getElementById("contact-form");

    const formStatus =
        document.getElementById("form-status");


    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            async function (event) {

                event.preventDefault();


                const name =
                    document.getElementById("name")?.value.trim() || "";

                const email =
                    document.getElementById("email")?.value.trim() || "";

                const subject =
                    document.getElementById("subject")?.value.trim() || "";

                const message =
                    document.getElementById("message")?.value.trim() || "";


                if (
                    !name ||
                    !email ||
                    !subject ||
                    !message
                ) {

                    if (formStatus) {

                        formStatus.textContent =
                            "Please complete all fields.";

                        formStatus.classList.add(
                            "error"
                        );

                    }

                    return;

                }


                if (formStatus) {

                    formStatus.textContent =
                        "Sending message...";

                    formStatus.classList.remove(
                        "success",
                        "error"
                    );

                }


                try {

                    /* Load & init EmailJS SDK */

                    await ensureEmailJS();


                    const emailConfig =
                        SITE_CONFIG.emailjs || {};


                    /* Data sent to EmailJS template */

                    const templateParams = {

                        name: name,
                        email: email,
                        subject: subject,
                        message: message

                    };


                    /* Send email */

                    await emailjs.send(
                        emailConfig.serviceId,
                        emailConfig.contactTemplateId,
                        templateParams
                    );


                    if (formStatus) {

                        formStatus.textContent =
                            "Message sent successfully!";

                        formStatus.classList.remove(
                            "error"
                        );

                        formStatus.classList.add(
                            "success"
                        );

                    }


                    contactForm.reset();


                } catch (error) {

                    console.error(
                        "EmailJS Error:",
                        error
                    );


                    if (formStatus) {

                        formStatus.textContent =
                            "Failed to send message. Please try again.";

                        formStatus.classList.remove(
                            "success"
                        );

                        formStatus.classList.add(
                            "error"
                        );

                    }

                }

            }
        );

    }


    /* ==================================================
       LOAD EMAILJS SDK (dipakai kontak & newsletter)
    ================================================== */

    async function ensureEmailJS() {

        if (window.emailjs) {
            return window.emailjs;
        }


        await new Promise((resolve, reject) => {

            const script =
                document.createElement("script");

            script.src =
                "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";

            script.onload = resolve;
            script.onerror = reject;

            document.head.appendChild(script);

        });


        const emailConfig =
            SITE_CONFIG.emailjs || {};

        window.emailjs.init({
            publicKey: emailConfig.publicKey || ""
        });


        return window.emailjs;

    }


    /* ==================================================
       NEWSLETTER  ->  EMAIL LIST (daftar langganan)
       --------------------------------------------------
       Pengunjung memasukkan email, datang ke inbox milikmu.
       Bila newsletterTemplateId diisi (template khusus di
       EmailJS), pakai template itu. Kalau masih kosong,
       memakai template kontak yang sudah ada.
    ================================================== */

    const newsletterForm =
        document.getElementById("newsletter-form");

    const newsletterStatus =
        document.getElementById("newsletter-status");


    if (newsletterForm) {

        newsletterForm.addEventListener(
            "submit",
            async function (event) {

                event.preventDefault();


                const emailInput =
                    document.getElementById("newsletter-email");

                const email =
                    emailInput?.value.trim() || "";


                const validEmail =
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);


                if (!validEmail) {

                    if (newsletterStatus) {

                        newsletterStatus.textContent =
                            "Masukkan alamat email yang benar.";

                        newsletterStatus.className =
                            "form-status error";

                    }

                    return;

                }


                if (newsletterStatus) {

                    newsletterStatus.textContent =
                        "Mendaftarkan...";

                    newsletterStatus.className =
                        "form-status";

                }


                try {

                    await ensureEmailJS();


                    const emailConfig =
                        SITE_CONFIG.emailjs || {};


                    await emailjs.send(
                        emailConfig.serviceId,
                        emailConfig.newsletterTemplateId ||
                        emailConfig.contactTemplateId,
                        {
                            name: "(Newsletter)",
                            email: email,
                            subject:
                                "Newsletter signup - " + email,
                            message:
                                "Email baru ingin berlangganan " +
                                "newsletter DAFFTECH: " + email
                        }
                    );


                    if (newsletterStatus) {

                        newsletterStatus.textContent =
                            "Berhasil! Email kamu sudah terdaftar.";

                        newsletterStatus.className =
                            "form-status success";

                    }

                    newsletterForm.reset();

                } catch (error) {

                    console.error(
                        "Newsletter Error:",
                        error
                    );


                    if (newsletterStatus) {

                        newsletterStatus.textContent =
                            "Gagal mendaftar. Coba lagi atau " +
                            "email ke " +
                            (SITE_CONFIG.email || "hello@dafftech.id") +
                            ".";

                        newsletterStatus.className =
                            "form-status error";

                    }

                }

            }
        );

    }


    /* ==================================================
       STICKY CTA (mobile)
       disembunyikan saat pengunjung sudah sampai
       di kontak / footer agar tidak menutupi isi
    ================================================== */

    const stickyCta =
        document.getElementById("sticky-cta");


    if (stickyCta) {

        const hideZones = [
            document.getElementById("contact"),
            document.querySelector(".footer")
        ].filter(Boolean);


        let stickyFrame = false;


        function updateStickyCta() {

            stickyFrame = false;


            const limit =
                window.innerHeight - 60;


            const shouldHide = hideZones.some(zone => {

                const rect =
                    zone.getBoundingClientRect();

                return rect.top < limit;

            });


            stickyCta.classList.toggle(
                "is-hidden",
                shouldHide
            );

        }


        window.addEventListener("scroll", () => {

            if (!stickyFrame) {

                stickyFrame = true;

                requestAnimationFrame(updateStickyCta);

            }

        }, { passive: true });


        window.addEventListener(
            "resize",
            updateStickyCta
        );


        updateStickyCta();

    }


    /* ==================================================
       CURRENT YEAR
    ================================================== */

    const currentYear =
        document.getElementById("current-year");


    if (currentYear) {

        currentYear.textContent =
            new Date().getFullYear();

    }


    /* ==================================================
       SMOOTH SCROLL
    ================================================== */

    document.querySelectorAll(
        '.nav-link[href^="#"],' +
        '.header-btn[href^="#"],' +
        '.hero-buttons a[href^="#"],' +
        '.cta-content a[href^="#"],' +
        '.footer-links a[href^="#"]'
    ).forEach(anchor => {

        anchor.addEventListener(
            "click",
            function (event) {

                const targetId =
                    this.getAttribute("href");


                if (
                    !targetId ||
                    targetId === "#"
                ) {

                    return;

                }


                const target =
                    document.querySelector(targetId);


                if (target) {

                    event.preventDefault();


                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }
        );

    });


    /* ==================================================
       INITIAL ACTIVE NAVIGATION
    ================================================== */

    updateActiveNavigation();

});

/* =========================================
   DAFFTECH DARK / LIGHT MODE
   ----------------------------------------
   aturan warna memakai `body.light-mode`
   sebagai override, jadi mode gelap berarti
   kelas light-mode DILEPAS.
   ========================================= */

const themeToggle =
    document.getElementById("theme-toggle");


function applyTheme(mode) {

    const isLight = mode === "light";


    document.body.classList.toggle(
        "light-mode",
        isLight
    );


    if (themeToggle) {

        themeToggle.innerHTML = isLight
            ? '<i class="fa-solid fa-sun"></i>'
            : '<i class="fa-solid fa-moon"></i>';

    }


    const logo =
        document.getElementById("sitelogo");

    if (logo) {

        logo.src = isLight
            ? "images/logo-mark-ink.png"
            : "images/logo-mark-white.png";

    }


    /* localStorage bisa diblokir browser
       (private mode / tracking protection) */

    try {
        localStorage.setItem(
            "dafftech-theme",
            mode
        );
    } catch (error) {
        /* abaikan */
    }

}


if (themeToggle) {

    let savedTheme = null;

    try {
        savedTheme =
            localStorage.getItem("dafftech-theme");
    } catch (error) {
        savedTheme = null;
    }


    applyTheme(
        savedTheme === "dark" ? "dark" : "light"
    );


    themeToggle.addEventListener("click", () => {

        const isLight =
            document.body.classList.contains(
                "light-mode"
            );

        applyTheme(
            isLight ? "dark" : "light"
        );

    });

}