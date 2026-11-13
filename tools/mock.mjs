import { chromium } from "playwright-core";
const b = await chromium.launch({ channel: "msedge" });
const p = await b.newPage({ viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 1 });
for (const n of ["mobile","pc","ekosistem"]) { await p.goto(`file:///C:/CODING PROJECT/REJANGKU/mockups/src/${n}.html`); await p.waitForTimeout(1800); await p.screenshot({ path: `C:/CODING PROJECT/REJANGKU/mockups/mockup-${n}.png` }); }
await b.close();
