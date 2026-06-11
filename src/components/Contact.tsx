'use client';

import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { about } from '@/lib/about';

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const ctaRef     = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: { trigger: section, start: 'top 72%', once: true },
      defaults: { ease: 'power3.out' },
    });

    tl.fromTo(section.querySelector('.c-label'), { y: -14, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, 0)
      .fromTo(headingRef.current,               { y: 50,  opacity: 0 }, { y: 0, opacity: 1, duration: 0.9 }, 0.2)
      .fromTo(section.querySelector('.c-sub'),  { y: 20,  opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, 0.55)
      .fromTo(ctaRef.current,                   { y: 18,  opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, 0.75);

    /* Magnetic CTA */
    const cta = ctaRef.current;
    if (!cta) return;

    const onMove = (e: MouseEvent) => {
      const rect = cta.getBoundingClientRect();
      const dx = (e.clientX - (rect.left + rect.width  / 2)) * 0.28;
      const dy = (e.clientY - (rect.top  + rect.height / 2)) * 0.28;
      gsap.to(cta, { x: dx, y: dy, duration: 0.4, ease: 'power2.out' });
    };
    const onLeave = () =>
      gsap.to(cta, { x: 0, y: 0, duration: 0.65, ease: 'elastic.out(1, 0.5)' });

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
      className="relative w-full py-36 px-6 md:px-14 overflow-hidden"
      style={{
        background: 'var(--ink)',
        borderTop: '1px solid rgba(61,92,53,0.1)',
      }}
    >
      {/* Subtle botanical texture blob */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] max-w-3xl rounded-full blur-[160px] opacity-[0.07] pointer-events-none"
        style={{ background: 'var(--green)' }}
        aria-hidden
      />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">

        {/* Label */}
        <p
          className="c-label font-condensed uppercase text-green text-xs tracking-[0.5em] mb-8"
          style={{ fontFamily: 'var(--font-barlow-condensed)' }}
        >
          Parliamoci
        </p>

        {/* Heading */}
        <h2
          ref={headingRef}
          className="font-display font-black italic text-bg leading-tight"
          style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: 'clamp(2.8rem, 7vw, 7rem)',
            letterSpacing: '-0.02em',
          }}
        >
          Hai un progetto<br />in mente?
        </h2>

        {/* Subtitle */}
        <p
          className="c-sub mt-7 max-w-md font-body text-bg/55 leading-relaxed"
          style={{ fontFamily: 'var(--font-barlow)', fontSize: '1.05rem' }}
        >
          Che si tratti di costruire un brand da zero, riposizionarlo o far crescere la sua presenza digitale — sono qui.
        </p>

        {/* Ornament */}
        <div className="flex items-center gap-4 my-10">
          <span className="w-14 h-px" style={{ background: 'rgba(61,92,53,0.4)' }} />
          <span
            className="w-1.5 h-1.5 bg-green rotate-45 block"
            aria-hidden
          />
          <span className="w-14 h-px" style={{ background: 'rgba(61,92,53,0.4)' }} />
        </div>

        {/* CTA email — magnetic */}
        <a
          ref={ctaRef}
          href={`mailto:${about.email}`}
          className="group inline-flex items-center gap-4 px-10 py-4 bg-green text-bg font-condensed uppercase tracking-[0.28em] text-sm hover:bg-green-mid transition-colors duration-300"
          style={{ fontFamily: 'var(--font-barlow-condensed)' }}
        >
          {about.email}
          <svg
            width="15" height="15" viewBox="0 0 16 16" fill="none"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>

        <p
          className="mt-5 font-condensed text-bg/30 text-xs tracking-[0.25em] uppercase"
          style={{ fontFamily: 'var(--font-barlow-condensed)' }}
        >
          Rispondo entro 24 ore
        </p>

        {/* Socials inline */}
        <div className="flex items-center gap-6 mt-10">
          {[
            { label: 'Instagram', href: 'https://www.instagram.com/samuele.barchet/' },
            { label: 'LinkedIn',  href: 'https://www.linkedin.com/in/samuelebarchet/' },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-condensed text-bg/40 text-xs uppercase tracking-[0.3em] hover:text-bg/80 transition-colors duration-300"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
