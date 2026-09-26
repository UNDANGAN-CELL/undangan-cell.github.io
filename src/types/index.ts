export type Hub = 'undangan' | 'kemasan' | 'buku';

export type ProductCategory =
  // Hub: Cetak Undangan
  | 'Undangan Pernikahan'
  | 'Undangan Sunatan'
  | 'Undangan Aqiqah'
  | 'Undangan Ulang Tahun'
  | 'Undangan Event'
  | 'Undangan Digital'
  | 'Souvenir'
  // Hub: Cetak Kemasan
  | 'Sablon Plastik Kemasan'
  | 'Sablon Cup'
  | 'Stiker Label'
  // Hub: Cetak Buku
  | 'Buku Yasin'
  | 'Nota, Kwitansi & Buku Rekapan'
  | 'Brosur';

export interface ProductVariant {
  name: string;
  options: string[];
}

export interface ProductSpecification {
  label: string;
  value: string;
}

export interface Product {
  id: string | number;
  code: string;
  name: string;
  category: ProductCategory;
  price: number;
  priceType: 'per_pcs' | 'paket';
  minimumOrder: number;
  description: string;
  images: string[];
  variants?: ProductVariant[];
  specifications: ProductSpecification[];
  featured?: boolean;
  promo?: {
    discountPercent?: number;
    badgeText?: string;
    originalPrice?: number;
  };
  tags?: string[];
}

export interface CategoryInfo {
  id: ProductCategory;
  hub: Hub;
  title: string;
  subtitle: string;
  iconName: string;
  bgGradient: string;
  accentColor: string;
  /** Poin info singkat (varian/bahan/ukuran) untuk kategori yang katalognya belum terisi produk asli. */
  infoPoints?: string[];
}

export interface HubInfo {
  id: Hub;
  title: string;
  navLabel: string;
  subtitle: string;
  description: string;
  iconName: string;
  gradient: string;
  accentColor: string;
  /** Pesan pembuka WhatsApp saat pengunjung bertanya seputar hub ini. */
  whatsappIntro: string;
}

export interface PromoItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  code?: string;
  badge: string;
  discountText: string;
  validUntil: string;
  actionText: string;
  targetCategory?: ProductCategory;
}

export interface Testimonial {
  id: string | number;
  name: string;
  city: string;
  event: string;
  product: string;
  rating: number;
  comment: string;
  date: string;
}

export interface GalleryItem {
  id: string | number;
  title: string;
  category: ProductCategory;
  imageUrl: string;
  client: string;
  description?: string;
}

export interface OrderFormData {
  productName: string;
  productCode: string;
  quantity: number;
  customerName: string;
  eventType: string;
  eventDate: string;
  customerWhatsApp: string;
  selectedVariants: Record<string, string>;
  selectedAddOns: string[];
  notes: string;
  estimatedPrice?: number;
}
