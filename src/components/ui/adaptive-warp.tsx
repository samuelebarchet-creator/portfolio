'use client';

import { ComponentProps, useEffect, useRef, useState } from 'react';
import { Warp } from '@paper-design/shaders-react';

/* Phones would otherwise render at up to 3x density. On a gradient this soft the
   lower resolution is invisible, and each pixel costs fewer swirl iterations. */
const MOBILE_MAX_PIXELS = 300_000;
const MOBILE_SWIRL_ITERATIONS = 6;

/* Past this average the device can't keep up: stop animating, keep the graphic */
const SLOW_FRAME_MS = 40;
const SAMPLE_FRAMES = 60;
const WARMUP_FRAMES = 30;

// Shared across shaders, so a section reached later doesn't repeat the slow start
let stillForSession = false;

function prefersStill() {
  const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
  return !!connection?.saveData || window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export default function AdaptiveWarp({ speed, swirlIterations, ...props }: ComponentProps<typeof Warp>) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [still, setStill] = useState(false);

  useEffect(() => {
    setMobile(!window.matchMedia('(min-width: 768px)').matches);
    if (prefersStill()) stillForSession = true;
    setStill(stillForSession);
  }, []);

  // Only keep the WebGL shader mounted while it is near the viewport
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: '200px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView || still) return;
    let raf = 0;
    let frames = 0;
    let total = 0;
    let previous = performance.now();

    const tick = (now: number) => {
      const delta = now - previous;
      previous = now;
      frames += 1;
      // Long gaps are a hidden tab or a paused page, not a slow GPU
      if (frames > WARMUP_FRAMES && delta < 250) total += delta;
      if (frames < WARMUP_FRAMES + SAMPLE_FRAMES) {
        raf = requestAnimationFrame(tick);
      } else if (total / SAMPLE_FRAMES > SLOW_FRAME_MS) {
        stillForSession = true;
        setStill(true);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, still]);

  return (
    <div ref={ref} style={{ width: '100%', height: '100%' }}>
      {inView && (
        <div className="shader-enter">
          <Warp
            {...props}
            style={{ width: '100%', height: '100%' }}
            speed={still ? 0 : speed}
            swirlIterations={mobile ? Math.min(swirlIterations ?? MOBILE_SWIRL_ITERATIONS, MOBILE_SWIRL_ITERATIONS) : swirlIterations}
            minPixelRatio={mobile ? 1 : undefined}
            maxPixelCount={mobile ? MOBILE_MAX_PIXELS : undefined}
          />
        </div>
      )}
    </div>
  );
}
