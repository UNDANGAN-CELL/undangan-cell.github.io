import React from 'react';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/testimonials';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimoni-section" className="py-16 bg-[#f4f0e6] border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
            <span>Kesan Pelanggan</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 tracking-tight">
            Apa Kata Pelanggan?
          </h2>
          <p className="text-sm sm:text-base text-stone-600">
            Testimoni ditampilkan setelah data pelanggan yang dapat dipublikasikan tersedia.
          </p>
        </div>

        {TESTIMONIALS.length === 0 ? (
          <div className="max-w-2xl mx-auto bg-[#faf8f4] rounded-2xl p-6 border border-stone-200/90 text-center">
            <p className="text-sm text-stone-600">
              Belum ada testimoni pelanggan yang dapat diverifikasi untuk ditampilkan.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-[#faf8f4] rounded-2xl p-6 border border-stone-200/90 shadow-xs">
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic">"{t.comment}"</p>
                <div className="pt-4 mt-4 border-t border-stone-100">
                  <div className="text-xs sm:text-sm font-bold text-stone-900">{t.name}</div>
                  <div className="text-[11px] text-stone-500">{t.city} • {t.event}</div>
                  <div className="text-[10px] text-emerald-700 font-medium mt-0.5">{t.product}</div>
                  <div className="text-[10px] text-stone-400 mt-1">{t.date}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
