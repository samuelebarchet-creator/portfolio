'use client';

import React, { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';

function cx(...parts: Array<string | undefined | false | null>): string {
  return parts.filter(Boolean).join(' ');
}

export interface StorySectionProps {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  'aria-label'?: string;
}

/**
 * A full-screen panel inside <StoryScroll>. As you scroll, the next panel
 * rotates up from the bottom-left and straightens while the previous one
 * stays pinned underneath — a stacking, editorial reveal.
 */
export const StorySection: React.FC<StorySectionProps> = ({
  className,
  style = {},
  children,
  'aria-label': ariaLabel,
}) => (
  <section
    data-story-section
    aria-label={ariaLabel}
    className={cx('relative min-h-screen w-full overflow-hidden', className)}
  >
    <div
      data-story-inner
      className={cx(
        'story-inner relative flex min-h-screen w-full flex-col justify-between gap-6',
        'px-8 md:px-20 pt-28 md:pt-32 pb-12 md:pb-16 will-change-transform',
      )}
      style={{ transformOrigin: 'bottom left', ...style }}
    >
      {children}
    </div>
  </section>
);

export interface StoryScrollProps {
  children: React.ReactNode;
  className?: string;
  /** Initial rotation (deg) of each incoming panel. Lower = subtler. */
  rotation?: number;
  'aria-label'?: string;
}

/**
 * Scroll-driven stacking-panels container (GSAP ScrollTrigger pin + rotate).
 * Uses the repo's shared `@/lib/gsap` (Lenis-integrated) — no extra deps.
 * On touch / reduced-motion it degrades to a plain stacked scroll.
 */
const StoryScroll: React.FC<StoryScrollProps> = ({
  children,
  className,
  rotation = 18,
  'aria-label': ariaLabel = 'Story scroll',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    /* Pin/rotate only on desktop pointers without reduced-motion. Elsewhere
       the panels simply stack and scroll normally (lighter, no touch stutter). */
    const enabled =
      !!window.matchMedia &&
      window.matchMedia('(min-width: 768px) and (prefers-reduced-motion: no-preference)').matches;
    if (!enabled) return;

    const triggers: ScrollTrigger[] = [];

    const ctx = gsap.context(() => {
      const sections = Array.from(
        root.querySelectorAll<HTMLElement>('[data-story-section]'),
      );
      if (sections.length === 0) return;

      sections.forEach((section, i) => {
        gsap.set(section, { zIndex: i + 1 });

        const inner = section.querySelector<HTMLElement>('.story-inner');

        if (i > 0 && inner) {
          gsap.set(inner, { rotation, transformOrigin: 'bottom left' });
          const tween = gsap.to(inner, {
            rotation: 0,
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              start: 'top bottom',
              end: 'top 25%',
              scrub: true,
            },
          });
          if (tween.scrollTrigger) triggers.push(tween.scrollTrigger);
        }

        if (i < sections.length - 1) {
          triggers.push(
            ScrollTrigger.create({
              trigger: section,
              start: 'bottom bottom',
              end: 'bottom top',
              pin: true,
              pinSpacing: false,
            }),
          );
        }
      });

      ScrollTrigger.refresh();
    }, root);

    return () => {
      triggers.forEach((t) => t.kill());
      ctx.revert();
    };
  }, [rotation]);

  return (
    <div
      ref={containerRef}
      aria-label={ariaLabel}
      className={cx('w-full overflow-x-hidden', className)}
    >
      {children}
    </div>
  );
};

export default StoryScroll;
