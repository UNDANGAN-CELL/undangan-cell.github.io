# Rumah Ijo v2.8 — 27 Undangan Digital + Tombol "Lihat Demo"

## Katalog Undangan Digital
- 2 produk placeholder lama (DG-01, DG-02) diganti 27 desain asli: **UD-001 s.d. UD-027**.
- Harga seragam **Rp75.000** per undangan (edit di `src/data/products.ts`, blok "UNDANGAN DIGITAL").
- ID produk baru: 239 s.d. 265. Tiap produk punya 3 gambar: kolase cover + isi, cover, dan isi (setelah dibuka).
- Spesifikasi tiap produk: masa aktif 1 bulan, estimasi pengerjaan 1 hari, revisi maksimal 5 kali (ubah di `products.ts` jika berbeda).
- Field baru opsional `demoUrl` di `src/types/index.ts`.

## Tombol "Lihat Demo"
- Muncul di kartu produk dan di jendela detail, membuka demo di tab baru.
- Event GA4 baru: `click_demo`.

## Halaman demo (`public/undangan-digital/demo/`)
- `ud-001.html` s.d. `ud-027.html` berdiri sendiri (tanpa build), memakai tag `noindex` agar tidak dobel di Google.
- `musik.mp3` (sekitar 2,2 MB, mp3 mono 64 kbps): hasil kompres dari file musik asli yang sebenarnya berformat AAC/MP4 berekstensi .mp3.
- `foto/`: 6 foto contoh + 2 versi lanskap, format WebP 900 px (sekitar 60–110 KB per foto).
- Foto dan musik yang dulu tertanam base64 (file hingga 16 MB) dipindah ke file terpisah. Ukuran tiap HTML sekarang 14–37 KB.
- Placeholder foto bawaan (SVG/dummy) diganti foto contoh. Foto Unsplash dan musik SoundHelix (link luar) diganti file lokal.
- Template 26 punya gambar tertanam berupa screenshot Google Drive; diganti foto lanskap.
- Template 26: `preload` musik diubah dari `auto` ke `none`. Template 16: foto cover memakai foto berdua.
- Template 4–7 memang tanpa foto (desain ilustrasi), jadi tidak diubah.
- Desain ganjil memakai set foto "pantai", desain genap memakai set "joglo"; yang sudah punya foto tetap memakai setnya.

## Cara mengganti foto / musik demo
- Timpa file di `public/undangan-digital/demo/foto/` (nama file sama) dan `musik.mp3`.

## Catatan
- Nama "Ahmad & Fatimah" dan data acara pada demo adalah contoh bawaan tiap template, tidak diubah.
- Font Google dan ikon Font Awesome dimuat dari internet, jadi demo perlu koneksi untuk tampil sempurna.
