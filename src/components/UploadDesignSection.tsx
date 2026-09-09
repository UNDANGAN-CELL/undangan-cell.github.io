import React, { useState } from 'react';
import { UploadCloud, FileCheck, MessageCircle, AlertCircle, Sparkles, Image as ImageIcon } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';
import { buildUploadDesignMessage, openWhatsAppChat } from '../utils/whatsapp';

export const UploadDesignSection: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [productType, setProductType] = useState('Undangan Pernikahan');
  const [quantity, setQuantity] = useState<number | string>(200);
  const [customerName, setCustomerName] = useState('');
  const [notes, setNotes] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);

      if (file.type.startsWith('image/')) {
        const url = URL.createObjectURL(file);
        setPreviewUrl(url);
      } else {
        setPreviewUrl(null);
      }
    }
  };

  const handleSendViaWhatsApp = () => {
    const msg = buildUploadDesignMessage({
      fileName: selectedFile ? selectedFile.name : undefined,
      productType,
      quantity,
      customerName: customerName.trim() || undefined,
      notes: notes.trim() || undefined,
    });
    openWhatsAppChat(msg);
  };

  return (
    <section id="upload-desain-section" className="py-16 bg-stone-50 border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl border border-stone-200 p-6 sm:p-10 shadow-sm space-y-6">
          
          {/* Header */}
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Cetak Custom Design</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
              Punya Desain Sendiri?
            </h2>
            <p className="text-sm sm:text-base text-stone-600 max-w-xl mx-auto">
              Anda juga dapat mengirim desain sendiri kepada kami. Kami bantu cek resolusi cetak, tata letak, dan konversi warna agar hasil cetak maksimal.
            </p>
          </div>

          {/* Upload Area (Client-side file preview) */}
          <div className="space-y-4">
            <div className="border-2 border-dashed border-stone-300 hover:border-emerald-500 rounded-2xl p-6 text-center transition bg-stone-50/50 hover:bg-stone-50 cursor-pointer relative">
              <input
                type="file"
                accept="image/*,.pdf,.psd,.ai,.cdr"
                onChange={handleFileChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                id="design-file-input"
              />
              
              <div className="flex flex-col items-center justify-center space-y-2">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <UploadCloud className="w-6 h-6" />
                </div>
                <div className="text-sm font-bold text-stone-800">
                  {selectedFile ? 'Ganti File Desain' : 'Klik atau Tarik File Desain ke Sini'}
                </div>
                <p className="text-xs text-stone-500">
                  Format: JPG, PNG, PDF, PSD, AI, atau CDR (Maksimal 50MB)
                </p>
              </div>
            </div>

            {/* Selected File Information Bar & Local Preview */}
            {selectedFile && (
              <div className="p-4 rounded-xl bg-emerald-50/80 border border-emerald-200 flex flex-col sm:flex-row items-center gap-4">
                {previewUrl ? (
                  <img
                    src={previewUrl}
                    alt="Preview Desain"
                    className="w-16 h-16 rounded-lg object-cover border border-emerald-300 shrink-0"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <FileCheck className="w-8 h-8" />
                  </div>
                )}
                
                <div className="flex-1 text-center sm:text-left">
                  <div className="text-xs font-bold text-stone-900 truncate max-w-xs">
                    {selectedFile.name}
                  </div>
                  <div className="text-[11px] text-stone-500">
                    Ukuran file: {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                  </div>
                  <div className="text-xs text-emerald-800 font-semibold mt-0.5">
                    ✓ File siap dikonsultasikan
                  </div>
                </div>
              </div>
            )}

            {/* Quick Details Form */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div>
                <label className="text-xs font-bold text-stone-800 mb-1 block">
                  Kategori / Jenis Produk
                </label>
                <select
                  value={productType}
                  onChange={(e) => setProductType(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-200 rounded-xl focus:bg-white focus:outline-none"
                >
                  <option value="Undangan Pernikahan">Undangan Pernikahan</option>
                  <option value="Undangan Sunatan">Undangan Sunatan</option>
                  <option value="Undangan Aqiqah">Undangan Aqiqah</option>
                  <option value="Undangan Ulang Tahun">Undangan Ulang Tahun</option>
                  <option value="Souvenir Custom">Souvenir Custom</option>
                  <option value="Buku Tamu / Banner / Brosur">Buku Tamu / Banner / Brosur</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-stone-800 mb-1 block">
                  Rencana Jumlah (pcs)
                </label>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  placeholder="Contoh: 300"
                  className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-200 rounded-xl focus:bg-white focus:outline-none"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="text-xs font-bold text-stone-800 mb-1 block">
                  Nama Pemesan & Catatan Tambahan (Bahan, Warna, Ukuran)
                </label>
                <input
                  type="text"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Contoh: Saya punya file PDF A5 bolak balik, ingin bahan Jasmine"
                  className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-200 rounded-xl focus:bg-white focus:outline-none"
                />
              </div>
            </div>

            {/* Honest Technical Note required by prompt */}
            <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <p className="leading-relaxed text-[11px]">
                Untuk memastikan file diterima admin dengan kualitas asli tanpa terkompresi, silakan kirim file desain melalui WhatsApp setelah menghubungi kami.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                id="btn-upload-send-wa"
                type="button"
                onClick={handleSendViaWhatsApp}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white text-sm font-bold shadow transition cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Kirim Desain via WhatsApp</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
