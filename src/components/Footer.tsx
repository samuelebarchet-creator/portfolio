'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const socials = [
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: 'Behance',
    href: 'https://behance.net',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M7.5 11.5c1.38 0 2.5-.84 2.5-2.25C10 7.84 8.88 7 7.5 7H2v10h5.83C9.3 17 10.5 16.06 10.5 14.5c0-1.43-1.1-3-3-3zM4 8.5h3c.55 0 1 .34 1 .85 0 .5-.45.85-1 .85H4V8.5zm3.33 7H4v-2h3.33c.68 0 1.17.42 1.17 1s-.49 1-1.17 1zm9.17-8h-4v1.5h4V7.5zm.5 3c-2.49 0-4 1.74-4 4s1.51 4 4 4c1.85 0 3.17-.9 3.75-2.25H19c-.42.65-1.08 1.02-2 1.02-1.13 0-1.93-.68-2-1.77h5c.01-.17.02-.33.02-.5 0-2.33-1.5-4.5-4.02-4.5zm-2 3c.17-1 .87-1.75 2-1.75s1.83.75 2 1.75H15z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
      </svg>
    ),
  },
];

const navLinks = [
  { label: 'Work', href: '#collaborazioni' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.fromTo(
      footerRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: { trigger: footerRef.current, start: 'top 90%', once: true },
      }
    );
  }, []);

  return (
    <footer
      ref={footerRef}
      className="w-full px-8 md:px-14 pt-16 pb-10"
      style={{ borderTop: '1px solid rgba(200,169,110,0.2)' }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Top row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12 pb-12"
          style={{ borderBottom: '1px solid rgba(200,169,110,0.1)' }}
        >
          {/* Logo + tagline */}
          <div className="flex flex-col gap-3 max-w-xs">
            <span
              className="font-display font-black italic text-gold text-3xl leading-none"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              SB
            </span>
            <p
              className="font-condensed text-text-dim text-xs uppercase tracking-[0.3em] leading-relaxed"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              Creative Developer<br />& Art Director
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-col gap-3">
            <p
              className="font-condensed text-gold-dim uppercase text-xs tracking-[0.35em] mb-1"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              Navigation
            </p>
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="font-condensed text-text-dim text-sm uppercase tracking-[0.2em] hover:text-gold transition-colors duration-300"
                style={{ fontFamily: 'var(--font-barlow-condensed)' }}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-3">
            <p
              className="font-condensed text-gold-dim uppercase text-xs tracking-[0.35em] mb-1"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              Follow
            </p>
            {socials.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-text-dim hover:text-gold transition-colors duration-300 group"
              >
                <span className="text-gold-dim group-hover:text-gold transition-colors duration-300">
                  {icon}
                </span>
                <span
                  className="font-condensed text-sm uppercase tracking-[0.2em]"
                  style={{ fontFamily: 'var(--font-barlow-condensed)' }}
                >
                  {label}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-8">
          <p
            className="font-condensed text-text-dim text-xs uppercase tracking-[0.25em]"
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            © 2026 Samuele Barchet. All rights reserved.
          </p>

          <div className="flex items-center gap-2">
            <div className="w-1 h-1 bg-gold-dim rounded-full" />
            <p
              className="font-condensed text-text-dim text-xs uppercase tracking-[0.25em]"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              Designed & built with obsession
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
