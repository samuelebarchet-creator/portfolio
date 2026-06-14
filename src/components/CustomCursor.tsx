'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from '@/lib/gsap';
import { useMousePositionRef } from '@/components/hooks/use-mouse-position-ref';

const DOT_SIZE = 8;
const RING_SIZE = 40;

export default function CustomCursor() {
  const positionRef = useMousePositionRef();
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  /* Only mount the custom cursor for real pointing devices (mouse/trackpad)
     and when motion is allowed. Touch devices keep the native cursor and skip
     the per-frame rAF loop + global `cursor: none` entirely. */
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    setEnabled(
      window.matchMedia(
        '(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)'
      ).matches
    );
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined' || !enabled) return;
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    document.documentElement.style.cursor = 'none';

    /* Start offscreen, then follow: dot snaps fast, ring trails for the
       elastic feel (replaces the two framer-motion springs). */
    gsap.set([dot, ring], { x: -100, y: -100 });
    const dotX = gsap.quickTo(dot, 'x', { duration: 0.12, ease: 'power3' });
    const dotY = gsap.quickTo(dot, 'y', { duration: 0.12, ease: 'power3' });
    const ringX = gsap.quickTo(ring, 'x', { duration: 0.5, ease: 'power3' });
    const ringY = gsap.quickTo(ring, 'y', { duration: 0.5, ease: 'power3' });

    let raf: number;
    const tick = () => {
      const { x, y } = positionRef.current;
      dotX(x - DOT_SIZE / 2);
      dotY(y - DOT_SIZE / 2);
      ringX(x - RING_SIZE / 2);
      ringY(y - RING_SIZE / 2);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    /* Hover state on interactive elements */
    const onEnter = () => {
      gsap.to(dot, { scale: 0, duration: 0.15, overwrite: 'auto' });
      gsap.to(ring, {
        scale: 1.8,
        borderColor: '#3D5C35',
        opacity: 0.9,
        duration: 0.3,
        ease: 'power3',
        overwrite: 'auto',
      });
    };
    const onLeave = () => {
      gsap.to(dot, { scale: 1, duration: 0.15, overwrite: 'auto' });
      gsap.to(ring, {
        scale: 1,
        borderColor: 'rgba(61,92,53,0.5)',
        opacity: 0.7,
        duration: 0.3,
        ease: 'power3',
        overwrite: 'auto',
      });
    };

    const addListeners = () => {
      document.querySelectorAll('a, button, [data-cursor]').forEach((el) => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    };
    addListeners();

    const observer = new MutationObserver(addListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.documentElement.style.cursor = '';
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, [enabled, positionRef]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[2147483647] pointer-events-none rounded-full"
        style={{ width: DOT_SIZE, height: DOT_SIZE, background: 'var(--green)' }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[2147483646] pointer-events-none rounded-full"
        style={{
          width: RING_SIZE,
          height: RING_SIZE,
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: 'rgba(61,92,53,0.5)',
          opacity: 0.7,
        }}
      />
    </>
  );
}
