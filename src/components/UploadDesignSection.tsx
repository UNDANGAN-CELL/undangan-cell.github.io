import React, { useState } from 'react';
import { MessageCircle, Sparkles, FileText, Paperclip } from 'lucide-react';
import { buildCustomOrderMessage, openWhatsAppChat, DesignStatus } from '../utils/whatsapp';

/**
 * Pesanan custom. Website ini statis (tanpa server), jadi file TIDAK diunggah
 * di sini. Pengunjung mengisi ringkasan singkat → WhatsApp terbuka dengan
 * pesan yang sudah terisi → file/referensi dilampirkan langsung di chat.
 */

const PRODUCT_OPTIONS = [
  'Undangan Pernikahan',
  'Undangan Sunatan',
  'Undangan Aqiqah',
  'Undangan Ulang Tahun',
  'Undangan Event',
  'Souvenir Custom',
  'Buku Tamu / Banner / Brosur',
  'Sablon (sebutkan barangnya di catatan)',
  'Lainnya (jelaskan di catatan)',
];

const DESIGN_OPTIONS: { value: DesignStatus; title: string; hint: string }[] = [
  { value: 'siap', title: 'Sudah punya desain jadi', hint: 'Tinggal dicek dan dicetak' },
  { value: 'referensi', title: 'Punya ide / referensi', hint: 'Minta dibuatkan desainnya' },
  { value: 'konsultasi', title: 'Belum ada, mau konsultasi', hint: 'Diskusi dulu bersama admin' },
];

const fieldClass =
  'w-full px-3 py-2.5 text-sm bg-stone-50 border border-stone-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500';

