import React from 'react';
import { PageTab, Product, LookbookItem } from '../types';
import { productsData } from '../data/products';
import { servicesData } from '../data/services';
import { lookbookData } from '../data/lookbook';
import { reviewsData } from '../data/reviews';
import { TransformationSlider } from '../components/TransformationSlider';
import {
  ArrowRight,
  Star,
  CheckCircle2,
  Play,
  MessageCircle,
  Calendar,
  ShieldCheck,
  ChevronRight,
  Flame,
  Award
} from 'lucide-react';

interface HomePageProps {
  setActiveTab: (tab: PageTab) => void;
  onOpenBooking: (service?: string) => void;
  onSelectProduct: (product: Product) => void;
  onSelectLookbook: (item: LookbookItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  setActiveTab,
  onOpenBooking,
  onSelectProduct,
  onSelectLookbook,
}) => {
  const featuredProducts = productsData.slice(0, 4);
  const featuredLookbook = lookbookData.slice(0, 6);

  return (
    <div className="space-y-0">
      
      {/* SECTION 01: HERO */}
      <section id="home-hero" className="relative min-h-[88vh] sm:min-h-screen flex items-center justify-center bg-espresso text-ivory overflow-hidden pt-28 pb-14 sm:pb-16">
        {/* Background Editorial Image with Luxury Gradient Mask */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-editorial.jpg"
            alt="Everything Hair by Prevail Editorial Visual"
            className="w-full h-full object-cover object-[62%_center] opacity-55 md:opacity-60 scale-105 transform"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-espresso via-espresso/75 to-espresso/15" />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso via-transparent to-espresso/30" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-10 sm:py-12">
          <div className="max-w-2xl lg:max-w-[40rem]">
            
            {/* Location and service context */}
            <div className="inline-flex items-center gap-3 text-[10px] sm:text-xs font-bold tracking-widest-luxury uppercase text-champagne mb-6">
              <span>Lagos studio</span>
              <span className="h-px w-8 bg-champagne/60" />
              <span className="text-taupe-light">Worldwide delivery</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-ivory leading-[1.04] text-shadow-subtle">
              Hair that feels <br />
              <span className="gold-gradient-text italic font-normal">like you.</span>
            </h1>

            {/* Slogan & Paragraph */}
            <p className="mt-6 text-base sm:text-lg text-taupe-light font-light leading-relaxed max-w-xl">
              Premium wigs, thoughtful revamps, and polished styling for the moments you want to feel completely yourself.
            </p>

            {/* Primary and secondary actions */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={() => onOpenBooking()}
                className="px-8 py-4 bg-champagne text-espresso font-bold text-xs tracking-widest-luxury uppercase rounded-luxury hover:bg-champagne-soft transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-gold-glow"
              >
                <Calendar className="w-4 h-4" />
                <span>Book a consultation</span>
              </button>

              <button
                onClick={() => {
                  setActiveTab('our-work');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-8 py-4 bg-transparent text-ivory border border-champagne/60 font-semibold text-xs tracking-widest-luxury uppercase rounded-luxury hover:bg-ivory hover:text-espresso transition-all duration-200 flex items-center justify-center gap-2 backdrop-blur-sm"
              >
                <span>See our work</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Proof points */}
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-taupe-light">
              <div className="flex items-center gap-2 font-medium">
                <span className="h-1.5 w-1.5 rounded-full bg-champagne" />
                <span>Virgin hair units</span>
              </div>
              <div className="flex items-center gap-2 font-medium">
                <span className="h-1.5 w-1.5 rounded-full bg-champagne" />
                <span>Expert revamping</span>
              </div>
              <div className="flex items-center gap-2 font-medium">
                <span className="h-1.5 w-1.5 rounded-full bg-champagne" />
                <span>Personal styling</span>
              </div>
              <div className="flex items-center gap-2 font-medium">
                <span className="h-1.5 w-1.5 rounded-full bg-champagne" />
                <span>Wigs</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 02: BRAND INTRODUCTION */}
      <section className="py-20 lg:py-28 bg-ivory text-espresso">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Visual Column */}
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-luxury overflow-hidden shadow-2xl border border-taupe-light/60 aspect-[4/5] max-w-md mx-auto">
                <img
                  src="/images/hairthree.jpg"
                  alt="Prevail Luxury Hair Craftsmanship"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-espresso/90 backdrop-blur-md rounded-luxury text-ivory border border-champagne/30 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest-luxury text-champagne">
                      Studio Standards
                    </p>
                    <p className="text-xs font-serif font-semibold mt-0.5">
                      100% Virgin Hair & Flawless Lace Melt
                    </p>
                  </div>
                  <Award className="w-5 h-5 text-champagne shrink-0" />
                </div>
              </div>
            </div>

            {/* Copy Column */}
            <div className="order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-champagne-dark tracking-widest-luxury uppercase">
                <span>The Prevail Philosophy</span>
              </div>
              
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-espresso leading-tight">
                MORE THAN JUST HAIR.
              </h2>
              
              <p className="text-base sm:text-lg text-taupe-warm leading-relaxed font-light">
                At Everything Hair by Prevail, we believe the right hair can completely transform how you feel. From quality wigs to professional revamping and styling, we are here to help you create a look that feels uniquely yours.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-champagne-soft text-espresso flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-espresso" />
                  </div>
                  <span className="text-sm text-espresso font-medium">
                    Meticulous lace tinting and custom scalp hairline customization
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-champagne-soft text-espresso flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-espresso" />
                  </div>
                  <span className="text-sm text-espresso font-medium">
                    Botanical keratin treatments that revive old and tangled wigs
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-champagne-soft text-espresso flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-espresso" />
                  </div>
                  <span className="text-sm text-espresso font-medium">
                    Tension-free, protective braiding and gentle handling
                  </span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => {
                    setActiveTab('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 text-xs font-bold tracking-widest-luxury uppercase text-espresso hover:text-champagne-dark transition-colors group"
                >
                  <span>Discover Our Story</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* SECTION 03: SERVICES */}
      <section className="py-20 lg:py-28 bg-ivory-surface text-espresso border-y border-taupe-light/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div>
              <p className="text-xs font-bold text-champagne-dark tracking-widest-luxury uppercase mb-2">
                What We Do
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-espresso">
                SERVICES DESIGNED AROUND YOU
              </h2>
            </div>
            <button
              onClick={() => {
                setActiveTab('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-xs font-bold tracking-widest-luxury uppercase text-espresso hover:text-champagne-dark transition-colors self-start md:self-auto"
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* 4 Elegant Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesData.map((srv) => (
              <div
                key={srv.id}
                className="bg-ivory rounded-luxury p-7 border border-taupe-light/70 shadow-sm hover:shadow-luxury hover:border-champagne/60 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-serif text-2xl font-bold text-champagne-dark">
                      {srv.number}
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-taupe px-2.5 py-1 bg-ivory-surface rounded-luxury border border-taupe-light/40">
                      Studio Service
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-espresso mb-2 group-hover:text-champagne-dark transition-colors">
                    {srv.title}
                  </h3>

                  <p className="text-sm text-taupe-warm leading-relaxed font-light mb-6">
                    {srv.subtitle}
                  </p>
                </div>

                <div className="pt-4 border-t border-taupe-light/40">
                  <button
                    onClick={() => {
                      if (srv.id === 'service-wigs') {
                        setActiveTab('shop');
                      } else {
                        onOpenBooking(srv.title);
                      }
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-2 text-xs font-bold tracking-widest-luxury uppercase text-espresso group-hover:text-champagne-dark transition-colors"
                  >
                    <span>{srv.id === 'service-wigs' ? 'Explore Hair' : 'Book Service'}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 04: FEATURED HAIR */}
      <section className="py-20 lg:py-28 bg-ivory text-espresso">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-bold text-champagne-dark tracking-widest-luxury uppercase mb-2">
              Curated Raw & Virgin Units
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-espresso">
              FIND YOUR NEXT LOOK
            </h2>
            <p className="mt-3 text-sm sm:text-base text-taupe-warm font-light">
              Select your signature texture. Enquire directly on WhatsApp for tailored lengths, density, and immediate dispatch.
            </p>
          </div>

          {/* Hair Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-stretch">
            {featuredProducts.map((prod) => (
              <div
                key={prod.id}
                onClick={() => onSelectProduct(prod)}
                className="group cursor-pointer bg-ivory rounded-luxury overflow-hidden border border-taupe-light/70 shadow-sm hover:shadow-luxury transition-all duration-300 flex h-full flex-col"
              >
                {/* Product Image */}
                <div className="relative aspect-[4/5] bg-ivory-surface overflow-hidden">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {prod.badge && (
                    <span className="absolute top-3 left-3 px-3 py-1 bg-espresso/90 backdrop-blur-sm text-champagne text-[10px] font-bold tracking-widest-luxury uppercase rounded-luxury border border-champagne/40">
                      {prod.badge}
                    </span>
                  )}
                  <div className="absolute inset-0 bg-espresso/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-4 py-2 bg-ivory text-espresso text-xs font-bold tracking-widest-luxury uppercase rounded-luxury shadow-lg">
                      Quick View
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex flex-1 flex-col">
                  <p className="text-[11px] font-bold tracking-widest-luxury uppercase text-champagne-dark mb-1">
                    {prod.category}
                  </p>
                  <h3 className="font-serif text-lg font-bold text-espresso group-hover:text-champagne-dark transition-colors">
                    {prod.name}
                  </h3>
                  <p className="text-xs text-taupe-warm mt-1 font-light">
                    {prod.tagline}
                  </p>
                  <div className="mt-auto pt-4 border-t border-taupe-light/50 flex items-center justify-between text-xs">
                    <span className="text-taupe font-medium">Enquire for Price</span>
                    <span className="font-bold text-espresso group-hover:text-champagne-dark transition-colors flex items-center gap-1">
                      <span>View Details</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => {
                setActiveTab('shop');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-8 py-3.5 bg-espresso text-ivory text-xs font-bold tracking-widest-luxury uppercase rounded-luxury hover:bg-espresso-rich transition-all border border-espresso inline-flex items-center gap-2 shadow"
            >
              <span>Explore All Hair Textures</span>
              <ArrowRight className="w-4 h-4 text-champagne" />
            </button>
          </div>

        </div>
      </section>

      {/* SECTION 05: THE TRANSFORMATION SECTION */}
      <TransformationSlider
        onBookRevamp={() => onOpenBooking('Wig Revamping & Treatment')}
        onExploreRevamp={() => {
          setActiveTab('services');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* SECTION 06: LOOKBOOK */}
      <section className="py-20 lg:py-28 bg-ivory text-espresso">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div>
              <p className="text-xs font-bold text-champagne-dark tracking-widest-luxury uppercase mb-2">
                Digital Portfolio
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-espresso">
                THE PREVAIL LOOKBOOK
              </h2>
            </div>
            <button
              onClick={() => {
                setActiveTab('our-work');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-xs font-bold tracking-widest-luxury uppercase text-espresso hover:text-champagne-dark transition-colors"
            >
              <span>View All Finished Looks</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Masonry-Style Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredLookbook.map((item) => (
              <div
                key={item.id}
                onClick={() => onSelectLookbook(item)}
                className="group relative rounded-luxury overflow-hidden cursor-pointer shadow-sm hover:shadow-luxury bg-espresso-rich aspect-[3/4] border border-taupe-light/50"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                
                {/* Category Badge Top */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-ivory/90 backdrop-blur-md rounded-luxury text-[10px] font-bold tracking-widest-luxury uppercase text-espresso border border-taupe-light/40">
                    {item.category}
                  </span>
                </div>

                {/* Info Bottom */}
                <div className="absolute bottom-4 left-4 right-4 text-ivory">
                  <p className="text-[10px] uppercase tracking-wider text-champagne">
                    {item.service}
                  </p>
                  <h4 className="font-serif text-lg font-bold text-ivory mt-0.5 group-hover:text-champagne transition-colors">
                    {item.title}
                  </h4>
                  <div className="mt-2 flex items-center gap-1.5 text-xs text-taupe-light opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Inspect look</span>
                    <ArrowRight className="w-3 h-3 text-champagne" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 07: SOCIAL PROOF */}
      <section className="py-20 lg:py-28 bg-ivory-surface border-y border-taupe-light/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-bold text-champagne-dark tracking-widest-luxury uppercase mb-2">
              Verified Client Feedback
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-espresso">
              TRUSTED WITH YOUR HAIR
            </h2>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviewsData.map((rev) => (
              <div
                key={rev.id}
                className="bg-ivory p-8 rounded-luxury border border-taupe-light/60 shadow-sm space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-champagne-bright">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-champagne-bright" />
                    ))}
                  </div>
                  <p className="text-base text-espresso font-serif italic leading-relaxed">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="pt-4 border-t border-taupe-light/40 flex items-center justify-between text-xs">
                  <div>
                    <h4 className="font-bold text-espresso">{rev.author}</h4>
                    <p className="text-taupe">{rev.role} • {rev.location}</p>
                  </div>
                  <span className="px-2.5 py-1 bg-ivory-surface text-taupe-warm font-medium rounded-luxury border border-taupe-light/50 text-[11px]">
                    {rev.serviceUsed}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 08: TIKTOK / SOCIAL SECTION */}
      <section className="py-20 lg:py-28 bg-ivory text-espresso">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-espresso text-ivory text-xs font-bold tracking-widest-luxury uppercase rounded-luxury mb-3">
              <Flame className="w-3.5 h-3.5 text-champagne" />
              <span>@EverythingHairByPrevail</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-espresso">
              FOLLOW THE JOURNEY
            </h2>
            <p className="mt-3 text-sm sm:text-base text-taupe-warm font-light">
              Hair transformations, styling inspiration, and behind-the-scenes magic straight from our studio in Lagos.
            </p>
          </div>

          {/* TikTok Content Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            <div
              className="group relative aspect-[9/16] rounded-luxury overflow-hidden bg-espresso shadow-md border border-taupe-light/50"
            >
              <video
                src="/video/vidone.mp4"
                aria-label="TikTok Transformation Reel"
                controls
                loop
                playsInline
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
              />
            </div>

            <div
              className="group relative aspect-[9/16] rounded-luxury overflow-hidden bg-espresso shadow-md border border-taupe-light/50"
            >
              <video
                src="/video/vidtwo.mp4"
                aria-label="TikTok Silk Press Reel"
                controls
                loop
                playsInline
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
              />
            </div>

            <div
              className="group relative aspect-[9/16] rounded-luxury overflow-hidden bg-espresso shadow-md border border-taupe-light/50"
            >
              <video
                src="/video/vidthree.mp4"
                aria-label="TikTok Braids Reel"
                controls
                loop
                playsInline
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
              />
            </div>

            <div
              className="group relative aspect-[9/16] rounded-luxury overflow-hidden bg-espresso shadow-md border border-taupe-light/50"
            >
              <video
                src="/video/vidfour.mp4"
                aria-label="TikTok Client Glam Reel"
                controls
                loop
                playsInline
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
              />
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 09: BOOKING CTA BANNER */}
      <section className="py-20 lg:py-28 bg-espresso text-ivory relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-editorial.jpg"
            alt="Prevail Luxury CTA Banner"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-espresso/80" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-espresso-rich border border-champagne/40 text-champagne text-xs font-semibold tracking-widest-luxury uppercase">
            <span>Ready for Your Transformation</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ivory">
            READY FOR YOUR NEXT LOOK?
          </h2>

          <p className="text-base sm:text-lg text-taupe-light font-light max-w-2xl mx-auto leading-relaxed">
            Whether you are looking for a new virgin hair wig, revamping an old favourite, or booking an in-studio styling session, we are ready when you are.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenBooking()}
              className="w-full sm:w-auto px-8 py-4 bg-champagne text-espresso font-bold text-xs tracking-widest-luxury uppercase rounded-luxury hover:bg-champagne-soft transition-all duration-200 flex items-center justify-center gap-2 shadow-lg"
            >
              <Calendar className="w-4 h-4 text-espresso" />
              <span>Book an Appointment</span>
            </button>
            <a
              href="https://wa.me/2348000000000?text=Hello%20Prevail,%20I%20am%20ready%20to%20book%20my%20next%20look%20with%20you!"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-[#25D366] text-white font-bold text-xs tracking-widest-luxury uppercase rounded-luxury hover:brightness-105 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
