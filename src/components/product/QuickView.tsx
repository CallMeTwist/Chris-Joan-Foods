import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../cart/CartContext';
import { fmt } from '../../lib/format';
import { categoryBySlug } from '../../data';
import { Icon } from '../ui/Icon';
import { Stars } from '../ui/Stars';
import type { Product } from '../../types/domain';

type Props = { product: Product | null; onClose: () => void };

export function QuickView({ product, onClose }: Props) {
  const cart = useCart();
  const [qty, setQty] = useState(1);
  const [portion, setPortion] = useState<string | null>(product ? product.portions[0] : null);

  useEffect(() => {
    if (product) { setQty(1); setPortion(product.portions[0]); }
  }, [product?.slug]);

  return (
    <div className={`modal-scrim ${product ? 'open' : ''}`} onClick={onClose}>
      {product && (
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <button className="close icon-btn" onClick={onClose}><Icon.close /></button>
          <div className="img"><img src={product.img} alt={product.name} /></div>
          <div className="info">
            <span className="eyebrow">{categoryBySlug(product.category)?.name}</span>
            <h2 className="display" style={{ fontSize: 'clamp(28px,3vw,42px)' }}>{product.name}</h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <Stars value={product.rating} /> <span style={{ fontSize: 13.5, color: 'var(--muted)' }}>{product.rating} · {product.reviews} reviews</span>
            </div>
            <p style={{ color: 'var(--ink-3)', lineHeight: 1.65 }}>{product.desc}</p>
            <div className="price">
              <span className="now" style={{ fontFamily: 'var(--font-display)', fontSize: 34, color: 'var(--chocolate)' }}>{fmt(product.price)}</span>
            </div>
            <div>
              <div className="eyebrow" style={{ marginBottom: 8 }}>Portion</div>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {product.portions.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setPortion(opt)}
                    className="chip"
                    style={portion === opt ? { background: 'var(--chocolate)', color: 'var(--cream)' } : {}}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div className="qty">
                <button onClick={() => setQty(Math.max(1, qty - 1))}><Icon.minus /></button>
                <span>{qty}</span>
                <button onClick={() => setQty(qty + 1)}><Icon.plus /></button>
              </div>
              <button
                className="btn btn-coral btn-lg"
                style={{ flex: 1 }}
                onClick={() => { cart.add(product, qty, portion); onClose(); }}
              >
                Add to cart · {fmt(product.price * qty)}
              </button>
            </div>
            <Link
              to={`/product/${product.slug}`}
              onClick={onClose}
              style={{ color: 'var(--caramel-2)', fontSize: 14, marginTop: 4, display: 'inline-flex', alignItems: 'center', gap: 6 }}
            >
              See full details <Icon.arrowUR />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
