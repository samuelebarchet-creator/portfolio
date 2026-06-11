'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrambleText } from '@/components/ui/scramble-text';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  'Brand Identity',
  'Art Direction',
  'Interactive Design',
  'Three.js / WebGL',
  'Motion Design',
  'Creative Strategy',
  'Typography',
  'UI / UX',
  'React · Next.js',
  'Campaign Design',
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const monogramRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    /* Monogram ornament rotation */
    gsap.to(monogramRef.current, {
      rotation: 360,
      duration: 30,
      ease: 'none',
      repeat: -1,
    });

    /* Left column */
    gsap.fromTo(
      leftRef.current,
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: { trigger: section, start: 'top 70%', once: true },
      }
    );

    /* Right column — stagger children */
    gsap.fromTo(
      rightRef.current!.children,
      { y: 35, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.75,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: section, start: 'top 70%', once: true },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="w-full py-28 px-8 md:px-14"
      style={{ borderTop: '1px solid rgba(200,169,110,0.12)' }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

        {/* ── Left: monogram visual ── */}
        <div
          ref={leftRef}
          className="relative flex items-center justify-center min-h-[420px]"
        >
          {/* Outer decorative ring */}
          <div
            className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full"
            style={{ border: '1px solid rgba(200,169,110,0.18)' }}
          />
          <div
            className="absolute w-56 h-56 md:w-72 md:h-72 rounded-full"
            style={{ border: '1px solid rgba(200,169,110,0.10)' }}
          />

          {/* Rotating ornament ring */}
          <div
            ref={monogramRef}
            className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full"
            style={{ border: '1px dashed rgba(200,169,110,0.22)' }}
          >
            {/* Cardinal marks */}
            {[0, 90, 180, 270].map((deg) => (
              <div
                key={deg}
                className="absolute w-1.5 h-1.5 bg-gold-dim rounded-full"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `rotate(${deg}deg) translateX(calc(50% - 3px)) translateY(-50%)`,
                }}
              />
            ))}
          </div>

          {/* Monogram "S" */}
          <div className="relative z-10 flex flex-col items-center gap-3">
            <span
              className="font-display font-black italic text-gold select-none"
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(6rem, 12vw, 10rem)',
                lineHeight: 1,
                textShadow: '0 0 80px rgba(200,169,110,0.25)',
              }}
            >
              S
            </span>
            <div
              className="w-16 h-px"
              style={{ background: 'linear-gradient(90deg, transparent, #C8A96E, transparent)' }}
            />
            <span
              className="font-condensed uppercase text-gold-dim text-xs tracking-[0.45em]"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              Barchet
            </span>
          </div>

          {/* Corner brackets */}
          {[
            'top-4 left-4 border-t border-l',
            'top-4 right-4 border-t border-r',
            'bottom-4 left-4 border-b border-l',
            'bottom-4 right-4 border-b border-r',
          ].map((cls) => (
            <div
              key={cls}
              className={`absolute w-6 h-6 ${cls}`}
              style={{ borderColor: 'rgba(200,169,110,0.35)' }}
            />
          ))}
        </div>

        {/* ── Right: bio + skills ── */}
        <div ref={rightRef} className="flex flex-col gap-7">
          <div>
            <p
              className="text-gold-dim uppercase tracking-[0.4em] text-xs font-condensed mb-3"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              About me
            </p>
            <h2
              className="font-display font-black italic text-parchment leading-tight cursor-default"
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              }}
            >
              <ScrambleText text="Shaping brands at the edge of art and code" />
            </h2>
          </div>

          <p
            className="text-text-dim leading-relaxed text-base"
            style={{ fontFamily: 'var(--font-barlow)' }}
          >
            I'm Samuele — a creative developer and art director based between Milan and the digital void.
            For over seven years I've been obsessing over the space where visual culture collides with
            interactive technology: building identities that feel alive, campaigns that move people, and
            interfaces that don't look like everything else on the internet.
          </p>

          <p
            className="text-text-dim leading-relaxed text-base"
            style={{ fontFamily: 'var(--font-barlow)' }}
          >
            My approach is rooted in storytelling — every pixel carries intent. Whether I'm crafting a
            complete brand universe for a fashion house or engineering a WebGL experience for a product
            launch, I bring the same obsessive attention to craft and the same hunger for the unexpected.
          </p>

          {/* Divider */}
          <div
            className="w-full h-px"
            style={{ background: 'linear-gradient(90deg, rgba(200,169,110,0.4), transparent)' }}
          />

          {/* Skill tags */}
          <div>
            <p
              className="font-condensed uppercase text-gold-dim text-xs tracking-[0.3em] mb-4"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              Disciplines
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-xs font-condensed uppercase tracking-[0.15em] text-text-dim"
                  style={{
                    fontFamily: 'var(--font-barlow-condensed)',
                    border: '1px solid rgba(200,169,110,0.25)',
                    background: 'rgba(200,169,110,0.04)',
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
