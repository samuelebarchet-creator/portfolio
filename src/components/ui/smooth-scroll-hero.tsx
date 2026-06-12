'use client';

import * as React from 'react';
import { motion, useMotionTemplate, useScroll, useTransform } from 'framer-motion';

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
  const { scrollY } = useScroll();

  // Full screen → clips inward as you scroll
  const clipStart = useTransform(scrollY, [0, scrollHeight], [0, initialClipPercentage]);
  const clipEnd   = useTransform(scrollY, [0, scrollHeight], [100, finalClipPercentage]);
  const clipPath  = useMotionTemplate`polygon(${clipStart}% ${clipStart}%, ${clipEnd}% ${clipStart}%, ${clipEnd}% ${clipEnd}%, ${clipStart}% ${clipEnd}%)`;

  // Slight zoom-in as image clips
  const backgroundSize = useTransform(scrollY, [0, scrollHeight], ['100%', '118%']);

  // Text fades out and rises in the first quarter of scroll
  const letterSpacing = useTransform(scrollY, [0, scrollHeight * 0.2], ['0.02em', '0.18em']);
  const textOpacity   = useTransform(scrollY, [0, scrollHeight * 0.28], [1, 0]);
  const textY         = useTransform(scrollY, [0, scrollHeight * 0.28], ['0px', '-40px']);

  return (
    <motion.div
      className="sticky top-0 h-screen w-full overflow-hidden"
      style={{ clipPath, willChange: 'clip-path', background: '#080D08' }}
    >
      {/* Mobile bg */}
      <motion.div
        className="absolute inset-0 md:hidden"
        style={{
          backgroundImage: `url(${mobileImage})`,
          backgroundSize,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      {/* Desktop bg */}
      <motion.div
        className="absolute inset-0 hidden md:block"
        style={{
          backgroundImage: `url(${desktopImage})`,
          backgroundSize,
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
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
          style={{ zIndex: 10, opacity: textOpacity, y: textY }}
        >
          {heroLabel && (
            <motion.p
              className="font-condensed uppercase text-white/60 mb-5"
              style={{
                fontFamily: 'var(--font-barlow-condensed)',
                fontSize: 'clamp(0.6rem, 1.2vw, 0.75rem)',
                letterSpacing: '0.5em',
              }}
            >
              {heroLabel}
            </motion.p>
          )}
          <motion.h1
            className="font-display font-black italic text-white"
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(2.2rem, 6vw, 5.5rem)',
              lineHeight: 0.95,
              letterSpacing,
              textShadow: '0 4px 32px rgba(0,0,0,0.4)',
            }}
          >
            {heroTitle}
          </motion.h1>
        </motion.div>
      )}
    </motion.div>
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
  <div style={{ height: `calc(${scrollHeight}px + 100vh)` }} className="relative w-full">
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
