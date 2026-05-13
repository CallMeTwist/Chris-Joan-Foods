/**
 * jsonld.ts
 * Schema.org structured-data builders for Chris Joan Foods.
 */
import { SITE_URL, brand } from '../data/brand';
import type { Product } from '../types/domain';

export function restaurantSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FoodEstablishment',
    name: brand.name,
    description:
      'Homemade Nigerian dishes, party-ready small chops and made-to-order cakes , prepared fresh in Port Harcourt and delivered nationwide.',
    url: SITE_URL,
    telephone: brand.phone,
    email: brand.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Port Harcourt',
      addressRegion: 'Rivers State',
      addressCountry: 'NG',
    },
    areaServed: 'Nigeria',
    openingHoursSpecification: brand.hours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.day,
      opens: h.time.split('–')[0].trim(),
      closes: h.time.split('–')[1]?.trim(),
    })),
    sameAs: [
      `https://instagram.com/${brand.instagram.replace('@', '')}`,
      `https://wa.me/${brand.whatsappRaw}`,
    ],
    image: `${SITE_URL}/images/food-04.jpeg`,
    priceRange: '₦₦',
    servesCuisine: 'Nigerian',
  };
}

export function productSchema(p: Product): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: p.name,
    description: p.desc,
    image: `${SITE_URL}${p.img}`,
    url: `${SITE_URL}/product/${p.slug}`,
    brand: {
      '@type': 'Brand',
      name: brand.name,
    },
    offers: {
      '@type': 'Offer',
      price: p.price,
      priceCurrency: 'NGN',
      availability: 'https://schema.org/InStock',
      url: `${SITE_URL}/product/${p.slug}`,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: p.rating,
      reviewCount: p.reviews,
      bestRating: 5,
    },
  };
}

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export function breadcrumbSchema(trail: BreadcrumbItem[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
