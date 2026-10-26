# Rumah Ijo v2.2 — Rebranding

## Perubahan
- Nama brand di seluruh teks website diganti dari "RuangKarya" menjadi "Rumah Ijo" (`src/data/siteConfig.ts` menjadi sumber utama; komponen lain membaca dari sana).
- Tagline diganti menjadi "Percetakan & Sablon". Teks Tentang Kami, footer, deskripsi SEO, judul halaman, JSON-LD, `metadata.json`, dan README disesuaikan.
- Header: kotak "RK" + teks nama diganti gambar logo lengkap Rumah Ijo (latar transparan). Tinggi logo: 48 px (HP), 56 px (tablet), 64 px (desktop), mengecil sedikit saat halaman di-scroll.
- Footer: logo ditampilkan pada panel terang agar terbaca di latar gelap.
- Favicon dan apple-touch-icon diganti ikon "R" dari logo baru (`public/favicon.png`, `public/apple-touch-icon.png`); `favicon.svg` lama dihapus.
- Aset baru: `public/images/brand/logo-rumahijo.webp` (dipakai web) dan `logo-rumahijo.png` (cadangan/keperluan lain).
- Nama paket di `package.json` menjadi `rumahijo-website`.

## Belum diubah (sesuai permintaan)
- URL `https://undangan-cell.github.io/` di `index.html` (canonical, og:url, JSON-LD), `public/sitemap.xml`, dan `public/robots.txt`. `CNAME` sudah berisi `rumahijo.my.id`; ubah URL-URL tersebut saat domain baru siap dipakai.
- Changelog lama (V2, V2.1) sengaja dibiarkan sebagai catatan sejarah.

## Verifikasi
- Pencarian teks menyeluruh: tidak ada lagi "RuangKarya"/"Rumah Karya"/"RK" pada kode, SEO, dan dokumen aktif.
- Pemeriksaan OCR pada 72 foto hero/galeri tidak menemukan tulisan nama lama.
- `npm install`/build belum dijalankan di environment ini (tanpa akses internet); jalankan `npm install && npm run build` sebelum publish.
