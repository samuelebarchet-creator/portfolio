import type { Metadata } from 'next';
import Link from 'next/link';
import SmoothScrollHero from '@/components/ui/smooth-scroll-hero';
import ServicesSection from '@/components/ServicesSection';
import Contact from '@/components/Contact';

export const metadata: Metadata = {
  title: 'Strategia Digitale, AI Marketing e GEO Optimization — Samuele Barchet',
  description: 'Strategia Digitale, AI Marketing, GEO Optimization e Formazione AI per aziende. Consulenza su misura per brand e organizzazioni in Italia.',
  alternates: { canonical: 'https://www.samuelebarchet.com/servizi' },
  openGraph: {
    title: 'Strategia Digitale, AI Marketing e GEO Optimization — Samuele Barchet',
    description: 'Strategia Digitale, AI Marketing, GEO Optimization e Formazione AI. Consulenza su misura per brand e organizzazioni.',
    url: 'https://www.samuelebarchet.com/servizi',
  },
};

const ldJson = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.samuelebarchet.com/servizi",
      "name": "Servizi — Samuele Barchet",
      "url": "https://www.samuelebarchet.com/servizi",
      "description": "Strategia Digitale, AI Marketing, GEO Optimization e Formazione AI per aziende. Consulenza su misura per brand e organizzazioni in Italia.",
      "dateModified": "2026-06-15",
      "about": [
        { "@type": "Thing", "name": "Strategia Digitale" },
        { "@type": "Thing", "name": "AI Marketing" },
        { "@type": "Thing", "name": "GEO Optimization" },
        { "@type": "Thing", "name": "Formazione AI" }
      ],
      "mentions": [
        { "@type": "Thing", "name": "Generative Engine Optimization" },
        { "@type": "Thing", "name": "Meta Ads" },
        { "@type": "Thing", "name": "ChatGPT" },
        { "@type": "Thing", "name": "Perplexity" }
      ],
      "author": { "@id": "https://www.samuelebarchet.com/#person" },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.samuelebarchet.com" },
          { "@type": "ListItem", "position": 2, "name": "Servizi", "item": "https://www.samuelebarchet.com/servizi" }
        ],
      },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Come funziona una collaborazione con Samuele Barchet?",
          "acceptedAnswer": { "@type": "Answer", "text": "Si parte sempre da una chiamata conoscitiva gratuita per capire obiettivi, budget e tempi. Seguono una fase di analisi, la definizione della strategia e poi l'esecuzione. Ogni progetto è regolato da un contratto con scope definito." },
        },
        {
          "@type": "Question",
          "name": "Con che tipo di aziende lavori?",
          "acceptedAnswer": { "@type": "Answer", "text": "Lavoro con PMI, startup, e-commerce e organizzazioni no-profit. Ho seguito 8 brand in settori diversi: dall'inclusione sociale all'e-commerce, dal B2B ai servizi digitali." },
        },
        {
          "@type": "Question",
          "name": "Quanto tempo richiede un progetto di Brand Strategy?",
          "acceptedAnswer": { "@type": "Answer", "text": "Un progetto di brand strategy completo (analisi, posizionamento, messaging framework) richiede in media 4–8 settimane, a seconda della complessità del mercato e dell'organizzazione del cliente." },
        },
        {
          "@type": "Question",
          "name": "Offri servizi continuativi o solo progetti una tantum?",
          "acceptedAnswer": { "@type": "Answer", "text": "Entrambi. Per i progetti una tantum (lancio brand, riposizionamento) si lavora a fee di progetto. Per il supporto continuativo è disponibile la Strategic Partnership: sessioni regolari, revisione delle attività marketing e coordinamento fornitori." },
        },
        {
          "@type": "Question",
          "name": "Lavori solo in Italia?",
          "acceptedAnswer": { "@type": "Answer", "text": "Principalmente sì, ma collaboro anche con brand italiani che operano in mercati internazionali. Le sessioni di lavoro si svolgono in italiano, in presenza o da remoto." },
        },
      ],
    },
  ],
};

