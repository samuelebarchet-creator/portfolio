'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { projects } from '@/lib/projects';
import Ornament from '@/components/Ornament';
import { EtherealShadow } from '@/components/ui/etheral-shadow';

gsap.registerPlugin(ScrollTrigger);

export default function CollabGrid() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

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

  const onEnter = (el: HTMLDivElement) => {
    gsap.to(el, { y: -6, duration: 0.35, ease: 'power2.out' });
    gsap.to(el.querySelector('.card-border'), { opacity: 1, duration: 0.35 });
    gsap.to(el.querySelector('.company-name'), { color: '#3D5C35', duration: 0.3 });
    gsap.to(el.querySelector('.card-tag'), { opacity: 1, x: 0, duration: 0.3, ease: 'power2.out' });
    gsap.to(el.querySelector('.view-label'), { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' });
  };

  const onLeave = (el: HTMLDivElement) => {
    gsap.to(el, { y: 0, duration: 0.4, ease: 'power2.inOut' });
    gsap.to(el.querySelector('.card-border'), { opacity: 0, duration: 0.4 });
    gsap.to(el.querySelector('.company-name'), { color: '#1A1A16', duration: 0.35 });
    gsap.to(el.querySelector('.card-tag'), { opacity: 0, x: -8, duration: 0.25 });
    gsap.to(el.querySelector('.view-label'), { opacity: 0, y: 6, duration: 0.2 });
  };

  return (
    <section ref={sectionRef} id="collaborazioni" className="w-full py-28 px-8 md:px-20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        <EtherealShadow
          color="rgba(61, 92, 53, 0.09)"
          animation={{ scale: 50, speed: 40 }}
          noise={{ opacity: 0.05, scale: 1.5 }}
          sizing="fill"
        />
      </div>
      <div className="max-w-6xl mx-auto relative" style={{ zIndex: 1 }}>

        {/* Header */}
        <div className="section-header mb-16">
          <Ornament index="01" label="Lavori selezionati" className="mb-6" />
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2
              className="font-display font-black italic text-ink leading-tight"
              style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(2.4rem, 5vw, 4.5rem)' }}
            >
              Collaborazioni
            </h2>
            <p
              className="max-w-xs text-ink-dim font-condensed text-sm leading-relaxed tracking-wide"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              Una selezione di brand seguiti dalla strategia alla comunicazione digitale.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-green/10">
          {projects.map((p, i) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="block"
            >
              <div
                ref={(el) => { cardsRef.current[i] = el; }}
                className="relative bg-bg p-8 cursor-pointer overflow-hidden h-full"
                onMouseEnter={(e) => onEnter(e.currentTarget)}
                onMouseLeave={(e) => onLeave(e.currentTarget)}
              >
                <div className="card-border absolute inset-0 border border-green pointer-events-none opacity-0" />

                <span
                  className="block font-condensed text-green-mid text-xs uppercase tracking-[0.3em] mb-6"
                  style={{ fontFamily: 'var(--font-barlow-condensed)' }}
                >
                  {p.year}
                </span>

                <h3
                  className="company-name font-display font-black italic text-ink leading-tight mb-1"
                  style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)' }}
                >
                  {p.company}
                </h3>

                <p
                  className="font-condensed text-green-mid uppercase text-xs tracking-[0.2em] mb-5"
                  style={{ fontFamily: 'var(--font-barlow-condensed)' }}
                >
                  {p.role}
                </p>

                <p
                  className="font-body text-ink-dim text-sm leading-relaxed"
                  style={{ fontFamily: 'var(--font-barlow)' }}
                >
                  {p.description}
                </p>

                {/* Tag */}
                <span
                  className="card-tag absolute bottom-6 right-6 font-condensed text-green text-xs uppercase tracking-[0.25em] opacity-0 -translate-x-2"
                  style={{ fontFamily: 'var(--font-barlow-condensed)' }}
                >
                  {p.tag}
                </span>

                {/* View label */}
                <span
                  className="view-label absolute bottom-6 left-8 font-condensed text-green-mid text-xs uppercase tracking-[0.25em] opacity-0 translate-y-1.5"
                  style={{ fontFamily: 'var(--font-barlow-condensed)' }}
                >
                  Vedi progetto →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