export const UploadDesignSection: React.FC = () => {
  const [designStatus, setDesignStatus] = useState<DesignStatus>('siap');
  const [productType, setProductType] = useState(PRODUCT_OPTIONS[0]);
  const [quantity, setQuantity] = useState('');
  const [deadline, setDeadline] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [notes, setNotes] = useState('');

  const handleSend = () => {
    openWhatsAppChat(
      buildCustomOrderMessage({
        designStatus,
        productType,
        quantity: quantity.trim() || undefined,
        deadline: deadline || undefined,
        customerName: customerName.trim() || undefined,
        notes: notes.trim() || undefined,
      })
    );
  };

  const attachTips: Record<DesignStatus, string[]> = {
    siap: [
      'File desain (PDF, AI, CDR, PSD, atau PNG resolusi tinggi)',
      'Ukuran cetak dan jumlah halaman/sisi, bila belum tertulis di file',
    ],
    referensi: [
      'Foto atau contoh desain yang kamu suka',
      'Teks yang ingin dicantumkan (nama, tanggal, lokasi) dan logo/foto bila ada',
    ],
    konsultasi: [
      'Gambaran acara atau kebutuhanmu',
      'Perkiraan jumlah dan tanggal dibutuhkan, bila sudah ada',
    ],
  };

  return (
    <section id="upload-desain-section" className="py-16 bg-[#f3efe6] border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-[#faf8f4] rounded-3xl border border-stone-200/90 p-6 sm:p-10 shadow-sm space-y-7">
          {/* Header */}
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Pesanan Custom</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
              Punya Desain atau Ide Sendiri?
            </h2>
            <p className="text-sm sm:text-base text-stone-600 max-w-xl mx-auto">
              Pesanan custom diproses lewat WhatsApp. Isi ringkasan singkat di bawah, lalu kirim file atau referensimu langsung di chat dengan admin.
            </p>
          </div>

          {/* Langkah */}
          <ol className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm">
            {[
              'Isi ringkasan pesanan di bawah',
              'WhatsApp terbuka dengan pesan yang sudah terisi',
              'Lampirkan file atau referensi di chat, lalu kirim',
            ].map((text, i) => (
              <li key={text} className="flex sm:flex-col items-start gap-2.5 sm:gap-2 p-3.5 rounded-xl bg-white/70 border border-stone-200/80">
                <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-600 text-white text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <span className="text-stone-700 leading-snug">{text}</span>
              </li>
            ))}
          </ol>

          {/* Kondisi desain */}
          <fieldset className="space-y-2">
            <legend className="text-xs font-bold text-stone-800 mb-1">Kondisi desainmu</legend>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {DESIGN_OPTIONS.map((opt) => {
                const active = designStatus === opt.value;
                return (
                  <label
                    key={opt.value}
                    className={`cursor-pointer rounded-xl border p-3 transition focus-within:ring-2 focus-within:ring-emerald-500/40 ${
                      active
                        ? 'border-emerald-600 bg-emerald-50'
                        : 'border-stone-200 bg-stone-50 hover:border-stone-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="design-status"
                      value={opt.value}
                      checked={active}
                      onChange={() => setDesignStatus(opt.value)}
                      className="sr-only"
                    />
                    <span className="block text-sm font-bold text-stone-900">{opt.title}</span>
                    <span className="block text-[11px] text-stone-500 mt-0.5">{opt.hint}</span>
                  </label>
                );
              })}
            </div>
          </fieldset>

          {/* Form ringkas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label htmlFor="custom-product" className="text-xs font-bold text-stone-800 mb-1 block">
                Jenis produk
              </label>
              <select
                id="custom-product"
                value={productType}
                onChange={(e) => setProductType(e.target.value)}
                className={fieldClass}
              >
                {PRODUCT_OPTIONS.map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="custom-qty" className="text-xs font-bold text-stone-800 mb-1 block">
                Rencana jumlah (opsional)
              </label>
              <input
                id="custom-qty"
                type="number"
                min={1}
                inputMode="numeric"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                placeholder="Contoh: 300"
                className={fieldClass}
              />
            </div>

            <div>
              <label htmlFor="custom-name" className="text-xs font-bold text-stone-800 mb-1 block">
                Nama pemesan (opsional)
              </label>
              <input
                id="custom-name"
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="Contoh: Bagio"
                className={fieldClass}
              />
            </div>

            <div>
              <label htmlFor="custom-deadline" className="text-xs font-bold text-stone-800 mb-1 block">
                Dibutuhkan tanggal (opsional)
              </label>
              <input
                id="custom-deadline"
                type="date"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                className={fieldClass}
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="custom-notes" className="text-xs font-bold text-stone-800 mb-1 block">
                Catatan tambahan (opsional)
              </label>
              <textarea
                id="custom-notes"
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Contoh: ukuran A5 bolak-balik, bahan jasmine"
                className={`${fieldClass} resize-none`}
              />
            </div>
          </div>

          {/* Panduan lampiran */}
          <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 space-y-2">
            <div className="flex items-center gap-2 text-sm font-bold text-emerald-900">
              <Paperclip className="w-4 h-4" />
              <span>Yang dikirim di chat WhatsApp</span>
            </div>
            <ul className="list-disc pl-5 space-y-1 text-xs sm:text-[13px] text-stone-700 leading-relaxed">
              {attachTips[designStatus].map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
            <p className="flex items-start gap-2 text-[11px] sm:text-xs text-stone-600 leading-relaxed pt-1">
              <FileText className="w-3.5 h-3.5 shrink-0 mt-0.5 text-emerald-700" />
              <span>
                Kirim gambar desain sebagai <strong>Dokumen</strong> (bukan Foto) agar kualitasnya tidak dikompres WhatsApp. File yang terlalu besar bisa dikirim lewat tautan Google Drive.
              </span>
            </p>
          </div>

          {/* CTA */}
          <button
            id="btn-upload-send-wa"
            type="button"
            onClick={handleSend}
            className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 active:scale-[0.98] text-white text-sm sm:text-base font-bold shadow-md hover:shadow-lg transition cursor-pointer min-h-[48px]"
          >
            <MessageCircle className="w-4 h-4 fill-white/20" />
            <span>Kirim Pesanan Custom via WhatsApp</span>
          </button>
        </div>
      </div>
    </section>
  );
};
