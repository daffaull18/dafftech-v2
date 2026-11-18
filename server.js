/* Server preview lokal untuk melihat DAFFTECH sebelum di-push.
   Jalankan:  node server.js   lalu buka http://localhost:8080/ */

const http = require("http");
const fs = require("fs");
const path = require("path");

const ROOT = "C:/Users/user/OneDrive/Desktop/project Dinzz/dafftech-v2";
const PORT = process.env.PORT || 8080;

const TYPES = {
    ".html": "text/html; charset=utf-8",
    ".js": "application/javascript; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".webp": "image/webp",
    ".svg": "image/svg+xml",
    ".ico": "image/x-icon",
    ".txt": "text/plain; charset=utf-8",
    ".xml": "application/xml; charset=utf-8",
    ".zip": "application/zip",
    ".json": "application/json; charset=utf-8",
};

http.createServer((req, res) => {
    const urlPath = decodeURIComponent(new URL(req.url, "http://x").pathname);
    const resolved = path.resolve(ROOT, "." + (urlPath === "/" ? "/index.html" : urlPath));

    if (!resolved.toLowerCase().startsWith(path.resolve(ROOT).toLowerCase())) {
        res.writeHead(403).end("forbidden");
        return;
    }

    fs.stat(resolved, (err, stat) => {
        if (err || stat.isDirectory()) {
            res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
            res.end("404 - tidak ditemukan: " + urlPath);
            return;
        }

        res.writeHead(200, {
            "Content-Type": TYPES[path.extname(resolved).toLowerCase()] || "application/octet-stream",
            "Cache-Control": "no-cache",
        });

        fs.createReadStream(resolved).pipe(res);
    });
}).listen(PORT, "127.0.0.1", () => {
    console.log("Preview DAFFTECH berjalan di  http://localhost:" + PORT + "/");
    console.log("Tekan Ctrl+C untuk berhenti.");
});
