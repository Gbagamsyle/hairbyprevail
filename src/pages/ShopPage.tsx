import React, { useState } from 'react';
import { Product, HairTexture } from '../types';
import { productsData } from '../data/products';
import { MessageCircle, ArrowRight, Check, Shield, Truck, Scissors } from 'lucide-react';

interface ShopPageProps {
  onSelectProduct: (product: Product) => void;
  onOpenBooking: (service?: string) => void;
}

export const ShopPage: React.FC<ShopPageProps> = ({ onSelectProduct, onOpenBooking }) => {
  const [selectedTexture, setSelectedTexture] = useState<HairTexture>('All');

  const categories: HairTexture[] = ['All', 'Straight', 'Body Wave', 'Curly', 'Coloured', 'Best Sellers', 'New Arrivals'];

  const filteredProducts = selectedTexture === 'All'
    ? productsData
    : selectedTexture === 'Best Sellers'
      ? productsData.filter((p) => ['prod-body-wave', 'prod-deep-curly'].includes(p.id))
      : selectedTexture === 'New Arrivals'
        ? productsData.filter((p) => ['prod-custom-honey', 'prod-rich-burgundy', 'prod-sleek-lace', 'prod-cinnamon-curl'].includes(p.id))
        : productsData.filter((p) => p.category === selectedTexture);

  const getCategoryCount = (category: HairTexture) => {
    if (category === 'All') return productsData.length;
    if (category === 'Best Sellers') return productsData.filter((p) => ['prod-body-wave', 'prod-deep-curly'].includes(p.id)).length;
    if (category === 'New Arrivals') return productsData.filter((p) => ['prod-custom-honey', 'prod-rich-burgundy', 'prod-sleek-lace', 'prod-cinnamon-curl'].includes(p.id)).length;
    return productsData.filter((p) => p.category === category).length;
  };

  return (
    <div className="pt-28 pb-24 bg-ivory text-espresso">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ivory-surface border border-taupe-light text-champagne-dark text-xs font-semibold tracking-widest-luxury uppercase mb-3">
            <span>The Prevail Collection</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-espresso">
            FIND YOUR PERFECT HAIR
          </h1>
          <p className="mt-4 text-base sm:text-lg text-taupe-warm font-light">
            Explore our collection and find a look made for you. All units feature single-donor raw or virgin hair with pre-plucked invisible HD lace.
          </p>
        </div>

        {/* Collection Switcher */}
        <div className="mb-10 rounded-luxury border border-taupe-light/70 bg-ivory-surface/60 overflow-hidden">
          <div className="flex items-center justify-between gap-4 px-4 sm:px-5 py-3 border-b border-taupe-light/70">
            <p className="text-[10px] font-bold uppercase tracking-widest-luxury text-champagne-dark">
              Browse the collection
            </p>
            <p className="text-[10px] uppercase tracking-widest-luxury text-taupe">
              Viewing: <span className="text-espresso">{selectedTexture}</span>
            </p>
          </div>

          <div role="tablist" aria-label="Shop hair categories" className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-px bg-taupe-light/70">
            {categories.map((cat, index) => (
              <button
                key={cat}
                onClick={() => setSelectedTexture(cat)}
                role="tab"
                aria-selected={selectedTexture === cat}
                className={`group min-h-[68px] p-2.5 sm:p-3 text-left transition-all duration-200 ${
                  selectedTexture === cat
                    ? 'bg-espresso text-ivory'
                    : 'bg-ivory hover:bg-champagne-soft/40 text-espresso'
                }`}
              >
                <span className={`block text-[10px] font-semibold tracking-widest-luxury ${selectedTexture === cat ? 'text-champagne' : 'text-taupe'}`}>
                  0{index + 1}
                </span>
                <span className="mt-1.5 block text-[10px] sm:text-xs font-bold uppercase tracking-wider leading-tight">
                  {cat}
                </span>
                <span className={`mt-2 block text-[10px] ${selectedTexture === cat ? 'text-taupe-light' : 'text-taupe'}`}>
                  {getCategoryCount(cat)} {getCategoryCount(cat) === 1 ? 'unit' : 'units'}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between mb-5 text-xs text-taupe-warm">
          <span>{filteredProducts.length} {filteredProducts.length === 1 ? 'unit' : 'units'} available</span>
          <span className="uppercase tracking-widest-luxury">{selectedTexture}</span>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6 items-stretch">
          {filteredProducts.map((prod) => (
            <div
              key={prod.id}
              className="bg-ivory rounded-luxury overflow-hidden border border-taupe-light/70 shadow-sm hover:-translate-y-1 hover:shadow-luxury transition-all duration-300 flex h-full flex-col group"
            >
              {/* Product Visual */}
              <div
                onClick={() => onSelectProduct(prod)}
                className="relative aspect-[4/5] bg-ivory-surface overflow-hidden cursor-pointer"
              >
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/65 via-transparent to-transparent opacity-70" />
                {prod.badge && (
                  <span className="absolute top-3 left-3 px-2.5 py-1 bg-ivory/90 backdrop-blur-sm text-espresso text-[10px] font-bold tracking-widest-luxury uppercase rounded-luxury border border-ivory/60">
                    {prod.badge}
                  </span>
                )}
                <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-3">
                  <span className="text-[10px] font-bold tracking-widest-luxury uppercase text-ivory">
                    {prod.category}
                  </span>
                  <span className="px-2.5 py-1.5 bg-ivory text-espresso text-xs font-bold tracking-tight rounded-luxury shadow-lg">
                    {prod.price}
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-3 text-[10px] text-taupe font-semibold tracking-widest-luxury uppercase mb-2">
                    <span>Virgin hair unit</span>
                    <span className="text-right">{prod.availableLengths[0]}–{prod.availableLengths[prod.availableLengths.length - 1]}</span>
                  </div>

                  <h3
                    onClick={() => onSelectProduct(prod)}
                    className="min-h-[3.5rem] font-serif text-xl font-bold leading-tight text-espresso group-hover:text-champagne-dark transition-colors cursor-pointer"
                  >
                    {prod.name}
                  </h3>

                  <p className="mt-1 text-xs text-champagne-dark font-medium uppercase tracking-wider line-clamp-1">
                    {prod.tagline}
                  </p>

                  <div className="mt-5 pt-4 border-t border-taupe-light/40 grid grid-cols-2 gap-3 text-[11px] text-taupe">
                    <div>
                      <span className="block uppercase tracking-widest-luxury text-[9px]">Lace</span>
                      <span className="mt-1 block font-medium text-espresso line-clamp-2">{prod.laceType}</span>
                    </div>
                    <div>
                      <span className="block uppercase tracking-widest-luxury text-[9px]">Density</span>
                      <span className="mt-1 block font-medium text-espresso line-clamp-2">{prod.density}</span>
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="mt-6 pt-4 border-t border-taupe-light/50 flex items-center gap-2">
                  <button
                    onClick={() => onSelectProduct(prod)}
                    className="flex-1 py-3 px-3 bg-espresso text-ivory text-[10px] font-bold tracking-widest-luxury uppercase rounded-luxury hover:bg-espresso-rich transition-all border border-espresso text-center"
                  >
                    View unit
                  </button>
                  <a
                    href={`https://wa.me/2349012966554?text=${encodeURIComponent(
                      `Hello Prevail, I would like to enquire about pricing and availability for the "${prod.name}".`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-[#25D366] text-white rounded-luxury hover:brightness-105 transition-all"
                    title="Enquire on WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quality Guarantee Strip */}
        <div className="mt-20 p-8 rounded-luxury bg-ivory-surface border border-taupe-light grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-full bg-champagne-soft text-espresso flex items-center justify-center mx-auto">
              <Scissors className="w-5 h-5 text-espresso" />
            </div>
            <h4 className="font-serif font-bold text-base text-espresso">Custom Pre-Plucked</h4>
            <p className="text-xs text-taupe-warm">Each unit arrives pre-bleached with a graduated, undetectable natural hairline.</p>
          </div>
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-full bg-champagne-soft text-espresso flex items-center justify-center mx-auto">
              <Shield className="w-5 h-5 text-espresso" />
            </div>
            <h4 className="font-serif font-bold text-base text-espresso">100% Virgin & Raw Hair</h4>
            <p className="text-xs text-taupe-warm">Single donor hair with aligned cuticles that can be heat styled, bleached, and dyed.</p>
          </div>
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-full bg-champagne-soft text-espresso flex items-center justify-center mx-auto">
              <Truck className="w-5 h-5 text-espresso" />
            </div>
            <h4 className="font-serif font-bold text-base text-espresso">Lagos & Global Dispatch</h4>
            <p className="text-xs text-taupe-warm">Swift local door delivery in Lagos and insured DHL express worldwide shipping.</p>
          </div>
        </div>

      </div>
    </div>
  );
};
