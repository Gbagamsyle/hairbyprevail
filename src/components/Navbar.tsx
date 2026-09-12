import React, { useState, useEffect } from 'react';
import { PageTab } from '../types';
import { Menu, X, MessageCircle, Calendar } from 'lucide-react';

interface NavbarProps {
  activeTab: PageTab;
  setActiveTab: (tab: PageTab) => void;
  onOpenBooking: (service?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, onOpenBooking }) => {
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isHeroTop = activeTab === 'home' && isHeroVisible;

  useEffect(() => {
    if (activeTab !== 'home') {
      setIsHeroVisible(false);
      return;
    }

    const hero = document.getElementById('home-hero');
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsHeroVisible(entry.isIntersecting),
      { threshold: 0.08 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, [activeTab]);

  const navLinks: { id: PageTab; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'shop', label: 'Shop Hair' },
    { id: 'services', label: 'Services' },
    { id: 'our-work', label: 'Our Work' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (tab: PageTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          !isHeroTop
            ? 'bg-ivory/95 backdrop-blur-md shadow-sm border-b border-taupe-light/40 py-3.5'
            : 'bg-espresso/20 backdrop-blur-sm py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group focus:outline-none"
          >
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-serif text-xl border transition-colors shadow-sm ${
              isHeroTop
                ? 'bg-ivory text-espresso border-champagne/80 group-hover:border-champagne-bright'
                : 'bg-espresso text-ivory border-champagne/60 group-hover:border-champagne'
            }`}>
              P
            </div>
            <div className="flex flex-col">
              <span className={`font-serif text-lg sm:text-xl font-bold tracking-tight leading-none ${isHeroTop ? 'text-ivory' : 'text-espresso'}`}>
                EVERYTHING HAIR
              </span>
              <span className={`text-[10px] tracking-widest-luxury uppercase font-medium mt-1 ${isHeroTop ? 'text-champagne-soft' : 'text-champagne-dark'}`}>
                By Prevail Studio
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3.5 py-2 text-xs font-semibold tracking-wider uppercase transition-all duration-200 relative ${
                    isActive
                      ? isHeroTop ? 'text-champagne-soft font-bold' : 'text-espresso font-bold'
                      : isHeroTop ? 'text-ivory/80 hover:text-ivory' : 'text-taupe hover:text-espresso'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-champagne rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop CTA Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/2348000000000?text=Hello%20Prevail,%20I%20would%20like%20to%20enquire%20about%20your%20hair%20services"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2.5 rounded hover:text-champagne-dark border transition-all ${isHeroTop ? 'text-ivory border-ivory/40 hover:border-champagne' : 'text-espresso border-taupe-light/60 hover:border-champagne'}`}
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <button
              onClick={() => onOpenBooking()}
              className="px-5 py-2.5 bg-espresso text-ivory text-xs font-semibold tracking-wider uppercase rounded-luxury hover:bg-espresso-rich transition-all duration-200 border border-espresso flex items-center gap-2 shadow-sm hover:shadow"
            >
              <Calendar className="w-3.5 h-3.5 text-champagne" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded focus:outline-none ${isHeroTop ? 'text-ivory' : 'text-espresso'}`}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 md:hidden bg-espresso/60 backdrop-blur-sm animate-fadeIn">
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-ivory shadow-2xl p-6 flex flex-col justify-between border-l border-taupe-light/30">
            <div>
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-6 border-b border-taupe-light/30">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-espresso text-ivory flex items-center justify-center font-serif text-base border border-champagne">
                    P
                  </div>
                  <span className="font-serif text-sm font-bold tracking-tight text-espresso">
                    EVERYTHING HAIR
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-taupe hover:text-espresso"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Links */}
              <nav className="mt-8 flex flex-col space-y-3">
                {navLinks.map((link) => {
                  const isActive = activeTab === link.id;
                  return (
                    <button
                      key={link.id}
                      onClick={() => handleNavClick(link.id)}
                      className={`text-left px-4 py-3 text-sm font-semibold tracking-wider uppercase rounded-luxury transition-all ${
                        isActive
                          ? 'bg-espresso text-ivory'
                          : 'text-espresso hover:bg-ivory-surface'
                      }`}
                    >
                      {link.label}
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Mobile Bottom Actions */}
            <div className="pt-6 border-t border-taupe-light/30 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 bg-espresso text-ivory text-xs font-semibold tracking-wider uppercase rounded-luxury flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-champagne" />
                <span>Book Appointment</span>
              </button>
              <a
                href="https://wa.me/2348000000000?text=Hello%20Prevail,%20I%20would%20like%20to%20enquire%20about%20your%20hair%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-[#25D366] text-white text-xs font-semibold tracking-wider uppercase rounded-luxury flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
              <p className="text-[11px] text-center text-taupe pt-2">
                Studio in Lagos, Nigeria • Worldwide Shipping
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
