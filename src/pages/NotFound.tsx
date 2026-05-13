import { Link } from 'react-router-dom';
import { Seo } from '../components/seo/Seo';

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page Not Found"
        description="The page you're looking for isn't on the menu. Head back home to browse fresh Nigerian food from Chris Joan Foods."
        path="/404"
      />
      <main className="page-enter" style={{ padding: '120px 24px', textAlign: 'center' }}>
      <span className="eyebrow">404</span>
      <h1 className="display-lg" style={{ marginTop: 12 }}>That page isn't on the menu.</h1>
      <p className="lede" style={{ maxWidth: 540, margin: '14px auto 28px' }}>
        We couldn't find what you were looking for. Browse the menu or head home.
      </p>
      <Link to="/" className="btn btn-coral btn-lg">Back to home</Link>
    </main>
    </>
  );
}
