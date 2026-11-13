# PRD REJANGKU: Pendamping Belajar Bahasa Rejang

| | |
|---|---|
| Status | Draf 1, siap ditinjau |
| Tanggal | 13 November 2026 |
| Pemilik | Muhammad Yusuf Arrayyan (Teknik Informatika, Universitas Bengkulu) |
| Dokumen terkait | Esai "REJANGKU: Pendamping Belajar Bahasa Rejang Berbasis Korpus Tervalidasi dan Kedaulatan Data Komunitas" |
| Nama produk | REJANGKU. Nama "Jeda" tidak dipakai di dokumen ini. |

> Catatan kejujuran. Semua angka ambang, pilihan teknologi, dan jadwal di dokumen ini adalah usulan awal yang perlu dikalibrasi pada fase persiapan dan percontohan. Belum ada yang diuji pada murid, guru, atau penutur.

---

## 1. Ringkasan

REJANGKU adalah platform belajar bahasa Rejang untuk sekolah dasar. Murid bertanya, dan sistem hanya menjawab dari korpus yang sudah berizin dan divalidasi penutur sepuh. Setiap jawaban menampilkan sumber dan nama penuturnya. Bila entri tidak ada, sistem menjawab "belum ada di korpus" lalu meneruskan pertanyaan ke guru.

Platform ini terdiri atas tiga bagian:

1. **Aplikasi Murid** (Android, luring lebih dahulu).
2. **Konsol Guru dan Penutur** (web dan Android) untuk kurasi, verifikasi, dan laporan.
3. **Layanan Korpus** (server) untuk penyimpanan, pencarian, izin, dan sinkronisasi.

## 2. Masalah dan peluang

| Masalah (dugaan, belum dikonfirmasi lapangan) | Akibat bagi pengguna |
|---|---|
| Bahan belajar Rejang yang tepercaya sedikit dan tersebar | Guru kekurangan bahan |
| Guru yang bukan penutur tidak dapat menilai benar atau salahnya bahasa | Kesalahan bisa diajarkan |
| Penutur sepuh makin sedikit dan jarang terhubung ke sekolah | Mutu korpus sulit dijaga |
| AI umum menjawab fasih tetapi bisa keliru pada bahasa berdata kecil | Murid menyerap bentuk yang salah |
| Aksara Kaganga punya galat glif pada huruf RA (U+A93D) di bagan Unicode | Teks aksara bisa tampil salah |

Peluang: pembangkitan berbantuan pencarian (RAG) membatasi jawaban pada dokumen yang diambil dari korpus, sehingga jawaban dapat ditelusuri.

## 3. Tujuan dan non-tujuan

**Tujuan (MVP percontohan 12 bulan)**

- G1. Murid mendapat jawaban bersumber untuk kosakata dan frasa dasar Rejang.
- G2. Setiap jawaban dapat ditelusuri ke entri korpus dan penutur.
- G3. Guru dapat menjadi kurator tanpa harus menjadi penutur.
- G4. Komunitas memegang kendali atas data (izin, tingkat akses, penarikan).
- G5. Aplikasi murid berjalan tanpa internet.

**Non-tujuan (belum dikerjakan)**

- Penerjemah umum Indonesia–Rejang yang menjawab semua hal.
- Pengenalan suara (ASR) pada fase awal; baru dibuka bila data rekaman bertranskripsi memadai.
- Fitur sosial terbuka antarmurid.
- Penjualan data atau pelatihan model umum dari korpus.

## 4. Gerbang keputusan (usulan, dari esai)

| Indikator | Ambang usulan | Cara ukur |
|---|---|---|
| Keandalan jawaban | ≥ 95% | Audit sampel acak oleh dua penutur sepuh |
| Kepatuhan izin | 100% | Setiap entri punya catatan izin |
| Capaian murid | ≥ 0,2 SD | Selisih skor kosakata dan aksara terhadap kelas pembanding |
| Kebergunaan | SUS ≥ 68 | Kuesioner SUS untuk guru |

Bila kepatuhan izin tidak 100%, perluasan dihentikan berapa pun hasil indikator lain.

## 5. Pengguna

