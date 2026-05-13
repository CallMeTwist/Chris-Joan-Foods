import { gallery } from '../data';
import { Reveal } from '../components/ui/Reveal';
import { Seo } from '../components/seo/Seo';
import { JsonLd } from '../components/seo/JsonLd';
import { breadcrumbSchema } from '../lib/jsonld';

export default function Gallery() {
  return (
    <>
      <Seo
        title="Food Gallery"
        description="Real plates, real customers, real Port Harcourt kitchens. Browse photos of Nigerian dishes, small chops and cakes from Chris Joan Foods."
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
              Real plates, real customers, real Port Harcourt kitchens. Tap any image to see the order it came from.
            </p>
          </Reveal>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container-wide">
          <Reveal stagger style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 14 }}>
            {gallery.map((src, i) => (
              <div key={i} style={{ borderRadius: 'var(--r-md)', overflow: 'hidden', aspectRatio: '1/1' }}>
                <img src={src} alt="" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            ))}
          </Reveal>
        </div>
      </section>
    </main>
    </>
  );
}
