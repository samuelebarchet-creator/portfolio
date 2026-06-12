import type { Metadata } from 'next';
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
      "dateModified": "2026-06-12",
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

export default function ContattiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }} />
      <main className="pt-16">
      {/* Page intro */}
      <section className="px-8 md:px-20 pt-20 pb-4 max-w-6xl mx-auto">
        <p
          className="font-condensed uppercase text-green text-xs tracking-[0.5em] mb-6"
          style={{ fontFamily: 'var(--font-barlow-condensed)' }}
        >
          Parliamo
        </p>
        <h1
          className="font-display font-black italic text-ink leading-[0.9]"
          style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: 'clamp(3rem, 8vw, 8rem)',
            letterSpacing: '-0.03em',
          }}
        >
          Contatti
        </h1>
      </section>

      <Contact />
    </main>
    </>
  );
}