| Persona | Kebutuhan | Hambatan yang diduga |
|---|---|---|
| **Murid SD** (kelas 3–6) | Belajar dengan cara singkat, bergambar, bersuara | Membaca terbatas, perangkat bersama, sinyal lemah |
| **Guru** (bukan penutur) | Bahan yang aman, mengetahui apa yang dicari murid | Waktu terbatas, tidak bisa menilai bahasa |
| **Penutur sepuh** | Menyimak, mengoreksi, memberi izin, tanpa banyak mengetik | Tidak terbiasa dengan perangkat |
| **Relawan komunitas** | Merekam dan mengunggah dengan benar | Perlu panduan cepat |
| **Lembaga adat** | Menetapkan tingkat akses, menarik entri | Perlu bukti bahwa aturan benar-benar jalan |
| **Admin proyek** | Memantau gerbang keputusan, ekspor laporan | Data tersebar |

## 6. Cakupan fitur

### 6.1 MVP

| ID | Fitur | Prioritas |
|---|---|---|
| F1 | Tanya Rejangku: tanya teks atau pilih topik, jawaban bersumber | Wajib |
| F2 | Kartu sumber: nama penutur, jenis entri, tanggal verifikasi | Wajib |
| F3 | Jawaban "Belum ada di korpus" + kirim pertanyaan ke guru | Wajib |
| F4 | Dengar & Tiru: putar rekaman penutur, murid merekam tiruan | Wajib |
| F5 | Modul Aksara Kaganga: tulis dan baca aksara dasar, dengan font yang sudah diuji | Wajib |
| F6 | Sumbang Kata: murid mengajukan kosakata baru (berstatus menunggu) | Wajib |
| F7 | Antrean Kurasi untuk guru: pertanyaan tak terjawab, usulan murid, entri meragukan | Wajib |
| F8 | Verifikasi Penutur: setujui, tolak, atau minta rekam ulang | Wajib |
| F9 | Catatan Izin per entri + tingkat akses | Wajib |
| F10 | Penarikan entri oleh komunitas | Wajib |
| F11 | Luring penuh di aplikasi murid + sinkron bila ada sinyal | Wajib |
| F12 | Panel Gerbang: empat indikator, ekspor laporan | Wajib |
| F13 | Audit sampel jawaban (acak, dinilai dua penutur) | Wajib |
| F14 | Kuesioner SUS untuk guru dalam aplikasi | Sebaiknya |

### 6.2 Setelah MVP

- ASR Rejang bertahap, hanya bila data memadai.
- Mode keluarga: orang tua ikut mendengar rekaman.
- Dukungan bahasa daerah lain dengan korpus terpisah.

## 7. Kebutuhan fungsional

### 7.1 Aturan jawaban (inti produk)

| ID | Kebutuhan |
|---|---|
| FR-1 | Jawaban hanya boleh disusun dari entri hasil pencarian korpus. Model tidak boleh menambahkan kata, arti, atau lafal dari luar entri. |
| FR-2 | Setiap jawaban memuat minimal satu entri sumber beserta penutur dan status verifikasi. |
| FR-3 | Bila skor pencarian di bawah ambang atau tidak ada entri, tampilkan "Belum ada di korpus" dan tawarkan "Tanyakan ke guru". |
| FR-4 | Entri dengan tingkat akses terbatas tidak pernah diambil di aplikasi murid. |
| FR-5 | Jawaban yang disusun ulang oleh model disimpan bersama ID entri sumber agar dapat diaudit. |
| FR-6 | Bila model gagal memenuhi FR-1 (hasil pemeriksa otomatis: kata keluaran tidak ada di entri), jawaban diganti entri mentah atau "Belum ada". |

### 7.2 Murid

| ID | Kebutuhan |
|---|---|
| FR-10 | Murid masuk dengan kode kelas dan pilihan avatar, tanpa email atau nomor telepon. |
| FR-11 | Murid dapat bertanya lewat kolom teks atau memilih topik bergambar (keluarga, makanan, alam, angka, salam). |
| FR-12 | Setiap kartu jawaban punya tombol putar suara penutur dan tombol "Dari siapa ini?" yang membuka kartu sumber. |
| FR-13 | Murid dapat merekam tiruan, memutar ulang, dan mengirim ke guru. |
| FR-14 | Murid dapat mengajukan kata baru dengan rekaman atau gambar; status ditampilkan: menunggu, diterima, perlu rekam ulang. |

