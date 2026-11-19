import type { Metadata } from 'next';
import Link from 'next/link';
import Contact from '@/components/Contact';

const URL = 'https://www.samuelebarchet.com/tesi';
const THESIS_TITLE =
  'Da Search a Recommendation: come l’IA ridisegna il percorso d’acquisto del consumatore e le logiche di posizionamento delle imprese';
const TITLE = 'Da Search a Recommendation: la tesi su GEO e AI — Samuele Barchet';
const DESCRIPTION =
  'Tesi di laurea magistrale IULM (9 novembre 2026) su come l’IA generativa cambia il percorso d’acquisto e la visibilità dei brand: dalla SEO alla GEO, e il problema di misurarla.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: URL, type: 'article' },
};

const ldJson = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Thesis',
      '@id': `${URL}#thesis`,
      name: THESIS_TITLE,
      headline: THESIS_TITLE,
      inSupportOf: 'Laurea Magistrale in Marketing, Consumi e Comunicazione — curriculum Digital Marketing Management',
      author: { '@id': 'https://www.samuelebarchet.com/#person' },
      sourceOrganization: { '@type': 'CollegeOrUniversity', name: 'Università IULM', url: 'https://www.iulm.it' },
      datePublished: '2026-11-09',
      inLanguage: 'it',
      numberOfPages: 97,
      url: URL,
      about: [
        { '@type': 'Thing', name: 'Generative Engine Optimization' },
        { '@type': 'Thing', name: 'Comportamento del consumatore' },
        { '@type': 'Thing', name: 'Brand visibility nei motori generativi' },
        { '@type': 'Thing', name: 'Misurazione della visibilità AI' },
      ],
      mentions: [
        { '@type': 'Thing', name: 'Howard e Sheth' },
        { '@type': 'Thing', name: 'Zero Moment of Truth' },
        { '@type': 'ScholarlyArticle', name: 'GEO: Generative Engine Optimization', url: 'https://arxiv.org/abs/2311.09735' },
        { '@type': 'Organization', name: 'Citation Rate', url: 'https://www.citationrate.com' },
      ],
    },
    {
      '@type': 'WebPage',
      '@id': URL,
      url: URL,
      name: TITLE,
      description: DESCRIPTION,
      mainEntity: { '@id': `${URL}#thesis` },
      dateModified: '2026-11-19',
      author: { '@id': 'https://www.samuelebarchet.com/#person' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.samuelebarchet.com' },
          { '@type': 'ListItem', position: 2, name: 'Chi sono', item: 'https://www.samuelebarchet.com/about' },
          { '@type': 'ListItem', position: 3, name: 'Tesi', item: URL },
        ],
      },
    },
  ],
};

const chapters = [
  {
    n: '1',
    t: 'Il nuovo comportamento del consumatore nell’era generativa',
    d: 'Tre modelli a confronto, da Howard e Sheth (1969) allo Zero Moment of Truth (2011) fino ai motori generativi, letti attraverso una domanda: quanta parte del lavoro di ricerca e confronto resta al consumatore e quanta viene delegata a un mediatore.',
  },
  {
    n: '2',
    t: 'Brand e percezione nell’ecosistema dell’IA',
    d: 'Come i modelli costruiscono una reputazione di marca, il problema delle allucinazioni, il vantaggio dei brand già noti e il passaggio dalla brand awareness alla presenza nelle risposte generative.',
  },
  {
    n: '3',
    t: 'Dalla SEO alla GEO: un nuovo paradigma di posizionamento',
    d: 'Fondamenti della SEO, definizione e origini della Generative Engine Optimization, le sue leve operative, il ruolo delle fonti e il rapporto fra i due paradigmi: non si sostituiscono, si stratificano.',
  },
  {
    n: '4',
    t: 'Il problema della misurazione',
    d: 'Perché misurare la visibilità nelle AI non è banale, lo stato dell’arte, un framework a tre livelli (Citability Score, AI Visibility Index, Brand Profile) e un’applicazione esplorativa con i suoi limiti.',
  },
];

