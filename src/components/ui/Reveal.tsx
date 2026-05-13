import { useEffect, useRef } from 'react';
import type { ElementType, HTMLAttributes, ReactNode } from 'react';
import { revealOnScroll } from '../../animations/scrollReveals';

type Props = HTMLAttributes<HTMLElement> & {
  as?: ElementType;
  stagger?: boolean;
  children: ReactNode;
};

export function Reveal({ as: Tag = 'div', stagger = false, className = '', children, ...rest }: Props) {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    if (ref.current) return revealOnScroll(ref.current, stagger);
  }, [stagger]);
  return (
    <Tag ref={ref} className={className} {...rest}>
      {children}
    </Tag>
  );
}
