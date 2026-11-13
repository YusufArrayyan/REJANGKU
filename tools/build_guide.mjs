import { chromium } from "playwright-core";
import fs from "fs";
const R = "C:/CODING PROJECT/REJANGKU";
const U = "http://localhost:8123";
const mark = `${U}/design/logo/rejangku-mark.svg`;
const raw = (n) => `${U}/mockups/raw/${n}.png`;

const css = `
@font-face{font-family:Inter;src:url(${U}/prototype/assets/fonts/Inter.woff2);font-weight:100 900}
@page{size:297mm 210mm;margin:0}
*{box-sizing:border-box}
body{margin:0;font-family:Inter,sans-serif;color:#1a1a1a;-webkit-print-color-adjust:exact;print-color-adjust:exact}
.pg{width:297mm;height:210mm;position:relative;overflow:hidden;page-break-after:always;padding:16mm 18mm;background:#fff}
.pg:last-child{page-break-after:auto}
.top{display:flex;justify-content:space-between;align-items:center;font-size:9pt;color:#5d5b54;position:absolute;left:18mm;right:18mm;top:9mm}
.top span{display:flex;align-items:center;gap:6px;font-weight:700;color:#1a1a1a}
.foot{position:absolute;left:18mm;right:18mm;bottom:8mm;font-size:8pt;color:#787671;display:flex;justify-content:space-between}
h1{font-size:30pt;line-height:1.1;letter-spacing:-.8px;margin:0 0 6mm;font-weight:650}
h2{font-size:18pt;margin:0 0 4mm;letter-spacing:-.3px}
p{font-size:11pt;line-height:1.55;color:#37352f;margin:0 0 4mm}
.who{display:inline-block;font-size:9pt;font-weight:600;padding:3px 10px;border-radius:99px;background:#e6e0f5;color:#391c57;margin-bottom:5mm}
ol{list-style:none;counter-reset:s;padding:0;margin:0}
ol li{counter-increment:s;display:grid;grid-template-columns:9mm 1fr;gap:3mm;margin-bottom:5mm;font-size:11pt;line-height:1.45;color:#37352f}
ol li::before{content:counter(s);width:8mm;height:8mm;border-radius:99px;background:#5645d4;color:#fff;font-weight:700;font-size:10pt;display:grid;place-items:center}
ol li b{color:#1a1a1a}
.ph{border-radius:9mm;background:#15151a;padding:2mm;box-shadow:0 6mm 12mm -3mm rgba(15,15,15,.25)}
.ph img{display:block;width:100%;border-radius:7mm}
.row{display:flex;gap:10mm;height:100%;padding-top:14mm}
.col{flex:1;min-width:0}
.phones{display:flex;gap:7mm;align-items:flex-start}
.phones .ph{width:56mm}
.cap{font-size:8.5pt;color:#5d5b54;text-align:center;margin-top:2.5mm}
.desk{border-radius:3mm;border:.3mm solid #c8c4be;overflow:hidden;box-shadow:0 5mm 10mm -3mm rgba(15,15,15,.2)}
.desk img{display:block;width:100%}
.tip{background:#fef7d6;color:#5c4a00;border-radius:3mm;padding:3.5mm 4.5mm;font-size:10pt;line-height:1.45;margin-top:3mm}
.tip.m{background:#d9f3e1;color:#0b5a1d}
.cover{background:#0a1530;color:#fff}
.cover .top,.cover .top span{color:#b8b4ab}
.cover h1{font-size:54pt;letter-spacing:-2px}
.cover p{color:#b8b4ab;font-size:15pt;max-width:120mm}
table{border-collapse:collapse;width:100%;font-size:10.5pt}
td,th{text-align:left;padding:3mm 4mm;border-bottom:.3mm solid #e5e3df;vertical-align:top}
th{background:#f6f5f4;font-size:9.5pt;color:#5d5b54}
.three{display:grid;grid-template-columns:repeat(3,1fr);gap:6mm;margin-top:8mm}
.card{border-radius:4mm;padding:6mm;font-size:10.5pt;line-height:1.5;color:#37352f}
.card b{display:block;font-size:14pt;color:#1a1a1a;margin-bottom:2mm}
`;
const top = (t) => `<div class=top><span><img src="${mark}" height=18>REJANGKU</span><div>${t}</div></div>`;
const foot = (n) => `<div class=foot><div>Panduan penggunaan · Draf 1 · data pada gambar adalah contoh</div><div>${n}</div></div>`;
const steps = (a) => `<ol>${a.map((x) => `<li><div>${x}</div></li>`).join("")}</ol>`;
const phone = (n, c) => `<div><div class=ph><img src="${raw(n)}"></div><div class=cap>${c}</div></div>`;

