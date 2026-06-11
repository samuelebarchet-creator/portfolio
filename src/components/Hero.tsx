'use client';

import { useEffect, useRef, Suspense } from 'react';
import { gsap } from '@/lib/gsap';
import dynamic from 'next/dynamic';

/* Dynamically import the WebGPU canvas — no SSR, avoids browser-API errors */
const WebGPUBackground = dynamic(
  () => import('@/components/ui/hero-futuristic').then((m) => m.WebGPUBackground),
  { ssr: false }
);

const PORTRAIT_URL = 'https://i.postimg.cc/XYwvXN8D/img-4.png';

export default function Hero() {
  const nameRef  = useRef<HTMLHeadingElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);
  const subRef   = useRef<HTMLParagraphElement>(null);
  const ctaRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const label    = labelRef.current;
    const name     = nameRef.current;
    const subtitle = subRef.current;
    const cta      = ctaRef.current;
    if (!label || !name || !subtitle || !cta) return;

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.fromTo(label,    { y: -16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, 0.3);
    tl.fromTo(subtitle, { y: 20,  opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, 1.1);
    tl.fromTo(cta,      { y: 16,  opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, 1.35);

    import('split-type').then(({ default: SplitType }) => {
      const split = new SplitType(name, { types: 'chars' });
      gsap.fromTo(
        split.chars,
        { y: 80, opacity: 0, rotateX: -40 },
        {
          y: 0, opacity: 1, rotateX: 0,
          duration: 0.75, stagger: 0.03, ease: 'power3.out', delay: 0.4,
          onComplete: () => split.revert(),
        }
      );
    });
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: '100svh', background: '#080D08' }}
    >
      {/* Portrait — clearly visible, 20% transparent to favour text readability */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url(${PORTRAIT_URL})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.8,
          zIndex: 1,
        }}
        aria-hidden
      />

      {/* WebGPU green dot field — screen blend makes black areas transparent,
          revealing the portrait below while green glow spans full width */}
      <div
        className="absolute inset-0"
        style={{ mixBlendMode: 'screen', zIndex: 2 }}
      >
        <Suspense fallback={null}>
          <WebGPUBackground />
        </Suspense>
      </div>

      {/* Gradient fade — stays dark until near the bottom, then fades to cream */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, transparent 0%, transparent 72%, rgba(245,240,232,0.35) 84%, rgba(245,240,232,0.82) 92%, #F5F0E8 100%)',
          zIndex: 5,
        }}
        aria-hidden
      />

      {/* Role label — floats above the portrait, top of section */}
      <p
        ref={labelRef}
        className="absolute font-condensed uppercase text-xs tracking-[0.5em] opacity-0 px-8 md:px-20"
        style={{
          top: 'calc(var(--nav-h, 64px) + 28px)',
          color: '#8FB87A',
          fontFamily: 'var(--font-barlow-condensed)',
          zIndex: 10,
        }}
      >
        Brand &amp; Digital Strategist
      </p>

      {/* Content */}
      <div className="relative flex flex-col justify-center h-full min-h-[100svh] px-8 md:px-20 pt-24 pb-16 max-w-6xl mx-auto" style={{ zIndex: 10 }}>

        {/* Name */}
        <h1
          ref={nameRef}
          className="font-display font-black italic leading-[0.88] overflow-hidden"
          style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: 'clamp(4.5rem, 12vw, 13rem)',
            letterSpacing: '-0.03em',
            color: '#F5F0E8',
          }}
        >
          Samuele<br />Barchet
        </h1>

        {/* Divider */}
        <div
          className="my-8 h-px w-24"
          style={{ background: 'rgba(143,184,122,0.4)' }}
        />

        {/* Subtitle + CTA */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 max-w-4xl">
          <p
            ref={subRef}
            className="leading-relaxed opacity-0"
            style={{
              fontFamily: 'var(--font-barlow)',
              fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
              maxWidth: '36ch',
              color: 'rgba(245,240,232,0.92)',
              textShadow: '0 1px 12px rgba(0,0,0,0.8)',
            }}
          >
            Costruisco identità di marca e strategie digitali che generano risultati misurabili.
          </p>

          <div ref={ctaRef} className="flex items-center gap-4 shrink-0 opacity-0">
            <a
              href="/#collaborazioni"
              className="inline-flex items-center gap-2 px-7 py-3 font-condensed uppercase text-sm tracking-[0.2em] transition-colors duration-300"
              style={{
                fontFamily: 'var(--font-barlow-condensed)',
                background: 'var(--green)',
                color: 'var(--bg)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--green-mid)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--green)')}
            >
              Scopri i lavori
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="/#contact"
              className="font-condensed uppercase text-sm tracking-[0.2em] transition-colors duration-300 underline underline-offset-4"
              style={{
                fontFamily: 'var(--font-barlow-condensed)',
                color: 'rgba(245,240,232,0.78)',
                textDecorationColor: 'rgba(143,184,122,0.6)',
                textShadow: '0 1px 8px rgba(0,0,0,0.7)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#F5F0E8')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(245,240,232,0.78)')}
            >
              Scrivimi
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ opacity: 0.3, zIndex: 10 }}>
        <div
          className="w-px origin-top"
          style={{
            height: 48,
            background: 'var(--green-light)',
            animation: 'scaleY 1.8s ease-in-out infinite alternate',
          }}
        />
      </div>
    </section>
  );
}
