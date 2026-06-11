'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { LogoCloud } from '@/components/ui/logo-cloud-4';

gsap.registerPlugin(ScrollTrigger);

const logos = [
  { src: '/logos/ricambi.jpg', alt: 'Ricambi Carrozzine' },
  { src: '/logos/braghes.png', alt: "Braghe's" },
  { src: '/logos/vyst.png', alt: 'Vyst' },
  { src: '/logos/axis.png', alt: 'Axis' },
  { src: '/logos/crossabili.png', alt: 'Crossabili by Mattia Cattapan' },
];

export default function ClientsBar() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 85%', once: true },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="clients"
      className="w-full py-12 px-8 md:px-14"
      style={{ borderBottom: '1px solid rgba(110,158,82,0.1)' }}
    >
      <div className="max-w-6xl mx-auto">
        <p
          className="text-center font-condensed uppercase text-text-dim text-xs tracking-[0.4em] mb-8"
          style={{ fontFamily: 'var(--font-barlow-condensed)' }}
        >
          Hanno lavorato con noi
        </p>
        <LogoCloud logos={logos} />
      </div>
    </section>
  );
}
