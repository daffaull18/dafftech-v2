// Generator papan desain SVG untuk UI Kit — siap import ke Figma.
// Jalankan: node make-figma.mjs
import { writeFileSync, mkdirSync } from "node:fs";

const OUT = "C:\\Users\\user\\Documents\\DAFFTECH produk jualan\\UI-KIT\\figma";
mkdirSync(OUT, { recursive: true });

const C = {
    brand50: "#f7f0ff", brand100: "#efe1ff", brand300: "#BF7BF6",
    brand500: "#a254fb", brand700: "#913BD0", brand900: "#4b1273",
    ink900: "#17150f", ink700: "#3d3a33", ink500: "#6c675c", ink300: "#a8a296",
    paper0: "#ffffff", paper50: "#fbf9f4", paper100: "#f1eee7", paper200: "#e4dfd4",
    success: "#1f9d55", warning: "#c47f0a", danger: "#d64545", info: "#2f7fd6",
    darkBg: "#12111a", darkSurface: "#1b1a25", darkBorder: "#2e2c3c",
    darkText: "#f2f1f6", darkMuted: "#a4a1b4",
};

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const T = (x, y, s, o = {}) =>
    `<text x="${x}" y="${y}" font-family="${o.mono ? "JetBrains Mono, Consolas, monospace" : "Inter, Segoe UI, sans-serif"}" font-size="${o.size || 14}" font-weight="${o.weight || 400}" fill="${o.fill || C.ink900}"${o.anchor ? ` text-anchor="${o.anchor}"` : ""}${o.opacity ? ` opacity="${o.opacity}"` : ""}>${esc(s)}</text>`;
const R = (x, y, w, h, o = {}) =>
    `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${o.r || 0}" fill="${o.fill || "none"}"${o.stroke ? ` stroke="${o.stroke}" stroke-width="${o.sw || 1}"` : ""}${o.opacity ? ` opacity="${o.opacity}"` : ""}/>`;
const G = (id, x1, y1, x2, y2, stops) =>
    `<defs><linearGradient id="${id}" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}">${stops.map(([o, c]) => `<stop offset="${o}" stop-color="${c}"/>`).join("")}</linearGradient></defs>`;

