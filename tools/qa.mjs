import { chromium } from "playwright-core";
const b = await chromium.launch({ channel: "msedge" });
const p = await b.newPage({ viewport: { width: 1123, height: 794 } });
await p.goto("http://localhost:8123/docs/panduan.html");
await p.waitForTimeout(1500);
const els = await p.$$(".pg");
for (const i of [3, 5, 7, 10]) await els[i].screenshot({ path: `C:/CODING PROJECT/REJANGKU/docs/qa-${i}.png` });
await b.close();