const P = [];
P.push(`<section class="pg cover">${top("Draf 1 · 13 November 2026")}
 <div style="position:absolute;left:18mm;top:62mm"><img src="${mark}" width=44 style="border-radius:10mm;margin-bottom:10mm"><h1>Panduan Penggunaan</h1><p>REJANGKU, pendamping belajar bahasa Rejang untuk sekolah dasar. Panduan bergambar untuk murid, guru, penutur, lembaga adat, dan admin.</p></div>
 <div style="position:absolute;right:20mm;top:26mm;width:60mm"><div class=ph><img src="${raw("murid-beranda")}"></div></div></section>`);

P.push(`<section class=pg>${top("Mengenal REJANGKU")}<div class=row><div class=col>
 <h1>Satu korpus, tiga bagian</h1><p>Murid bertanya, dan REJANGKU hanya menjawab dari entri yang berizin dan sudah diperiksa penutur sepuh. Setiap jawaban menampilkan sumber dan nama penuturnya. Bila entri tidak ada, sistem berkata “Belum ada di korpus” lalu meneruskan pertanyaan ke guru.</p>
 <div class=three><div class=card style="background:#e6e0f5"><b>Aplikasi Murid</b>Android, jalan tanpa internet. Untuk murid kelas 3–6.</div><div class=card style="background:#dcecfa"><b>Konsol Guru dan Penutur</b>Web dan Android. Kurasi, verifikasi, izin, dan laporan.</div><div class=card style="background:#d9f3e1"><b>Layanan Korpus</b>Server penyimpan entri, rekaman, izin, dan sinkronisasi.</div></div>
 <div class="tip" style="margin-top:8mm">Prinsip utama: lebih baik kosong daripada keliru. Semua ambang dan jadwal di sistem ini masih usulan awal yang perlu diuji.</div>
 </div></div>${foot(2)}</section>`);

P.push(`<section class=pg>${top("Murid · 1")}<div class=row><div class=col style="max-width:120mm"><span class=who>Murid kelas 3–6</span><h1>Masuk dan mulai</h1>
 ${steps(["Minta <b>kode kelas</b> dari gurumu. Tidak perlu email atau nomor telepon.","Pilih <b>avatar</b> yang kamu suka, lalu tekan <b>Masuk</b>.","Di <b>Beranda</b>, pilih satu kartu: Tanya Rejangku, Dengar &amp; Tiru, Aksara Kaganga, atau Sumbang Kata.","Titik di bawah menunjukkan status: abu-abu berarti luring, hijau berarti sudah sinkron."])}
 <div class="tip m">Pelajaran tetap bisa dipakai tanpa internet. Ketuk titik status untuk mencoba beralih.</div></div>
 <div class=phones>${phone("murid-masuk", "Masuk dengan kode kelas")}${phone("murid-beranda", "Beranda")}</div></div>${foot(3)}</section>`);

P.push(`<section class=pg>${top("Murid · 2")}<div class=row><div class=col style="max-width:120mm"><span class=who>Murid kelas 3–6</span><h1>Tanya Rejangku</h1>
 ${steps(["Ketik pertanyaan di kolom bawah, atau pilih topik di Beranda.","Tekan <b>Dengar</b> untuk memutar suara penutur. Pilih kecepatan 0,75× bila terlalu cepat.","Lihat <b>kartu sumber</b>: nama penutur dan tanggal verifikasi.","Tekan <b>Dari siapa ini?</b> untuk keterangan penutur lebih lengkap."])}
 <div class="tip m">Setiap jawaban selalu punya penutur. Tidak ada jawaban tanpa sumber.</div></div>
 <div class=phones>${phone("murid-tanya-jawab", "Jawaban bersumber")}</div></div>${foot(4)}</section>`);

