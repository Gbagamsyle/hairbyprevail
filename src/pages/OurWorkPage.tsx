import React, { useState } from 'react';
import { LookbookItem } from '../types';
import { lookbookData } from '../data/lookbook';
import { ArrowRight, Eye, MessageCircle } from 'lucide-react';

interface OurWorkPageProps {
  onSelectLookbook: (item: LookbookItem) => void;
  onOpenBooking: (serviceName?: string) => void;
}

export const OurWorkPage: React.FC<OurWorkPageProps> = ({ onSelectLookbook, onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Wigs', 'Revamp', 'Styling', 'Braids'];

  const filteredItems = activeCategory === 'All'
    ? lookbookData
    : lookbookData.filter((item) => item.category === activeCategory);

  return (
    <div className="pt-28 pb-24 bg-ivory text-espresso">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ivory-surface border border-taupe-light text-champagne-dark text-xs font-semibold tracking-widest-luxury uppercase mb-3">
            <span>Digital Portfolio</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-espresso">
            THE PREVAIL PORTFOLIO
          </h1>
          <p className="mt-4 text-base sm:text-lg text-taupe-warm font-light">
            Explore authentic transformations, custom installs, and finished customer looks crafted in our studio.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-luxury text-xs font-semibold tracking-widest-luxury uppercase transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-espresso text-ivory shadow border border-espresso'
                  : 'bg-ivory-surface text-taupe-warm hover:text-espresso hover:bg-taupe-light/30 border border-taupe-light'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectLookbook(item)}
              className="group relative rounded-luxury overflow-hidden cursor-pointer shadow-sm hover:shadow-luxury bg-espresso-rich aspect-[3/4] border border-taupe-light/60"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Category Pill */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-ivory/95 backdrop-blur-md rounded-luxury text-[10px] font-bold tracking-widest-luxury uppercase text-espresso border border-taupe-light/40">
                  {item.category}
                </span>
              </div>

              {/* Card Details */}
              <div className="absolute bottom-4 left-4 right-4 text-ivory">
                <p className="text-[10px] uppercase tracking-wider text-champagne font-semibold">
                  {item.service}
                </p>
                <h3 className="font-serif text-xl font-bold text-ivory mt-0.5 group-hover:text-champagne transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-taupe-light mt-1 font-light line-clamp-2">
                  {item.description}
                </p>
                
                <div className="mt-3 pt-2 border-t border-espresso-muted flex items-center justify-between text-xs text-champagne">
                  <span className="flex items-center gap-1">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Zoom Look</span>
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Booking Trigger Strip */}
        <div className="mt-20 p-8 sm:p-12 rounded-luxury bg-espresso text-ivory border border-champagne/30 text-center space-y-5">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ivory">
            Inspired by One of These Looks?
          </h3>
          <p className="text-sm text-taupe-light max-w-xl mx-auto font-light leading-relaxed">
            Send us a screenshot or reference photo and let’s recreate this style for your hair texture, unit, or next special event.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenBooking()}
              className="px-8 py-3.5 bg-champagne text-espresso font-bold text-xs tracking-widest-luxury uppercase rounded-luxury hover:bg-champagne-soft transition-all shadow"
            >
              Book Your Appointment
            </button>
            <a
              href="https://wa.me/2349012966554?text=Hello%20Prevail,%20I%20am%20looking%20at%20your%20portfolio%20and%20want%20to%20request%20a%20look."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-[#25D366] text-white font-bold text-xs tracking-widest-luxury uppercase rounded-luxury hover:brightness-105 transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Send Reference on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
