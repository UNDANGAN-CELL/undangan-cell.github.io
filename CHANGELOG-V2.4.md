# Rumah Ijo v2.4 — Warna per Hub, Tab Disederhanakan, Trust Badges

Lanjutan dari v2.3 (3 hub: Undangan/Kemasan/Buku), berdasarkan diskusi ulang
setelah melihat referensi sketsa & gajahprint.com.

## 1. Warna khas per hub (dari sketsa)
- **Cetak Undangan** → kuning/emas (sebelumnya rose)
- **Cetak Kemasan** → biru (tidak berubah)
- **Cetak Buku** → pink/rose (sebelumnya amber)

Warna ini dipakai di: badge nama hub & header saat masuk hub (`HubPage.tsx`),
serta ikon kategori di dalamnya (Sablon Cup, Buku Yasin, Nota, Brosur ikut
digeser ke keluarga warna hubnya masing-masing di `categories.ts` &
`CategorySection.tsx`). Kategori di hub Undangan (7 macam) tetap warna-warni
seperti semula karena jumlahnya lebih banyak dan sudah punya identitas sendiri.

## 2. Tab dalam hub disederhanakan: 4 → 3
Sebelumnya: Kategori → Katalog → Galeri → Kalkulator.
Sekarang: **Katalog → Galeri → Kalkulator** (Katalog jadi tab pertama/default).

Alasan: tab Kategori isinya cuma kartu pemilih kategori, padahal Katalog sudah
punya filter kategori sendiri (chip di bagian bawah kolom pencarian) — jadi
tab Kategori terasa berulang. Info varian/bahan yang tadinya di kartu Kategori
(mis. ukuran cup, bahan stiker) sekarang tampil di dalam tab **Katalog**,
sebagai kartu ringkas per kategori, saat kategori itu belum ada produknya
("Segera Hadir").

## 3. Baris "Trust Badges" (terinspirasi gajahprint.com)
Komponen baru `TrustBadgesSection.tsx` — 4 poin kepercayaan singkat (Konsultasi
Desain Gratis, Bahan & Cetak Berkualitas, Proses Cepat, Fast Response
WhatsApp), ditaruh di Beranda tepat di bawah Hero. Ini juga mengisi "kotak
kosong" di bawah 3 tombol pada sketsa wireframe-mu.

## 4. Kartu produk (ProductCard) dirapikan
Badge kecil "Harga tersedia / Harga via WA" di pojok foto dihapus karena
sudah berulang dengan harga besar "Mulai dari Rp..." di bagian bawah kartu
(gaya ini sudah mirip gajahprint.com — harga besar & jelas). Yang tersisa di
pojok foto: kode produk saja.

## Yang sengaja TIDAK ditiru dari gajahprint.com
- Sidebar kategori + submenu bertingkat, sistem akun/login/keranjang — di luar
  arah "3 pilihan simpel, order via WhatsApp" yang sudah disepakati.
- Rating bintang & jumlah ulasan di tiap produk — supaya tidak menampilkan
  angka ulasan palsu. Kalau nanti ada sistem ulasan asli, bisa ditambahkan.

## Belum berubah
- Semua produk, harga, dan foto undangan/souvenir tetap sama persis.
- Testimoni tetap di `src/data/testimonials.ts`, tampil di Beranda saja.
- Data harga Kemasan & Buku masih "Segera Hadir" — menunggu daftar harga asli.

## Perlu diuji setelah `npm install && npm run build`
- Buka tiap hub, pastikan warna badge & header sesuai (kuning/biru/pink).
- Klik tab Katalog pada hub Kemasan/Buku — pastikan kartu info varian per
  kategori tampil rapi sebelum tombol WhatsApp.
- Cek kartu produk di hub Undangan, pastikan tidak ada elemen yang hilang
  setelah badge pojok kanan disederhanakan.
