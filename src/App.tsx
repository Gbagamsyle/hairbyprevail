import React, { useState } from 'react';
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

export function App() {
  const [activeTab, setActiveTab] = useState<PageTab>('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingService, setBookingService] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedLookbook, setSelectedLookbook] = useState<LookbookItem | null>(null);

  const handleOpenBooking = (service?: string) => {
    setBookingService(service || '');
    setIsBookingOpen(true);
  };

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleSelectLookbook = (item: LookbookItem) => {
    setSelectedLookbook(item);
  };

  return (
    <div className="min-h-screen bg-ivory text-espresso flex flex-col font-sans selection:bg-champagne-soft selection:text-espresso-dark">
      {/* Sticky Header */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenBooking={handleOpenBooking}
      />

      {/* Main Content Area with Dynamic Page View */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <HomePage
            setActiveTab={setActiveTab}
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
      <Footer setActiveTab={setActiveTab} onOpenBooking={() => handleOpenBooking()} />

      {/* Persistent Mobile Bottom Action Bar (visible on mobile screens) */}
      <PersistentMobileBar onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive Booking & Inquiry Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialService={bookingService}
      />

      {/* Product Quick View & WhatsApp Order Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onBookInstall={(productName) => handleOpenBooking(`Fitting for ${productName}`)}
      />

      {/* Portfolio Lightbox Modal */}
      <LightboxModal
        item={selectedLookbook}
        onClose={() => setSelectedLookbook(null)}
        onBookLook={(lookTitle) => handleOpenBooking(`Style Request: ${lookTitle}`)}
      />
    </div>
  );
}

export default App;
