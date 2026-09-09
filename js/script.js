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

                    /* Load EmailJS SDK if it is not loaded yet */

                    if (!window.emailjs) {

                        await new Promise(
                            (resolve, reject) => {

                                const script =
                                    document.createElement("script");

                                script.src =
                                    "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";

                                script.onload =
                                    resolve;

                                script.onerror =
                                    reject;

                                document.head.appendChild(
                                    script
                                );

                            }
                        );

                    }


                    /* Initialize EmailJS */

                    emailjs.init({
                        publicKey:
                            "SJ70N4sQOA7hLTaYO"
                    });


                    /* Data sent to EmailJS template */

                    const templateParams = {

                        name: name,
                        email: email,
                        subject: subject,
                        message: message

                    };


                    /* Send email */

                    await emailjs.send(
                        "service_ieexk0e",
                        "template_z3p8ihr",
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
========================================= */

const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {

    // Cek tema yang pernah dipilih
    const savedTheme = localStorage.getItem("dafftech-theme");

    if (savedTheme !== "dark") {
        document.body.classList.add("light-mode");
        themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
        document.body.classList.add("dark-mode");
    }

    /// Tombol toggle
    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("light-mode");
        document.body.classList.toggle("dark-mode");

        const isLightMode =
            document.body.classList.contains("light-mode");

        themeToggle.innerHTML = isLightMode
            ? '<i class="fa-solid fa-sun"></i>'
            : '<i class="fa-solid fa-moon"></i>';

        // Ganti logo sesuai mode
        const logo = document.getElementById("sitelogo");

        if (logo) {
            logo.src = isLightMode
                ? "images/logo-light.png"
                : "images/logo.png";
        }

        localStorage.setItem(
            "dafftech-theme",
            isLightMode ? "light" : "dark"
        );
    });
}