import type { Metadata } from 'next';
import Link from 'next/link';
import Contact from '@/components/Contact';
import { EtherealShadow } from '@/components/ui/etheral-shadow';

export const metadata: Metadata = {
  title: 'Automazioni AI per PMI a Belluno — Samuele Barchet',
  description:
    "Automazioni AI per PMI a Belluno: workflow, agenti AI e processi automatizzati per far risparmiare tempo alle aziende del territorio bellunese.",
  alternates: { canonical: 'https://www.samuelebarchet.com/belluno/automazioni-ai' },
  openGraph: {
    title: 'Automazioni AI per PMI a Belluno — Samuele Barchet',
    description: 'Workflow e agenti AI per automatizzare i processi delle PMI a Belluno.',
    url: 'https://www.samuelebarchet.com/belluno/automazioni-ai',
  },
};

const ldJson = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.samuelebarchet.com/belluno/automazioni-ai',
      url: 'https://www.samuelebarchet.com/belluno/automazioni-ai',
      name: 'Automazioni AI per PMI a Belluno — Samuele Barchet',
      description:
        "Automazioni AI per PMI a Belluno: workflow, agenti AI e processi automatizzati per far risparmiare tempo alle aziende del territorio bellunese.",
      dateModified: '2026-06-16',
      about: [
        { '@type': 'Thing', name: 'Automazioni AI Belluno' },
        { '@type': 'Thing', name: 'AI Automation per PMI' },
      ],
      author: { '@id': 'https://www.samuelebarchet.com/#person' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.samuelebarchet.com' },
          { '@type': 'ListItem', position: 2, name: 'Marketing Digitale a Belluno', item: 'https://www.samuelebarchet.com/belluno' },
          { '@type': 'ListItem', position: 3, name: 'Automazioni AI a Belluno', item: 'https://www.samuelebarchet.com/belluno/automazioni-ai' },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Cosa intendi per "automazioni AI"?',
          acceptedAnswer: { '@type': 'Answer', text: 'Workflow che collegano strumenti diversi (email, CRM, social, foglio di calcolo) e usano l\'intelligenza artificiale per eseguire compiti ripetitivi senza intervento manuale: rispondere a richieste comuni, smistare contatti, generare prime bozze di contenuti.' },
        },
        {
          '@type': 'Question',
          name: 'Servono competenze tecniche per usarle?',
          acceptedAnswer: { '@type': 'Answer', text: 'No. Mi occupo io della parte tecnica — costruzione, test, messa in produzione. Al team resta un\'interfaccia semplice da usare e una formazione su come funziona, per capire cosa succede dietro le quinte.' },
        },
        {
          '@type': 'Question',
          name: 'Quali processi si possono automatizzare per primi?',
          acceptedAnswer: { '@type': 'Answer', text: 'Di solito si parte da quelli più ripetitivi e a basso rischio: risposte automatiche a richieste frequenti, smistamento lead, generazione di prime bozze per contenuti e report periodici.' },
        },
      ],
    },
  ],
};

const cases = [
  {
    title: 'Customer service automatizzato',
    body: 'Risposte immediate alle domande più frequenti su email o sito, con escalation automatica a una persona quando la richiesta è complessa.',
  },
  {
    title: 'Smistamento e qualificazione lead',
    body: "Ogni nuovo contatto viene categorizzato e indirizzato automaticamente alla persona o al flusso giusto, senza passare ore a leggere ogni richiesta manualmente.",
  },
  {
    title: 'Generazione contenuti ricorrenti',
    body: 'Report periodici, riassunti, prime bozze di newsletter o post social generati automaticamente a partire dai tuoi dati, pronti per una revisione rapida.',
  },
  {
    title: 'Agenti AI per processi interni',
    body: "Workflow su misura che collegano i tuoi strumenti esistenti (CRM, fogli di calcolo, email) per eliminare i passaggi manuali più dispendiosi.",
  },
];

