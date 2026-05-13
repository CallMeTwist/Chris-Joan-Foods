import { gsap, ensureGsap } from '../lib/gsap';

export function bentoParallax(scope: HTMLElement) {
  ensureGsap();
  const ctx = gsap.context(() => {
    gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
      const cards = scope.querySelectorAll<HTMLElement>('[data-bento-card]');
      cards.forEach((card, i) => {
        gsap.to(card, {
          y: -30 - i * 20,
          ease: 'none',
          scrollTrigger: { trigger: scope, start: 'top top', end: 'bottom top', scrub: 0.5 },
        });
      });
    });
  }, scope);
  return () => ctx.revert();
}
