import React, { useState } from 'react';
import { Camera, Eye, X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/gallery';
import { GalleryItem } from '../types';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const categories = ['Semua', 'Undangan Pernikahan', 'Undangan Sunatan', 'Undangan Aqiqah', 'Souvenir', 'Cetak Lainnya'];

  const filteredItems = selectedCategory === 'Semua'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const nextImage = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="galeri-section" className="py-16 bg-[#faf7f2] border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Camera className="w-3.5 h-3.5" />
            <span>Dokumentasi Produksi</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 tracking-tight">
            Galeri Hasil Cetak
          </h2>
          <p className="text-sm sm:text-base text-stone-600">
            Foto riil pesanan pelanggan RuangKarya. Hasil cetak presisi, ketebalan bahan terjamin, dan finishing rapi.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-full border transition cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-stone-900 border-stone-900 text-white shadow-xs'
                  : 'bg-stone-50 border-stone-200 text-stone-600 hover:bg-stone-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid (Responsive modern cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative rounded-2xl overflow-hidden bg-stone-100 border border-stone-200 aspect-[4/3] sm:aspect-square cursor-pointer shadow-xs hover:shadow-md transition-all"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Hover Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-4 flex flex-col justify-end text-white">
                <div className="text-[10px] font-semibold uppercase tracking-wider text-emerald-300">
                  {item.category}
                </div>
                <h4 className="text-sm font-bold line-clamp-2 mt-0.5">
                  {item.title}
                </h4>
                <div className="text-[11px] text-stone-300 mt-1">
                  Klien: {item.client}
                </div>
                <div className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-emerald-300">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Lihat Ukuran Penuh</span>
                </div>
              </div>

              {/* Category tag visible at bottom on mobile */}
              <div className="sm:hidden absolute bottom-2 left-2 right-2 bg-stone-900/80 backdrop-blur-xs text-white p-2 rounded-xl text-xs">
                <div className="font-bold truncate">{item.title}</div>
                <div className="text-[10px] text-stone-300">{item.client}</div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeLightboxIndex !== null && filteredItems[activeLightboxIndex] && (
        <div
          id="gallery-lightbox-modal"
          className="fixed inset-0 z-50 bg-stone-950/95 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Nav arrows */}
          {filteredItems.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-50 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-50 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Lightbox Content Container */}
          <div
            className="max-w-4xl max-h-[85vh] flex flex-col items-center justify-center text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredItems[activeLightboxIndex].imageUrl}
              alt={filteredItems[activeLightboxIndex].title}
              className="max-h-[68vh] max-w-full rounded-xl object-contain shadow-2xl border border-stone-800"
            />
            <div className="mt-4 text-center max-w-xl">
              <span className="text-xs text-emerald-400 font-semibold uppercase tracking-wider">
                {filteredItems[activeLightboxIndex].category} • {filteredItems[activeLightboxIndex].client}
              </span>
              <h3 className="text-base sm:text-lg font-bold mt-1">
                {filteredItems[activeLightboxIndex].title}
              </h3>
              {filteredItems[activeLightboxIndex].description && (
                <p className="text-xs sm:text-sm text-stone-300 mt-1 leading-relaxed">
                  {filteredItems[activeLightboxIndex].description}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
