# Rumah Ijo v2.9 — Kolom Kode Reseller di semua pesan WhatsApp

## Prinsip
- Web tetap menampilkan **harga utuh**. Tidak ada harga reseller, potongan, atau daftar kode di web.
- Kode reseller hanya **diteruskan** ke pesan WhatsApp; web tidak mengecek valid/tidaknya kode.
  Verifikasi (kode + nomor pengirim) dan harga potongan dijelaskan admin lewat chat pribadi.

## Perilaku
- Setiap aksi yang membuka WhatsApp (tombol melayang, navbar, footer, bottom nav, promo, detail produk,
  form pesanan, kalkulator, pesan custom, dll.) lewat satu pintu: `requestWhatsApp()` di `src/utils/reseller.ts`.
- Pertama kali, muncul dialog "Kode Reseller (opsional)":
  - Diisi -> pesan WhatsApp mendapat baris akhir `Kode Reseller: XXX`. Kode disimpan di browser,
    jadi pesanan berikutnya otomatis memuat kode tanpa dialog.
  - "Lewati, saya bukan reseller" -> pesan tanpa baris kode; dialog tidak muncul lagi di sesi itu.
- Link WhatsApp tanpa teks bawaan tetap memuat pesan `Kode Reseller: XXX` jika kode ada.
- Link "Kode Reseller" di footer untuk mengganti atau menghapus kode yang tersimpan.
- Format kode: huruf besar, angka, `-` dan `_`, maks. 24 karakter (contoh `RJ-BUDI01`).

## Pelacakan efektivitas
- Di chat: cari teks "Kode Reseller:" di WhatsApp untuk melihat pesan dari reseller.
- Di Google Analytics 4: event baru `reseller_chat` dengan parameter `reseller_code`.
  Agar muncul di laporan, daftarkan `reseller_code` sebagai custom dimension (scope: Event) di GA4.

## File
- Baru: `src/utils/reseller.ts`, `src/components/ResellerGate.tsx`
- Diubah: `src/utils/whatsapp.ts`, `src/components/PriceCalculatorSection.tsx`, `src/components/Footer.tsx`, `src/App.tsx`
- Matikan fitur: hapus `<ResellerGate />` di `App.tsx` (link WhatsApp kembali normal).

## Catatan
- Kode tersimpan hanya di browser pengunjung; jika dia ganti HP/browser, dialog muncul lagi.
- Siapkan spreadsheet pribadi (kode, nama, nomor WA, tanggal daftar, status aktif) untuk verifikasi.
