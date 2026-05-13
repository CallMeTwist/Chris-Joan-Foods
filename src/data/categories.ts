import type { Category } from '../types/domain';

export const categories: Category[] = [
  { slug: 'nigerian-dishes',  name: 'Nigerian Dishes',   tag: 'Homemade',   blurb: 'Soups, swallow and one-pot classics, served the way Mama made them.', img: '/images/nigerian-dish-1.jpeg', count: 10 },
  { slug: 'rice-dishes',      name: 'Rice Dishes',       tag: 'Party',      blurb: 'Smoky jollof, fried rice and coconut rice , perfect for any spread.',     img: '/images/rice-2.jpeg', count: 7 },
  { slug: 'small-chops',      name: 'Small Chops',       tag: 'Hangouts',   blurb: 'Hot, crunchy bites for hangouts, weddings and Friday night vibes.',      img: '/images/food-04.jpeg', count: 5 },
  { slug: 'pastries',         name: 'Pastries',          tag: 'Bakery',     blurb: 'Flaky, buttery and fresh from the oven, made in small batches.',         img: '/images/food-04.jpeg', count: 4 },
  { slug: 'snacks',           name: 'Snacks',            tag: 'On-the-go',  blurb: 'Quick, satisfying bites and gift hampers for tea, lunchboxes and parties.', img: '/images/snacks-1.jpeg', count: 5 },
  { slug: 'cakes-and-treats', name: 'Cakes & Treats',    tag: 'Celebrate',  blurb: 'Anniversary cakes, mini cakes and trayfuls of red velvet.',              img: '/images/food-20.jpeg', count: 6 },
  { slug: 'drinks',           name: 'Drinks',            tag: 'Refresh',    blurb: 'Fresh chapman, zobo, smoothies and chilled cartons of juice.',           img: '/images/food-05.jpeg', count: 3 },
];
