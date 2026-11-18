// Build halaman internal DAFFTECH — jalankan: node site/build.mjs
import { writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";

import { katalogPage, detailPages } from "./gen-katalog.mjs";
import { jasaPage, tentangPage, kontakPage, notFoundPage } from "./gen-info.mjs";
import { privasiPage, syaratPage } from "./gen-legal.mjs";
import { blogIndex, blogPostPages } from "./gen-blog.mjs";

const ROOT = "C:/Users/user/OneDrive/Desktop/project Dinzz/dafftech-v2";

const pages = [
    katalogPage(),
    ...detailPages(),
    jasaPage(),
    tentangPage(),
    kontakPage(),
    privasiPage(),
    syaratPage(),
    blogIndex(),
    ...blogPostPages(),
    notFoundPage(),
];

let ok = 0;
for (const p of pages) {
    const file = join(ROOT, p.path);
    mkdirSync(dirname(file), { recursive: true });
    writeFileSync(file, p.html, "utf8");
    const size = (p.html.length / 1024).toFixed(1);
    console.log(`OK  ${p.path}  (${size} KB)`);
    ok++;
}

console.log(`\n${ok} halaman ditulis ke ${ROOT}`);
