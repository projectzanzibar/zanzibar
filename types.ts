export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  price: string;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export enum Location {
  AIRPORT = 'Zanzibar Airport (ZNZ)',
  STONE_TOWN = 'Stone Town',
  NUNGWI = 'Nungwi',
  KENDWA = 'Kendwa',
  PAJE = 'Paje',
  JAMBIANI = 'Jambiani',
  MATEMWE = 'Matemwe',
  KIWENGWA = 'Kiwengwa'
}