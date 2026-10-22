# Rumah Ijo v2.8 — Undangan Digital (27 Template)

## Produk baru: Undangan Digital
- 27 template undangan pernikahan digital (DG-01 s/d DG-27) menggantikan 2 placeholder lama (DG-01 dan DG-02).
- Harga seragam: Rp75.000 / paket, tanpa diskon.
- Setiap produk punya tombol "Lihat Demo" yang membuka contoh template di tab baru, di kartu produk dan di detail produk.
- Field baru `demoUrl` (opsional) di `types/index.ts`.

## Template (public/undangan-digital/)
- Setiap template disalin ke `public/undangan-digital/dg-NN/index.html`.
- Foto di template Unsplash dan foto yang tertanam di file dikeluarkan, lalu diganti foto referensi yang sudah dikompres (`assets/ref-1.jpg` s/d `ref-6.jpg`). Ukuran template besar turun dari sekitar 16 MB menjadi di bawah 40 KB per file.
- Musik latar memakai `assets/music.mp3` (dipakai template 21, 22, dan 26).

## Catatan
- Nama template yang belum punya konsep khusus memakai label "Desain NN" dan bisa diganti nanti lewat `src/data/products.ts`.
- Foto contoh produk memakai foto referensi sementara sampai thumbnail tiap template dibuat.
