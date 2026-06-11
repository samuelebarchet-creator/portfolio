'use client';

import { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';

export default function Template({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.set(el, { opacity: 0, y: 14 });
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 0.45,
      ease: 'power2.out',
      clearProps: 'transform,opacity',
    });
  }, []);

  return <div ref={ref}>{children}</div>;
}
