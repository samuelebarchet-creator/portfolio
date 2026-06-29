'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import React from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import Ornament from '@/components/Ornament';

const testimonials = [
  {
    quote: 'Samuele lo conosco da quando era giovane, con tutto ancora da esprimere. L\'ho coinvolto in progetti, sfide, situazioni — credevo in quello che poteva diventare. Poi ha capito che il marketing e la comunicazione erano il suo terreno, e da lì **si è fatto strada da solo**, con le sue competenze e **una mentalità che pochi hanno**.',
    name: 'Mattia Cattapan',
    role: 'Presidente Crossabili & Fondatore Sedut SRL',
    photo: '/testimonials/mattia-cattapan.jpg',
    objectPosition: 'center top',
  },
  {
    quote: 'Samuele ha saputo entrare nel progetto Vyst con **una visione strategica chiara**. Il lavoro sulla brand identity e sulla comunicazione ci ha dato una base solida su cui costruire. **Risultati concreti**, approccio professionale.',
    name: 'Alessandro Pellizzer',
    role: 'Fondatore, Vyst',
    photo: '/testimonials/alessandro-pellizzer.png',
    objectPosition: 'center center',
  },
  {
    quote: 'Ho coinvolto Samuele in diversi progetti per la parte creativa e per sviluppare **messaggi mirati** per i brand con cui lavoro. Ogni volta ha portato **idee fresche** e una capacità rara di adattare il tono al pubblico giusto.',
    name: 'Daniil Kopiev',
    role: 'Advertising Manager',
    photo: '/testimonials/daniil-kopiev.png',
    objectPosition: 'center top',
  },
];

function renderQuote(text: string): React.ReactNode[] {
  return text.split(/(\*\*.*?\*\*)/g).map((part, i) => {
    const bold = part.match(/^\*\*(.*)\*\*$/);
    if (bold) return <strong key={i} className="font-bold text-ink">{bold[1]}</strong>;
    return part;
  });
}

const QUOTE_STYLE: React.CSSProperties = {
  fontFamily: 'var(--font-playfair)',
  fontSize: '4.5rem',
  lineHeight: 1,
  color: 'rgba(212,113,58,0.4)',
  fontWeight: 900,
  fontStyle: 'italic',
  userSelect: 'none',
};

export default function Testimonials() {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const cards = cardsRef.current?.children;
    if (!cards) return;
    gsap.fromTo(
      cards,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: { trigger: cardsRef.current, start: 'top 80%', once: true },
      }
    );
  }, []);

  return (
    <section
      className="w-full py-28 px-8 md:px-20"
      style={{ borderTop: '1px solid rgba(61,92,53,0.1)', background: 'var(--bg)' }}
    >
      <div className="max-w-6xl mx-auto">
        <Ornament index="04" label="Clienti" className="mb-6" />

        <div className="mb-14">
          <h2
            className="font-display font-black italic text-ink leading-tight"
            style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}
          >
            Chi ha lavorato<br />con me
          </h2>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(({ quote, name, role, photo, objectPosition }) => (
            <div
              key={name}
              className="bg-bg flex flex-col gap-5 p-8 md:p-10"
              style={{ border: '1px solid rgba(61,92,53,0.1)' }}
            >
              {/* Opening quote */}
              <span aria-hidden style={QUOTE_STYLE}>&ldquo;</span>

              {/* Quote text */}
              <p
                className="text-ink-dim leading-[1.8] flex-1"
                style={{ fontFamily: 'var(--font-barlow)', fontSize: 'clamp(1rem, 1.15vw, 1.1rem)' }}
              >
                {renderQuote(quote)}
              </p>

              {/* Closing quote — right-aligned */}
              <div className="text-right" aria-hidden>
                <span style={QUOTE_STYLE}>&rdquo;</span>
              </div>

              {/* Author */}
              <div
                className="flex items-center gap-4 pt-5"
                style={{ borderTop: '1px solid rgba(61,92,53,0.08)' }}
              >
                <div
                  className="relative w-16 h-16 rounded-full overflow-hidden shrink-0"
                  style={{ border: '2px solid rgba(61,92,53,0.2)' }}
                >
                  <Image
                    src={photo}
                    alt={name}
                    fill
                    className="object-cover"
                    style={{ objectPosition }}
                    sizes="64px"
                  />
                </div>
                <div>
                  <p
                    className="font-condensed font-bold uppercase text-ink tracking-[0.2em]"
                    style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: '1rem' }}
                  >
                    {name}
                  </p>
                  <p
                    className="font-condensed tracking-wide mt-1"
                    style={{ fontFamily: 'var(--font-barlow-condensed)', color: 'var(--orange)', fontSize: '0.9rem' }}
                  >
                    {role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
