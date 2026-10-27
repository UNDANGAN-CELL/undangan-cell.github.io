# Rumah Ijo v3.1 — Perbaikan gambar pratinjau saat link dibagikan

## Masalah
Saat link dibagikan (Messenger/Facebook/WhatsApp), gambar pratinjau tampak terpotong: logo kepotong di kiri, mockup undangan kepotong di kanan, teks bawah ikut terpotong. Penyebab: Messenger dan beberapa aplikasi memotong gambar OG menjadi kotak (1:1) dari tengah, padahal elemen penting ada di tepi gambar 1200x630.

## Perbaikan
- Gambar OG dibuat ulang (`public/images/brand/og-share-v3.jpg`, vertikal 1080x1350): logo dan semua teks berada di zona aman tengah (y 135–1215 px), jadi tetap utuh walau dipotong kotak. Mockup undangan di bagian bawah hanya dekorasi.
- Nama file diganti ke `og-share-v3.jpg` agar cache lama Facebook/WhatsApp tidak dipakai.
- Tag meta ditambah: `og:image:secure_url`, `og:image:type`, `og:image:alt`, `twitter:title`, `twitter:description`, `twitter:image:alt`.

## Setelah deploy
Paksa Facebook mengambil ulang pratinjau: buka https://developers.facebook.com/tools/debug/ → masukkan https://rumahijo.my.id/ → klik "Scrape Again". WhatsApp/Messenger akan ikut memperbarui (kadang perlu beberapa menit; link lama di chat yang sudah terkirim tidak berubah).
