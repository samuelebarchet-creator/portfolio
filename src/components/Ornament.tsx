'use client';

import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { gsap, ScrollTrigger } from '@/lib/gsap';

type OrnamentProps = {
  label: string;
  index?: string | number;
  className?: string;
  animate?: boolean;
};

/**
 * Section label with flanking lines — e.g. ─── 01 · Brand Strategy ───
 * Used to open each section.
 */
export default function Ornament({ label, index, className, animate = true }: OrnamentProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!animate || !ref.current) return;

    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      ref.current,
      { opacity: 0, y: 10 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 90%', once: true },
      }
    );
  }, [animate]);

  return (
    <div
      ref={ref}
      className={cn(
        'flex items-center gap-3 select-none',
        className
      )}
    >
      {/* Left line */}
      <span
        className="flex-1 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(61,92,53,0.25))' }}
      />

      {/* Label */}
      <span
        className="font-condensed uppercase text-ink-faint text-xs tracking-[0.45em] whitespace-nowrap"
        style={{ fontFamily: 'var(--font-barlow-condensed)' }}
      >
        {index !== undefined && (
          <span className="text-green-mid mr-2">
            {String(index).padStart(2, '0')}
          </span>
        )}
        {label}
      </span>

      {/* Right line */}
      <span
        className="flex-1 h-px"
        style={{ background: 'linear-gradient(90deg, rgba(61,92,53,0.25), transparent)' }}
      />
    </div>
  );
}
