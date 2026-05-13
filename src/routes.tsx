import type { RouteRecord } from 'vite-react-ssg';
import App from './App';
import { categories, products } from './data';

export const routes: RouteRecord[] = [
  {
    path: '/',
    Component: App,
    children: [
      { index: true, lazy: async () => ({ Component: (await import('./pages/Home')).default }),     entry: 'src/pages/Home.tsx' },
      { path: 'menu',           lazy: async () => ({ Component: (await import('./pages/Menu')).default }),          entry: 'src/pages/Menu.tsx' },
      { path: 'menu/:category', lazy: async () => ({ Component: (await import('./pages/Menu')).default }),          entry: 'src/pages/Menu.tsx',
        getStaticPaths: () => categories.map((c) => `/menu/${c.slug}`) },
      { path: 'product/:slug',  lazy: async () => ({ Component: (await import('./pages/ProductDetail')).default }), entry: 'src/pages/ProductDetail.tsx',
        getStaticPaths: () => products.map((p) => `/product/${p.slug}`) },
      { path: 'gallery',        lazy: async () => ({ Component: (await import('./pages/Gallery')).default }),       entry: 'src/pages/Gallery.tsx' },
      { path: 'about',          lazy: async () => ({ Component: (await import('./pages/About')).default }),         entry: 'src/pages/About.tsx' },
      { path: 'contact',        lazy: async () => ({ Component: (await import('./pages/Contact')).default }),       entry: 'src/pages/Contact.tsx' },
      { path: '*',              lazy: async () => ({ Component: (await import('./pages/NotFound')).default }),      entry: 'src/pages/NotFound.tsx' },
    ],
  },
];
