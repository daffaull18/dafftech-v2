/* =========================================================
   DAFFTECH - GET /api/health  (Vercel Serverless Function)
   ---------------------------------------------------------
   Pemeriksaan cepat apakah backend aktif dan env sudah
   terisi. Tidak ada data sensitif yang dikembalikan.
   ========================================================= */

module.exports = (req, res) => {
    const configured = Boolean(
        process.env.EMAILJS_PUBLIC_KEY &&
        process.env.EMAILJS_SERVICE_ID &&
        process.env.EMAILJS_TEMPLATE_ID
    );

    res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
    res.end(JSON.stringify({
        ok: true,
        service: "dafftech-api",
        email_configured: configured,
        time: new Date().toISOString(),
    }));
};
