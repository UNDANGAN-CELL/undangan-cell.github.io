import { Testimonial } from '../types';

// =========================================================================
// === EDIT TESTIMONI DI SINI ==============================================
//
// PENTING — BACA DULU:
// Isi di bawah ini adalah CONTOH / PLACEHOLDER, bukan pelanggan asli.
// Selama `TESTIMONIALS_ARE_PLACEHOLDER` bernilai true, website akan
// menampilkan penanda "contoh tampilan" supaya tidak menipu pengunjung.
//
// Cara pakai:
// 1. Ganti name, city, event, product, comment, dan date dengan data ASLI
//    dari pelanggan yang sudah memberi izin dipublikasikan.
// 2. Setelah SEMUA data di bawah diganti dengan data asli,
//    ubah TESTIMONIALS_ARE_PLACEHOLDER menjadi false.
// 3. Hapus baris yang belum terisi — lebih baik 3 testimoni asli
//    daripada 6 testimoni karangan.
// =========================================================================

export const TESTIMONIALS_ARE_PLACEHOLDER = true;

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'contoh-1',
    name: 'Devi',
    city: 'Ungaran',
    event: 'Pernikahan',
    product: 'Undangan Pernikahan',
    rating: 5,
    comment: 'Hasilnya top markotop.',
    date: '2026',
  },
  {
    id: 'contoh-2',
    name: 'Sugeng',
    city: 'Ungaran',
    event: 'Khitanan',
    product: 'Undangan Sunatan',
    rating: 5,
    comment: 'Desainnya keren.',
    date: '2026',
  },
  {
    id: 'contoh-3',
    name: 'Devi',
    city: 'Ungaran',
    event: 'Pernikahan',
    product: 'Undangan Pernikahan',
    rating: 5,
    comment: 'Keren hasilnya.',
    date: '2026',
  },
  {
    id: 'contoh-4',
    name: 'Dita',
    city: 'Ungaran',
    event: 'Pernikahan',
    product: 'Undangan Pernikahan',
    rating: 5,
    comment: 'Rekomendasi banget.',
    date: '2026',
  },
];
