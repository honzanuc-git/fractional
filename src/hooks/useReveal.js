import { useEffect } from 'react';

/**
 * Mounts a single IntersectionObserver that watches every element with the
 * `data-reveal` attribute and toggles `is-visible` when they enter the
 * viewport. Children with `data-reveal-stagger` (numeric, ms) get an
 * inline transition-delay so they cascade.
 *
 * Respects prefers-reduced-motion.
 */
export default function useReveal() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const targets = document.querySelectorAll('[data-reveal]');
    if (reduced) {
      targets.forEach((el) => el.classList.add('is-visible'));
      return undefined;
    }

    targets.forEach((el) => {
      const delay = el.dataset.revealStagger;
      if (delay) el.style.transitionDelay = `${delay}ms`;
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' },
    );

    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
