'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const collabs = [
  {
    year: '2023',
    company: 'Maison Noir',
    role: 'Creative Director',
    description:
      'End-to-end brand identity for an haute couture label — visual language, campaign art direction and digital flagship.',
    tag: 'Fashion',
  },
  {
    year: '2022',
    company: 'Arkane Studio',
    role: 'Interactive Lead',
    description:
      'Immersive web experience and 3D product configurator for a limited-edition sneaker drop that sold out in 4 minutes.',
    tag: 'Tech · Retail',
  },
  {
    year: '2022',
    company: 'Soleil Agency',
    role: 'Brand Strategist',
    description:
      'Full rebrand of a Paris-based creative agency: identity system, motion guidelines and international launch campaign.',
    tag: 'Branding',
  },
  {
    year: '2021',
    company: 'Volta Records',
    role: 'Art Director',
    description:
      'Visual ecosystem for an independent electronic label — artwork, merchandise, live visuals and streaming platforms.',
    tag: 'Music · Culture',
  },
  {
    year: '2020',
    company: 'Meridian',
    role: 'UI/UX Designer',
    description:
      'Design system and product interface for a fintech platform serving 200k+ users across Europe and Southeast Asia.',
    tag: 'Fintech',
  },
  {
    year: '2019',
    company: 'Forêt Collective',
    role: 'Digital Designer',
    description:
      'Editorial website and brand campaign for a sustainable fashion collective featured in Vogue and Wallpaper*.',
    tag: 'Fashion · Editorial',
  },
];

export default function CollabGrid() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  /* Scroll-triggered section entrance */
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.fromTo(
      section.querySelector('.section-header'),
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: section, start: 'top 75%', once: true },
      }
    );

    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: (i % 3) * 0.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: card, start: 'top 85%', once: true },
        }
      );
    });
  }, []);

  /* GSAP hover handlers */
  const onEnter = (el: HTMLDivElement) => {
    gsap.to(el, { y: -6, duration: 0.35, ease: 'power2.out' });
    gsap.to(el.querySelector('.card-border'), {
      opacity: 1,
      duration: 0.35,
      ease: 'power2.out',
    });
    gsap.to(el.querySelector('.company-name'), {
      color: '#C8A96E',
      duration: 0.3,
    });
    gsap.to(el.querySelector('.card-tag'), {
      opacity: 1,
      x: 0,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const onLeave = (el: HTMLDivElement) => {
    gsap.to(el, { y: 0, duration: 0.4, ease: 'power2.inOut' });
    gsap.to(el.querySelector('.card-border'), {
      opacity: 0,
      duration: 0.4,
    });
    gsap.to(el.querySelector('.company-name'), {
      color: '#F2EBD9',
      duration: 0.35,
    });
    gsap.to(el.querySelector('.card-tag'), {
      opacity: 0,
      x: -8,
      duration: 0.25,
    });
  };

  return (
    <section
      ref={sectionRef}
      id="collaborazioni"
      className="w-full py-28 px-8 md:px-14"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="section-header mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p
              className="text-gold-dim uppercase tracking-[0.4em] text-xs font-condensed mb-3"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              Selected work
            </p>
            <h2
              className="font-display font-black italic text-parchment leading-none"
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(2.4rem, 5vw, 4.5rem)',
              }}
            >
              Collaborations
            </h2>
          </div>
          <p
            className="max-w-xs text-text-dim font-condensed text-sm leading-relaxed tracking-wide"
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            A selection of brands and studios I've shaped — from identity systems to interactive experiences.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/10">
          {collabs.map((c, i) => (
            <div
              key={c.company}
              ref={(el) => { cardsRef.current[i] = el; }}
              className="relative bg-bg p-8 cursor-pointer overflow-hidden"
              onMouseEnter={(e) => onEnter(e.currentTarget)}
              onMouseLeave={(e) => onLeave(e.currentTarget)}
            >
              {/* Gold border overlay on hover */}
              <div
                className="card-border absolute inset-0 border border-gold pointer-events-none opacity-0"
              />

              {/* Year */}
              <span
                className="block font-condensed text-gold-dim text-xs uppercase tracking-[0.3em] mb-6"
                style={{ fontFamily: 'var(--font-barlow-condensed)' }}
              >
                {c.year}
              </span>

              {/* Company */}
              <h3
                className="company-name font-display font-black italic text-parchment leading-tight mb-1"
                style={{
                  fontFamily: 'var(--font-playfair)',
                  fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)',
                }}
              >
                {c.company}
              </h3>

              {/* Role */}
              <p
                className="font-condensed text-gold-dim uppercase text-xs tracking-[0.2em] mb-5"
                style={{ fontFamily: 'var(--font-barlow-condensed)' }}
              >
                {c.role}
              </p>

              {/* Description */}
              <p
                className="font-body text-text-dim text-sm leading-relaxed"
                style={{ fontFamily: 'var(--font-barlow)' }}
              >
                {c.description}
              </p>

              {/* Tag — hidden, slides in on hover */}
              <span
                className="card-tag absolute bottom-6 right-6 font-condensed text-gold text-xs uppercase tracking-[0.25em] opacity-0 -translate-x-2"
                style={{ fontFamily: 'var(--font-barlow-condensed)' }}
              >
                {c.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
