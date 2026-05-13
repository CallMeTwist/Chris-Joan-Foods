export { brand, SITE_URL } from './brand';
export { categories } from './categories';
export { products } from './products';
export { testimonials } from './testimonials';

import { categories } from './categories';
import { products } from './products';

export const categoryBySlug = (slug: string) => categories.find((c) => c.slug === slug);
export const productBySlug = (slug: string) => products.find((p) => p.slug === slug);
export const productsByCategory = (slug: string) => products.filter((p) => p.category === slug);
export const featuredProducts = () => products.filter((p) => p.featured);
