import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import { brand } from '../data';
import { Icon } from '../components/ui/Icon';
import { Reveal } from '../components/ui/Reveal';
import { Seo } from '../components/seo/Seo';
import { JsonLd } from '../components/seo/JsonLd';
import { breadcrumbSchema } from '../lib/jsonld';
import { leaderReveal } from '../animations/leaderReveal';

export default function About() {
  const leaderRef = useRef<HTMLElement>(null);
  useGSAP(() => {
    if (leaderRef.current) return leaderReveal(leaderRef.current);
  }, { scope: leaderRef });

  return (
    <>
      <Seo
        title="About Us"
        description="Learn the story behind Chris Joan Foods , fresh Nigerian cuisine made with love, quality ingredients and zero shortcuts in Port Harcourt, delivered nationwide."
        path="/about"
        image="/images/food-15.jpeg"
      />
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }])} />
      <main className="page-enter">
      <section className="section">
        <div className="about-grid container-wide" style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 60, alignItems: 'center' }}>
          <Reveal>
            <span className="eyebrow">Our story</span>
            <h1 className="display-lg" style={{ marginTop: 10 }}>
              Good food, <span className="italic" style={{ color: 'var(--orange)' }}>good memories.</span>
            </h1>
            <p className="lede" style={{ marginTop: 18, marginBottom: 14 }}>
              Chris Joan started in a small home kitchen with one promise , that every plate we serve should taste like home. Today, we cook for hangouts, weddings, Sunday lunches and surprise anniversaries across Port Harcourt , and we deliver nationwide.
            </p>
            <p className="lede" style={{ marginBottom: 14 }}>
              We hand-pick our ingredients at dawn, fry our small chops to order, and pipe every cake by hand. No shortcuts, no microwaves, no microwave-meal energy.
            </p>
            <p className="lede" style={{ marginBottom: 28 }}>
              We believe the best food is the kind that brings people together , so we put as much love into a single tray of meat pies as we do into a wedding's worth of jollof.
            </p>
            <Link to="/menu" className="btn btn-coral btn-lg">Browse the menu <Icon.arrow /></Link>
          </Reveal>
          <Reveal style={{ position: 'relative', aspectRatio: '1/1', minHeight: 420 }}>
            <img src="/images/food-15.jpeg" alt="" style={{ position: 'absolute', top: 0, left: '4%', width: '62%', height: '62%', objectFit: 'cover', borderRadius: 'var(--r-lg)', boxShadow: 'var(--shadow-md)' }} />
            <img src="/images/food-04.jpeg" alt="" className="floaty" style={{ position: 'absolute', bottom: 0, right: '2%', width: '58%', height: '58%', objectFit: 'cover', borderRadius: 'var(--r-lg)', boxShadow: 'var(--shadow-md)', border: '8px solid var(--cream-2)' }} />
          </Reveal>
        </div>
      </section>

      <section ref={leaderRef} className="section leader-section">
        <div className="container-wide leader-grid">
          <div className="leader-media">
            <span className="leader-blob" data-leader-blob aria-hidden />
            <span className="leader-ring" data-leader-ring aria-hidden />
            <div className="leader-frame" data-leader-frame>
              <img
                src="/images/leader.jpeg"
                alt="Chef Joan, head of the Chris Joan Foods kitchen"
                data-leader-portrait
                loading="lazy"
              />
            </div>
            <span className="leader-badge leader-badge--top" data-leader-badge>
              <Icon.flame />
              <span><strong>Head Chef</strong><em>since day one</em></span>
            </span>
            <span className="leader-badge leader-badge--bottom" data-leader-badge>
              <Icon.heart />
              <span><strong>Cooked with love</strong><em>every single tray</em></span>
            </span>
          </div>
          <div className="leader-copy">
            <span className="eyebrow">The kitchen</span>
            <h2 className="display-lg leader-heading" data-leader-heading>
              Meet <span className="italic" style={{ color: 'var(--orange)' }}>Chef Joan</span>, the heart behind the plate.
            </h2>
            <p className="lede leader-line" data-leader-line>
              Joan runs the kitchen the same way her mother ran hers , early mornings at the market, a strict no-shortcuts rule, and one taste-test too many before anything leaves the pot. Every recipe on our menu is hers, refined over years of feeding family, friends and now the whole of Port Harcourt.
            </p>
            <p className="leader-line" data-leader-line>
              She seasons by feel, pipes every cake by hand, and personally signs off on every party tray that goes out the door. If a dish doesn't taste like home, it doesn't leave the kitchen.
            </p>
            <div className="leader-signature" data-leader-signature>
              <span className="leader-signature__name">Chef Joan</span>
              <span className="leader-signature__role">Founder &amp; Head Chef</span>
            </div>
            <div className="leader-actions">
              <Link to="/menu" className="btn btn-coral btn-lg" data-magnetic>
                Taste her cooking <Icon.arrow />
              </Link>
              <a href={`https://wa.me/${brand.whatsappRaw}`} target="_blank" rel="noreferrer" className="btn btn-ghost btn-lg">
                <Icon.whatsapp /> Say hello
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--cream-2)' }}>
        <div className="container-wide">
          <Reveal className="text-center" style={{ maxWidth: 760, margin: '0 auto 36px' }}>
            <span className="eyebrow">How we cook</span>
            <h2 className="display-lg" style={{ marginTop: 10 }}>The Chris Joan promise.</h2>
          </Reveal>
          <Reveal stagger style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 18 }}>
            {[
              { ico: <Icon.leaf />, title: 'Fresh ingredients', text: 'Sourced daily. Nothing frozen, nothing from yesterday.' },
              { ico: <Icon.spark />, title: 'Hygienic kitchen', text: 'Clean station, sealed packaging, gloves on at all times.' },
              { ico: <Icon.flame />, title: 'Made to order', text: 'Most items are cooked the day you order them.' },
              { ico: <Icon.heart />, title: 'Honest pricing', text: 'No upcharges, no surprises. Party trays priced per head.' },
            ].map((v, i) => (
              <div key={i} className="card promise-card">
                <span className="promise-card__icon" aria-hidden>{v.ico}</span>
                <h3 className="h4 promise-card__title">{v.title}</h3>
                <p className="promise-card__text">{v.text}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container-wide" style={{ background: 'var(--chocolate)', color: 'var(--cream)', borderRadius: 'var(--r-lg)', padding: 'clamp(36px, 5vw, 64px)' }}>
          <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
            <h2 className="display-lg" style={{ color: 'var(--cream)' }}>Talk to us. We bite back with love.</h2>
            <p style={{ marginTop: 18, color: 'rgba(250,246,236,0.72)', fontSize: 17 }}>
              Bookings, custom cakes, big orders , message us on WhatsApp and we'll plan it together.
            </p>
            <div style={{ marginTop: 24, display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={`https://wa.me/${brand.whatsappRaw}`} target="_blank" rel="noreferrer" className="btn btn-lg" style={{ background: '#25D366', color: 'white' }}>
                <Icon.whatsapp /> Chat on WhatsApp
              </a>
              <Link to="/contact" className="btn btn-lg" style={{ background: 'var(--cream)', color: 'var(--chocolate)' }}>Other ways to reach us</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
