import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import type { CartItem, Product } from '../../types/domain';

type CartContextValue = {
  items: CartItem[];
  open: boolean;
  setOpen: (v: boolean) => void;
  add: (product: Product, qty?: number, portion?: string | null) => void;
  update: (key: string, qty: number) => void;
  remove: (key: string) => void;
  clear: () => void;
  count: number;
  subtotal: number;
  fav: string[];
  toggleFav: (slug: string) => void;
  isFav: (slug: string) => boolean;
};

const CartContext = createContext<CartContextValue | null>(null);

const readLs = <T,>(key: string, fallback: T): T => {
  if (typeof window === 'undefined') return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
};

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => readLs<CartItem[]>('cj_cart', []));
  const [fav, setFav] = useState<string[]>(() => readLs<string[]>('cj_fav', []));
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') window.localStorage.setItem('cj_cart', JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    if (typeof window !== 'undefined') window.localStorage.setItem('cj_fav', JSON.stringify(fav));
  }, [fav]);

  const add = useCallback((product: Product, qty = 1, portion: string | null = null) => {
    const key = product.slug + (portion ? '|' + portion : '');
    setItems((prev) => {
      const i = prev.findIndex((x) => x.key === key);
      if (i >= 0) {
        const next = [...prev];
        next[i] = { ...next[i], qty: next[i].qty + qty };
        return next;
      }
      return [...prev, { key, slug: product.slug, name: product.name, price: product.price, img: product.img, portion, qty }];
    });
    setOpen(true);
  }, []);

  const update = useCallback((key: string, qty: number) => {
    setItems((prev) => (qty <= 0 ? prev.filter((x) => x.key !== key) : prev.map((x) => (x.key === key ? { ...x, qty } : x))));
  }, []);

  const remove = useCallback((key: string) => setItems((prev) => prev.filter((x) => x.key !== key)), []);
  const clear = useCallback(() => setItems([]), []);
  const toggleFav = useCallback((slug: string) => setFav((prev) => (prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug])), []);
  const isFav = useCallback((slug: string) => fav.includes(slug), [fav]);

  const count = items.reduce((s, x) => s + x.qty, 0);
  const subtotal = items.reduce((s, x) => s + x.qty * x.price, 0);

  const value = useMemo<CartContextValue>(
    () => ({ items, open, setOpen, add, update, remove, clear, count, subtotal, fav, toggleFav, isFav }),
    [items, open, add, update, remove, clear, count, subtotal, fav, toggleFav, isFav],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used inside <CartProvider>');
  return ctx;
}
