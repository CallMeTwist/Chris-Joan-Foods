export type Category = {
  slug: string;
  name: string;
  tag: string;
  blurb: string;
  img: string;
  count: number;
};

export type Product = {
  slug: string;
  name: string;
  category: string;
  price: number;
  was: number | null;
  img: string;
  desc: string;
  story?: string;
  ingredients: string[];
  portions: string[];
  featured: boolean;
  badge: string | null;
  rating: number;
  reviews: number;
};

export type Testimonial = {
  name: string;
  loc: string;
  rating: number;
  text: string;
};

export type BrandInfo = {
  name: string;
  tagline: string;
  whatsapp: string;
  whatsappRaw: string;
  phone: string;
  email: string;
  address: string;
  instagram: string;
  hours: { day: string; time: string }[];
};

export type CartItem = {
  key: string;
  slug: string;
  name: string;
  price: number;
  img: string;
  portion: string | null;
  qty: number;
};
