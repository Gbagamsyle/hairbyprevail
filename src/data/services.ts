import { Service } from '../types';

export const servicesData: Service[] = [
  {
    id: 'service-wigs',
    number: '01',
    title: 'Custom Wigs & Ready-to-Wear',
    subtitle: 'Quality wigs selected and styled to complement your unique look.',
    tagline: 'Flawless fit, undetectable lace, bespoke luxury.',
    description: 'Whether you want a ready-to-wear glueless unit or a bespoke custom wig constructed precisely to your head measurements, each piece is bleached, plucked, and styled by Prevail for a natural scalp illusion.',
    image: '/images/hair-body-wave.jpg',
    details: [
      'Custom cap sizing and adjustable elastic security',
      'Micro-bleached knots and custom pre-plucked hairline',
      'High-grade HD lace tinting matched to your skin tone',
      'Signature thermal silk press or precision curl styling'
    ],
    turnaroundTime: 'Ready-to-wear: Same day / Custom order: 3 to 5 business days',
    recommendedFor: 'Clients seeking longevity, seamless lace blend, and effortless everyday wear.'
  },
  {
    id: 'service-revamping',
    number: '02',
    title: 'Signature Wig Revamping',
    subtitle: 'Bring your old or tired wig back to life with a professional transformation.',
    tagline: 'Restore shine, eliminate tangles, revive bounce.',
    description: 'Do not throw away or abandon your favorite expensive wigs. Our signature restorative spa process detangles matted fibers, extracts buildup, infuses botanical keratin moisture, and restyles your unit to look brand new.',
    image: '/images/revamp-after.jpg',
    details: [
      'Deep clarifying detox bath and adhesive removal',
      'Intensive hydration mask and steam cuticle therapy',
      'Lace cleaning, knot re-tinting, and edge re-plucking',
      'Custom restyling (Silk press, soft wand curls, or beach waves)'
    ],
    turnaroundTime: 'Standard: 48 to 72 hours / Express: 24 hours',
    recommendedFor: 'Any dry, stiff, or tangled wig that needs salon-level rejuvenation.'
  },
  {
    id: 'service-styling',
    number: '03',
    title: 'Professional Hair Styling',
    subtitle: 'Professional styling for everyday looks, special occasions, and everything in between.',
    tagline: 'Precision installs, red carpet curls, lasting hold.',
    description: 'From glueless lace melts to editorial curls and sleek updos, our in-studio styling sessions ensure your hair stays camera-ready and comfortable all day long.',
    image: '/images/styling-editorial.jpg',
    details: [
      'Glueless and adhesive lace frontal installations',
      'Precision thermal styling and Hollywood wave sculpting',
      'Bridal, photoshoot, and birthday glam styling',
      'Protective foundation braid-downs for flat finishes'
    ],
    turnaroundTime: '1 to 2.5 hours per appointment',
    recommendedFor: 'Events, weddings, video shoots, or routine weekly glam.'
  },
  {
    id: 'service-braiding',
    number: '04',
    title: 'Braiding',
    subtitle: 'Beautiful braided styles created with care, precision, and attention to detail.',
    tagline: 'Tension-free, featherweight, pristine partings.',
    description: 'Protective styling that protects your edges. We specialize in clean geometric partings, bohemian goddess curls, knotless box braids, and classic feed-in cornrows.',
    image: '/images/braids.jpg',
    details: [
      'Tension-free painless knotless braiding technique',
      'Boho curls and French curl extensions integration',
      'Neat square, triangle, or organic partings',
      'Edge care hydration and protective styling maintenance'
    ],
    turnaroundTime: '3 to 6 hours depending on length and size',
    recommendedFor: 'Protective hair health, vacation looks, and long-lasting elegance.'
  }
];
