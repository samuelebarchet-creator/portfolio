'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const links = [
  { label: 'Work', href: '#collaborazioni' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Nav() {
  const navRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });
    tl.fromTo(
      navRef.current,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
    );

    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-14 h-16 transition-colors duration-500"
      style={{
        borderBottom: scrolled ? '1px solid rgba(61,92,53,0.12)' : '1px solid transparent',
        background: scrolled
          ? 'rgba(245,240,232,0.92)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
    >
      {/* Logo */}
      <a
        href="#"
        className="font-display font-black italic text-green text-xl tracking-wide select-none"
        style={{ fontFamily: 'var(--font-playfair)' }}
      >
        SB
      </a>

      {/* Links */}
      <ul className="flex items-center gap-8">
        {links.map(({ label, href }) => (
          <li key={label}>
            <a
              href={href}
              className="relative font-condensed text-sm uppercase tracking-[0.18em] text-ink-dim hover:text-green transition-colors duration-300 group"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              {label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-green transition-all duration-300 group-hover:w-full" />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
