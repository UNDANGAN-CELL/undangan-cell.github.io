import React, { useMemo } from 'react';
import { ArrowLeft, Grid3X3, Layers, Camera, Calculator as CalcIcon } from 'lucide-react';
import { Hub, Product, ProductCategory } from '../types';
import { HUBS } from '../data/hubs';
import { getCategoriesByHub, getHubForCategory } from '../data/categories';
import { PRODUCTS } from '../data/products';
import { GALLERY_ITEMS } from '../data/gallery';
import { CategorySection } from './CategorySection';
import { ProductGrid } from './ProductGrid';
import { GallerySection } from './GallerySection';
import { PriceCalculatorSection } from './PriceCalculatorSection';

export type HubSection = 'kategori' | 'katalog' | 'galeri' | 'kalkulator';

interface HubPageProps {
  hub: Hub;
  section: HubSection;
  onSectionChange: (section: HubSection) => void;
  selectedCategory: ProductCategory | 'Semua';
  onCategoryChange: (cat: ProductCategory | 'Semua') => void;
  onBack: () => void;
  onViewDetail: (product: Product) => void;
  onOrder: (product: Product) => void;
}

const TABS: { id: HubSection; label: string; icon: React.ReactNode }[] = [
  { id: 'kategori', label: 'Kategori', icon: <Grid3X3 className="w-4 h-4" /> },
  { id: 'katalog', label: 'Katalog', icon: <Layers className="w-4 h-4" /> },
  { id: 'galeri', label: 'Galeri', icon: <Camera className="w-4 h-4" /> },
  { id: 'kalkulator', label: 'Kalkulator', icon: <CalcIcon className="w-4 h-4" /> },
];

export const HubPage: React.FC<HubPageProps> = ({
  hub,
  section,
  onSectionChange,
  selectedCategory,
  onCategoryChange,
  onBack,
  onViewDetail,
  onOrder,
}) => {
  const hubInfo = HUBS.find((h) => h.id === hub)!;
  const categories = useMemo(() => getCategoriesByHub(hub), [hub]);
  const products = useMemo(
    () => PRODUCTS.filter((p) => getHubForCategory(p.category) === hub),
    [hub]
  );
  const galleryItems = useMemo(
    () => GALLERY_ITEMS.filter((item) => getHubForCategory(item.category) === hub),
    [hub]
  );

  const productCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    products.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, [products]);

  const handleSelectCategory = (cat: ProductCategory) => {
    onCategoryChange(cat);
    onSectionChange('katalog');
  };

  return (
    <div id={`hub-page-${hub}`}>
      {/* Hub Header + Back button */}
      <div className="pt-24 sm:pt-28 pb-4 bg-[#f7f5ef] border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            id="hub-back-to-home-btn"
            onClick={onBack}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-stone-500 hover:text-emerald-700 mb-3 cursor-pointer transition"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Kembali ke Beranda</span>
          </button>
          <h1 className="font-serif text-2xl sm:text-3xl font-extrabold text-stone-900">{hubInfo.title}</h1>
          <p className="text-xs sm:text-sm text-stone-600 mt-1">{hubInfo.subtitle}</p>

          {/* Hub Sub-Navigation Tabs */}
          <div className="mt-5 flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                id={`hub-tab-${tab.id}`}
                onClick={() => onSectionChange(tab.id)}
                className={`inline-flex items-center gap-1.5 px-4 py-2.5 text-xs sm:text-sm font-bold rounded-xl shrink-0 transition-all cursor-pointer ${
                  section === tab.id
                    ? 'bg-emerald-700 text-white shadow-sm'
                    : 'bg-white text-stone-600 border border-stone-200 hover:bg-emerald-50 hover:text-emerald-800'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Active Section Only — benar-benar berpindah, bukan scroll panjang */}
      {section === 'kategori' && (
        <CategorySection
          categories={categories}
          onSelectCategory={handleSelectCategory}
          productCountsByCategory={productCounts}
          title={`Kategori ${hubInfo.title}`}
          subtitle={hubInfo.description}
          badgeLabel={hubInfo.subtitle}
        />
      )}

      {section === 'katalog' && (
        <ProductGrid
          products={products}
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={onCategoryChange}
          onViewDetail={onViewDetail}
          onOrder={onOrder}
          title={`Katalog ${hubInfo.title}`}
          comingSoonTitle={`Katalog ${hubInfo.title} sedang disiapkan`}
          comingSoonDescription="Produk dan harga akan segera ditambahkan. Sambil menunggu, tanyakan langsung kebutuhanmu ke admin via WhatsApp."
        />
      )}

      {section === 'galeri' && (
        <GallerySection
          items={galleryItems}
          emptyTitle={`Dokumentasi ${hubInfo.title} sedang kami siapkan`}
          emptyDescription="Foto hasil produksi asli akan segera ditambahkan di sini."
        />
      )}

      {section === 'kalkulator' && (
        <PriceCalculatorSection products={products} comingSoonLabel={hubInfo.title} />
      )}
    </div>
  );
};
