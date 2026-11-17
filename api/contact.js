/* =========================================================
   DAFFTECH - POST /api/contact  (Vercel Serverless Function)
   ---------------------------------------------------------
   Menerima pesan dari form kontak, lalu meneruskannya ke
   EmailJS memakai environment variable:
     EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID,
     EMAILJS_TEMPLATE_ID
   Bila env belum diisi -> 200 { ok:false, code:"config_required" }
   (klien jatuh ke EmailJS dari browser, form TIDAK pernah
   berbohong bilang "terkirim" bila memang gagal).
   ========================================================= */

const REQUIRED = ["name", "email", "message"];

function bad(res, status, code, message) {
    res.writeHead(status, { "Content-Type": "application/json; charset=utf-8" });
    res.end(JSON.stringify({ ok: false, code, message }));
}

module.exports = async (req, res) => {
    if (req.method !== "POST") {
        return bad(res, 405, "method_not_allowed", "Gunakan POST.");
    }

    let body = req.body;
    if (typeof body === "string") {
        try { body = JSON.parse(body); } catch (e) { body = null; }
    }
    if (!body || typeof body !== "object") {
        return bad(res, 400, "bad_request", "Body tidak valid.");
    }

    for (const key of REQUIRED) {
        if (typeof body[key] !== "string" || !body[key].trim()) {
            return bad(res, 422, "validation", "Mohon lengkapi nama, email, dan pesan.");
        }
    }

    const email = body.email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return bad(res, 422, "validation", "Format email belum benar.");
    }

    /* pesan teks yang tidak terlalu panjang (batas EmailJS: 100KB aman) */
    const message = body.message.trim().slice(0, 5000);
    const name = body.name.trim().slice(0, 120);
    const subject = String(body.subject || "Pesan dari situs DAFFTECH").slice(0, 160);

    const pk = process.env.EMAILJS_PUBLIC_KEY;
    const sid = process.env.EMAILJS_SERVICE_ID;
    const tid = process.env.EMAILJS_TEMPLATE_ID;

    if (!pk || !sid || !tid) {
        /* konfigurasi server belum lengkap -> klien pakai EmailJS browser */
        return res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" })
            .end(JSON.stringify({ ok: false, code: "config_required" }));
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
                    from_name: name,
                    reply_to: email,
                    subject: subject,
                    message: message,
                    page: String(body.page || "/kontak.html").slice(0, 120),
                },
            }),
        });

        if (!r.ok) {
            const text = await r.text();
            console.error("EmailJS:", r.status, text.slice(0, 300));
            return bad(res, 502, "upstream_error", "Gateway email menolak pesan.");
        }

        res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
        res.end(JSON.stringify({ ok: true, via: "emailjs" }));
    } catch (err) {
        console.error("contact:", err && err.message);
        bad(res, 500, "server_error", "Kesalahan server saat mengirim.");
    }
};