export default function AutomazioniAIBellunoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }} />
      <main>
        {/* ── Hero — testo su ink ──────────────────────────────────────────── */}
        <section className="w-full px-8 md:px-20 pt-40 pb-24" style={{ background: 'var(--ink)' }}>
          <div className="max-w-6xl mx-auto">
            <p
              className="font-condensed uppercase text-green text-xs tracking-[0.5em] mb-6"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              <Link href="/belluno" className="hover:underline">Belluno</Link> · Automazioni AI
            </p>
            <h1
              className="font-display font-black italic text-bg leading-[0.95]"
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(2.4rem, 6vw, 5rem)',
                letterSpacing: '-0.03em',
                maxWidth: '18ch',
              }}
            >
              Automazioni AI per PMI a Belluno
            </h1>
            <p
              className="mt-8 text-bg/70 leading-relaxed max-w-2xl"
              style={{ fontFamily: 'var(--font-barlow)', fontSize: 'clamp(1rem, 1.3vw, 1.15rem)' }}
            >
              Costruisco workflow e agenti AI che fanno risparmiare tempo alle PMI del territorio bellunese su attività ripetitive: customer service, lead, contenuti, reportistica.
            </p>
            <div className="mt-10 flex flex-wrap gap-6">
              <Link
                href="/contatti"
                className="font-condensed uppercase text-bg text-xs tracking-[0.35em] border-b border-bg/50 pb-0.5 hover:text-green hover:border-green transition-colors duration-300"
                style={{ fontFamily: 'var(--font-barlow-condensed)' }}
              >
                Parliamone →
              </Link>
              <Link
                href="/belluno/ai-marketing"
                className="font-condensed uppercase text-bg/50 text-xs tracking-[0.35em] border-b border-bg/25 pb-0.5 hover:text-green hover:border-green transition-colors duration-300"
                style={{ fontFamily: 'var(--font-barlow-condensed)' }}
              >
                AI Marketing →
              </Link>
            </div>
          </div>
        </section>

        {/* ── Perché serve ─────────────────────────────────────────────────── */}
        <section
          className="relative w-full px-8 md:px-20 py-24 overflow-hidden"
          style={{ borderBottom: '1px solid rgba(61,92,53,0.1)' }}
        >
          <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
            <EtherealShadow
              color="rgba(61, 92, 53, 0.22)"
              animation={{ scale: 45, speed: 55 }}
              noise={{ opacity: 0.12, scale: 1.2 }}
              sizing="fill"
            />
          </div>
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 relative" style={{ zIndex: 1 }}>
            <div>
              <p
                className="font-condensed uppercase text-green text-xs tracking-[0.5em] mb-6"
                style={{ fontFamily: 'var(--font-barlow-condensed)' }}
              >
                Perché serve
              </p>
              <h2
                className="font-display font-black italic text-ink leading-tight mb-8"
                style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', letterSpacing: '-0.02em' }}
              >
                Il tempo che sprechi su attività ripetitive
              </h2>
            </div>
            <div className="flex flex-col gap-5 lg:pt-2">
              <p className="text-ink-dim leading-relaxed" style={{ fontFamily: 'var(--font-barlow)', fontSize: '1.05rem' }}>
                Nelle PMI bellunesi, spesso le stesse due o tre persone gestiscono vendite, comunicazione e amministrazione. Molte ore settimanali finiscono in attività <strong className="font-semibold text-ink">ripetitive e a basso valore</strong>: rispondere alle stesse domande, smistare contatti, compilare report.
              </p>
              <p className="text-ink-dim leading-relaxed" style={{ fontFamily: 'var(--font-barlow)', fontSize: '1.05rem' }}>
                Le automazioni AI non sostituiscono le persone. <strong className="font-semibold text-ink">Liberano tempo</strong> da dedicare a ciò che richiede davvero un giudizio umano: relazioni con i clienti, strategia, decisioni.
              </p>
              <p className="text-ink-dim leading-relaxed" style={{ fontFamily: 'var(--font-barlow)', fontSize: '1.05rem' }}>
                Costruisco workflow su misura, partendo da un'analisi dei processi esistenti — non template generici che non si adattano a come lavora davvero la tua azienda.
              </p>
            </div>
          </div>
        </section>

        {/* ── Casi d'uso ───────────────────────────────────────────────────── */}
        <section
          className="relative w-full px-8 md:px-20 py-24 overflow-hidden"
          style={{ background: 'var(--bg-alt)', borderBottom: '1px solid rgba(61,92,53,0.1)' }}
        >
          <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
            <EtherealShadow
              color="rgba(61, 92, 53, 0.22)"
              animation={{ scale: 45, speed: 55 }}
              noise={{ opacity: 0.12, scale: 1.2 }}
              sizing="fill"
            />
          </div>
          <div className="max-w-6xl mx-auto relative" style={{ zIndex: 1 }}>
            <p
              className="font-condensed uppercase text-green text-xs tracking-[0.5em] mb-4"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              Cosa automatizzo
            </p>
            <h2
              className="font-display font-black italic text-ink leading-tight mb-14"
              style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', letterSpacing: '-0.02em' }}
            >
              Processi reali, non demo da conferenza
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cases.map(({ title, body }, i) => (
                <div
                  key={title}
                  className="flex flex-col gap-4 p-8"
                  style={{ border: '1px solid rgba(61,92,53,0.15)', background: 'var(--bg)' }}
                >
                  <span
                    className="font-condensed text-green text-xs uppercase tracking-[0.4em]"
                    style={{ fontFamily: 'var(--font-barlow-condensed)' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3
                    className="font-display font-black italic text-ink leading-tight"
                    style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.3rem, 2vw, 1.7rem)' }}
                  >
                    {title}
                  </h3>
                  <p className="text-ink-dim leading-relaxed" style={{ fontFamily: 'var(--font-barlow)', fontSize: '1rem' }}>
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────────────── */}
        <section className="px-8 md:px-20 py-20" style={{ borderBottom: '1px solid rgba(61,92,53,0.1)' }}>
          <div className="max-w-6xl mx-auto">
            <p
              className="font-condensed uppercase text-green text-xs tracking-[0.5em] mb-6"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              FAQ
            </p>
            <div className="flex flex-col" style={{ borderTop: '1px solid rgba(61,92,53,0.1)' }}>
              {([
                { q: 'Cosa intendi per "automazioni AI"?', a: "Workflow che collegano strumenti diversi (email, CRM, social, foglio di calcolo) e usano l'intelligenza artificiale per eseguire compiti ripetitivi senza intervento manuale: rispondere a richieste comuni, smistare contatti, generare prime bozze di contenuti." },
                { q: 'Servono competenze tecniche per usarle?', a: "No. Mi occupo io della parte tecnica — costruzione, test, messa in produzione. Al team resta un'interfaccia semplice da usare e una formazione su come funziona, per capire cosa succede dietro le quinte." },
                { q: 'Quali processi si possono automatizzare per primi?', a: 'Di solito si parte da quelli più ripetitivi e a basso rischio: risposte automatiche a richieste frequenti, smistamento lead, generazione di prime bozze per contenuti e report periodici.' },
              ]).map(({ q, a }) => (
                <div
                  key={q}
                  className="py-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16"
                  style={{ borderBottom: '1px solid rgba(61,92,53,0.1)' }}
                >
                  <p className="font-display font-black italic text-ink leading-snug" style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1rem, 1.5vw, 1.2rem)' }}>
                    {q}
                  </p>
                  <p className="text-ink-dim leading-relaxed" style={{ fontFamily: 'var(--font-barlow)', fontSize: '0.95rem' }}>
                    {a}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-12 flex flex-wrap gap-8">
              <Link href="/belluno" className="font-condensed uppercase text-ink text-xs tracking-[0.35em] border-b border-ink pb-0.5 hover:text-green hover:border-green transition-colors duration-300" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>
                Marketing a Belluno →
              </Link>
              <Link href="/belluno/geo" className="font-condensed uppercase text-ink text-xs tracking-[0.35em] border-b border-ink pb-0.5 hover:text-green hover:border-green transition-colors duration-300" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>
                GEO Optimization →
              </Link>
            </div>
          </div>
        </section>

        <Contact />
      </main>
    </>
  );
}
