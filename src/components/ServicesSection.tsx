'use client';

import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { services, approachValues } from '@/lib/services';
import { EtherealShadow } from '@/components/ui/etheral-shadow';

function renderText(text: string) {
  return text.split(/(?<=\.)\s+/).flatMap((sentence, si, arr) => {
    const parts = sentence.split(/\*\*(.*?)\*\*/g).map((part, pi) =>
      pi % 2 === 1
        ? <strong key={`${si}-${pi}`} className="font-semibold text-ink">{part}</strong>
        : part
    );
    return si < arr.length - 1 ? [...parts, <br key={`br-${si}`} />] : parts;
  });
}

export default function ServicesSection() {
  const sectionRef   = useRef<HTMLDivElement>(null);
  const approachRef  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    sectionRef.current?.querySelectorAll('.service-row').forEach((row) => {
      gsap.fromTo(
        row,
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.75, ease: 'power3.out',
          scrollTrigger: { trigger: row, start: 'top 85%', once: true },
        }
      );
    });

    if (approachRef.current) {
      gsap.fromTo(
        approachRef.current.querySelectorAll('.approach-item'),
        { y: 28, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.65, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: approachRef.current, start: 'top 82%', once: true },
        }
      );
    }
  }, []);

  return (
    <>
      {/* ── Services ────────────────────────────────────────────────────────── */}
      <section
        ref={sectionRef}
        id="servizi"
        className="w-full px-8 md:px-20 bg-bg-alt relative overflow-hidden"
        style={{ borderTop: '1px solid rgba(61,92,53,0.1)' }}
      >
        <div className="absolute inset-0 pointer-events-none hidden md:block" style={{ zIndex: 0 }}>
          <EtherealShadow
            color="rgba(61, 92, 53, 0.30)"
            animation={{ scale: 45, speed: 55 }}
            noise={{ opacity: 0.14, scale: 1.2 }}
            sizing="fill"
          />
        </div>

        <div className="max-w-6xl mx-auto relative" style={{ zIndex: 1 }}>
          {services.map((service, i) => (
            <div
              key={service.id}
              className="service-row grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16 py-16"
              style={{ borderBottom: '1px solid rgba(61,92,53,0.1)' }}
            >
              {/* Left — title block */}
              <div className="flex flex-col gap-3">
                <span
                  className="font-condensed text-green text-xs uppercase tracking-[0.45em]"
                  style={{ fontFamily: 'var(--font-barlow-condensed)' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h2
                  className="font-display font-black italic text-ink leading-tight"
                  style={{
                    fontFamily: 'var(--font-playfair)',
                    fontSize: 'clamp(1.8rem, 2.8vw, 2.6rem)',
                  }}
                >
                  {service.title}
                </h2>
                <p
                  className="font-condensed text-green uppercase tracking-[0.22em] leading-snug"
                  style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: '0.8rem' }}
                >
                  {service.subtitle}
                </p>
                <div
                  className="mt-4 pt-4"
                  style={{ borderTop: '1px solid rgba(61,92,53,0.1)' }}
                >
                  <p
                    className="font-condensed text-ink-faint text-xs uppercase tracking-[0.2em] mb-1"
                    style={{ fontFamily: 'var(--font-barlow-condensed)' }}
                  >
                    Ideale per
                  </p>
                  <p
                    className="text-ink-dim leading-relaxed"
                    style={{ fontFamily: 'var(--font-barlow)', fontSize: '0.95rem' }}
                  >
                    {service.forWho}
                  </p>
                </div>
              </div>

              {/* Center — description */}
              <div className="flex flex-col gap-5">
                {service.description.split('\n\n').map((para, j) => (
                  <p
                    key={j}
                    className="text-ink leading-[1.75]"
                    style={{ fontFamily: 'var(--font-barlow)', fontSize: 'clamp(1.05rem, 1.3vw, 1.15rem)' }}
                  >
                    {renderText(para)}
                  </p>
                ))}
              </div>

              {/* Right — deliverables */}
              <div>
                <p
                  className="font-condensed uppercase text-green text-xs tracking-[0.4em] mb-5"
                  style={{ fontFamily: 'var(--font-barlow-condensed)' }}
                >
                  Deliverable
                </p>
                <ul className="flex flex-col gap-3">
                  {service.deliverables.map((d) => (
                    <li
                      key={d}
                      className="flex items-start gap-3 text-ink-dim leading-snug"
                      style={{ fontFamily: 'var(--font-barlow)', fontSize: '1rem' }}
                    >
                      <span
                        className="mt-[6px] w-1 h-1 rounded-full bg-green shrink-0"
                        aria-hidden
                      />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Approach ────────────────────────────────────────────────────────── */}
      <section
        ref={approachRef}
        className="w-full px-8 md:px-20 py-24"
        style={{ borderTop: '1px solid rgba(61,92,53,0.1)' }}
      >
        <div className="max-w-6xl mx-auto">
          <p
            className="font-condensed uppercase text-green text-xs tracking-[0.5em] mb-12"
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            Il mio approccio
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {approachValues.map((v) => (
              <div key={v.label} className="approach-item flex flex-col gap-3">
                <span
                  className="w-6 h-px block"
                  style={{ background: 'var(--green)' }}
                  aria-hidden
                />
                <h3
                  className="font-display font-black italic text-ink leading-tight"
                  style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.3rem' }}
                >
                  {v.label}
                </h3>
                <p
                  className="text-ink-dim leading-relaxed"
                  style={{ fontFamily: 'var(--font-barlow)', fontSize: '1rem' }}
                >
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
