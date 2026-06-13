'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { about } from '@/lib/about';
import Ornament from '@/components/Ornament';
import { EtherealShadow } from '@/components/ui/etheral-shadow';

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const photoRef   = useRef<HTMLDivElement>(null);
  const rightRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      photoRef.current,
      { x: -48, opacity: 0 },
      {
        x: 0, opacity: 1, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: section, start: 'top 72%', once: true },
      }
    );

    gsap.fromTo(
      rightRef.current!.children,
      { y: 32, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.75, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: section, start: 'top 72%', once: true },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="w-full py-28 px-8 md:px-20 relative overflow-hidden"
      style={{ borderTop: '1px solid rgba(61,92,53,0.1)' }}
    >
      <div className="absolute inset-0 pointer-events-none hidden md:block" style={{ zIndex: 0 }}>
        <EtherealShadow
          color="rgba(143, 184, 122, 0.28)"
          animation={{ scale: 35, speed: 45 }}
          noise={{ opacity: 0.13, scale: 1 }}
          sizing="fill"
        />
      </div>

      <div className="max-w-6xl mx-auto relative" style={{ zIndex: 1 }}>
        <Ornament index="03" label="Chi sono" className="mb-16" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* ── Left: photo ── */}
          <div ref={photoRef}>
            <div
              className="overflow-hidden relative"
              style={{ aspectRatio: '3/4' }}
            >
              <Image
                src="/about/servizio-civile.jpg"
                alt="Samuele durante il servizio civile"
                fill
                className="object-cover object-top grayscale"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <p
              className="mt-3 font-condensed text-ink-faint text-xs uppercase tracking-[0.3em]"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              Servizio civile · 2020
            </p>
          </div>

          {/* ── Right: claim + bio ── */}
          <div ref={rightRef} className="flex flex-col gap-7 lg:pt-4">

            {/* Claim */}
            <h2
              className="font-display font-black italic text-ink leading-tight"
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(1.9rem, 3.5vw, 3.2rem)',
                letterSpacing: '-0.02em',
              }}
            >
              Le persone mi hanno insegnato la comunicazione prima dell&apos;università.
            </h2>

            <div
              className="h-px w-12"
              style={{ background: 'var(--green)' }}
            />

            {/* Opening paragraph */}
            <p
              className="text-ink-dim leading-relaxed"
              style={{ fontFamily: 'var(--font-barlow)', fontSize: '1.05rem' }}
            >
              Sono nato a <strong className="font-semibold text-ink">Belluno nel 2001</strong> in una famiglia di otto persone.<br />
              Crescere in un ambiente dove ognuno aveva idee, valori e punti di vista diversi mi ha insegnato presto
              che comunicare non significa parlare, ma <strong className="font-semibold text-ink">farsi capire.</strong>
            </p>

            {/* Summary */}
            <p
              className="text-ink-dim leading-relaxed"
              style={{ fontFamily: 'var(--font-barlow)', fontSize: '1.05rem' }}
            >
              Ho trascorso un anno in <strong className="font-semibold text-ink">servizio civile</strong> a stretto contatto
              con persone con disabilità, poi mi sono laureato a <strong className="font-semibold text-ink">Padova in Comunicazione</strong>{' '}
              e ho conseguito la magistrale in <strong className="font-semibold text-ink">Digital Marketing allo IULM di Milano</strong>.
            </p>

            <p
              className="text-ink-dim leading-relaxed"
              style={{ fontFamily: 'var(--font-barlow)', fontSize: '1.05rem' }}
            >
              Oggi aiuto brand e organizzazioni a costruire una{' '}
              <strong className="font-semibold text-ink">presenza digitale chiara, coerente e strategica</strong>.<br />
              Il mio lavoro parte sempre da una domanda semplice: perché qualcuno dovrebbe scegliere proprio voi?
            </p>

            {/* Data proof */}
            <div
              className="grid grid-cols-3 gap-4 py-5"
              style={{ borderTop: '1px solid rgba(61,92,53,0.1)', borderBottom: '1px solid rgba(61,92,53,0.1)' }}
            >
              {[
                { value: '7+', label: 'anni nel settore' },
                { value: '120k+', label: 'copertura organica' },
                { value: '−73%', label: 'CPL vs benchmark' },
              ].map(({ value, label }) => (
                <div key={value} className="flex flex-col gap-1">
                  <span
                    className="font-display font-black italic text-green leading-none"
                    style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}
                  >
                    {value}
                  </span>
                  <span
                    className="font-condensed uppercase text-ink-faint tracking-[0.15em]"
                    style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: '0.65rem' }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-2 flex items-center gap-6">
              <a
                href="/about"
                className="font-condensed uppercase text-ink text-xs tracking-[0.35em] border-b border-ink pb-0.5 hover:text-green hover:border-green transition-colors duration-300"
                style={{ fontFamily: 'var(--font-barlow-condensed)' }}
              >
                La mia storia →
              </a>
              <div className="flex flex-wrap gap-2">
                {about.skills.slice(0, 4).map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 font-condensed text-xs uppercase tracking-[0.12em] text-ink-dim"
                    style={{
                      fontFamily: 'var(--font-barlow-condensed)',
                      border: '1px solid rgba(61,92,53,0.18)',
                      background: 'rgba(61,92,53,0.03)',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
