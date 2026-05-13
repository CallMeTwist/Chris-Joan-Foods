/**
 * Seo.tsx
 * Injects per-page head tags (title, meta, OG, Twitter, canonical).
 * Uses <Head> from vite-react-ssg, which is a thin wrapper over
 * react-helmet-async's <Helmet> — so it works with vite-react-ssg's
 * built-in SSR head extraction pipeline.
 */
import { Head } from 'vite-react-ssg';
import { SITE_URL } from '../../data/brand';

interface SeoProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: 'website' | 'article' | 'product';
}

const DEFAULT_IMAGE = '/images/food-04.jpeg';
const SITE_NAME = 'Chris Joan Food and More';

export function Seo({ title, description, path, image, type = 'website' }: SeoProps) {
  const canonical = `${SITE_URL}${path}`;
  const ogImage = `${SITE_URL}${image ?? DEFAULT_IMAGE}`;
  const fullTitle = `${title} | ${SITE_NAME}`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />

      {/* Canonical */}
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />

      {/* Twitter card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Head>
  );
}
