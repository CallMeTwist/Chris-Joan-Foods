import { useEffect, useRef } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { brand, categoryBySlug, featuredProducts, testimonials } from '../data';
import { Icon } from '../components/ui/Icon';
import { Stars } from '../components/ui/Stars';
import { Reveal } from '../components/ui/Reveal';
import { ProductCard } from '../components/product/ProductCard';
import type { QuickViewSetter } from '../App';
import { Seo } from '../components/seo/Seo';
import { JsonLd } from '../components/seo/JsonLd';
import { restaurantSchema, breadcrumbSchema } from '../lib/jsonld';
import { heroIntro } from '../animations/heroIntro';
import { bentoParallax } from '../animations/bentoParallax';

export default function Home() {
  const { onQuickView } = useOutletContext<{ onQuickView: QuickViewSetter }>();
  const featured = featuredProducts().slice(0, 6);

  const heroRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (heroRef.current) return heroIntro(heroRef.current as HTMLElement);
  }, []);
  useEffect(() => {
    if (heroRef.current) return bentoParallax(heroRef.current as HTMLElement);
  }, []);

  return (
    <>
      <Seo
        title="Homemade Nigerian Food, Small Chops & Cakes"
        description="Chris Joan delivers fresh Nigerian dishes, party small chops and custom cakes made to order in Port Harcourt, delivered nationwide. Order via WhatsApp today."
        path="/"
        image="/images/food-04.jpeg"
      />
      <JsonLd data={restaurantSchema()} />
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }])} />
      <main className="page-enter">
      {/* ===== HERO ===== */}
      <section ref={heroRef} style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="container-wide" style={{ paddingTop: 'clamp(40px, 6vw, 84px)', paddingBottom: 'clamp(40px, 6vw, 72px)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: 48, alignItems: 'center' }} className="hero-grid">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 26 }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 14px', borderRadius: 9999, background: 'rgba(212,164,88,0.18)', color: 'var(--caramel-2)', fontSize: 12.5, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  <Icon.flame size={14} /> Port Harcourt · delivered nationwide
                </span>
              </div>
              <h1 className="display-xl" data-hero-title>
                Taste you'll <span className="script" style={{ display: 'inline-block', color: 'var(--orange)', fontSize: '0.95em', transform: 'translateY(0.08em)' }}>always</span><br />
                remember.
              </h1>
              <p className="lede" style={{ maxWidth: 520, marginTop: 24 }}>
                Homemade Nigerian dishes, party-ready small chops and made-to-order cakes , prepared with care, freshness and a generous pour of love by Chris Joan.
              </p>
              <div style={{ display: 'flex', gap: 12, marginTop: 32, flexWrap: 'wrap' }}>
                <Link to="/menu" className="btn btn-coral btn-lg">Order now <Icon.arrow /></Link>
                <a href={`https://wa.me/${brand.whatsappRaw}`} target="_blank" rel="noreferrer" className="btn btn-ghost btn-lg" style={{ color: 'var(--chocolate)' }}>
                  <Icon.whatsapp /> Chat on WhatsApp
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginTop: 42, flexWrap: 'wrap' }}>
                <div className="reviewer-stack">
                  {['reviewer-01', 'reviewer-02', 'reviewer-03', 'reviewer-04'].map((f) => (
                    <img key={f} src={`/images/reviewers/${f}.jpeg`} alt="" loading="lazy" />
                  ))}
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <Stars value={5} /> <span style={{ fontWeight: 600, color: 'var(--chocolate)' }}>4.9</span>
                  </div>
                  <div className="muted" style={{ fontSize: 13 }}>800+ happy plates this month</div>
                </div>
              </div>
            </div>

            {/* HERO BENTO COLLAGE */}
            <div style={{ position: 'relative', aspectRatio: '1/1.05', minHeight: 480 }} data-hero-bento>
              <div data-bento-card style={{ position: 'absolute', top: '4%', left: '8%', width: '62%', height: '62%', borderRadius: 'var(--r-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', transform: 'rotate(-2deg)' }}>
                <img src="/images/food-04.jpeg" alt="Chris Joan small chops" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div data-bento-card className="floaty-2" style={{ position: 'absolute', top: '-2%', right: '2%', width: '40%', height: '42%', borderRadius: 'var(--r-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-md)', transform: 'rotate(4deg)', background: 'var(--cream-3)' }}>
                <img src="/images/food-20.jpeg" alt="Anniversary cake" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div data-bento-card className="floaty" style={{ position: 'absolute', bottom: '8%', right: '-2%', width: '48%', height: '40%', borderRadius: 'var(--r-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-md)', transform: 'rotate(-3deg)' }}>
                <img src="/images/food-01.jpeg" alt="Smoky jollof" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ position: 'absolute', bottom: '2%', left: '2%', background: 'var(--chocolate)', color: 'var(--cream)', borderRadius: 'var(--r-md)', padding: '14px 18px', boxShadow: 'var(--shadow-md)', maxWidth: 220 }}>
                <div style={{ fontFamily: 'var(--font-script)', fontSize: 34, color: 'var(--gold)', lineHeight: 1 }}>fresh</div>
                <div style={{ fontSize: 12, color: 'rgba(250,246,236,0.7)', letterSpacing: '.14em', textTransform: 'uppercase', marginTop: 6 }}>Cooked the day you order</div>
              </div>
              <svg style={{ position: 'absolute', top: '40%', left: '-5%', width: 100, height: 100, zIndex: -1 }} viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="var(--gold)" opacity="0.35" /></svg>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Marquee value props ===== */}
      <PromisesMarquee />

      {/* ===== Categories ===== */}
      <section className="section">
        <div className="container-wide">
          <Reveal className="flex items-end justify-between" style={{ marginBottom: 36, flexWrap: 'wrap', gap: 16 }}>
            <div>
              <span className="eyebrow">Browse by craving</span>
              <h2 className="display-lg" style={{ marginTop: 10 }}>What are you in the<br /><span className="italic" style={{ color: 'var(--orange)' }}>mood for</span> today?</h2>
            </div>
            <Link to="/menu" className="btn btn-ghost">See full menu <Icon.arrow size={14} /></Link>
          </Reveal>
          <Reveal stagger className="cat-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 18 }}>
            {[
              { slug: 'nigerian-dishes', span: 5, h: 380 },
              { slug: 'small-chops', span: 4, h: 380 },
              { slug: 'cakes-and-treats', span: 3, h: 380 },
              { slug: 'rice-dishes', span: 3, h: 300 },
              { slug: 'pastries', span: 3, h: 300 },
              { slug: 'snacks', span: 3, h: 300 },
              { slug: 'drinks', span: 3, h: 300 },
            ].map(({ slug, span, h }) => {
              const c = categoryBySlug(slug);
              if (!c) return null;
              return (
                <Link key={slug} to={`/menu/${slug}`} style={{ gridColumn: `span ${span}`, height: h }} className="cat-card">
                  <div style={{ position: 'relative', width: '100%', height: '100%', borderRadius: 'var(--r-md)', overflow: 'hidden', background: 'var(--cream-2)' }}>
                    <img src={c.img} alt={c.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .8s ease' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(20,10,4,0) 30%, rgba(20,10,4,0.65) 100%)' }} />
                    <span className="chip" style={{ position: 'absolute', top: 16, left: 16, background: 'rgba(255,253,246,0.9)', color: 'var(--chocolate)' }}>{c.tag}</span>
                    <div style={{ position: 'absolute', bottom: 16, left: 18, right: 18, color: 'var(--cream)' }}>
                      <h3 className="h3" style={{ color: 'var(--cream)', marginBottom: 4 }}>{c.name}</h3>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 10 }}>
                        <span style={{ fontSize: 13, opacity: 0.85, maxWidth: 280 }}>{c.count} items</span>
                        <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 32, height: 32, borderRadius: '50%', background: 'var(--orange)' }}>
                          <Icon.arrow size={14} />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </Reveal>
        </div>
      </section>

      {/* ===== Featured / Popular ===== */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container-wide">
          <Reveal className="flex items-end justify-between" style={{ marginBottom: 32, flexWrap: 'wrap', gap: 16 }}>
            <div>
              <span className="eyebrow">Most loved this week</span>
              <h2 className="display-lg" style={{ marginTop: 10 }}>Popular at the<br /><span className="italic" style={{ color: 'var(--burgundy)' }}>Joan's kitchen.</span></h2>
            </div>
          </Reveal>
          <Reveal stagger style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 22 }}>
            {featured.map((p) => <ProductCard key={p.slug} p={p} onQuickView={onQuickView} />)}
          </Reveal>
        </div>
      </section>

      {/* ===== About preview, occasions, testimonials, gallery preview, CTA ===== */}
      <HomeAboutPreview />
      <HomeOccasions />
      <HomeTestimonials />
      <HomeGalleryPreview />
      <HomeCta />
    </main>
    </>
  );
}

