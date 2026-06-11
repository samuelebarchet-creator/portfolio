'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GradientBackground } from '@/components/ui/paper-design-shader-background';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const tl = gsap.timeline({
      scrollTrigger: { trigger: section, start: 'top 70%', once: true },
    });

    tl.fromTo(
      section.querySelector('.contact-label'),
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }
    )
      .fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
        '-=0.3'
      )
      .fromTo(
        section.querySelector('.contact-sub'),
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
        '-=0.5'
      )
      .fromTo(
        ctaRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' },
        '-=0.4'
      );

    /* Magnetic CTA effect */
    const cta = ctaRef.current;
    if (!cta) return;

    const onMove = (e: MouseEvent) => {
      const rect = cta.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) * 0.3;
      const dy = (e.clientY - cy) * 0.3;
      gsap.to(cta, { x: dx, y: dy, duration: 0.4, ease: 'power2.out' });
    };

    const onLeave = () => {
      gsap.to(cta, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.5)' });
    };

    cta.addEventListener('mousemove', onMove);
    cta.addEventListener('mouseleave', onLeave);

    return () => {
      cta.removeEventListener('mousemove', onMove);
      cta.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative w-full py-36 px-8 md:px-14 flex flex-col items-center text-center overflow-hidden"
      style={{ borderTop: '1px solid rgba(200,169,110,0.12)' }}
    >
      {/* Shader gradient background */}
      <GradientBackground />

      {/* Dark overlay to keep text readable */}
      <div className="absolute inset-0 -z-[5] bg-bg/40 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center max-w-3xl">
        <p
          className="contact-label font-condensed uppercase text-green-mid text-xs tracking-[0.45em] mb-5"
          style={{ fontFamily: 'var(--font-barlow-condensed)' }}
        >
          Get in touch
        </p>

        <h2
          ref={titleRef}
          className="font-display font-black italic text-bg leading-tight"
          style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: 'clamp(2.8rem, 7vw, 7rem)',
            letterSpacing: '-0.02em',
          }}
        >
          Let's build something remarkable
        </h2>

        <p
          className="contact-sub mt-6 max-w-md font-condensed text-ink-dim text-base tracking-wide leading-relaxed"
          style={{ fontFamily: 'var(--font-barlow-condensed)' }}
        >
          Open to brand projects, creative direction, interactive experiences,
          and collaborations worth obsessing over.
        </p>

        {/* Divider ornament */}
        <div className="flex items-center gap-4 my-10">
          <div className="w-16 h-px" style={{ background: 'rgba(200,169,110,0.3)' }} />
          <div
            className="w-1.5 h-1.5 bg-green rotate-45"
            style={{ boxShadow: '0 0 8px rgba(200,169,110,0.6)' }}
          />
          <div className="w-16 h-px" style={{ background: 'rgba(200,169,110,0.3)' }} />
        </div>

        {/* CTA */}
        <a
          ref={ctaRef}
          href="mailto:samuele.barchet@gmail.com"
          className="group inline-flex items-center gap-4 px-10 py-4 font-condensed uppercase tracking-[0.3em] text-sm text-bg bg-green hover:bg-parchment transition-colors duration-300"
          style={{ fontFamily: 'var(--font-barlow-condensed)' }}
        >
          samuele.barchet@gmail.com
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            <path
              d="M3 8h10M9 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>

        {/* Secondary note */}
        <p
          className="mt-6 font-condensed text-ink-dim text-xs tracking-[0.2em] uppercase"
          style={{ fontFamily: 'var(--font-barlow-condensed)' }}
        >
          Response within 24 hours
        </p>
      </div>
    </section>
  );
}
