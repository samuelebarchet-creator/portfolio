import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/* Register once at module level — safe to call multiple times */
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);

  /* Speed all animations to near-instant when user prefers reduced motion.
     Wrapped in try-catch: iOS 15/16 Safari has MediaQueryList bugs that can
     cause gsap.matchMedia() to throw and silently break the module. */
  try {
    gsap.matchMedia().add('(prefers-reduced-motion: reduce)', () => {
      gsap.globalTimeline.timeScale(100);
    });
    gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
      gsap.globalTimeline.timeScale(1);
    });
  } catch (_) {
    // Fallback: check directly without matchMedia
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      gsap.globalTimeline.timeScale(100);
    }
  }
}

export { gsap, ScrollTrigger };

/* ─── Animation presets ─────────────────────────────────────────────────── */

export const EASE_OUT = 'power3.out';
export const EASE_INOUT = 'power3.inOut';

/** Fade + slide up from below */
export function fadeUp(
  targets: gsap.TweenTarget,
  opts?: { delay?: number; stagger?: number; duration?: number; trigger?: Element | null }
) {
  const base = { duration: opts?.duration ?? 0.8, ease: EASE_OUT };
  const st = opts?.trigger
    ? { scrollTrigger: { trigger: opts.trigger, start: 'top 82%', once: true } }
    : {};

  return gsap.fromTo(
    targets,
    { y: 40, opacity: 0 },
    { y: 0, opacity: 1, stagger: opts?.stagger ?? 0, delay: opts?.delay ?? 0, ...base, ...st }
  );
}

/** Reveal from left (for section labels / ornaments) */
export function revealFromLeft(
  targets: gsap.TweenTarget,
  opts?: { delay?: number; trigger?: Element | null }
) {
  const st = opts?.trigger
    ? { scrollTrigger: { trigger: opts.trigger, start: 'top 85%', once: true } }
    : {};

  return gsap.fromTo(
    targets,
    { x: -24, opacity: 0 },
    { x: 0, opacity: 1, duration: 0.7, ease: EASE_OUT, delay: opts?.delay ?? 0, ...st }
  );
}

/** Scale + fade in (for cards, stats) */
export function scaleIn(
  targets: gsap.TweenTarget,
  opts?: { stagger?: number; trigger?: Element | null }
) {
  const st = opts?.trigger
    ? { scrollTrigger: { trigger: opts.trigger, start: 'top 80%', once: true } }
    : {};

  return gsap.fromTo(
    targets,
    { scale: 0.96, opacity: 0 },
    { scale: 1, opacity: 1, duration: 0.7, ease: EASE_OUT, stagger: opts?.stagger ?? 0.08, ...st }
  );
}

/** Horizontal line width reveal (for ornament lines, dividers) */
export function lineReveal(
  targets: gsap.TweenTarget,
  opts?: { trigger?: Element | null; delay?: number }
) {
  const st = opts?.trigger
    ? { scrollTrigger: { trigger: opts.trigger, start: 'top 88%', once: true } }
    : {};

  return gsap.fromTo(
    targets,
    { scaleX: 0, transformOrigin: 'left center' },
    { scaleX: 1, duration: 0.9, ease: EASE_INOUT, delay: opts?.delay ?? 0, ...st }
  );
}