function PromisesMarquee() {
  const promises = [
    { ico: <Icon.leaf size={18} />, label: 'Fresh, quality ingredients' },
    { ico: <Icon.spark size={18} />, label: 'Neat & hygienic preparation' },
    { ico: <Icon.flame size={18} />, label: 'Hot, made-to-order' },
    { ico: <Icon.whatsapp size={18} />, label: 'Reliable WhatsApp service' },
    { ico: <Icon.heart size={18} />, label: 'Great taste in every bite' },
  ];
  const Track = () => (
    <div className="marquee__track" aria-hidden="false">
      {promises.map((v, i) => (
        <span key={i} className="marquee__item">
          {v.ico}
          <span>{v.label}</span>
          <span className="marquee__dot" aria-hidden />
        </span>
      ))}
    </div>
  );
  return (
    <section style={{ background: 'var(--cream-2)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', padding: '20px 0' }}>
      <div className="marquee">
        <Track />
        <Track />
      </div>
    </section>
  );
}

function HomeAboutPreview() {
  return (
    <section className="section" style={{ background: 'var(--cream-2)' }}>
      <div className="container-wide" style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 60, alignItems: 'center' }}>
        <Reveal style={{ position: 'relative', aspectRatio: '1/1', minHeight: 420 }}>
          <img src="/images/food-15.jpeg" alt="" style={{ position: 'absolute', top: 0, left: '4%', width: '62%', height: '62%', objectFit: 'cover', borderRadius: 'var(--r-lg)', boxShadow: 'var(--shadow-md)' }} />
          <img src="/images/food-09.jpeg" alt="" className="floaty" style={{ position: 'absolute', bottom: 0, right: '2%', width: '58%', height: '58%', objectFit: 'cover', borderRadius: 'var(--r-lg)', boxShadow: 'var(--shadow-md)', border: '8px solid var(--cream-2)' }} />
          <div style={{ position: 'absolute', top: '40%', left: '-2%', background: 'var(--chocolate)', color: 'var(--cream)', borderRadius: 'var(--r-md)', padding: '18px 22px', boxShadow: 'var(--shadow-md)' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 46, color: 'var(--gold)', lineHeight: 1 }}>5+ yrs</div>
            <div style={{ fontSize: 11.5, letterSpacing: '.18em', textTransform: 'uppercase', opacity: 0.7, marginTop: 6 }}>cooking with love</div>
          </div>
        </Reveal>
        <Reveal>
          <span className="eyebrow">Our story, in one bite</span>
          <h2 className="display-lg" style={{ marginTop: 12, marginBottom: 20 }}>Good food brings <span className="italic" style={{ color: 'var(--orange)' }}>happiness.</span> We cook with that in mind.</h2>
          <p className="lede" style={{ marginBottom: 14 }}>
            Chris Joan started in a small home kitchen with one promise , that every plate that leaves us should taste like home. Today, we cook for hangouts, weddings, Sunday lunches and surprise anniversaries from Port Harcourt , and we deliver nationwide.
          </p>
          <p className="lede" style={{ marginBottom: 24 }}>
            We hand-pick our ingredients at dawn, fry our small chops to order, and pipe every cake by hand. No shortcuts, no microwaves, no microwave-meal energy.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 14, marginBottom: 28 }}>
            {['Fresh, quality ingredients', 'Neat & hygienic preparation', 'Affordable, honest pricing', 'Reliable WhatsApp service'].map((t) => (
              <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14 }}>
                <span style={{ width: 24, height: 24, borderRadius: '50%', background: 'var(--orange)', color: 'white', display: 'grid', placeItems: 'center' }}><Icon.check size={14} /></span>
                <span>{t}</span>
              </div>
            ))}
          </div>
          <Link to="/about" className="btn btn-primary">Read our full story <Icon.arrow size={14} /></Link>
        </Reveal>
      </div>
    </section>
  );
}

