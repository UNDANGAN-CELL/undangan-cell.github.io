import React from 'react';
import { ArrowRight, MessageCircle, Sparkles, ShieldCheck, CheckCircle2, Heart, Award } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface HeroProps {
  onExploreCatalog: () => void;
  onOpenCalculator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreCatalog, onOpenCalculator }) => {
  const directWhatsAppUrl = getWhatsAppUrl(
    `Halo Admin ${SITE_CONFIG.brandName}, saya tertarik untuk memesan kebutuhan cetak acara saya. Boleh minta rekomendasi katalog?`
  );

  return (
    <section
      id="hero-section"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-stone-100/70 via-stone-50 to-stone-50"
    >
      {/* Subtle Islamic Geometric / Floral Background Accents */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none opacity-25 overflow-hidden">
        <div className="absolute -top-16 -right-16 w-80 h-80 rounded-full bg-emerald-200/40 blur-3xl" />
        <div className="absolute top-20 -left-16 w-80 h-80 rounded-full bg-amber-200/30 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Elegant Sub-badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs sm:text-sm font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Percetakan Undangan & Souvenir Terpercaya</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 tracking-tight leading-[1.15]">
              Cetak Momen <br className="hidden sm:inline" />
              <span className="text-emerald-700 relative inline-block">
                Istimewa Anda
                {/* Decorative underline */}
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-emerald-400/50"
                  viewBox="0 0 200 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path d="M2 9C50 2 150 2 198 9" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-stone-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Undangan, souvenir, dan kebutuhan cetak untuk berbagai momen spesial dengan desain menarik dan proses pemesanan yang mudah langsung via WhatsApp.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                id="hero-cta-catalog-btn"
                onClick={onExploreCatalog}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-semibold text-white bg-stone-900 hover:bg-stone-800 active:bg-black rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <span>Lihat Katalog</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                id="hero-cta-wa-btn"
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100/90 active:bg-emerald-200 border border-emerald-200 rounded-xl transition-all"
              >
                <MessageCircle className="w-5 h-5 text-emerald-600" />
                <span>Pesan via WhatsApp</span>
              </a>

              <button
                id="hero-cta-calc-btn"
                onClick={onOpenCalculator}
                className="w-full sm:w-auto text-xs sm:text-sm font-medium text-stone-600 hover:text-emerald-700 underline underline-offset-4 py-2 px-3 cursor-pointer"
              >
                Hitung Estimasi Harga
              </button>
            </div>

            {/* Trust Badges Bar */}
            <div className="pt-6 border-t border-stone-200/70 grid grid-cols-3 gap-3 text-center sm:text-left">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-100/80 text-emerald-700 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-800">Tanpa Minimal Ribet</div>
                  <div className="text-[11px] text-stone-500">Mulai dari 50 pcs</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2">
                <div className="w-8 h-8 rounded-lg bg-amber-100/80 text-amber-700 flex items-center justify-center shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-800">Kualitas Premium</div>
                  <div className="text-[11px] text-stone-500">Tinta tajam & tebal</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2">
                <div className="w-8 h-8 rounded-lg bg-rose-100/80 text-rose-700 flex items-center justify-center shrink-0">
                  <Heart className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-800">Bonus Lengkap</div>
                  <div className="text-[11px] text-stone-500">Plastik & label gratis</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Product Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Visual Card */}
              <div className="relative rounded-2xl bg-white p-3 sm:p-4 shadow-xl border border-stone-200/80">
                <div className="relative h-72 sm:h-80 md:h-96 rounded-xl overflow-hidden bg-stone-100">
                  <img
                    src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80"
                    alt="Koleksi Undangan Elegan RuangKarya"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/20 to-transparent" />
                  
                  {/* Floating Mockup Badge */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-1.5 shadow-sm border border-stone-100 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-xs font-bold text-stone-800">Koleksi Terpopuler</span>
                  </div>

                  {/* Bottom Text Over Image */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <div className="text-xs uppercase tracking-wider text-emerald-300 font-semibold mb-1">
                      Undangan Pernikahan Mewah
                    </div>
                    <div className="font-serif text-lg sm:text-xl font-bold">
                      Gold Foil & Rustic Botanical
                    </div>
                    <div className="flex items-center justify-between text-xs text-stone-200 mt-1">
                      <span>Mulai Rp 1.500 / pcs</span>
                      <span className="text-emerald-300 font-medium">Free Plastik & Label</span>
                    </div>
                  </div>
                </div>

                {/* Floating Floating Micro Card 1 */}
                <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-white rounded-xl p-3 shadow-lg border border-stone-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-sm">
                    5.0
                  </div>
                  <div>
                    <div className="text-xs font-bold text-stone-800">1.000+ Momen Terlayani</div>
                    <div className="text-[11px] text-stone-500">Pernikahan, Sunatan & Aqiqah</div>
                  </div>
                </div>

                {/* Floating Micro Card 2 */}
                <div className="absolute -top-4 -right-4 sm:-right-6 bg-stone-900 text-white rounded-xl p-3 shadow-lg flex items-center gap-2 text-xs font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Revisi Desain Ramah</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
