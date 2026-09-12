export type PageTab = 'home' | 'shop' | 'services' | 'our-work' | 'about' | 'contact';

export type HairTexture = 'All' | 'Straight' | 'Body Wave' | 'Curly' | 'Coloured' | 'Best Sellers' | 'New Arrivals';

export interface Product {
  id: string;
  name: string;
  category: 'Body Wave' | 'Straight' | 'Curly' | 'Coloured';
  tagline: string;
  description: string;
  hairType: string;
  laceType: string;
  availableLengths: string[];
  density: string;
  price: string;
  image: string;
  badge?: string;
  features: string[];
}

export interface Service {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  image: string;
  details: string[];
  turnaroundTime: string;
  recommendedFor: string;
}

export interface Review {
  id: string;
  author: string;
  role: string;
  location: string;
  rating: number;
  comment: string;
  serviceUsed: string;
  verified: boolean;
}

export interface LookbookItem {
  id: string;
  title: string;
  category: 'Wigs' | 'Revamp' | 'Styling' | 'Braids';
  description: string;
  image: string;
  service: string;
  tags: string[];
}

export interface BookingFormData {
  name: string;
  phone: string;
  email?: string;
  serviceType: string;
  hairTexture?: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
}
