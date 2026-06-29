'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import Ornament from '@/components/Ornament';

const testimonials = [
  {
    quote:
      'Samuele lo conosco da quando era giovane, con tutto ancora da esprimere. L\'ho coinvolto in progetti, sfide, situazioni — credevo in quello che poteva diventare. Poi ha capito che il marketing e la comunicazione erano il suo terreno, e da lì si è fatto strada da solo, con le sue competenze e una mentalità che pochi hanno.',
    name: 'Mattia Cattapan',
    role: 'Presidente Crossabili & Fondatore Sedut SRL',
    photo: '/testimonials/mattia-cattapan.jpg',
    objectPosition: 'center top',
  },
  {
    quote:
      'Samuele ha saputo entrare nel progetto Vyst con una visione strategica chiara. Il lavoro sulla brand identity e sulla comunicazione ci ha dato una base solida su cui costruire. Risultati concreti, approccio professionale.',
    name: 'Alessandro Pellizzer',
    role: 'Fondatore, Vyst',
    photo: '/testimonials/alessandro-pellizzer.png',
    objectPosition: 'center center',
  },
  {
    quote:
      'Ho coinvolto Samuele in diversi progetti per la parte creativa e per sviluppare messaggi mirati per i brand con cui lavoro. Ogni volta ha portato idee fresche e una capacità rara di adattare il tono al pubblico giusto.',
    name: 'Daniil Kopiev',
    role: 'Advertising Manager',
    photo: '/testimonials/daniil-kopiev.png',
    objectPosition: 'center top',
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
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
      ref={sectionRef}
      className="w-full py-28 px-8 md:px-20"
      style={{ borderTop: '1px solid rgba(61,92,53,0.1)', background: 'var(--bg)' }}
    >
      <div className="max-w-6xl mx-auto">
        <Ornament index="05" label="Clienti" className="mb-6" />

        <div className="mb-14">
          <h2
            className="font-display font-black italic text-ink leading-tight"
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(2.2rem, 5vw, 4rem)',
            }}
          >
            Chi ha lavorato<br />con me
          </h2>
          <p
            className="mt-4 text-ink-dim text-sm leading-relaxed"
            style={{ fontFamily: 'var(--font-barlow)', maxWidth: '36ch' }}
          >
            Le parole di chi ha scelto di costruire qualcosa di concreto insieme.
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-px bg-green/10"
        >
          {testimonials.map(({ quote, name, role, photo, objectPosition }) => (
            <div
              key={name}
              className="bg-bg p-8 md:p-10 flex flex-col gap-6"
            >
              {/* Quote mark */}
              <span
                className="font-display font-black italic text-green/20 leading-none select-none"
                style={{ fontFamily: 'var(--font-playfair)', fontSize: '5rem', lineHeight: 0.8 }}
                aria-hidden
              >
                "
              </span>

              {/* Quote text */}
              <p
                className="text-ink leading-[1.75] flex-1"
                style={{ fontFamily: 'var(--font-barlow)', fontSize: 'clamp(0.95rem, 1.1vw, 1.05rem)' }}
              >
                {quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4" style={{ borderTop: '1px solid rgba(61,92,53,0.08)' }}>
                <div
                  className="relative w-11 h-11 rounded-full overflow-hidden shrink-0"
                  style={{ border: '1.5px solid rgba(61,92,53,0.2)' }}
                >
                  <Image
                    src={photo}
                    alt={name}
                    fill
                    className="object-cover"
                    style={{ objectPosition }}
                    sizes="44px"
                  />
                </div>
                <div>
                  <p
                    className="font-condensed font-bold uppercase text-ink text-xs tracking-[0.25em]"
                    style={{ fontFamily: 'var(--font-barlow-condensed)' }}
                  >
                    {name}
                  </p>
                  <p
                    className="font-condensed text-ink-dim text-xs tracking-wide mt-0.5"
                    style={{ fontFamily: 'var(--font-barlow-condensed)', color: 'var(--orange)' }}
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
