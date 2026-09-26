# Rumah Ijo v2.3 — Restrukturisasi 3 Hub (Undangan / Kemasan / Buku)

## Konsep baru
Beranda sekarang hanya menampilkan 3 pilihan besar (bukan daftar kategori panjang):
**Cetak Undangan**, **Cetak Kemasan**, **Cetak Buku**. Klik salah satu akan
mengganti seluruh tampilan (bukan scroll turun) ke halaman hub tersebut,
lengkap dengan menu sendiri: **Kategori → Katalog → Galeri → Kalkulator**.
Alamat berubah mengikuti hub aktif (`#undangan`, `#kemasan`, `#buku`) sehingga
tombol back/forward browser berfungsi dan link bisa dibagikan langsung ke satu hub.

## Pembagian kategori per hub
- **Cetak Undangan**: Undangan Pernikahan, Sunatan, Aqiqah, Ulang Tahun, Event, Digital, Souvenir (semua produk & harga lama tetap ada, tidak berubah).
- **Cetak Kemasan** *(baru, harga menyusul)*: Sablon Plastik Kemasan, Sablon Cup, Stiker Label.
- **Cetak Buku** *(baru, harga menyusul)*: Buku Yasin, Nota/Kwitansi & Buku Rekapan, Brosur.

Kategori "Cetak Lainnya" (lama, tidak berisi produk) diganti menjadi kategori
**Brosur** di hub Cetak Buku.

## File data baru/berubah
- `src/types/index.ts`: tambah tipe `Hub`, kategori produk baru, field `hub` di `CategoryInfo`, tipe `HubInfo`.
- `src/data/hubs.ts` **(baru)**: judul, deskripsi, dan warna 3 hub — edit di sini untuk mengubah teks kartu Beranda.
- `src/data/categories.ts`: tiap kategori sekarang wajib punya `hub`; 6 kategori baru ditambahkan dengan `infoPoints` (poin varian/bahan/ukuran, diambil dari referensi gambar yang dikirim — bukan harga).

## Komponen baru
- `HubPickerSection.tsx`: 3 kartu besar di Beranda.
- `HubPage.tsx`: pembungkus satu hub — tab Kategori/Katalog/Galeri/Kalkulator, otomatis memfilter produk & galeri hanya milik hub itu.

## Komponen yang diperbarui
- `CategorySection.tsx`: menerima daftar kategori sebagai prop (bukan selalu semua), ikon baru (PackageOpen, CupSoda, Tags, BookOpen, Receipt, Newspaper), dan menampilkan `infoPoints` + badge "Segera Hadir" untuk kategori yang belum ada produknya.
- `ProductGrid.tsx`: tampilan "Katalog sedang disiapkan" + tombol WhatsApp saat sebuah hub belum punya produk sama sekali (beda dari pesan "tidak ada hasil pencarian").
- `GallerySection.tsx`: menerima daftar foto terfilter per hub via prop `items`; pesan kosong disesuaikan.
- `PriceCalculatorSection.tsx`: menerima daftar produk terfilter per hub via prop `products`; bila kosong, tampil panel "Kalkulator segera hadir" + tombol tanya harga via WhatsApp (bukan kalkulator kosong yang tombolnya tidak berfungsi).
- `Navbar.tsx`, `MobileBottomNav.tsx`, `Footer.tsx`: menu disesuaikan jadi Beranda + 3 Hub + Testimoni + Cara Pesan. Menu Bawah HP sekarang jadi pengganti hub cepat (Beranda / Undangan / Kemasan / Buku / Chat WA).
- `App.tsx`: ditulis ulang — status `activeHub` menentukan Beranda vs satu Hub penuh, sinkron dengan `#hash` URL, klik Testimoni/Cara Pesan dari dalam hub otomatis kembali ke Beranda lalu scroll ke bagian yang dituju.

## Belum berubah / tidak disentuh
- Bagian custom order ("Punya Desain atau Ide Sendiri?") tetap tampil global di Beranda, tidak digandakan ke tiap hub.
- Produk, harga, dan foto undangan/souvenir yang sudah ada tidak diubah sama sekali.
- Testimoni tetap diedit lewat `src/data/testimonials.ts` seperti sebelumnya.

## Yang masih perlu Anda lakukan
- Kirim daftar harga & foto asli untuk Sablon Plastik Kemasan, Sablon Cup, Stiker Label, Buku Yasin, Nota/Kwitansi/Buku Rekapan, dan Brosur — akan diisi ke `src/data/products.ts` dan `src/data/gallery.ts` begitu tersedia.
- Jalankan `npm install && npm run build` (tidak dijalankan di sini karena environment tanpa akses internet), lalu uji: klik 3 kartu di Beranda, tombol back browser, dan menu bawah di HP.