P.push(`<section class=pg>${top("Murid · 3")}<div class=row><div class=col style="max-width:120mm"><span class=who>Murid kelas 3–6</span><h1>Kalau “Belum ada di korpus”</h1>
 ${steps(["Layar ini bukan galat. Artinya kata itu belum direkam atau belum diperiksa penutur.","Tekan <b>Tanyakan ke guru</b>. Pertanyaanmu masuk antrean kurasi.","Atau tekan <b>Coba kata lain</b> untuk bertanya lagi."])}
 <p style="margin-top:6mm">Makin banyak murid menanyakan hal yang sama, makin atas kata itu di antrean guru, dan makin cepat dijadwalkan untuk direkam.</p></div>
 <div class=phones>${phone("murid-tanya-kosong", "Belum ada di korpus")}</div></div>${foot(5)}</section>`);

P.push(`<section class=pg>${top("Murid · 4")}<div class=row><div class=col style="max-width:100mm"><span class=who>Murid kelas 3–6</span><h1>Dengar, tiru, dan tulis aksara</h1>
 ${steps(["<b>Dengar &amp; Tiru:</b> putar rekaman penutur, tekan tombol merah untuk merekam tiruanmu.","Dengarkan ulang. Tekan <b>Kirim ke guru</b> bila sudah siap. Rekaman hanya terkirim bila kamu menekannya.","<b>Aksara Kaganga:</b> pilih huruf, tiru goresannya di kotak putus-putus, tekan <b>Ulangi</b> untuk menghapus.","Huruf RA dan JA memakai font yang diuji khusus."])}</div>
 <div class=phones>${phone("murid-dengar", "Dengar &amp; Tiru")}${phone("murid-aksara", "Aksara Kaganga")}</div></div>${foot(6)}</section>`);

P.push(`<section class=pg>${top("Murid · 5")}<div class=row><div class=col style="max-width:120mm"><span class=who>Murid kelas 3–6</span><h1>Sumbang Kata</h1>
 ${steps(["Tulis kata yang ingin kamu tambahkan. Boleh disertai rekaman atau gambar.","Tekan <b>Kirim usulan</b>.","Pantau statusnya: <b>Menunggu</b> (sedang diperiksa penutur), <b>Diterima</b>, atau <b>Perlu rekam ulang</b>."])}
 <div class=tip>Bila “Perlu rekam ulang”, coba lagi bersama gurumu.</div></div>
 <div class=phones>${phone("murid-sumbang", "Usulan kata dan statusnya")}</div></div>${foot(7)}</section>`);

const desk = (v, n, who, title, st, tipText, num) => `<section class=pg>${top(who)}<div style="padding-top:11mm"><h1 style="font-size:24pt;margin-bottom:4mm">${title}</h1>
 <div style="display:flex;gap:9mm"><div style="width:168mm"><div class=desk><img src="${raw("konsol-" + v)}"></div></div><div class=col>${steps(st)}${tipText ? `<div class=tip>${tipText}</div>` : ""}</div></div></div>${foot(num)}</section>`;

