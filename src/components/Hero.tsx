import React, { useEffect, useState } from 'react';
import { CheckCircle, MessageCircle, ArrowDown } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { trackEvent } from '../utils/analytics';
import { resolveAssetUrl } from '../utils/assets';
import { PRODUCTS } from '../data/products';
import { GALLERY_ITEMS } from '../data/gallery';

export const Hero: React.FC = () => {
  const heroSlides = [
    '2518.jpg',
    '2409.jpg',
    '2628.jpg',
    '2202.jpg',
    '88164.jpg',
  ].map((filename) => resolveAssetUrl(`images/hero/${filename.replace('.jpg', '.webp')}`));
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveHeroSlide((index) => (index + 1) % heroSlides.length);
    }, 4200);
    return () => window.clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <section
      id="hero-section"
      className="relative pt-20 pb-4 sm:pt-36 sm:pb-20 md:pt-40 md:pb-24 overflow-hidden bg-gradient-to-b from-[#f4efe5] via-[#f7f5ef] to-[#f3efe6] border-b border-stone-200/70"
    >
      {/* Radiant Background Accents: Gold & Emerald Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        {/* Glow dibuat dengan radial-gradient (ringan), bukan filter blur yang berat di HP */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 92% 18%, rgba(110,231,183,0.28), transparent 38%), radial-gradient(circle at 4% 28%, rgba(252,211,77,0.30), transparent 38%), radial-gradient(circle at 38% 92%, rgba(153,246,228,0.22), transparent 34%)',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-10 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 space-y-2 sm:space-y-6 text-center lg:text-left">
            
            {/* Main Headline */}
            <h1 className="font-serif text-xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-stone-900 tracking-tight leading-[1.15]">
              Percetakan & Cetak Undangan <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-emerald-800 via-teal-700 to-emerald-900 bg-clip-text text-transparent relative inline-block">
                di Ungaran
                {/* Decorative underline */}
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-amber-400/80"
                  viewBox="0 0 200 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path d="M2 9C50 2 150 2 198 9" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xs sm:text-base md:text-lg text-stone-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              <span className="sm:hidden">Undangan, souvenir, kemasan, buku, dan kebutuhan cetak. Pesan mudah via <span className="font-semibold text-emerald-800">WhatsApp</span>.</span>
              <span className="hidden sm:inline">Rumah Ijo melayani cetak undangan, souvenir, kemasan, buku, dan kebutuhan percetakan untuk Ungaran, Kabupaten Semarang, dan sekitarnya. Konsultasi dan pemesanan langsung via <span className="font-semibold text-emerald-800">WhatsApp</span>.</span>
            </p>

            {/* CTA utama: tampil di semua ukuran layar */}
            <div className="flex flex-col sm:flex-row gap-2.5 justify-center lg:justify-start pt-1">
              <a
                href={getWhatsAppUrl(`Halo Admin ${SITE_CONFIG.brandName}, saya ingin konsultasi pemesanan cetak.`)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('hero_whatsapp')}
                className="inline-flex items-center justify-center gap-2 min-h-11 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white text-sm font-bold shadow-md transition"
              >
                <MessageCircle className="w-4 h-4" />
                Pesan via WhatsApp
              </a>
              <button
                type="button"
                onClick={() => document.getElementById('hub-picker-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-2 min-h-11 px-5 py-2.5 rounded-xl bg-white border border-stone-300 text-stone-700 hover:bg-stone-50 text-sm font-semibold cursor-pointer transition"
              >
                Lihat Pilihan Produk
                <ArrowDown className="w-4 h-4" />
              </button>
            </div>

            {/* Simple facts from current catalog data */}
            <div className="hidden sm:grid pt-3 sm:pt-6 border-t border-stone-200/80 grid grid-cols-3 gap-2 sm:gap-4 text-center">
              <div className="p-2 rounded-xl bg-white/60">
                <div className="text-base sm:text-lg font-extrabold text-stone-900">{PRODUCTS.length}</div>
                <div className="text-[10px] sm:text-[11px] text-stone-500">Produk katalog</div>
              </div>
              <div className="p-2 rounded-xl bg-white/60">
                <div className="text-base sm:text-lg font-extrabold text-stone-900">{GALLERY_ITEMS.length}</div>
                <div className="text-[10px] sm:text-[11px] text-stone-500">Foto galeri</div>
              </div>
              <div className="p-2 rounded-xl bg-white/60">
                <div className="text-base sm:text-lg font-extrabold text-stone-900">Gratis</div>
                <div className="text-[10px] sm:text-[11px] text-stone-500">Konsultasi desain</div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Product Showcase Card with Floating Chips */}
          <div className="block lg:col-span-5 relative mt-3 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Glow Ring */}
              <div className="hidden sm:block absolute -inset-1.5 bg-gradient-to-r from-emerald-500 to-amber-400 rounded-3xl blur-md opacity-30"></div>

              {/* Main Visual Card */}
              <div className="relative rounded-2xl sm:rounded-3xl bg-white p-2 sm:p-4 shadow-xl border border-stone-200/90">
                <div className="relative h-52 sm:h-80 md:h-96 rounded-xl sm:rounded-2xl overflow-hidden bg-stone-100 shadow-inner">
                  {heroSlides.map((src, index) => (
                    <img
                      key={src}
                      src={src}
                      alt={`Contoh hasil cetak Rumah Ijo ${index + 1}`}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                        activeHeroSlide === index ? 'opacity-100' : 'opacity-0'
                      }`}
                      loading={index === 0 ? 'eager' : 'lazy'}
                      fetchPriority={index === 0 ? 'high' : 'auto'}
                    />
                  ))}
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/25 to-transparent" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-3 left-3 bg-white/95 sm:backdrop-blur-md px-3 py-1.5 rounded-full shadow-md border border-amber-300/80 flex items-center gap-1.5 text-xs font-bold text-stone-900">
                    <span className="w-2 h-2 rounded-full bg-rose-500 sm:animate-ping" />
                    <span>Contoh desain & hasil cetak</span>
                  </div>

                  {/* Bottom Content Card on Image */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 sm:p-4 rounded-xl bg-white/95 sm:backdrop-blur-md border border-stone-200 shadow-lg flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-1 text-emerald-800 text-xs font-bold">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 fill-emerald-100" />
                        <span>Koleksi Terbaru</span>
                      </div>
                      <div className="text-xs sm:text-sm font-extrabold text-stone-900 mt-0.5">
                        {PRODUCTS.length} Produk di Katalog
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
