import { gsap, ScrollTrigger, ensureGsap } from '../lib/gsap';

export function leaderReveal(scope: HTMLElement) {
  ensureGsap();
  const ctx = gsap.context(() => {
    gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
      const frame = scope.querySelector<HTMLElement>('[data-leader-frame]');
      const portrait = scope.querySelector<HTMLElement>('[data-leader-portrait]');
      const ring = scope.querySelector<HTMLElement>('[data-leader-ring]');
      const blob = scope.querySelector<HTMLElement>('[data-leader-blob]');
      const badges = scope.querySelectorAll<HTMLElement>('[data-leader-badge]');
      const heading = scope.querySelector<HTMLElement>('[data-leader-heading]');
      const text = scope.querySelectorAll<HTMLElement>('[data-leader-line]');
      const signature = scope.querySelector<HTMLElement>('[data-leader-signature]');

      const tl = gsap.timeline({
        scrollTrigger: { trigger: scope, start: 'top 75%', once: true },
      });

      if (blob) {
        tl.from(blob, { scale: 0.4, opacity: 0, duration: 1.1, ease: 'expo.out' }, 0);
      }
      if (ring) {
        tl.from(ring, { scale: 0.6, opacity: 0, rotate: -30, duration: 1.2, ease: 'expo.out' }, 0.05);
      }
      if (frame) {
        tl.from(frame, {
          clipPath: 'inset(100% 0% 0% 0%)',
          duration: 1.1,
          ease: 'expo.out',
        }, 0.15);
      }
      if (portrait) {
        tl.from(portrait, { scale: 1.18, duration: 1.4, ease: 'power3.out' }, 0.15);
      }
      if (heading) {
        tl.from(heading, { y: 40, opacity: 0, duration: 0.9, ease: 'power3.out' }, 0.35);
      }
      if (text.length) {
        tl.from(text, { y: 24, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power2.out' }, 0.5);
      }
      if (badges.length) {
        tl.from(badges, {
          y: 18, opacity: 0, scale: 0.8, duration: 0.7, stagger: 0.12, ease: 'back.out(1.6)',
        }, 0.6);
      }
      if (signature) {
        tl.from(signature, { x: -30, opacity: 0, duration: 0.9, ease: 'power3.out' }, 0.8);
      }

      if (portrait) {
        gsap.to(portrait, {
          yPercent: -8,
          ease: 'none',
          scrollTrigger: {
            trigger: scope,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.6,
          },
        });
      }
      if (blob) {
        gsap.to(blob, {
          yPercent: 12,
          ease: 'none',
          scrollTrigger: {
            trigger: scope,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.8,
          },
        });
      }

      ScrollTrigger.refresh();
    });
  }, scope);
  return () => ctx.revert();
}
