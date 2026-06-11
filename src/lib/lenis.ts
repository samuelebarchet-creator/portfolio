import type Lenis from '@studio-freight/lenis';

/* Module-level singleton — set by SmoothScroll on mount */
let instance: Lenis | null = null;

export function setLenis(l: Lenis | null) {
  instance = l;
}

export function getLenis(): Lenis | null {
  return instance;
}

/** Programmatic smooth scroll to a CSS selector or pixel offset */
export function scrollTo(
  target: string | number | HTMLElement,
  options?: { offset?: number; duration?: number; immediate?: boolean }
) {
  if (!instance) return;
  instance.scrollTo(target as never, {
    offset: options?.offset ?? 0,
    duration: options?.duration ?? 1.2,
    immediate: options?.immediate ?? false,
  });
}
