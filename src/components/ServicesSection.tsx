'use client';

import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { services } from '@/lib/services';
import Ornament from '@/components/Ornament';
import { EtherealShadow } from '@/components/ui/etheral-shadow';

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      grid.children,
      { y: 40, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.75, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: grid, start: 'top 80%', once: true },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="servizi"
      className="w-full py-28 px-8 md:px-20 bg-bg-alt relative overflow-hidden"
      style={{ borderTop: '1px solid rgba(61,92,53,0.1)' }}
    >
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        <EtherealShadow
          color="rgba(61, 92, 53, 0.13)"
          animation={{ scale: 45, speed: 55 }}
          noise={{ opacity: 0.08, scale: 1.2 }}
          sizing="fill"
        />
      </div>
      <div className="max-w-6xl mx-auto relative" style={{ zIndex: 1 }}>
        <Ornament index="02" label="Servizi" className="mb-6" />

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
          <h2
            className="font-display font-black italic text-ink leading-tight"
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(2.2rem, 5vw, 4rem)',
            }}
          >
            Come posso<br />aiutarti
          </h2>
          <p
            className="max-w-sm text-ink-dim font-body text-sm leading-relaxed"
            style={{ fontFamily: 'var(--font-barlow)' }}
          >
            Ogni progetto parte dall'ascolto. Poi costruiamo insieme la strategia giusta.
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-px bg-green/10">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: typeof services[number] }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const onEnter = () => {
    gsap.to(cardRef.current, { y: -4, duration: 0.3, ease: 'power2.out' });
    gsap.to(cardRef.current!.querySelector('.card-accent'), { scaleX: 1, duration: 0.4, ease: 'power3.out' });
  };
  const onLeave = () => {
    gsap.to(cardRef.current, { y: 0, duration: 0.4, ease: 'power2.inOut' });
    gsap.to(cardRef.current!.querySelector('.card-accent'), { scaleX: 0, duration: 0.3, ease: 'power3.out' });
  };

  return (
    <div
      ref={cardRef}
      className="relative bg-bg p-8 md:p-10 flex flex-col gap-5 overflow-hidden cursor-default"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      {/* Animated top accent line */}
      <span
        className="card-accent absolute top-0 left-0 right-0 h-px bg-green origin-left"
        style={{ transform: 'scaleX(0)' }}
        aria-hidden
      />

      {/* Title */}
      <div>
        <h3
          className="font-display font-black italic text-ink leading-tight"
          style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
          }}
        >
          {service.title}
        </h3>
        <p
          className="font-condensed text-green text-xs uppercase tracking-[0.3em] mt-1"
          style={{ fontFamily: 'var(--font-barlow-condensed)' }}
        >
          {service.subtitle}
        </p>
      </div>

      {/* Description */}
      <p
        className="text-ink-dim text-sm leading-relaxed"
        style={{ fontFamily: 'var(--font-barlow)' }}
      >
        {service.description}
      </p>

      {/* Deliverables */}
      <ul className="flex flex-col gap-2 mt-auto">
        {service.deliverables.slice(0, 4).map((d) => (
          <li
            key={d}
            className="flex items-center gap-2 font-condensed text-ink-dim text-xs uppercase tracking-[0.15em]"
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            <span className="w-1 h-1 rounded-full bg-green-mid shrink-0" aria-hidden />
            {d}
          </li>
        ))}
        {service.deliverables.length > 4 && (
          <li
            className="font-condensed text-ink-faint text-xs uppercase tracking-[0.15em] pl-3"
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            +{service.deliverables.length - 4} altro
          </li>
        )}
      </ul>

      {/* For who tag */}
      <div
        className="mt-2 pt-4"
        style={{ borderTop: '1px solid rgba(61,92,53,0.08)' }}
      >
        <p
          className="font-condensed text-ink-faint text-xs tracking-[0.2em]"
          style={{ fontFamily: 'var(--font-barlow-condensed)' }}
        >
          Per: {service.forWho}
        </p>
      </div>
    </div>
  );
}
