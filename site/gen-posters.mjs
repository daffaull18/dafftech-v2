// Generator poster produk DAFFTECH — memakai screenshot produk ASLI
import { writeFileSync, mkdirSync } from "node:fs";
import { POSTS } from "./posters-data.mjs";

const DIR = "C:\\Users\\user\\OneDrive\\Desktop\\project Dinzz\\dafftech-v2\\shots\\poster";
mkdirSync(DIR, { recursive: true });

const CSS = `
*{margin:0;padding:0;box-sizing:border-box}
html,body{width:1440px;height:900px;overflow:hidden}
body{font-family:'Segoe UI',Tahoma,sans-serif;background:#0d0b13;color:#f4f1e8;position:relative}
body:before{content:"";position:absolute;inset:0;
  background-image:linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px);
  background-size:56px 56px}
body:after{content:"";position:absolute;right:-180px;top:-160px;width:900px;height:900px;border-radius:50%;
  background:radial-gradient(circle,rgba(145,59,208,.34),transparent 62%)}
.top{position:absolute;top:54px;left:70px;right:70px;display:flex;justify-content:space-between;align-items:center;z-index:5}
.brand{display:flex;align-items:center;gap:14px}
.brand img{height:46px}
.brand .wm{font-size:26px;font-weight:800;letter-spacing:-.01em}
.brand .wm span{background:linear-gradient(160deg,#BF7BF6,#913BD0);-webkit-background-clip:text;background-clip:text;color:transparent}
.pill{font-family:Consolas,monospace;font-size:13px;letter-spacing:.24em;padding:11px 22px;border:1px solid rgba(255,255,255,.28);border-radius:999px;color:#cfc9dd}
.left{position:absolute;left:70px;top:190px;width:600px;z-index:4}
.kicker{display:flex;align-items:center;gap:14px;font-family:Consolas,monospace;font-size:15px;letter-spacing:.3em;color:#BF7BF6;text-transform:uppercase;margin-bottom:26px}
.kicker:before{content:"";width:44px;height:2px;background:linear-gradient(90deg,#BF7BF6,#913BD0)}
h1{font-size:74px;line-height:1.03;letter-spacing:-.03em;font-weight:800}
h1 em{font-style:normal;background:linear-gradient(160deg,#BF7BF6,#913BD0);-webkit-background-clip:text;background-clip:text;color:transparent}
.desc{margin-top:26px;font-size:22px;line-height:1.55;color:#b7b1c4;max-width:30em}
.tags{display:flex;gap:12px;margin-top:34px;flex-wrap:wrap}
.tag{font-size:16px;font-weight:600;padding:12px 20px;border-radius:8px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.14);color:#e6e2f0}
.bottom{position:absolute;left:70px;right:70px;bottom:52px;display:flex;justify-content:space-between;align-items:center;
  border-top:1px solid rgba(255,255,255,.2);padding-top:24px;z-index:4}
.bottom .lnk{font-family:Consolas,monospace;font-size:19px;color:#9a94ab}
.bottom .lnk b{color:#f4f1e8}
.stage{position:absolute;right:70px;top:150px;width:640px;z-index:3}
.browser{border-radius:14px;overflow:hidden;border:1px solid rgba(255,255,255,.12);
  box-shadow:0 44px 90px rgba(0,0,0,.6);background:#fff;transform:rotate(-1.2deg)}
.browser .bar{height:40px;background:#17141f;display:flex;align-items:center;gap:8px;padding:0 16px}
.browser .bar i{width:11px;height:11px;border-radius:50%}
.browser .bar .u{margin-left:10px;font:12px/1 Consolas,monospace;color:#8b87a0;background:#252131;padding:7px 16px;border-radius:6px}
.browser img{display:block;width:100%}
.thumbs{display:flex;gap:16px;margin-top:22px;transform:rotate(-1.2deg)}
.thumbs .t{flex:1;border-radius:10px;overflow:hidden;border:1px solid rgba(255,255,255,.12);box-shadow:0 18px 40px rgba(0,0,0,.5)}
.thumbs .t img{display:block;width:100%}
.thumbs .cap{font:11px/1 Consolas,monospace;color:#8b87a0;background:#17141f;padding:9px 12px;letter-spacing:.14em}
.page3d{position:relative;transform:rotate(1.4deg)}
.page3d .sheet{border-radius:6px;overflow:hidden;border:1px solid rgba(255,255,255,.16);
  box-shadow:0 44px 90px rgba(0,0,0,.65);background:#fff}
.page3d .sheet img{display:block;width:100%}
.page3d .back{position:absolute;inset:0;transform:translate(26px,26px) rotate(-3deg);z-index:-1;
  background:#17141f;border:1px solid rgba(255,255,255,.12);border-radius:6px}
.badge{position:absolute;left:-26px;bottom:-22px;background:linear-gradient(160deg,#BF7BF6,#913BD0);
  color:#fff;font-weight:700;font-size:17px;padding:14px 22px;border-radius:12px;box-shadow:0 16px 34px rgba(145,59,208,.5);
  font-family:Consolas,monospace;letter-spacing:.06em}
.collage{position:relative;height:560px}
.collage img{position:absolute;width:330px;border-radius:12px;border:1px solid rgba(255,255,255,.15);
  box-shadow:0 30px 60px rgba(0,0,0,.55)}
.collage img:nth-child(1){left:0;top:30px;transform:rotate(-7deg)}
.collage img:nth-child(2){left:150px;top:0;transform:rotate(2deg);z-index:2}
.collage img:nth-child(3){left:300px;top:60px;transform:rotate(9deg)}
`;

function page(p) {
    const stage =
        p.kind === "collage"
            ? `<div class="stage"><div class="collage">${p.images.map((i) => `<img src="${i}">`).join("")}</div></div>`
            : p.kind === "page"
            ? `<div class="stage"><div class="page3d"><div class="back"></div><div class="sheet"><img src="${p.images[0]}"></div><div class="badge">${p.badge}</div></div></div>`
            : `<div class="stage">
            <div class="browser"><div class="bar"><i style="background:#ff5f57"></i><i style="background:#febc2e"></i><i style="background:#28c840"></i><span class="u">${p.url}</span></div><img src="${p.images[0]}"></div>
            ${p.thumbs ? `<div class="thumbs">${p.thumbs.map((t) => `<div class="t"><img src="${t.img}"><div class="cap">${t.cap}</div></div>`).join("")}</div>` : ""}
        </div>`;

    return `<!DOCTYPE html>
<html lang="id"><head><meta charset="UTF-8"><title>Poster ${p.name}</title><style>${CSS}</style></head>
<body>
  <div class="top">
    <div class="brand"><img src="C:/Users/user/OneDrive/Desktop/project Dinzz/dafftech-v2/images/logo-mark-white.png" alt=""><div class="wm">DAFF<span>TECH</span></div></div>
    <div class="pill">${p.pill}</div>
  </div>
  <div class="left">
    <div class="kicker">${p.kicker}</div>
    <h1>${p.title}</h1>
    <p class="desc">${p.desc}</p>
    <div class="tags">${p.tags.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
  </div>
  ${stage}
  <div class="bottom"><span class="lnk">beli di <b>lynk.id/dafftech</b></span><span class="lnk">${p.file}</span></div>
</body></html>`;
}

for (const p of POSTS) {
    writeFileSync(`${DIR}\\poster-${p.id}.html`, page(p));
}
console.log(`OK ${POSTS.length} poster HTML`);
