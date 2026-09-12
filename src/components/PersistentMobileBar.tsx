import React from 'react';
import { MessageCircle, Calendar } from 'lucide-react';

interface PersistentMobileBarProps {
  onOpenBooking: () => void;
}

export const PersistentMobileBar: React.FC<PersistentMobileBarProps> = ({ onOpenBooking }) => {
  return (
    <aside
      aria-label="Quick Mobile Actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-espresso/95 backdrop-blur-md border-t border-champagne/30 px-2.5 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] shadow-2xl transition-all"
    >
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <a
          href="https://wa.me/2349012966554?text=Hello%20Prevail,%20I%20came%20from%20your%20website%20and%20would%20like%20to%20enquire%20about%20your%20hair%20and%20services!"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 min-w-0 py-3 px-2 bg-[#25D366] text-white text-[10px] sm:text-xs font-bold tracking-wider uppercase rounded-luxury flex items-center justify-center gap-1.5 shadow-md hover:brightness-110 active:scale-98 transition-all"
        >
          <MessageCircle className="w-4 h-4 shrink-0" />
          <span>WhatsApp Chat</span>
        </a>
        <button
          onClick={onOpenBooking}
          className="flex-1 min-w-0 py-3 px-2 bg-ivory text-espresso text-[10px] sm:text-xs font-bold tracking-wider uppercase rounded-luxury flex items-center justify-center gap-1.5 shadow-md hover:bg-champagne-soft active:scale-98 transition-all border border-champagne/40"
        >
          <Calendar className="w-4 h-4 text-champagne-dark shrink-0" />
          <span>Book Service</span>
        </button>
      </div>
    </aside>
  );
};
