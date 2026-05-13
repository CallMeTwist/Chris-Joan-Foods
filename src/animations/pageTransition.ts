import { gsap, ensureGsap } from '../lib/gsap';

export function pageEnter(el: HTMLElement) {
  ensureGsap();
  gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
    gsap.from(el, { y: 12, opacity: 0, duration: 0.5, ease: 'power3.out' });
  });
}
