# Rumah Ijo v3.1 — Perbaikan gambar pratinjau saat link dibagikan

## Masalah
Saat link dibagikan (Messenger/Facebook/WhatsApp), gambar pratinjau tampak terpotong: logo kepotong di kiri, mockup undangan kepotong di kanan, teks bawah ikut terpotong. Penyebab: Messenger dan beberapa aplikasi memotong gambar OG menjadi kotak (1:1) dari tengah, padahal elemen penting ada di tepi gambar 1200x630.

## Perbaikan
- Gambar OG dibuat ulang (`public/images/brand/og-share-v3.jpg`, vertikal 1080x1350): logo dan semua teks berada di zona aman tengah (y 135–1215 px), jadi tetap utuh walau dipotong kotak. Mockup undangan di bagian bawah hanya dekorasi.
- Nama file diganti ke `og-share-v3.jpg` agar cache lama Facebook/WhatsApp tidak dipakai.
- Tag meta ditambah: `og:image:secure_url`, `og:image:type`, `og:image:alt`, `twitter:title`, `twitter:description`, `twitter:image:alt`.

## Setelah deploy
Paksa Facebook mengambil ulang pratinjau: buka https://developers.facebook.com/tools/debug/ → masukkan https://rumahijo.my.id/ → klik "Scrape Again". WhatsApp/Messenger akan ikut memperbarui (kadang perlu beberapa menit; link lama di chat yang sudah terkirim tidak berubah).

## Perbaikan tampilan lain (v3.1)
- **Popup promo**: tidak lagi muncul 0,9 detik setelah web dibuka. Sekarang muncul setelah 8 detik atau setelah pengunjung scroll ±700 px, tetap sekali per sesi. Atur di `src/data/popupPromo.ts` (`delayMs`, `scrollTriggerPx`).
- **Hero di HP**: kini ada foto contoh hasil cetak dan tombol "Pesan via WhatsApp" + "Lihat Pilihan Produk" di layar pertama.
- **Logo header di HP**: tidak lagi terpotong di atas (sebelumnya `absolute` di tengah sehingga header tidak ikut setinggi logo). Logo kini di kiri, tinggi menyesuaikan. Hack `mt-40` di bagian testimoni ikut dihapus.
- **Latar hero desktop**: glow memenuhi lebar layar, tidak lagi terlihat tepi kotak di kiri/kanan.
- **Statistik hero**: kotak "WA / Konsultasi & order" diganti "Gratis / Konsultasi desain".
- **Testimoni**: tanda kurung siku dihapus dari nama, kota, komentar, tahun; salah ketik "costumer" menjadi "pelanggan".
