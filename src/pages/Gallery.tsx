import { useOutletContext } from 'react-router-dom';
import { products } from '../data';
import { Reveal } from '../components/ui/Reveal';
import { Seo } from '../components/seo/Seo';
import { JsonLd } from '../components/seo/JsonLd';
import { breadcrumbSchema } from '../lib/jsonld';
import type { QuickViewSetter } from '../App';

export default function Gallery() {
  const { onQuickView } = useOutletContext<{ onQuickView: QuickViewSetter }>();
  return (
    <>
      <Seo
        title="Food Gallery"
        description="Real plates, real customers, real Port Harcourt kitchens. Browse photos of every dish, small chop and cake Chris Joan makes — tap one to order."
        path="/gallery"
        image="/images/food-04.jpeg"
      />
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Gallery', path: '/gallery' }])} />
      <main className="page-enter">
      <section className="section" style={{ paddingBottom: 24 }}>
        <div className="container-wide">
          <Reveal>
            <span className="eyebrow">From the kitchen</span>
            <h1 className="display-lg" style={{ marginTop: 10 }}>
              A peek at our<br /><span className="italic" style={{ color: 'var(--orange)' }}>plates &amp; people.</span>
            </h1>
            <p className="lede" style={{ marginTop: 14, maxWidth: 620 }}>
              Real plates, real customers, real Port Harcourt kitchens. Tap any photo to see the dish and add it to your tray.
            </p>
          </Reveal>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container-wide">
          <Reveal stagger style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 14 }}>
            {products.map((p) => (
              <button
                key={p.slug}
                onClick={() => onQuickView(p)}
                className="gallery-tile"
                aria-label={`Quick view ${p.name}`}
              >
                <img src={p.img} alt={p.name} loading="lazy" />
                <span className="gallery-tile-label">
                  <span className="gallery-tile-name">{p.name}</span>
                </span>
              </button>
            ))}
          </Reveal>
        </div>
      </section>
    </main>
    </>
  );
}
