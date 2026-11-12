import type { Metadata } from 'next';
import Link from 'next/link';
import LeadForm from '@/components/LeadForm';

const URL = 'https://www.samuelebarchet.com/belluno/audit-geo';
const TITLE = 'Audit GEO gratuito per aziende di Belluno — Samuele Barchet';
const DESCRIPTION =
  'Scopri se ChatGPT, Perplexity e Gemini citano la tua azienda. Audit GEO gratuito per imprese e professionisti della provincia di Belluno.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: URL },
};

const checks = [
  { title: 'Presenza', body: "Faccio ai motori AI le domande che farebbe un tuo potenziale cliente e verifico se la tua azienda compare." },
  { title: 'Accuratezza', body: 'Controllo se le informazioni su di te sono corrette: servizi, zona, contatti e descrizione.' },
  { title: 'Fonti', body: 'Individuo le pagine da cui i modelli prendono le informazioni, sul tuo sito e fuori.' },
  { title: 'Concorrenti', body: 'Vedo chi viene citato al posto tuo e quali segnali lo rendono più visibile.' },
];

const faqs = [
  { q: "L'audit è davvero gratuito?", a: "Sì. Non devi acquistare nulla e dopo il report non hai alcun obbligo di proseguire." },
  { q: 'Chi può richiederlo?', a: 'Aziende, attività e professionisti con sede in provincia di Belluno e un sito web attivo.' },
  { q: 'Cosa ricevo?', a: 'Un report sintetico via email con i risultati su ChatGPT, Perplexity e Gemini e tre priorità da cui partire.' },
  { q: "L'audit garantisce citazioni nelle risposte AI?", a: "No. Le risposte dei modelli cambiano nel tempo e nessuno può garantire una citazione: l'audit mostra la situazione attuale e dove conviene intervenire." },
];

const ldJson = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': URL,
      url: URL,
      name: TITLE,
      description: DESCRIPTION,
      dateModified: '2026-11-05',
      about: { '@type': 'Thing', name: 'Generative Engine Optimization' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.samuelebarchet.com' },
          { '@type': 'ListItem', position: 2, name: 'Belluno', item: 'https://www.samuelebarchet.com/belluno' },
          { '@type': 'ListItem', position: 3, name: 'Audit GEO', item: URL },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map(({ q, a }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    },
  ],
};

const eyebrow = {
  fontFamily: 'var(--font-barlow-condensed)',
  color: 'var(--orange-text)',
  fontWeight: 'bold',
} as const;
const heading = { fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', letterSpacing: '-0.02em' };
const body = { fontFamily: 'var(--font-barlow)', fontSize: '1.05rem' };

export default function AuditGeoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }} />
      <main>
        <section className="w-full px-8 md:px-20 pt-40 pb-24" style={{ background: 'var(--ink)' }}>
          <div className="max-w-6xl mx-auto">
            <p className="font-condensed uppercase text-xs tracking-[0.5em] mb-6" style={eyebrow}>
              <Link href="/belluno" className="hover:underline">Belluno</Link> · Audit GEO
            </p>
            <h1
              className="font-display font-black italic text-bg leading-[0.95]"
              style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(2.2rem, 5.5vw, 4.6rem)', letterSpacing: '-0.03em', maxWidth: '20ch' }}
            >
              Audit GEO gratuito per aziende di Belluno
            </h1>
            <p
              className="mt-8 text-bg/70 leading-relaxed max-w-2xl"
              style={{ fontFamily: 'var(--font-barlow)', fontSize: 'clamp(1rem, 1.3vw, 1.15rem)' }}
            >
              Quando qualcuno chiede a ChatGPT, Perplexity o Gemini chi contattare nella tua zona, la tua azienda compare? Te lo mostro con un report chiaro e tre priorità da cui partire.
            </p>
            <a
              href="#richiesta"
              className="inline-block mt-10 font-condensed uppercase text-xs tracking-[0.35em] border-b border-bg/50 pb-0.5"
              style={eyebrow}
            >
              Richiedi l&apos;audit →
            </a>
          </div>
        </section>

        <section className="w-full px-8 md:px-20 py-24" style={{ borderBottom: '1px solid rgba(61,92,53,0.1)' }}>
          <div className="max-w-6xl mx-auto">
            <p className="font-condensed uppercase text-xs tracking-[0.5em] mb-4" style={eyebrow}>Cosa controllo</p>
            <h2 className="font-display font-black italic text-ink leading-tight mb-14" style={heading}>
              Quattro verifiche sulla tua visibilità nei motori AI
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {checks.map(({ title, body: text }) => (
                <div key={title} className="flex flex-col gap-3 p-8" style={{ border: '1px solid rgba(61,92,53,0.15)' }}>
                  <h3
                    className="font-display font-black italic text-ink leading-tight"
                    style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.3rem, 2vw, 1.6rem)' }}
                  >
                    {title}
                  </h3>
                  <p className="text-ink-dim leading-relaxed" style={body}>{text}</p>
                </div>
              ))}
            </div>
            <p className="mt-10">
              <Link href="/belluno/geo" className="text-green underline underline-offset-2 hover:no-underline" style={{ fontFamily: 'var(--font-barlow)' }}>
                Come funziona la GEO Optimization a Belluno →
              </Link>
            </p>
          </div>
        </section>

        <section id="richiesta" className="w-full px-8 md:px-20 py-24" style={{ background: 'var(--bg-alt)' }}>
          <div className="max-w-3xl mx-auto">
            <p className="font-condensed uppercase text-xs tracking-[0.5em] mb-4" style={eyebrow}>Richiedi l&apos;audit</p>
            <h2 className="font-display font-black italic text-ink leading-tight mb-10" style={heading}>
              Parti dal tuo sito
            </h2>
            <LeadForm source="audit-geo" messageLabel="Quali clienti vorresti raggiungere?" submitLabel="Richiedi l'audit gratuito" />
          </div>
        </section>

        <section className="w-full px-8 md:px-20 py-24">
          <div className="max-w-3xl mx-auto">
            <p className="font-condensed uppercase text-xs tracking-[0.5em] mb-10" style={eyebrow}>Domande frequenti</p>
            <div className="flex flex-col gap-10">
              {faqs.map(({ q, a }) => (
                <div key={q}>
                  <h2 className="text-ink font-semibold mb-2" style={body}>{q}</h2>
                  <p className="text-ink-dim leading-relaxed" style={body}>{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
