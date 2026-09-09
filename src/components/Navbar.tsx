import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Phone, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, activeSection = 'home' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'katalog', label: 'Katalog' },
    { id: 'kategori', label: 'Kategori' },
    { id: 'galeri', label: 'Galeri' },
    { id: 'promo', label: 'Promo' },
    { id: 'testimoni', label: 'Testimoni' },
    { id: 'cara-pesan', label: 'Cara Pesan' },
    { id: 'kalkulator', label: 'Kalkulator' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  const directWhatsAppUrl = getWhatsAppUrl(
    `Halo Admin ${SITE_CONFIG.brandName}, saya ingin konsultasi pemesanan undangan / souvenir.`
  );

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-200/80 py-2.5'
          : 'bg-stone-50/90 backdrop-blur-sm border-b border-stone-200/40 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Tagline */}
        <button
          id="brand-logo-btn"
          onClick={() => handleNavClick('home')}
          className="text-left group flex items-center gap-3 cursor-pointer focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-700 flex items-center justify-center text-white font-bold text-xl shadow-sm group-hover:scale-105 transition-transform duration-200">
            RK
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-serif font-bold text-xl sm:text-2xl text-stone-900 tracking-tight">
                {SITE_CONFIG.brandName}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span>
            </div>
            <p className="text-[11px] font-medium text-stone-500 uppercase tracking-widest hidden sm:block">
              {SITE_CONFIG.tagline}
            </p>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              id={`nav-link-${link.id}`}
              onClick={() => handleNavClick(link.id)}
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                activeSection === link.id
                  ? 'text-emerald-700 bg-emerald-50 font-semibold'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100/70'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right WhatsApp Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            id="navbar-wa-button"
            href={directWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-xl shadow-sm hover:shadow transition-all duration-200"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Pesan via WhatsApp</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            id="mobile-quick-wa-btn"
            href={directWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Pesan via WhatsApp"
            className="p-2 text-emerald-700 bg-emerald-50 rounded-lg border border-emerald-200"
          >
            <MessageCircle className="w-5 h-5" />
          </a>
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
            className="p-2 text-stone-600 hover:text-stone-900 rounded-lg hover:bg-stone-100 focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden border-t border-stone-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top-2 duration-200"
        >
          <div className="grid grid-cols-2 gap-1.5 pb-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                id={`mobile-nav-link-${link.id}`}
                onClick={() => handleNavClick(link.id)}
                className={`text-left px-3 py-2.5 text-sm font-medium rounded-lg cursor-pointer transition-colors ${
                  activeSection === link.id
                    ? 'text-emerald-700 bg-emerald-50 font-semibold'
                    : 'text-stone-700 hover:bg-stone-50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-stone-100">
            <a
              id="mobile-drawer-wa-cta"
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Pesan via WhatsApp ({SITE_CONFIG.phoneDisplay})</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
