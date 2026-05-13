import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { categoryBySlug, productBySlug, productsByCategory } from '../data';
import { useCart } from '../components/cart/CartContext';
import { fmt } from '../lib/format';
import { Icon } from '../components/ui/Icon';
import { Stars } from '../components/ui/Stars';
import { ProductCard } from '../components/product/ProductCard';
import NotFound from './NotFound';
import { Seo } from '../components/seo/Seo';
import { JsonLd } from '../components/seo/JsonLd';
import { productSchema, breadcrumbSchema } from '../lib/jsonld';

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? productBySlug(slug) : null;
  const cart = useCart();
  const [qty, setQty] = useState(1);
  const [portion, setPortion] = useState<string | null>(product?.portions[0] ?? null);

  if (!product) return <NotFound />;
  const cat = categoryBySlug(product.category);
  const related = productsByCategory(product.category).filter((p) => p.slug !== product.slug).slice(0, 4);

  const breadcrumbTrail = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    ...(cat ? [{ name: cat.name, path: `/menu/${cat.slug}` }] : []),
    { name: product.name, path: `/product/${product.slug}` },
  ];

  return (
    <>
      <Seo
        title={product.name}
        description={product.desc}
        path={`/product/${product.slug}`}
        image={product.img}
        type="product"
      />
      <JsonLd data={productSchema(product)} />
      <JsonLd data={breadcrumbSchema(breadcrumbTrail)} />
      <main className="page-enter">
      <section className="section">
        <div className="pdp-grid container-wide" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'start' }}>
          <div style={{ position: 'sticky', top: 96 }}>
            <div style={{ borderRadius: 'var(--r-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
              <img src={product.img} alt={product.name} style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover' }} />
            </div>
          </div>
          <div>
            <nav className="muted" style={{ fontSize: 13, marginBottom: 14 }}>
              <Link to="/menu">Menu</Link>
              {cat && (<><span style={{ margin: '0 6px' }}>/</span><Link to={`/menu/${cat.slug}`}>{cat.name}</Link></>)}
              <span style={{ margin: '0 6px' }}>/</span>{product.name}
            </nav>
            <span className="eyebrow">{cat?.name}</span>
            <h1 className="display-lg" style={{ marginTop: 8 }}>{product.name}</h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 8 }}>
              <Stars value={product.rating} /> <span className="muted" style={{ fontSize: 14 }}>{product.rating} · {product.reviews} reviews</span>
              {product.badge && <span className="chip chip-orange">{product.badge}</span>}
            </div>
            <p className="lede" style={{ marginTop: 18 }}>{product.desc}</p>
            {product.story && <p style={{ color: 'var(--ink-3)', marginTop: 14, lineHeight: 1.65 }}>{product.story}</p>}

            {product.ingredients.length > 0 && (
              <div style={{ marginTop: 24 }}>
                <div className="eyebrow" style={{ marginBottom: 10 }}>Ingredients</div>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {product.ingredients.map((i) => <span key={i} className="chip">{i}</span>)}
                </div>
              </div>
            )}

            <div style={{ marginTop: 28 }}>
              <div className="eyebrow" style={{ marginBottom: 10 }}>Portion</div>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {product.portions.map((opt) => (
                  <button key={opt} className="chip" onClick={() => setPortion(opt)} style={portion === opt ? { background: 'var(--chocolate)', color: 'var(--cream)' } : {}}>
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 28 }}>
              <div className="qty">
                <button onClick={() => setQty(Math.max(1, qty - 1))}><Icon.minus /></button>
                <span>{qty}</span>
                <button onClick={() => setQty(qty + 1)}><Icon.plus /></button>
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 36, color: 'var(--chocolate)' }}>{fmt(product.price * qty)}</div>
            </div>

            <button className="btn btn-coral btn-lg" style={{ marginTop: 18, width: '100%', justifyContent: 'center' }} onClick={() => cart.add(product, qty, portion)}>
              Add to cart <Icon.plus size={14} />
            </button>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container-wide">
            <h2 className="display" style={{ marginBottom: 22 }}>You might also like</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 22 }}>
              {related.map((p) => <ProductCard key={p.slug} p={p} />)}
            </div>
          </div>
        </section>
      )}
    </main>
    </>
  );
}
