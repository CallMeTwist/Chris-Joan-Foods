import { gsap, ensureGsap } from '../lib/gsap';

export function heroIntro(scope: HTMLElement) {
  ensureGsap();
  const ctx = gsap.context(() => {
    gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
      const title = scope.querySelector<HTMLElement>('[data-hero-title]');
      const bentoCards = scope.querySelectorAll<HTMLElement>('[data-bento-card]');

      if (title) {
        gsap.from(title, {
          y: 50, opacity: 0, duration: 1.1, ease: 'expo.out',
        });
      }
      if (bentoCards.length) {
        gsap.from(bentoCards, {
          y: 60, opacity: 0, rotate: '+=4', duration: 1.0, stagger: 0.12, ease: 'power3.out', delay: 0.3,
        });
      }
    });
  }, scope);
  return () => ctx.revert();
}
