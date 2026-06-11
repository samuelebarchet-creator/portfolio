import type { Metadata } from 'next';
import Link from 'next/link';
import { projects } from '@/lib/projects';
import ClientsBar from '@/components/ClientsBar';

export const metadata: Metadata = {
  title: 'Lavori — Samuele Barchet',
  description: 'Progetti di brand strategy e comunicazione digitale: Braghe\'s, Programma Formula, RC Ricambi, Citation Rate, Crossabili.',
};

export default function LavoriPage() {
  return (
    <main className="pt-28 pb-0">
      {/* Header */}
      <section className="px-8 md:px-20 pb-16 max-w-6xl mx-auto">
        <p
          className="font-condensed uppercase text-green text-xs tracking-[0.5em] mb-6"
          style={{ fontFamily: 'var(--font-barlow-condensed)' }}
        >
          Tutti i lavori
        </p>
        <h1
          className="font-display font-black italic text-ink leading-[0.88]"
          style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: 'clamp(3.5rem, 9vw, 9rem)',
            letterSpacing: '-0.03em',
          }}
        >
          Progetti
        </h1>
      </section>

      {/* Divider */}
      <div
        className="mx-8 md:mx-20 max-w-6xl"
        style={{ borderTop: '1px solid rgba(61,92,53,0.1)' }}
      />

      {/* Projects grid */}
      <section className="px-8 md:px-20 py-16 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-green/10">
          {projects.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="group block bg-bg p-8 md:p-10 hover:bg-bg-alt transition-colors duration-300"
            >
              <div className="flex items-start justify-between gap-4 mb-6">
                <span
                  className="font-condensed uppercase text-ink-faint text-xs tracking-[0.35em]"
                  style={{ fontFamily: 'var(--font-barlow-condensed)' }}
                >
                  {p.year}
                </span>
                <span
                  className="font-condensed uppercase text-xs tracking-[0.25em] px-2 py-0.5"
                  style={{
                    fontFamily: 'var(--font-barlow-condensed)',
                    color: p.color,
                    border: `1px solid ${p.color}44`,
                    background: `${p.color}0A`,
                  }}
                >
                  {p.tag}
                </span>
              </div>

              <h2
                className="font-display font-black italic text-ink group-hover:text-green transition-colors duration-300 leading-tight mb-2"
                style={{
                  fontFamily: 'var(--font-playfair)',
                  fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                }}
              >
                {p.company}
              </h2>

              <p
                className="font-condensed uppercase text-green text-xs tracking-[0.25em] mb-4"
                style={{ fontFamily: 'var(--font-barlow-condensed)' }}
              >
                {p.role}
              </p>

              <p
                className="text-ink-dim text-sm leading-relaxed mb-6"
                style={{ fontFamily: 'var(--font-barlow)' }}
              >
                {p.description}
              </p>

              {/* Results preview */}
              {p.results.length > 0 && (
                <p
                  className="font-condensed text-green-mid text-xs tracking-wide"
                  style={{ fontFamily: 'var(--font-barlow-condensed)' }}
                >
                  {p.results[0]}
                </p>
              )}

              <div className="flex items-center justify-end mt-6">
                <span
                  className="font-condensed text-ink-faint text-xs uppercase tracking-[0.3em] group-hover:text-green transition-colors duration-300"
                  style={{ fontFamily: 'var(--font-barlow-condensed)' }}
                >
                  Vedi case study →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <ClientsBar />
    </main>
  );
}
