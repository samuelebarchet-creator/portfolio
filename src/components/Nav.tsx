'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from '@/lib/gsap';
import { cn } from '@/lib/utils';

const links = [
  { label: 'Lavori',   href: '/lavori' },
  { label: 'Servizi',  href: '/servizi' },
  { label: 'About',    href: '/about' },
  { label: 'Thinking', href: '/thinking' },
  { label: 'Contatti', href: '/contatti' },
];

export default function Nav() {
  const navRef  = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  /* Entrance animation */
  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.3 }
    );
  }, []);

  /* Scroll state */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  /* Animate mobile menu */
  useEffect(() => {
    const el = menuRef.current;
    if (!el) return;
    if (open) {
      gsap.fromTo(el, { opacity: 0, y: -12 }, { opacity: 1, y: 0, duration: 0.35, ease: 'power3.out' });
    }
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-20 h-16 transition-all duration-500"
        style={{
          background: 'rgba(245,240,232,0.96)',
          borderBottom: scrolled ? '1px solid rgba(61,92,53,0.15)' : '1px solid rgba(61,92,53,0.07)',
          backdropFilter: 'blur(14px)',
        }}
      >
        {/* Logo */}
        <a
          href="/"
          className="font-display font-black italic text-ink text-xl tracking-wide select-none hover:text-green transition-colors duration-300"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          SB<span className="text-green">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="relative font-condensed text-sm uppercase tracking-[0.18em] text-ink-dim hover:text-ink transition-colors duration-300 group"
                style={{ fontFamily: 'var(--font-barlow-condensed)' }}
              >
                {label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-green transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA desktop */}
        <a
          href="/contatti"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 font-condensed text-xs uppercase tracking-[0.2em] text-green border border-green hover:bg-green hover:text-bg transition-all duration-300"
          style={{ fontFamily: 'var(--font-barlow-condensed)' }}
        >
          Lavoriamo insieme
        </a>

        {/* Hamburger */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8 focus:outline-none"
          aria-label={open ? 'Chiudi menu' : 'Apri menu'}
        >
          <span
            className={cn(
              'block h-px bg-ink transition-all duration-300 origin-center',
              open ? 'w-6 rotate-45 translate-y-[5px]' : 'w-6'
            )}
          />
          <span
            className={cn(
              'block h-px bg-ink transition-all duration-300',
              open ? 'w-0 opacity-0' : 'w-4'
            )}
          />
          <span
            className={cn(
              'block h-px bg-ink transition-all duration-300 origin-center',
              open ? 'w-6 -rotate-45 -translate-y-[5px]' : 'w-6'
            )}
          />
        </button>
      </nav>

      {/* Mobile overlay */}
      {open && (
        <div
          ref={menuRef}
          className="fixed inset-0 z-40 flex flex-col pt-20 px-8 pb-10 bg-bg md:hidden"
        >
          <ul className="flex flex-col gap-6 mt-8">
            {links.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={close}
                  className="font-display font-black italic text-ink text-4xl hover:text-green transition-colors duration-300"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div
            className="mt-auto pt-8"
            style={{ borderTop: '1px solid rgba(61,92,53,0.12)' }}
          >
            <a
              href="mailto:info@samuelebarchet.com"
              className="font-condensed text-ink-dim text-sm uppercase tracking-[0.2em]"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              info@samuelebarchet.com
            </a>
          </div>
        </div>
      )}
    </>
  );
}
