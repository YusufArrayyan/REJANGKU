# REJANGKU

Pendamping belajar bahasa Rejang untuk sekolah dasar. Murid bertanya; sistem hanya menjawab dari korpus yang berizin dan divalidasi penutur sepuh. Bila entri tidak ada: "Belum ada di korpus".

![REJANGKU](design/logo/png/rejangku-logo-1280.png)

> Semua ambang, pilihan teknologi, dan jadwal adalah usulan awal. Data pada prototipe dan mockup adalah contoh, bukan korpus.

## Isi repositori

| Folder / berkas | Isi |
|---|---|
| [`PRD_REJANGKU.md`](PRD_REJANGKU.md) | Dokumen kebutuhan produk (Draf 1, ditambah 12.9 dan Lampiran B) |
| [`design/`](design) | Logo dan sistem desain v2 |
| [`prototype/`](prototype) | Prototipe HTML yang dapat diklik: Aplikasi Murid dan Konsol Guru/Penutur |
| [`mockups/`](mockups) | Mockup mobile dan PC 16:9 (1920 × 1080) untuk esai |
| [`docs/Panduan-Penggunaan-REJANGKU.pdf`](docs/Panduan-Penggunaan-REJANGKU.pdf) | Panduan penggunaan bergambar (13 halaman) |
| [`video/rejangku-alur-kerja.mp4`](video/rejangku-alur-kerja.mp4) | Video alur kerja sistem dengan suara narasi (sekitar 3,5 menit) |
| [`tools/`](tools) | Skrip pembuat mockup, panduan, dan video |

## Menjalankan prototipe

Prototipe memakai modul ES, jadi perlu server statis.

```bash
python -m http.server 8123
```

Buka `http://localhost:8123/prototype/`.

Coba di Aplikasi Murid: ketik `huruf ka` (jawaban bersumber) atau `keluarga` (belum ada di korpus).

## Membuat ulang mockup, panduan, dan video

```bash
cd tools
npm install
python -m pip install edge-tts imageio-ffmpeg
node shots.mjs && node mock.mjs && node build_guide.mjs
node scenes.mjs && python tts.py && python build_video.py
```

Perlu Microsoft Edge terpasang. Narasi video memakai suara `id-ID-ArdiNeural` lewat layanan daring edge-tts, jadi `tts.py` membutuhkan internet. Server statis harus aktif di port 8123.

## Lisensi font

Inter dan Noto Sans Rejang berlisensi SIL Open Font License.
