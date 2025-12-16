import { Location, ServiceItem, Testimonial } from './types';

export const LOCATIONS = Object.values(Location);

export const SERVICES: ServiceItem[] = [
  {
    id: '1',
    title: 'Airport to Stone Town',
    description: 'Comfortable private transfer from Abeid Amani Karume International Airport to Stone Town hotels.',
    price: '$15',
    imageUrl: 'https://picsum.photos/seed/stonetown/800/600'
  },
  {
    id: '2',
    title: 'Airport to Nungwi / Kendwa',
    description: 'Direct transfer to the beautiful northern beaches of Nungwi and Kendwa. Approx 1.5 hours.',
    price: '$45',
    imageUrl: 'https://picsum.photos/seed/nungwi/800/600'
  },
  {
    id: '3',
    title: 'Airport to Paje / Jambiani',
    description: 'Travel to the kite-surfing paradise on the southeast coast. Approx 1 hour.',
    price: '$40',
    imageUrl: 'https://picsum.photos/seed/paje/800/600'
  },
  {
    id: '4',
    title: 'Stone Town City Tour',
    description: 'Explore the historic alleys, markets, and architecture of the UNESCO World Heritage site.',
    price: '$30',
    imageUrl: 'https://picsum.photos/seed/market/800/600'
  },
  {
    id: '5',
    title: 'Safari Blue Experience',
    description: 'Full day sailing, snorkeling, and seafood lunch on a sandbank.',
    price: '$65',
    imageUrl: 'https://picsum.photos/seed/ocean/800/600'
  },
  {
    id: '6',
    title: 'Spice Farm Tour',
    description: 'Discover why Zanzibar is called the Spice Island with a guided farm tour.',
    price: '$25',
    imageUrl: 'https://picsum.photos/seed/spices/800/600'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'Tourist from UK',
    content: 'Excellent service! The driver was waiting for us at the airport with a sign. The car was clean and AC was working perfectly.',
    rating: 5
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Solo Traveler',
    content: 'Used them for a transfer to Nungwi and back. Very reliable and the price was fair compared to others.',
    rating: 5
  },
  {
    id: '3',
    name: 'Emma & Tom',
    role: 'Honeymooners',
    content: 'We booked the Blue Safari tour through them as well. Everything was organized seamlessly.',
    rating: 4
  }
];

export const NAV_LINKS = [
  { name: 'Home', href: '#' },
  { name: 'About Us', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];