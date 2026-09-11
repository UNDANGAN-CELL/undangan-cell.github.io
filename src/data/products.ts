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
    code: '2518',
    name: 'Undangan Pernikahan Arch Gold Leaf Elegan',
    category: 'Undangan Pernikahan',
    price: 1100,
    priceType: 'per_pcs',
    minimumOrder: 100,
    description: 'Desain arch modern dengan latar gelap elegan, dihiasi foil dedaunan hijau-emas melingkar di sekitar sekat nama mempelai.',
    images: [
      '/images/undangan/2518.jpg',
    ],
    specifications: [
      { label: 'Kode Desain', value: '2518' },
      { label: 'Catatan', value: 'Nama, tanggal, dan lokasi acara dapat disesuaikan sesuai data pemesan.' },
    ],
    tags: ['Elegan', 'Gold Leaf', 'Arch', 'Modern'],
  },
  {
    id: 2,
    code: '2409',
    name: 'Undangan Pernikahan Landscape Floral Pastel',
    category: 'Undangan Pernikahan',
    price: 1760,
    priceType: 'per_pcs',
    minimumOrder: 100,
    description: 'Model landscape dengan latar putih bersih, dipercantik ilustrasi bunga garis (line art) peach-pink lembut di sudut kartu.',
    images: [
      '/images/undangan/2409.jpg',
    ],
    specifications: [
      { label: 'Kode Desain', value: '2409' },
      { label: 'Catatan', value: 'Nama, tanggal, dan lokasi acara dapat disesuaikan sesuai data pemesan.' },
    ],
    tags: ['Landscape', 'Floral', 'Pastel', 'Simple'],
  },
  {
    id: 3,
    code: '2322',
    name: 'Undangan Pernikahan Hijau Army Geometris Premium',
    category: 'Undangan Pernikahan',
    price: 11000,
    priceType: 'per_pcs',
    minimumOrder: 100,
    description: 'Cover luar hijau army bermotif garis geometris foil emas, dibuka menampilkan cover dalam floral merah muda-jingga dengan rangkaian bunga besar di tengah. Ukuran lebih besar dari standar.',
    images: [
      '/images/undangan/2322.jpg',
    ],
    specifications: [
      { label: 'Kode Desain', value: '2322' },
      { label: 'Catatan', value: 'Nama, tanggal, dan lokasi acara dapat disesuaikan sesuai data pemesan.' },
    ],
    tags: ['Hijau Army', 'Geometris', 'Bunga Besar', 'Premium'],
  },
  {
    id: 4,
    code: '2403',
    name: 'Undangan Pernikahan Gradasi Wreath Mawar',
    category: 'Undangan Pernikahan',
    price: 1080,
    priceType: 'per_pcs',
    minimumOrder: 100,
    description: 'Nuansa gradasi cokelat ke krem yang hangat, dihiasi wreath bunga mawar dan garis melingkar putih bergaya klasik.',
    images: [
      '/images/undangan/2403.jpg',
    ],
    specifications: [
      { label: 'Kode Desain', value: '2403' },
      { label: 'Catatan', value: 'Nama, tanggal, dan lokasi acara dapat disesuaikan sesuai data pemesan.' },
    ],
    tags: ['Gradasi', 'Wreath', 'Mawar', 'Klasik'],
  },
  {
    id: 5,
    code: '88110',
    name: 'Undangan Pernikahan Klasik Bunga Kamboja Emas',
    category: 'Undangan Pernikahan',
    price: 2640,
    priceType: 'per_pcs',
    minimumOrder: 100,
    description: 'Desain klasik islami warna kuning krem lembut dengan ilustrasi bunga kamboja/hibiscus bergaya vintage keemasan.',
    images: [
      '/images/undangan/88110.jpg',
    ],
    specifications: [
      { label: 'Kode Desain', value: '88110' },
      { label: 'Catatan', value: 'Nama, tanggal, dan lokasi acara dapat disesuaikan sesuai data pemesan.' },
    ],
    tags: ['Klasik', 'Kuning', 'Bunga Kamboja', 'Islami'],
  },
  {
    id: 6,
    code: '2511',
    name: 'Undangan Pernikahan Marble Rose Gold Botanical',
    category: 'Undangan Pernikahan',
    price: 1100,
    priceType: 'per_pcs',
    minimumOrder: 100,
    description: 'Latar bertekstur marble abu-abu dipadukan bunga mawar rose gold dan dedaunan kering botanical yang natural.',
    images: [
      '/images/undangan/2511.jpg',
    ],
    specifications: [
      { label: 'Kode Desain', value: '2511' },
      { label: 'Catatan', value: 'Nama, tanggal, dan lokasi acara dapat disesuaikan sesuai data pemesan.' },
    ],
    tags: ['Marble', 'Rose Gold', 'Botanical', 'Elegan'],
  },
  {
    id: 7,
    code: '2325',
    name: 'Undangan Pernikahan Lace Emboss Emas Multiguna',
    category: 'Undangan Pernikahan',
    price: 14300,
    priceType: 'per_pcs',
    minimumOrder: 100,
    description: 'Desain mewah dengan emboss motif lace/mandala berlapis foil emas penuh di kedua sisi. Blangko ini juga bisa dipakai untuk acara peresmian, khitanan, dan gathering.',
    images: [
      '/images/undangan/2325.jpg',
    ],
    specifications: [
      { label: 'Kode Desain', value: '2325' },
      { label: 'Catatan', value: 'Nama, tanggal, dan lokasi acara dapat disesuaikan sesuai data pemesan.' },
    ],
    tags: ['Lace', 'Emboss', 'Emas', 'Multiguna', 'Premium'],
  },
  {
    id: 8,
    code: '8887',
    name: 'Undangan Pernikahan Scalloped Daisy Ceria',
    category: 'Undangan Pernikahan',
    price: 2420,
    priceType: 'per_pcs',
    minimumOrder: 100,
    description: 'Bentuk unik dengan potongan scalloped menyerupai kelopak bunga daisy putih-hijau, memberi kesan ceria dan fresh.',
    images: [
      '/images/undangan/8887.jpg',
    ],
    specifications: [
      { label: 'Kode Desain', value: '8887' },
      { label: 'Catatan', value: 'Nama, tanggal, dan lokasi acara dapat disesuaikan sesuai data pemesan.' },
    ],
    tags: ['Unik', 'Daisy', 'Scalloped', 'Ceria'],
  },
  {
    id: 9,
    code: '2319',
    name: 'Undangan Pernikahan Emboss Nameplate Elegan',
    category: 'Undangan Pernikahan',
    price: 8800,
    priceType: 'per_pcs',
    minimumOrder: 100,
    description: 'Cover emboss krem lembut bermotif floral timbul dengan nameplate foil emas oval, bagian dalam bernuansa peach-cokelat berornamen renda klasik.',
    images: [
      '/images/undangan/2319.jpg',
    ],
    specifications: [
      { label: 'Kode Desain', value: '2319' },
      { label: 'Catatan', value: 'Nama, tanggal, dan lokasi acara dapat disesuaikan sesuai data pemesan.' },
    ],
    tags: ['Emboss', 'Nameplate', 'Elegan', 'Krem'],
  },
  {
    id: 10,
    code: '2515',
    name: 'Undangan Pernikahan Hexagon Floral Mauve',
    category: 'Undangan Pernikahan',
    price: 1100,
    priceType: 'per_pcs',
    minimumOrder: 100,
    description: 'Frame hexagon bergaris rose gold dipadu ilustrasi floral watercolor ungu-mauve yang lembut dan romantis.',
    images: [
      '/images/undangan/2515.jpg',
    ],
    specifications: [
      { label: 'Kode Desain', value: '2515' },
      { label: 'Catatan', value: 'Nama, tanggal, dan lokasi acara dapat disesuaikan sesuai data pemesan.' },
    ],
    tags: ['Hexagon', 'Watercolor', 'Mauve', 'Elegan'],
  },
  {
    id: 11,
    code: '2314',
    name: 'Undangan Pernikahan Vintage Frame Foto Custom',
    category: 'Undangan Pernikahan',
    price: 1540,
    priceType: 'per_pcs',
    minimumOrder: 100,
    description: 'Desain vintage dengan bingkai oval keemasan yang dapat diisi nama, inisial, atau foto pasangan sesuai pesanan. Blangko ini juga dipakai untuk acara khitanan dan lainnya.',
    images: [
      '/images/undangan/2314.jpg',
    ],
    specifications: [
      { label: 'Kode Desain', value: '2314' },
      { label: 'Catatan', value: 'Nama, tanggal, dan lokasi acara dapat disesuaikan sesuai data pemesan.' },
    ],
    tags: ['Vintage', 'Frame Foto', 'Multiguna', 'Custom'],
  },
  {
    id: 12,
    code: '8882',
    name: 'Undangan Pernikahan Monogram Kupu-kupu Emboss',
    category: 'Undangan Pernikahan',
    price: 2420,
    priceType: 'per_pcs',
    minimumOrder: 100,
    description: 'Motif emboss timbul berupa hati dan sulur lembut, dilengkapi monogram inisial pasangan dengan aksen kupu-kupu foil.',
    images: [
      '/images/undangan/8882.jpg',
    ],
    specifications: [
      { label: 'Kode Desain', value: '8882' },
      { label: 'Catatan', value: 'Nama, tanggal, dan lokasi acara dapat disesuaikan sesuai data pemesan.' },
    ],
    tags: ['Monogram', 'Emboss', 'Kupu-kupu', 'Elegan'],
  },
  {
    id: 13,
    code: '2406',
    name: 'Undangan Pernikahan Arch Modern Gold Leaf Gelap',
    category: 'Undangan Pernikahan',
    price: 1210,
    priceType: 'per_pcs',
    minimumOrder: 100,
    description: 'Frame arch modern dengan latar gradasi gelap elegan, dipercantik foil dedaunan emas di sudut bawah kartu.',
    images: [
      '/images/undangan/2406.jpg',
    ],
    specifications: [
      { label: 'Kode Desain', value: '2406' },
      { label: 'Catatan', value: 'Nama, tanggal, dan lokasi acara dapat disesuaikan sesuai data pemesan.' },
    ],
    tags: ['Arch', 'Modern', 'Gold Leaf', 'Gelap'],
  },
  {
    id: 14,
    code: '2320',
    name: 'Undangan Pernikahan Gold Peony Mewah',
    category: 'Undangan Pernikahan',
    price: 11000,
    priceType: 'per_pcs',
    minimumOrder: 100,
    description: 'Dasar keemasan dengan pola bunga peony putih berulang di cover luar, serta rangkaian bunga peony foil emas bertumpuk di cover dalam.',
    images: [
      '/images/undangan/2320.jpg',
    ],
    specifications: [
      { label: 'Kode Desain', value: '2320' },
      { label: 'Catatan', value: 'Nama, tanggal, dan lokasi acara dapat disesuaikan sesuai data pemesan.' },
    ],
    tags: ['Gold', 'Peony', 'Mewah', 'Elegan'],
  },
  {
    id: 15,
    code: '2520',
    name: 'Undangan Pernikahan Ornamen Batik Klasik',
    category: 'Undangan Pernikahan',
    price: 1015,
    priceType: 'per_pcs',
    minimumOrder: 100,
    description: "Motif ornamen bergaya batik/ukiran klasik warna marun-krem, dengan judul 'Undangan' berkaligrafi foil emas.",
    images: [
      '/images/undangan/2520.jpg',
    ],
    specifications: [
      { label: 'Kode Desain', value: '2520' },
      { label: 'Catatan', value: 'Nama, tanggal, dan lokasi acara dapat disesuaikan sesuai data pemesan.' },
    ],
    tags: ['Batik', 'Klasik', 'Marun', 'Etnik'],
  },
  {
    id: 16,
    code: '2317',
    name: 'Undangan Pernikahan Geometris Hitam Gold Floral',
    category: 'Undangan Pernikahan',
    price: 2200,
    priceType: 'per_pcs',
    minimumOrder: 100,
    description: 'Tampilan mewah dengan latar hitam elegan, garis geometris emas, dan rangkaian bunga pastel pink-biru di keempat sudut.',
    images: [
      '/images/undangan/2317.jpg',
    ],
    specifications: [
      { label: 'Kode Desain', value: '2317' },
      { label: 'Catatan', value: 'Nama, tanggal, dan lokasi acara dapat disesuaikan sesuai data pemesan.' },
    ],
    tags: ['Hitam', 'Geometris', 'Floral Pastel', 'Mewah'],
  },
  {
    id: 17,
    code: '2516',
    name: 'Undangan Pernikahan Magnolia Line Art',
    category: 'Undangan Pernikahan',
    price: 1100,
    priceType: 'per_pcs',
    minimumOrder: 100,
    description: 'Ilustrasi bunga magnolia bergaya line art hijau dengan sentuhan foil emas di kelopak, tampilan botanical modern.',
    images: [
      '/images/undangan/2516.jpg',
    ],
    specifications: [
      { label: 'Kode Desain', value: '2516' },
      { label: 'Catatan', value: 'Nama, tanggal, dan lokasi acara dapat disesuaikan sesuai data pemesan.' },
    ],
    tags: ['Magnolia', 'Line Art', 'Botanical', 'Modern'],
  },
  {
    id: 18,
    code: '2315',
    name: 'Undangan Pernikahan Watercolor Mawar Peach',
    category: 'Undangan Pernikahan',
    price: 1540,
    priceType: 'per_pcs',
    minimumOrder: 100,
    description: 'Ilustrasi watercolor bunga mawar peach-hijau yang lembut dengan latar krem kehijauan pastel, kesan romantis.',
    images: [
      '/images/undangan/2315.jpg',
    ],
    specifications: [
      { label: 'Kode Desain', value: '2315' },
      { label: 'Catatan', value: 'Nama, tanggal, dan lokasi acara dapat disesuaikan sesuai data pemesan.' },
    ],
    tags: ['Watercolor', 'Mawar', 'Pastel', 'Romantis'],
  },
  {
    id: 19,
    code: '2513',
    name: 'Undangan Pernikahan Calla Lily Minimalis',
    category: 'Undangan Pernikahan',
    price: 1040,
    priceType: 'per_pcs',
    minimumOrder: 100,
    description: 'Ilustrasi bunga calla lily putih dengan border abu-abu tipis, tampilan minimalis dan modern.',
    images: [
      '/images/undangan/2513.jpg',
    ],
    specifications: [
      { label: 'Kode Desain', value: '2513' },
      { label: 'Catatan', value: 'Nama, tanggal, dan lokasi acara dapat disesuaikan sesuai data pemesan.' },
    ],
    tags: ['Calla Lily', 'Minimalis', 'Monokrom'],
  },
  {
    id: 20,
    code: '2519',
    name: 'Undangan Pernikahan Line Art Sketsa Bunga',
    category: 'Undangan Pernikahan',
    price: 1125,
    priceType: 'per_pcs',
    minimumOrder: 100,
    description: 'Sketsa garis tangan (line art) rangkaian bunga liar hitam putih, memberi kesan personal dan simpel.',
    images: [
      '/images/undangan/2519.jpg',
    ],
    specifications: [
      { label: 'Kode Desain', value: '2519' },
      { label: 'Catatan', value: 'Nama, tanggal, dan lokasi acara dapat disesuaikan sesuai data pemesan.' },
    ],
    tags: ['Line Art', 'Minimalis', 'Monokrom', 'Simpel'],
  },
  {
    id: 21,
    code: '2407',
    name: 'Undangan Pernikahan Sakura Glitter Emas',
    category: 'Undangan Pernikahan',
    price: 1210,
    priceType: 'per_pcs',
    minimumOrder: 100,
    description: 'Cabang bunga sakura peach dengan taburan glitter emas dan latar gradasi lembut, tampilan feminin.',
    images: [
      '/images/undangan/2407.jpg',
    ],
    specifications: [
      { label: 'Kode Desain', value: '2407' },
      { label: 'Catatan', value: 'Nama, tanggal, dan lokasi acara dapat disesuaikan sesuai data pemesan.' },
    ],
    tags: ['Sakura', 'Glitter Emas', 'Feminin'],
  },
  {
    id: 22,
    code: '2517',
    name: 'Undangan Pernikahan Etnik Navy Gold Frame Foto',
    category: 'Undangan Pernikahan',
    price: 1000,
    priceType: 'per_pcs',
    minimumOrder: 100,
    description: 'Ornamen etnik navy-emas dengan bingkai foto/nama di bagian tengah. Blangko ini juga bisa dipakai untuk acara khitanan.',
    images: [
      '/images/undangan/2517.jpg',
    ],
    specifications: [
      { label: 'Kode Desain', value: '2517' },
      { label: 'Catatan', value: 'Nama, tanggal, dan lokasi acara dapat disesuaikan sesuai data pemesan.' },
    ],
    tags: ['Etnik', 'Navy Gold', 'Frame Foto', 'Multiguna'],
  },
  {
    id: 23,
    code: '2405',
    name: 'Undangan Pernikahan Marble Peony Monokrom',
    category: 'Undangan Pernikahan',
    price: 1100,
    priceType: 'per_pcs',
    minimumOrder: 100,
    description: 'Latar marble abu-abu dengan ilustrasi bunga peony monokrom bergaris emas tipis di sudut kartu.',
    images: [
      '/images/undangan/2405.jpg',
    ],
    specifications: [
      { label: 'Kode Desain', value: '2405' },
      { label: 'Catatan', value: 'Nama, tanggal, dan lokasi acara dapat disesuaikan sesuai data pemesan.' },
    ],
    tags: ['Marble', 'Peony', 'Monokrom', 'Elegan'],
  },
  {
    id: 24,
    code: '2510',
    name: 'Undangan Pernikahan Modern Mawar Outline',
    category: 'Undangan Pernikahan',
    price: 1320,
    priceType: 'per_pcs',
    minimumOrder: 100,
    description: 'Latar abu-abu dengan efek robekan kertas artistik dan ilustrasi bunga mawar outline emas, tampilan modern edgy.',
    images: [
      '/images/undangan/2510.jpg',
    ],
    specifications: [
      { label: 'Kode Desain', value: '2510' },
      { label: 'Catatan', value: 'Nama, tanggal, dan lokasi acara dapat disesuaikan sesuai data pemesan.' },
    ],
    tags: ['Modern', 'Mawar Outline', 'Abu-abu', 'Edgy'],
  },
  {
    id: 25,
    code: '2401',
    name: 'Undangan Pernikahan Marble Diamond Frame',
    category: 'Undangan Pernikahan',
    price: 1015,
    priceType: 'per_pcs',
    minimumOrder: 100,
    description: 'Latar marble putih dengan frame diamond, dihiasi bunga mawar biru dusty dan aksen daun foil emas.',
    images: [
      '/images/undangan/2401.jpg',
    ],
    specifications: [
      { label: 'Kode Desain', value: '2401' },
      { label: 'Catatan', value: 'Nama, tanggal, dan lokasi acara dapat disesuaikan sesuai data pemesan.' },
    ],
    tags: ['Marble', 'Diamond Frame', 'Biru Dusty', 'Elegan'],
  },

  // -------------------------------------------------------------
  // KATEGORI: UNDANGAN SUNATAN / KHITANAN
  // -------------------------------------------------------------
  {
    id: 26,
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
    id: 27,
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
    id: 28,
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
    id: 29,
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
    id: 30,
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
    id: 31,
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
    id: 32,
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
    id: 33,
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
    id: 34,
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
    id: 35,
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
    id: 36,
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
    id: 37,
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
    id: 38,
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
    id: 39,
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
    id: 40,
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
    id: 41,
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
    id: 42,
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
    id: 43,
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
    id: 44,
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
