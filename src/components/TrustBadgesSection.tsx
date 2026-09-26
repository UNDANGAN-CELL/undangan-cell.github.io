import React from 'react';
import { Palette, ShieldCheck, Zap, MessageCircle } from 'lucide-react';

const BADGES = [
  {
    icon: <Palette className="w-5 h-5" />,
    title: 'Konsultasi Desain Gratis',
    desc: 'Dibantu sampai pas sebelum cetak',
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: 'Bahan & Cetak Berkualitas',
    desc: 'Hasil rapi, warna tajam',
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: 'Proses Cepat',
    desc: 'Estimasi jelas di awal',
  },
  {
    icon: <MessageCircle className="w-5 h-5" />,
    title: 'Fast Response WhatsApp',
    desc: 'Tanya & pesan langsung chat',
  },
];

export const TrustBadgesSection: React.FC = () => {
  return (
    <section id="trust-badges-section" className="py-8 sm:py-10 bg-[#faf8f4] border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {BADGES.map((b) => (
            <div
              key={b.title}
              className="flex items-start gap-2.5 p-3 sm:p-4 rounded-2xl bg-white border border-stone-200/80"
            >
              <div className="shrink-0 w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                {b.icon}
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-bold text-stone-800 leading-snug">{b.title}</h3>
                <p className="text-[10px] sm:text-xs text-stone-500 mt-0.5 leading-snug">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