P.push(desk("antrean", 0, "Guru", "Antrean Kurasi", ["Buka <b>Antrean Kurasi</b> dari menu kiri.","Pilih tab: Tak terjawab, Usulan murid, atau Entri meragukan.","Daftar diurutkan dari pertanyaan yang paling banyak ditanyakan.","Tekan <b>Jadwalkan rekaman</b> untuk memprioritaskan perekaman penutur."], "Guru tidak harus menjadi penutur. Tugas guru mengurutkan prioritas; penutur yang memutuskan benar atau salah.", 8));
P.push(desk("ringkasan", 0, "Guru", "Ringkasan kelas dan daftar murid", ["<b>Ringkasan kelas</b> menampilkan jumlah pertanyaan, yang terjawab, dan yang belum ada.","Batang topik menunjukkan apa yang paling dicari murid.","Di <b>Murid &amp; Kelas</b>, buat kelas baru dan bagikan kode kelas.","Murid dikenali lewat panggilan dan avatar, tanpa data pribadi berlebih."], "Entri yang ditandai ragu ditahan dari aplikasi murid sampai penutur memeriksanya.", 9));
P.push(desk("verifikasi", 0, "Penutur sepuh dan relawan", "Verifikasi Penutur", ["Tekan <b>Putar</b> dan dengarkan rekaman.","Pilih satu tombol besar: <b>Benar</b>, <b>Perlu diperbaiki</b>, atau <b>Jangan dipakai</b>.","Bila perlu, tambahkan <b>catatan suara</b>. Tidak perlu mengetik.","Keputusan tersimpan dengan nama, tanggal, dan versi entri."], "Relawan dapat merekam atas nama penutur dan mencatat persetujuan lisan atau tertulis.", 10));
P.push(desk("izin", 0, "Lembaga adat", "Izin dan akses", ["Tiap entri punya <b>catatan izin</b>: penutur, bentuk izin, tanggal.","Tetapkan tingkat akses: <b>Umum</b>, <b>Hanya guru</b>, atau <b>Terbatas</b>.","Entri Terbatas tidak pernah masuk aplikasi murid.","Tekan <b>Tarik entri</b> bila komunitas meminta. Entri hilang dari server dan perangkat saat sinkronisasi berikutnya; riwayat penarikan tetap tercatat."], "Entri tanpa catatan izin ditahan dan tidak tampil di aplikasi murid.", 11));
P.push(desk("gerbang", 0, "Admin proyek", "Panel Gerbang", ["Pantau empat indikator: keandalan jawaban, kepatuhan izin, capaian murid, dan kebergunaan (SUS).","Garis hitam pada batang menunjukkan ambang.","Bila kepatuhan izin tidak 100%, perluasan dihentikan berapa pun hasil lain.","Tekan <b>Ekspor CSV</b> atau <b>Ekspor PDF</b> untuk laporan evaluasi."], "Angka pada gambar ini contoh tata letak, bukan hasil evaluasi.", 12));

P.push(`<section class=pg>${top("Bantuan")}<div style="padding-top:12mm"><h1 style="font-size:24pt">Pertanyaan yang sering muncul</h1>
 <table><thead><tr><th style="width:70mm">Situasi</th><th>Yang perlu dilakukan</th></tr></thead><tbody>
 <tr><td>Muncul “Belum ada di korpus”</td><td>Tekan Tanyakan ke guru. Pertanyaan masuk antrean dan akan diprioritaskan.</td></tr>
 <tr><td>Tidak ada sinyal</td><td>Semua pelajaran tetap bisa dipakai. Data terkirim saat ada sinyal; tidak ada yang hilang bila koneksi putus.</td></tr>
 <tr><td>Kata yang kemarin ada sekarang hilang</td><td>Kemungkinan entri ditarik komunitas atau ditahan untuk diperiksa. Ini disengaja.</td></tr>
 <tr><td>Huruf aksara tampil aneh</td><td>Laporkan ke guru. Font aksara diuji khusus, terutama huruf RA dan JA.</td></tr>
 <tr><td>Lupa kode kelas</td><td>Tanyakan ke guru. Kode ada di Murid &amp; Kelas.</td></tr>
 <tr><td>Rekamanku dilihat siapa?</td><td>Disimpan di perangkat. Terkirim ke guru hanya bila kamu menekan Kirim, dan kedaluwarsa otomatis.</td></tr>
 </tbody></table>
 <div class="tip m" style="margin-top:8mm">Privasi anak: tanpa nama lengkap, tanpa lokasi, tanpa iklan, tanpa pelacak pihak ketiga.</div></div>${foot(13)}</section>`);

const html = `<!doctype html><meta charset=utf-8><style>${css}</style><body>${P.join("")}`;
fs.writeFileSync(`${R}/docs/panduan.html`, html);
const b = await chromium.launch({ channel: "msedge" });
const pg = await b.newPage();
await pg.goto(`${U}/docs/panduan.html`);
await pg.waitForTimeout(2500);
await pg.pdf({ path: `${R}/docs/Panduan-Penggunaan-REJANGKU.pdf`, width: "297mm", height: "210mm", printBackground: true, preferCSSPageSize: true });
await pg.setViewportSize({ width: 1123, height: 794 });
await pg.screenshot({ path: `${R}/docs/preview-p1.png` });
await b.close();
