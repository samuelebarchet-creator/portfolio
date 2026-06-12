'use client';

import * as React from 'react';
import { motion, useMotionTemplate, useScroll, useTransform } from 'framer-motion';

interface SmoothScrollHeroProps {
  scrollHeight?: number;
  desktopImage: string;
  mobileImage: string;
  initialClipPercentage?: number;
  finalClipPercentage?: number;
  children?: React.ReactNode;
}

const SmoothScrollHeroBackground: React.FC<SmoothScrollHeroProps> = ({
  scrollHeight = 1500,
  desktopImage,
  mobileImage,
  initialClipPercentage = 25,
  finalClipPercentage = 75,
  children,
}) => {
  const { scrollY } = useScroll();

  const clipStart = useTransform(scrollY, [0, scrollHeight], [initialClipPercentage, 0]);
  const clipEnd   = useTransform(scrollY, [0, scrollHeight], [finalClipPercentage, 100]);

  const clipPath = useMotionTemplate`polygon(${clipStart}% ${clipStart}%, ${clipEnd}% ${clipStart}%, ${clipEnd}% ${clipEnd}%, ${clipStart}% ${clipEnd}%)`;

  const backgroundSize = useTransform(
    scrollY,
    [0, scrollHeight + 500],
    ['170%', '100%'],
  );

  return (
    <motion.div
      className="sticky top-0 h-screen w-full"
      style={{ clipPath, willChange: 'transform, opacity', background: '#080D08' }}
    >
      {/* Mobile */}
      <motion.div
        className="absolute inset-0 md:hidden"
        style={{
          backgroundImage: `url(${mobileImage})`,
          backgroundSize,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      {/* Desktop */}
      <motion.div
        className="absolute inset-0 hidden md:block"
        style={{
          backgroundImage: `url(${desktopImage})`,
          backgroundSize,
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
        }}
      />
      {/* Overlay */}
      {children && (
        <div className="absolute inset-0 flex items-end" style={{ zIndex: 10 }}>
          {children}
        </div>
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
  children,
}) => (
  <div style={{ height: `calc(${scrollHeight}px + 100vh)` }} className="relative w-full">
    <SmoothScrollHeroBackground
      scrollHeight={scrollHeight}
      desktopImage={desktopImage}
      mobileImage={mobileImage}
      initialClipPercentage={initialClipPercentage}
      finalClipPercentage={finalClipPercentage}
    >
      {children}
    </SmoothScrollHeroBackground>
  </div>
);

export default SmoothScrollHero;
