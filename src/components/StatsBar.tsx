'use client';

import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { about } from '@/lib/about';

const stats = about.stats;

export default function StatsBar() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      section.querySelectorAll('.stat-item'),
      { y: 28, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.75,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: { trigger: section, start: 'top 82%', once: true },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="stats"
      className="w-full py-14 px-8 md:px-20 bg-bg-alt"
      style={{ borderBottom: '1px solid rgba(61,92,53,0.1)' }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-0">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className="stat-item flex flex-col items-center py-6 px-4 gap-1"
            style={
              i < stats.length - 1
                ? { borderRight: '1px solid rgba(61,92,53,0.1)' }
                : undefined
            }
          >
            <div
              className="font-display font-black italic text-green leading-none"
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(2.8rem, 4.5vw, 4.5rem)',
              }}
            >
              {stat.value}
            </div>
            <p
              className="font-condensed uppercase text-ink-faint text-xs tracking-[0.25em] mt-1 text-center"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
