export interface OrderStep {
  step: number;
  title: string;
  desc: string;
  iconName: string;
}

export const HOW_TO_ORDER_STEPS: OrderStep[] = [
  {
    step: 1,
    title: 'Pilih Produk',
    desc: 'Jelajahi katalog Rumah Ijo dan pilih model undangan atau souvenir yang Anda sukai.',
    iconName: 'LayoutGrid',
  },
  {
    step: 2,
    title: 'Isi Data & Kirim Pesanan',
    desc: 'Isi jumlah, nama, tanggal acara, kota & alamat pengiriman, serta kode mitra jika punya. Pesanan terkirim otomatis ke admin via WhatsApp.',
    iconName: 'FileText',
  },
  {
    step: 3,
    title: 'Konfirmasi Total',
    desc: 'Admin mengonfirmasi harga, ongkir, dan total final, lalu mengirim faktur.',
    iconName: 'CheckCircle2',
  },
  {
    step: 4,
    title: 'Bayar Total Faktur',
    desc: 'Bayar sesuai total faktur, lewat mitra Anda atau transfer langsung ke rekening kami. Produksi dimulai setelah pembayaran diterima.',
    iconName: 'Wallet',
  },
  {
    step: 5,
    title: 'Desain & Produksi',
    desc: 'Draft desain dikirim untuk Anda cek dan setujui (ACC). Setelah ACC, pesanan masuk antrean cetak dengan QC ketat.',
    iconName: 'Printer',
  },
  {
    step: 6,
    title: 'Pesanan Selesai & Kirim',
    desc: 'Pesanan dipacking aman lapis bubble wrap tebal dan dikirim ke alamat Anda.',
    iconName: 'PackageCheck',
  },
];
