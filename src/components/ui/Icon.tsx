import type { SVGProps } from 'react';

type IconProps = Omit<SVGProps<SVGSVGElement>, 'fill' | 'stroke'> & {
  size?: number;
  filled?: boolean;
};

const base = (size = 18) =>
  ({
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  }) as const;

export const Icon = {
  search: ({ size, filled: _f, ...rest }: IconProps = {}) => (<svg {...base(size)} {...rest}><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>),
  cart:   ({ size, filled: _f, ...rest }: IconProps = {}) => (<svg {...base(size ?? 20)} {...rest}><path d="M3 4h2l2.4 12.3a2 2 0 0 0 2 1.7h8.6a2 2 0 0 0 2-1.6L21.5 8H7"/><circle cx="10" cy="20.5" r="1.3"/><circle cx="18" cy="20.5" r="1.3"/></svg>),
  heart:  ({ size, filled, ...rest }: IconProps = {}) => (<svg {...base(size)} fill={filled ? 'currentColor' : 'none'} {...rest}><path d="M12 21s-7-4.5-9-9.2C1.6 8.5 3.6 5 7.2 5c2 0 3.4 1.2 4.8 3 1.4-1.8 2.8-3 4.8-3 3.6 0 5.6 3.5 4.2 6.8C19 16.5 12 21 12 21z"/></svg>),
  star:   ({ size, filled, ...rest }: IconProps = {}) => (<svg {...base(size ?? 14)} fill={filled ? 'currentColor' : 'none'} strokeWidth={1.4} {...rest}><path d="m12 3 2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.8 6.2 20.9l1.1-6.5L2.6 9.8l6.5-.9L12 3z"/></svg>),
  menu:   ({ size, filled: _f, ...rest }: IconProps = {}) => (<svg {...base(size ?? 20)} {...rest}><path d="M4 7h16M4 12h16M4 17h16"/></svg>),
  close:  ({ size, filled: _f, ...rest }: IconProps = {}) => (<svg {...base(size)} {...rest}><path d="M6 6l12 12M18 6 6 18"/></svg>),
  plus:   ({ size, filled: _f, ...rest }: IconProps = {}) => (<svg {...base(size ?? 16)} strokeWidth={2} {...rest}><path d="M12 5v14M5 12h14"/></svg>),
  minus:  ({ size, filled: _f, ...rest }: IconProps = {}) => (<svg {...base(size ?? 16)} strokeWidth={2} {...rest}><path d="M5 12h14"/></svg>),
  arrow:  ({ size, filled: _f, ...rest }: IconProps = {}) => (<svg {...base(size ?? 16)} {...rest}><path d="M5 12h14M13 5l7 7-7 7"/></svg>),
  arrowUR:({ size, filled: _f, ...rest }: IconProps = {}) => (<svg {...base(size ?? 14)} {...rest}><path d="M7 17 17 7M9 7h8v8"/></svg>),
  whatsapp:({ size, filled: _f, ...rest }: IconProps = {}) => (<svg width={size ?? 18} height={size ?? 18} viewBox="0 0 24 24" fill="currentColor" {...rest}><path d="M20.5 3.5A11 11 0 0 0 3.4 17.3L2 22l4.9-1.3a11 11 0 0 0 5.2 1.3h.1a11 11 0 0 0 8.3-18.5zM12.1 20a9.1 9.1 0 0 1-4.7-1.3l-.3-.2-2.9.8.8-2.9-.2-.3A9.1 9.1 0 1 1 12.1 20zm5.2-6.8c-.3-.1-1.7-.8-1.9-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1a7.4 7.4 0 0 1-3.7-3.2c-.3-.5.3-.4.8-1.4.1-.2.1-.3 0-.5 0-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1 2.9 1.2 3.1c.1.2 2 3 4.8 4.2 1.7.7 2.4.8 3.2.7.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3z"/></svg>),
  instagram:({ size, filled: _f, ...rest }: IconProps = {}) => (<svg {...base(size)} {...rest}><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>),
  phone:  ({ size, filled: _f, ...rest }: IconProps = {}) => (<svg {...base(size)} {...rest}><path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 2.2 4.2 2 2 0 0 1 4.2 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.7a16 16 0 0 0 6.3 6.3l1.3-1.3a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z"/></svg>),
  pin:    ({ size, filled: _f, ...rest }: IconProps = {}) => (<svg {...base(size)} {...rest}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>),
  mail:   ({ size, filled: _f, ...rest }: IconProps = {}) => (<svg {...base(size)} {...rest}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 7 9-7"/></svg>),
  clock:  ({ size, filled: _f, ...rest }: IconProps = {}) => (<svg {...base(size)} {...rest}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>),
  leaf:   ({ size, filled: _f, ...rest }: IconProps = {}) => (<svg {...base(size)} {...rest}><path d="M11 20A7 7 0 0 1 4 13c0-6 5-10 16-10 0 11-4 16-9 17z"/><path d="M2 22s5-7 9-9"/></svg>),
  spark:  ({ size, filled: _f, ...rest }: IconProps = {}) => (<svg {...base(size)} {...rest}><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/></svg>),
  flame:  ({ size, filled: _f, ...rest }: IconProps = {}) => (<svg {...base(size)} {...rest}><path d="M12 22c4 0 7-3 7-7 0-3-2-5-3-7-2-3 0-6 0-6s-7 2-7 9c0 1-2 1-2 4 0 4 1 7 5 7z"/></svg>),
  bag:    ({ size, filled: _f, ...rest }: IconProps = {}) => (<svg {...base(size)} {...rest}><path d="M6 7h12l-1 13H7L6 7z"/><path d="M9 7a3 3 0 1 1 6 0"/></svg>),
  play:   ({ size, filled: _f, ...rest }: IconProps = {}) => (<svg width={size ?? 14} height={size ?? 14} viewBox="0 0 24 24" fill="currentColor" {...rest}><path d="M8 5v14l11-7z"/></svg>),
  check:  ({ size, filled: _f, ...rest }: IconProps = {}) => (<svg {...base(size ?? 16)} strokeWidth={1.8} {...rest}><path d="m5 12 5 5L20 7"/></svg>),
};
