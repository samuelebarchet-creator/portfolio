import type { Metadata } from 'next';
import Link from 'next/link';
import Contact from '@/components/Contact';
import { EtherealShadow } from '@/components/ui/etheral-shadow';

export const metadata: Metadata = {
  title: 'GEO Optimization a Belluno — Essere citati da ChatGPT | Samuele Barchet',
  description:
    "Esperto GEO (Generative Engine Optimization) e ChatGPT per aziende a Belluno. Ottimizzo la visibilità del tuo brand nelle risposte di ChatGPT, Perplexity e Gemini.",
  alternates: { canonical: 'https://www.samuelebarchet.com/belluno/geo' },
  openGraph: {
    title: 'GEO Optimization a Belluno — Essere citati da ChatGPT | Samuele Barchet',
    description: 'Esperto GEO e ChatGPT per aziende a Belluno. Ottimizzo la visibilità nelle risposte dei motori AI.',
    url: 'https://www.samuelebarchet.com/belluno/geo',
  },
};

const ldJson = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.samuelebarchet.com/belluno/geo',
      url: 'https://www.samuelebarchet.com/belluno/geo',
      name: 'GEO Optimization a Belluno — Samuele Barchet',
      description:
        "Esperto GEO (Generative Engine Optimization) e ChatGPT per aziende a Belluno. Ottimizzo la visibilità del tuo brand nelle risposte di ChatGPT, Perplexity e Gemini.",
      dateModified: '2026-06-16',
      about: [
        { '@type': 'Thing', name: 'GEO Belluno' },
        { '@type': 'Thing', name: 'Generative Engine Optimization' },
        { '@type': 'Thing', name: 'Esperto ChatGPT per aziende' },
      ],
      author: { '@id': 'https://www.samuelebarchet.com/#person' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.samuelebarchet.com' },
          { '@type': 'ListItem', position: 2, name: 'Marketing Digitale a Belluno', item: 'https://www.samuelebarchet.com/belluno' },
          { '@type': 'ListItem', position: 3, name: 'GEO a Belluno', item: 'https://www.samuelebarchet.com/belluno/geo' },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Cosa significa GEO (Generative Engine Optimization)?',
          acceptedAnswer: { '@type': 'Answer', text: 'È la disciplina che ottimizza la presenza di un brand nelle risposte dei motori generativi come ChatGPT, Perplexity e Gemini, allo stesso modo in cui la SEO ottimizza il posizionamento su Google.' },
        },
        {
          '@type': 'Question',
          name: 'Come faccio a sapere se la mia azienda compare già su ChatGPT?',
          acceptedAnswer: { '@type': 'Answer', text: 'Basta chiedere direttamente a ChatGPT o Perplexity il nome della tua azienda o una domanda che farebbe un tuo cliente. Per un monitoraggio sistematico uso Citationrate, lo strumento che ho fondato per misurare la citation rate dei brand nei motori AI.' },
        },
        {
          '@type': 'Question',
          name: 'Quanto tempo serve per vedere risultati in GEO?',
          acceptedAnswer: { '@type': 'Answer', text: "Più dei mesi serve costanza: i modelli AI aggiornano periodicamente la loro percezione di un brand sulla base di nuove fonti pubbliche. I primi segnali si vedono solitamente in 2-4 mesi di lavoro su contenuti e presenza esterna." },
        },
      ],
    },
  ],
};