function HomeOccasions() {
  const items = [
    { title: 'Birthdays', img: '/images/food-09.jpeg', desc: 'Custom cakes, mini boxes, party trays.', tag: 'From ₦9,500' },
    { title: 'Weddings & engagements', img: '/images/food-01.jpeg', desc: 'Wholesale jollof, fried rice and small chops.', tag: 'From ₦80,000' },
    { title: 'Office & hangouts', img: '/images/food-04.jpeg', desc: 'Friday trays delivered hot , never greasy.', tag: 'From ₦12,000' },
  ];
  return (
    <section className="section">
      <div className="container-wide">
        <Reveal className="text-center" style={{ maxWidth: 680, margin: '0 auto 48px' }}>
          <span className="eyebrow">Special occasions</span>
          <h2 className="display-lg" style={{ marginTop: 10 }}>From birthdays to <span className="italic" style={{ color: 'var(--burgundy)' }}>big weddings,</span> we cook the day for you.</h2>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }} className="occasions">
          {items.map((o, i) => (
            <Reveal key={i} className="card" style={{ padding: 0 }}>
              <div style={{ aspectRatio: '4/3', overflow: 'hidden' }}>
                <img src={o.img} alt={o.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '24px 24px 28px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <h3 className="h3">{o.title}</h3>
                  <span className="chip chip-orange">{o.tag}</span>
                </div>
                <p className="muted" style={{ marginTop: 10, fontSize: 14.5 }}>{o.desc}</p>
                <a href={`https://wa.me/${brand.whatsappRaw}`} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 14, color: 'var(--caramel-2)', fontWeight: 500, fontSize: 14 }}>Plan an order <Icon.arrowUR /></a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomeTestimonials() {
  return (
    <section className="section" style={{ background: 'var(--chocolate)', color: 'var(--cream)' }}>
      <div className="container-wide">
        <Reveal className="text-center" style={{ maxWidth: 760, margin: '0 auto 48px' }}>
          <span className="eyebrow on-dark">Kind words</span>
          <h2 className="display-lg" style={{ marginTop: 10, color: 'var(--cream)' }}>"My grandmother used to make it<br />this way." , <span className="script" style={{ color: 'var(--gold)', fontSize: '0.9em' }}>actual customer</span></h2>
        </Reveal>
        <Reveal stagger style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 18 }}>
          {testimonials.map((t, i) => (
            <div key={i} style={{ padding: '28px 26px', borderRadius: 'var(--r-md)', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <Stars value={t.rating} />
              <p style={{ fontFamily: 'var(--font-display)', fontSize: 22, lineHeight: 1.3, marginTop: 16, color: 'var(--cream)', letterSpacing: '-0.01em' }}>"{t.text}"</p>
              <div style={{ marginTop: 22, fontSize: 14, color: 'var(--gold)' }}>{t.name}</div>
              <div style={{ fontSize: 13, color: 'rgba(250,246,236,0.55)' }}>{t.loc}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function HomeGalleryPreview() {
  const items = [
    { src: '/images/food-04.jpeg', c: 2, r: 2 },
    { src: '/images/food-10.jpeg', c: 2, r: 1 },
    { src: '/images/food-20.jpeg', c: 2, r: 1 },
    { src: '/images/food-01.jpeg', c: 2, r: 1 },
    { src: '/images/food-07.jpeg', c: 1, r: 1 },
    { src: '/images/food-09.jpeg', c: 1, r: 1 },
    { src: '/images/food-15.jpeg', c: 2, r: 1 },
    { src: '/images/food-05.jpeg', c: 2, r: 1 },
  ];
  return (
    <section className="section">
      <div className="container-wide">
        <Reveal className="flex items-end justify-between" style={{ marginBottom: 32, flexWrap: 'wrap', gap: 16 }}>
          <div>
            <span className="eyebrow">From the kitchen</span>
            <h2 className="display-lg" style={{ marginTop: 10 }}>A peek at our<br /><span className="italic" style={{ color: 'var(--orange)' }}>plates &amp; people.</span></h2>
          </div>
          <Link to="/gallery" className="btn btn-ghost">Open gallery <Icon.arrow size={14} /></Link>
        </Reveal>
        <Reveal stagger style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gridAutoRows: '160px', gap: 14 }}>
          {items.map((g, i) => (
            <Link key={i} to="/gallery" style={{ gridColumn: `span ${g.c}`, gridRow: `span ${g.r}`, borderRadius: 'var(--r-md)', overflow: 'hidden', position: 'relative' }}>
              <img src={g.src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Link>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function HomeCta() {
  return (
    <section style={{ padding: '80px 0' }}>
      <div className="container-wide">
        <div style={{ background: 'var(--orange)', color: 'white', borderRadius: 'var(--r-lg)', padding: 'clamp(40px, 6vw, 72px)', position: 'relative', overflow: 'hidden' }}>
          <svg style={{ position: 'absolute', top: -30, right: -30, opacity: 0.15 }} width="280" height="280" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="white" /></svg>
          <svg style={{ position: 'absolute', bottom: -50, left: -20, opacity: 0.12 }} width="220" height="220" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="white" /></svg>
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 36, alignItems: 'center', position: 'relative' }}>
            <div>
              <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.85)' }}>Hungry already?</span>
              <h2 className="display-lg" style={{ color: 'white', marginTop: 12, marginBottom: 18 }}>One message away from <span className="script" style={{ fontSize: '1em', color: 'var(--cream)' }}>your favourite meal.</span></h2>
              <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.92)', maxWidth: 520 }}>WhatsApp us, pick a tray, and we'll deliver hot. Same-day before 4pm, party trays with 24h notice.</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-start' }}>
              <a href={`https://wa.me/${brand.whatsappRaw}`} target="_blank" rel="noreferrer" className="btn btn-lg" style={{ background: 'white', color: 'var(--orange-2)', width: '100%', justifyContent: 'center' }}>
                <Icon.whatsapp /> {brand.whatsapp}
              </a>
              <Link to="/menu" className="btn btn-lg" style={{ background: 'var(--chocolate)', color: 'var(--cream)', width: '100%', justifyContent: 'center' }}>Browse the full menu <Icon.arrow size={14} /></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
