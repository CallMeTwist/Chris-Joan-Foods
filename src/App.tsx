import { useEffect, useRef, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Nav } from './components/layout/Nav';
import { Footer } from './components/layout/Footer';
import { WhatsAppFAB } from './components/layout/WhatsAppFAB';
import { CartProvider } from './components/cart/CartContext';
import { CartDrawer } from './components/cart/CartDrawer';
import { QuickView } from './components/product/QuickView';
import type { Product } from './types/domain';
import { magneticCtas } from './animations/magneticCta';
import { pageEnter } from './animations/pageTransition';

export type QuickViewSetter = (p: Product | null) => void;

export default function App() {
  const [qv, setQv] = useState<Product | null>(null);
  const location = useLocation();
  const mainRef = useRef<HTMLDivElement>(null);

  // Re-wire magnetic CTAs on every route change (new [data-magnetic] elements may have mounted)
  useEffect(() => {
    return magneticCtas(document.body);
  }, [location.pathname]);

  // Page enter transition + scroll-to-top on route change
  useEffect(() => {
    if (mainRef.current) pageEnter(mainRef.current);
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    }
  }, [location.pathname]);

  return (
    <CartProvider>
      <Nav />
      <div ref={mainRef}>
        <Outlet context={{ onQuickView: setQv } as { onQuickView: QuickViewSetter }} />
      </div>
      <Footer />
      <CartDrawer />
      <QuickView product={qv} onClose={() => setQv(null)} />
      <WhatsAppFAB />
    </CartProvider>
  );
}
