'use client';

import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { cn } from '@/lib/utils';

type Direction = 'up' | 'down' | 'left' | 'right' | 'fade';

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  direction?: Direction;
  delay?: number;
  duration?: number;
  distance?: number;
  /** Apply stagger to direct children instead of the wrapper */
  staggerChildren?: boolean;
  stagger?: number;
  start?: string;
  once?: boolean;
};

const ORIGINS: Record<Direction, { x?: number; y?: number }> = {
  up:    { y: 40 },
  down:  { y: -40 },
  left:  { x: -40 },
  right: { x: 40 },
  fade:  {},
};

/**
 * Drop-in scroll reveal wrapper.
 * Wraps children in a div and animates them into view on scroll.
 */
export default function ScrollReveal({
  children,
  className,
  direction = 'up',
  delay = 0,
  duration = 0.8,
  distance,
  staggerChildren = false,
  stagger = 0.1,
  start = 'top 82%',
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.registerPlugin(ScrollTrigger);

    const origin = ORIGINS[direction];
    const from: gsap.TweenVars = {
      opacity: 0,
      ...(origin.y !== undefined ? { y: distance ?? origin.y } : {}),
      ...(origin.x !== undefined ? { x: distance ?? origin.x } : {}),
    };
    const to: gsap.TweenVars = {
      opacity: 1,
      x: 0,
      y: 0,
      duration,
      delay,
      ease: 'power3.out',
      scrollTrigger: { trigger: el, start, once },
    };

    const targets = staggerChildren
      ? el.children
      : el;

    if (staggerChildren) {
      to.stagger = stagger;
    }

    gsap.fromTo(targets, from, to);
  }, [direction, delay, duration, distance, staggerChildren, stagger, start, once]);

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
}
