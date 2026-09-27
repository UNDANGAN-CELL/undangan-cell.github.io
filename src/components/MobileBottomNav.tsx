import React from 'react';
import { Home, HeartHandshake, PackageOpen, BookOpen, MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { HUBS } from '../data/hubs';
import { Hub } from '../types';

interface MobileBottomNavProps {
  activeHub: Hub | null;
  onNavigateHome: () => void;
  onSelectHub: (hub: Hub) => void;
}

const HUB_ICONS: Record<Hub, React.ReactNode> = {
  undangan: <HeartHandshake className="w-5 h-5" />,
  kemasan: <PackageOpen className="w-5 h-5" />,
  buku: <BookOpen className="w-5 h-5" />,
};

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  activeHub,
  onNavigateHome,
  onSelectHub,
}) => {
  const directWhatsAppUrl = getWhatsAppUrl(
    `Halo Admin ${SITE_CONFIG.brandName}, saya ingin konsultasi pemesanan cetak.`
  );

  return (
    <div
      id="mobile-bottom-navigation"
      className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#faf8f4]/95 backdrop-blur-md border-t border-stone-200/90 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] px-2 py-1.5"
    >
      <div className="flex items-center justify-around max-w-md mx-auto">

        {/* 1. Home */}
        <button
          id="mobile-nav-home"
          onClick={onNavigateHome}
          className={`flex flex-col items-center justify-center py-1 px-2 rounded-xl transition cursor-pointer min-w-[52px] ${
            activeHub === null
              ? 'text-emerald-700 font-semibold'
              : 'text-stone-500 hover:text-stone-800'
          }`}
        >
          <Home className={`w-5 h-5 ${activeHub === null ? 'stroke-[2.5]' : 'stroke-[1.75]'}`} />
          <span className="text-[10px] mt-0.5 tracking-tight">Beranda</span>
        </button>

        {/* 2-4. Hub Switcher */}
        {HUBS.map((hub) => (
          <button
            key={hub.id}
            id={`mobile-nav-hub-${hub.id}`}
            onClick={() => onSelectHub(hub.id)}
            className={`flex flex-col items-center justify-center py-1 px-2 rounded-xl transition cursor-pointer min-w-[52px] ${
              activeHub === hub.id
                ? 'text-emerald-700 font-semibold'
                : 'text-stone-500 hover:text-stone-800'
            }`}
          >
            <span className={activeHub === hub.id ? 'stroke-[2.5]' : 'stroke-[1.75]'}>{HUB_ICONS[hub.id]}</span>
            <span className="text-[10px] mt-0.5 tracking-tight">{hub.navLabel}</span>
          </button>
        ))}

        {/* 5. Direct WhatsApp Chat Button */}
        <a
          id="mobile-nav-wa-cta"
          href={directWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1 px-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl shadow-md active:scale-95 transition min-w-[56px]"
        >
          <div className="relative">
            <MessageCircle className="w-5 h-5 stroke-[2.2]" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-amber-400 rounded-full ring-1 ring-white animate-pulse" />
          </div>
          <span className="text-[10px] font-bold mt-0.5 tracking-tight">Chat WA</span>
        </a>

      </div>
    </div>
  );
};