### 7.3 Guru

| ID | Kebutuhan |
|---|---|
| FR-20 | Guru membuat kelas dan kode kelas, melihat daftar murid tanpa data pribadi berlebih. |
| FR-21 | Antrean Kurasi mengurutkan pertanyaan tak terjawab berdasarkan jumlah murid yang bertanya. |
| FR-22 | Guru dapat menandai entri meragukan; entri itu ditahan dari aplikasi murid sampai penutur memeriksa. |
| FR-23 | Guru menilai tiruan lafal murid dengan skala sederhana dan membandingkannya dengan rekaman penutur. |
| FR-24 | Guru melihat pola pertanyaan kelas sebagai dasar prioritas perekaman. |

### 7.4 Penutur sepuh dan relawan

| ID | Kebutuhan |
|---|---|
| FR-30 | Relawan dapat merekam atas nama penutur, mencatat persetujuan lisan atau tertulis, dan mengunggah. |
| FR-31 | Penutur memeriksa entri lewat antarmuka sangat sederhana: putar, lalu tiga tombol besar (Benar, Perlu diperbaiki, Jangan dipakai). |
| FR-32 | Keputusan penutur tersimpan dengan nama, tanggal, dan versi entri. |

### 7.5 Lembaga adat dan admin

| ID | Kebutuhan |
|---|---|
| FR-40 | Lembaga adat menetapkan tingkat akses per entri: **Umum**, **Hanya guru**, **Terbatas (tidak masuk aplikasi murid)**. |
| FR-41 | Penarikan entri menghapusnya dari server dan dari perangkat pada sinkronisasi berikutnya; riwayat penarikan tetap tercatat. |
| FR-42 | Panel Gerbang menampilkan empat indikator pada Bagian 4, tren per bulan, dan daftar entri tanpa catatan izin. |
| FR-43 | Admin dapat mengekspor laporan evaluasi (CSV dan PDF). |

### 7.6 Aksara Kaganga

| ID | Kebutuhan |
|---|---|
| FR-50 | Aplikasi memuat font aksara Rejang yang sudah diuji; huruf RA dan JA diuji sebagai penerimaan pertama. |
| FR-51 | Setiap teks beraksara disimpan sebagai Unicode ditambah teks latin; tampilan aksara tidak boleh menjadi satu-satunya bentuk entri. |
| FR-52 | Tes visual otomatis membandingkan render RA dan JA tiap kali font diganti. |

## 8. Kebutuhan non-fungsional

| Aspek | Target usulan |
|---|---|
| Luring | Semua fitur murid F1–F6 jalan tanpa internet pada korpus yang sudah diunduh |
| Perangkat | Android 8+, RAM 2 GB, penyimpanan korpus dan model di bawah 500 MB (angka perlu diuji) |
| Latensi jawaban | Di bawah 3 detik di perangkat sasaran (belum diukur) |
| Privasi anak | Tanpa nama lengkap, tanpa lokasi, tanpa iklan, tanpa pelacak pihak ketiga |
| Audio murid | Disimpan lokal; terkirim ke guru hanya dengan aksi murid; kedaluwarsa otomatis |
| Aksesibilitas | Target sentuh minimal 48 px, kontras teks minimal 4,5:1, teks dapat dibesarkan hingga 200% |
| Ketahanan | Sinkronisasi dapat dilanjutkan, tidak ada kehilangan data bila koneksi putus |
| Hukum | Kepatuhan UU PDP untuk data anak; perlu ditinjau ahli hukum sebelum percontohan |

## 9. Arsitektur sistem (usulan)

