import { Product } from '../types';

// =========================================================================
// === EDIT PRODUK DI SINI =================================================
// === EDIT HARGA DI SINI ==================================================
//
// Panduan Menambah / Mengedit Produk:
// 1. Gandakan salah satu blok objek produk di bawah
// 2. Ubah `id` (unik), `code` (misal: A-012), dan `name`
// 3. Sesuaikan `category` dengan salah satu dari 7 kategori resmi
// 4. Ubah `price` (dalam Rupiah angka), `minimumOrder`, dan `description`
// 5. Tambahkan atau ganti URL `images`
// 6. Simpan file, website akan otomatis memperbarui tampilan katalog!
// =========================================================================

export const PRODUCTS: Product[] = [
  // -------------------------------------------------------------
  // KATEGORI: UNDANGAN PERNIKAHAN
  // -------------------------------------------------------------
  {
    id: 1,
    code: 'A-001',
    name: 'Undangan Pernikahan Elegant Gold Leaf',
    category: 'Undangan Pernikahan',
    price: 1800,
    priceType: 'per_pcs',
    minimumOrder: 100,
    description: 'Undangan lipat dua dengan aksen hotprint gold leaf mewah, ornamen floral islami lembut, dan bahan Art Carton tebal laminasi doff halus.',
    images: [
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=800&q=80',
    ],
    featured: true,
    promo: {
      discountPercent: 10,
      badgeText: 'BEST SELLER',
      originalPrice: 2000,
    },
    variants: [
      {
        name: 'Jenis Bahan',
        options: ['Art Carton 260gr (Standar)', 'Jasmine Glitter 230gr (Mewah)', 'Akasia Tekstur (Klasik)'],
      },
      {
        name: 'Finishing',
        options: ['Laminasi Doff + Foil Emas', 'Laminasi Glossy', 'Polos Elegan'],
      },
    ],
    specifications: [
      { label: 'Bahan Kertas', value: 'Art Carton 260gr / Jasmine Pearl' },
      { label: 'Ukuran Terbuka', value: '29.7 x 21 cm (A4 Lipat Dua)' },
      { label: 'Ukuran Terlipat', value: '14.8 x 21 cm (A5)' },
      { label: 'Cetak', value: 'Full Color 2 Sisi High Resolution' },
      { label: 'Bonus Gratis', value: 'Plastik OPP, Label Nama Tamu, Kartu Ucapan Terima Kasih' },
    ],
    tags: ['Emas', 'Mewah', 'Floral', 'Islami'],
  },
  {
    id: 2,
    code: 'A-002',
    name: 'Undangan Single Board Rustic Flora',
    category: 'Undangan Pernikahan',
    price: 1500,
    priceType: 'per_pcs',
    minimumOrder: 100,
    description: 'Konsep single board modern minimalis bergaya rustic botanical. Dilengkapi amplop kalkir transparan dan tali rami estetik.',
    images: [
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80',
    ],
    featured: true,
    variants: [
      {
        name: 'Pilihan Amplop',
        options: ['Kalkir Semi Transparan', 'Craft Paper Cokelat Vintage', 'Amplop Putih Linen'],
      },
    ],
    specifications: [
      { label: 'Bahan', value: 'Concorde / Karton Tebal 310gr' },
      { label: 'Ukuran', value: '13 x 18 cm (Single Board)' },
      { label: 'Kelengkapan', value: 'Amplop Eksklusif + Wax Seal Stamp Sticker' },
      { label: 'Minimal Order', value: '100 pcs' },
    ],
    tags: ['Rustic', 'Minimalis', 'Kalkir', 'Wax Seal'],
  },
  {
    id: 3,
    code: 'A-003',
    name: 'Undangan Hardcover Royal Velvet Emerald',
    category: 'Undangan Pernikahan',
    price: 5500,
    priceType: 'per_pcs',
    minimumOrder: 200,
    description: 'Undangan hardcover tebal istimewa dengan nuansa hijau zamrud Islami dipadukan kaligrafi foil emas timbul premium.',
    images: [
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80',
    ],
    featured: true,
    promo: {
      badgeText: 'PREMIUM CHOICE',
    },
    variants: [
      {
        name: 'Warna Tema',
        options: ['Emerald Green & Gold', 'Midnight Navy & Silver', 'Burgundy Red & Gold'],
      },
    ],
    specifications: [
      { label: 'Konstruksi', value: 'Hardcover Board No. 30 Tebal Kokoh' },
      { label: 'Finishing', value: 'Emboss Kaligrafi + Hotprint Foil Emas' },
      { label: 'Ukuran', value: '15 x 21 cm' },
      { label: 'Bonus Spesial', value: 'Video Undangan Digital MP4 + QR Buku Tamu' },
    ],
    tags: ['Hardcover', 'Emerald', 'Premium', 'Islami'],
  },
  {
    id: 4,
    code: 'A-004',
    name: 'Undangan Pernikahan Pocket Modern Minimalis',
    category: 'Undangan Pernikahan',
    price: 2200,
    priceType: 'per_pcs',
    minimumOrder: 150,
    description: 'Model saku praktis dengan selipan kartu susun (Story, Save the Date, & Denah Lokasi QR Code).',
    images: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
    ],
    specifications: [
      { label: 'Bahan', value: 'Brief Card 210gr + Amplop Pocket Linen' },
      { label: 'Ukuran', value: '14 x 20 cm' },
      { label: 'Isi', value: '3 Kartu Sisipan (Akad, Resepsi, Denah/Barcode)' },
    ],
    tags: ['Pocket', 'Modern', 'Clean'],
  },
  {
    id: 5,
    code: 'A-005',
    name: 'Undangan Semi-Hardcover Bunga Sakura Soft Pastel',
    category: 'Undangan Pernikahan',
    price: 3200,
    priceType: 'per_pcs',
    minimumOrder: 100,
    description: 'Sentuhan warna pastel peach dan blush pink yang romantis dengan cover semi-hardcover kokoh dan pita satin cantik.',
    images: [
      'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80',
    ],
    specifications: [
      { label: 'Bahan', value: 'Board Lapisan Art Paper 260gr Doff' },
      { label: 'Aksesoris', value: 'Pita Satin Organza 2 cm' },
      { label: 'Ukuran', value: '14 x 20 cm' },
    ],
    tags: ['Pastel', 'Romantis', 'Pita'],
  },

  // -------------------------------------------------------------
  // KATEGORI: UNDANGAN SUNATAN / KHITANAN
  // -------------------------------------------------------------
  {
    id: 6,
    code: 'B-001',
    name: 'Undangan Sunatan Islami Karakter Pangeran Cilik',
    category: 'Undangan Sunatan',
    price: 1300,
    priceType: 'per_pcs',
    minimumOrder: 100,
    description: 'Desain undangan khitanan islami yang ceria dengan ilustrasi peci kartun anak soleh, doa khitan, dan foto jagoan cilik.',
    images: [
      'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80',
    ],
    featured: true,
    promo: {
      badgeText: 'FAVORIT KELUARGA',
    },
    variants: [
      {
        name: 'Warna Utama',
        options: ['Tosca Biru Ceria', 'Hijau Sage Islami', 'Kuning Emas'],
      },
    ],
    specifications: [
      { label: 'Bahan', value: 'Art Carton 230gr Glossy Mengkilap' },
      { label: 'Ukuran', value: '14 x 20 cm (Lipat Dua)' },
      { label: 'Bisa Pasang Foto', value: 'Ya, Gratis Pasang Foto Anak' },
      { label: 'Bonus', value: 'Plastik Pembungkus & Stiker Khitanan' },
    ],
    tags: ['Sunatan', 'Khitan', 'Islami', 'Foto Anak'],
  },
  {
    id: 7,
    code: 'B-002',
    name: 'Undangan Khitanan Elegan Motif Maroko Emas',
    category: 'Undangan Sunatan',
    price: 1600,
    priceType: 'per_pcs',
    minimumOrder: 100,
    description: 'Konsep sunatan yang lebih formal dan berwibawa dengan ornamen geometri Maroko / Arabesque hijau tua dan aksen emas.',
    images: [
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
    ],
    specifications: [
      { label: 'Bahan', value: 'Jasmine Gliter 210gr Berkilau' },
      { label: 'Ukuran', value: '15 x 20 cm' },
      { label: 'Teks', value: 'Doa Khitanan Bahasa Arab & Indonesia Lengkap' },
    ],
    tags: ['Maroko', 'Khitan Formal', 'Emas'],
  },
  {
    id: 8,
    code: 'B-003',
    name: 'Undangan Sunatan Model Kartu Pos Superhero',
    category: 'Undangan Sunatan',
    price: 1200,
    priceType: 'per_pcs',
    minimumOrder: 80,
    description: 'Undangan satu lembar bolak-balik dengan layout postcard seru bergaya pahlawan cilik. Sangat disukai anak-anak dan teman sekolah.',
    images: [
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80',
    ],
    specifications: [
      { label: 'Bahan', value: 'Art Paper Tebal 260gr' },
      { label: 'Ukuran', value: '10 x 15 cm' },
      { label: 'Minimal Order', value: '80 pcs' },
    ],
    tags: ['Superhero', 'Postcard', 'Ceria'],
  },

  // -------------------------------------------------------------
  // KATEGORI: UNDANGAN AQIQAH
  // -------------------------------------------------------------
  {
    id: 9,
    code: 'C-001',
    name: 'Undangan Aqiqah & Tasyakuran Baby Cloud Pastel',
    category: 'Undangan Aqiqah',
    price: 1100,
    priceType: 'per_pcs',
    minimumOrder: 60,
    description: 'Undangan manis tasyakuran kelahiran dan aqiqah dengan motif awan, bintang, dan space untuk foto si kecil yang menggemaskan.',
    images: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
    ],
    featured: true,
    variants: [
      {
        name: 'Varian Baby',
        options: ['Baby Boy (Baby Blue & Sage)', 'Baby Girl (Soft Pink & Peach)', 'Netral (Warm Cream & Sand)'],
      },
    ],
    specifications: [
      { label: 'Bahan', value: 'Art Carton 260gr Tebal Laminasi Doff Halus' },
      { label: 'Ukuran', value: '10 x 15 cm (Single Board)' },
      { label: 'Format Konten', value: 'Nama Bayi, Arti Nama, Waktu/Tempat, Doa Keberkahan' },
      { label: 'Gratis', value: 'Termasuk Plastik & Edit Foto Bayi Tajam' },
    ],
    tags: ['Aqiqah', 'Baby Boy', 'Baby Girl', 'Tasyakuran'],
  },
  {
    id: 10,
    code: 'C-002',
    name: 'Kartu Ucapan Aqiqah & Bento Box Tag',
    category: 'Undangan Aqiqah',
    price: 750,
    priceType: 'per_pcs',
    minimumOrder: 100,
    description: 'Kartu ucapan aqiqah mini yang pas untuk disematkan di kotak kardus nasi box atau paket bingkisan tasyakuran.',
    images: [
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80',
    ],
    specifications: [
      { label: 'Bahan', value: 'Art Paper 230gr Glossy / Stiker Chromo' },
      { label: 'Ukuran', value: '9 x 12 cm atau 8 x 8 cm bulat' },
      { label: 'Pilihan', value: 'Bisa berupa Kartu Selipan atau Stiker Tempel' },
    ],
    tags: ['Nasi Box', 'Label Aqiqah', 'Stiker'],
  },
  {
    id: 11,
    code: 'C-003',
    name: 'Undangan Aqiqah Fold Ornamen Kubah Masjid',
    category: 'Undangan Aqiqah',
    price: 1500,
    priceType: 'per_pcs',
    minimumOrder: 80,
    description: 'Undangan lipat dengan cutting laser lengkungan kubah bernuansa Islami khidmat untuk acara syukuran marhaban aqiqah.',
    images: [
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80',
    ],
    specifications: [
      { label: 'Bahan', value: 'Jasmine Gliter 230gr' },
      { label: 'Finishing', value: 'Die-cut Lengkungan Kubah Islami' },
      { label: 'Ukuran', value: '13 x 18 cm' },
    ],
    tags: ['Kubah', 'Islami', 'Die-Cut'],
  },

  // -------------------------------------------------------------
  // KATEGORI: UNDANGAN ULANG TAHUN
  // -------------------------------------------------------------
  {
    id: 12,
    code: 'D-001',
    name: 'Undangan Ulang Tahun Sweet Seventeen Hologram',
    category: 'Undangan Ulang Tahun',
    price: 2500,
    priceType: 'per_pcs',
    minimumOrder: 50,
    description: 'Undangan Sweet 17 estetik modern dengan aksen foil hologram pelangi, layout Instagram-style, dan amplop aesthetic.',
    images: [
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80',
    ],
    featured: true,
    variants: [
      {
        name: 'Aksen Foil',
        options: ['Hologram Rainbow', 'Rose Gold Foil', 'Silver Mirror'],
      },
    ],
    specifications: [
      { label: 'Bahan', value: 'Karton Premium 300gr + Soft Touch Lamination' },
      { label: 'Ukuran', value: '11 x 16 cm' },
      { label: 'Kelengkapan', value: 'Amplop V-Flap Eksklusif' },
    ],
    tags: ['Sweet 17', 'Hologram', 'Aesthetic'],
  },
  {
    id: 13,
    code: 'D-002',
    name: 'Undangan Kids Birthday Party Karakter Kartun',
    category: 'Undangan Ulang Tahun',
    price: 1200,
    priceType: 'per_pcs',
    minimumOrder: 40,
    description: 'Undangan pesta ulang tahun anak penuh warna. Bisa request karakter kartun favorit, dinosaurus, princess, atau luar angkasa.',
    images: [
      'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=800&q=80',
    ],
    specifications: [
      { label: 'Bahan', value: 'Art Carton 260gr' },
      { label: 'Ukuran', value: '10 x 14 cm' },
      { label: 'Custom Tema', value: 'Bebas request nama dan tema anak' },
    ],
    tags: ['Kids', 'Birthday', 'Kartun'],
  },

  // -------------------------------------------------------------
  // KATEGORI: UNDANGAN EVENT
  // -------------------------------------------------------------
  {
    id: 14,
    code: 'E-001',
    name: 'Undangan Formal Seminar & Konferensi Perusahaan',
    category: 'Undangan Event',
    price: 3000,
    priceType: 'per_pcs',
    minimumOrder: 50,
    description: 'Undangan event korporat resmi dengan map holder folder elegan, slot kartu nama pembicara, dan denah ballroom hotel.',
    images: [
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80',
    ],
    specifications: [
      { label: 'Bahan Cover', value: 'Concorde Hitam / Biru Navy 300gr' },
      { label: 'Bahan Isi', value: 'Linen Paper Tekstur Mewah' },
      { label: 'Ukuran', value: '15 x 22 cm' },
      { label: 'Fitur', value: 'Slot ID Card & QR Code Check-in Tamu' },
    ],
    tags: ['Seminar', 'Korporat', 'Formal', 'Event'],
  },
  {
    id: 15,
    code: 'E-002',
    name: 'Undangan Reuni Akbar & Gathering Komunitas',
    category: 'Undangan Event',
    price: 1800,
    priceType: 'per_pcs',
    minimumOrder: 100,
    description: 'Desain undangan reuni hangat dengan kolase foto kenangan masa sekolah / kampus, rundown acara, dan dresscode panduan.',
    images: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    ],
    specifications: [
      { label: 'Bahan', value: 'Art Carton 260gr Lipat Dua' },
      { label: 'Ukuran', value: '14 x 20 cm' },
      { label: 'Finishing', value: 'Laminasi Doff Anti Air' },
    ],
    tags: ['Reuni', 'Gathering', 'Komunitas'],
  },

  // -------------------------------------------------------------
  // KATEGORI: SOUVENIR
  // -------------------------------------------------------------
  {
    id: 16,
    code: 'S-001',
    name: 'Souvenir Mug Keramik Custom Sablon / Press',
    category: 'Souvenir',
    price: 14000,
    priceType: 'per_pcs',
    minimumOrder: 50,
    description: 'Mug keramik SNI standar putih dengan sablon print foto/desain full colour tajam anti luntur. Cocok untuk pernikahan dan kenang-kenangan.',
    images: [
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1577937927133-66ef06acdf18?auto=format&fit=crop&w=800&q=80',
    ],
    featured: true,
    promo: {
      discountPercent: 15,
      badgeText: 'FAVORIT ACARA',
      originalPrice: 16500,
    },
    variants: [
      {
        name: 'Packaging',
        options: ['Box Putih Jendela + Pita', 'Plastik Ikat Kawat Emas', 'Tile Serut Mewah'],
      },
    ],
    specifications: [
      { label: 'Material', value: 'Keramik Standar SNI 11 Oz Tahan Panas' },
      { label: 'Area Cetak', value: '20 x 8.5 cm Full Print Tajam' },
      { label: 'Minimal Pemesanan', value: '50 pcs' },
      { label: 'Bonus', value: 'Gratis Desain & Box Kemasan Satuan' },
    ],
    tags: ['Mug', 'Keramik', 'Souvenir', 'Custom'],
  },
  {
    id: 17,
    code: 'S-002',
    name: 'Souvenir Pouch Kanvas Serbaguna Custom Sablon',
    category: 'Souvenir',
    price: 6500,
    priceType: 'per_pcs',
    minimumOrder: 100,
    description: 'Pouch fungsional bahan blacu/kanvas premium dengan resleting kuat dan sablon nama mempelai atau logo acara yang rapi.',
    images: [
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80',
    ],
    featured: true,
    variants: [
      {
        name: 'Ukuran Pouch',
        options: ['Sedang (20 x 14 cm)', 'Kecil (15 x 10 cm)', 'Besar Make-up (24 x 16 cm)'],
      },
    ],
    specifications: [
      { label: 'Bahan', value: 'Blacu Tebal / Kanvas Halus Grade A' },
      { label: 'Pilihan Sablon', value: '1 Warna (Gold, Putih, Hitam, Cokelat)' },
      { label: 'Kemasan', value: 'Plastik OPP + Thanks Card Ucapan' },
    ],
    tags: ['Pouch', 'Kanvas', 'Bermanfaat'],
  },
  {
    id: 18,
    code: 'S-003',
    name: 'Souvenir Totebag Spunbond Ramah Lingkungan',
    category: 'Souvenir',
    price: 4000,
    priceType: 'per_pcs',
    minimumOrder: 100,
    description: 'Tas jinjing spunbond tebal 75gsm cocok untuk wadah berkatan, goodie bag seminar, maupun souvenir pernikahan praktis.',
    images: [
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
    ],
    specifications: [
      { label: 'Ketebalan Bahan', value: 'Spunbond 75 GSM Tebal Kuat' },
      { label: 'Ukuran Standar', value: '30 x 40 cm (Jahit / Press Kuat)' },
      { label: 'Kapasitas Beban', value: 'Kuat membawa beban 4-5 kg' },
    ],
    tags: ['Totebag', 'Goodiebag', 'Spunbond'],
  },
  {
    id: 19,
    code: 'S-004',
    name: 'Souvenir Kipas Bambu Tradisional Elegan',
    category: 'Souvenir',
    price: 3500,
    priceType: 'per_pcs',
    minimumOrder: 100,
    description: 'Kipas tangan bahan kain satin warna-warni dengan jari-jari bambu halus. Sangat disukai tamu undangan untuk acara outdoor/gedung.',
    images: [
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80',
    ],
    specifications: [
      { label: 'Material', value: 'Bambu Halus + Kain Satin' },
      { label: 'Panjang', value: 'Panjang 21 cm ketika terlipat' },
      { label: 'Packaging', value: 'Plastik bening + pita kawat emas' },
    ],
    tags: ['Kipas', 'Tradisional', 'Praktis'],
  },

  // -------------------------------------------------------------
  // KATEGORI: CETAK LAINNYA
  // -------------------------------------------------------------
  {
    id: 20,
    code: 'K-001',
    name: 'Buku Tamu Pernikahan / Guest Book Custom Hardcover',
    category: 'Cetak Lainnya',
    price: 45000,
    priceType: 'paket',
    minimumOrder: 1,
    description: 'Buku daftar hadir tamu undangan dengan cover hardcover laminasi doff, jilid ring spiral kawat besi, dan kolom isian rapi.',
    images: [
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    ],
    featured: true,
    specifications: [
      { label: 'Cover', value: 'Hardcover Board Tebal Laminasi Doff' },
      { label: 'Isi Halaman', value: 'HVS 100gr Tebal Tidak Tembus (30 Lembar ~ 360 Tamu)' },
      { label: 'Jilid', value: 'Spiral Kawat Putih Kokoh' },
      { label: 'Bisa Beli Satuan', value: 'Ya, minimal order 1 buku' },
    ],
    tags: ['Buku Tamu', 'Guest Book', 'Hardcover'],
  },
  {
    id: 21,
    code: 'K-002',
    name: 'Spanduk / Banner Selamat Datang Acara (Welcome Sign)',
    category: 'Cetak Lainnya',
    price: 35000,
    priceType: 'per_pcs',
    minimumOrder: 1,
    description: 'Banner selamat datang pengantin, khitanan, atau wisuda dengan bahan Flexi Korea tebal mengkilap dan cetakan tajam tahan air.',
    images: [
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80',
    ],
    variants: [
      {
        name: 'Jenis Bahan',
        options: ['Flexi Standar 280gr', 'Flexi Korea Tebal 440gr (Halus Tajam)', 'Albatros Indoor Halus'],
      },
    ],
    specifications: [
      { label: 'Ukuran Contoh', value: 'Ukuran 60 x 160 cm (Cocok untuk Standing X-Banner)' },
      { label: 'Finishing', value: 'Mata Ayam 4 Sudut / Selongsong Pipa' },
      { label: 'Tinta', value: 'Tinta Solvent Outdoor Tahan Panas & Hujan' },
    ],
    tags: ['Banner', 'Spanduk', 'Welcome Sign'],
  },
  {
    id: 22,
    code: 'K-003',
    name: 'Stiker Label Nama Undangan & Souvenir (Print & Cut)',
    category: 'Cetak Lainnya',
    price: 250,
    priceType: 'per_pcs',
    minimumOrder: 100,
    description: 'Stiker tempel label nama tamu Tom & Jerry No. 103 sudah tercetak nama rapi, atau stiker label souvenir berbentuk bulat kiss-cut.',
    images: [
      'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=800&q=80',
    ],
    specifications: [
      { label: 'Bahan', value: 'Stiker Bontax / Vinyl Anti Air' },
      { label: 'Cutting', value: 'Sudah dipotong rapi siap tempel' },
      { label: 'Format File', value: 'Bisa kirim daftar tamu via Excel/Word ke WhatsApp' },
    ],
    tags: ['Stiker', 'Label Tamu', 'Print & Cut'],
  },
  {
    id: 23,
    code: 'K-004',
    name: 'Cetak Kartu Nama Bisnis & Undangan Mini',
    category: 'Cetak Lainnya',
    price: 45000,
    priceType: 'paket',
    minimumOrder: 1,
    description: 'Cetak kartu nama 1 box isi 100 pcs bahan Art Carton 260gr dengan laminasi doff / glossy halus plus tempat box mika akrilik.',
    images: [
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80',
    ],
    specifications: [
      { label: 'Isi per Box', value: '100 pcs per Box Mika' },
      { label: 'Bahan', value: 'Art Carton 260gr / Ivory' },
      { label: 'Ukuran', value: '9 x 5.5 cm' },
    ],
    tags: ['Kartu Nama', 'Percetakan', 'Box'],
  },
  {
    id: 24,
    code: 'K-005',
    name: 'Brosur & Flier Lipat Promosi Bisnis',
    category: 'Cetak Lainnya',
    price: 850,
    priceType: 'per_pcs',
    minimumOrder: 200,
    description: 'Cetak brosur promosi ukuran A4 atau A5 lipat 2/3 dengan kertas Art Paper licin profesional untuk pameran atau event.',
    images: [
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
    ],
    specifications: [
      { label: 'Bahan', value: 'Art Paper 150gr Halus Mengkilap' },
      { label: 'Ukuran', value: 'A4 (21 x 29.7 cm)' },
      { label: 'Cetak', value: 'Full Color 2 Sisi Resolusi Offset' },
    ],
    tags: ['Brosur', 'Flier', 'Promosi'],
  },
];
