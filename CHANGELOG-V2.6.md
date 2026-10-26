# Rumah Ijo v2.6 — Kategori Baru: Buku Tulis Custom Anak & Amplop Kartu Ucapan Pop Up

## 1. Kategori baru (total jadi 16 kategori)
- **Buku Tulis Custom Anak** → hub **Cetak Buku** (pink). Ikon NotebookPen.
- **Amplop Kartu Ucapan Pop Up** → hub **Cetak Undangan** (kuning/emas). Ikon MailOpen.
Terdaftar di `types/index.ts`, `data/categories.ts`, dan ikon + warna di `CategorySection.tsx`.

## 2. Produk baru (`products.ts`)
| Kode | Nama | Ukuran |
|---|---|---|
| BT-A5 (id 238) | Buku Tulis Custom Anak | A5 (buku tulis standar) |
| KU-POP (id 237) | Amplop Kartu Ucapan Pop Up | 11 x 8 cm saat dilipat |

Harga **"Menyusul"** (price: 0) karena belum ada data harga — tidak ada harga yang dikarang.
`minimumOrder: 1` hanya nilai bawaan teknis; **isi dengan minimal order asli** begitu ada.

## 3. Foto
- Buku Tulis: dipilih 1 dari 4 foto buku (cover ungu "Semangat Kakak", karakter orisinal,
  tanpa logo merek pihak ketiga — lebih aman dipajang di website umum).
  Foto Upin&Ipin, Barbie, dan BoBoiBoy tidak dipakai di website.
- Amplop Pop Up: foto kartu & strip pop up kawaii.
- Keduanya dikonversi ke WebP (~140 KB & ~100 KB) di `public/images/buku-tulis/` dan
  `public/images/kartu-ucapan/`. Masing-masing juga masuk galeri hub-nya (id 75 & 76).

## 4. Teks pendukung
- `hubs.ts`: subtitle, deskripsi, dan pesan pembuka WhatsApp kedua hub menyebut produk baru.
- Form pesanan custom: opsi "Buku Tulis Custom Anak" dan "Kartu Ucapan Pop Up".
- `index.html`: deskripsi & keyword SEO ditambah kedua produk. Domain tidak diubah.
- README & komentar `products.ts`: tidak lagi menyebut "7 kategori".

## Perlu diuji setelah `npm install && npm run build`
- Hub Buku & hub Undangan: kartu kategori baru muncul, ikon & warna sesuai.
- Katalog: kartu produk tampil dengan label "Menyusul", foto tidak pecah.
- Galeri hub Buku dan hub Undangan: foto baru tampil di lightbox.
- Tombol Pesan dari produk baru membuka WhatsApp dengan pesan yang benar.
