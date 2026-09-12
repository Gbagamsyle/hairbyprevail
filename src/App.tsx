import React, { useEffect, useState } from 'react';
import { PageTab, Product, LookbookItem } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { PersistentMobileBar } from './components/PersistentMobileBar';
import { BookingModal } from './components/BookingModal';
import { ProductModal } from './components/ProductModal';
import { LightboxModal } from './components/LightboxModal';

import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { ServicesPage } from './pages/ServicesPage';
import { OurWorkPage } from './pages/OurWorkPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

const tabPaths: Record<PageTab, string> = {
  home: '/',
  shop: '/shop',
  services: '/services',
  'our-work': '/our-work',
  about: '/about',
  contact: '/contact',
};

const getTabFromPath = (pathname: string): PageTab => {
  const tab = (Object.keys(tabPaths) as PageTab[]).find((key) => tabPaths[key] === pathname);
  return tab || 'home';
};

export function App() {
  const [activeTab, setActiveTab] = useState<PageTab>(() => getTabFromPath(window.location.pathname));
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingService, setBookingService] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedLookbook, setSelectedLookbook] = useState<LookbookItem | null>(null);

  useEffect(() => {
    const handlePopState = () => {
      setActiveTab(getTabFromPath(window.location.pathname));
      setIsBookingOpen(false);
      setSelectedProduct(null);
      setSelectedLookbook(null);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleSetActiveTab = (tab: PageTab) => {
    setActiveTab(tab);
    const nextPath = tabPaths[tab];
    if (window.location.pathname !== nextPath) {
      window.history.pushState({}, '', nextPath);
    }
  };

  const handleOpenBooking = (service?: string) => {
    setBookingService(service || '');
    setIsBookingOpen(true);
    if (window.history.state?.modal !== 'booking') {
      window.history.pushState({ modal: 'booking' }, '', window.location.href);
    }
  };

  const handleCloseBooking = () => {
    if (window.history.state?.modal === 'booking') {
      window.history.back();
      return;
    }
    setIsBookingOpen(false);
  };

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    window.history.pushState({ modal: 'product' }, '', window.location.href);
  };

  const handleSelectLookbook = (item: LookbookItem) => {
    setSelectedLookbook(item);
    window.history.pushState({ modal: 'lookbook' }, '', window.location.href);
  };

  const handleCloseProduct = () => {
    if (window.history.state?.modal === 'product') {
      window.history.back();
      return;
    }
    setSelectedProduct(null);
  };

  const handleCloseLookbook = () => {
    if (window.history.state?.modal === 'lookbook') {
      window.history.back();
      return;
    }
    setSelectedLookbook(null);
  };

  return (
    <div className="min-h-screen bg-ivory text-espresso flex flex-col font-sans selection:bg-champagne-soft selection:text-espresso-dark">
      {/* Sticky Header */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={handleSetActiveTab}
        onOpenBooking={handleOpenBooking}
      />

      {/* Main Content Area with Dynamic Page View */}
      <main className="flex-1 pb-24 md:pb-0">
        {activeTab === 'home' && (
          <HomePage
            setActiveTab={handleSetActiveTab}
            onOpenBooking={handleOpenBooking}
            onSelectProduct={handleSelectProduct}
            onSelectLookbook={handleSelectLookbook}
          />
        )}
        {activeTab === 'shop' && (
          <ShopPage
            onSelectProduct={handleSelectProduct}
            onOpenBooking={handleOpenBooking}
          />
        )}
        {activeTab === 'services' && (
          <ServicesPage onOpenBooking={handleOpenBooking} />
        )}
        {activeTab === 'our-work' && (
          <OurWorkPage
            onSelectLookbook={handleSelectLookbook}
            onOpenBooking={handleOpenBooking}
          />
        )}
        {activeTab === 'about' && (
          <AboutPage onOpenBooking={() => handleOpenBooking()} />
        )}
        {activeTab === 'contact' && <ContactPage />}
      </main>

      {/* Global Footer */}
      <Footer setActiveTab={handleSetActiveTab} onOpenBooking={() => handleOpenBooking()} />

      {/* Persistent Mobile Bottom Action Bar (visible on mobile screens) */}
      <PersistentMobileBar onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive Booking & Inquiry Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialService={bookingService}
      />

      {/* Product Quick View & WhatsApp Order Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={handleCloseProduct}
        onBookInstall={(productName) => handleOpenBooking(`Fitting for ${productName}`)}
      />

      {/* Portfolio Lightbox Modal */}
      <LightboxModal
        item={selectedLookbook}
        onClose={handleCloseLookbook}
        onBookLook={(lookTitle) => handleOpenBooking(`Style Request: ${lookTitle}`)}
      />
    </div>
  );
}

export default App;
