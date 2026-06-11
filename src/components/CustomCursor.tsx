'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const TRAIL_LENGTH = 12;

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    const trail = trailRefs.current;

    /* Hide default cursor on desktop */
    document.documentElement.style.cursor = 'none';

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ringPos = { x: pos.x, y: pos.y };

    /* Trail positions buffer */
    const history: { x: number; y: number }[] = Array.from(
      { length: TRAIL_LENGTH },
      () => ({ x: pos.x, y: pos.y })
    );

    const onMove = (e: MouseEvent) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
    };
    window.addEventListener('mousemove', onMove);

    /* Animate with gsap ticker */
    const tick = () => {
      /* Dot: snaps instantly */
      gsap.set(dot, { x: pos.x - 4, y: pos.y - 4 });

      /* Ring: lags behind */
      ringPos.x += (pos.x - ringPos.x) * 0.12;
      ringPos.y += (pos.y - ringPos.y) * 0.12;
      gsap.set(ring, { x: ringPos.x - 20, y: ringPos.y - 20 });

      /* Trail: each point follows the previous */
      history.unshift({ x: pos.x, y: pos.y });
      history.length = TRAIL_LENGTH;

      trail.forEach((el, i) => {
        if (!el) return;
        const p = history[i];
        const scale = 1 - i / TRAIL_LENGTH;
        const alpha = (1 - i / TRAIL_LENGTH) * 0.5;
        gsap.set(el, {
          x: p.x - 3,
          y: p.y - 3,
          scale,
          opacity: alpha,
        });
      });
    };

    gsap.ticker.add(tick);

    /* Scale ring on clickable elements */
    const onEnterLink = () => {
      gsap.to(ring, { scale: 1.8, borderColor: '#C8A96E', opacity: 0.9, duration: 0.3 });
      gsap.to(dot, { scale: 0, duration: 0.2 });
    };
    const onLeaveLink = () => {
      gsap.to(ring, { scale: 1, borderColor: 'rgba(200,169,110,0.6)', opacity: 0.7, duration: 0.3 });
      gsap.to(dot, { scale: 1, duration: 0.2 });
    };

    const addListeners = () => {
      document.querySelectorAll('a, button, [data-cursor]').forEach((el) => {
        el.addEventListener('mouseenter', onEnterLink);
        el.addEventListener('mouseleave', onLeaveLink);
      });
    };
    addListeners();

    /* Re-scan on DOM mutations (e.g. after hydration) */
    const observer = new MutationObserver(addListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.documentElement.style.cursor = '';
      window.removeEventListener('mousemove', onMove);
      gsap.ticker.remove(tick);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full bg-gold"
        style={{ width: 8, height: 8 }}
      />

      {/* Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none rounded-full"
        style={{
          width: 40,
          height: 40,
          border: '1px solid rgba(200,169,110,0.6)',
          opacity: 0.7,
        }}
      />

      {/* Trail */}
      {Array.from({ length: TRAIL_LENGTH }).map((_, i) => (
        <div
          key={i}
          ref={(el) => { trailRefs.current[i] = el; }}
          className="fixed top-0 left-0 z-[9997] pointer-events-none rounded-full bg-gold"
          style={{ width: 6, height: 6 }}
        />
      ))}
    </>
  );
}
