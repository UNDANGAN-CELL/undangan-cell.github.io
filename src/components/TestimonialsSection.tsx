import React from 'react';
import { Star, PencilLine } from 'lucide-react';
import { TESTIMONIALS, TESTIMONIALS_ARE_PLACEHOLDER } from '../data/testimonials';

export const TestimonialsSection: React.FC = () => {
  if (TESTIMONIALS.length === 0) return null;

  const items = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section id="testimoni-section" className="mt-40 sm:mt-0 py-8 sm:py-12 bg-[#f4f0e6] border-t border-stone-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-5 sm:mb-7 space-y-1.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
            <span>Kesan Pelanggan</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 tracking-tight">
            Apa Kata Pelanggan?
          </h2>
          <p className="text-xs sm:text-sm text-stone-500">Geser otomatis untuk melihat testimoni lainnya.</p>
        </div>

        {TESTIMONIALS_ARE_PLACEHOLDER && (
          <div className="max-w-3xl mx-auto mb-4 flex items-center justify-center gap-2 text-[10px] sm:text-xs text-amber-800">
            <PencilLine className="w-3.5 h-3.5 shrink-0" />
            <span>Contoh tampilan — ganti dengan testimoni pelanggan asli sebelum dipublikasikan.</span>
          </div>
        )}

        <div className="relative overflow-hidden -mx-4 sm:-mx-6 lg:-mx-8">
          <div className="testimonial-marquee flex w-max gap-3 sm:gap-5 px-4 sm:px-6 lg:px-8 hover:[animation-play-state:paused]">
            {items.map((t, index) => (
              <article
                key={`${t.id}-${index}`}
                className="w-[280px] sm:w-[340px] shrink-0 bg-[#faf8f4] rounded-2xl p-4 sm:p-5 border border-stone-200/90 shadow-xs"
              >
                <div className="flex items-center gap-1 text-amber-400 mb-2.5">
                  {Array.from({ length: Math.min(Math.max(t.rating, 0), 5) }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic line-clamp-4">
                  "{t.comment}"
                </p>
                <div className="pt-3 mt-3 border-t border-stone-100">
                  <div className="text-xs sm:text-sm font-bold text-stone-900">{t.name}</div>
                  <div className="text-[10px] text-stone-500">{t.city} • {t.event}</div>
                  <div className="text-[10px] text-emerald-700 font-medium mt-0.5">{t.product}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
