'use client';

import * as React from 'react';
import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';

interface SmoothScrollHeroProps {
  scrollHeight?: number;
  desktopImage: string;
  mobileImage: string;
  initialClipPercentage?: number;
  finalClipPercentage?: number;
  heroLabel?: string;
  heroTitle?: string;
}

const SmoothScrollHeroBackground: React.FC<SmoothScrollHeroProps> = ({
  scrollHeight = 1500,
  desktopImage,
  mobileImage,
  initialClipPercentage = 25,
  finalClipPercentage = 75,
  heroLabel,
  heroTitle,
}) => {
  const stickyRef = useRef<HTMLDivElement>(null);
  const bgMobileRef = useRef<HTMLDivElement>(null);
  const bgDesktopRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const sticky = stickyRef.current;
    const root = sticky?.parentElement;
    if (!sticky || !root) return;

    /* Scroll-linked transforms — replaces framer-motion useScroll/useTransform.
       progress (0→1) maps to the same ranges the motion values used. */
    const apply = (p: number) => {
      const clipStart = p * initialClipPercentage;            // 0 → 25
      const clipEnd = 100 + p * (finalClipPercentage - 100);  // 100 → 75
      sticky.style.clipPath = `polygon(${clipStart}% ${clipStart}%, ${clipEnd}% ${clipStart}%, ${clipEnd}% ${clipEnd}%, ${clipStart}% ${clipEnd}%)`;

      const bgSize = `${100 + p * 18}%`; // 100% → 118%
      if (bgMobileRef.current) bgMobileRef.current.style.backgroundSize = bgSize;
      if (bgDesktopRef.current) bgDesktopRef.current.style.backgroundSize = bgSize;

      const txt = Math.min(p / 0.28, 1);
      if (textRef.current) {
        textRef.current.style.opacity = String(1 - txt);
        textRef.current.style.transform = `translateY(${-40 * txt}px)`;
      }
      const ls = Math.min(p / 0.2, 1);
      if (titleRef.current) {
        titleRef.current.style.letterSpacing = `${0.02 + ls * 0.16}em`; // 0.02 → 0.18em
      }
    };

    /* Static initial state on all devices */
    apply(0);

    /* Scroll-driven clip/zoom only on desktop: on touch it stutters and the
       tall pinned scroll area hurts UX. Mobile keeps a clean static hero. */
    const desktop =
      !!window.matchMedia &&
      window.matchMedia('(min-width: 768px) and (prefers-reduced-motion: no-preference)').matches;
    if (!desktop) return;

    const st = ScrollTrigger.create({
      trigger: root,
      start: 'top top',
      end: `+=${scrollHeight}`,
      scrub: true,
      onUpdate: (self) => apply(self.progress),
    });

    return () => st.kill();
  }, [scrollHeight, initialClipPercentage, finalClipPercentage]);

  return (
    <div
      ref={stickyRef}
      className="sticky top-0 h-[100dvh] w-full overflow-hidden"
      style={{
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        willChange: 'clip-path',
        background: '#080D08',
      }}
    >
      {/* Mobile bg */}
      <div
        ref={bgMobileRef}
        className="absolute inset-0 md:hidden"
        style={{
          backgroundImage: `url(${mobileImage})`,
          backgroundSize: '100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      {/* Desktop bg */}
      <div
        ref={bgDesktopRef}
        className="absolute inset-0 hidden md:block"
        style={{
          backgroundImage: `url(${desktopImage})`,
          backgroundSize: '100%',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Dark vignette so text stays readable */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.48) 100%)',
          zIndex: 8,
        }}
      />

      {/* Hero text — centered, letter-spacing expands with scroll */}
      {heroTitle && (
        <div
          ref={textRef}
          className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
          style={{ zIndex: 10, opacity: 1 }}
        >
          {heroLabel && (
            <p
              className="font-condensed uppercase text-white/60 mb-5"
              style={{
                fontFamily: 'var(--font-barlow-condensed)',
                fontSize: 'clamp(0.6rem, 1.2vw, 0.75rem)',
                letterSpacing: '0.5em',
              }}
            >
              {heroLabel}
            </p>
          )}
          <h1
            ref={titleRef}
            className="font-display font-black italic text-white"
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(2.2rem, 6vw, 5.5rem)',
              lineHeight: 1.1,
              letterSpacing: '0.02em',
              textShadow: '0 4px 32px rgba(0,0,0,0.4)',
            }}
          >
            {heroTitle}
          </h1>
        </div>
      )}
    </div>
  );
};

const SmoothScrollHero: React.FC<SmoothScrollHeroProps> = ({
  scrollHeight = 1500,
  desktopImage,
  mobileImage,
  initialClipPercentage = 25,
  finalClipPercentage = 75,
  heroLabel,
  heroTitle,
}) => (
  <div
    style={{ height: `calc(${scrollHeight}px + 100dvh)` }}
    className="relative w-full max-md:!h-[100dvh]"
  >
    <SmoothScrollHeroBackground
      scrollHeight={scrollHeight}
      desktopImage={desktopImage}
      mobileImage={mobileImage}
      initialClipPercentage={initialClipPercentage}
      finalClipPercentage={finalClipPercentage}
      heroLabel={heroLabel}
      heroTitle={heroTitle}
    />
  </div>
);

export default SmoothScrollHero;
