import { chromium } from "playwright-core";
import fs from "fs";
const R = "C:/CODING PROJECT/REJANGKU";
const S = JSON.parse(fs.readFileSync(`${R}/video/scenes.json`, "utf8"));
const base = "http://localhost:8123/prototype";
const mark = "http://localhost:8123/design/logo/rejangku-mark.svg";
const css = `@font-face{font-family:Inter;src:url(${base}/assets/fonts/Inter.woff2);font-weight:100 900}
*{box-sizing:border-box}body{margin:0;width:1920px;height:1080px;font-family:Inter,sans-serif;overflow:hidden;position:relative;color:#1a1a1a;background:#fff}
.dark{background:#0a1530;color:#fff}
.logo{position:absolute;left:72px;top:52px;display:flex;align-items:center;gap:14px;font-weight:700;font-size:28px;letter-spacing:-.4px}
.logo b{color:#5645d4}.dark .logo b{color:#b8aef5}
h1{font-size:60px;line-height:1.1;letter-spacing:-1.5px;font-weight:650;margin:0 0 36px;text-wrap:balance}
.big{font-size:132px;letter-spacing:-4px;line-height:1;margin:0 0 28px;font-weight:700}
li{font-size:32px;line-height:1.4;margin:0 0 22px;list-style:none;padding-left:0;color:#37352f;max-width:30ch}
li::before{content:"";display:inline-block;width:12px;height:12px;border-radius:99px;background:#5645d4;margin-right:18px;vertical-align:middle}
.sub{font-size:36px;color:#b8b4ab;line-height:1.35}
.cap{position:absolute;left:0;right:0;bottom:44px;text-align:center}
.cap span{display:inline-block;background:#111;color:#fff;font-size:28px;padding:12px 28px;border-radius:10px;font-weight:500}
.dark .cap span{background:#fff;color:#0a1530}
.ph{position:absolute;width:380px;height:820px;background:#15151a;border-radius:46px;padding:10px;box-shadow:0 24px 48px -8px rgba(15,15,15,.28)}
.ph iframe{width:360px;height:800px;border:0;border-radius:36px;display:block}
.lap{position:absolute;background:#15151a;border-radius:20px 20px 0 0;padding:14px 14px 0;box-shadow:0 24px 48px -8px rgba(15,15,15,.3)}
.base{position:absolute;height:18px;background:linear-gradient(#d9d7d2,#b9b6af);border-radius:0 0 22px 22px}
.box{border:2px solid #c8c4be;border-radius:14px;padding:22px 26px;font-size:26px;font-weight:600;background:#fff;text-align:center;line-height:1.3}
.box small{display:block;font-size:19px;color:#5d5b54;font-weight:400;margin-top:6px}
.arrow{font-size:36px;color:#787671}`;
const logo = () => `<div class=logo><img src="${mark}" height=44>REJANG<b style="margin-left:-12px">KU</b></div>`;
const ul = (a, st = "") => `<ul style="padding:0;margin:0">${a.map((b) => `<li style="${st}">${b}</li>`).join("")}</ul>`;
function html(s) {
  let body = "", cls = "";
  if (s.type === "title") {
    cls = "dark";
    body = `${logo()}<div style="position:absolute;left:160px;top:330px"><div class=big>${s.title}</div><div class=sub style="max-width:26ch">${s.sub}</div></div>
    <img src="${mark}" style="position:absolute;right:200px;top:290px;width:420px;filter:drop-shadow(0 24px 48px rgba(0,0,0,.4))">`;
  }
  if (s.type === "text") body = `${logo()}<div style="position:absolute;left:160px;top:230px"><h1>${s.title}</h1>${ul(s.bullets, "max-width:36ch")}</div>
    <div style="position:absolute;right:140px;top:250px;width:560px;height:520px;background:#fde0ec;border-radius:24px;display:grid;place-items:center;font-size:260px;color:#8c2a5c;font-weight:700">?</div>`;
  if (s.type === "flow") body = `${logo()}<div style="position:absolute;left:100px;right:100px;top:200px"><h1 style="text-align:center">${s.title}</h1>
    <div style="display:flex;align-items:center;justify-content:center;gap:18px;margin-top:70px">
     <div class=box style="background:#e6e0f5;border-color:transparent">Pertanyaan murid</div><span class=arrow>→</span>
     <div class=box>Pencari<small>mencari entri di korpus</small></div><span class=arrow>→</span>
     <div class=box>Penyusun jawaban<small>hanya dari entri</small></div><span class=arrow>→</span>
     <div class=box>Pemeriksa sumber<small>kata di luar entri?</small></div><span class=arrow>→</span>
     <div class=box style="background:#d9f3e1;border-color:transparent">Jawaban<small>+ kartu sumber + penutur</small></div></div>
    <div style="display:flex;justify-content:center;margin-top:46px;gap:18px;align-items:center"><div style="font-size:26px;color:#5d5b54">Bila tidak ada entri atau skor rendah</div><span class=arrow>→</span><div class=box style="background:#ffe8d4;border-color:transparent">“Belum ada di korpus”<small>lalu diteruskan ke guru</small></div></div></div>`;
  if (s.type === "phone") body = `${logo()}<div style="position:absolute;left:160px;top:230px"><h1>${s.title}</h1>${ul(s.bullets)}</div>
    <div class=ph style="right:230px;top:110px"><iframe src="${base}/murid.html${s.q}"></iframe></div>`;
  if (s.type === "laptop") body = `${logo()}<div style="position:absolute;left:100px;top:230px;width:560px"><h1 style="font-size:48px">${s.title}</h1>${ul(s.bullets, "font-size:26px;max-width:24ch")}</div>
    <div class=lap style="left:700px;top:150px;width:1160px"><div style="width:1132px;height:610px;overflow:hidden"><iframe style="width:1415px;height:763px;transform:scale(.8);transform-origin:0 0;border:0" src="${base}/konsol.html#${s.h}"></iframe></div></div>
    <div class=base style="left:660px;top:774px;width:1240px"></div>`;
  if (s.type === "sync") body = `${logo()}<div style="position:absolute;left:100px;right:100px;top:200px"><h1 style="text-align:center">${s.title}</h1>
    <div style="display:flex;justify-content:center;align-items:center;gap:30px;margin-top:80px">
      <div class=box style="width:420px;background:#d9f3e1;border-color:transparent">Perangkat murid<small>Mesin jawab · korpus lokal (SQLite)<br>Rekaman murid tersimpan lokal</small></div>
      <div style="text-align:center;font-size:24px;color:#5d5b54"><div>sinkron delta saat ada sinyal</div><div class=arrow>⇄</div><div>entri baru · perbaikan · penarikan</div></div>
      <div class=box style="width:420px;background:#dcecfa;border-color:transparent">Layanan Korpus<small>Entri · rekaman · izin · akses<br>PostgreSQL + penyimpanan objek</small></div></div>
    <div style="text-align:center;margin-top:70px;font-size:30px;color:#37352f">Server tidak melatih model dari korpus tanpa persetujuan tertulis lembaga adat.</div></div>`;
  return `<!doctype html><meta charset=utf-8><style>${css}</style><body class="${cls}">${body}<div class=cap><span>${s.cap}</span></div>`;
}
const b = await chromium.launch({ channel: "msedge" });
const p = await b.newPage({ viewport: { width: 1920, height: 1080 } });
fs.mkdirSync(`${R}/video/frames`, { recursive: true });
for (const s of S) {
  fs.writeFileSync(`${R}/video/frames/${s.id}.html`, html(s));
  await p.goto(`http://localhost:8123/video/frames/${s.id}.html`);
  await p.waitForTimeout(1500);
  await p.screenshot({ path: `${R}/video/frames/${s.id}.png` });
}
await b.close();
