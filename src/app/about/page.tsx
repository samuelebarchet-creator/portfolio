import type { Metadata } from 'next';
import About from '@/components/About';
import StatsBar from '@/components/StatsBar';
import Contact from '@/components/Contact';
import { about } from '@/lib/about';

export const metadata: Metadata = {
  title: 'About — Samuele Barchet',
  description: about.headline,
};

export default function AboutPage() {
  return (
    <main className="pt-16">
      {/* Page intro */}
      <section
        className="px-6 md:px-14 pt-20 pb-12 max-w-6xl mx-auto"
      >
        <p
          className="font-condensed uppercase text-green text-xs tracking-[0.5em] mb-6"
          style={{ fontFamily: 'var(--font-barlow-condensed)' }}
        >
          Chi sono
        </p>
        <h1
          className="font-display font-black italic text-ink leading-[0.9]"
          style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: 'clamp(3rem, 8vw, 8rem)',
            letterSpacing: '-0.03em',
          }}
        >
          {about.name}
        </h1>
        <p
          className="mt-4 font-condensed uppercase text-green text-sm tracking-[0.3em]"
          style={{ fontFamily: 'var(--font-barlow-condensed)' }}
        >
          {about.role} · {about.location}
        </p>
      </section>

      <StatsBar />
      <About />

      {/* Tools section */}
      <section
        className="px-6 md:px-14 py-20 max-w-6xl mx-auto"
        style={{ borderTop: '1px solid rgba(61,92,53,0.1)' }}
      >
        <p
          className="font-condensed uppercase text-ink-faint text-xs tracking-[0.4em] mb-6"
          style={{ fontFamily: 'var(--font-barlow-condensed)' }}
        >
          Strumenti
        </p>
        <div className="flex flex-wrap gap-3">
          {about.tools.map((tool) => (
            <span
              key={tool}
              className="px-4 py-2 font-condensed text-xs uppercase tracking-[0.15em] text-ink-dim"
              style={{
                fontFamily: 'var(--font-barlow-condensed)',
                border: '1px solid rgba(61,92,53,0.15)',
                background: 'rgba(61,92,53,0.03)',
              }}
            >
              {tool}
            </span>
          ))}
        </div>
      </section>

      <Contact />
    </main>
  );
}
