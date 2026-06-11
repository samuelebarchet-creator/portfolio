'use client';

import { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';
import { FloatingPaths } from '@/components/ui/background-paths';

export default function Hero() {
  const sectionRef  = useRef<HTMLElement>(null);
  const nameRef     = useRef<HTMLHeadingElement>(null);
  const labelRef    = useRef<HTMLParagraphElement>(null);
  const subRef      = useRef<HTMLParagraphElement>(null);
  const ctaRef      = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const label    = labelRef.current;
    const name     = nameRef.current;
    const subtitle = subRef.current;
    const cta      = ctaRef.current;
    if (!label || !name || !subtitle || !cta) return;

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(label, { y: -16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, 0.2);

    import('split-type').then(({ default: SplitType }) => {
      const split = new SplitType(name, { types: 'chars' });

      gsap.fromTo(
        split.chars,
        { y: 80, opacity: 0, rotateX: -40 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 0.75,
          stagger: 0.03,
          ease: 'power3.out',
          delay: 0.35,
          onComplete: () => split.revert(),
        }
      );
    });

    tl.fromTo(subtitle, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, 1.1);
    tl.fromTo(cta,      { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, 1.35);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-bg"
      style={{ minHeight: '100svh' }}
    >
      {/* Animated botanical paths — two mirrored layers for depth */}
      <FloatingPaths position={1} />
      <FloatingPaths position={-1} />

      {/* Vignette — softens path edges near the content */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 75% 75% at 50% 50%, transparent 35%, rgba(245,240,232,0.75) 100%)',
        }}
        aria-hidden
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full min-h-[100svh] px-8 md:px-20 pt-24 pb-16 max-w-6xl mx-auto">

        {/* Role label */}
        <p
          ref={labelRef}
          className="font-condensed uppercase text-green text-xs tracking-[0.5em] mb-8 opacity-0"
          style={{ fontFamily: 'var(--font-barlow-condensed)' }}
        >
          Brand &amp; Digital Strategist
        </p>

        {/* Name */}
        <h1
          ref={nameRef}
          className="font-display font-black italic text-ink leading-[0.88] overflow-hidden"
          style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: 'clamp(4.5rem, 12vw, 13rem)',
            letterSpacing: '-0.03em',
          }}
        >
          Samuele<br />Barchet
        </h1>

        {/* Divider */}
        <div
          className="my-8 h-px w-24"
          style={{ background: 'rgba(61,92,53,0.3)' }}
        />

        {/* Subtitle + CTA */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 max-w-4xl">
          <p
            ref={subRef}
            className="text-ink-dim font-body leading-relaxed opacity-0"
            style={{
              fontFamily: 'var(--font-barlow)',
              fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
              maxWidth: '36ch',
            }}
          >
            Costruisco identità di marca e strategie digitali che generano risultati misurabili.
          </p>

          <div ref={ctaRef} className="flex items-center gap-4 shrink-0 opacity-0">
            <a
              href="/#collaborazioni"
              className="inline-flex items-center gap-2 px-7 py-3 bg-green text-bg font-condensed uppercase text-sm tracking-[0.2em] hover:bg-green-mid transition-colors duration-300"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              Scopri i lavori
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="/#contact"
              className="font-condensed uppercase text-ink-dim text-sm tracking-[0.2em] hover:text-ink transition-colors duration-300 underline underline-offset-4 decoration-green/40"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              Scrivimi
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <div
          className="w-px origin-top"
          style={{
            height: 48,
            background: 'var(--green)',
            animation: 'scaleY 1.8s ease-in-out infinite alternate',
          }}
        />
      </div>
    </section>
  );
}