const label = { fontFamily: 'var(--font-barlow-condensed)', color: 'var(--orange-text)', fontWeight: 'bold' } as const;
const body = { fontFamily: 'var(--font-barlow)', fontSize: '1.05rem' } as const;
const h2 = { fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', letterSpacing: '-0.02em' } as const;
const textLink =
  'font-condensed uppercase text-xs tracking-[0.35em] border-b border-ink pb-0.5 hover:text-green hover:border-green transition-colors duration-300';

export default function TesiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }} />
      <main>
        <section data-surface="dark" className="w-full px-8 md:px-20 pt-40 pb-24" style={{ background: 'var(--ink)' }}>
          <div className="max-w-6xl mx-auto">
            <p className="font-condensed uppercase text-xs tracking-[0.5em] mb-6" style={label}>
              Tesi di laurea magistrale · Università IULM · 9 novembre 2026
            </p>
            <h1
              className="font-display font-black italic text-bg leading-[1.02]"
              style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(2.2rem, 5vw, 4.2rem)', letterSpacing: '-0.025em', maxWidth: '20ch' }}
            >
              Da Search a Recommendation
            </h1>
            <p className="mt-6 text-bg leading-snug max-w-3xl" style={{ fontFamily: 'var(--font-playfair)', fontStyle: 'italic', fontSize: 'clamp(1.15rem, 1.8vw, 1.5rem)' }}>
              Come l&apos;IA ridisegna il percorso d&apos;acquisto del consumatore e le logiche di posizionamento delle imprese
            </p>
            <p className="mt-8 text-bg/80 leading-relaxed max-w-2xl" style={{ fontFamily: 'var(--font-barlow)', fontSize: '1rem' }}>
              Laurea magistrale in Marketing, Consumi e Comunicazione, curriculum Digital Marketing Management · 97 pagine
            </p>
          </div>
        </section>

        <section className="w-full px-8 md:px-20 py-24" style={{ borderBottom: '1px solid rgba(61,92,53,0.1)' }}>
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
            <h2 className="font-display font-black italic text-ink leading-tight" style={h2}>
              La domanda di ricerca
            </h2>
            <div className="flex flex-col gap-5 lg:pt-2">
              <p className="text-ink-dim leading-relaxed" style={body}>
                Quando una persona chiede a un sistema generativo quale prodotto acquistare, riceve una risposta e non un elenco di link. In quella risposta alcune marche compaiono e altre no: una marca che non entra nella sintesi non entra nella decisione.
              </p>
              <p className="text-ink-dim leading-relaxed" style={body}>
                La tesi si chiede <strong className="font-semibold text-ink">come cambia la costruzione della visibilità di marca</strong> quando il consumatore delega parte della ricerca all&apos;intelligenza artificiale generativa, e <strong className="font-semibold text-ink">con quali strategie e strumenti</strong> le imprese possono rispondere.
              </p>
              <p className="text-ink-dim leading-relaxed" style={body}>
                È un lavoro di analisi della letteratura e delle rilevazioni disponibili, con fonti consultate fino a settembre 2026, che distingue sempre la ricerca accademica dai dati prodotti da operatori commerciali. L&apos;ultimo capitolo aggiunge un&apos;applicazione esplorativa sul framework di misurazione di{' '}
                <a href="https://www.citationrate.com" target="_blank" rel="noopener noreferrer" className="text-green underline underline-offset-2 hover:no-underline">Citation Rate</a>, piattaforma del cui team faccio parte: una posizione dichiarata nella tesi, che presenta anche il risultato meno favorevole.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full px-8 md:px-20 py-24" style={{ background: 'var(--bg-alt)', borderBottom: '1px solid rgba(61,92,53,0.1)' }}>
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display font-black italic text-ink leading-tight mb-14" style={h2}>
              I quattro capitoli
            </h2>
            <ol className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {chapters.map(({ n, t, d }) => (
                <li key={n} className="flex flex-col gap-3 p-8" style={{ border: '1px solid rgba(61,92,53,0.15)', background: 'var(--bg)' }}>
                  <span className="font-display font-black italic leading-none" style={{ fontFamily: 'var(--font-playfair)', fontSize: '2rem', color: 'var(--orange-heading)' }} aria-hidden>
                    {n}
                  </span>
                  <h3 className="font-display font-black italic text-ink leading-tight" style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.25rem, 1.8vw, 1.55rem)' }}>
                    {t}
                  </h3>
                  <p className="text-ink-dim leading-relaxed" style={{ fontFamily: 'var(--font-barlow)', fontSize: '1rem' }}>
                    {d}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="w-full px-8 md:px-20 py-24" style={{ borderBottom: '1px solid rgba(61,92,53,0.1)' }}>
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
            <h2 className="font-display font-black italic text-ink leading-tight" style={h2}>
              Cosa emerge
            </h2>
            <div className="flex flex-col gap-5 lg:pt-2">
              <p className="text-ink-dim leading-relaxed" style={body}>
                Il consumatore non ha smesso di cercare: ha cominciato a farlo attraverso un mediatore che compie una parte del lavoro al posto suo, secondo criteri che né lui né l&apos;impresa possono osservare.
              </p>
              <p className="text-ink-dim leading-relaxed" style={body}>
                La comparsa di una marca nelle risposte sembra dipendere <strong className="font-semibold text-ink">meno da ciò che l&apos;impresa dice di sé e più da ciò che ne dicono le fonti terze</strong>. Nell&apos;applicazione esplorativa, il punteggio che descrive la predisposizione tecnica del sito a essere citato non correla con l&apos;indice di visibilità; l&apos;unica componente che correla è la reputazione esterna.
              </p>
              <p className="text-ink-dim leading-relaxed" style={body}>
                Sono 28 osservazioni, di cui 19 con visibilità nulla: nessuna conclusione forte è legittima, e la tesi non ne trae. Ma il dato va nella stessa direzione delle evidenze indipendenti disponibili.
              </p>
              <p className="text-ink-dim leading-relaxed" style={body}>
                Sul piano degli strumenti, oggi le imprese <strong className="font-semibold text-ink">non dispongono di una misura validata</strong> della propria visibilità generativa: ogni misura è una costruzione, e vale quanto la trasparenza delle scelte che la compongono.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full px-8 md:px-20 py-24" style={{ background: 'var(--bg-alt)', borderBottom: '1px solid rgba(61,92,53,0.1)' }}>
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display font-black italic text-ink leading-tight mb-14" style={h2}>
              Tre implicazioni per le imprese
            </h2>
            <ol className="flex flex-col" style={{ borderTop: '1px solid rgba(61,92,53,0.12)' }}>
              {[
                { t: 'La visibilità nelle AI non si costruisce soprattutto sul proprio sito', d: 'Un investimento concentrato sulle proprietà tecniche del dominio, a scapito della presenza su fonti terze autorevoli, ha oggi un fondamento debole.' },
                { t: 'Una singola rilevazione non è uno stato, è un’estrazione', d: 'Confrontare marche o periodi richiede ripetizioni, insiemi di domande dichiarati e finestre di osservazione sufficienti.' },
                { t: 'Di uno strumento di misura conta cosa dichiara', d: 'Non si può verificare quanto sia accurato; si può chiedere quali scelte incorpora: menzione o citazione, quali modelli, quali domande, quali pesi.' },
              ].map(({ t, d }, i) => (
                <li key={t} className="grid grid-cols-[2.5rem_1fr] gap-4 py-7" style={{ borderBottom: '1px solid rgba(61,92,53,0.12)' }}>
                  <span className="font-display font-black italic leading-none" style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.8rem', color: 'var(--orange-heading)' }} aria-hidden>
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-ink font-semibold mb-1" style={{ fontFamily: 'var(--font-barlow)', fontSize: '1.1rem' }}>
                      {t}
                    </h3>
                    <p className="text-ink-dim leading-relaxed" style={{ fontFamily: 'var(--font-barlow)', fontSize: '1rem' }}>
                      {d}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="px-8 md:px-20 py-20" style={{ borderBottom: '1px solid rgba(61,92,53,0.1)' }}>
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <h2 className="font-display font-black italic text-ink leading-tight" style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)' }}>
              Dalla tesi al lavoro con le aziende
            </h2>
            <div className="flex flex-col gap-5">
              <p className="text-ink-dim leading-relaxed" style={body}>
                È il motivo per cui, con le aziende, parto da reputazione, fonti esterne e comunicazione coerente, prima ancora che dagli aspetti tecnici del sito. Se vuoi capire come la tua azienda viene raccontata da ChatGPT e Gemini, possiamo partire da lì.
              </p>
              <div className="flex flex-wrap gap-6">
                <Link href="/belluno/geo" className={textLink} style={label}>
                  Farsi citare da ChatGPT →
                </Link>
                <Link href="/thinking/geo-vs-seo" className={textLink} style={label}>
                  GEO vs SEO →
                </Link>
                <Link href="/about" className={textLink} style={label}>
                  Chi sono →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Contact />
      </main>
    </>
  );
}
