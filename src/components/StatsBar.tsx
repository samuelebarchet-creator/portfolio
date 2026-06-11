'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 7, suffix: '+', label: 'Years of experience' },
  { value: 40, suffix: '+', label: 'Brands collaborated' },
  { value: 12, suffix: '', label: 'Countries reached' },
  { value: 3, suffix: 'M+', label: 'People touched' },
];

export default function StatsBar() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const numbersRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    /* Animate each counter */
    numbersRef.current.forEach((el, i) => {
      if (!el) return;
      const target = stats[i].value;
      const obj = { val: 0 };

      gsap.to(obj, {
        val: target,
        duration: 1.6,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          once: true,
        },
        onUpdate() {
          el.textContent = Math.round(obj.val).toString();
        },
      });
    });

    /* Section fade-in */
    gsap.fromTo(
      section.querySelectorAll('.stat-item'),
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          once: true,
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="stats"
      className="w-full py-16 px-8 md:px-14"
      style={{ borderTop: '1px solid rgba(200,169,110,0.15)', borderBottom: '1px solid rgba(200,169,110,0.15)' }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-0">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className="stat-item flex flex-col items-center md:items-start md:px-10 gap-1"
            style={
              i < stats.length - 1
                ? { borderRight: '1px solid rgba(200,169,110,0.12)' }
                : undefined
            }
          >
            <div
              className="font-display font-black italic text-gold leading-none"
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(3rem, 5vw, 5rem)',
              }}
            >
              <span
                ref={(el) => { numbersRef.current[i] = el; }}
              >
                0
              </span>
              <span>{stat.suffix}</span>
            </div>
            <p
              className="font-condensed uppercase text-text-dim text-xs tracking-[0.2em] mt-1"
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
