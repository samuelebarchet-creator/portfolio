'use client';

import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';

const ROW_1 = [
  'Brand Strategy',
  'Content Strategy',
  'Social Media Management',
  'SEO & Local SEO',
  'Meta Ads',
  'Email Marketing',
  'Brand Identity',
  'Copywriting',
];

const ROW_2 = [
  'Posizionamento',
  'Go-to-Market',
  'Analytics & Reporting',
  'Community Management',
  'Digital Marketing',
  'Brand Positioning',
  'Piano Editoriale',
  'Tone of Voice',
];

/* Diamond separator between items */
const SEP = (
  <span
    className="mx-6 text-green-mid select-none shrink-0"
    aria-hidden
  >
    ✦
  </span>
);

function MarqueeRow({
  items,
  reverse = false,
  speed = 40,
}: {
  items: string[];
  reverse?: boolean;
  speed?: number;
}) {
  /* Duplicate items to fill the track seamlessly */
  const repeated = [...items, ...items];

  return (
    <div className="overflow-hidden py-3">
      <div
        className="flex items-center whitespace-nowrap"
        style={{
          animation: `${reverse ? 'marquee-reverse' : 'marquee'} ${speed}s linear infinite`,
          willChange: 'transform',
        }}
      >
        {repeated.map((item, i) => (
          <span key={i} className="flex items-center shrink-0">
            <span
              className="font-condensed uppercase tracking-[0.3em] text-sm"
              style={{
                fontFamily: 'var(--font-barlow-condensed)',
                color: i % 4 === 0 ? 'var(--green)' : 'var(--ink-dim)',
              }}
            >
              {item}
            </span>
            {SEP}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function WorkMarquee() {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      el,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.9,
        ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
      }
    );
  }, []);

  return (
    <section
      ref={wrapRef}
      className="w-full py-2 overflow-hidden"
      style={{
        borderTop: '1px solid rgba(61,92,53,0.1)',
        borderBottom: '1px solid rgba(61,92,53,0.1)',
        background: 'rgba(61,92,53,0.03)',
      }}
      aria-hidden
    >
      <MarqueeRow items={ROW_1} speed={45} />
      <div style={{ borderTop: '1px solid rgba(61,92,53,0.08)' }} />
      <MarqueeRow items={ROW_2} reverse speed={38} />
    </section>
  );
}
