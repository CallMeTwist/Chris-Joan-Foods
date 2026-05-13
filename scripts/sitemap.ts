/**
 * scripts/sitemap.ts
 * Generates dist/sitemap.xml after `vite-react-ssg build`.
 * Run via: tsx scripts/sitemap.ts
 */
import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

// Import data directly — tsx handles the TS imports
import { categories } from '../src/data/categories';
import { products } from '../src/data/products';

const SITE_URL = 'https://chrisjoanfoods.ng';
const TODAY = new Date().toISOString().split('T')[0];

interface SitemapUrl {
  loc: string;
  lastmod?: string;
  changefreq?: string;
  priority?: string;
}

const staticPages: SitemapUrl[] = [
  { loc: '/',         changefreq: 'weekly',  priority: '1.0' },
  { loc: '/menu',     changefreq: 'weekly',  priority: '0.9' },
  { loc: '/gallery',  changefreq: 'monthly', priority: '0.6' },
  { loc: '/about',    changefreq: 'monthly', priority: '0.6' },
  { loc: '/contact',  changefreq: 'monthly', priority: '0.7' },
];

const categoryPages: SitemapUrl[] = categories.map((c) => ({
  loc: `/menu/${c.slug}`,
  changefreq: 'weekly',
  priority: '0.8',
}));

const productPages: SitemapUrl[] = products.map((p) => ({
  loc: `/product/${p.slug}`,
  changefreq: 'monthly',
  priority: '0.7',
}));

const allUrls: SitemapUrl[] = [...staticPages, ...categoryPages, ...productPages];

function buildXml(urls: SitemapUrl[]): string {
  const urlTags = urls
    .map(({ loc, lastmod, changefreq, priority }) => {
      const parts = [
        `  <url>`,
        `    <loc>${SITE_URL}${loc}</loc>`,
        `    <lastmod>${lastmod ?? TODAY}</lastmod>`,
        changefreq ? `    <changefreq>${changefreq}</changefreq>` : '',
        priority ? `    <priority>${priority}</priority>` : '',
        `  </url>`,
      ].filter(Boolean);
      return parts.join('\n');
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlTags}
</urlset>
`;
}

const xml = buildXml(allUrls);
const outPath = resolve(process.cwd(), 'dist', 'sitemap.xml');

writeFileSync(outPath, xml, 'utf-8');
console.log(`✓ wrote dist/sitemap.xml with ${allUrls.length} URLs`);
