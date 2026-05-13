import { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { brand } from '../../data';
import { useCart } from '../cart/CartContext';
import { Icon } from '../ui/Icon';
import { BrandMark } from './BrandMark';
import { gsap, ensureGsap } from '../../lib/gsap';

const links = [
  { to: '/',        label: 'Home',      end: true },
  { to: '/menu',    label: 'Menu',      end: false },
  { to: '/gallery', label: 'Gallery',   end: true },
  { to: '/about',   label: 'Our Story', end: true },
  { to: '/contact', label: 'Contact',   end: true },
];

export function Nav() {
  const cart = useCart();
  const [open, setOpen] = useState(false);
  const badgeRef = useRef<HTMLSpanElement>(null);
  const [lastCount, setLastCount] = useState(cart.count);

  useEffect(() => {
    if (cart.count > lastCount && badgeRef.current) {
      ensureGsap();
      gsap.fromTo(badgeRef.current, { scale: 0.9 }, { scale: 1.15, yoyo: true, repeat: 1, duration: 0.18, ease: 'power2.out' });
    }
    setLastCount(cart.count);
  }, [cart.count, lastCount]);

  return (
    <>
      <header className="nav">
        <div className="container-wide nav-inner">
          <BrandMark />
          <nav className="nav-links">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.end} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                {l.label}
              </NavLink>
            ))}
          </nav>
          <div className="nav-actions">
            <a className="icon-btn nav-search" href={`https://wa.me/${brand.whatsappRaw}`} target="_blank" rel="noreferrer" aria-label="WhatsApp" style={{ color: '#25D366' }}>
              <Icon.whatsapp />
            </a>
            <button className="icon-btn" aria-label="Open cart" onClick={() => cart.setOpen(true)}>
              <Icon.cart />
              {cart.count > 0 && <span ref={badgeRef} className="cart-count">{cart.count}</span>}
            </button>
            <Link to="/menu" className="btn btn-primary btn-sm" style={{ marginLeft: 4 }}>
              Order now <Icon.arrow size={14} />
            </Link>
            <button className="icon-btn menu-btn" aria-label="Menu" onClick={() => setOpen(true)}>
              <Icon.menu />
            </button>
          </div>
        </div>
      </header>
      <div className={`mobile-drawer ${open ? 'open' : ''}`}>
        <button className="close icon-btn" onClick={() => setOpen(false)}>
          <Icon.close />
        </button>
        {links.map((l) => (
          <Link key={l.to} to={l.to} onClick={() => setOpen(false)}>{l.label}</Link>
        ))}
      </div>
    </>
  );
}
