'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { LogoCloud } from '@/components/ui/logo-cloud-4';

gsap.registerPlugin(ScrollTrigger);

/* Transparent, single-ink versions of each client's own logo (sourced from their sites).
   displayHeight balances optical weight: wide wordmarks sit lower, compact marks taller. */
const logos = [
  { src: '/logos/clienti/ricambi-carrozzine.png', alt: "Ricambi per Carrozzine", width: 691, height: 200, displayHeight: 36 },
  { src: '/logos/clienti/braghes-wordmark.png', alt: "Braghe's", width: 1386, height: 200, displayHeight: 30 },
  { src: '/logos/clienti/vyst.png', alt: "Vyst", width: 755, height: 200, displayHeight: 28 },
  { src: '/logos/clienti/3d-axis.png', alt: "3D Axis", width: 714, height: 200, displayHeight: 35 },
  { src: '/logos/clienti/crossabili.png', alt: "CROSSabili", width: 506, height: 200, displayHeight: 42 },
  { src: '/logos/clienti/allfit.png', alt: "All Fit", width: 188, height: 200, displayHeight: 56 },
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
      className="w-full py-12 px-8 md:px-20"
      style={{ borderBottom: '1px solid rgba(61,92,53,0.12)' }}
    >
      <div className="max-w-6xl mx-auto">
        <p
          className="text-center font-condensed uppercase text-ink-dim text-xs tracking-[0.4em] mb-8"
          style={{ fontFamily: 'var(--font-barlow-condensed)' }}
        >
          Hanno lavorato con me
        </p>
        <LogoCloud logos={logos} />
      </div>
    </section>
  );
}
