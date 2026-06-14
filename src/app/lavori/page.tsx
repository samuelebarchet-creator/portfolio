import type { Metadata } from 'next';
import Link from 'next/link';
import { projects } from '@/lib/projects';
import SmoothScrollHero from '@/components/ui/smooth-scroll-hero';
import ScrollReveal from '@/components/ScrollReveal';
import ClientsBar from '@/components/ClientsBar';
import { EtherealShadow } from '@/components/ui/etheral-shadow';

export const metadata: Metadata = {
  title: 'Progetti di Brand Strategy e Comunicazione — Samuele Barchet',
  description: "Progetti di brand strategy e comunicazione digitale: Braghe's, Programma Formula, RC Ricambi, Citation Rate, Crossabili, Vyst.",
  alternates: { canonical: 'https://www.samuelebarchet.com/lavori' },
  openGraph: {
    title: 'Progetti di Brand Strategy e Comunicazione — Samuele Barchet',
    description: "Progetti di brand strategy e comunicazione digitale seguiti da Samuele Barchet.",
    url: 'https://www.samuelebarchet.com/lavori',
  },
};

export default function LavoriPage() {
  const ldJson = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://www.samuelebarchet.com/lavori",
        "name": "Lavori — Samuele Barchet",
        "url": "https://www.samuelebarchet.com/lavori",
        "description": "Progetti di brand strategy e comunicazione digitale: Braghe's, Programma Formula, RC Ricambi, Citation Rate, Crossabili, Vyst.",
        "dateModified": "2026-06-12",
        "about": { "@type": "Thing", "name": "Brand Strategy e Digital Marketing" },
        "mentions": [
          { "@type": "Thing", "name": "Meta Ads" },
          { "@type": "Thing", "name": "Brand Identity" },
          { "@type": "Thing", "name": "Social Media Marketing" },
          { "@type": "Thing", "name": "Content Strategy" }
        ],
        "author": { "@id": "https://www.samuelebarchet.com/#person" },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.samuelebarchet.com" },
            { "@type": "ListItem", "position": 2, "name": "Lavori", "item": "https://www.samuelebarchet.com/lavori" }
          ]
        },
        "mainEntity": {
          "@type": "ItemList",
          "name": "Portfolio di Samuele Barchet",
          "numberOfItems": projects.length,
          "itemListElement": projects.map((p, i) => ({
            "@type": "ListItem",
            "position": i + 1,
            "url": `https://www.samuelebarchet.com/projects/${p.slug}`,
            "name": p.company,
          })),
        },
      }
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }} />

      {/* Hero — smooth scroll reveal (stesso pattern dell'About) */}
      <SmoothScrollHero
        scrollHeight={1120}
        desktopImage="/lavori/hero.jpg"
        mobileImage="/lavori/hero-mobile.jpg"
        initialClipPercentage={0}
        finalClipPercentage={100}
        heroLabel="Lavori"
        heroTitle="Il valore si costruisce a mano"
        desktopPosition="center 80%"
      />

      <main className="pb-0 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none hidden md:block" style={{ zIndex: 0 }}>
        <EtherealShadow
          color="rgba(61, 92, 53, 0.22)"
          animation={{ scale: 55, speed: 40 }}
          noise={{ opacity: 0.10, scale: 1.4 }}
          sizing="fill"
        />
      </div>

      {/* Projects grid */}
      <section className="px-8 md:px-20 py-16 max-w-6xl mx-auto relative" style={{ zIndex: 1 }}>
        <ScrollReveal staggerChildren stagger={0.08} className="grid grid-cols-1 md:grid-cols-2 gap-px bg-green/10">
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
        </ScrollReveal>
      </section>

      <ClientsBar />
    </main>
    </>
  );
}
