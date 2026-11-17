/* =========================================================
   DAFFTECH - FORM HANDLING (halaman internal)
   ---------------------------------------------------------
   Urutan pengiriman:
   1. POST ke /api/*  -> jalan saat site di-deploy ke Vercel
      (backend serverless yang sesungguhnya)
   2. Gagal / 404 (mis. masih di GitHub Pages) -> EmailJS
      (langsung dari browser, sudah dikonfigurasi di config.js)
   3. Keduanya gagal -> pesan jujur + tautan email.
   Tidak pernah menampilkan "terkirim" bila tidak benar-benar
   terkirim.
   ========================================================= */

(function () {
    "use strict";

    /* ---------- util ---------- */

    function setStatus(el, message, kind) {
        if (!el) return;
        el.textContent = message;
        el.className = "form-status" + (kind ? " " + kind : "");
    }

    function loadEmailJS() {
        if (window.emailjs) return Promise.resolve(window.emailjs);
        return new Promise(function (resolve, reject) {
            var s = document.createElement("script");
            s.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
            s.onload = function () {
                var cfg = (window.SITE_CONFIG || {}).emailjs || {};
                if (!cfg.publicKey || !cfg.serviceId) {
                    reject(new Error("emailjs-not-configured"));
                    return;
                }
                window.emailjs.init({ publicKey: cfg.publicKey });
                resolve(window.emailjs);
            };
            s.onerror = function () { reject(new Error("emailjs-load-failed")); };
            document.head.appendChild(s);
        });
    }

    /* kirim lewat backend (Vercel), true bila backend menjawab */
    async function postToApi(endpoint, payload) {
        try {
            var res = await fetch(endpoint, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });
            var data = null;
            try { data = await res.json(); } catch (e) { data = null; }
            if (res.ok && data && data.ok) return { ok: true, via: "api" };
            /* backend ada tapi belum dikonfigurasi -> jatuh ke EmailJS */
            if (data && data.code === "config_required") return { ok: false, fallback: true };
            return { ok: false, fallback: true };
        } catch (e) {
            /* di GitHub Pages endpoint ini 404 -> fallback */
            return { ok: false, fallback: true };
        }
    }

    async function sendViaEmailJS(templateId, params) {
        var js = await loadEmailJS();
        var cfg = (window.SITE_CONFIG || {}).emailjs || {};
        await js.send(cfg.serviceId, templateId || cfg.contactTemplateId, params);
        return true;
    }

    /* =========================================================
       FORM KONTAK
    ========================================================= */

    var contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", async function (event) {
            event.preventDefault();

            var status = document.getElementById("form-status");
            var btn = contactForm.querySelector('button[type="submit"]');

            var payload = {
                name: (contactForm.name && contactForm.name.value || "").trim(),
                email: (contactForm.email && contactForm.email.value || "").trim(),
                subject: (contactForm.subject && contactForm.subject.value || "").trim(),
                message: (contactForm.message && contactForm.message.value || "").trim(),
                page: location.pathname,
            };

            if (!payload.name || !payload.email || !payload.message) {
                setStatus(status, "Mohon lengkapi nama, email, dan pesan.", "error");
                return;
            }
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
                setStatus(status, "Format email belum benar.", "error");
                return;
            }

            if (btn) { btn.disabled = true; btn.textContent = "Mengirim..."; }
            setStatus(status, "Sedang mengirim pesanmu...");

            var viaApi = await postToApi("/api/contact", payload);

            if (viaApi.ok) {
                contactForm.reset();
                setStatus(status, "Pesan terkirim. Terima kasih — kami membalas secepatnya.", "ok");
            } else {
                try {
                    await sendViaEmailJS(null, {
                        from_name: payload.name,
                        reply_to: payload.email,
                        subject: payload.subject || "Pesan dari situs DAFFTECH",
                        message: payload.message,
                    });
                    contactForm.reset();
                    setStatus(status, "Pesan terkirim. Terima kasih — kami membalas secepatnya.", "ok");
                } catch (err) {
                    setStatus(
                        status,
                        "Pengiriman gagal sementara. Silakan email langsung ke " +
                            ((window.SITE_CONFIG || {}).email || "hello@dafftech.id") + ".",
                        "error"
                    );
                }
            }

            if (btn) { btn.disabled = false; btn.textContent = "Kirim pesan"; }
        });
    }

    /* =========================================================
       NEWSLETTER
    ========================================================= */

    var newsletterForm = document.getElementById("newsletter-form");
    if (newsletterForm) {
        newsletterForm.addEventListener("submit", async function (event) {
            event.preventDefault();

            var status = document.getElementById("newsletter-status");
            var input = document.getElementById("newsletter-email");
            var email = input ? input.value.trim() : "";

            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                setStatus(status, "Masukkan email yang valid.", "error");
                return;
            }

            setStatus(status, "Mendaftarkan...");

            var viaApi = await postToApi("/api/subscribe", { email: email });

            if (viaApi.ok) {
                newsletterForm.reset();
                setStatus(status, "Terdaftar! Cek inbox untuk konfirmasi.", "ok");
                return;
            }

            try {
                var cfg = (window.SITE_CONFIG || {}).emailjs || {};
                await sendViaEmailJS(cfg.newsletterTemplateId || cfg.contactTemplateId, {
                    from_name: "Newsletter DAFFTECH",
                    reply_to: email,
                    subject: "Pendaftaran newsletter DAFFTECH",
                    message: "Email pendaftar: " + email,
                });
                newsletterForm.reset();
                setStatus(status, "Terdaftar! Cek inbox untuk konfirmasi.", "ok");
            } catch (err) {
                setStatus(status, "Pendaftaran gagal sementara. Coba lagi atau email kami.", "error");
            }
        });
    }

})();
