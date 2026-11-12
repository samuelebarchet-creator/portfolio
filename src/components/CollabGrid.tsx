'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/lib/projects';
import Ornament from '@/components/Ornament';
import { WarpShadow } from '@/components/ui/warp-shadow';

gsap.registerPlugin(ScrollTrigger);

/** Home selection: the three cases with photography first, then three text cases. */
const HOME_SLUGS = ['braghes', 'rc-ricambi', 'crossabili', 'allfit', 'programma-formula', 'vyst'];

export default function CollabGrid({ featured = false }: { featured?: boolean } = {}) {
  const shown = featured
    ? HOME_SLUGS.map((slug) => projects.find((p) => p.slug === slug)!).filter(Boolean)
    : projects;
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
  };

  const onLeave = (el: HTMLDivElement) => {
    gsap.to(el, { y: 0, duration: 0.4, ease: 'power2.inOut' });
    gsap.to(el.querySelector('.card-border'), { opacity: 0, duration: 0.4 });
    gsap.to(el.querySelector('.company-name'), { color: '#1A1A16', duration: 0.35 });
  };

  return (
    <section ref={sectionRef} id="collaborazioni" className="w-full py-28 px-8 md:px-20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        <WarpShadow
          color="rgba(61, 92, 53, 0.28)"
          animation={{ scale: 50, speed: 40 }}
          noise={{ opacity: 0.12, scale: 1.5 }}
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
          {shown.map((p, i) => {
            const cover = p.images?.[0];
            return (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}`}
                className="group block"
              >
                <div
                  ref={(el) => { cardsRef.current[i] = el; }}
                  className="relative bg-bg flex flex-col cursor-pointer overflow-hidden h-full"
                  onMouseEnter={(e) => onEnter(e.currentTarget)}
                  onMouseLeave={(e) => onLeave(e.currentTarget)}
                >
                  <div className="card-border absolute inset-0 z-10 border border-green pointer-events-none opacity-0 group-focus-visible:opacity-100" />

                  {cover && (
                    <div className="relative aspect-[4/3] overflow-hidden bg-surface">
                      <Image
                        src={cover.src}
                        alt={cover.alt ?? ''}
                        fill
                        sizes="(min-width: 1024px) 384px, (min-width: 768px) 50vw, 100vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      />
                    </div>
                  )}

                  <div className="flex flex-col flex-1 p-8">
                    <span
                      className="block font-condensed text-ink-dim text-xs uppercase tracking-[0.25em] mb-5"
                      style={{ fontFamily: 'var(--font-barlow-condensed)' }}
                    >
                      {p.year} · {p.tag}
                    </span>

                    <h3
                      className="company-name font-display font-black italic text-ink leading-tight mb-2"
                      style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)' }}
                    >
                      {p.company}
                    </h3>

                    <p
                      className="font-condensed text-green uppercase text-xs tracking-[0.2em] leading-relaxed mb-5"
                      style={{ fontFamily: 'var(--font-barlow-condensed)' }}
                    >
                      {p.focus}
                    </p>

                    <p
                      className="font-body text-ink-dim text-sm leading-relaxed mb-8"
                      style={{ fontFamily: 'var(--font-barlow)' }}
                    >
                      {p.description}
                    </p>

                    <span
                      className="mt-auto inline-flex items-center gap-2 font-condensed text-green text-xs uppercase tracking-[0.25em]"
                      style={{ fontFamily: 'var(--font-barlow-condensed)' }}
                    >
                      Vedi il progetto
                      <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {featured && (
          <div className="mt-10 flex justify-end">
            <Link
              href="/lavori"
              className="group inline-flex items-center gap-3 font-condensed uppercase text-sm tracking-[0.2em] text-green border-b border-green/40 hover:border-green pb-1 transition-colors duration-300"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              Tutti gli {projects.length} lavori
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