export default function GeoBellunoPage() {
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
              <Link href="/belluno" className="hover:underline">Belluno</Link> · GEO Optimization
            </p>
            <h1
              className="font-display font-black italic text-bg leading-[0.95]"
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(2.2rem, 5.5vw, 4.6rem)',
                letterSpacing: '-0.03em',
                maxWidth: '20ch',
              }}
            >
              Generative Engine Optimization (GEO) a Belluno
            </h1>
            <p
              className="mt-8 text-bg/70 leading-relaxed max-w-2xl"
              style={{ fontFamily: 'var(--font-barlow)', fontSize: 'clamp(1rem, 1.3vw, 1.15rem)' }}
            >
              Sono l'esperto GEO e ChatGPT per aziende a Belluno: ottimizzo la visibilità del tuo brand non solo su Google, ma nelle risposte di ChatGPT, Perplexity e Gemini.
            </p>
            <div className="mt-10 flex flex-wrap gap-6">
              <Link
                href="/contatti"
                className="font-condensed uppercase text-bg text-xs tracking-[0.35em] border-b border-bg/50 pb-0.5 hover:text-green hover:border-green transition-colors duration-300"
                style={{ fontFamily: 'var(--font-barlow-condensed)' }}
              >
                Parliamone →
              </Link>
              <a
                href="https://citationrate.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-condensed uppercase text-bg/50 text-xs tracking-[0.35em] border-b border-bg/25 pb-0.5 hover:text-green hover:border-green transition-colors duration-300"
                style={{ fontFamily: 'var(--font-barlow-condensed)' }}
              >
                Scopri Citationrate →
              </a>
            </div>
          </div>
        </section>

        {/* ── Cosa è la GEO ────────────────────────────────────────────────── */}
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
                Il problema
              </p>
              <h2
                className="font-display font-black italic text-ink leading-tight mb-8"
                style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', letterSpacing: '-0.02em' }}
              >
                Le persone non cercano più solo su Google
              </h2>
            </div>
            <div className="flex flex-col gap-5 lg:pt-2">
              <p className="text-ink-dim leading-relaxed" style={{ fontFamily: 'var(--font-barlow)', fontSize: '1.05rem' }}>
                Sempre più persone, anche a Belluno, chiedono direttamente a <strong className="font-semibold text-ink">ChatGPT, Perplexity o Gemini</strong> quale azienda contattare per un servizio, un prodotto, una consulenza. L'AI risponde con un testo — non con dieci link blu.
              </p>
              <p className="text-ink-dim leading-relaxed" style={{ fontFamily: 'var(--font-barlow)', fontSize: '1.05rem' }}>
                Se la tua azienda non viene citata in quella risposta, semplicemente <strong className="font-semibold text-ink">non esiste</strong> per quella persona, in quel momento.
              </p>
              <p className="text-ink-dim leading-relaxed" style={{ fontFamily: 'var(--font-barlow)', fontSize: '1.05rem' }}>
                La GEO — Generative Engine Optimization — è la disciplina che si occupa esattamente di questo: aumentare la probabilità che i modelli AI citino il tuo brand quando rispondono. Sul territorio bellunese, quasi nessuno se ne occupa ancora.
              </p>
              <p className="mt-2">
                <Link href="/thinking/geo-vs-seo" className="text-green underline underline-offset-2 hover:no-underline" style={{ fontFamily: 'var(--font-barlow)' }}>
                  Approfondisci: GEO vs SEO, differenze e opportunità →
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* ── Come lavoro ──────────────────────────────────────────────────── */}
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
              Come lavoro
            </p>
            <h2
              className="font-display font-black italic text-ink leading-tight mb-14"
              style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', letterSpacing: '-0.02em' }}
            >
              Tre fasi per diventare citabile dai motori AI
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Audit di citabilità', body: "Verifico come ChatGPT, Perplexity e Gemini descrivono oggi la tua azienda — se lo fanno — e quali fonti usano per farlo." },
                { title: 'Struttura e contenuti', body: "Lavoro su FAQ, dati strutturati (schema.org) e contenuti specifici che i modelli AI possano leggere, capire e citare correttamente." },
                { title: 'Presenza esterna e monitoraggio', body: "Costruisco autorevolezza fuori dal tuo sito — menzioni, articoli, LinkedIn — e monitoro i progressi con Citationrate." },
              ].map(({ title, body }, i) => (
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
                    style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.3rem, 2vw, 1.6rem)' }}
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
                { q: 'Cosa significa GEO (Generative Engine Optimization)?', a: 'È la disciplina che ottimizza la presenza di un brand nelle risposte dei motori generativi come ChatGPT, Perplexity e Gemini, allo stesso modo in cui la SEO ottimizza il posizionamento su Google.' },
                { q: 'Come faccio a sapere se la mia azienda compare già su ChatGPT?', a: <span>Basta chiedere direttamente a ChatGPT o Perplexity il nome della tua azienda o una domanda che farebbe un tuo cliente. Per un monitoraggio sistematico uso <a href="https://citationrate.com" target="_blank" rel="noopener noreferrer" className="text-green underline underline-offset-2 hover:no-underline">Citationrate</a>, lo strumento che ho fondato per misurare la citation rate dei brand nei motori AI. Trovi anche una guida pratica nell'articolo{' '}<Link href="/thinking/comparire-risposte-chatgpt" className="text-green underline underline-offset-2 hover:no-underline">come far comparire la tua azienda nelle risposte di ChatGPT</Link>.</span> },
                { q: 'Quanto tempo serve per vedere risultati in GEO?', a: "Più dei mesi serve costanza: i modelli AI aggiornano periodicamente la loro percezione di un brand sulla base di nuove fonti pubbliche. I primi segnali si vedono solitamente in 2-4 mesi di lavoro su contenuti e presenza esterna." },
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
              <Link href="/belluno/ai-marketing" className="font-condensed uppercase text-ink text-xs tracking-[0.35em] border-b border-ink pb-0.5 hover:text-green hover:border-green transition-colors duration-300" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>
                AI Marketing a Belluno →
              </Link>
            </div>
          </div>
        </section>

        <Contact />
      </main>
    </>
  );
}
