'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: '4', suffix: '', label: 'Anni di esperienza' },
  { value: '4', suffix: 'M+', label: 'Visualizzazioni generate' },
  { value: '7', suffix: '', label: 'Brand collaborati' },
];

export default function StatsBar() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.fromTo(
      section.querySelectorAll('.stat-item'),
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: { trigger: section, start: 'top 80%', once: true },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="stats"
      className="w-full py-16 px-8 md:px-14"
      style={{
        borderTop: '1px solid rgba(61,92,53,0.12)',
        borderBottom: '1px solid rgba(61,92,53,0.12)',
      }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-3 gap-0">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className="stat-item flex flex-col items-center md:items-start md:px-10 gap-1"
            style={
              i < stats.length - 1
                ? { borderRight: '1px solid rgba(61,92,53,0.12)' }
                : undefined
            }
          >
            <div
              className="font-display font-black italic text-green leading-none"
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(3rem, 5vw, 5rem)',
              }}
            >
              {stat.value}{stat.suffix}
            </div>
            <p
              className="font-condensed uppercase text-ink-dim text-xs tracking-[0.2em] mt-1"
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
