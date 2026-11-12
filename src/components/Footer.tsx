'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap, ScrollTrigger } from '@/lib/gsap';

const navLinks = [
  { label: 'Lavori',   href: '/lavori' },
  { label: 'Servizi',  href: '/servizi' },
  { label: 'Chi sono', href: '/about' },
  { label: 'Idee',     href: '/thinking' },
  { label: 'Contatti', href: '/contatti' },
];

/* Local cluster: the pages that make the site rank across the province. */
const bellunoLinks = [
  { label: 'Social media e comunicazione', href: '/belluno' },
  { label: 'Social media manager', href: '/belluno/social-media' },
  { label: 'Meta Ads', href: '/belluno/meta-ads' },
  { label: 'SEO locale', href: '/belluno/seo-locale' },
  { label: 'Sedico e Valbelluna', href: '/belluno/valbelluna' },
  { label: 'Formazione AI', href: '/belluno/formazione-ai' },
  { label: 'Farsi citare da ChatGPT', href: '/belluno/geo' },
];

const socials = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/samuele-barchet-3ba80a1ba/',
    external: true,
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      footerRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.9,
        ease: 'power2.out',
        scrollTrigger: { trigger: footerRef.current, start: 'top 92%', once: true },
      }
    );
  }, []);

  return (
    <footer
      ref={footerRef}
      className="w-full px-8 md:px-20 pt-16 pb-10 bg-bg-alt"
      style={{ borderTop: '1px solid rgba(61,92,53,0.12)', opacity: 1 }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Top row */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-12"
          style={{ borderBottom: '1px solid rgba(61,92,53,0.08)' }}
        >
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="font-display font-black italic text-ink text-3xl leading-none hover:text-green transition-colors duration-300 w-fit"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              SB<span className="text-green">.</span>
            </Link>
            <p
              className="font-condensed text-ink-dim text-xs uppercase tracking-[0.3em] leading-relaxed"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              Brand &amp; Digital Strategist<br />
              <Link href="/milano" className="hover:text-ink transition-colors duration-300">Milano</Link> · <Link href="/belluno" className="hover:text-ink transition-colors duration-300">Belluno</Link>, Italia
            </p>
            <a
              href="mailto:info@samuelebarchet.com"
              className="inline-block py-1.5 font-condensed text-green text-xs tracking-[0.15em] hover:text-green-mid transition-colors duration-300 w-fit"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              info@samuelebarchet.com
            </a>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-1">
            <p
              className="font-condensed text-ink-faint uppercase text-xs tracking-[0.4em] mb-2"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              Navigazione
            </p>
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="inline-block py-1 font-condensed text-ink-dim text-sm uppercase tracking-[0.18em] hover:text-ink transition-colors duration-300 w-fit"
                style={{ fontFamily: 'var(--font-barlow-condensed)' }}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Belluno */}
          <div className="flex flex-col gap-1">
            <p
              className="font-condensed text-ink-faint uppercase text-xs tracking-[0.4em] mb-2"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              A Belluno
            </p>
            {bellunoLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="inline-block py-1 text-ink-dim text-sm hover:text-ink transition-colors duration-300 w-fit"
                style={{ fontFamily: 'var(--font-barlow)' }}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Social */}
          <div className="flex flex-col gap-1">
            <p
              className="font-condensed text-ink-faint uppercase text-xs tracking-[0.4em] mb-2"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              Seguimi
            </p>
            {socials.map(({ label, href, external, icon }) => (
              <a
                key={label}
                href={href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="flex items-center gap-2.5 py-1 text-ink-dim hover:text-ink transition-colors duration-300 group w-fit"
              >
                <span className="text-green-mid group-hover:text-green transition-colors duration-300">
                  {icon}
                </span>
                <span
                  className="font-condensed text-sm uppercase tracking-[0.18em]"
                  style={{ fontFamily: 'var(--font-barlow-condensed)' }}
                >
                  {label}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Legal / fiscal info */}
        <div
          className="py-6 mb-2"
          style={{ borderTop: '1px solid rgba(61,92,53,0.08)' }}
        >
          <p
            className="font-condensed text-ink-faint text-xs tracking-[0.15em] leading-relaxed"
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            Barchet Samuele — C.F. BRCSML01P16D530G — P.IVA 01275710257 (IT) — Regime forfettario (art. 1, c. 54‑89, L. 190/2014) — Sede legale: Via Giuseppe Mazzini 6, 32036 Sedico (BL)
          </p>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-4">
          <p
            className="font-condensed text-ink-faint text-xs uppercase tracking-[0.25em]"
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            © 2026 Samuele Barchet. Tutti i diritti riservati.
          </p>

          {/* Iubenda policy links */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.iubenda.com/privacy-policy/60384143"
              className="iubenda-white iubenda-noiframe iubenda-embed"
              title="Privacy Policy"
            >
              Privacy Policy
            </a>
            <a
              href="https://www.iubenda.com/privacy-policy/60384143/cookie-policy"
              className="iubenda-white iubenda-noiframe iubenda-embed"
              title="Cookie Policy"
            >
              Cookie Policy
            </a>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-green-mid" aria-hidden />
            <p
              className="font-condensed text-ink-faint text-xs uppercase tracking-[0.25em]"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              Strategia + Design + Codice
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
