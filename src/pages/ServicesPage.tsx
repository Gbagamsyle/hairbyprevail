import React from 'react';
import { servicesData } from '../data/services';
import { TransformationSlider } from '../components/TransformationSlider';
import { CheckCircle2, Clock, Calendar, ArrowRight, MessageCircle, HelpCircle } from 'lucide-react';

interface ServicesPageProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenBooking }) => {
  return (
    <div className="pt-28 pb-24 bg-ivory text-espresso">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ivory-surface border border-taupe-light text-champagne-dark text-xs font-semibold tracking-widest-luxury uppercase mb-3">
            <span>Master Studio Craftsmanship</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-espresso">
            SERVICES DESIGNED AROUND YOU
          </h1>
          <p className="mt-4 text-base sm:text-lg text-taupe-warm font-light leading-relaxed">
            From precision wig rejuvenation to red-carpet installations and edge-friendly artisan braiding, experience personalized hair care tailored to your lifestyle.
          </p>
        </div>

        {/* Detailed Service Cards */}
        <div className="space-y-16">
          {servicesData.map((srv, idx) => (
            <div
              key={srv.id}
              className={`p-8 sm:p-12 rounded-luxury bg-ivory-surface border border-taupe-light grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Visual Side */}
              <div className={`lg:col-span-5 ${idx % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="relative rounded-luxury overflow-hidden aspect-[4/3] shadow-md border border-taupe-light/50">
                  <img
                    src={srv.image}
                    alt={srv.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 bg-espresso/90 text-champagne text-[11px] font-bold tracking-widest-luxury uppercase rounded-luxury border border-champagne/40">
                    Service {srv.number}
                  </div>
                </div>
              </div>

              {/* Information Side */}
              <div className={`lg:col-span-7 space-y-5 ${idx % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="flex items-center gap-2 text-xs font-bold text-champagne-dark tracking-widest-luxury uppercase">
                  <span>{srv.tagline}</span>
                </div>

                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-espresso">
                  {srv.title}
                </h2>

                <p className="text-sm sm:text-base text-taupe-warm leading-relaxed font-light">
                  {srv.description}
                </p>

                {/* What's Included */}
                <div className="pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-espresso mb-3">
                    Service Inclusions & Steps:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {srv.details.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-taupe-warm">
                        <CheckCircle2 className="w-3.5 h-3.5 text-champagne-dark shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Metadata details */}
                <div className="pt-3 border-t border-taupe-light/50 flex flex-wrap gap-4 text-xs text-taupe">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-champagne-dark" />
                    <span><strong>Turnaround:</strong> {srv.turnaroundTime}</span>
                  </div>
                </div>

                {/* Action CTA */}
                <div className="pt-4 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => onOpenBooking(srv.title)}
                    className="py-3 px-6 bg-espresso text-ivory text-xs font-bold tracking-widest-luxury uppercase rounded-luxury hover:bg-espresso-rich transition-all border border-espresso flex items-center justify-center gap-2 shadow"
                  >
                    <Calendar className="w-4 h-4 text-champagne" />
                    <span>Book {srv.title}</span>
                  </button>
                  <a
                    href={`https://wa.me/2348000000000?text=${encodeURIComponent(
                      `Hello Prevail, I would like to consult about booking the "${srv.title}" service.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-6 bg-transparent text-espresso text-xs font-bold tracking-widest-luxury uppercase rounded-luxury hover:bg-ivory border border-taupe transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                    <span>WhatsApp Inquiry</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Transformation Section embed */}
        <div className="mt-24">
          <TransformationSlider
            onBookRevamp={() => onOpenBooking('Wig Revamping & Treatment')}
            onExploreRevamp={() => window.scrollTo({ top: 400, behavior: 'smooth' })}
          />
        </div>

        {/* FAQ Section */}
        <div className="mt-24 max-w-3xl mx-auto space-y-6">
          <div className="text-center mb-10">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-espresso">
              Frequently Asked Questions
            </h3>
            <p className="text-xs uppercase tracking-widest-luxury text-taupe-warm mt-2">
              Everything you need to know about our services
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-6 rounded-luxury bg-ivory-surface border border-taupe-light">
              <h4 className="font-serif font-bold text-base text-espresso">
                How does the Wig Revamping drop-off and pickup work?
              </h4>
              <p className="text-xs sm:text-sm text-taupe-warm mt-2 leading-relaxed">
                You can drop off your wig directly at our studio in Lagos or send it via any courier service (such as GIG Logistics, Bolt Send, or DHL). Once completed within 48 to 72 hours, we package it in our protective satin luxury box and dispatch it back to your doorstep.
              </p>
            </div>

            <div className="p-6 rounded-luxury bg-ivory-surface border border-taupe-light">
              <h4 className="font-serif font-bold text-base text-espresso">
                Can you revamp wigs that were not originally bought from Prevail?
              </h4>
              <p className="text-xs sm:text-sm text-taupe-warm mt-2 leading-relaxed">
                Yes, absolutely. We revamp 100% human hair wigs from any vendor. Our botanical detox bath and steam treatments restore shine, eliminate tangles, and restyle tired hair regardless of where you purchased it.
              </p>
            </div>

            <div className="p-6 rounded-luxury bg-ivory-surface border border-taupe-light">
              <h4 className="font-serif font-bold text-base text-espresso">
                Do I need to come with my hair already washed for braiding or styling?
              </h4>
              <p className="text-xs sm:text-sm text-taupe-warm mt-2 leading-relaxed">
                We provide complete wash and blow-dry preparation in-studio, or you can come with freshly washed, product-free detangled hair for rapid installation.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
