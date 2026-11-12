'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { about } from '@/lib/about';
import { WarpShadow } from '@/components/ui/warp-shadow';
import CalButton from '@/components/CalButton';

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const ctaRef     = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(about.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      window.location.href = `mailto:${about.email}`;
    }
  };

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

  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      data-surface="dark"
      className="relative w-full py-36 px-8 md:px-20 overflow-hidden"
      style={{
        background: 'var(--ink)',
        borderTop: '1px solid rgba(61,92,53,0.1)',
      }}
    >
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        <WarpShadow
          color="rgba(61, 92, 53, 0.55)"
          animation={{ scale: 60, speed: 35 }}
          noise={{ opacity: 0.12, scale: 1 }}
          sizing="fill"
        />
      </div>
      {/* Subtle botanical texture blob */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] max-w-3xl rounded-full blur-[160px] opacity-[0.07] pointer-events-none"
        style={{ background: 'var(--green)', zIndex: 0 }}
        aria-hidden
      />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">

        {/* Label */}
        <p
          className="c-label font-condensed uppercase text-xs tracking-[0.5em] mb-8"
          style={{ fontFamily: 'var(--font-barlow-condensed)', color: 'var(--orange-text)', fontWeight: 'bold' }}
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
          className="c-sub mt-7 max-w-md font-body text-bg/80 leading-relaxed"
          style={{ fontFamily: 'var(--font-barlow)', fontSize: '1.05rem' }}
        >
          Raccontami a che punto è il tuo brand: da costruire, da riposizionare o da far crescere. In mezz&rsquo;ora capiamo insieme se e come posso aiutarti.
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

        {/* Primary action — Cal.com booking */}
        <div ref={ctaRef} className="flex flex-col items-center w-full">
          <CalButton
            className="group inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 bg-green text-bg font-condensed uppercase tracking-[0.2em] text-sm hover:bg-green-mid transition-colors duration-300 max-w-full"
            style={{ fontFamily: 'var(--font-barlow-condensed)', cursor: 'pointer' }}
          >
            Prenota una call gratuita di 30 minuti
            <svg
              width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden
              className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </CalButton>
          <p
            className="mt-3 text-bg/80 text-sm"
            style={{ fontFamily: 'var(--font-barlow)' }}
          >
            Senza impegno. Scegli tu giorno e ora.
          </p>

          {/* What happens next */}
          <ol className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10 w-full max-w-2xl text-left sm:text-center">
            {[
              { n: '1', t: 'Ci sentiamo', d: '30 minuti per capire il tuo brand e dove vuoi arrivare.' },
              { n: '2', t: 'Ti mando una proposta', d: 'Per iscritto: cosa fare, in che ordine, con che tempi.' },
              { n: '3', t: 'Si parte', d: 'Solo se la proposta ti convince.' },
            ].map(({ n, t, d }) => (
              <li key={n} className="flex sm:flex-col items-baseline sm:items-center gap-4 sm:gap-2">
                <span
                  className="font-display font-black italic text-2xl leading-none shrink-0"
                  style={{ fontFamily: 'var(--font-playfair)', color: 'var(--orange-text)' }}
                  aria-hidden
                >
                  {n}
                </span>
                <span>
                  <span className="block text-bg font-semibold" style={{ fontFamily: 'var(--font-barlow)' }}>{t}</span>
                  <span className="block mt-1 text-bg/80 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-barlow)' }}>{d}</span>
                </span>
              </li>
            ))}
          </ol>

          {/* Secondary — email with copy */}
          <div className="mt-14 flex flex-col items-center gap-3">
            <p className="text-bg/80 text-sm" style={{ fontFamily: 'var(--font-barlow)' }}>
              Preferisci scrivere? Rispondo entro 24 ore.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
              <a
                href={`mailto:${about.email}`}
                className="text-bg text-lg underline underline-offset-4 decoration-[rgba(212,113,58,0.6)] hover:decoration-[var(--orange)] transition-colors duration-300 break-all"
                style={{ fontFamily: 'var(--font-barlow)' }}
              >
                {about.email}
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="font-condensed uppercase text-xs tracking-[0.2em] px-3 py-2 text-bg/80 hover:text-bg transition-colors duration-300"
                style={{ fontFamily: 'var(--font-barlow-condensed)', border: '1px solid rgba(245,240,232,0.3)' }}
              >
                {copied ? 'Copiata' : 'Copia email'}
              </button>
            </div>
            <span className="sr-only" aria-live="polite">{copied ? 'Indirizzo email copiato' : ''}</span>
          </div>

          {/* Tertiary channels */}
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {[
              { label: 'WhatsApp', href: `https://wa.me/393420269217?text=${encodeURIComponent('Ciao Samuele, ho visto il tuo sito e vorrei parlarti di un progetto.')}`, external: true },
              { label: about.phone, href: 'tel:+393420269217', external: false },
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/samuele-barchet-3ba80a1ba/', external: true },
            ].map(({ label, href, external }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="inline-block py-2 font-condensed text-bg/80 text-xs uppercase tracking-[0.25em] hover:text-bg transition-colors duration-300"
                  style={{ fontFamily: 'var(--font-barlow-condensed)' }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
