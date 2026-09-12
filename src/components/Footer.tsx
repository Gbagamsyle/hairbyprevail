import React from 'react';
import { PageTab } from '../types';
import { MapPin, Phone, Instagram, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: PageTab) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onOpenBooking }) => {
  const handleNav = (tab: PageTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-espresso text-ivory-surface pt-16 pb-24 md:pb-16 border-t border-espresso-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-14 border-b border-espresso-muted/60">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-champagne-dark text-espresso font-serif text-xl font-bold flex items-center justify-center">
                P
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold tracking-tight text-ivory">
                  EVERYTHING HAIR
                </h3>
                <p className="text-[10px] uppercase tracking-widest-luxury text-champagne">
                  By Prevail Studio
                </p>
              </div>
            </div>
            <p className="text-sm text-taupe-light leading-relaxed font-light">
              Premium raw hair studio, signature wig revamping transformations, and bespoke styling crafted to elevate your natural beauty and confidence.
            </p>
            <div className="pt-2">
              <span className="inline-block px-3 py-1 bg-espresso-rich text-champagne text-[11px] font-medium tracking-wider uppercase rounded-luxury border border-champagne/30">
                Wigs • Revamping • Styling • Braiding
              </span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="font-serif text-base font-semibold text-ivory tracking-wide mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="text-taupe-light hover:text-champagne transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('shop')}
                  className="text-taupe-light hover:text-champagne transition-colors"
                >
                  Shop Hair Collections
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="text-taupe-light hover:text-champagne transition-colors"
                >
                  Salon & Revamp Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('our-work')}
                  className="text-taupe-light hover:text-champagne transition-colors"
                >
                  Our Work & Lookbook
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="text-taupe-light hover:text-champagne transition-colors"
                >
                  About Prevail
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="text-taupe-light hover:text-champagne transition-colors"
                >
                  Contact & Bookings
                </button>
              </li>
            </ul>
          </div>

          {/* Services Quick Links */}
          <div>
            <h4 className="font-serif text-base font-semibold text-ivory tracking-wide mb-4">
              Signature Offerings
            </h4>
            <ul className="space-y-2.5 text-sm text-taupe-light">
              <li>
                <button
                  onClick={() => {
                    setActiveTab('services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-champagne transition-colors text-left"
                >
                  Signature Wig Revamp & Spa
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('shop');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-champagne transition-colors text-left"
                >
                  Virgin Raw Hair Frontals & Wigs
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-champagne transition-colors text-left"
                >
                  Glueless Lace Installs & Styling
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-champagne transition-colors text-left"
                >
                  Goddess & Knotless Braids
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenBooking}
                  className="text-champagne font-medium hover:underline inline-flex items-center gap-1 pt-1"
                >
                  <span>Book Custom Consultation</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </li>
            </ul>
          </div>

          {/* Studio Location & Social Connection */}
          <div className="space-y-4">
            <h4 className="font-serif text-base font-semibold text-ivory tracking-wide mb-4">
              Studio & Contact
            </h4>
            <div className="flex items-start gap-3 text-sm text-taupe-light">
              <MapPin className="w-4 h-4 text-champagne shrink-0 mt-1" />
              <span>Lagos, Nigeria (Private Studio Appointments & Nationwide Delivery)</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-taupe-light">
              <Phone className="w-4 h-4 text-champagne shrink-0" />
              <span>Available via WhatsApp & Phone</span>
            </div>

            {/* Social Buttons */}
            <div className="pt-3">
              <p className="text-xs uppercase tracking-wider text-taupe-light mb-3">
                Follow The Hair Journey
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.tiktok.com/@everythinghair_byprevail?is_from_webapp=1&sender_device=pc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-luxury bg-espresso-rich text-ivory text-xs font-semibold hover:bg-champagne-dark hover:text-espresso transition-all flex items-center gap-1.5 border border-espresso-muted"
                >
                  <span>TikTok</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
                <a
                  href="https://www.instagram.com/everythinghairby_prevail/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-luxury bg-espresso-rich text-ivory text-xs font-semibold hover:bg-champagne-dark hover:text-espresso transition-all flex items-center gap-1.5 border border-espresso-muted"
                >
                  <Instagram className="w-3 h-3" />
                  <span>Instagram</span>
                </a>
                <a
                  href="https://wa.me/2349012966554"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-luxury bg-[#25D366]/20 text-[#25D366] text-xs font-semibold hover:bg-[#25D366] hover:text-white transition-all flex items-center gap-1.5 border border-[#25D366]/40"
                >
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-taupe gap-4">
          <p>© 2026 Everything Hair by Prevail. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Crafted with Luxury & Care</span>
            <span>•</span>
            <span>Lagos, Nigeria</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
