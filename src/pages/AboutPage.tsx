import React from 'react';
import { Heart, Award, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

interface AboutPageProps {
  onOpenBooking: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenBooking }) => {
  return (
    <div className="pt-28 pb-24 bg-ivory text-espresso">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Side */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-luxury overflow-hidden aspect-[4/5] shadow-2xl border border-taupe-light/70 max-w-md mx-auto">
              <img
                src="/images/hero-editorial.jpg"
                alt="Prevail, Founder of Everything Hair"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-espresso/90 backdrop-blur-md rounded-luxury text-ivory border border-champagne/30">
                <p className="text-[10px] uppercase tracking-widest-luxury text-champagne">
                  Founder & Master Stylist
                </p>
                <h3 className="font-serif text-lg font-bold text-ivory mt-0.5">
                  Prevail
                </h3>
                <p className="text-xs text-taupe-light font-light">
                  Lagos, Nigeria
                </p>
              </div>
            </div>

            {/* Quote Card */}
            <div className="p-6 bg-ivory-surface rounded-luxury border border-taupe-light max-w-md mx-auto">
              <p className="font-serif italic text-sm text-espresso leading-relaxed">
                "When you look in the mirror and love your hair, you walk into any room with undeniable poise and certainty. That feeling is what we build every day."
              </p>
              <p className="text-xs font-bold uppercase tracking-wider text-champagne-dark mt-3">
                Prevail • Founder
              </p>
            </div>
          </div>

          {/* Narrative Side */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ivory-surface border border-taupe-light text-champagne-dark text-xs font-semibold tracking-widest-luxury uppercase mb-1">
              <span>The Brand Story</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-espresso leading-tight">
              HAIR IS PERSONAL.
            </h1>

            <div className="space-y-4 text-base text-taupe-warm font-light leading-relaxed">
              <p>
                Everything Hair by Prevail began with a single core belief: hair is not simply an accessory, it is an intimate expression of self-worth, style, and personal power.
              </p>
              <p>
                Too often, clients invested thousands in expensive human hair wigs only to watch them tangle, shed, or lose their vibrancy within months, or receive harsh lace installations that damaged their natural edges. Prevail set out to rewrite that narrative.
              </p>
              <p>
                By combining artisan wig construction, meticulous lace bleaching and plucking, gentle tension-free braiding, and our signature restorative revamping spa treatments, we provide women in Lagos and around the globe with a sanctuary for true hair longevity.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-ivory-surface rounded-luxury border border-taupe-light space-y-1.5">
                <div className="flex items-center gap-2 text-espresso font-serif font-bold text-base">
                  <ShieldCheck className="w-4 h-4 text-champagne-dark" />
                  <span>Uncompromised Quality</span>
                </div>
                <p className="text-xs text-taupe-warm font-light">
                  We source only 100% single-donor virgin and raw hair, ensuring cuticles remain intact for years of wear.
                </p>
              </div>

              <div className="p-4 bg-ivory-surface rounded-luxury border border-taupe-light space-y-1.5">
                <div className="flex items-center gap-2 text-espresso font-serif font-bold text-base">
                  <Heart className="w-4 h-4 text-champagne-dark" />
                  <span>Restoration Focus</span>
                </div>
                <p className="text-xs text-taupe-warm font-light">
                  We believe in saving and reviving your favorite pieces with advanced steam therapy and botanical keratin.
                </p>
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={onOpenBooking}
                className="px-8 py-3.5 bg-espresso text-ivory text-xs font-bold tracking-widest-luxury uppercase rounded-luxury hover:bg-espresso-rich transition-all border border-espresso inline-flex items-center gap-2 shadow"
              >
                <span>Book a Consultation with Prevail</span>
                <ArrowRight className="w-4 h-4 text-champagne" />
              </button>
            </div>

          </div>

        </div>

        {/* Studio Craftsmanship Standards */}
        <div className="mt-24 p-8 sm:p-12 rounded-luxury bg-espresso text-ivory border border-champagne/30">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ivory">
              The Prevail Standard of Excellence
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
              <div className="p-5 rounded-luxury bg-espresso-rich border border-espresso-muted space-y-2">
                <span className="text-champagne font-serif text-2xl font-bold block">01</span>
                <h4 className="font-serif font-bold text-base text-ivory">Zero Edge Damage</h4>
                <p className="text-xs text-taupe-light font-light">Custom glueless foundation techniques and protective edge hydration shields.</p>
              </div>
              <div className="p-5 rounded-luxury bg-espresso-rich border border-espresso-muted space-y-2">
                <span className="text-champagne font-serif text-2xl font-bold block">02</span>
                <h4 className="font-serif font-bold text-base text-ivory">Natural Scalp Melt</h4>
                <p className="text-xs text-taupe-light font-light">Swiss HD transparent lace micro-plucked to mirror individual hairline density.</p>
              </div>
              <div className="p-5 rounded-luxury bg-espresso-rich border border-espresso-muted space-y-2">
                <span className="text-champagne font-serif text-2xl font-bold block">03</span>
                <h4 className="font-serif font-bold text-base text-ivory">Authentic Longevity</h4>
                <p className="text-xs text-taupe-light font-light">Every unit is built and styled to withstand repeat washing, heat, and humidity.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
