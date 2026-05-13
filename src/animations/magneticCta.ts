import { gsap, ensureGsap } from '../lib/gsap';

export function magneticCtas(scope: HTMLElement = document.body) {
  ensureGsap();
  const cleanups: Array<() => void> = [];
  gsap.matchMedia().add('(prefers-reduced-motion: no-preference) and (pointer: fine)', () => {
    const els = scope.querySelectorAll<HTMLElement>('[data-magnetic]');
    els.forEach((el) => {
      const onMove = (e: MouseEvent) => {
        const r = el.getBoundingClientRect();
        const x = e.clientX - (r.left + r.width / 2);
        const y = e.clientY - (r.top + r.height / 2);
        gsap.to(el, { x: x * 0.18, y: y * 0.25, duration: 0.45, ease: 'power3.out' });
      };
      const onLeave = () => gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.5)' });
      el.addEventListener('mousemove', onMove);
      el.addEventListener('mouseleave', onLeave);
      cleanups.push(() => {
        el.removeEventListener('mousemove', onMove);
        el.removeEventListener('mouseleave', onLeave);
      });
    });
  });
  return () => cleanups.forEach((c) => c());
}
