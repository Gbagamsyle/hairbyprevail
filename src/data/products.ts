import { Product } from '../types';

export const productsData: Product[] = [
  {
    id: 'prod-body-wave',
    name: 'Signature Raw Body Wave Wig',
    category: 'Body Wave',
    tagline: 'Natural. Soft. Versatile.',
    description: 'Our flagship raw human hair unit with deep, flowing S-pattern waves that hold their shape effortlessly. Pre-plucked with ultra-thin HD lace for an undetectable hairline finish.',
    hairType: '100% Raw Virgin Human Hair',
    laceType: 'Undetectable Swiss HD Lace (13x4 / 13x6)',
    availableLengths: ['18 inch', '22 inch', '26 inch', '30 inch'],
    density: '180% to 250% Full Density',
    price: '₦1,250,000',
    image: '/images/hair-body-wave.jpg',
    badge: 'Bestseller',
    features: [
      'Natural deep luster with zero synthetic shine',
      'Cuticles aligned in one direction for tangle-free wear',
      'Can be bleached, dyed, and heat styled up to 450°F',
      'Pre-bleached tiny knots with invisible hairline'
    ]
  },
  {
    id: 'prod-bone-straight',
    name: 'Sleek Bone Straight Unit',
    category: 'Straight',
    tagline: 'Sleek. Classic. Timeless.',
    description: 'Razor sharp ends with an immaculate glass-hair mirror finish. Moves like liquid silk with natural body, refusing to frizz even in humid weather.',
    hairType: '100% Single Donor Raw Hair',
    laceType: 'Invisible HD Melt Lace (5x5 / 13x6)',
    availableLengths: ['20 inch', '24 inch', '28 inch', '32 inch'],
    density: '200% High Density',
    price: '₦1,350,000',
    image: '/images/hair-straight.jpg',
    badge: 'Luxury Raw',
    features: [
      'Mirror shine without heavy product build-up',
      'Double drawn thick tips from root to end',
      'Zero matting and effortless comb-through',
      'Pre-plucked natural graduated density'
    ]
  },
  {
    id: 'prod-deep-curly',
    name: 'Luxe Defined Deep Curly Unit',
    category: 'Curly',
    tagline: 'Full. Textured. Effortless.',
    description: 'Juicy, rich spiral curls with luxurious volume and high bounce. Stays beautifully defined wet or dry, giving an iconic goddess silhouette.',
    hairType: '100% Virgin Hair Steam Textured',
    laceType: 'HD Lace Frontal (13x4)',
    availableLengths: ['18 inch', '22 inch', '26 inch'],
    density: '200% to 250% Density',
    price: '₦1,150,000',
    image: '/images/hair-curly.jpg',
    badge: 'Popular',
    features: [
      'Retains curl definition with simple water misting',
      'Minimal shedding with double-reinforced wefts',
      'Soft to touch with lasting hydration retention',
      'Versatile parting for middle or deep side parts'
    ]
  },
  {
    id: 'prod-custom-honey',
    name: 'Perruque Lace Front',
    category: 'Coloured',
    tagline: 'Bold. Expressive. Unforgettable.',
    description: 'A softly blended balayage unit with warm honey ribbons, caramel mid-lengths, and a deep espresso root. The dimensional colour catches the light beautifully while keeping the finish polished, wearable, and easy to style from day to evening.',
    hairType: '100% Premium Virgin Hair Custom Coloured',
    laceType: 'HD Transparent Lace (13x6)',
    availableLengths: ['22 inch', '26 inch', '28 inch'],
    density: '200% Density',
    price: '₦1,450,000',
    image: '/images/perruque-lace-front.jpg',
    badge: 'Custom Tone',
    features: [
      'Multi-dimensional salon-grade tone formulation',
      'Color-treated with deep moisture restoration',
      'Natural root shadow for seamless scalp blend',
      'Glueless ready-to-wear styling'
    ]
  },
  {
    id: 'prod-rich-burgundy',
    name: 'Velvet Espresso & Burgundy Wave',
    category: 'Coloured',
    tagline: 'Rich. Radiant. Sophisticated.',
    description: 'A sultry deep wine and dark chocolate gradient that catches the light with subtle crimson reflections. Silky texture with lasting bounce.',
    hairType: '100% Virgin Hair Custom Lifted',
    laceType: 'HD Melt Lace (13x4)',
    availableLengths: ['20 inch', '24 inch', '28 inch'],
    density: '180% Density',
    price: '₦1,300,000',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Deep jewel tone formulated for maximum luster',
      'Silky touch with natural body movement',
      'Gentle formulation preserving hair cuticle health',
      'Includes elastic band for glueless security'
    ]
  },
  {
    id: 'prod-loose-deep',
    name: 'Bohemian Loose Deep Curl',
    category: 'Curly',
    tagline: 'Carefree. Bouncy. Romantic.',
    description: 'Relaxed bohemian curls with generous volume and natural touch. Perfect for vacation, effortless daily glam, or red carpet events.',
    hairType: '100% Raw Virgin Hair',
    laceType: 'HD Lace 5x5 Closure',
    availableLengths: ['20 inch', '24 inch', '28 inch'],
    density: '200% Density',
    price: '₦1,100,000',
    image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Featherweight feel with maximum fullness',
      'No frizz formula when styled with curl cream',
      'Pre-cut lace option for rapid wear',
      'Durable construction for years of wear'
    ]
  },
  {
    id: 'prod-sleek-lace',
    name: 'Silk Press Lace Front Unit',
    category: 'Straight',
    tagline: 'Polished. Fluid. Effortless.',
    description: 'A smooth, flowing straight unit with a soft natural sheen and a clean lace finish. Designed for a refined everyday look that moves beautifully and styles with ease.',
    hairType: '100% Virgin Human Hair',
    laceType: 'HD Transparent Lace (13x6)',
    availableLengths: ['18 inch', '22 inch', '26 inch'],
    density: '180% Density',
    price: '₦1,050,000',
    image: '/images/hairone.jpg',
    badge: 'New Arrival',
    features: [
      'Natural movement with a soft polished finish',
      'Pre-plucked hairline for a seamless install',
      'Heat-friendly virgin hair for versatile styling',
      'Lightweight construction for comfortable wear'
    ]
  },
  {
    id: 'prod-cinnamon-curl',
    name: 'Cinnamon Coil Texture Unit',
    category: 'Curly',
    tagline: 'Defined. Full. Distinctive.',
    description: 'A rich, dimensional curl pattern with generous volume and a soft cinnamon warmth. The texture holds its definition while giving every look an expressive, natural finish.',
    hairType: '100% Virgin Hair Steam Textured',
    laceType: 'HD Lace Frontal (13x4)',
    availableLengths: ['16 inch', '20 inch', '24 inch'],
    density: '220% Density',
    price: '₦1,200,000',
    image: '/images/hairtwo.jpg',
    badge: 'New Arrival',
    features: [
      'Defined coils with lasting bounce and volume',
      'Simple refresh routine for everyday wear',
      'Soft lace blend with a natural scalp illusion',
      'Full density without a heavy feel'
    ]
  }
];