export default function ServiziPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }} />
      <main>
      {/* Hero — smooth scroll reveal (stesso pattern dell'About) */}
      <SmoothScrollHero
        scrollHeight={1120}
        desktopImage="/servizi/hero.jpg"
        mobileImage="/servizi/hero-mobile.jpg"
        initialClipPercentage={0}
        finalClipPercentage={100}
        heroLabel="Servizi"
        heroTitle="Dove la strategia mette radici"
      />

      {/* Intro */}
      <section className="px-8 md:px-20 pt-20 pb-16 max-w-6xl mx-auto">
        <div className="max-w-2xl flex flex-col gap-5">
          <p
            className="text-ink leading-relaxed"
            style={{ fontFamily: 'var(--font-barlow)', fontSize: 'clamp(1rem, 1.3vw, 1.15rem)' }}
          >
            Ogni progetto è diverso, ma il punto di partenza è sempre lo stesso: capire dove sei oggi, dove vuoi arrivare e cosa ti sta impedendo di farlo.
          </p>
          <p
            className="text-ink-dim leading-relaxed"
            style={{ fontFamily: 'var(--font-barlow)', fontSize: 'clamp(1rem, 1.3vw, 1.15rem)' }}
          >
            Lavoro con aziende, professionisti e organizzazioni che hanno qualcosa di importante da offrire ma hanno bisogno di una strategia più chiara per comunicarlo.{' '}
            <Link href="/about" className="text-green underline underline-offset-2 hover:no-underline">Scopri chi sono</Link> o guarda i{' '}
            <Link href="/lavori" className="text-green underline underline-offset-2 hover:no-underline">lavori realizzati</Link>.
          </p>
        </div>

        {/* KPI row */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-0 max-w-2xl" style={{ borderTop: '1px solid rgba(61,92,53,0.12)' }}>
          {[
            { value: '8', label: 'Brand seguiti attivamente in settori diversi' },
            { value: '120k+', label: 'Copertura organica su singolo contenuto' },
            { value: '−73%', label: 'CPL vs benchmark su campagne di acquisizione' },
          ].map(({ value, label }, i) => (
            <div
              key={value}
              className="pt-6 pr-8"
              style={i < 2 ? { borderRight: '1px solid rgba(61,92,53,0.12)' } : undefined}
            >
              <p
                className="font-display font-black italic text-green leading-none mb-2"
                style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
              >
                {value}
              </p>
              <p
                className="font-condensed text-ink-faint uppercase tracking-[0.18em] leading-snug"
                style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: '0.72rem' }}
              >
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <ServicesSection />

      {/* FAQ */}
      <section
        className="px-8 md:px-20 py-20"
        style={{ borderTop: '1px solid rgba(61,92,53,0.1)' }}
      >
        <div className="max-w-6xl mx-auto">
          <p
            className="font-condensed uppercase text-xs tracking-[0.5em] mb-6"
            style={{ fontFamily: 'var(--font-barlow-condensed)', color: 'var(--orange)', fontWeight: 'bold' }}
          >
            FAQ
          </p>
          <h2
            className="font-display font-black italic text-ink leading-tight mb-12"
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              letterSpacing: '-0.02em',
            }}
          >
            Domande frequenti
          </h2>

          <div className="flex flex-col" style={{ borderTop: '1px solid rgba(61,92,53,0.1)' }}>
            {([
              {
                q: 'Come funziona una collaborazione?',
                a: <span>Si parte sempre da una chiamata conoscitiva gratuita per capire obiettivi, budget e tempi. Seguono analisi, strategia e poi l&apos;esecuzione. Ogni progetto è regolato da contratto.{' '}<Link href="/contatti" className="text-green underline underline-offset-2 hover:no-underline">Scrivimi qui</Link>.</span>,
              },
              {
                q: 'Con che tipo di aziende lavori?',
                a: <span>Lavoro con PMI, startup, e-commerce e organizzazioni no-profit. Ho seguito <strong className="text-ink">8 brand in settori diversi</strong>.{' '}<Link href="/lavori" className="text-green underline underline-offset-2 hover:no-underline">Guarda i lavori</Link>.</span>,
              },
              {
                q: 'Quanto tempo richiede un progetto di Brand Strategy?',
                a: "Un progetto di brand strategy completo (analisi, posizionamento, messaging framework) richiede in media 4–8 settimane, a seconda della complessità del mercato e dell'organizzazione.",
              },
              {
                q: 'Offri servizi continuativi o solo progetti una tantum?',
                a: "Entrambi. Per i progetti una tantum si lavora a fee di progetto. Per il supporto continuativo è disponibile la Strategic Partnership: sessioni regolari, revisione delle attività e coordinamento fornitori.",
              },
              {
                q: 'Lavori solo in Italia?',
                a: "Principalmente sì, ma collaboro anche con brand italiani che operano in mercati internazionali. Le sessioni si svolgono in italiano, in presenza o da remoto.",
              },
            ]).map(({ q, a }) => (
              <div
                key={q}
                className="py-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16"
                style={{ borderBottom: '1px solid rgba(61,92,53,0.1)' }}
              >
                <p
                  className="font-display font-black italic text-ink leading-snug"
                  style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1rem, 1.5vw, 1.2rem)' }}
                >
                  {q}
                </p>
                <p
                  className="text-ink-dim leading-relaxed"
                  style={{ fontFamily: 'var(--font-barlow)', fontSize: '0.95rem' }}
                >
                  {a}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-8">
            <Link
              href="/about"
              className="font-condensed uppercase text-ink text-xs tracking-[0.35em] border-b border-ink pb-0.5 hover:text-green hover:border-green transition-colors duration-300"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              Chi sono →
            </Link>
            <Link
              href="/lavori"
              className="font-condensed uppercase text-ink text-xs tracking-[0.35em] border-b border-ink pb-0.5 hover:text-green hover:border-green transition-colors duration-300"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              I miei lavori →
            </Link>
            <Link
              href="/contatti"
              className="font-condensed uppercase text-ink text-xs tracking-[0.35em] border-b border-ink pb-0.5 hover:text-green hover:border-green transition-colors duration-300"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              Inizia un progetto →
            </Link>
          </div>
        </div>
      </section>

      <Contact />
    </main>
    </>
  );
}
