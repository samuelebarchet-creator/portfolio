'use client';

import { useEffect, useRef, useState, useTransition } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { about } from '@/lib/about';
import { WarpShadow } from '@/components/ui/warp-shadow';
import { sendContactForm } from '@/app/actions/contact';

const inputStyle: React.CSSProperties = {
  fontFamily: 'var(--font-barlow)',
  background: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(255,255,255,0.12)',
  color: 'rgba(245,240,232,0.9)',
  width: '100%',
  padding: '0.85rem 1rem',
  outline: 'none',
  fontSize: '0.95rem',
  transition: 'border-color 0.2s',
};

const labelStyle: React.CSSProperties = {
  fontFamily: 'var(--font-barlow-condensed)',
  fontSize: '0.65rem',
  letterSpacing: '0.3em',
  color: 'rgba(245,240,232,0.4)',
  textTransform: 'uppercase' as const,
  display: 'block',
  marginBottom: '0.4rem',
};

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const ctaRef     = useRef<HTMLDivElement>(null);

  const [fields, setFields] = useState({ nome: '', cognome: '', azienda: '', email: '', messaggio: '' });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [isPending, startTransition] = useTransition();

  const set = (k: keyof typeof fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFields(f => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    startTransition(async () => {
      const result = await sendContactForm(fields);
      if (result.success) {
        setStatus('success');
        setFields({ nome: '', cognome: '', azienda: '', email: '', messaggio: '' });
      } else {
        setStatus('error');
        setErrorMsg(result.error);
      }
    });
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
      className="relative w-full py-36 px-8 md:px-20 overflow-hidden"
      style={{
        background: 'var(--ink)',
        borderTop: '1px solid rgba(61,92,53,0.1)',
      }}
    >
      <div className="absolute inset-0 pointer-events-none hidden md:block" style={{ zIndex: 0 }}>
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
          style={{ fontFamily: 'var(--font-barlow-condensed)', color: 'var(--orange)', fontWeight: 'bold' }}
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
          Che si tratti di costruire un brand da zero, riposizionarlo o far crescere la sua presenza digitale, sono qui.
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

        {/* Contact form */}
        <div ref={ctaRef} className="w-full max-w-2xl mt-2">
          {status === 'success' ? (
            <div className="py-12 flex flex-col items-center gap-4">
              <span className="w-12 h-12 rounded-full bg-green/20 flex items-center justify-center">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M5 13l4 4L19 7" stroke="var(--green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <p className="font-condensed uppercase tracking-[0.3em] text-sm" style={{ fontFamily: 'var(--font-barlow-condensed)', color: 'rgba(245,240,232,0.7)' }}>
                Messaggio inviato — rispondo entro 24 ore
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-2 font-condensed uppercase text-xs tracking-[0.25em] underline underline-offset-4"
                style={{ fontFamily: 'var(--font-barlow-condensed)', color: 'rgba(245,240,232,0.35)' }}
              >
                Invia un altro messaggio
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              {/* Row 1: nome + cognome */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label style={labelStyle}>Nome *</label>
                  <input
                    type="text"
                    value={fields.nome}
                    onChange={set('nome')}
                    required
                    placeholder="Mario"
                    style={inputStyle}
                    onFocus={e => (e.currentTarget.style.borderColor = 'rgba(61,92,53,0.7)')}
                    onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)')}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Cognome *</label>
                  <input
                    type="text"
                    value={fields.cognome}
                    onChange={set('cognome')}
                    required
                    placeholder="Rossi"
                    style={inputStyle}
                    onFocus={e => (e.currentTarget.style.borderColor = 'rgba(61,92,53,0.7)')}
                    onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)')}
                  />
                </div>
              </div>

              {/* Row 2: azienda + email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label style={labelStyle}>Azienda</label>
                  <input
                    type="text"
                    value={fields.azienda}
                    onChange={set('azienda')}
                    placeholder="Acme Srl"
                    style={inputStyle}
                    onFocus={e => (e.currentTarget.style.borderColor = 'rgba(61,92,53,0.7)')}
                    onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)')}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Email *</label>
                  <input
                    type="email"
                    value={fields.email}
                    onChange={set('email')}
                    required
                    placeholder="mario@acme.it"
                    style={inputStyle}
                    onFocus={e => (e.currentTarget.style.borderColor = 'rgba(61,92,53,0.7)')}
                    onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)')}
                  />
                </div>
              </div>

              {/* Row 3: messaggio */}
              <div className="mb-6">
                <label style={labelStyle}>Messaggio *</label>
                <textarea
                  value={fields.messaggio}
                  onChange={set('messaggio')}
                  required
                  rows={5}
                  placeholder="Raccontami il tuo progetto…"
                  style={{ ...inputStyle, resize: 'vertical', minHeight: '130px' }}
                  onFocus={e => (e.currentTarget.style.borderColor = 'rgba(61,92,53,0.7)')}
                  onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)')}
                />
              </div>

              {status === 'error' && (
                <p className="mb-4 text-sm" style={{ color: '#e07070', fontFamily: 'var(--font-barlow)' }}>
                  {errorMsg}
                </p>
              )}

              <div className="flex flex-col sm:flex-row items-center gap-6">
                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 bg-green text-bg font-condensed uppercase tracking-[0.28em] text-sm hover:bg-green-mid transition-colors duration-300 disabled:opacity-50"
                  style={{ fontFamily: 'var(--font-barlow-condensed)' }}
                >
                  {isPending ? 'Invio in corso…' : 'Invia messaggio'}
                  {!isPending && (
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </button>
                <a
                  href={`mailto:${about.email}`}
                  className="font-condensed text-sm tracking-[0.2em] uppercase"
                  style={{ fontFamily: 'var(--font-barlow-condensed)', color: 'rgba(245,240,232,0.3)' }}
                >
                  o scrivi a {about.email}
                </a>
              </div>
            </form>
          )}
        </div>

        {/* Phone */}
        <a
          href="tel:+393420269217"
          className="mt-8 font-condensed text-bg/60 text-sm tracking-[0.25em] uppercase hover:text-bg/90 transition-colors duration-300"
          style={{ fontFamily: 'var(--font-barlow-condensed)' }}
        >
          {about.phone}
        </a>

        <p
          className="mt-3 font-condensed text-bg/30 text-xs tracking-[0.25em] uppercase"
          style={{ fontFamily: 'var(--font-barlow-condensed)' }}
        >
          Rispondo entro 24 ore
        </p>

        {/* Socials inline */}
        <div className="flex items-center gap-6 mt-10">
          {[
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/samuele-barchet-3ba80a1ba/' },
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
