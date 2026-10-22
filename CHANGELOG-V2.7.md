# Rumah Ijo v2.7 — Harga Buku & Kartu Ucapan + Pop Up Iklan

## Harga produk baru
- Buku Tulis Custom Anak (BT-A5): Rp45.000 / paket, isi 5 pcs
- Amplop Kartu Ucapan Pop Up (KU-POP): Rp30.000 / paket, isi 5 pcs
- Field baru `packSize` di `types/index.ts` (opsional). Kartu, detail, form pesanan, kalkulator,
  dan pesan WhatsApp kini memakai satuan "paket (isi 5 pcs)" untuk produk berharga paket.
- Kalkulator: finishing/tambahan (khusus undangan) disembunyikan untuk produk paket.

## Pop up iklan (`components/PromoPopup.tsx`, `data/popupPromo.ts`)
- Tampil 1x per sesi di Beranda, jeda 0,9 detik. Promosi: Undangan 1000an, Buku Custom, Amplop Kartu Ucapan.
- Animasi ringan (CSS opacity/transform saja), mati otomatis untuk pengguna `prefers-reduced-motion`.
- Klik produk -> langsung membuka hub & kategori terkait. Harga diambil otomatis dari `products.ts`.
- Matikan: `enabled: false` di `popupPromo.ts`. Tampilkan lagi ke semua pengunjung: ganti `storageKey`.
