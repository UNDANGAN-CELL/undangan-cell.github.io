import React from 'react';
import { Star, MessageSquareQuote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/testimonials';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimoni-section" className="py-16 bg-stone-50 border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
            <span>Ulasan Pembeli</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 tracking-tight">
            Apa Kata Pelanggan?
          </h2>
          <p className="text-sm sm:text-base text-stone-600">
            Kepuasan pelanggan adalah prioritas kami dalam mencetak setiap lembar undangan dan souvenir acara spesial.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs hover:shadow-md transition flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs font-bold text-stone-700 ml-1.5">5.0</span>
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic">
                  "{t.comment}"
                </p>
              </div>

              {/* Author & Product Info */}
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs sm:text-sm font-bold text-stone-900">{t.name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" title="Pesanan Terverifikasi" />
                  </div>
                  <div className="text-[11px] text-stone-500">
                    {t.city} • {t.event}
                  </div>
                  <div className="text-[10px] text-emerald-700 font-medium mt-0.5 truncate max-w-[200px]">
                    {t.product}
                  </div>
                </div>

                <div className="text-[10px] text-stone-400 shrink-0">
                  {t.date}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
