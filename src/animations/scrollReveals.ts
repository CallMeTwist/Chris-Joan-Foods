import { gsap, ScrollTrigger, ensureGsap } from '../lib/gsap';

export function revealOnScroll(el: HTMLElement, stagger: boolean) {
  ensureGsap();
  let cleanup: (() => void) | null = null;
  const ctx = gsap.context(() => {
    gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
      const targets = stagger ? el.children : el;
      gsap.from(targets, {
        y: 40,
        opacity: 0,
        duration: 0.85,
        ease: 'power3.out',
        stagger: stagger ? 0.08 : 0,
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
      });
    });
  }, el);
  cleanup = () => ctx.revert();
  return () => cleanup?.();
}

export function refreshScrollTriggers() {
  ScrollTrigger.refresh();
}
