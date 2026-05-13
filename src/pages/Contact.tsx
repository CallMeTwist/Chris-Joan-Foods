import type { FormEvent } from 'react';
import { brand } from '../data';
import { Icon } from '../components/ui/Icon';
import { Reveal } from '../components/ui/Reveal';
import { Seo } from '../components/seo/Seo';
import { JsonLd } from '../components/seo/JsonLd';
import { restaurantSchema, breadcrumbSchema } from '../lib/jsonld';

export default function Contact() {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (typeof window !== 'undefined') window.alert("Thanks — we'll be in touch shortly.");
    e.currentTarget.reset();
  };
  return (
    <>
      <Seo
        title="Contact Us"
        description="Get in touch with Chris Joan Foods. WhatsApp, phone, email or send a message. Same-day response for orders in Port Harcourt and nationwide enquiries."
        path="/contact"
      />
      <JsonLd data={restaurantSchema()} />
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }])} />
      <main className="page-enter">
      <section className="section">
        <div className="container-wide" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'start' }}>
          <Reveal>
            <span className="eyebrow">Say hello</span>
            <h1 className="display-lg" style={{ marginTop: 10 }}>
              Let's plan <span className="italic" style={{ color: 'var(--orange)' }}>your next meal.</span>
            </h1>
            <p className="lede" style={{ marginTop: 18 }}>
              Bookings, custom cakes, big orders, or just a quick question — drop us a line and we'll get back the same day.
            </p>
            <div style={{ marginTop: 30, display: 'flex', flexDirection: 'column', gap: 18 }}>
              <ContactRow ico={<Icon.whatsapp />} label="WhatsApp" value={brand.whatsapp} href={`https://wa.me/${brand.whatsappRaw}`} />
              <ContactRow ico={<Icon.phone />} label="Phone" value={brand.phone} href={`tel:${brand.phone.replace(/\s/g, '')}`} />
              <ContactRow ico={<Icon.mail />} label="Email" value={brand.email} href={`mailto:${brand.email}`} />
              <ContactRow ico={<Icon.pin />} label="Address" value={brand.address} />
              <ContactRow ico={<Icon.instagram />} label="Instagram" value={brand.instagram} href={`https://instagram.com/${brand.instagram.replace('@', '')}`} />
            </div>
            <div style={{ marginTop: 30 }}>
              <div className="eyebrow" style={{ marginBottom: 10 }}>Opening hours</div>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 6, color: 'var(--ink-3)', fontSize: 14.5 }}>
                {brand.hours.map((h) => (
                  <li key={h.day} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed var(--line)', paddingBottom: 6 }}>
                    <span>{h.day}</span><span>{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal style={{ background: 'var(--cream-2)', borderRadius: 'var(--r-lg)', padding: 36 }}>
            <h2 className="h3">Send us a note</h2>
            <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 18 }}>
              <Input name="name" type="text" placeholder="Your name" required />
              <Input name="email" type="email" placeholder="you@example.com" required />
              <Input name="phone" type="tel" placeholder="Phone (optional)" />
              <textarea name="message" rows={5} required placeholder="Tell us about your order or question" style={{ padding: 14, borderRadius: 'var(--r-md)', border: '1px solid var(--line)', background: 'white', fontFamily: 'inherit', fontSize: 15 }} />
              <button type="submit" className="btn btn-coral btn-lg" style={{ justifyContent: 'center' }}>Send message <Icon.arrow size={14} /></button>
            </form>
          </Reveal>
        </div>
      </section>
    </main>
    </>
  );
}

function ContactRow({ ico, label, value, href }: { ico: React.ReactNode; label: string; value: string; href?: string }) {
  const inner = (
    <>
      <span style={{ width: 38, height: 38, borderRadius: 9999, background: 'var(--cream-2)', color: 'var(--caramel-2)', display: 'grid', placeItems: 'center', flexShrink: 0 }}>{ico}</span>
      <span style={{ display: 'flex', flexDirection: 'column' }}>
        <span className="muted" style={{ fontSize: 12, letterSpacing: '.12em', textTransform: 'uppercase' }}>{label}</span>
        <span style={{ fontSize: 15.5, color: 'var(--chocolate)' }}>{value}</span>
      </span>
    </>
  );
  const style = { display: 'flex', alignItems: 'center', gap: 14 };
  return href ? <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" style={style}>{inner}</a> : <div style={style}>{inner}</div>;
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} style={{ padding: 14, borderRadius: 'var(--r-md)', border: '1px solid var(--line)', background: 'white', fontFamily: 'inherit', fontSize: 15 }} />;
}
