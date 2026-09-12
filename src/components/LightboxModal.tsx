import React from 'react';
import { LookbookItem } from '../types';
import { X, MessageCircle, Calendar } from 'lucide-react';

interface LightboxModalProps {
  item: LookbookItem | null;
  onClose: () => void;
  onBookLook: (title: string) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose, onBookLook }) => {
  if (!item) return null;

  const whatsappMessage = encodeURIComponent(
    `Hello Prevail, I saw the "${item.title}" in your portfolio and would like to enquire about this look or service.`
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-espresso/90 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[92vh] bg-ivory rounded-luxury shadow-2xl overflow-y-auto border border-taupe-light"
        onClick={(event) => event.stopPropagation()}
      >
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-espresso/80 text-ivory hover:bg-espresso transition-colors border border-champagne/40"
          aria-label="Close photo"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Large Image */}
        <div className="relative w-full h-[42vh] sm:h-[48vh] max-h-[48vh] bg-espresso-rich overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-contain mx-auto"
          />
          <div className="absolute bottom-3 left-3 px-3 py-1 bg-espresso/80 backdrop-blur-md rounded-luxury text-champagne text-[11px] font-semibold tracking-widest-luxury uppercase border border-champagne/30">
            {item.category}
          </div>
        </div>

        {/* Look Details & CTAs */}
        <div className="p-5 sm:p-7 bg-ivory">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest-luxury text-champagne-dark">
                {item.service}
              </p>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-espresso mt-1 leading-tight">
                {item.title}
              </h3>
              <p className="text-sm text-taupe-warm mt-2 leading-relaxed">
                {item.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {item.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-0.5 rounded-luxury bg-ivory-surface text-taupe-warm text-xs border border-taupe-light/60"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="mt-6 pt-5 border-t border-taupe-light/40 flex flex-col sm:flex-row gap-3">
            <a
              href={`https://wa.me/2349012966554?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 px-4 bg-[#25D366] text-white text-xs font-bold tracking-widest-luxury uppercase rounded-luxury flex items-center justify-center gap-2 shadow hover:brightness-105 transition-all text-center"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Request Look on WhatsApp</span>
            </a>
            <button
              onClick={() => {
                onBookLook(item.title);
                onClose();
              }}
              className="py-3 px-6 bg-espresso text-ivory text-xs font-semibold tracking-widest-luxury uppercase rounded-luxury hover:bg-espresso-rich transition-all flex items-center justify-center gap-2 border border-espresso"
            >
              <Calendar className="w-4 h-4 text-champagne" />
              <span>Book Appointment</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
