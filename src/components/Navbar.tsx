import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Tag, Home as HomeIcon } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { resolveAssetUrl } from '../utils/assets';
import { HUBS } from '../data/hubs';
import { PROMOS } from '../data/promos';
import { Hub } from '../types';

interface NavbarProps {
  activeHub: Hub | null;
  onNavigateHome: () => void;
  onSelectHub: (hub: Hub) => void;
  onNavigateHomeSection: (sectionId: 'testimoni' | 'cara-pesan') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeHub,
  onNavigateHome,
  onSelectHub,
  onNavigateHomeSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [promoOpen, setPromoOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleHome = () => {
    onNavigateHome();
    setMobileMenuOpen(false);
    setPromoOpen(false);
  };

  const handlePromo = () => {
    setPromoOpen((open) => !open);
    setMobileMenuOpen(false);
  };

  const handleHub = (hub: Hub) => {
    onSelectHub(hub);
    setMobileMenuOpen(false);
  };

  const handleHomeSection = (id: 'testimoni' | 'cara-pesan') => {
    onNavigateHomeSection(id);
    setMobileMenuOpen(false);
  };

  const directWhatsAppUrl = getWhatsAppUrl(
    `Halo Admin ${SITE_CONFIG.brandName}, saya ingin konsultasi pemesanan cetak.`
  );

  return (
    <header
      id="main-navbar"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    >
      {/* Main Navbar Bar */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-[#faf8f4]/95 backdrop-blur-md shadow-md border-b border-stone-200/90 py-2.5'
            : 'bg-[#faf8f4]/90 backdrop-blur-md border-b border-stone-200/60 py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo (gambar logo lengkap Rumah Ijo) */}
          <button
            id="brand-logo-btn"
            onClick={handleHome}
            aria-label={`${SITE_CONFIG.brandName} — ${SITE_CONFIG.tagline}, ke beranda`}
            className="shrink-0 flex items-center cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 rounded-lg"
          >
            <img
              src={resolveAssetUrl('images/brand/logo-rumahijo.webp')}
              alt={`Logo ${SITE_CONFIG.brandName} — ${SITE_CONFIG.tagline}`}
              width={900}
              height={616}
              decoding="async"
              className={`w-auto object-contain object-left transition-all duration-300 ${
                isScrolled ? 'h-11 sm:h-12 lg:h-14' : 'h-12 sm:h-14 lg:h-16'
              }`}
            />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            <button
              id="nav-link-home"
              onClick={handleHome}
              className={`inline-flex items-center gap-1.5 px-3 py-2 text-sm font-semibold rounded-xl transition-all cursor-pointer ${
                activeHub === null
                  ? 'text-emerald-800 bg-emerald-100/70 shadow-xs'
                  : 'text-stone-700 hover:text-emerald-700 hover:bg-emerald-50/60'
              }`}
            >
              <HomeIcon className="w-3.5 h-3.5" />
              <span>Beranda</span>
            </button>

            {HUBS.map((hub) => (
              <button
                key={hub.id}
                id={`nav-link-${hub.id}`}
                onClick={() => handleHub(hub.id)}
                className={`px-3 py-2 text-sm font-semibold rounded-xl transition-all cursor-pointer ${
                  activeHub === hub.id
                    ? 'text-emerald-800 bg-emerald-100/70 shadow-xs'
                    : 'text-stone-700 hover:text-emerald-700 hover:bg-emerald-50/60'
                }`}
              >
                {hub.title}
              </button>
            ))}

            <button
              id="nav-link-promo"
              onClick={handlePromo}
              className={`inline-flex items-center gap-1.5 px-3 py-2 text-sm font-semibold rounded-xl transition-all cursor-pointer ${
                promoOpen
                  ? 'text-emerald-800 bg-emerald-100/70 shadow-xs'
                  : 'text-stone-700 hover:text-emerald-700 hover:bg-emerald-50/60'
              }`}
            >
              <Tag className="w-3.5 h-3.5" />
              <span>Promo</span>
            </button>

            <button
              id="nav-link-testimoni"
              onClick={() => handleHomeSection('testimoni')}
              className="px-3 py-2 text-sm font-semibold rounded-xl transition-all cursor-pointer text-stone-700 hover:text-emerald-700 hover:bg-emerald-50/60"
            >
              Testimoni
            </button>

            <button
              id="nav-link-cara-pesan"
              onClick={() => handleHomeSection('cara-pesan')}
              className="px-3 py-2 text-sm font-semibold rounded-xl transition-all cursor-pointer text-stone-700 hover:text-emerald-700 hover:bg-emerald-50/60"
            >
              Cara Pesan
            </button>
          </nav>

          {/* Right WhatsApp Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              id="navbar-wa-button"
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-emerald-600 via-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 active:scale-95 rounded-xl shadow-md hover:shadow-emerald-600/25 transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>Pesan via WhatsApp</span>
            </a>
          </div>

          {/* Mobile Quick Action Buttons */}
          <div className="flex lg:hidden items-center gap-1.5">
            <a
              id="mobile-quick-wa-btn"
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pesan via WhatsApp"
              className="p-2 text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-xl shadow-xs transition"
            >
              <MessageCircle className="w-5 h-5" />
            </a>

            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
              className="p-2 text-stone-700 hover:text-stone-900 rounded-xl hover:bg-stone-100 focus:outline-none transition"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {promoOpen && (
          <div
            id="promo-menu-panel"
            className="absolute right-4 top-full mt-2 w-[min(92vw,380px)] rounded-2xl border border-stone-200 bg-white shadow-2xl overflow-hidden"
          >
            {PROMOS.map((promo) => {
              const promoUrl = getWhatsAppUrl(
                `Halo Admin ${SITE_CONFIG.brandName}, saya ingin klaim promo: "${promo.title}" (Kode: ${promo.code || '-'}). Boleh minta info ketentuannya?`
              );
              return (
                <div key={promo.id} className="p-4 sm:p-5">
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-emerald-800">
                    <Tag className="w-3.5 h-3.5" />
                    <span>{promo.badge}</span>
                  </div>
                  <h3 className="mt-2 text-sm sm:text-base font-extrabold text-stone-900">{promo.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-stone-600">{promo.description}</p>
                  <div className="mt-3 flex items-center justify-between gap-3">
                    <span className="text-[10px] sm:text-xs text-stone-500">Kode: <b className="text-stone-700">{promo.code || '-'}</b></span>
                    <a
                      href={promoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-emerald-600 px-3 py-2 text-[11px] font-bold text-white hover:bg-emerald-700 transition"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      Tanya Promo
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Mobile Drawer Menu */}
        {mobileMenuOpen && (
          <div
            id="mobile-nav-drawer"
            className="lg:hidden border-t border-stone-200 bg-[#faf8f4] px-4 pt-3 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top-2 duration-200"
          >
            <div className="grid grid-cols-2 gap-2 pb-2">
              <button
                id="mobile-nav-link-home"
                onClick={handleHome}
                className={`text-left px-3 py-2.5 text-sm font-semibold rounded-xl cursor-pointer transition-colors ${
                  activeHub === null
                    ? 'text-emerald-800 bg-emerald-100/70 border border-emerald-200'
                    : 'text-stone-700 hover:bg-stone-100'
                }`}
              >
                Beranda
              </button>

              {HUBS.map((hub) => (
                <button
                  key={hub.id}
                  id={`mobile-nav-link-${hub.id}`}
                  onClick={() => handleHub(hub.id)}
                  className={`text-left px-3 py-2.5 text-sm font-semibold rounded-xl cursor-pointer transition-colors ${
                    activeHub === hub.id
                      ? 'text-emerald-800 bg-emerald-100/70 border border-emerald-200'
                      : 'text-stone-700 hover:bg-stone-100'
                  }`}
                >
                  {hub.title}
                </button>
              ))}

              <button
                id="mobile-nav-link-promo"
                onClick={handlePromo}
                className={`text-left px-3 py-2.5 text-sm font-semibold rounded-xl cursor-pointer transition-colors ${
                  promoOpen
                    ? 'text-emerald-800 bg-emerald-100/70 border border-emerald-200'
                    : 'text-stone-700 hover:bg-stone-100'
                }`}
              >
                Promo
              </button>

              <button
                id="mobile-nav-link-testimoni"
                onClick={() => handleHomeSection('testimoni')}
                className="text-left px-3 py-2.5 text-sm font-semibold rounded-xl cursor-pointer transition-colors text-stone-700 hover:bg-stone-100"
              >
                Testimoni
              </button>

              <button
                id="mobile-nav-link-cara-pesan"
                onClick={() => handleHomeSection('cara-pesan')}
                className="text-left px-3 py-2.5 text-sm font-semibold rounded-xl cursor-pointer transition-colors text-stone-700 hover:bg-stone-100"
              >
                Cara Pesan
              </button>
            </div>

            <div className="pt-2 border-t border-stone-100 space-y-2">
              <a
                id="mobile-drawer-wa-cta"
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 rounded-xl shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Pesan via WhatsApp ({SITE_CONFIG.phoneDisplay})</span>
              </a>

              <p className="text-center text-[11px] text-stone-500 pt-1">
                Fast Response • Konsultasi Gratis Desain
              </p>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
