import { PromoItem } from '../types';

// =========================================================================
// === EDIT PROMO DI SINI ==================================================
// Anda dapat mengubah teks diskon, periode promo, dan penawaran spesial
// =========================================================================

export const PROMOS: PromoItem[] = [
  {
    id: 'promo-1',
    badge: 'PROMO BULAN INI',
    title: 'Paket Bundling Undangan + Souvenir Spesial',
    subtitle: 'Hemat hingga Rp 150.000 untuk paket pemesanan di atas 300 pcs',
    description: 'Dapatkan diskon potongan langsung + GRATIS Buku Tamu Hardcover Eksklusif & Stiker Label Nama Tamu untuk pemesanan paket komplit.',
    code: 'BERKAH150',
    discountText: 'Hemat Rp 150.000',
    validUntil: 'Akhir Bulan Ini',
    actionText: 'Klaim Promo via WhatsApp',
    targetCategory: 'Undangan Pernikahan',
  },
  {
    id: 'promo-2',
    badge: 'DISKON SUNATAN & AQIQAH',
    title: 'Cetak Ceria Mulai Rp 1.100 / pcs',
    subtitle: 'Gratis pasang foto si kecil & plastik pelindung',
    description: 'Pemesanan undangan sunatan dan tasyakuran aqiqah minimal 100 pcs mendapatkan bonus gratis stiker bento box.',
    code: 'CERIAKID',
    discountText: 'Gratis Stiker Box',
    validUntil: 'Setiap Hari',
    actionText: 'Tanya Promo Sunatan',
    targetCategory: 'Undangan Sunatan',
  },
  {
    id: 'promo-3',
    badge: 'SOUVENIR HEMAT',
    title: 'Mug & Pouch Custom Mulai Rp 6.500',
    subtitle: 'Sudah termasuk kemasan plastik rapi dan thanks card',
    description: 'Souvenir fungsional, awet, dan berkesan untuk para tamu undangan tanpa repot bungkus sendiri di rumah.',
    code: 'SOUVENIRHEMAT',
    discountText: 'Free Kemasan + Pita',
    validUntil: 'Stok Terbatas',
    actionText: 'Konsultasi Souvenir',
    targetCategory: 'Souvenir',
  },
];
