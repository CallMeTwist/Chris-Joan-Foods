/* Chris Joan — shared icons, hooks, navigation, cart drawer, product card, footer */

const { useState, useEffect, useRef, useMemo, useContext, createContext, useCallback } = React;

/* ============ Icons (inline SVG, 1.5px) ============ */
const Ico = {
  search: (p={}) => <svg width={p.size||18} height={p.size||18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>,
  cart: (p={}) => <svg width={p.size||20} height={p.size||20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 4h2l2.4 12.3a2 2 0 0 0 2 1.7h8.6a2 2 0 0 0 2-1.6L21.5 8H7"/><circle cx="10" cy="20.5" r="1.3"/><circle cx="18" cy="20.5" r="1.3"/></svg>,
  heart: (p={}) => <svg width={p.size||18} height={p.size||18} viewBox="0 0 24 24" fill={p.fill||"none"} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s-7-4.5-9-9.2C1.6 8.5 3.6 5 7.2 5c2 0 3.4 1.2 4.8 3 1.4-1.8 2.8-3 4.8-3 3.6 0 5.6 3.5 4.2 6.8C19 16.5 12 21 12 21z"/></svg>,
  star: (p={}) => <svg width={p.size||14} height={p.size||14} viewBox="0 0 24 24" fill={p.filled?"currentColor":"none"} stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"><path d="m12 3 2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.8 6.2 20.9l1.1-6.5L2.6 9.8l6.5-.9L12 3z"/></svg>,
  menu: (p={}) => <svg width={p.size||20} height={p.size||20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>,
  close: (p={}) => <svg width={p.size||18} height={p.size||18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg>,
  plus: (p={}) => <svg width={p.size||16} height={p.size||16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg>,
  minus: (p={}) => <svg width={p.size||16} height={p.size||16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14"/></svg>,
  arrow: (p={}) => <svg width={p.size||16} height={p.size||16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>,
  arrowUR: (p={}) => <svg width={p.size||14} height={p.size||14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M9 7h8v8"/></svg>,
  whatsapp: (p={}) => <svg width={p.size||18} height={p.size||18} viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 3.5A11 11 0 0 0 3.4 17.3L2 22l4.9-1.3a11 11 0 0 0 5.2 1.3h.1a11 11 0 0 0 8.3-18.5zM12.1 20a9.1 9.1 0 0 1-4.7-1.3l-.3-.2-2.9.8.8-2.9-.2-.3A9.1 9.1 0 1 1 12.1 20zm5.2-6.8c-.3-.1-1.7-.8-1.9-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1a7.4 7.4 0 0 1-3.7-3.2c-.3-.5.3-.4.8-1.4.1-.2.1-.3 0-.5 0-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1 2.9 1.2 3.1c.1.2 2 3 4.8 4.2 1.7.7 2.4.8 3.2.7.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3z"/></svg>,
  instagram: (p={}) => <svg width={p.size||18} height={p.size||18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>,
  phone: (p={}) => <svg width={p.size||18} height={p.size||18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 2.2 4.2 2 2 0 0 1 4.2 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.7a16 16 0 0 0 6.3 6.3l1.3-1.3a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z"/></svg>,
  pin: (p={}) => <svg width={p.size||18} height={p.size||18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  mail: (p={}) => <svg width={p.size||18} height={p.size||18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 7 9-7"/></svg>,
  clock: (p={}) => <svg width={p.size||18} height={p.size||18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>,
  leaf: (p={}) => <svg width={p.size||18} height={p.size||18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 4 13c0-6 5-10 16-10 0 11-4 16-9 17z"/><path d="M2 22s5-7 9-9"/></svg>,
  spark: (p={}) => <svg width={p.size||18} height={p.size||18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/></svg>,
  flame: (p={}) => <svg width={p.size||18} height={p.size||18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c4 0 7-3 7-7 0-3-2-5-3-7-2-3 0-6 0-6s-7 2-7 9c0 1-2 1-2 4 0 4 1 7 5 7z"/></svg>,
  bag: (p={}) => <svg width={p.size||18} height={p.size||18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M6 7h12l-1 13H7L6 7z"/><path d="M9 7a3 3 0 1 1 6 0"/></svg>,
  play: (p={}) => <svg width={p.size||14} height={p.size||14} viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>,
  check: (p={}) => <svg width={p.size||16} height={p.size||16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 5 5L20 7"/></svg>
};

/* ============ Helper components ============ */
const Stars = ({ value = 5, size = 14 }) => (
  <span className="stars" aria-label={`${value} stars`}>
    {[1,2,3,4,5].map(i => <Ico.star key={i} size={size} filled={i <= Math.round(value)} />)}
  </span>
);

/* ============ Reveal-on-scroll hook ============ */
const useReveal = () => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add('in'); io.disconnect(); }
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
};
const Reveal = ({ as = 'div', stagger = false, className = '', children, ...rest }) => {
  const ref = useReveal();
  const Tag = as;
  return <Tag ref={ref} className={`${stagger ? 'reveal-stagger' : 'reveal'} ${className}`} {...rest}>{children}</Tag>;
};

/* ============ Router (hash-based) ============ */
const RouteContext = createContext({ path: '/', go: () => {} });
const useRoute = () => useContext(RouteContext);

const parseHash = () => {
  let h = window.location.hash || '#/';
  if (!h.startsWith('#')) h = '#/' + h;
  return h.slice(1) || '/';
};

const Link = ({ to, className = '', children, ...rest }) => {
  const { go } = useRoute();
  const click = (e) => { e.preventDefault(); go(to); };
  return <a href={'#' + to} className={className} onClick={click} {...rest}>{children}</a>;
};

/* ============ Cart context ============ */
const CartContext = createContext(null);
const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [items, setItems] = useState(() => {
    try { return JSON.parse(localStorage.getItem('cj_cart') || '[]'); } catch { return []; }
  });
  const [open, setOpen] = useState(false);
  const [fav, setFav] = useState(() => {
    try { return JSON.parse(localStorage.getItem('cj_fav') || '[]'); } catch { return []; }
  });

  useEffect(() => { localStorage.setItem('cj_cart', JSON.stringify(items)); }, [items]);
  useEffect(() => { localStorage.setItem('cj_fav', JSON.stringify(fav)); }, [fav]);

  const add = (product, qty = 1, portion = null) => {
    const key = product.slug + (portion ? '|' + portion : '');
    setItems(prev => {
      const i = prev.findIndex(x => x.key === key);
      if (i >= 0) {
        const next = [...prev]; next[i] = { ...next[i], qty: next[i].qty + qty }; return next;
      }
      return [...prev, { key, slug: product.slug, name: product.name, price: product.price, img: product.img, portion, qty }];
    });
    setOpen(true);
  };
  const update = (key, qty) => setItems(prev => qty <= 0 ? prev.filter(x => x.key !== key) : prev.map(x => x.key === key ? { ...x, qty } : x));
  const remove = (key) => setItems(prev => prev.filter(x => x.key !== key));
  const clear = () => setItems([]);
  const count = items.reduce((s, x) => s + x.qty, 0);
  const subtotal = items.reduce((s, x) => s + x.qty * x.price, 0);

  const toggleFav = (slug) => setFav(prev => prev.includes(slug) ? prev.filter(s => s !== slug) : [...prev, slug]);
  const isFav = (slug) => fav.includes(slug);

  return (
    <CartContext.Provider value={{ items, open, setOpen, add, update, remove, clear, count, subtotal, toggleFav, isFav, fav }}>
      {children}
    </CartContext.Provider>
  );
};

/* ============ Brand mark ============ */
const BrandMark = () => (
  <Link to="/" className="brand" aria-label="Chris Joan home">
    <span className="brand-mark">
      <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M16 9v14M9 16h14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        <circle cx="16" cy="16" r="2.3" fill="currentColor"/>
      </svg>
    </span>
    <span className="brand-text">
      <span className="a" style={{fontStyle:'italic'}}>Chris Joan</span>
      <span className="b">Food &amp; More</span>
    </span>
  </Link>
);

/* ============ Nav ============ */
const Nav = () => {
  const { path } = useRoute();
  const cart = useCart();
  const [open, setOpen] = useState(false);
  const isActive = (p) => path === p || (p !== '/' && path.startsWith(p));
  const links = [
    { to: '/',         label: 'Home' },
    { to: '/products', label: 'Menu' },
    { to: '/gallery',  label: 'Gallery' },
    { to: '/about',    label: 'Our Story' },
    { to: '/contact',  label: 'Contact' }
  ];
  return (
    <>
      <header className="nav">
        <div className="container-wide nav-inner">
          <BrandMark/>
          <nav className="nav-links">
            {links.map(l => (
              <Link key={l.to} to={l.to} className={`nav-link ${isActive(l.to) ? 'active' : ''}`}>{l.label}</Link>
            ))}
          </nav>
          <div className="nav-actions">
            <a className="icon-btn nav-search" href={`https://wa.me/${window.CJ_BRAND.whatsappRaw}`} target="_blank" rel="noreferrer" aria-label="WhatsApp" style={{color:'#25D366'}}>
              <Ico.whatsapp/>
            </a>
            <button className="icon-btn" aria-label="Open cart" onClick={() => cart.setOpen(true)}>
              <Ico.cart/>
              {cart.count > 0 && <span className="cart-count">{cart.count}</span>}
            </button>
            <Link to="/products" className="btn btn-primary btn-sm" style={{marginLeft:4}}>Order now <Ico.arrow size={14}/></Link>
            <button className="icon-btn menu-btn" aria-label="Menu" onClick={() => setOpen(true)}><Ico.menu/></button>
          </div>
        </div>
      </header>
      <div className={`mobile-drawer ${open ? 'open' : ''}`}>
        <button className="close icon-btn" onClick={() => setOpen(false)}><Ico.close/></button>
        {links.map(l => (
          <a key={l.to} href={'#'+l.to} onClick={(e) => { e.preventDefault(); setOpen(false); window.location.hash = l.to; }}>{l.label}</a>
        ))}
      </div>
    </>
  );
};

/* ============ Footer ============ */
const Footer = () => {
  const { whatsapp, phone, email, address, instagram } = window.CJ_BRAND;
  return (
    <footer className="footer">
      <div className="container-wide">
        <div className="grid">
          <div>
            <div className="brand" style={{marginBottom:18}}>
              <span className="brand-mark"><svg width="22" height="22" viewBox="0 0 32 32"><circle cx="16" cy="16" r="11" fill="none" stroke="currentColor" strokeWidth="1.4"/><path d="M16 9v14M9 16h14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/><circle cx="16" cy="16" r="2.3" fill="currentColor"/></svg></span>
              <span className="brand-text">
                <span className="a" style={{color:'var(--gold)', fontStyle:'italic'}}>Chris Joan</span>
                <span className="b" style={{color:'rgba(250,246,236,0.5)'}}>Food &amp; More</span>
              </span>
            </div>
            <p style={{color:'rgba(250,246,236,0.72)', fontSize:14.5, maxWidth:320, lineHeight:1.7}}>
              Homemade Nigerian food, small chops and made-to-order cakes — delivered hot, fresh, and packed with love. Taste you'll always remember.
            </p>
            <div style={{display:'flex', gap:10, marginTop:20}}>
              <a className="icon-btn" href={`https://wa.me/${window.CJ_BRAND.whatsappRaw}`} target="_blank" rel="noreferrer" style={{background:'rgba(255,255,255,0.06)', borderColor:'rgba(255,255,255,0.15)', color:'#25D366'}}><Ico.whatsapp/></a>
              <a className="icon-btn" href="#" style={{background:'rgba(255,255,255,0.06)', borderColor:'rgba(255,255,255,0.15)', color:'var(--gold)'}}><Ico.instagram/></a>
              <a className="icon-btn" href={`tel:${phone.replace(/\s/g,'')}`} style={{background:'rgba(255,255,255,0.06)', borderColor:'rgba(255,255,255,0.15)', color:'var(--cream)'}}><Ico.phone/></a>
            </div>
          </div>
          <div>
            <h5>Menu</h5>
            <ul>
              {window.CJ_CATEGORIES.slice(0,6).map(c => (
                <li key={c.slug}><Link to={`/products/${c.slug}`}>{c.name}</Link></li>
              ))}
              <li><Link to="/products">All items</Link></li>
            </ul>
          </div>
          <div>
            <h5>Brand</h5>
            <ul>
              <li><Link to="/about">Our story</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><a href={`https://wa.me/${window.CJ_BRAND.whatsappRaw}`} target="_blank" rel="noreferrer">Order on WhatsApp</a></li>
              <li><Link to="/about">Hygiene &amp; quality</Link></li>
            </ul>
          </div>
          <div>
            <h5>Stay close</h5>
            <p style={{color:'rgba(250,246,236,0.6)', fontSize:13.5, marginBottom:14}}>Special trays, weekend menus, and the occasional new cake — straight to your inbox.</p>
            <form className="newsletter" onSubmit={(e) => { e.preventDefault(); e.currentTarget.querySelector('input').value=''; alert('Subscribed — thank you!'); }} style={{display:'flex', gap:8}}>
              <input type="email" placeholder="you@example.com" required/>
              <button type="submit" className="btn btn-coral btn-sm">Join</button>
            </form>
            <ul style={{marginTop:22, color:'rgba(250,246,236,0.6)', fontSize:13.5}}>
              <li style={{display:'flex', alignItems:'center', gap:8}}><Ico.phone size={14}/> {phone} · {whatsapp}</li>
              <li style={{display:'flex', alignItems:'center', gap:8}}><Ico.pin size={14}/> {address}</li>
            </ul>
          </div>
        </div>
        <div className="copy">
          <span>© 2026 Chris Joan Food &amp; More. All rights reserved.</span>
          <span style={{fontFamily:'var(--font-script)', fontSize:20, color:'var(--gold)'}}>Taste you'll always remember.</span>
        </div>
      </div>
    </footer>
  );
};

/* ============ Product card ============ */
const ProductCard = ({ p, onQuickView }) => {
  const cart = useCart();
  return (
    <article className="product">
      <Link to={`/product/${p.slug}`} className="ph">
        <img src={p.img} alt={p.name} loading="lazy"/>
        {p.badge && <span className="cat-tag chip chip-orange" style={{position:'absolute', top:14, left:14}}>{p.badge}</span>}
      </Link>
      <button className={`fav ${cart.isFav(p.slug) ? 'on' : ''}`} aria-label="Save" onClick={(e) => { e.stopPropagation(); cart.toggleFav(p.slug); }}>
        <Ico.heart fill={cart.isFav(p.slug) ? 'currentColor' : 'none'}/>
      </button>
      <div className="body">
        <Link to={`/product/${p.slug}`} className="name">{p.name}</Link>
        <p className="desc">{p.desc}</p>
        <div className="row">
          <span className="price"><span className="now">{window.CJ_HELPERS.fmt(p.price)}</span></span>
          <span className="meta"><Stars value={p.rating}/> <span>{p.rating}</span><span style={{opacity:.5}}>·</span><span>{p.reviews}</span></span>
        </div>
        <div className="row" style={{marginTop:10}}>
          <button className="btn btn-ghost btn-sm" onClick={() => onQuickView && onQuickView(p)}>Quick view</button>
          <button className="btn btn-coral btn-sm" onClick={() => cart.add(p)}>Add <Ico.plus size={14}/></button>
        </div>
      </div>
    </article>
  );
};

/* ============ Quick view modal ============ */
const QuickView = ({ product, onClose }) => {
  const cart = useCart();
  const [qty, setQty] = useState(1);
  const [portion, setPortion] = useState(product ? product.portions[0] : null);
  useEffect(() => { if (product) { setQty(1); setPortion(product.portions[0]); } }, [product && product.slug]);
  return (
    <div className={`modal-scrim ${product ? 'open' : ''}`} onClick={onClose}>
      {product && (
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <button className="close icon-btn" onClick={onClose}><Ico.close/></button>
          <div className="img"><img src={product.img} alt={product.name}/></div>
          <div className="info">
            <span className="eyebrow">{window.CJ_HELPERS.catBySlug(product.category).name}</span>
            <h2 className="display" style={{fontSize:'clamp(28px,3vw,42px)'}}>{product.name}</h2>
            <div style={{display:'flex', alignItems:'center', gap:10}}>
              <Stars value={product.rating}/> <span style={{fontSize:13.5, color:'var(--muted)'}}>{product.rating} · {product.reviews} reviews</span>
            </div>
            <p style={{color:'var(--ink-3)', lineHeight:1.65}}>{product.desc}</p>
            <div className="price"><span className="now" style={{fontFamily:'var(--font-display)', fontSize:34, color:'var(--chocolate)'}}>{window.CJ_HELPERS.fmt(product.price)}</span></div>
            <div>
              <div className="eyebrow" style={{marginBottom:8}}>Portion</div>
              <div style={{display:'flex', gap:8, flexWrap:'wrap'}}>
                {product.portions.map(opt => (
                  <button key={opt} onClick={() => setPortion(opt)} className="chip" style={portion === opt ? {background:'var(--chocolate)', color:'var(--cream)'} : {}}>{opt}</button>
                ))}
              </div>
            </div>
            <div style={{display:'flex', alignItems:'center', gap:14}}>
              <div className="qty">
                <button onClick={() => setQty(Math.max(1, qty-1))}><Ico.minus/></button>
                <span>{qty}</span>
                <button onClick={() => setQty(qty+1)}><Ico.plus/></button>
              </div>
              <button className="btn btn-coral btn-lg" style={{flex:1}} onClick={() => { cart.add(product, qty, portion); onClose(); }}>
                Add to cart · {window.CJ_HELPERS.fmt(product.price * qty)}
              </button>
            </div>
            <Link to={`/product/${product.slug}`} onClick={onClose} style={{color:'var(--caramel-2)', fontSize:14, marginTop:4, display:'inline-flex', alignItems:'center', gap:6}}>See full details <Ico.arrowUR/></Link>
          </div>
        </div>
      )}
    </div>
  );
};

/* ============ Cart drawer ============ */
const CartDrawer = () => {
  const cart = useCart();
  const { fmt } = window.CJ_HELPERS;
  const waLink = useMemo(() => {
    if (!cart.items.length) return `https://wa.me/${window.CJ_BRAND.whatsappRaw}`;
    const lines = cart.items.map(x => `• ${x.qty} × ${x.name}${x.portion ? ' ('+x.portion+')' : ''} — ${fmt(x.price * x.qty)}`).join('%0A');
    const msg = `Hello Chris Joan! I'd like to place this order:%0A%0A${lines}%0A%0ATotal: ${fmt(cart.subtotal)}%0A%0AThank you!`;
    return `https://wa.me/${window.CJ_BRAND.whatsappRaw}?text=${msg}`;
  }, [cart.items, cart.subtotal]);
  return (
    <>
      <div className={`scrim ${cart.open ? 'open' : ''}`} onClick={() => cart.setOpen(false)}/>
      <aside className={`drawer ${cart.open ? 'open' : ''}`} aria-hidden={!cart.open}>
        <div className="drawer-head">
          <div>
            <div className="eyebrow">Your basket</div>
            <div className="h4" style={{marginTop:4}}>{cart.count} item{cart.count===1?'':'s'}</div>
          </div>
          <button className="icon-btn" onClick={() => cart.setOpen(false)}><Ico.close/></button>
        </div>
        <div className="drawer-body">
          {cart.items.length === 0 ? (
            <div style={{textAlign:'center', padding:'40px 12px'}}>
              <div style={{width:88, height:88, margin:'0 auto 16px', borderRadius:'50%', background:'var(--cream-2)', display:'grid', placeItems:'center', color:'var(--caramel-2)'}}>
                <Ico.bag size={28}/>
              </div>
              <h3 className="h3" style={{marginBottom:8}}>Your basket is hungry</h3>
              <p className="muted" style={{marginBottom:18}}>Pick something delicious from the menu.</p>
              <Link to="/products" className="btn btn-primary" onClick={() => cart.setOpen(false)}>Browse menu</Link>
            </div>
          ) : (
            cart.items.map(x => (
              <div key={x.key} className="cart-item">
                <img src={x.img} alt=""/>
                <div>
                  <div style={{fontFamily:'var(--font-display)', fontSize:20, color:'var(--chocolate)', lineHeight:1.1}}>{x.name}</div>
                  {x.portion && <div className="muted" style={{fontSize:13, marginTop:2}}>{x.portion}</div>}
                  <div style={{display:'flex', alignItems:'center', gap:10, marginTop:8}}>
                    <div className="qty">
                      <button onClick={() => cart.update(x.key, x.qty-1)}><Ico.minus/></button>
                      <span>{x.qty}</span>
                      <button onClick={() => cart.update(x.key, x.qty+1)}><Ico.plus/></button>
                    </div>
                    <button onClick={() => cart.remove(x.key)} className="muted" style={{fontSize:13, textDecoration:'underline'}}>Remove</button>
                  </div>
                </div>
                <div style={{fontFamily:'var(--font-display)', fontSize:18, color:'var(--chocolate)'}}>{fmt(x.price * x.qty)}</div>
              </div>
            ))
          )}
        </div>
        {cart.items.length > 0 && (
          <div className="drawer-foot">
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom:12}}>
              <span className="muted">Subtotal</span>
              <span style={{fontFamily:'var(--font-display)', fontSize:30, color:'var(--chocolate)'}}>{fmt(cart.subtotal)}</span>
            </div>
            <p className="muted" style={{fontSize:12.5, marginBottom:14}}>Delivery is calculated at checkout. Orders are confirmed over WhatsApp before they ship.</p>
            <div style={{display:'flex', gap:10}}>
              <a className="btn btn-coral btn-lg" style={{flex:1, justifyContent:'center', background:'#25D366'}} href={waLink} target="_blank" rel="noreferrer">
                <Ico.whatsapp/> Checkout on WhatsApp
              </a>
            </div>
            <button onClick={cart.clear} className="muted" style={{fontSize:12.5, marginTop:10, textDecoration:'underline'}}>Empty basket</button>
          </div>
        )}
      </aside>
    </>
  );
};

Object.assign(window, {
  Ico, Stars, Reveal, useReveal,
  RouteContext, useRoute, Link, parseHash,
  CartContext, CartProvider, useCart,
  BrandMark, Nav, Footer,
  ProductCard, QuickView, CartDrawer
});
