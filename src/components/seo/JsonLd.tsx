/**
 * JsonLd.tsx
 * Injects a <script type="application/ld+json"> block via <Head>.
 * Works with vite-react-ssg's SSR head extraction (react-helmet-async pipeline).
 */
import { Head } from 'vite-react-ssg';

interface JsonLdProps {
  data: Record<string, unknown>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <Head>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Head>
  );
}
