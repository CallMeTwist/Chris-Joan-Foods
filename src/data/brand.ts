import type { BrandInfo } from '../types/domain';

export const brand: BrandInfo = {
  name: 'Chris Joan Food and More',
  tagline: "Taste You'll Always Remember",
  whatsapp: '0813 972 0803',
  whatsappRaw: '2348139720803',
  phone: '0806 348 2288',
  email: 'hello@chrisjoanfoods.ng',
  address: 'Port Harcourt — delivered nationwide',
  instagram: '@chrisjoanfoods',
  hours: [
    { day: 'Mon – Fri', time: '9:00am – 9:00pm' },
    { day: 'Saturday', time: '10:00am – 10:00pm' },
    { day: 'Sunday', time: '12:00pm – 8:00pm' },
  ],
};

export const SITE_URL = 'https://chrisjoanfoods.ng'; // canonical domain — update if different
