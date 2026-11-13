import { chromium } from "playwright-core";
import fs from "fs";
const b = await chromium.launch({ channel: "msedge" });
const out = "C:/CODING PROJECT/REJANGKU/mockups/raw"; fs.mkdirSync(out, { recursive: true });
const M = [["beranda","?bare=1"],["tanya-jawab","?bare=1&q=huruf%20ka"],["tanya-kosong","?bare=1&q=keluarga"],["aksara","?bare=1&s=aksara"],["dengar","?bare=1&s=dengar"],["sumbang","?bare=1&s=sumbang"],["masuk","?bare=1&s=masuk"]];
const p = await b.newPage({ viewport: { width: 360, height: 800 }, deviceScaleFactor: 2 });
const errs = []; p.on("console", m => m.type()==="error" && errs.push(m.text())); p.on("pageerror", e => errs.push(String(e)));
for (const [n,q] of M) { await p.goto("http://localhost:8123/prototype/murid.html"+q); await p.waitForTimeout(500); await p.screenshot({ path: `${out}/murid-${n}.png` }); }
const d = await b.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1.5 });
d.on("console", m => m.type()==="error" && errs.push(m.text())); d.on("pageerror", e => errs.push(String(e)));
for (const v of ["ringkasan","antrean","verifikasi","izin","kelas","gerbang"]) { await d.goto("http://localhost:8123/prototype/konsol.html#"+v); await d.waitForTimeout(400); await d.screenshot({ path: `${out}/konsol-${v}.png` }); }
console.log("errors:", errs); await b.close();
