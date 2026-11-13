import { chromium } from "playwright-core";
import fs from "fs";
const R = "C:/CODING PROJECT/REJANGKU/design/logo";
fs.mkdirSync(`${R}/png`, { recursive: true });
const b = await chromium.launch({ channel: "msedge" });
const jobs = [["rejangku-mark", 512, 512], ["rejangku-mark", 192, 192], ["rejangku-logo", 1280, 256]];
for (const [n, w, h] of jobs) {
  const p = await b.newPage({ viewport: { width: w, height: h } });
  const svg = fs.readFileSync(`${R}/${n}.svg`, "utf8");
  await p.setContent(`<style>body{margin:0;background:transparent}svg{width:${w}px;height:${h}px;display:block}</style>${svg}`);
  await p.screenshot({ path: `${R}/png/${n}-${w}.png`, omitBackground: true });
}
await b.close();