function svg(w, h, body) {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
${G("grad", 0, 0, 1, 1, [["0%", C.brand300], ["100%", C.brand700]])}
${R(0, 0, w, h, { fill: C.paper50 })}
${body}
</svg>`;
}

function header(title, sub, w = 1280) {
    return `
${T(48, 56, "DAFFTECH UI KIT", { mono: true, size: 13, fill: C.brand700, weight: 600 })}
${T(48, 96, title, { size: 34, weight: 700 })}
${T(48, 124, sub, { size: 15, fill: C.ink500 })}
${R(48, 148, w - 96, 2, { fill: C.paper200 })}`;
}

function swatch(x, y, label, hex, dark) {
    return `
${R(x, y, 150, 64, { r: 10, fill: hex, stroke: C.paper200, sw: dark ? 0 : 1 })}
${T(x, y + 84, label, { size: 13, weight: 600 })}
${T(x, y + 102, hex, { mono: true, size: 12, fill: C.ink500 })}`;
}

/* ============ PAPAN 1: FOUNDATIONS ============ */
{
    const brand = ["brand-50", "brand-100", "brand-300", "brand-500", "brand-700", "brand-900"];
    const brandHex = [C.brand50, C.brand100, C.brand300, C.brand500, C.brand700, C.brand900];
    const ink = ["ink-900", "ink-700", "ink-500", "ink-300", "paper-0", "paper-50", "paper-100", "paper-200"];
    const inkHex = [C.ink900, C.ink700, C.ink500, C.ink300, C.paper0, C.paper50, C.paper100, C.paper200];
    const status = ["success", "warning", "danger", "info"];
    const statusHex = [C.success, C.warning, C.danger, C.info];
    const darks = ["dark/bg", "dark/surface", "dark/border", "dark/text", "dark/muted", "accent"];
    const darkHex = [C.darkBg, C.darkSurface, C.darkBorder, C.darkText, C.darkMuted, C.brand300];

    let b = header("Foundations", "Warna, tipografi, ruang, dan sudut — sumber kebenaran desain (v1.0.0)", 1440);

    brand.forEach((n, i) => (b += swatch(48 + i * 170, 190, n, brandHex[i])));
    b += T(48, 330, "GRADASI MEREK — linear-gradient(160deg, #BF7BF6 0%, #913BD0 100%)", { mono: true, size: 12, fill: C.ink500 });

    ink.forEach((n, i) => (b += swatch(48 + i * 170, 370, n, inkHex[i], i > 3)));
    b += T(48, 520, "STATUS", { mono: true, size: 12, fill: C.brand700, weight: 600 });
    status.forEach((n, i) => (b += swatch(48 + i * 170, 540, n, statusHex[i])));
    b += T(48, 680, "MODE GELAP — [data-theme=\"dark\"]", { mono: true, size: 12, fill: C.brand700, weight: 600 });
    darks.forEach((n, i) => (b += swatch(48 + i * 170, 700, n, darkHex[i], true)));

    // tipografi
    b += T(48, 870, "TIPOGRAFI — Inter (sans) · JetBrains Mono (mono)", { mono: true, size: 13, fill: C.brand700, weight: 600 });
    const fs = [["3xl", 36, 700], ["2xl", 28, 700], ["xl", 22, 600], ["lg", 18, 600], ["base", 16, 400], ["sm", 14, 400], ["xs", 12, 400]];
    let ty = 914;
    fs.forEach(([n, px, w]) => {
        b += T(48, ty, `Aa — ${n} · ${px}px / ${w}`, { size: 13, fill: C.ink500, mono: true });
        b += T(320, ty, "Membaca teks dengan nyaman", { size: px, weight: w });
        ty += px + 22;
    });

    writeFileSync(`${OUT}\\01-foundations.svg`, svg(1440, 1300, b));
}

/* ============ PAPAN 2: TOMBOL ============ */
{
    let b = header("Buttons — dt-btn", "4 varian × 3 ukuran + block · radius 6 / 10 / 16 px");
    const variants = [
        ["primary", "url(#grad)", "#ffffff", null],
        ["secondary", C.ink900, "#ffffff", null],
        ["outline", C.paper0, C.ink900, C.paper200],
        ["ghost", "none", C.brand700, null],
    ];
    const sizes = [["sm", 32, 14, 12, 6], ["base", 40, 18, 14, 10], ["lg", 48, 28, 16, 16]];
    let y = 190;
    variants.forEach(([vn, fill, fg, stroke]) => {
        b += T(48, y + 26, `--${vn}`, { mono: true, size: 13, weight: 600, fill: C.ink500 });
        let x = 220;
        sizes.forEach(([sn, h, px, py, r]) => {
            const w = px * 2 + 46;
            b += R(x, y, w, h, { r, fill, stroke: stroke || undefined, sw: 1 });
            b += T(x + w / 2, y + h / 2 + 5, "Button", { size: sn === "sm" ? 12 : 14, weight: 600, fill: fg, anchor: "middle" });
            b += T(x + w / 2, y + h + 18, sn, { mono: true, size: 11, fill: C.ink300, anchor: "middle" });
            x += w + 40;
        });
        y += 96;
    });
    // block
    b += T(48, y + 26, "--block", { mono: true, size: 13, weight: 600, fill: C.ink500 });
    b += R(220, y, 700, 48, { r: 16, fill: "url(#grad)" });
    b += T(570, y + 30, "Button block — lebar penuh", { size: 16, weight: 600, fill: "#ffffff", anchor: "middle" });
    writeFileSync(`${OUT}\\02-buttons.svg`, svg(1280, y + 140, b));
}

/* ============ PAPAN 3: FORM ============ */
{
    let b = header("Form — dt-field", "Input, textarea, select, hint, dan status error");
    const field = (x, y, label, ph, state) => {
        let s = T(x, y, label, { size: 14, weight: 500 });
        const stroke = state === "error" ? C.danger : state === "focus" ? C.brand700 : C.paper200;
        s += R(x, y + 12, 340, 44, { r: 8, fill: C.paper0, stroke, sw: state === "focus" ? 2 : 1 });
        if (state === "focus") s += R(x - 4, y + 8, 348, 52, { r: 11, fill: "none", stroke: C.brand300, sw: 3, opacity: 0.35 });
        s += T(x + 14, y + 40, ph, { size: 15, fill: state === "error" ? C.ink300 : C.ink300 });
        s += T(x, y + 76, state === "error" ? "Error message — periksa lagi isian" : "Hint text — bantuan singkat", { size: 12, fill: state === "error" ? C.danger : C.ink500 });
        return s;
    };
    b += field(48, 190, "Label", "Placeholder", "default");
    b += field(438, 190, "Label", "Sedang fokus", "focus");
    b += field(828, 190, "Label", "Nilai keliru", "error");

    // textarea
    b += T(48, 320, "Label", { size: 14, weight: 500 });
    b += R(48, 332, 340, 120, { r: 8, fill: C.paper0, stroke: C.paper200 });
    b += T(62, 360, "Textarea — teks panjang", { size: 15, fill: C.ink300 });

    // select
    b += T(438, 320, "Label", { size: 14, weight: 500 });
    b += R(438, 332, 340, 44, { r: 8, fill: C.paper0, stroke: C.paper200 });
    b += T(452, 360, "Pilih opsi", { size: 15, fill: C.ink900 });
    b += `<path d="M752 350 l10 10 l10 -10" fill="none" stroke="${C.ink500}" stroke-width="2" stroke-linecap="round"/>`;

    // switch dipakai di papan 4 — tulis keterangan status
    b += T(828, 320, "Status warna field", { size: 14, weight: 500 });
    [["default", C.paper200], ["focus", C.brand700], ["error", C.danger]].forEach(([n, cc], i) => {
        b += R(828, 340 + i * 36, 20, 20, { r: 5, fill: cc });
        b += T(858, 356 + i * 36, `${n} — ${cc}`, { mono: true, size: 13, fill: C.ink500 });
    });

    writeFileSync(`${OUT}\\03-forms.svg`, svg(1280, 520, b));
}

/* ============ PAPAN 4: DATA DISPLAY ============ */
{
    let b = header("Badges, Chips, Cards, Switch & Rows", "Komponen data dan status");

    // badges
    b += T(48, 196, "dt-badge", { mono: true, size: 13, weight: 600, fill: C.brand700 });
    const badges = [["default", C.paper100, C.ink700], ["brand", "url(#grad)", "#ffffff"], ["success", "#e6f6ec", C.success], ["warning", "#fdf3e0", C.warning], ["danger", "#fbeaea", C.danger]];
    let x = 48;
    badges.forEach(([n, f, fg]) => {
        const w = n.length * 8 + 28;
        b += R(x, 212, w, 28, { r: 999, fill: f, stroke: n === "default" ? C.paper200 : undefined });
        b += T(x + w / 2, 231, n, { size: 13, weight: 600, fill: fg, anchor: "middle" });
        x += w + 16;
    });

    // chips
    b += T(48, 296, "dt-chip", { mono: true, size: 13, weight: 600, fill: C.brand700 });
    x = 48;
    [["Filter", false], ["Aktif", true], ["Lainnya", false]].forEach(([n, on]) => {
        const w = n.length * 8 + 30;
        b += R(x, 312, w, 32, { r: 999, fill: on ? "url(#grad)" : C.paper0, stroke: on ? undefined : C.paper200 });
        b += T(x + w / 2, 333, n, { size: 13, weight: 600, fill: on ? "#ffffff" : C.ink700, anchor: "middle" });
        x += w + 16;
    });

    // switch
    b += T(48, 396, "dt-switch — 46 × 27", { mono: true, size: 13, weight: 600, fill: C.brand700 });
    b += R(48, 412, 46, 27, { r: 999, fill: C.paper200 });
    b += `<circle cx="61.5" cy="425.5" r="10" fill="#ffffff"/>`;
    b += R(118, 412, 46, 27, { r: 999, fill: "url(#grad)" });
    b += `<circle cx="152.5" cy="425.5" r="10" fill="#ffffff"/>`;
    b += T(184, 431, "off  /  on", { mono: true, size: 13, fill: C.ink500 });

    // cards
    b += T(48, 506, "dt-card", { mono: true, size: 13, weight: 600, fill: C.brand700 });
    const card = (cx, title, brand) => `
        ${R(cx, 522, 330, 170, { r: 16, fill: C.paper0, stroke: C.paper200 })}
        ${brand ? R(cx, 522, 330, 4, { r: 2, fill: "url(#grad)" }) : ""}
        ${T(cx + 20, 560, title, { size: 18, weight: 600 })}
        ${T(cx + 20, 588, "Teks pendek menjelaskan isi kartu", { size: 14, fill: C.ink500 })}
        ${T(cx + 20, 608, "dalam dua baris yang ringkas.", { size: 14, fill: C.ink500 })}
        ${R(cx + 20, 644, 92, 34, { r: 8, fill: C.ink900 })}
        ${T(cx + 66, 666, "Aksi", { size: 13, weight: 600, fill: "#ffffff", anchor: "middle" })}
        ${T(cx + 310, 666, "→", { size: 16, fill: C.brand700, anchor: "end" })}`;
    b += card(48, "Kartu biasa", false);
    b += card(418, "Kartu hover", false);
    b += card(788, "Kartu brand", true);
    b += T(48, 716, "default", { mono: true, size: 11, fill: C.ink300, anchor: "middle" }).replace('x="48"', 'x="213"');
    b += T(583, 716, "hover — angkat 3px + bayangan", { mono: true, size: 11, fill: C.ink300, anchor: "middle" });
    b += T(953, 716, "brand — pita gradasi atas", { mono: true, size: 11, fill: C.ink300, anchor: "middle" });

    // rows
    b += T(48, 776, "dt-row — daftar", { mono: true, size: 13, weight: 600, fill: C.brand700 });
    const row = (y, title, sub, end) => `
        ${R(48, y, 700, 56, { r: 10, fill: C.paper0, stroke: C.paper200 })}
        <circle cx="78" cy="${y + 28}" r="14" fill="${C.brand100}"/>
        ${T(78, y + 33, "•", { size: 16, fill: C.brand700, anchor: "middle" })}
        ${T(104, y + 25, title, { size: 14, weight: 600 })}
        ${T(104, y + 43, sub, { size: 12, fill: C.ink500 })}
        ${T(726, y + 33, end, { mono: true, size: 13, fill: C.ink500, anchor: "end" })}`;
    b += row(792, "Judul baris", "Subjudul keterangan singkat", "Rp0");
    b += row(856, "Baris kedua", "Tetap sama, tinggal ganti teks", "Rp50.000");

    writeFileSync(`${OUT}\\04-components.svg`, svg(1280, 950, b));
}

console.log("OK 4 SVG dibuat di " + OUT);
