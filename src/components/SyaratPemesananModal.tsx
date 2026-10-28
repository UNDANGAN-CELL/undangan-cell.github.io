import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';

interface SyaratPemesananModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SECTIONS: { title: string; body: string[] }[] = [
  {
    title: '1. Pemesanan',
    body: [
      'Pesanan dikirim melalui form di website, lalu dikonfirmasi admin lewat WhatsApp. Pengisian form belum berarti pesanan sudah dibayar atau sudah diproduksi.',
      'Pastikan nama, tanggal acara, dan alamat pengiriman sudah benar. Data yang salah bisa mempengaruhi jadwal dan biaya.',
    ],
  },
  {
    title: '2. Harga dan Ongkir',
    body: [
      'Harga di website adalah harga katalog produk dan belum termasuk ongkir.',
      'Admin akan mengonfirmasi ongkir setelah alamat dan jumlah pesanan diketahui. Total final tercantum di faktur, dan itulah jumlah yang wajib dibayar.',
    ],
  },
  {
    title: '3. Pembayaran',
    body: [
      'Pembayaran dilakukan sebesar total faktur. Jika Anda memesan lewat mitra, pembayaran dilakukan kepada mitra tersebut. Jika tidak, pembayaran dilakukan langsung ke rekening ' + SITE_CONFIG.brandName + '.',
      'Bukti pembayaran dikirim melalui WhatsApp. Produksi dimulai setelah pembayaran diterima dan terverifikasi.',
    ],
  },
  {
    title: '4. Desain dan Produksi',
    body: [
      'Draft desain dikirim untuk dicek dan disetujui (ACC) sebelum masuk cetak.',
      'Estimasi pengerjaan dihitung setelah pembayaran diterima dan data acara lengkap. Estimasi di halaman produk bukan jaminan jadwal jika data atau persetujuan terlambat diberikan.',
    ],
  },
  {
    title: '5. Revisi',
    body: [
      'Jumlah revisi mengikuti ketentuan setiap produk. Untuk undangan digital, revisi maksimal 5 kali.',
      'Revisi diajukan melalui WhatsApp. Revisi di luar ketentuan dapat dikenai biaya tambahan yang disepakati sebelum dikerjakan.',
    ],
  },
  {
    title: '6. Pembatalan dan Pengembalian Dana',
    body: [
      'Pembatalan sebelum produksi dimulai dapat dilakukan dengan memberi tahu kami atau mitra Anda. Pengembalian dana dilakukan sesuai jalur pembayaran.',
      'Pembatalan setelah produksi dimulai dapat dikenai potongan sesuai biaya produksi yang sudah dikeluarkan.',
    ],
  },
  {
    title: '7. Komplain',
    body: [
      'Sampaikan komplain melalui WhatsApp disertai bukti foto. Komplain dengan mitra diteruskan kepada kami bila diperlukan.',
    ],
  },
];

export const SyaratPemesananModal: React.FC<SyaratPemesananModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      id="syarat-pemesanan-modal"
      className="fixed inset-0 z-[70] flex items-center justify-center p-3 sm:p-4 bg-stone-900/70"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="syarat-title"
        className="relative w-full max-w-lg max-h-[88vh] flex flex-col bg-white rounded-2xl shadow-2xl border border-stone-200"
      >
        <div className="flex items-center justify-between gap-3 p-4 sm:p-5 border-b border-stone-200">
          <h2 id="syarat-title" className="text-base sm:text-lg font-extrabold text-stone-900">
            Syarat Pemesanan
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup syarat pemesanan"
            className="p-1.5 rounded-full text-stone-500 hover:text-stone-900 hover:bg-stone-100 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="overflow-y-auto p-4 sm:p-5 space-y-4 text-sm text-stone-700 leading-relaxed">
          {SECTIONS.map((sec) => (
            <section key={sec.title} className="space-y-1.5">
              <h3 className="font-bold text-stone-900">{sec.title}</h3>
              {sec.body.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </section>
          ))}
        </div>

        <div className="p-4 sm:p-5 border-t border-stone-200">
          <button
            type="button"
            onClick={onClose}
            className="w-full py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-sm font-bold transition cursor-pointer"
          >
            Saya mengerti
          </button>
        </div>
      </div>
    </div>
  );
};