```
 Aplikasi Murid (Android)                 Konsol Guru/Penutur (web + Android)
 ┌───────────────────────────┐            ┌───────────────────────────────┐
 │ UI  | Pemutar | Perekam   │            │ Antrean Kurasi | Verifikasi   │
 │ Mesin Jawab (lokal)       │            │ Izin & Akses   | Panel Gerbang│
 │  ├ Pencari (indeks vektor)│            └──────────────┬────────────────┘
 │  ├ Penyusun jawaban kecil │                           │ HTTPS
 │  └ Pemeriksa sumber       │◄──── sinkron delta ───────┤
 │ Penyimpanan lokal (SQLite)│                           ▼
 └───────────────────────────┘            ┌───────────────────────────────┐
                                          │ Layanan Korpus (API)          │
                                          │ Entri | Rekaman | Izin | Akses│
                                          │ Audit | Pengguna | Laporan    │
                                          ├───────────────────────────────┤
                                          │ PostgreSQL | Penyimpanan objek│
                                          └───────────────────────────────┘
```

Prinsip rancangan:

1. **Mesin jawab berada di perangkat** agar luring dan data murid tidak keluar.
2. **Pemeriksa sumber** memastikan keluaran hanya memuat kata dari entri terambil (FR-6).
3. **Sinkronisasi delta** membawa entri baru, perubahan, dan penarikan.
4. **Server tidak melatih model dari korpus** tanpa persetujuan tertulis lembaga adat.

Pilihan teknologi (dapat diganti setelah uji): Flutter atau Kotlin untuk aplikasi, SQLite untuk lokal, PostgreSQL untuk server, penyimpanan objek untuk audio, model bahasa kecil yang berjalan di perangkat untuk penyusunan kalimat. Model yang dipilih wajib lulus uji FR-1 pada set uji internal.

## 10. Model data inti

| Entitas | Bidang penting |
|---|---|
| `Entri` | id, bentuk_latin, bentuk_aksara, arti_indonesia, jenis (kata, frasa, cerita), contoh, versi, status (draf, terverifikasi, ditahan, ditarik) |
| `Rekaman` | id, entri_id, penutur_id, berkas, durasi, tanggal |
| `Penutur` | id, nama_tampilan, desa, peran, status persetujuan |
| `Izin` | id, entri_id, penutur_id, lembaga_id, bentuk (tertulis, lisan terekam), tanggal, tingkat_akses, berlaku_hingga |
| `Verifikasi` | id, entri_id, penutur_id, keputusan, catatan, tanggal |
| `Pertanyaan` | id, kelas_id, teks, hasil (terjawab, belum_ada), entri_sumber[], waktu |
| `Usulan` | id, murid_ref, teks, media, status |
| `Kelas` | id, sekolah_id, guru_id, kode |
| `Audit` | id, sampel_jawaban, penilai_1, penilai_2, sesuai_korpus (bool), tanggal |
| `Penarikan` | id, entri_id, alasan, tanggal, peminta |

## 11. Antarmuka layanan (ringkas)

| Metode | Jalur | Fungsi |
|---|---|---|
| GET | `/sync?sejak=<versi>` | Unduh delta entri, rekaman, penarikan |
| POST | `/pertanyaan` | Kirim pertanyaan tak terjawab dari murid |
| POST | `/usulan` | Kirim usulan kata |
| GET | `/kurasi/antrean` | Antrean guru |
| POST | `/entri/{id}/verifikasi` | Keputusan penutur |
| POST | `/entri/{id}/tarik` | Penarikan oleh lembaga adat |
| GET | `/gerbang` | Empat indikator dan tren |
| POST | `/audit/sampel` | Buat sampel audit acak |

Setiap perubahan memerlukan peran yang sesuai; penarikan hanya untuk peran lembaga adat.

## 12. UI/UX

### 12.1 Acuan desain

Acuan visual: **Notion** dari pustaka awesome-design (`design-md/notion/DESIGN.md`), dibaca penuh sebelum dokumen ini disusun. Alasan: bernuansa hangat dan bersih, berbasis kartu pastel, huruf Inter yang jelas, dan geometri tombol persegi bersudut 8 px yang tidak kekanakan sekaligus ramah. Token yang dipakai diadaptasi untuk anak dan perangkat kecil. Tidak ada token dari sistem desain lain.

### 12.2 Prinsip

