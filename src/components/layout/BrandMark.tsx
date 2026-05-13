import { Link } from 'react-router-dom';

export function BrandMark() {
  return (
    <Link to="/" className="brand" aria-label="Chris Joan home">
      <img
        src="/images/logo.png"
        alt=""
        width={44}
        height={44}
        className="brand-logo"
      />
      <span className="brand-text">
        <span className="a" style={{ fontStyle: 'italic' }}>Chris Joan</span>
        <span className="b">Food &amp; More</span>
      </span>
    </Link>
  );
}
