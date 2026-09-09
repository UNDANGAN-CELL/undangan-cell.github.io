import React from 'react';
import { Eye, MessageCircle, Sparkles } from 'lucide-react';
import { Product } from '../types';
import { formatRupiah } from '../utils/calculator';

interface ProductCardProps {
  product: Product;
  onViewDetail: (product: Product) => void;
  onOrder: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onViewDetail,
  onOrder,
}) => {
  const primaryImage = product.images[0] || 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80';
  const unitSuffix = product.priceType === 'paket' ? ' / paket' : ' / pcs';

  return (
    <div
      id={`product-card-${product.code}`}
      className="group bg-white rounded-2xl border border-stone-200/80 hover:border-stone-300 hover:shadow-lg transition-all duration-200 flex flex-col overflow-hidden"
    >
      {/* Product Image Area */}
      <div className="relative aspect-[4/3] bg-stone-100 overflow-hidden cursor-pointer" onClick={() => onViewDetail(product)}>
        <img
          src={primaryImage}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Badge Overlay */}
        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 items-start">
          {product.promo?.badgeText && (
            <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-md bg-rose-600 text-white shadow-sm">
              <Sparkles className="w-3 h-3" />
              {product.promo.badgeText}
            </span>
          )}
          {product.featured && !product.promo?.badgeText && (
            <span className="text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-md bg-stone-900 text-white shadow-sm">
              UNGGULAN
            </span>
          )}
        </div>

        {/* Product Code Pill */}
        <div className="absolute top-2.5 right-2.5 bg-white/90 backdrop-blur-xs text-stone-800 text-[10px] sm:text-xs font-mono font-bold px-2 py-0.5 rounded-md shadow-xs border border-stone-200/60">
          {product.code}
        </div>
      </div>

      {/* Product Content Body */}
      <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between space-y-3">
        <div>
          {/* Category & Minimum Order */}
          <div className="flex items-center justify-between text-[11px] text-stone-500 font-medium mb-1">
            <span className="text-emerald-700 font-semibold truncate max-w-[65%]">
              {product.category}
            </span>
            <span>Min. {product.minimumOrder} pcs</span>
          </div>

          {/* Product Name */}
          <h3
            onClick={() => onViewDetail(product)}
            className="text-sm sm:text-base font-bold text-stone-900 group-hover:text-emerald-700 transition-colors line-clamp-2 cursor-pointer leading-snug"
          >
            {product.name}
          </h3>

          {/* Short Description */}
          <p className="text-xs text-stone-500 mt-1 line-clamp-2 leading-relaxed hidden sm:block">
            {product.description}
          </p>
        </div>

        {/* Price & Action Buttons */}
        <div className="pt-2 border-t border-stone-100 space-y-2.5">
          {/* Price Tag */}
          <div>
            <span className="text-[11px] text-stone-400 block font-normal leading-tight">
              Mulai dari
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-sm sm:text-base md:text-lg font-bold text-stone-900">
                {formatRupiah(product.price)}
              </span>
              <span className="text-[11px] text-stone-500">
                {unitSuffix}
              </span>
            </div>
          </div>

          {/* Two Action Buttons */}
          <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
            <button
              id={`btn-detail-${product.code}`}
              onClick={() => onViewDetail(product)}
              className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-2 text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 active:bg-stone-300 rounded-xl transition cursor-pointer min-h-[40px]"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Detail</span>
            </button>

            <button
              id={`btn-order-${product.code}`}
              onClick={() => onOrder(product)}
              className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-xl transition shadow-xs cursor-pointer min-h-[40px]"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Pesan</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