1. **Satu aksi utama per layar.** Tombol ungu hanya untuk aksi dominan.
2. **Sumber selalu terlihat.** Kartu sumber bukan tautan tersembunyi.
3. **Jujur saat kosong.** "Belum ada di korpus" ditampilkan sebagai layar yang ramah, bukan galat.
4. **Besar dan sedikit.** Teks 18 px ke atas untuk murid, tombol 48 px ke atas.
5. **Warna memberi arti.** Pastel untuk topik; hijau, oranye, dan merah hanya untuk status.
6. **Tidak ada hiasan acak.** Tanpa gradasi ungu-biru, tanpa ikon emoji sebagai antarmuka, tanpa maskot generik.

### 12.3 Token desain

| Kelompok | Token | Nilai |
|---|---|---|
| Warna aksi | `primary` | `#5645d4` (tekan: `#4534b3`) |
| Latar | `canvas`, `surface` | `#ffffff`, `#f6f5f4` |
| Garis | `hairline`, `hairline-strong` | `#e5e3df`, `#c8c4be` |
| Teks | `ink`, `charcoal`, `steel` | `#1a1a1a`, `#37352f`, `#787671` |
| Tautan | `link-blue` | `#0075de` |
| Status | sukses, peringatan, galat | `#1aae39`, `#dd5b00`, `#e03131` |
| Topik (pastel) | peach, rose, mint, lavender, sky, yellow | `#ffe8d4`, `#fde0ec`, `#d9f3e1`, `#e6e0f5`, `#dcecfa`, `#fef7d6` |
| Hero gelap (konsol) | `brand-navy` | `#0a1530` |
| Huruf | Inter (cadangan: system-ui) | judul 600, isi 400, tombol 500 |
| Skala murid | judul / isi / keterangan | 28 / 18 / 14 px |
| Skala konsol | judul / isi / keterangan | 22 / 16 / 13 px |
| Sudut | tombol, kartu, panel | 8, 12, 16 px; label status penuh |
| Jarak | satuan dasar | 4 px, kelipatan 8 |
| Bayangan | kartu, modal | `0 4px 12px rgba(15,15,15,.08)`, `0 16px 48px -8px rgba(15,15,15,.16)` |

Adaptasi: aplikasi murid memakai tombol 48 px dengan padding `14px 20px`, bukan `10px 18px`. Aksara Kaganga memakai font khusus yang telah diuji (FR-50), bukan Inter.

### 12.4 Peta layar

**Aplikasi Murid**

```
Masuk (kode kelas) → Beranda
Beranda ─┬─ Tanya Rejangku ── Jawaban + Kartu Sumber ── (Belum ada → Tanyakan ke guru)
         ├─ Dengar & Tiru ── Rekam ── Kirim ke guru
         ├─ Aksara ── Pelajaran ── Latihan tulis
         └─ Sumbang Kata ── Status usulan
```

**Konsol Guru/Penutur**

```
Masuk → Ringkasan kelas
Ringkasan ─┬─ Antrean Kurasi
           ├─ Verifikasi Penutur
           ├─ Izin & Akses (lembaga adat)
           ├─ Murid & Kelas
           └─ Panel Gerbang (admin)
```

### 12.5 Wireframe

**A. Beranda murid (360 × 800)**

```
┌──────────────────────────────┐
│ Halo, Rani                 ◉ │
│ Mau belajar apa hari ini?    │
│ ┌──────────────────────────┐ │
│ │ Tanya Rejangku        →  │ │  ← kartu lavender, aksi utama
│ └──────────────────────────┘ │
│ ┌────────────┐ ┌───────────┐ │
│ │ Dengar &   │ │ Aksara    │ │  ← kartu mint, sky
│ │ Tiru       │ │ Kaganga   │ │
│ └────────────┘ └───────────┘ │
│ ┌──────────────────────────┐ │
│ │ Sumbang Kata             │ │  ← kartu peach
│ └──────────────────────────┘ │
│ Topik: [Keluarga][Makanan]…  │
│ ◌ Luring · korpus v12        │
└──────────────────────────────┘
```

**B. Jawaban bersumber**

