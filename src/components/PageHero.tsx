'use client';

import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';

interface PageHeroProps {
  /** Small uppercase eyebrow label */
  label: string;
  /** Display title — use \n for line breaks */
  title: string;
  /** Image src (kept fully visible, never cropped) */
  image: string;
  imageAlt: string;
  /** Optional caption under the framed image */
  caption?: string;
}

/**
 * Contained editorial hero for subpages.
 * Evocative title + eyebrow, with the artwork shown whole inside a framed
 * panel (object-contain, no cropping). Animates in on mount.
 */
export default function PageHero({ label, title, image, imageAlt, caption }: PageHeroProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.registerPlugin(ScrollTrigger);

    const reduce =
      !!window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.fromTo(labelRef.current, { y: -14, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, 0)
      .fromTo(titleRef.current, { y: 44, opacity: 0 }, { y: 0, opacity: 1, duration: 0.95 }, 0.12)
      .fromTo(
        frameRef.current,
        { y: 64, opacity: 0, clipPath: 'inset(14% 14% 14% 14%)' },
        { y: 0, opacity: 1, clipPath: 'inset(0% 0% 0% 0%)', duration: 1.15 },
        0.3
      );

    return () => { tl.kill(); };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden px-8 md:px-20 pt-32 md:pt-40 pb-16 md:pb-20"
      style={{ borderBottom: '1px solid rgba(61,92,53,0.1)' }}
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <p
          ref={labelRef}
          className="font-condensed uppercase text-green text-xs tracking-[0.5em] mb-6"
          style={{ fontFamily: 'var(--font-barlow-condensed)' }}
        >
          {label}
        </p>

        <h1
          ref={titleRef}
          className="font-display font-black italic text-ink leading-[0.95]"
          style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: 'clamp(2.4rem, 6vw, 5rem)',
            letterSpacing: '-0.03em',
          }}
        >
          {title.split('\n').map((line, i) => (
            <span key={i} className="block">{line}</span>
          ))}
        </h1>

        <div
          ref={frameRef}
          className="group mt-12 md:mt-16 w-full"
          style={{ maxWidth: 'min(86vw, 460px)' }}
        >
          <div
            className="relative overflow-hidden"
            style={{
              border: '1px solid rgba(61,92,53,0.18)',
              boxShadow: '0 30px 80px -32px rgba(8,13,8,0.5)',
              background: 'var(--bg-alt)',
            }}
          >
            <img
              src={image}
              alt={imageAlt}
              draggable={false}
              className="block w-full h-auto select-none transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
          </div>
          {caption && (
            <p
              className="mt-3 font-condensed text-ink-faint text-xs uppercase tracking-[0.3em]"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              {caption}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
