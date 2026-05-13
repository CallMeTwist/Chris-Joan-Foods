import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
import { fmt } from '../../lib/format';
import { buildOrderLink } from '../../lib/whatsapp';
import { Icon } from '../ui/Icon';

export function CartDrawer() {
  const cart = useCart();
  const waLink = useMemo(() => buildOrderLink(cart.items, cart.subtotal), [cart.items, cart.subtotal]);

  return (
    <>
      <div className={`scrim ${cart.open ? 'open' : ''}`} onClick={() => cart.setOpen(false)} />
      <aside className={`drawer ${cart.open ? 'open' : ''}`} aria-hidden={!cart.open}>
        <div className="drawer-head">
          <div>
            <div className="eyebrow">Your basket</div>
            <div className="h4" style={{ marginTop: 4 }}>{cart.count} item{cart.count === 1 ? '' : 's'}</div>
          </div>
          <button className="icon-btn" onClick={() => cart.setOpen(false)}><Icon.close /></button>
        </div>
        <div className="drawer-body">
          {cart.items.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '40px 12px' }}>
              <div style={{ width: 88, height: 88, margin: '0 auto 16px', borderRadius: '50%', background: 'var(--cream-2)', display: 'grid', placeItems: 'center', color: 'var(--caramel-2)' }}>
                <Icon.bag size={28} />
              </div>
              <h3 className="h3" style={{ marginBottom: 8 }}>Your basket is hungry</h3>
              <p className="muted" style={{ marginBottom: 18 }}>Pick something delicious from the menu.</p>
              <Link to="/menu" className="btn btn-primary" onClick={() => cart.setOpen(false)}>Browse menu</Link>
            </div>
          ) : (
            cart.items.map((x) => (
              <div key={x.key} className="cart-item">
                <img src={x.img} alt="" />
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 20, color: 'var(--chocolate)', lineHeight: 1.1 }}>{x.name}</div>
                  {x.portion && <div className="muted" style={{ fontSize: 13, marginTop: 2 }}>{x.portion}</div>}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 8 }}>
                    <div className="qty">
                      <button onClick={() => cart.update(x.key, x.qty - 1)}><Icon.minus /></button>
                      <span>{x.qty}</span>
                      <button onClick={() => cart.update(x.key, x.qty + 1)}><Icon.plus /></button>
                    </div>
                    <button onClick={() => cart.remove(x.key)} className="muted" style={{ fontSize: 13, textDecoration: 'underline' }}>Remove</button>
                  </div>
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 18, color: 'var(--chocolate)' }}>{fmt(x.price * x.qty)}</div>
              </div>
            ))
          )}
        </div>
        {cart.items.length > 0 && (
          <div className="drawer-foot">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 12 }}>
              <span className="muted">Subtotal</span>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 30, color: 'var(--chocolate)' }}>{fmt(cart.subtotal)}</span>
            </div>
            <p className="muted" style={{ fontSize: 12.5, marginBottom: 14 }}>Delivery is calculated at checkout. Orders are confirmed over WhatsApp before they ship.</p>
            <div style={{ display: 'flex', gap: 10 }}>
              <a className="btn btn-coral btn-lg" style={{ flex: 1, justifyContent: 'center', background: '#25D366' }} href={waLink} target="_blank" rel="noreferrer">
                <Icon.whatsapp /> Checkout on WhatsApp
              </a>
            </div>
            <button onClick={cart.clear} className="muted" style={{ fontSize: 12.5, marginTop: 10, textDecoration: 'underline' }}>Empty basket</button>
          </div>
        )}
      </aside>
    </>
  );
}