```
┌──────────────────────────────┐
│ ←  Tanya Rejangku            │
│ Kamu: bagaimana bilang "ibu"?│
│ ┌──────────────────────────┐ │
│ │  [bentuk Rejang]         │ │
│ │  ▶ Dengar                │ │
│ │  arti: ibu               │ │
│ │ ───────────────────────  │ │
│ │ Dari: Bu Marnis, penutur │ │
│ │ ✓ Diverifikasi 2 Mar     │ │
│ │ [Dari siapa ini?]        │ │
│ └──────────────────────────┘ │
│ [Tanya lagi…            ] ➤  │
└──────────────────────────────┘
```

**C. Belum ada di korpus**

```
┌──────────────────────────────┐
│ ←  Tanya Rejangku            │
│                              │
│   Kata ini belum ada di      │
│   korpus REJANGKU.           │
│   Lebih baik kosong daripada │
│   keliru.                    │
│                              │
│  [ Tanyakan ke guru ]  ← ungu│
│  [ Coba kata lain  ]         │
└──────────────────────────────┘
```

**D. Verifikasi penutur (tablet, huruf besar)**

```
┌──────────────────────────────────────────┐
│ Entri 12 dari 40                         │
│            [bentuk Rejang]               │
│            arti: ibu                     │
│              ▶  Putar                    │
│ [   Benar   ] [Perlu diperbaiki] [Jangan dipakai]│
│ Catatan suara (opsional)              │
└──────────────────────────────────────────┘
```

**E. Panel Gerbang (konsol)**

```
┌───────────────────────────────────────────────────────┐
│ Panel Gerbang · Fase 3 (bulan 5–10)                   │
│ ┌─────────┬─────────┬─────────┬─────────┐             │
│ │Keandalan│ Izin    │ Capaian │ SUS     │             │
│ │ 96%  ✓  │ 100% ✓  │ 0,15 ✗  │ 71  ✓   │             │
│ └─────────┴─────────┴─────────┴─────────┘             │
│ Entri tanpa catatan izin: 0   [Ekspor laporan]        │
└───────────────────────────────────────────────────────┘
```

(Angka pada wireframe adalah contoh tata letak, bukan hasil.)

### 12.6 Komponen

| Komponen | Spesifikasi |
|---|---|
| Tombol utama | `primary`, teks putih, 8 px, tinggi 48 px (murid) / 40 px (konsol) |
| Tombol sekunder | transparan, garis `hairline-strong` |
| Kartu topik | pastel sesuai topik, 12 px, padding 24 px, tanpa garis |
| Kartu sumber | `canvas`, garis `hairline`, 12 px; nama penutur 14 px medium |
| Label status | `Terverifikasi` (mint), `Menunggu` (kuning), `Ditahan` (peach), `Ditarik` (mawar) |
| Kolom input | tinggi 48 px, garis ungu 2 px saat fokus |
| Tab | garis bawah untuk konsol; tab pil hitam untuk topik murid |
| Tabel | latar putih, garis `hairline-soft`, baris 16 px/20 px |
| Penanda luring | titik abu + "Luring"; menjadi hijau saat sinkron |

### 12.7 Mikro-teks (bahasa Indonesia)

| Situasi | Teks |
|---|---|
| Tidak ada entri | "Kata ini belum ada di korpus REJANGKU." |
| Kirim ke guru | "Tanyakan ke guru" / "Pertanyaanmu sudah dikirim ke Bu/Pak Guru." |
| Menunggu verifikasi | "Kata barumu sedang diperiksa penutur." |
| Perlu rekam ulang | "Penutur minta direkam ulang. Coba lagi bersama gurumu." |
| Luring | "Kamu sedang luring. Semua pelajaran tetap bisa dipakai." |
| Gagal sinkron | "Belum tersambung. Data akan dikirim saat ada sinyal." |
| Entri ditarik | "Kata ini sudah ditarik oleh komunitas dan tidak tampil lagi." |

### 12.8 Aksesibilitas dan keselamatan anak

- Semua suara punya tombol berhenti dan pengatur kecepatan.
- Tidak ada pewaktu yang menekan murid.
- Mode kontras tinggi dan teks besar.
- Panel orang tua memuat penjelasan data yang dikumpulkan dan cara menarik izin.
- Rekaman murid tidak pernah tampil ke murid lain.

### 12.9 Pembaruan desain v2 dan identitas

