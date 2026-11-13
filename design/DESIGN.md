# REJANGKU Design System v2

Dasar: Notion `DESIGN.md` (pustaka awesome-design). Penyesuaian anak: pedoman UI/UX Pro Max dan Impeccable (mode produk, Restrained).

Token lengkap ada di [`prototype/css/tokens.css`](../prototype/css/tokens.css).

## Logo

| Berkas | Pemakaian |
|---|---|
| `logo/rejangku-mark.svg` | Ikon aplikasi, favicon, avatar |
| `logo/rejangku-logo.svg` | Tajuk dokumen, latar terang |
| `logo/png/*` | Salinan raster |

Konsep: gelembung percakapan (bertanya) berisi huruf R, dengan lencana centang hijau (bersumber dan terverifikasi). Area bebas minimal setengah lebar lencana. Jangan memberi gradasi, bayangan, atau mengubah warna lencana.

## Warna

| Peran | Nilai |
|---|---|
| Aksi utama | `#5645d4` (tekan `#4534b3`, dalam `#3a2a99`) |
| Latar / permukaan | `#ffffff` / `#f6f5f4` |
| Garis | `#e5e3df`, kuat `#c8c4be` |
| Teks | `#1a1a1a`, `#37352f`, sekunder `#5d5b54` |
| Status (isi) | hijau `#1aae39`, oranye `#dd5b00`, merah `#e03131` |
| Status (teks, kontras ≥ 4,5:1) | `#0b6b22`, `#8a3a00`, `#b42318` |
| Topik | peach `#ffe8d4`, rose `#fde0ec`, mint `#d9f3e1`, lavender `#e6e0f5`, sky `#dcecfa`, yellow `#fef7d6` |
| Hero gelap | `#0a1530` |

Tombol ungu hanya untuk aksi dominan. Hijau, oranye, merah hanya untuk status.

## Huruf

Inter (variabel). Aksara Kaganga memakai Noto Sans Rejang (SIL OFL), tidak pernah Inter. Skala murid 28/18/14 px; skala konsol 22/16/13 px.

## Bentuk dan jarak

Tombol 8 px, kartu 12 px, panel 16 px, label status penuh. Satuan 4 px, kelipatan 8. Target sentuh murid ≥ 48 px, konsol ≥ 40 px.

## Gerak

90–200 ms, kurva ease-out eksponensial. Gerak hanya menyampaikan keadaan (tekan, putar suara, rekam). Semua gerak dimatikan oleh `prefers-reduced-motion`.

## Larangan

Tanpa gradasi ungu-biru, tanpa emoji sebagai ikon, tanpa maskot generik, tanpa garis samping berwarna pada kartu, tanpa kotak angka besar yang berdiri sendiri, tanpa pewaktu yang menekan murid.

## Pemeriksaan sebelum rilis

- [ ] Kontras teks ≥ 4,5:1, termasuk placeholder
- [ ] Semua tombol ikon punya label aksesibel
- [ ] Fokus terlihat dengan keyboard
- [ ] Uji pada 360, 768, 1024, 1440 px
- [ ] Render huruf RA dan JA diperiksa tiap font diganti (FR-52)
