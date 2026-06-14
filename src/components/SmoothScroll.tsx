'use client';

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { setLenis } from '@/lib/lenis';

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    /* Skip smooth-scroll on touch devices and for users who prefer reduced
       motion: native scrolling is lighter and avoids the "chasing" feel on
       low-power hardware. No one reads getLenis()/scrollTo() externally, so a
       missing instance is safe. */
    if (typeof window !== 'undefined' && window.matchMedia) {
      const allowed = window.matchMedia(
        '(pointer: fine) and (prefers-reduced-motion: no-preference)'
      ).matches;
      if (!allowed) return;
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    setLenis(lenis);

    lenis.on('scroll', ScrollTrigger.update);

    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      setLenis(null);
      gsap.ticker.remove(tick);
    };
  }, []);

  return <>{children}</>;
}
