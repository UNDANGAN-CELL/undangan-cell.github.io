import React from 'react';
import { Eye, MessageCircle } from 'lucide-react';
import { Product } from '../types';
import { formatRupiah } from '../utils/calculator';
import { resolveThumbUrl } from '../utils/assets';

interface ProductCardProps { product: Product; onViewDetail: (product: Product) => void; onOrder: (product: Product) => void; }

export const ProductCard: React.FC<ProductCardProps> = ({ product, onViewDetail, onOrder }) => {
  const primaryImage = resolveThumbUrl(product.images[0] || 'images/hero/2518.webp');
  const unitSuffix = product.priceType === 'paket' ? '/ paket' : '/ pcs';
  return (
    <article id={`product-card-${product.code}`} className="group bg-white rounded-2xl border border-stone-200 overflow-hidden hover:border-emerald-300 hover:shadow-md transition flex flex-col">
      <button onClick={() => onViewDetail(product)} className="relative aspect-[4/3] bg-stone-100 overflow-hidden cursor-pointer text-left" aria-label={`Lihat detail ${product.name}`}>
        <img src={primaryImage} alt={product.name} loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300" />
        <span className="absolute bottom-2 left-2 bg-white/95 text-stone-700 text-[10px] font-bold px-2 py-1 rounded-md shadow-sm">Kode {product.code}</span>
      </button>
      <div className="p-3 sm:p-4 flex flex-col flex-1 gap-3">
        <div className="flex-1">
          <div className="text-[10px] sm:text-[11px] text-emerald-700 font-bold mb-1 truncate">{product.category}</div>
          <button onClick={() => onViewDetail(product)} className="text-left text-xs sm:text-sm font-bold text-stone-900 leading-snug line-clamp-2 hover:text-emerald-800">{product.name}</button>
          <div className="mt-2">
            <span className="block text-[10px] text-stone-500">Harga undangan saja</span>
            {product.price > 0 ? <span className="text-sm sm:text-base font-black text-emerald-800">{formatRupiah(product.price)} <small className="font-medium text-stone-500">{unitSuffix}</small></span> : <span className="text-sm font-black text-amber-700">Tanya via WA</span>}
          </div>
        </div>
        <div className="text-[10px] text-stone-500">Minimal {product.minimumOrder} pcs • Add-on tersedia</div>
        <div className="grid grid-cols-2 gap-2">
          <button onClick={() => onViewDetail(product)} className="min-h-11 rounded-xl border border-stone-200 bg-stone-50 hover:bg-emerald-50 text-stone-700 text-xs font-bold flex items-center justify-center gap-1.5"><Eye className="w-3.5 h-3.5" /> Detail</button>
          <button onClick={() => onOrder(product)} className="min-h-11 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-1.5"><MessageCircle className="w-3.5 h-3.5" /> Tanya / Pesan</button>
        </div>
      </div>
    </article>
  );
};
