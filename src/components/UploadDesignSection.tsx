import React from 'react';
import { FileUp, MessageCircle, CheckCircle2 } from 'lucide-react';
import { buildQuickConsultMessage, openWhatsAppChat } from '../utils/whatsapp';

export const UploadDesignSection: React.FC = () => {
  return (
    <section id="upload-desain-section" className="py-12 sm:py-14 bg-[#f3efe6] border-t border-stone-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-[#faf8f4] rounded-3xl border border-stone-200 p-6 sm:p-9 shadow-sm">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold"><FileUp className="w-3.5 h-3.5" /> Punya Desain Sendiri?</div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mt-3">Kirim Desain Langsung lewat WhatsApp</h2>
            <p className="text-sm text-stone-600 mt-2 leading-relaxed">Website ini tidak menyimpan file pelanggan. Setelah chat WhatsApp terbuka, lampirkan file desain asli langsung di chat agar admin menerima file dengan kualitas penuh.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-3 mt-7">
            {['Klik tombol WhatsApp', 'Tulis jenis & jumlah pesanan', 'Lampirkan file desain di chat'].map((text, i) => (
              <div key={text} className="rounded-2xl bg-white border border-stone-200 p-4 text-center"><div className="w-8 h-8 mx-auto rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-black text-sm">{i + 1}</div><p className="text-xs font-semibold text-stone-700 mt-2">{text}</p></div>
            ))}
          </div>
          <div className="mt-5 flex items-start gap-2.5 p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-[11px] text-amber-900"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-amber-700" /><span>File tidak diunggah ke server website. Admin akan menerima file setelah Anda melampirkannya secara manual di WhatsApp.</span></div>
          <button onClick={() => openWhatsAppChat(buildQuickConsultMessage('mengirim desain sendiri untuk dicetak'))} className="mt-5 w-full min-h-12 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm flex items-center justify-center gap-2"><MessageCircle className="w-4 h-4" /> Konsultasi Desain via WhatsApp</button>
        </div>
      </div>
    </section>
  );
};
