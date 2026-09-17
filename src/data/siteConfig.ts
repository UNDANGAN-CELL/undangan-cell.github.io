// =========================================================================
// === EDIT INFORMASI BRAND & KONTAK DI SINI ===============================
// File ini mengatur konfigurasi utama website RuangKarya:
// Nama brand, nomor WhatsApp, alamat, jam kerja, dan informasi kontak.
// =========================================================================

export const SITE_CONFIG = {
  // Nama brand & tagline utama
  brandName: 'RuangKarya',
  tagline: 'Undangan • Souvenir • Percetakan',
  shortDescription: 'Pusat percetakan undangan pernikahan, sunatan, aqiqah, souvenir elegan, dan kebutuhan cetak acara spesial dengan hasil presisi dan harga terjangkau.',

  // Nomor WhatsApp pemesanan (format lokal & internasional)
  // Ganti nomor di sini jika pemilik website mengganti nomor WhatsApp
  phoneDisplay: '0831-7081-9117',
  phoneRaw: '083170819117',
  whatsappNumber: '6283170819117', // Format internasional tanpa simbol + atau spasi

  // Alamat & Operasional Toko
  location: 'Ungaran Barat, Kabupaten Semarang, Jawa Tengah',
  address: 'Jl. Danau Toba, Desa Gogik, Ungaran Barat, Kabupaten Semarang',
  workingHours: 'Senin - Sabtu: 08.30 - 20.00 WIB | Minggu: 09.00 - 17.00 WIB',
  
  // Link media sosial & komunikasi
  socials: {
    instagram: 'ruangkarya.printing',
    tiktok: 'ruangkaryaprint',
    email: 'kontak@ruangkarya.id',
  },

  // Fitur jaminan / keunggulan RuangKarya
  guarantees: [
    {
      title: 'Free Desain & Konsultasi',
      desc: 'Revisi desain ramah dan fleksibel hingga siap naik cetak',
    },
    {
      title: 'Kertas & Tinta Premium',
      desc: 'Bahan tebal pilihan dengan ketajaman warna presisi tinggi',
    },
    {
      title: 'Proses Produksi Terarah',
      desc: 'Jadwal produksi dikonfirmasi sesuai jenis pesanan dan kebutuhan',
    },
    {
      title: 'Pilihan Finishing',
      desc: 'Opsi bahan dan finishing dapat disesuaikan dengan kebutuhan pesanan',
    },
  ],
};
