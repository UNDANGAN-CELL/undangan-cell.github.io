import React from 'react';
import {
  HeartHandshake,
  Sparkles,
  Baby,
  PartyPopper,
  CalendarDays,
  Gift,
  Printer,
  Smartphone,
  PackageOpen,
  CupSoda,
  Tags,
  BookOpen,
  Receipt,
  Newspaper,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { CategoryInfo, ProductCategory } from '../types';

interface CategorySectionProps {
  categories: CategoryInfo[];
  onSelectCategory: (category: ProductCategory) => void;
  productCountsByCategory?: Record<string, number>;
  title?: string;
  subtitle?: string;
  badgeLabel?: string;
}

const ICONS: Record<string, React.ReactNode> = {
  HeartHandshake: <HeartHandshake className="w-6 h-6" />,
  Sparkles: <Sparkles className="w-6 h-6" />,
  Baby: <Baby className="w-6 h-6" />,
  PartyPopper: <PartyPopper className="w-6 h-6" />,
  CalendarDays: <CalendarDays className="w-6 h-6" />,
  Gift: <Gift className="w-6 h-6" />,
  Smartphone: <Smartphone className="w-6 h-6" />,
  PackageOpen: <PackageOpen className="w-6 h-6" />,
  CupSoda: <CupSoda className="w-6 h-6" />,
  Tags: <Tags className="w-6 h-6" />,
  BookOpen: <BookOpen className="w-6 h-6" />,
  Receipt: <Receipt className="w-6 h-6" />,
  Newspaper: <Newspaper className="w-6 h-6" />,
  Printer: <Printer className="w-6 h-6" />,
};

const DEFAULT_THEME = {
  badge: 'bg-stone-100 text-stone-800 border-stone-200',
  cardHover: 'hover:border-emerald-300 hover:shadow-emerald-100/50',
  iconBg: 'bg-gradient-to-br from-emerald-600 to-teal-700 text-white shadow-emerald-200',
  textHighlight: 'group-hover:text-emerald-700',
};

// Tema warna per kategori untuk kesan visual yang khas dan mudah dibedakan.
const categoryThemeStyles: Record<string, typeof DEFAULT_THEME> = {
  'Undangan Pernikahan': {
    badge: 'bg-rose-100 text-rose-800 border-rose-200',
    cardHover: 'hover:border-rose-300 hover:shadow-rose-100/50',
    iconBg: 'bg-gradient-to-br from-rose-500 to-pink-600 text-white shadow-rose-200',
    textHighlight: 'group-hover:text-rose-700',
  },
  'Undangan Sunatan': {
    badge: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    cardHover: 'hover:border-emerald-300 hover:shadow-emerald-100/50',
    iconBg: 'bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-emerald-200',
    textHighlight: 'group-hover:text-emerald-700',
  },
  'Undangan Aqiqah': {
    badge: 'bg-sky-100 text-sky-800 border-sky-200',
    cardHover: 'hover:border-sky-300 hover:shadow-sky-100/50',
    iconBg: 'bg-gradient-to-br from-sky-500 to-indigo-600 text-white shadow-sky-200',
    textHighlight: 'group-hover:text-sky-700',
  },
  'Undangan Ulang Tahun': {
    badge: 'bg-fuchsia-100 text-fuchsia-800 border-fuchsia-200',
    cardHover: 'hover:border-fuchsia-300 hover:shadow-fuchsia-100/50',
    iconBg: 'bg-gradient-to-br from-fuchsia-500 to-pink-600 text-white shadow-fuchsia-200',
    textHighlight: 'group-hover:text-fuchsia-700',
  },
  'Undangan Event': {
    badge: 'bg-blue-100 text-blue-800 border-blue-200',
    cardHover: 'hover:border-blue-300 hover:shadow-blue-100/50',
    iconBg: 'bg-gradient-to-br from-blue-600 to-cyan-600 text-white shadow-blue-200',
    textHighlight: 'group-hover:text-blue-700',
  },
  'Undangan Digital': {
    badge: 'bg-violet-100 text-violet-800 border-violet-200',
    cardHover: 'hover:border-violet-300 hover:shadow-violet-100/50',
    iconBg: 'bg-gradient-to-br from-violet-500 to-indigo-600 text-white shadow-violet-200',
    textHighlight: 'group-hover:text-violet-700',
  },
  Souvenir: {
    badge: 'bg-amber-100 text-amber-800 border-amber-200',
    cardHover: 'hover:border-amber-300 hover:shadow-amber-100/50',
    iconBg: 'bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-amber-200',
    textHighlight: 'group-hover:text-amber-700',
  },
  'Sablon Plastik Kemasan': {
    badge: 'bg-sky-100 text-sky-800 border-sky-200',
    cardHover: 'hover:border-sky-300 hover:shadow-sky-100/50',
    iconBg: 'bg-gradient-to-br from-sky-600 to-blue-700 text-white shadow-sky-200',
    textHighlight: 'group-hover:text-sky-700',
  },
  'Sablon Cup': {
    badge: 'bg-sky-100 text-sky-800 border-sky-200',
    cardHover: 'hover:border-sky-300 hover:shadow-sky-100/50',
    iconBg: 'bg-gradient-to-br from-sky-600 to-blue-700 text-white shadow-sky-200',
    textHighlight: 'group-hover:text-sky-700',
  },
  'Stiker Label': {
    badge: 'bg-blue-100 text-blue-800 border-blue-200',
    cardHover: 'hover:border-blue-300 hover:shadow-blue-100/50',
    iconBg: 'bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-blue-200',
    textHighlight: 'group-hover:text-blue-700',
  },
  'Buku Yasin': {
    badge: 'bg-pink-100 text-pink-800 border-pink-200',
    cardHover: 'hover:border-pink-300 hover:shadow-pink-100/50',
    iconBg: 'bg-gradient-to-br from-pink-600 to-rose-700 text-white shadow-pink-200',
    textHighlight: 'group-hover:text-pink-700',
  },
  'Nota, Kwitansi & Buku Rekapan': {
    badge: 'bg-rose-100 text-rose-800 border-rose-200',
    cardHover: 'hover:border-rose-300 hover:shadow-rose-100/50',
    iconBg: 'bg-gradient-to-br from-rose-600 to-pink-700 text-white shadow-rose-200',
    textHighlight: 'group-hover:text-rose-700',
  },
  Brosur: {
    badge: 'bg-pink-100 text-pink-800 border-pink-200',
    cardHover: 'hover:border-pink-300 hover:shadow-pink-100/50',
    iconBg: 'bg-gradient-to-br from-fuchsia-600 to-pink-700 text-white shadow-pink-200',
    textHighlight: 'group-hover:text-fuchsia-700',
  },
};

export const CategorySection: React.FC<CategorySectionProps> = ({
  categories,
  onSelectCategory,
  productCountsByCategory = {},
  title = 'Kebutuhan Cetak Sesuai Acara',
  subtitle = 'Temukan model undangan dan souvenir sesuai tema perayaan Anda dengan desain terbaik dan harga bersahabat.',
  badgeLabel = 'Pilihan Kategori Lengkap',
}) => {
  return (
    <section id="kategori-section" className="py-12 sm:py-16 bg-[#faf7f2] border-y border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider border border-emerald-200">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>{badgeLabel}</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight">
            {title}
          </h2>
          <p className="text-xs sm:text-base text-stone-600">{subtitle}</p>
        </div>

        {/* Mobile Quick Category Swipe Horizontal Track (visible on small screens) */}
        <div className="sm:hidden mb-6 overflow-x-auto pb-2 -mx-4 px-4 flex gap-2.5 no-scrollbar scroll-smooth">
          {categories.map((cat) => {
            const theme = categoryThemeStyles[cat.id] || DEFAULT_THEME;
            return (
              <button
                key={`mobile-chip-${cat.id}`}
                onClick={() => onSelectCategory(cat.id)}
                className="shrink-0 flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 active:bg-emerald-50 active:border-emerald-300 text-xs font-bold text-stone-800 shadow-2xs"
              >
                <div className={`w-6 h-6 rounded-lg ${theme.iconBg} flex items-center justify-center text-[10px]`}>
                  {cat.title.slice(0, 1)}
                </div>
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((cat, index) => {
            const count = productCountsByCategory[cat.id];
            const theme = categoryThemeStyles[cat.id] || DEFAULT_THEME;

            return (
              <button
                key={cat.id}
                id={`category-card-${index}`}
                onClick={() => onSelectCategory(cat.id)}
                className={`group text-left p-4 sm:p-5 rounded-2xl border border-stone-200/90 bg-stone-50/50 hover:bg-white ${theme.cardHover} hover:shadow-lg transition-all duration-200 cursor-pointer flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className={`p-3 rounded-2xl ${theme.iconBg} shadow-md transition-transform duration-200 group-hover:scale-110`}>
                      {ICONS[cat.iconName] || ICONS.Printer}
                    </div>
                    {typeof count === 'number' ? (
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${theme.badge}`}>
                        {count} Produk
                      </span>
                    ) : cat.infoPoints ? (
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-full border bg-amber-50 text-amber-800 border-amber-200 uppercase tracking-wide">
                        Segera Hadir
                      </span>
                    ) : null}
                  </div>

                  <h3 className={`text-base sm:text-lg font-bold text-stone-900 ${theme.textHighlight} transition-colors`}>
                    {cat.title}
                  </h3>

                  <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                    {cat.subtitle}
                  </p>

                  {cat.infoPoints && (
                    <ul className="mt-3 space-y-1.5 border-t border-stone-200/70 pt-3">
                      {cat.infoPoints.map((point) => (
                        <li key={point} className="flex items-start gap-1.5 text-[11px] text-stone-600 leading-relaxed">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="mt-4 pt-3 border-t border-stone-200/70 flex items-center justify-between text-xs font-bold text-emerald-800 group-hover:text-emerald-950">
                  <span>{cat.infoPoints ? 'Tanya Harga & Detail' : 'Buka Koleksi Desain'}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform text-emerald-600" />
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};
