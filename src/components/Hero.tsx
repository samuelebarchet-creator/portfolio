'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { AetherHero } from '@/components/ui/aether-hero';
import { HandWrittenTitle } from '@/components/ui/hand-writing-text';

export default function Hero() {
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    gsap.set(ctaRef.current, { y: 20, opacity: 0 });
    gsap.to(ctaRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.9,
      ease: 'power3.out',
      delay: 2.4,
    });
  }, []);

  return (
    <AetherHero
      height="100vh"
      overlayGradient="linear-gradient(180deg, rgba(10,10,8,0.72) 0%, rgba(10,10,8,0.32) 50%, rgba(10,10,8,0.84) 100%)"
      clearColor={[0.04, 0.04, 0.03, 1]}
      ariaLabel="Animated shader background"
    >
      {/* Content sovrapposto al canvas WebGL */}
      <div className="flex flex-col items-center justify-center h-full w-full text-center px-6">
        <p
          className="text-gold-dim uppercase tracking-[0.4em] text-xs font-condensed mb-2"
          style={{ fontFamily: 'var(--font-barlow-condensed)' }}
        >
          Creative Developer
        </p>

        {/* Titolo con oval animato gold */}
        <HandWrittenTitle
          title="Samuele Barchet"
          subtitle="Brand identity · Digital experience · Interactive worlds"
        />

        <a
          ref={ctaRef}
          href="#collaborazioni"
          className="mt-4 inline-block px-8 py-3 border border-gold text-gold font-condensed uppercase text-sm tracking-[0.25em] hover:bg-gold hover:text-bg transition-colors duration-300"
          style={{ fontFamily: 'var(--font-barlow-condensed)' }}
        >
          View Work
        </a>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span
            className="text-gold font-condensed uppercase text-xs tracking-[0.3em]"
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            Scroll
          </span>
          <div className="w-px h-12 bg-gold origin-top animate-[scaleY_1.6s_ease-in-out_infinite_alternate]" />
        </div>
      </div>
    </AetherHero>
  );
}
