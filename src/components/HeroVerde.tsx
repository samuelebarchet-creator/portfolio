'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AdaptiveWarp from '@/components/ui/adaptive-warp';

export default function HeroVerde() {
  const sectionRef  = useRef<HTMLElement>(null);
  const boatRef     = useRef<HTMLDivElement>(null);
  const taglineRef  = useRef<HTMLHeadingElement>(null);

  /* Boat orbit — identical logic to HeroOcean */
  useEffect(() => {
    const section = sectionRef.current;
    const boat    = boatRef.current;
    const tagline = taglineRef.current;
    if (!section || !boat || !tagline) return;
    const boatEl = boat;

    let cx = 0, cy = 0, rx = 240, ry = 90;
    const measure = () => {
      const sr = section.getBoundingClientRect();
      const tr = tagline.getBoundingClientRect();
      cx = tr.left + tr.width  / 2 - sr.left;
      cy = tr.top  + tr.height / 2 - sr.top;
      rx = tr.width  / 2 + 60;
      ry = tr.height / 2 + 44;
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(section);
    ro.observe(tagline);
    // The tagline slides in, so the first measure is offset until it settles
    tagline.addEventListener('animationend', measure);

    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      boatEl.style.left = `${cx}px`;
      boatEl.style.top  = `${cy - ry}px`;
      boatEl.style.transform = 'translate(-50%, -50%)';
      boatEl.style.opacity = '0.95';
      return () => {
        ro.disconnect();
        tagline.removeEventListener('animationend', measure);
      };
    }

    const ORBIT_SECONDS = 22;
    const start = performance.now();
    let raf = requestAnimationFrame(tick);

    function tick(now: number) {
      const t = (now - start) / 1000;
      const angle = (t / ORBIT_SECONDS) * Math.PI * 2;
      const x    = cx + rx * Math.cos(angle);
      const y    = cy + ry * Math.sin(angle) * 0.6;
      const flip = Math.sin(angle) < 0 ? 1 : -1;
      const bob  = Math.sin(t * 2.4) * 3;
      boatEl.style.left      = `${x}px`;
      boatEl.style.top       = `${y}px`;
      boatEl.style.transform = `translate(-50%,-50%) translateY(${bob}px) scaleX(${flip}) rotate(${flip * -1.5}deg)`;
      boatEl.style.opacity   = '0.95';
      raf = requestAnimationFrame(tick);
    }
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      tagline.removeEventListener('animationend', measure);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      data-surface="dark"
      className="relative w-full overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse at 50% 0%, #1e3d18 0%, #0e200b 50%, #060f04 100%)',
      }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <AdaptiveWarp
          proportion={0.44}
          softness={1}
          distortion={0.32}
          swirl={0.68}
          swirlIterations={10}
          shape="checks"
          shapeScale={0.14}
          scale={1}
          rotation={0}
          speed={0.55}
          colors={['#0d1a09', '#3D5C35', '#6A8A5E', '#C85E28']}
        />
      </div>

      {/* Warm orange radial glow — conferisce l'accento caldo */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 60%, rgba(212,113,58,0.18) 0%, transparent 70%)',
        }}
      />

      {/* Boat */}
      <div
        ref={boatRef}
        className="absolute pointer-events-none"
        style={{
          top: 0, left: 0, zIndex: 5,
          width: 'clamp(48px, 5vw, 72px)',
          filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.5))',
          opacity: 0, // revealed once positioned on its orbit, not at the corner
        }}
      >
        <Image src="/boat-sailing.png" alt="" width={413} height={385} priority className="w-full h-auto" />
      </div>

      {/* Content */}
      <div
        className="relative flex flex-col items-center text-center px-8 md:px-20"
        style={{ zIndex: 10, paddingTop: 'calc(var(--nav-h, 64px) + 5rem)', paddingBottom: '5rem' }}
      >
        <p
          className="font-condensed uppercase text-xs tracking-[0.55em] mb-12"
          style={{
            color: 'var(--orange-text)',
            fontFamily: 'var(--font-barlow-condensed)',
            fontWeight: 'bold',
            animation: 'hero-fade-up 0.7s ease-out both 0.4s',
          }}
        >
          Samuele Barchet<span className="hidden md:inline"> · </span>
          <br className="md:hidden" />
          Brand &amp; Digital Strategist
        </p>

        <h1
          ref={taglineRef}
          className="font-display font-black italic text-bg leading-[0.95]"
          style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: 'clamp(2rem, 7.5vw, 8rem)',
            letterSpacing: '-0.03em',
            textShadow: '0 2px 40px rgba(0,0,0,0.6)',
            maxWidth: '22ch',
            animation: 'hero-fade-up 1.0s ease-out both 0.6s',
          }}
        >
          Prima la rotta,<br />poi il vento.
        </h1>

        <div className="my-9 h-px w-14" style={{ background: 'rgba(212,113,58,0.55)' }} />

        <p
          className="max-w-[38ch] leading-relaxed"
          style={{
            color: 'rgba(245,240,232,0.82)',
            fontFamily: 'var(--font-barlow)',
            fontSize: 'clamp(1.05rem, 1.4vw, 1.25rem)',
            textShadow: '0 1px 12px rgba(0,0,0,0.6)',
            textWrap: 'balance',
            animation: 'hero-fade-up 0.7s ease-out both 1.3s',
          }}
        >
          Strategia di brand per aziende di Belluno e Milano. Prima decidiamo dove andare, poi social, contenuti e advertising. Nell&rsquo;ordine giusto.
        </p>

        <div
          className="flex items-center gap-4 mt-12"
          style={{ animation: 'hero-fade-up 0.7s ease-out both 1.55s' }}
        >
          <Link
            href="/#collaborazioni"
            className="inline-flex items-center gap-2 px-7 py-3 font-condensed uppercase text-sm tracking-[0.2em] transition-colors duration-300"
            style={{ fontFamily: 'var(--font-barlow-condensed)', background: 'var(--orange)', color: 'var(--ink)', fontWeight: 600 }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--orange-light)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--orange)')}
          >
            Scopri i lavori
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <Link
            href="/#contact"
            className="font-condensed uppercase text-sm tracking-[0.2em] transition-colors duration-300 underline underline-offset-4"
            style={{ fontFamily: 'var(--font-barlow-condensed)', color: 'rgba(245,240,232,0.75)', textDecorationColor: 'rgba(212,113,58,0.55)', textShadow: '0 1px 8px rgba(0,0,0,0.7)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#F5F0E8')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(245,240,232,0.75)')}
          >
            Scrivimi
          </Link>
        </div>
      </div>
    </section>
  );
}
