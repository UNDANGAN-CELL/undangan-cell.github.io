import React, { useEffect, useState, useCallback } from 'react';
import { X, ArrowRight, MessageCircle, Sparkles } from 'lucide-react';
import { Hub, ProductCategory } from '../types';
import { POPUP_CONFIG, POPUP_ITEMS } from '../data/popupPromo';
import { SITE_CONFIG } from '../data/siteConfig';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { resolveAssetUrl } from '../utils/assets';
import { trackEvent } from '../utils/analytics';

interface PromoPopupProps {
  /** Pop up hanya dipicu saat Beranda terbuka (bukan saat deep-link langsung ke hub). */
  canShow: boolean;
  onGoToProduct: (hub: Hub, category: ProductCategory) => void;
}

function alreadySeen(): boolean {
  try {
    return sessionStorage.getItem(POPUP_CONFIG.storageKey) === '1';
  } catch {
    return false;
  }
}

function markSeen(): void {
  try {
    sessionStorage.setItem(POPUP_CONFIG.storageKey, '1');
  } catch {
    /* storage diblokir: abaikan, pop up cukup tampil lagi di kunjungan berikutnya */
  }
}

export const PromoPopup: React.FC<PromoPopupProps> = ({ canShow, onGoToProduct }) => {
  const [open, setOpen] = useState(false);

  // Munculkan sekali, beberapa saat setelah web dibuka
  useEffect(() => {
    if (!POPUP_CONFIG.enabled || !canShow || alreadySeen()) return;
    const timer = window.setTimeout(() => {
      setOpen(true);
      markSeen();
      trackEvent('promo_popup_view');
    }, POPUP_CONFIG.delayMs);
    return () => window.clearTimeout(timer);
  }, [canShow]);

  const close = useCallback(() => setOpen(false), []);

  // ESC + kunci scroll selama pop up terbuka
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [open, close]);

  if (!open) return null;

  const waUrl = getWhatsAppUrl(
    `Halo Admin ${SITE_CONFIG.brandName}, saya lihat promo di website. Saya ingin tanya undangan / buku custom / amplop kartu ucapan.`
  );

  return (
    <div
      id="promo-popup"
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="promo-popup-title"
    >
      <div className="promo-popup-backdrop absolute inset-0 bg-stone-950/60" onClick={close} />

      <div className="promo-popup-card relative w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-3xl bg-[#faf8f2] shadow-2xl border border-white/60">
        <button
          type="button"
          onClick={close}
          aria-label="Tutup iklan"
          className="absolute top-3 right-3 z-10 inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/90 text-stone-600 hover:text-stone-900 hover:bg-white shadow border border-stone-200 cursor-pointer transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="px-5 pt-6 pb-4 sm:px-8 sm:pt-8 text-center bg-gradient-to-b from-emerald-100/70 to-transparent">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-700 text-white text-[11px] font-extrabold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            {POPUP_CONFIG.badge}
          </span>
          <h2 id="promo-popup-title" className="mt-3 font-serif text-xl sm:text-3xl font-extrabold text-stone-900 leading-tight pr-6 sm:pr-0">
            {POPUP_CONFIG.title}
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-stone-600">{POPUP_CONFIG.subtitle}</p>
        </div>

        <div className="px-4 sm:px-8 pb-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {POPUP_ITEMS.map((item, i) => (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                trackEvent('promo_popup_click', { item: item.id });
                setOpen(false);
                onGoToProduct(item.hub, item.category);
              }}
              style={{ animationDelay: `${180 + i * 110}ms` }}
              className="promo-popup-item group text-left flex sm:flex-col items-center sm:items-stretch gap-3 sm:gap-0 p-2.5 sm:p-0 rounded-2xl bg-white border border-stone-200 hover:border-emerald-400 hover:shadow-md overflow-hidden cursor-pointer transition"
            >
              <div className={`shrink-0 w-24 h-24 sm:w-full sm:h-36 rounded-xl sm:rounded-none overflow-hidden bg-gradient-to-br ${item.accent}`}>
                <img
                  src={resolveAssetUrl(item.image)}
                  alt={item.name}
                  loading="eager"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex-1 min-w-0 sm:p-3">
                <div className="font-extrabold text-sm sm:text-[15px] text-stone-900 leading-tight">{item.name}</div>
                <p className="text-[11px] text-stone-500 leading-snug mt-0.5">{item.tagline}</p>
                <div className="mt-1.5 flex flex-wrap items-baseline gap-x-1">
                  <span className="text-sm sm:text-base font-black text-emerald-800">{item.priceText}</span>
                  <span className="text-[10px] text-stone-500 font-medium">{item.priceNote}</span>
                </div>
                <span className="mt-1.5 inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700">
                  Lihat produk <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </button>
          ))}
        </div>

        <div className="px-4 sm:px-8 py-4 flex flex-col sm:flex-row gap-2.5">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('promo_popup_whatsapp')}
            className="promo-popup-cta flex-1 inline-flex items-center justify-center gap-2 min-h-12 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white text-sm font-bold shadow transition"
          >
            <MessageCircle className="w-4 h-4" />
            Tanya via WhatsApp
          </a>
          <button
            type="button"
            onClick={close}
            className="min-h-12 px-5 py-3 rounded-xl bg-white border border-stone-200 text-stone-600 hover:bg-stone-100 text-sm font-semibold cursor-pointer transition"
          >
            Lihat-lihat dulu
          </button>
        </div>
      </div>
    </div>
  );
};
