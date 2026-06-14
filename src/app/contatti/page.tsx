import type { Metadata } from 'next';
import Link from 'next/link';
import SmoothScrollHero from '@/components/ui/smooth-scroll-hero';
import Contact from '@/components/Contact';
import { about } from '@/lib/about';

export const metadata: Metadata = {
  title: 'Contatti — Samuele Barchet',
  description: `Contatta Samuele Barchet, Brand & Digital Strategist freelance. Email: ${about.email} — Rispondo entro 24 ore.`,
  alternates: { canonical: 'https://www.samuelebarchet.com/contatti' },
  openGraph: {
    title: 'Contatti — Samuele Barchet',
    description: 'Contatta Samuele Barchet, Brand & Digital Strategist freelance.',
    url: 'https://www.samuelebarchet.com/contatti',
  },
};

const ldJson = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": "https://www.samuelebarchet.com/contatti",
      "name": "Contatti — Samuele Barchet",
      "url": "https://www.samuelebarchet.com/contatti",
      "description": "Contatta Samuele Barchet, Brand & Digital Strategist freelance. Email: info@samuelebarchet.com — Rispondo entro 24 ore.",
      "dateModified": "2026-06-14",
      "about": { "@id": "https://www.samuelebarchet.com/#person" },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.samuelebarchet.com" },
          { "@type": "ListItem", "position": 2, "name": "Contatti", "item": "https://www.samuelebarchet.com/contatti" }
        ],
      },
      "mainEntity": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "email": "info@samuelebarchet.com",
        "telephone": "+393420269217",
        "availableLanguage": [
          { "@type": "Language", "name": "Italian" },
          { "@type": "Language", "name": "English" }
        ],
        "areaServed": { "@type": "Country", "name": "Italy" },
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "18:00",
        },
      },
    }
  ],
};

const howItWorks = [
  {
    step: '01',
    title: 'Mi scrivi',
    body: 'Un messaggio è sufficiente per partire. Raccontami il tuo progetto, la sfida che hai davanti o semplicemente cosa vorresti migliorare nella tua comunicazione.',
  },
  {
    step: '02',
    title: 'Ci confrontiamo',
    body: 'Rispondo entro 24 ore. Se ha senso procedere, organizziamo una chiamata conoscitiva — gratuita e senza impegno — per capire meglio il contesto e valutare insieme come posso esserti utile.',
  },
  {
    step: '03',
    title: 'Costruiamo insieme',
    body: 'Se decidiamo di collaborare, definisco una proposta su misura. Nessun pacchetto standard: il progetto si costruisce attorno alle tue esigenze reali.',
  },
];

export default function ContattiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }} />
      <main>
        <SmoothScrollHero
          scrollHeight={1120}
          desktopImage="/contatti/hero.jpg"
          mobileImage="/contatti/hero-mobile.jpg"
          initialClipPercentage={0}
          finalClipPercentage={100}
          heroLabel="Parliamone"
          heroTitle="A un solo squillo di distanza"
          desktopPosition="center 40%"
          mobileTitleLower
        />

        {/* ── Come funziona ──────────────────────────────────────────────────── */}
        <section
          className="w-full px-8 md:px-20 py-24"
          style={{ borderTop: '1px solid rgba(61,92,53,0.1)' }}
        >
          <div className="max-w-6xl mx-auto">
            <p
              className="font-condensed uppercase text-green text-xs tracking-[0.5em] mb-14"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              Come funziona
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
              {howItWorks.map(({ step, title, body }) => (
                <div key={step} className="flex flex-col gap-4">
                  <span
                    className="font-display font-black italic text-ink/10 leading-none select-none"
                    style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(3.5rem, 6vw, 5rem)', letterSpacing: '-0.04em' }}
                    aria-hidden
                  >
                    {step}
                  </span>
                  <h2
                    className="font-condensed uppercase text-ink text-sm tracking-[0.25em]"
                    style={{ fontFamily: 'var(--font-barlow-condensed)' }}
                  >
                    {title}
                  </h2>
                  <p
                    className="text-ink-dim leading-relaxed"
                    style={{ fontFamily: 'var(--font-barlow)', fontSize: '1rem' }}
                  >
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Info strip ─────────────────────────────────────────────────────── */}
        <section
          className="w-full px-8 md:px-20 py-16"
          style={{ background: 'var(--bg-alt)', borderTop: '1px solid rgba(61,92,53,0.1)' }}
        >
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <p
                className="font-condensed uppercase text-green text-xs tracking-[0.4em] mb-2"
                style={{ fontFamily: 'var(--font-barlow-condensed)' }}
              >
                Email
              </p>
              <a
                href={`mailto:${about.email}`}
                className="text-ink hover:text-green transition-colors duration-300"
                style={{ fontFamily: 'var(--font-barlow)', fontSize: '1rem' }}
              >
                {about.email}
              </a>
            </div>
            <div>
              <p
                className="font-condensed uppercase text-green text-xs tracking-[0.4em] mb-2"
                style={{ fontFamily: 'var(--font-barlow-condensed)' }}
              >
                Dove
              </p>
              <p
                className="text-ink-dim"
                style={{ fontFamily: 'var(--font-barlow)', fontSize: '1rem' }}
              >
                {about.location}
              </p>
            </div>
            <div>
              <p
                className="font-condensed uppercase text-green text-xs tracking-[0.4em] mb-2"
                style={{ fontFamily: 'var(--font-barlow-condensed)' }}
              >
                Disponibilità
              </p>
              <p
                className="text-ink-dim"
                style={{ fontFamily: 'var(--font-barlow)', fontSize: '1rem' }}
              >
                Lun – Ven, 9:00 – 18:00
              </p>
            </div>
          </div>

          <div className="max-w-6xl mx-auto mt-10 pt-8 flex flex-wrap gap-6" style={{ borderTop: '1px solid rgba(61,92,53,0.1)' }}>
            <p
              className="text-ink-faint"
              style={{ fontFamily: 'var(--font-barlow)', fontSize: '0.9rem' }}
            >
              Non sei sicuro da dove iniziare?
            </p>
            <Link
              href="/servizi"
              className="font-condensed uppercase text-ink text-xs tracking-[0.3em] border-b border-ink pb-0.5 hover:text-green hover:border-green transition-colors duration-300"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              Scopri i servizi →
            </Link>
            <Link
              href="/lavori"
              className="font-condensed uppercase text-ink text-xs tracking-[0.3em] border-b border-ink pb-0.5 hover:text-green hover:border-green transition-colors duration-300"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              Guarda i progetti →
            </Link>
          </div>
        </section>

        <Contact />
      </main>
    </>
  );
}
