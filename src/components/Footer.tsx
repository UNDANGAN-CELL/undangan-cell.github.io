import React from 'react';
import { MessageCircle, Heart, Phone } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';
import { resolveAssetUrl } from '../utils/assets';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { HUBS } from '../data/hubs';
import { Hub } from '../types';

interface FooterProps {
  onNavigateHome: () => void;
  onSelectHub: (hub: Hub) => void;
  onNavigateHomeSection: (sectionId: 'testimoni' | 'cara-pesan') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateHome, onSelectHub, onNavigateHomeSection }) => {
  const directWhatsAppUrl = getWhatsAppUrl(
    `Halo Admin ${SITE_CONFIG.brandName}, saya ingin konsultasi pemesanan cetak.`
  );

  return (
    <footer id="main-footer" className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          <div className="md:col-span-5 space-y-4">
            {/* Logo diberi panel terang agar tetap terbaca di footer gelap */}
            <div className="inline-flex bg-[#faf8f4] rounded-2xl px-4 py-3">
              <img
                src={resolveAssetUrl('images/brand/logo-rumahijo.webp')}
                alt={`Logo ${SITE_CONFIG.brandName} — ${SITE_CONFIG.tagline}`}
                width={900}
                height={616}
                loading="lazy"
                decoding="async"
                className="h-20 sm:h-24 w-auto object-contain"
              />
            </div>
            <p className="text-xs sm:text-sm text-stone-400 max-w-sm leading-relaxed">
              Layanan percetakan dan sablon: undangan, souvenir, dan kebutuhan acara dengan pemesanan melalui WhatsApp.
            </p>
            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition"
            >
              <MessageCircle className="w-4 h-4" />
              Hubungi WhatsApp ({SITE_CONFIG.phoneDisplay})
            </a>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">Menu Navigasi</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={onNavigateHome} className="text-stone-400 hover:text-emerald-400 transition cursor-pointer text-left">
                  Beranda
                </button>
              </li>
              {HUBS.map((hub) => (
                <li key={hub.id}>
                  <button onClick={() => onSelectHub(hub.id)} className="text-stone-400 hover:text-emerald-400 transition cursor-pointer text-left">
                    {hub.title}
                  </button>
                </li>
              ))}
              <li>
                <button onClick={() => onNavigateHomeSection('testimoni')} className="text-stone-400 hover:text-emerald-400 transition cursor-pointer text-left">
                  Testimoni
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateHomeSection('cara-pesan')} className="text-stone-400 hover:text-emerald-400 transition cursor-pointer text-left">
                  Cara Pesan
                </button>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">Kontak & Pemesanan</h4>
            <div className="space-y-3 text-xs text-stone-400">
              <div>
                <span className="block text-stone-500 text-[10px]">Lokasi Workshop:</span>
                <span className="font-medium text-stone-300">{SITE_CONFIG.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                <div>
                  <span className="block text-stone-500 text-[10px]">WhatsApp:</span>
                  <a href={directWhatsAppUrl} target="_blank" rel="noopener noreferrer" className="font-bold text-white hover:text-emerald-400 transition">
                    {SITE_CONFIG.phoneDisplay}
                  </a>
                </div>
              </div>
              <p className="pt-2 text-[11px] text-stone-500 leading-relaxed">
                Pemesanan dan pembayaran dikonfirmasi langsung melalui WhatsApp.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-3">
          <p>© 2026 {SITE_CONFIG.brandName}. All rights reserved.</p>
          <p className="flex items-center gap-1 text-[11px]">
            <span>Dibuat dengan</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>untuk Momen Spesial Anda</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
