import React, { useState, useRef, useCallback } from 'react';
import { ArrowRight, MoveHorizontal } from 'lucide-react';

interface TransformationSliderProps {
  onBookRevamp: () => void;
  onExploreRevamp: () => void;
}

export const TransformationSlider: React.FC<TransformationSliderProps> = ({
  onBookRevamp,
  onExploreRevamp,
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(percentage);
    },
    []
  );

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <section className="bg-espresso text-ivory py-20 lg:py-28 relative overflow-hidden">
      {/* Decorative subtle ambient light */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-champagne/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-champagne-dark/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-espresso-rich border border-champagne/40 text-champagne text-[11px] font-semibold tracking-widest-luxury uppercase mb-4">
            <span>Signature Transformation</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ivory">
            WATCH THE TRANSFORMATION
          </h2>
          
          <p className="mt-4 text-base sm:text-lg text-taupe-light font-light leading-relaxed">
            Because sometimes your favourite wig doesn’t need replacing. It just needs a little Prevail magic.
          </p>
        </div>

        {/* Interactive Slider Container */}
        <div className="max-w-4xl mx-auto">
          <div
            ref={containerRef}
            className="relative w-full h-[360px] sm:h-[480px] lg:h-[540px] rounded-luxury overflow-hidden select-none border border-champagne/30 shadow-2xl cursor-ew-resize bg-espresso-rich"
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
          >
            {/* After Image (Full background layer) */}
            <img
              src="/images/revamp-after.jpg"
              alt="Wig After Prevail Revamp"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />
            
            {/* After Label */}
            <div className="absolute top-4 right-4 z-20 px-3.5 py-1.5 rounded-luxury bg-espresso/80 backdrop-blur-md border border-champagne/40 text-champagne text-xs font-bold tracking-widest-luxury uppercase flex items-center gap-1.5">
              <span>AFTER : REVIVED</span>
            </div>

            {/* Before Image (Clipped layer) */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src="/images/revamp-before.jpg"
                alt="Wig Before Revamp"
                className="absolute inset-0 w-full h-full object-cover max-w-none pointer-events-none"
                style={{
                  width: containerRef.current
                    ? `${containerRef.current.clientWidth}px`
                    : '100%',
                  height: '100%',
                }}
              />
              
              {/* Before Label */}
              <div className="absolute top-4 left-4 z-20 px-3.5 py-1.5 rounded-luxury bg-espresso/80 backdrop-blur-md border border-taupe-light/40 text-taupe-light text-xs font-bold tracking-widest-luxury uppercase">
                <span>BEFORE : TIRED</span>
              </div>
            </div>

            {/* Vertical Divider Line */}
            <div
              className="absolute top-0 bottom-0 z-30 pointer-events-none flex items-center justify-center"
              style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
            >
              <div className="w-[2px] h-full bg-white shadow-lg" />
              
              {/* Center Handle Button */}
              <div className="absolute top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-ivory text-espresso border-2 border-champagne shadow-2xl flex items-center justify-center cursor-ew-resize hover:scale-110 active:scale-95 transition-transform">
                <MoveHorizontal className="w-5 h-5 text-espresso" />
              </div>
            </div>

            {/* Hint Overlay for first-time visitors */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 px-4 py-1.5 rounded-full bg-espresso/90 backdrop-blur-md border border-champagne/30 text-taupe-light text-[11px] font-medium tracking-wide pointer-events-none flex items-center gap-1.5">
              <span>Drag slider horizontally to compare</span>
            </div>
          </div>

          {/* Key Revamp Benefits Breakdown */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="p-4 rounded-luxury bg-espresso-rich/60 border border-espresso-muted">
              <span className="text-champagne font-serif text-lg font-bold block">100%</span>
              <span className="text-xs text-taupe-light">Frizz & Tangle Free</span>
            </div>
            <div className="p-4 rounded-luxury bg-espresso-rich/60 border border-espresso-muted">
              <span className="text-champagne font-serif text-lg font-bold block">Deep Spa</span>
              <span className="text-xs text-taupe-light">Botanical Moisture</span>
            </div>
            <div className="p-4 rounded-luxury bg-espresso-rich/60 border border-espresso-muted">
              <span className="text-champagne font-serif text-lg font-bold block">HD Melt</span>
              <span className="text-xs text-taupe-light">Lace Rejuvenation</span>
            </div>
            <div className="p-4 rounded-luxury bg-espresso-rich/60 border border-espresso-muted">
              <span className="text-champagne font-serif text-lg font-bold block">48 Hours</span>
              <span className="text-xs text-taupe-light">Swift Turnaround</span>
            </div>
          </div>

          {/* Section Action Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onBookRevamp}
              className="w-full sm:w-auto px-8 py-3.5 bg-champagne text-espresso font-semibold text-xs tracking-widest-luxury uppercase rounded-luxury hover:bg-champagne-soft transition-all duration-200 flex items-center justify-center gap-2 shadow-lg"
            >
              <span>Book a Wig Revamp</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onExploreRevamp}
              className="w-full sm:w-auto px-8 py-3.5 bg-transparent text-ivory border border-taupe font-semibold text-xs tracking-widest-luxury uppercase rounded-luxury hover:bg-espresso-rich transition-all duration-200 flex items-center justify-center gap-2"
            >
              <span>Explore Revamping Process</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
