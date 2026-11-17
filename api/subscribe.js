/* =========================================================
   DAFFTECH - POST /api/subscribe  (Vercel Serverless Function)
   ---------------------------------------------------------
   Menerima pendaftaran newsletter lalu meneruskannya ke
   EmailJS (EMAILJS_NEWSLETTER_TEMPLATE_ID bila diisi,
   selain itu pakai EMAILJS_TEMPLATE_ID).
   Env belum lengkap -> { ok:false, code:"config_required" }
   supaya klien memakai jalur EmailJS browser.
   ========================================================= */

module.exports = async (req, res) => {
    const send = (status, obj) => {
        res.writeHead(status, { "Content-Type": "application/json; charset=utf-8" });
        res.end(JSON.stringify(obj));
    };

    if (req.method !== "POST") return send(405, { ok: false, code: "method_not_allowed" });

    let body = req.body;
    if (typeof body === "string") {
        try { body = JSON.parse(body); } catch (e) { body = null; }
    }

    const email = body && typeof body.email === "string" ? body.email.trim() : "";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return send(422, { ok: false, code: "validation", message: "Masukkan email yang valid." });
    }

    const pk = process.env.EMAILJS_PUBLIC_KEY;
    const sid = process.env.EMAILJS_SERVICE_ID;
    const tid = process.env.EMAILJS_NEWSLETTER_TEMPLATE_ID || process.env.EMAILJS_TEMPLATE_ID;

    if (!pk || !sid || !tid) {
        return send(200, { ok: false, code: "config_required" });
    }

    try {
        const r = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                service_id: sid,
                template_id: tid,
                user_id: pk,
                template_params: {
                    from_name: "Newsletter DAFFTECH",
                    reply_to: email,
                    subject: "Pendaftaran newsletter DAFFTECH",
                    message: "Email pendaftar: " + email,
                    page: "/newsletter",
                },
            }),
        });

        if (!r.ok) {
            console.error("EmailJS subscribe:", r.status, (await r.text()).slice(0, 300));
            return send(502, { ok: false, code: "upstream_error" });
        }

        send(200, { ok: true, via: "emailjs" });
    } catch (err) {
        console.error("subscribe:", err && err.message);
        send(500, { ok: false, code: "server_error" });
    }
};
