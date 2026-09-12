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
    featured: true,
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
    featured: true,
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
    featured: true,
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
    featured: true,
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
  // Belum ada data produk asli. Tambahkan di sini setelah foto & harga tersedia.
  // -------------------------------------------------------------

  // -------------------------------------------------------------
  // KATEGORI: UNDANGAN AQIQAH
  // Belum ada data produk asli. Tambahkan di sini setelah foto & harga tersedia.
  // -------------------------------------------------------------

  // -------------------------------------------------------------
  // KATEGORI: UNDANGAN ULANG TAHUN
  // Belum ada data produk asli. Tambahkan di sini setelah foto & harga tersedia.
  // -------------------------------------------------------------

  // -------------------------------------------------------------
  // KATEGORI: UNDANGAN EVENT
  // Belum ada data produk asli. Tambahkan di sini setelah foto & harga tersedia.
  // -------------------------------------------------------------

  // -------------------------------------------------------------
  // KATEGORI: SOUVENIR
  // Belum ada data produk asli. Tambahkan di sini setelah foto & harga tersedia.
  // -------------------------------------------------------------

  // -------------------------------------------------------------
  // KATEGORI: CETAK LAINNYA
  // Belum ada data produk asli. Tambahkan di sini setelah foto & harga tersedia.
  // -------------------------------------------------------------
];
