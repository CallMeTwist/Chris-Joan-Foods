import { Link } from 'react-router-dom';
import type { FormEvent } from 'react';
import { brand, categories } from '../../data';
import { Icon } from '../ui/Icon';

export function Footer() {
  const { whatsapp, phone, email, address } = brand;
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = e.currentTarget.querySelector('input');
    if (input) input.value = '';
    if (typeof window !== 'undefined') window.alert('Subscribed — thank you!');
  };
  return (
    <footer className="footer">
      <div className="container-wide">
        <div className="grid">
          <div>
            <div className="brand" style={{ marginBottom: 18 }}>
              <span className="brand-mark">
                <svg width="22" height="22" viewBox="0 0 32 32">
                  <circle cx="16" cy="16" r="11" fill="none" stroke="currentColor" strokeWidth="1.4" />
                  <path d="M16 9v14M9 16h14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                  <circle cx="16" cy="16" r="2.3" fill="currentColor" />
                </svg>
              </span>
              <span className="brand-text">
                <span className="a" style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Chris Joan</span>
                <span className="b" style={{ color: 'rgba(250,246,236,0.5)' }}>Food &amp; More</span>
              </span>
            </div>
            <p style={{ color: 'rgba(250,246,236,0.72)', fontSize: 14.5, maxWidth: 320, lineHeight: 1.7 }}>
              Homemade Nigerian food, small chops and made-to-order cakes — delivered hot, fresh, and packed with love. Taste you'll always remember.
            </p>
            <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
              <a className="icon-btn" href={`https://wa.me/${brand.whatsappRaw}`} target="_blank" rel="noreferrer" style={{ background: 'rgba(255,255,255,0.06)', borderColor: 'rgba(255,255,255,0.15)', color: '#25D366' }}><Icon.whatsapp /></a>
              <a className="icon-btn" href="#" style={{ background: 'rgba(255,255,255,0.06)', borderColor: 'rgba(255,255,255,0.15)', color: 'var(--gold)' }}><Icon.instagram /></a>
              <a className="icon-btn" href={`tel:${phone.replace(/\s/g, '')}`} style={{ background: 'rgba(255,255,255,0.06)', borderColor: 'rgba(255,255,255,0.15)', color: 'var(--cream)' }}><Icon.phone /></a>
            </div>
          </div>
          <div>
            <h5>Menu</h5>
            <ul>
              {categories.slice(0, 6).map((c) => (
                <li key={c.slug}><Link to={`/menu/${c.slug}`}>{c.name}</Link></li>
              ))}
              <li><Link to="/menu">All items</Link></li>
            </ul>
          </div>
          <div>
            <h5>Brand</h5>
            <ul>
              <li><Link to="/about">Our story</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><a href={`https://wa.me/${brand.whatsappRaw}`} target="_blank" rel="noreferrer">Order on WhatsApp</a></li>
              <li><Link to="/about">Hygiene &amp; quality</Link></li>
            </ul>
          </div>
          <div>
            <h5>Stay close</h5>
            <p style={{ color: 'rgba(250,246,236,0.6)', fontSize: 13.5, marginBottom: 14 }}>Special trays, weekend menus, and the occasional new cake — straight to your inbox.</p>
            <form className="newsletter" onSubmit={onSubmit} style={{ display: 'flex', gap: 8 }}>
              <input type="email" placeholder="you@example.com" required />
              <button type="submit" className="btn btn-coral btn-sm">Join</button>
            </form>
            <ul style={{ marginTop: 22, color: 'rgba(250,246,236,0.6)', fontSize: 13.5 }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: 8 }}><Icon.phone size={14} /> {phone} · {whatsapp}</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: 8 }}><Icon.pin size={14} /> {address}</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: 8 }}><Icon.mail size={14} /> {email}</li>
            </ul>
          </div>
        </div>
        <div className="copy">
          <span>
            © 2026 Chris Joan Food &amp; More. All rights reserved.
            {' · '}
            Powered by{' '}
            <a
              href="https://edisonn.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="powered-by"
            >
              Edison
            </a>
          </span>
          <span style={{ fontFamily: 'var(--font-script)', fontSize: 20, color: 'var(--gold)' }}>Taste you'll always remember.</span>
        </div>
      </div>
    </footer>
  );
}
