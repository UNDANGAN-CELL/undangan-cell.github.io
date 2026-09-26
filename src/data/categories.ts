import { CategoryInfo, Hub, ProductCategory } from '../types';

// =========================================================================
// === EDIT KATEGORI PRODUK DI SINI ========================================
// Anda dapat menambah atau memodifikasi kategori percetakan Rumah Ijo.
// Setiap kategori WAJIB punya `hub` ('undangan' | 'kemasan' | 'buku')
// supaya tampil di hub yang benar.
// =========================================================================

export const CATEGORIES: CategoryInfo[] = [
  // ------------------------------------------------------------------
  // Hub: Cetak Undangan
  // ------------------------------------------------------------------
  {
    id: 'Undangan Pernikahan',
    hub: 'undangan',
    title: 'Undangan Pernikahan',
    subtitle: 'Elegan, Rustic, Minimalis & Hardcover Mewah',
    iconName: 'HeartHandshake',
    bgGradient: 'from-amber-500/10 to-rose-500/10',
    accentColor: 'text-rose-700 bg-rose-50 border-rose-200',
  },
  {
    id: 'Undangan Sunatan',
    hub: 'undangan',
    title: 'Undangan Sunatan',
    subtitle: 'Desain Islami, Ceria, Karakter Anak & Modern',
    iconName: 'Sparkles',
    bgGradient: 'from-emerald-500/10 to-teal-500/10',
    accentColor: 'text-emerald-700 bg-emerald-50 border-emerald-200',
  },
  {
    id: 'Undangan Aqiqah',
    hub: 'undangan',
    title: 'Undangan Aqiqah',
    subtitle: 'Lembut, Manis, Ornamen Islami & Foto Bayi',
    iconName: 'Baby',
    bgGradient: 'from-sky-500/10 to-indigo-500/10',
    accentColor: 'text-sky-700 bg-sky-50 border-sky-200',
  },
  {
    id: 'Undangan Ulang Tahun',
    hub: 'undangan',
    title: 'Undangan Ulang Tahun',
    subtitle: 'Kids Birthday, Sweet 17, Tema Custom & Playful',
    iconName: 'PartyPopper',
    bgGradient: 'from-fuchsia-500/10 to-pink-500/10',
    accentColor: 'text-fuchsia-700 bg-fuchsia-50 border-fuchsia-200',
  },
  {
    id: 'Undangan Event',
    hub: 'undangan',
    title: 'Undangan Event',
    subtitle: 'Seminar, Wisuda, Reuni, Gathering & Formal',
    iconName: 'CalendarDays',
    bgGradient: 'from-blue-500/10 to-cyan-500/10',
    accentColor: 'text-blue-700 bg-blue-50 border-blue-200',
  },
  {
    id: 'Undangan Digital',
    hub: 'undangan',
    title: 'Undangan Digital',
    subtitle: 'Undangan Online, Mobile-Friendly & Bisa Dibagikan Lewat WA',
    iconName: 'Smartphone',
    bgGradient: 'from-violet-500/10 to-indigo-500/10',
    accentColor: 'text-violet-700 bg-violet-50 border-violet-200',
  },
  {
    id: 'Souvenir',
    hub: 'undangan',
    title: 'Souvenir',
    subtitle: 'Mug Custom, Pouch, Totebag, Kipas & Mini Tumbler',
    iconName: 'Gift',
    bgGradient: 'from-amber-500/10 to-orange-500/10',
    accentColor: 'text-amber-700 bg-amber-50 border-amber-200',
  },

  // ------------------------------------------------------------------
  // Hub: Cetak Kemasan (katalog & harga menyusul — lihat infoPoints)
  // ------------------------------------------------------------------
  {
    id: 'Sablon Plastik Kemasan',
    hub: 'kemasan',
    title: 'Sablon Plastik Kemasan',
    subtitle: 'Kantong Plastik, Olshop, Klip Obat & Standing Pouch',
    iconName: 'PackageOpen',
    bgGradient: 'from-blue-500/10 to-sky-500/10',
    accentColor: 'text-blue-700 bg-blue-50 border-blue-200',
    infoPoints: [
      'Kantong plastik biasa (HDPE/LDPE) — cocok untuk toko & retail',
      'Plastik olshop/polymailer — untuk paket online shop',
      'Plastik klip obat (apotek) & klip bening konsumsi/retail',
      'Standing pouch (LDPE/stand up) untuk makanan & kemasan premium',
      'Bahan: PE, HDPE, LDPE, tahan air, food grade',
    ],
  },
  {
    id: 'Sablon Cup',
    hub: 'kemasan',
    title: 'Sablon Cup',
    subtitle: 'Plastic Cup & Paper Cup Custom Logo',
    iconName: 'CupSoda',
    bgGradient: 'from-sky-500/10 to-blue-500/10',
    accentColor: 'text-sky-700 bg-sky-50 border-sky-200',
    infoPoints: [
      'Plastic cup bening, tahan es, ukuran 12–30 oz',
      'Paper cup ramah lingkungan, lapisan PE ganda, ukuran 8–22 oz',
      'Pilihan lid: dome atau flat',
      'Cocok untuk kedai kopi, jus, minuman kemasan',
    ],
  },
  {
    id: 'Stiker Label',
    hub: 'kemasan',
    title: 'Stiker Label',
    subtitle: 'Bulat, Kotak, Persegi & Bentuk Custom',
    iconName: 'Tags',
    bgGradient: 'from-blue-500/10 to-indigo-500/10',
    accentColor: 'text-blue-700 bg-blue-50 border-blue-200',
    infoPoints: [
      'Bentuk: bulat, kotak, persegi, oval, atau custom sesuai logo',
      'Bahan: Vinyl (tahan air/cuaca, mengkilap/doff), Cromo (mengkilap), HVS (bisa ditulis)',
      'Untuk label produk, kemasan, botol, dan branding usaha',
    ],
  },

  // ------------------------------------------------------------------
  // Hub: Cetak Buku (katalog & harga menyusul — lihat infoPoints)
  // ------------------------------------------------------------------
  {
    id: 'Buku Yasin',
    hub: 'buku',
    title: 'Buku Yasin',
    subtitle: 'Cover Custom Nama untuk Tahlilan & Haul',
    iconName: 'BookOpen',
    bgGradient: 'from-pink-500/10 to-rose-500/10',
    accentColor: 'text-pink-700 bg-pink-50 border-pink-200',
    // Sudah ada 10 desain asli di products.ts (harga menyusul per produk),
    // jadi infoPoints sengaja tidak diisi agar kategori ini tampil sebagai
    // katalog nyata ("Buka Koleksi Desain"), bukan placeholder "Segera Hadir".
  },
  {
    id: 'Nota, Kwitansi & Buku Rekapan',
    hub: 'buku',
    title: 'Nota, Kwitansi & Buku Rekapan',
    subtitle: 'Ukuran 1/6 Folio hingga Folio, Sistem NCR',
    iconName: 'Receipt',
    bgGradient: 'from-rose-500/10 to-pink-500/10',
    accentColor: 'text-rose-700 bg-rose-50 border-rose-200',
    infoPoints: [
      'Ukuran: 1/6, 1/4, 1/3, 1/2 folio, hingga folio penuh (A4/F4)',
      'Sistem NCR (tanpa karbon) 2–5 rangkap, bisa dengan nomor urut',
      'Untuk nota kasir, kwitansi resmi, dan buku rekapan/laporan',
      'Penjilidan rapi & aman',
    ],
  },
  {
    id: 'Brosur',
    hub: 'buku',
    title: 'Brosur',
    subtitle: 'Selebaran Promosi Produk & Layanan Usaha',
    iconName: 'Newspaper',
    bgGradient: 'from-pink-500/10 to-fuchsia-500/10',
    accentColor: 'text-pink-700 bg-pink-50 border-pink-200',
    infoPoints: [
      'Untuk promosi produk, layanan, atau katalog usaha',
      'Ukuran & jumlah lipatan menyesuaikan kebutuhan',
    ],
  },
];

export function getCategoriesByHub(hub: Hub): CategoryInfo[] {
  return CATEGORIES.filter((cat) => cat.hub === hub);
}

export function getHubForCategory(categoryId: ProductCategory): Hub | undefined {
  return CATEGORIES.find((cat) => cat.id === categoryId)?.hub;
}
