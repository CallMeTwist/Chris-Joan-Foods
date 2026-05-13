import { brand } from '../../data';
import { Icon } from '../ui/Icon';

export function WhatsAppFAB() {
  return (
    <a
      href={`https://wa.me/${brand.whatsappRaw}`}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
      style={{
        position: 'fixed', bottom: 24, right: 24, zIndex: 55,
        width: 60, height: 60, borderRadius: '50%',
        background: '#25D366', color: 'white',
        display: 'grid', placeItems: 'center',
        boxShadow: '0 14px 30px rgba(37,211,102,0.4)',
        transition: 'transform .25s',
      }}
      onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.06)')}
      onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
    >
      <Icon.whatsapp size={28} />
    </a>
  );
}
