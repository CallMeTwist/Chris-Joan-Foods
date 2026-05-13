import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import { useCart } from '../cart/CartContext';
import { fmt } from '../../lib/format';
import { Icon } from '../ui/Icon';
import { Stars } from '../ui/Stars';
import type { Product } from '../../types/domain';
import { gsap, ensureGsap } from '../../lib/gsap';

type Props = { p: Product; onQuickView?: (p: Product) => void };

export function ProductCard({ p, onQuickView }: Props) {
  const cart = useCart();
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    ensureGsap();
    const el = ref.current;
    if (!el) return;
    const img = el.querySelector('img');
    const enter = () => {
      gsap.to(el, { y: -4, duration: 0.35, ease: 'power3.out' });
      if (img) gsap.to(img, { scale: 1.04, duration: 0.6, ease: 'power3.out' });
    };
    const leave = () => {
      gsap.to(el, { y: 0, duration: 0.45, ease: 'power3.out' });
      if (img) gsap.to(img, { scale: 1, duration: 0.6, ease: 'power3.out' });
    };
    el.addEventListener('mouseenter', enter);
    el.addEventListener('mouseleave', leave);
    return () => {
      el.removeEventListener('mouseenter', enter);
      el.removeEventListener('mouseleave', leave);
    };
  }, { scope: ref });

  return (
    <article ref={ref} className="product">
      <Link to={`/product/${p.slug}`} className="ph">
        <img src={p.img} alt={p.name} loading="lazy" />
        {p.badge && <span className="cat-tag chip chip-orange" style={{ position: 'absolute', top: 14, left: 14 }}>{p.badge}</span>}
      </Link>
      <button
        className={`fav ${cart.isFav(p.slug) ? 'on' : ''}`}
        aria-label="Save"
        onClick={(e) => { e.stopPropagation(); cart.toggleFav(p.slug); }}
      >
        <Icon.heart filled={cart.isFav(p.slug)} />
      </button>
      <div className="body">
        <Link to={`/product/${p.slug}`} className="name">{p.name}</Link>
        <p className="desc">{p.desc}</p>
        <div className="row">
          <span className="price"><span className="now">{fmt(p.price)}</span></span>
          <span className="meta">
            <Stars value={p.rating} /> <span>{p.rating}</span><span style={{ opacity: 0.5 }}>·</span><span>{p.reviews}</span>
          </span>
        </div>
        <div className="row" style={{ marginTop: 10 }}>
          <button className="btn btn-ghost btn-sm" onClick={() => onQuickView?.(p)}>Quick view</button>
          <button className="btn btn-coral btn-sm" onClick={() => cart.add(p)}>Add <Icon.plus size={14} /></button>
        </div>
      </div>
    </article>
  );
}