Prototipe yang dapat diklik ada di `prototype/` (jalankan server statis, lalu buka `murid.html` dan `konsol.html`). Perubahan dari draf 1:

| Area | Perubahan | Alasan |
|---|---|---|
| Logo | Gelembung percakapan berisi huruf R dengan lencana centang hijau (`design/logo/`) | Menyatukan dua janji produk: bertanya dan bersumber |
| Teks status | Warna teks status memakai versi gelap (`ok-ink`, `warn-ink`, `err-ink`); warna terang hanya untuk isi bar dan titik | Hijau `#1aae39` dan oranye `#dd5b00` pada putih tidak mencapai kontras 4,5:1 |
| Tombol murid | Jejak tekan 2 px pada tombol utama dan kartu utama | Umpan balik sentuh yang jelas untuk anak, tanpa animasi dekoratif |
| Beranda murid | Satu kartu aksi utama (Tanya Rejangku), dua kartu pendamping, satu kartu usulan | Prinsip "satu aksi utama per layar" |
| Jawaban | Tombol dengar, pengatur kecepatan 0,75×/1×, kartu sumber di bawah jawaban | Memenuhi FR-12 dan Bagian 12.8 |
| Panel Gerbang | Baris indikator dengan nilai, ambang, batang berpenanda ambang, dan status; bukan empat kotak angka besar | Terbaca sebagai perbandingan terhadap ambang, bukan angka lepas |
| Aksara | Latihan menulis dengan kanvas dan peringatan RA | Menjalankan FR-50 |
| Data contoh | Setiap layar berisi data contoh diberi penanda "contoh" | Menjaga kejujuran: tidak ada kosakata Rejang rekaan; yang tampil hanya nama huruf Kaganga |

Referensi: Notion (`awesome-design`), dengan penyesuaian anak dari pedoman UI/UX (target sentuh, ukuran teks, gerak singkat 90–200 ms, hormat pada `prefers-reduced-motion`).

## 13. Metrik dan pengumpulan data

| Metrik | Sumber | Dipakai untuk |
|---|---|---|
| Rasio jawaban bersumber vs "belum ada" | Log lokal terkirim saat sinkron | Cakupan korpus |
| Keandalan jawaban | Audit sampel F13 | Gerbang 1 |
| Entri berizin | Tabel `Izin` | Gerbang 2 |
| Skor kosakata dan aksara | Tes awal dan akhir kelas | Gerbang 3 |
| SUS | Kuesioner F14 | Gerbang 4 |
| Waktu kurasi guru per minggu | Konsol | Beban kerja guru (belum diketahui) |

## 14. Jadwal (sesuai esai)

| Fase | Bulan | Luaran produk |
|---|---|---|
| Persiapan | 1–2 | Pemetaan lapangan, korpus awal berizin, perjanjian izin, uji font Kaganga, prototipe klik |
| Pilot | 3–4 | Aplikasi murid F1–F5 luring, Konsol F7–F9, pelatihan guru dan penutur |
| Operasi | 5–10 | Siklus belajar berjalan, audit berkala, F6, F10–F13 |
| Evaluasi | 11–12 | Penilaian empat gerbang, laporan, rekomendasi perluasan |

## 15. Risiko

| Risiko | Dampak | Mitigasi |
|---|---|---|
| Korpus terlalu kecil, sering "belum ada" | Murid meninggalkan aplikasi | Prioritaskan perekaman penutur tertua; antrean berdasarkan pertanyaan murid |
| Model susun jawaban menambah kata di luar entri | Bahasa keliru | Pemeriksa sumber (FR-6), uji set internal |
| Izin tidak lengkap | Kepercayaan komunitas rusak | Gerbang izin 100%, entri tanpa izin tidak tampil |
| Beban guru tinggi | Kurasi mandek | Ukur sejak pilot; sederhanakan antrean |
| Galat glif Kaganga | Aksara salah tampil | Font teruji, tes visual RA/JA |
| Perangkat sekolah lemah | Aplikasi lambat | Uji pada perangkat sasaran sebelum pilot |
| Pendanaan berhenti | Korpus berhenti tumbuh | Mitra usaha dan dinas; porsi tetap untuk perekaman |

