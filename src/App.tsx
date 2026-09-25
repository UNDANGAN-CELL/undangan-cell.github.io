/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PromoBanner } from './components/PromoBanner';
import { HubPickerSection } from './components/HubPickerSection';
import { HubPage, HubSection } from './components/HubPage';
import { ProductDetailModal } from './components/ProductDetailModal';
import { OrderFormModal } from './components/OrderFormModal';
import { UploadDesignSection } from './components/UploadDesignSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { HowToOrderSection } from './components/HowToOrderSection';
import { AboutSection } from './components/AboutSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MobileBottomNav } from './components/MobileBottomNav';
import { Footer } from './components/Footer';

import { PROMOS } from './data/promos';
import { getHubForCategory } from './data/categories';
import { Product, ProductCategory, Hub } from './types';

const VALID_HUBS: Hub[] = ['undangan', 'kemasan', 'buku'];

function readHubFromHash(): Hub | null {
  const hash = window.location.hash.replace('#', '');
  return (VALID_HUBS as string[]).includes(hash) ? (hash as Hub) : null;
}

export default function App() {
  const [activeHub, setActiveHub] = useState<Hub | null>(() => readHubFromHash());
  const [hubSection, setHubSection] = useState<HubSection>('kategori');
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'Semua'>('Semua');
  const [pendingHomeScroll, setPendingHomeScroll] = useState<string | null>(null);

  // Modals state
  const [detailProduct, setDetailProduct] = useState<Product | null>(null);
  const [orderProduct, setOrderProduct] = useState<Product | null>(null);
  const [orderVariants, setOrderVariants] = useState<Record<string, string>>({});

  // Sinkronkan dengan tombol back/forward browser (perubahan #hash)
  useEffect(() => {
    const handleHashChange = () => setActiveHub(readHubFromHash());
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Setelah kembali ke Beranda karena user klik Testimoni/Cara Pesan dari dalam hub,
  // scroll ke section yang dituju setelah tampilan Beranda selesai dirender.
  useEffect(() => {
    if (activeHub === null && pendingHomeScroll) {
      const id = pendingHomeScroll;
      setPendingHomeScroll(null);
      window.requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      });
    }
  }, [activeHub, pendingHomeScroll]);

  const handleSelectHub = useCallback((hub: Hub) => {
    setActiveHub(hub);
    setHubSection('kategori');
    setSelectedCategory('Semua');
    window.history.pushState(null, '', `#${hub}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleGoHome = useCallback(() => {
    setActiveHub(null);
    setPendingHomeScroll(null);
    window.history.pushState(null, '', window.location.pathname + window.location.search);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleNavigateHomeSection = useCallback((sectionId: 'testimoni' | 'cara-pesan') => {
    const targetId = `${sectionId}-section`;
    if (activeHub !== null) {
      setActiveHub(null);
      setPendingHomeScroll(targetId);
      window.history.pushState(null, '', window.location.pathname + window.location.search);
    } else {
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [activeHub]);

  const scrollToHubPicker = useCallback(() => {
    document.getElementById('hub-picker-section')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  // Dipakai Promo Banner: arahkan langsung ke hub + kategori + tab Katalog yang sesuai
  const goToCategory = useCallback((cat: ProductCategory) => {
    const hub = getHubForCategory(cat);
    if (!hub) return;
    setActiveHub(hub);
    setSelectedCategory(cat);
    setHubSection('katalog');
    window.history.pushState(null, '', `#${hub}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // View Product Detail modal
  const handleViewDetail = (product: Product) => {
    setDetailProduct(product);
  };

  // Direct Order click from Card
  const handleDirectOrder = (product: Product) => {
    setOrderProduct(product);
    setOrderVariants({});
  };

  // Transition from Detail modal to Order Form modal
  const handleOrderFromDetail = (product: Product, variants: Record<string, string>) => {
    setDetailProduct(null);
    setOrderProduct(product);
    setOrderVariants(variants);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f7f5f0] text-stone-900 font-sans selection:bg-emerald-100 selection:text-emerald-900 pb-16 sm:pb-0">

      {/* Navbar */}
      <Navbar
        activeHub={activeHub}
        onNavigateHome={handleGoHome}
        onSelectHub={handleSelectHub}
        onNavigateHomeSection={handleNavigateHomeSection}
      />

      {/* Main Content: Beranda (3 pilihan) ATAU satu Hub penuh — benar-benar berpindah, bukan scroll panjang */}
      <main className="flex-1">
        {activeHub === null ? (
          <>
            <Hero
              onExploreCatalog={scrollToHubPicker}
              onOpenCalculator={scrollToHubPicker}
            />

            <PromoBanner
              promos={PROMOS}
              onSelectCategory={(catName) => goToCategory(catName as ProductCategory)}
            />

            <HubPickerSection onSelectHub={handleSelectHub} />

            <UploadDesignSection />

            <TestimonialsSection />

            <HowToOrderSection />

            <AboutSection />
          </>
        ) : (
          <HubPage
            hub={activeHub}
            section={hubSection}
            onSectionChange={setHubSection}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            onBack={handleGoHome}
            onViewDetail={handleViewDetail}
            onOrder={handleDirectOrder}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigateHome={handleGoHome}
        onSelectHub={handleSelectHub}
        onNavigateHomeSection={handleNavigateHomeSection}
      />

      {/* Desktop Floating WhatsApp CTA */}
      <FloatingWhatsApp />

      {/* Mobile Sticky Bottom Navigation (Beranda + 3 Hub + WA) */}
      <MobileBottomNav
        activeHub={activeHub}
        onNavigateHome={handleGoHome}
        onSelectHub={handleSelectHub}
      />

      {/* Modals */}
      <ProductDetailModal
        product={detailProduct}
        isOpen={Boolean(detailProduct)}
        onClose={() => setDetailProduct(null)}
        onOrderProduct={handleOrderFromDetail}
      />

      <OrderFormModal
        product={orderProduct}
        initialVariants={orderVariants}
        isOpen={Boolean(orderProduct)}
        onClose={() => setOrderProduct(null)}
      />

    </div>
  );
}
