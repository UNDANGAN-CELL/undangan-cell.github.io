import React from 'react';
import { 
  HeartHandshake, 
  Sparkles, 
  Baby, 
  PartyPopper, 
  CalendarDays, 
  Gift, 
  Printer, 
  ArrowRight 
} from 'lucide-react';
import { CATEGORIES } from '../data/categories';
import { ProductCategory } from '../types';

interface CategorySectionProps {
  onSelectCategory: (category: ProductCategory) => void;
  productCountsByCategory?: Record<string, number>;
}

export const CategorySection: React.FC<CategorySectionProps> = ({
  onSelectCategory,
  productCountsByCategory = {},
}) => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6" />;
      case 'Baby':
        return <Baby className="w-6 h-6" />;
      case 'PartyPopper':
        return <PartyPopper className="w-6 h-6" />;
      case 'CalendarDays':
        return <CalendarDays className="w-6 h-6" />;
      case 'Gift':
        return <Gift className="w-6 h-6" />;
      case 'Printer':
      default:
        return <Printer className="w-6 h-6" />;
    }
  };

  return (
    <section id="kategori-section" className="py-16 bg-white border-y border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="text-xs font-bold uppercase tracking-widest text-emerald-700">
            Pilihan Kategori
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 tracking-tight">
            Kategori Kebutuhan Cetak Acara
          </h2>
          <p className="text-sm sm:text-base text-stone-600">
            Temukan model undangan dan souvenir sesuai tema perayaan Anda dengan desain terbaik dan harga bersahabat.
          </p>
        </div>

        {/* Categories Grid (7 items) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {CATEGORIES.map((cat, index) => {
            const count = productCountsByCategory[cat.id];

            return (
              <button
                key={cat.id}
                id={`category-card-${index}`}
                onClick={() => onSelectCategory(cat.id)}
                className="group text-left p-5 rounded-2xl border border-stone-200/80 bg-stone-50/50 hover:bg-white hover:border-emerald-400/80 hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl ${cat.accentColor} transition-transform duration-200 group-hover:scale-110`}>
                      {getCategoryIcon(cat.iconName)}
                    </div>
                    {typeof count === 'number' && (
                      <span className="text-xs font-semibold text-stone-600 bg-stone-200/60 px-2.5 py-1 rounded-full">
                        {count} Produk
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-bold text-stone-900 group-hover:text-emerald-700 transition-colors">
                    {cat.title}
                  </h3>
                  
                  <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                    {cat.subtitle}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-stone-200/60 flex items-center justify-between text-xs font-semibold text-emerald-700 group-hover:text-emerald-800">
                  <span>Lihat Katalog</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};
