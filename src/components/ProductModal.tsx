import React, { useState } from 'react';
import { Product } from '../types';
import { X, Check, MessageCircle, Calendar, ShieldCheck, Truck } from 'lucide-react';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onBookInstall: (productName: string) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose, onBookInstall }) => {
  const [selectedLength, setSelectedLength] = useState<string>('');

  if (!product) return null;

  const activeLength = selectedLength || product.availableLengths[0] || '24 inch';

  const whatsappMessage = encodeURIComponent(
    `Hello Prevail, I am interested in inquiring about the "${product.name}" (${activeLength}). Please share pricing, lace options, and delivery timeline.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-espresso/80 backdrop-blur-sm overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-ivory rounded-luxury shadow-2xl overflow-hidden border border-taupe-light my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-ivory/80 hover:bg-espresso hover:text-ivory transition-colors border border-taupe-light/50"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Product Image Gallery Column */}
          <div className="relative bg-ivory-surface p-6 flex items-center justify-center border-b md:border-b-0 md:border-r border-taupe-light/40">
            <div className="relative w-full aspect-[4/5] max-h-[500px] overflow-hidden rounded-luxury shadow-md">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.badge && (
                <span className="absolute top-3 left-3 px-3 py-1 bg-espresso/90 backdrop-blur-sm text-champagne text-[11px] font-semibold tracking-widest-luxury uppercase rounded-luxury border border-champagne/40">
                  {product.badge}
                </span>
              )}
            </div>
          </div>

          {/* Details Column */}
          <div className="p-6 sm:p-8 flex flex-col justify-between max-h-[85vh] overflow-y-auto">
            <div>
              {/* Category & Tagline */}
              <div className="flex items-center gap-2 text-xs font-semibold text-champagne-dark tracking-widest-luxury uppercase mb-2">
                <span>{product.category}</span>
                <span>•</span>
                <span>{product.tagline}</span>
              </div>

              {/* Title */}
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-espresso tracking-tight">
                {product.name}
              </h3>

              {/* Price */}
              <div className="mt-4 flex items-end gap-2">
                <span className="text-2xl font-semibold tracking-tight text-espresso">
                  {product.price}
                </span>
                <span className="text-[10px] uppercase tracking-widest-luxury text-taupe pb-1">
                  starting price
                </span>
              </div>
              <p className="mt-1 text-xs text-taupe-warm">Final price varies by length, density, and customisation.</p>

              {/* Description */}
              <p className="mt-4 text-sm text-taupe-warm leading-relaxed">
                {product.description}
              </p>

              {/* Hair Specs Grid */}
              <div className="mt-6 pt-5 border-t border-taupe-light/50 space-y-2.5 text-xs">
                <div className="flex justify-between py-1 border-b border-taupe-light/20">
                  <span className="text-taupe uppercase tracking-wider">Hair Type</span>
                  <span className="font-medium text-espresso">{product.hairType}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-taupe-light/20">
                  <span className="text-taupe uppercase tracking-wider">Lace Specification</span>
                  <span className="font-medium text-espresso">{product.laceType}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-taupe-light/20">
                  <span className="text-taupe uppercase tracking-wider">Hair Density</span>
                  <span className="font-medium text-espresso">{product.density}</span>
                </div>
              </div>

              {/* Available Length Selection */}
              <div className="mt-6">
                <label className="block text-xs font-semibold uppercase tracking-wider text-espresso mb-2.5">
                  Select Desired Length
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.availableLengths.map((len) => (
                    <button
                      key={len}
                      onClick={() => setSelectedLength(len)}
                      className={`px-3.5 py-1.5 text-xs font-medium rounded-luxury transition-all ${
                        activeLength === len
                          ? 'bg-espresso text-ivory border border-espresso'
                          : 'bg-ivory-surface text-espresso hover:bg-taupe-light/30 border border-taupe-light'
                      }`}
                    >
                      {len}
                    </button>
                  ))}
                </div>
              </div>

              {/* Key Features List */}
              <div className="mt-6 space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-espresso">
                  What Makes It Superior
                </p>
                {product.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-taupe-warm">
                    <Check className="w-3.5 h-3.5 text-champagne-dark shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Trust Badges */}
              <div className="mt-6 pt-4 border-t border-taupe-light/40 grid grid-cols-2 gap-3 text-[11px] text-taupe">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-champagne-dark" />
                  <span>100% Quality Guaranteed</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Truck className="w-4 h-4 text-champagne-dark" />
                  <span>Nationwide & Global Courier</span>
                </div>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="mt-8 pt-4 border-t border-taupe-light/50 flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/2348000000000?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 px-4 bg-[#25D366] text-white text-xs font-bold tracking-widest-luxury uppercase rounded-luxury flex items-center justify-center gap-2 shadow hover:brightness-105 transition-all text-center"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enquire on WhatsApp</span>
              </a>
              <button
                onClick={() => {
                  onClose();
                  onBookInstall(product.name);
                }}
                className="py-3.5 px-5 bg-espresso text-ivory text-xs font-semibold tracking-widest-luxury uppercase rounded-luxury hover:bg-espresso-rich transition-all flex items-center justify-center gap-2 text-center border border-espresso"
              >
                <Calendar className="w-4 h-4 text-champagne" />
                <span>Book Fitting</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
