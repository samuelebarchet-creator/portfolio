'use client';

import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { about } from '@/lib/about';
import Ornament from '@/components/Ornament';

export default function About() {
  const sectionRef  = useRef<HTMLDivElement>(null);
  const leftRef     = useRef<HTMLDivElement>(null);
  const rightRef    = useRef<HTMLDivElement>(null);
  const monogramRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.registerPlugin(ScrollTrigger);

    /* Slow monogram rotation */
    gsap.to(monogramRef.current, {
      rotation: 360,
      duration: 40,
      ease: 'none',
      repeat: -1,
    });

    /* Left slide in */
    gsap.fromTo(
      leftRef.current,
      { x: -48, opacity: 0 },
      {
        x: 0, opacity: 1, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: section, start: 'top 72%', once: true },
      }
    );

    /* Right stagger */
    gsap.fromTo(
      rightRef.current!.children,
      { y: 32, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.75, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: section, start: 'top 72%', once: true },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="w-full py-28 px-6 md:px-14"
      style={{ borderTop: '1px solid rgba(61,92,53,0.1)' }}
    >
      <div className="max-w-6xl mx-auto">
        <Ornament index="03" label="Chi sono" className="mb-16" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ── Left: decorative monogram ── */}
          <div
            ref={leftRef}
            className="relative flex items-center justify-center min-h-[400px]"
          >
            {/* Static rings */}
            <div
              className="absolute w-72 h-72 md:w-[22rem] md:h-[22rem] rounded-full"
              style={{ border: '1px solid rgba(61,92,53,0.1)' }}
            />
            <div
              className="absolute w-52 h-52 md:w-64 md:h-64 rounded-full"
              style={{ border: '1px solid rgba(61,92,53,0.07)' }}
            />

            {/* Rotating dashed ring */}
            <div
              ref={monogramRef}
              className="absolute w-60 h-60 md:w-72 md:h-72 rounded-full"
              style={{ border: '1px dashed rgba(61,92,53,0.18)' }}
            >
              {[0, 90, 180, 270].map((deg) => (
                <span
                  key={deg}
                  className="absolute w-1.5 h-1.5 rounded-full bg-green-mid"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `rotate(${deg}deg) translateX(calc(160% - 3px)) translateY(-50%)`,
                  }}
                />
              ))}
            </div>

            {/* Monogram */}
            <div className="relative z-10 flex flex-col items-center gap-2 select-none">
              <span
                className="font-display font-black italic text-green"
                style={{
                  fontFamily: 'var(--font-playfair)',
                  fontSize: 'clamp(7rem, 14vw, 11rem)',
                  lineHeight: 1,
                }}
              >
                S
              </span>
              <span
                className="w-10 h-px block"
                style={{ background: 'rgba(61,92,53,0.3)' }}
              />
              <span
                className="font-condensed uppercase text-ink-faint text-xs tracking-[0.5em]"
                style={{ fontFamily: 'var(--font-barlow-condensed)' }}
              >
                Barchet
              </span>
            </div>

            {/* Corner brackets */}
            {['top-4 left-4 border-t border-l', 'top-4 right-4 border-t border-r',
              'bottom-4 left-4 border-b border-l', 'bottom-4 right-4 border-b border-r'].map((cls) => (
              <div
                key={cls}
                className={`absolute w-5 h-5 ${cls}`}
                style={{ borderColor: 'rgba(61,92,53,0.2)' }}
              />
            ))}
          </div>

          {/* ── Right: bio + values + skills ── */}
          <div ref={rightRef} className="flex flex-col gap-7">
            <div>
              <h2
                className="font-display font-black italic text-ink leading-tight"
                style={{
                  fontFamily: 'var(--font-playfair)',
                  fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
                }}
              >
                {about.headline}
              </h2>
            </div>

            {about.bio.map((paragraph, i) => (
              <p
                key={i}
                className="text-ink-dim leading-relaxed"
                style={{ fontFamily: 'var(--font-barlow)', fontSize: '1.05rem' }}
              >
                {paragraph}
              </p>
            ))}

            {/* Values */}
            <div
              className="flex flex-col gap-4 pt-2 mt-2"
              style={{ borderTop: '1px solid rgba(61,92,53,0.1)' }}
            >
              {about.values.map((v) => (
                <div key={v.label} className="flex gap-4">
                  <span
                    className="mt-1 w-1 h-1 rounded-full bg-green shrink-0"
                    aria-hidden
                  />
                  <div>
                    <p
                      className="font-condensed uppercase text-green text-xs tracking-[0.3em] mb-1"
                      style={{ fontFamily: 'var(--font-barlow-condensed)' }}
                    >
                      {v.label}
                    </p>
                    <p
                      className="text-ink-dim text-sm leading-relaxed"
                      style={{ fontFamily: 'var(--font-barlow)' }}
                    >
                      {v.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Skill tags */}
            <div>
              <p
                className="font-condensed uppercase text-ink-faint text-xs tracking-[0.35em] mb-3"
                style={{ fontFamily: 'var(--font-barlow-condensed)' }}
              >
                Competenze
              </p>
              <div className="flex flex-wrap gap-2">
                {about.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 font-condensed text-xs uppercase tracking-[0.15em] text-ink-dim"
                    style={{
                      fontFamily: 'var(--font-barlow-condensed)',
                      border: '1px solid rgba(61,92,53,0.18)',
                      background: 'rgba(61,92,53,0.03)',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
