import { PromoItem } from '../types';

// =========================================================================
// === EDIT PROMO DI SINI ==================================================
// Anda dapat mengubah teks diskon, periode promo, dan penawaran spesial
// =========================================================================

export const PROMOS: PromoItem[] = [
  {
    id: 'promo-1',
    badge: 'PROMO BUNDLING',
    title: 'Paket Bundling Undangan + Souvenir Spesial',
    subtitle: 'Tanyakan penawaran bundling undangan + souvenir',
    description: 'Tersedia penawaran bundling untuk pemesanan undangan dan souvenir. Detail harga, bonus, dan syarat dikonfirmasi admin via WhatsApp.',
    code: 'BERKAH150',
    discountText: 'Penawaran bundling',
    validUntil: 'Konfirmasi periode via WhatsApp',
    actionText: 'Klaim Promo via WhatsApp',
    targetCategory: 'Undangan Pernikahan',
  },
];