## 16. Pertanyaan terbuka

1. Siapa yang menjadi pemilik hukum korpus dan perjanjian izin?
2. Perangkat apa yang tersedia di sekolah sasaran, dan apakah dibagi pakai?
3. Berapa banyak penutur sepuh yang bersedia, dan dalam bentuk keterlibatan apa?
4. Apakah tata tulis Latin Rejang yang dipakai sudah dibakukan, atau perlu pilihan bersama?
5. Tingkat akses apa saja yang dikehendaki lembaga adat selain tiga tingkat di FR-40?
6. Apakah ASR layak pada fase lanjutan, dan data minimal berapa?

---

## Lampiran A. Daftar gambar esai dan padanan Canva

Semua gambar esai berukuran sama: **16:9, 1920 × 1080 px**, tampil 12,7 × 7,14 cm di naskah. Salinan Canva di akun Anda (sumber asli tidak diubah):

| Gambar | Isi | Posisi di esai | Salinan Canva (ID) | Catatan |
|---|---|---|---|---|
| 1 | Diagram tulang ikan: dugaan akar masalah pewarisan bahasa Rejang | Bagian 2.1 | DAHawCqGsyc (16:9, hasil ubah ukuran) | Tata letak perlu diperiksa setelah ubah ukuran |
| 2 | Alur kerja pendamping AI: Korpus → Pencari → Penyusun jawaban → Verifikasi | Bagian 2.2 | DAHawOOa_KY (16:9) | Sesuaikan isi dengan empat lapisan di esai |
| 3 | Siklus belajar 4 langkah: Dengar & Tiru, Tanya AI, Verifikasi, Kontribusi | Bagian 2.2 | DAHawOOa_KY (16:9) | Dapat memakai halaman terpisah |
| 4 | Pentaheliks: perguruan tinggi, dinas pendidikan, lembaga adat, pelaku usaha, komunitas lokal | Bagian 2.3 | DAHawLCPn7E (halaman 1 dari 3) | Pakai satu halaman saja |
| 5 | Analisis SWOT REJANGKU | Bagian 2.4 | DAHawL66rY8 (16:9, hasil ubah ukuran) | Periksa teks tidak terpotong |
| 6 | Gerbang keputusan: ≥95%, 100%, ≥0,2 SD, SUS ≥68 | Bagian 2.4 | belum ada di Canva | Dibuat ulang lokal; gambar lokal tersedia di berkas |
| 7 | Peta jalan 12 bulan, 4 fase | Bagian 2.4 | DAHawOj-2aY (16:9) | **Masih 5 fase**; ubah menjadi 4 fase (bln 1–2, 3–4, 5–10, 11–12) |
| 8 | Jadwal Gantt: Persiapan, Pilot, Operasi, Evaluasi | Bagian 2.4 | DAHawNDvDyU (16:9, hasil ubah ukuran) | Periksa tumpang tindih setelah ubah ukuran |

Cara ekspor di Canva: Bagikan → Unduh → PNG → ukuran 1920 × 1080. Lalu ganti gambar di DOCX (klik kanan gambar → Ganti gambar), pertahankan lebar 12,7 cm dan kunci rasio.

## Lampiran B. Mockup untuk esai

Tiga mockup 16:9, 1920 × 1080 px, tersedia di `mockups/`:

| Berkas | Isi | Usulan posisi di esai |
|---|---|---|
| `mockup-mobile.png` | Tiga layar Aplikasi Murid: beranda, jawaban bersumber, "belum ada di korpus" | Bagian 2.2 (pendamping AI) |
| `mockup-pc.png` | Panel Gerbang di Konsol (laptop) | Bagian 2.4 (gerbang keputusan) |
| `mockup-ekosistem.png` | Konsol guru dan aplikasi murid berdampingan | Bagian 2.2 atau 2.3 |

Keterangan yang disarankan: "(Sumber: Olahan sendiri, 2026. Data pada layar adalah contoh.)"

Keterangan sumber di bawah gambar memakai format "(Sumber: Olahan sendiri, 2026)"; gambar 1 dan 2 menyebut rujukan yang mendasari isinya.
