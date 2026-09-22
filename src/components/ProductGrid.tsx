import React, { useMemo, useState } from 'react';
import { Search, X } from 'lucide-react';
import { Product, ProductCategory } from '../types';
import { CATEGORIES } from '../data/categories';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  products: Product[];
  selectedCategory: ProductCategory | 'Semua';
  onCategoryChange: (cat: ProductCategory | 'Semua') => void;
  onViewDetail: (product: Product) => void;
  onOrder: (product: Product) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products, selectedCategory, onCategoryChange, onViewDetail, onOrder }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const availableCategories = useMemo(() => CATEGORIES.filter(cat => products.some(p => p.category === cat.id)), [products]);

  const filteredProducts = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return products.filter(p => {
      if (selectedCategory !== 'Semua' && p.category !== selectedCategory) return false;
      if (!q) return true;
      return [p.name, p.code, p.category, ...(p.tags || [])].some(value => value.toLowerCase().includes(q));
    });
  }, [products, selectedCategory, searchQuery]);

  const reset = () => { setSearchQuery(''); onCategoryChange('Semua'); };

  return (
    <section id="katalog-section" className="py-14 sm:py-16 bg-[#f4f0e6] border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 space-y-2">
          <div className="text-xs font-bold uppercase tracking-widest text-emerald-700">Katalog Lengkap</div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 tracking-tight">Pilih Desain Sesuai Selera</h2>
          <p className="text-sm sm:text-base text-stone-600">Lihat model, cek harga dasar per pcs, lalu konsultasikan detail pesanan melalui WhatsApp.</p>
        </div>

        <div className="bg-[#faf8f4] rounded-2xl p-3 sm:p-4 border border-stone-200/90 mb-7 space-y-3">
          <div className="relative w-full max-w-xl mx-auto">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              id="catalog-search-input"
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Cari nama desain atau kode..."
              className="w-full pl-10 pr-9 py-3 text-sm bg-white border border-stone-200 rounded-xl focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/15"
            />
            {searchQuery && <button onClick={() => setSearchQuery('')} aria-label="Hapus pencarian" className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700"><X className="w-4 h-4" /></button>}
          </div>
          <div className="overflow-x-auto no-scrollbar flex items-center justify-center sm:justify-start gap-2 pb-1">
            <button onClick={() => onCategoryChange('Semua')} className={`px-4 py-2 text-xs font-bold rounded-full shrink-0 ${selectedCategory === 'Semua' ? 'bg-emerald-700 text-white' : 'bg-stone-100 text-stone-700 hover:bg-emerald-50'}`}>Semua ({products.length})</button>
            {availableCategories.map(cat => (
              <button key={cat.id} onClick={() => onCategoryChange(cat.id)} className={`px-4 py-2 text-xs font-bold rounded-full shrink-0 ${selectedCategory === cat.id ? 'bg-emerald-700 text-white' : 'bg-stone-100 text-stone-700 hover:bg-emerald-50'}`}>{cat.title}</button>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between text-xs text-stone-500 mb-4 px-1">
          <span>Menampilkan <strong className="text-stone-800">{filteredProducts.length}</strong> desain{selectedCategory !== 'Semua' ? ` • ${selectedCategory}` : ''}</span>
          {(searchQuery || selectedCategory !== 'Semua') && <button onClick={reset} className="text-emerald-700 font-semibold underline underline-offset-2">Reset</button>}
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
            {filteredProducts.map(product => <ProductCard key={product.code} product={product} onViewDetail={onViewDetail} onOrder={onOrder} />)}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-10 text-center max-w-md mx-auto border border-stone-200">
            <Search className="w-7 h-7 text-stone-400 mx-auto mb-3" />
            <h3 className="font-bold text-stone-800">Desain tidak ditemukan</h3>
            <p className="text-xs text-stone-500 mt-1 mb-4">Coba kata kunci atau kategori lain.</p>
            <button onClick={reset} className="px-4 py-2 text-xs font-bold text-white bg-emerald-600 rounded-xl">Tampilkan Semua</button>
          </div>
        )}
      </div>
    </section>
  );
};
