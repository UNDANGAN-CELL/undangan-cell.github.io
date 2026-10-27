import { Hub, ProductCategory } from '../types';
import { PRODUCTS } from './products';
import { formatRupiah, getPackNote } from '../utils/calculator';

// =========================================================================
// === EDIT POP UP IKLAN DI SINI ===========================================
// Pop up tampil saat web pertama dibuka (1x per sesi browser).
// - `enabled: false`  -> mematikan pop up sepenuhnya
// - Harga diambil OTOMATIS dari products.ts, jadi tidak perlu diubah manual.
// =========================================================================

export const POPUP_CONFIG = {
  enabled: true,
  /** Jeda sebelum pop up muncul (ms) */
  delayMs: 900,
  /** Kunci sessionStorage; ganti nilainya jika ingin pop up muncul lagi untuk semua pengunjung */
  storageKey: 'rumahijo-promo-popup-v1',
  badge: 'Produk Andalan',
  title: 'Cetak Kebutuhanmu di Rumah Ijo',
  subtitle: 'Harga bersahabat, desain bisa custom, pesan mudah lewat WhatsApp.',
};

export interface PopupPromoItem {
  id: string;
  name: string;
  tagline: string;
  image: string;
  priceText: string;
  priceNote: string;
  hub: Hub;
  category: ProductCategory;
  accent: string;
}

const minPrice = (category: ProductCategory): number => {
  const prices = PRODUCTS.filter((p) => p.category === category && p.price > 0).map((p) => p.price);
  return prices.length ? Math.min(...prices) : 0;
};

const findProduct = (code: string) => PRODUCTS.find((p) => p.code === code);
const buku = findProduct('BT-A5');
const kartu = findProduct('KU-POP');

export const POPUP_ITEMS: PopupPromoItem[] = [
  {
    id: 'cetak',
    name: 'Undangan Cetak',
    tagline: 'Undangan pernikahan cetak dengan desain elegan dan harga hemat',
    image: '/images/undangan/thumb/2520.webp',
    priceText: `Mulai ${formatRupiah(minPrice('Undangan Pernikahan'))}`,
    priceNote: '/ pcs • min. 100 pcs',
    hub: 'undangan',
    category: 'Undangan Pernikahan',
    accent: 'from-amber-100 to-rose-100',
  },
  {
    id: 'digital',
    name: 'Undangan Digital',
    tagline: 'Undangan online yang dibuka lewat HP dan bisa dibagikan via WhatsApp',
    image: '/images/undangan-digital/ud-030.webp',
    priceText: `Mulai ${formatRupiah(minPrice('Undangan Digital'))}`,
    priceNote: '/ undangan',
    hub: 'undangan',
    category: 'Undangan Digital',
    accent: 'from-violet-100 to-indigo-100',
  },
  {
    id: 'buku',
    name: 'Buku Tulis Custom',
    tagline: 'Buku tulis A5, cover foto & nama anak',
    image: buku?.images[0] ?? '/images/buku-tulis/buku-tulis-custom-anak.webp',
    priceText: buku ? formatRupiah(buku.price) : 'Tanya admin',
    priceNote: buku ? `/ paket (${getPackNote(buku)})` : '',
    hub: 'buku',
    category: 'Buku Tulis Custom Anak',
    accent: 'from-pink-100 to-fuchsia-100',
  },
  {
    id: 'kartu',
    name: 'Amplop Kartu Ucapan',
    tagline: 'Kartu ucapan pop up 11 x 8 cm yang manis',
    image: kartu?.images[0] ?? '/images/kartu-ucapan/amplop-kartu-pop-up.webp',
    priceText: kartu ? formatRupiah(kartu.price) : 'Tanya admin',
    priceNote: kartu ? `/ paket (${getPackNote(kartu)})` : '',
    hub: 'undangan',
    category: 'Amplop Kartu Ucapan Pop Up',
    accent: 'from-yellow-100 to-amber-100',
  },
];
