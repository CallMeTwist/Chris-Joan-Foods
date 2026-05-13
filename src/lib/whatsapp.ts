import { brand } from '../data';
import type { CartItem } from '../types/domain';
import { fmt } from './format';

export const whatsappBaseUrl = `https://wa.me/${brand.whatsappRaw}`;

export const buildOrderLink = (items: CartItem[], subtotal: number): string => {
  if (items.length === 0) return whatsappBaseUrl;
  const lines = items
    .map((x) => `• ${x.qty} × ${x.name}${x.portion ? ' (' + x.portion + ')' : ''} , ${fmt(x.price * x.qty)}`)
    .join('%0A');
  const msg = `Hello Chris Joan! I'd like to place this order:%0A%0A${lines}%0A%0ATotal: ${fmt(subtotal)}%0A%0AThank you!`;
  return `${whatsappBaseUrl}?text=${msg}`;
};
