import { useMemo } from 'react';
import { Link, useOutletContext, useParams } from 'react-router-dom';
import { categories, categoryBySlug, products } from '../data';
import { Reveal } from '../components/ui/Reveal';
import { ProductCard } from '../components/product/ProductCard';
import type { QuickViewSetter } from '../App';
import { Seo } from '../components/seo/Seo';
import { JsonLd } from '../components/seo/JsonLd';
import { breadcrumbSchema } from '../lib/jsonld';

export default function Menu() {
  const { category } = useParams<{ category?: string }>();
  const { onQuickView } = useOutletContext<{ onQuickView: QuickViewSetter }>();
  const activeCat = category ? categoryBySlug(category) : null;
  const list = useMemo(
    () => (activeCat ? products.filter((p) => p.category === activeCat.slug) : products),
    [activeCat],
  );

  const breadcrumbTrail = activeCat
    ? [{ name: 'Home', path: '/' }, { name: 'Menu', path: '/menu' }, { name: activeCat.name, path: `/menu/${activeCat.slug}` }]
    : [{ name: 'Home', path: '/' }, { name: 'Menu', path: '/menu' }];

  const seoTitle = activeCat ? activeCat.name : 'Full Menu';
  const seoDescription = activeCat
    ? activeCat.blurb
    : 'Browse every dish Chris Joan makes — Nigerian soups, party jollof, small chops, cakes and more. Order via WhatsApp.';
  const seoPath = activeCat ? `/menu/${activeCat.slug}` : '/menu';

  return (
    <>
      <Seo title={seoTitle} description={seoDescription} path={seoPath} />
      <JsonLd data={breadcrumbSchema(breadcrumbTrail)} />
      <main className="page-enter">
      <section className="section" style={{ paddingBottom: 24 }}>
        <div className="container-wide">
          <Reveal>
            <span className="eyebrow">{activeCat ? activeCat.tag : 'Our menu'}</span>
            <h1 className="display-lg" style={{ marginTop: 10 }}>
              {activeCat ? activeCat.name : <>Everything we cook,<br /><span className="italic" style={{ color: 'var(--orange)' }}>all in one place.</span></>}
            </h1>
            {activeCat && <p className="lede" style={{ marginTop: 12, maxWidth: 620 }}>{activeCat.blurb}</p>}
          </Reveal>
        </div>
      </section>

      <section style={{ padding: '8px 0 28px' }}>
        <div className="container-wide" style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <Link to="/menu" className={`chip ${!activeCat ? 'chip-active' : ''}`}>All</Link>
          {categories.map((c) => (
            <Link key={c.slug} to={`/menu/${c.slug}`} className={`chip ${activeCat?.slug === c.slug ? 'chip-active' : ''}`}>
              {c.name}
            </Link>
          ))}
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container-wide">
          <Reveal stagger style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 22 }}>
            {list.map((p) => <ProductCard key={p.slug} p={p} onQuickView={onQuickView} />)}
          </Reveal>
          {list.length === 0 && (
            <p className="muted" style={{ marginTop: 24 }}>No items in this category yet.</p>
          )}
        </div>
      </section>
    </main>
    </>
  );
}
