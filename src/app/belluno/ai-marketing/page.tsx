import type { Metadata } from 'next';
import Link from 'next/link';
import Contact from '@/components/Contact';
import { EtherealShadow } from '@/components/ui/etheral-shadow';

export const metadata: Metadata = {
  title: 'Consulente AI Marketing a Belluno — Samuele Barchet',
  description:
    'Consulente AI Marketing a Belluno: contenuti, campagne e automazioni costruiti con l\'intelligenza artificiale per PMI e professionisti del territorio bellunese.',
  alternates: { canonical: 'https://www.samuelebarchet.com/belluno/ai-marketing' },
  openGraph: {
    title: 'Consulente AI Marketing a Belluno — Samuele Barchet',
    description:
      'Contenuti, campagne e automazioni costruiti con l\'AI per aziende del territorio bellunese.',
    url: 'https://www.samuelebarchet.com/belluno/ai-marketing',
  },
};

const ldJson = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.samuelebarchet.com/belluno/ai-marketing',
      url: 'https://www.samuelebarchet.com/belluno/ai-marketing',
      name: 'Consulente AI Marketing a Belluno — Samuele Barchet',
      description:
        'Consulente AI Marketing a Belluno: contenuti, campagne e automazioni costruiti con l\'intelligenza artificiale per PMI e professionisti del territorio bellunese.',
      dateModified: '2026-06-16',
      about: [
        { '@type': 'Thing', name: 'AI Marketing Belluno' },
        { '@type': 'Thing', name: 'Consulente AI Marketing' },
      ],
      author: { '@id': 'https://www.samuelebarchet.com/#person' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.samuelebarchet.com' },
          { '@type': 'ListItem', position: 2, name: 'Marketing Digitale a Belluno', item: 'https://www.samuelebarchet.com/belluno' },
          { '@type': 'ListItem', position: 3, name: 'AI Marketing a Belluno', item: 'https://www.samuelebarchet.com/belluno/ai-marketing' },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Cosa significa "AI Marketing" in pratica?',
          acceptedAnswer: { '@type': 'Answer', text: "Significa usare l'intelligenza artificiale come moltiplicatore delle attività di marketing: piani editoriali, prime bozze di contenuti, segmentazione delle campagne, analisi dei dati. La strategia e le decisioni restano umane, l'AI accelera l'esecuzione." },
        },
        {
          '@type': 'Question',
          name: "Ha senso l'AI Marketing per una piccola azienda di Belluno?",
          acceptedAnswer: { '@type': 'Answer', text: "Sì, anzi è dove fa più differenza: le PMI hanno meno risorse interne, e l'AI permette di fare con un team piccolo (o con una sola persona) quello che prima richiedeva un'agenzia intera." },
        },
        {
          '@type': 'Question',
          name: 'Che differenza c\'è con una agenzia di marketing tradizionale?',
          acceptedAnswer: { '@type': 'Answer', text: "Le agenzie tradizionali del territorio lavorano bene su sito, social e Google Ads, ma raramente integrano l'AI generativa nei processi o si occupano di GEO (visibilità su ChatGPT e Perplexity). È la parte di competenza che porto in più." },
        },
      ],
    },
  ],
};

const useCases = [
  {
    title: 'Content strategy AI-assisted',
    body: "Piano editoriale, bozze di contenuti e varianti per i social costruiti con l'AI, poi rifiniti e validati da un punto di vista strategico. Più output, stesso livello di qualità.",
  },
  {
    title: 'Campagne Meta Ads ottimizzate',
    body: "Segmentazione, creatività e analisi dei risultati supportate da strumenti AI per ridurre gli sprechi di budget e velocizzare i test A/B.",
  },
  {
    title: 'Automazioni email e CRM',
    body: 'Sequenze di email marketing e flussi di nurturing automatizzati, che lavorano anche quando tu non sei davanti al computer.',
  },
  {
    title: 'Analisi e reporting intelligente',
    body: "Dashboard e report periodici che usano l'AI per individuare pattern nei dati che normalmente richiederebbero ore di analisi manuale.",
  },
];

export default function AIMarketingBellunoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }} />
      <main>
        {/* ── Hero — testo su ink, niente foto ─────────────────────────────── */}
        <section className="w-full px-8 md:px-20 pt-40 pb-24" style={{ background: 'var(--ink)' }}>
          <div className="max-w-6xl mx-auto">
            <p
              className="font-condensed uppercase text-green text-xs tracking-[0.5em] mb-6"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              <Link href="/belluno" className="hover:underline">Belluno</Link> · AI Marketing
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
              Consulente AI Marketing a Belluno
            </h1>
            <p
              className="mt-8 text-bg/70 leading-relaxed max-w-2xl"
              style={{ fontFamily: 'var(--font-barlow)', fontSize: 'clamp(1rem, 1.3vw, 1.15rem)' }}
            >
              Porto l'intelligenza artificiale dentro il marketing delle aziende bellunesi: contenuti, campagne e automazioni costruiti più velocemente, senza perdere strategia.
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
                href="/belluno/geo"
                className="font-condensed uppercase text-bg/50 text-xs tracking-[0.35em] border-b border-bg/25 pb-0.5 hover:text-green hover:border-green transition-colors duration-300"
                style={{ fontFamily: 'var(--font-barlow-condensed)' }}
              >
                GEO Optimization →
              </Link>
            </div>
          </div>
        </section>

        {/* ── Cosa significa ──────────────────────────────────────────────── */}
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
                Cosa significa
              </p>
              <h2
                className="font-display font-black italic text-ink leading-tight mb-8"
                style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', letterSpacing: '-0.02em' }}
              >
                L'AI come moltiplicatore, non come scorciatoia
              </h2>
            </div>
            <div className="flex flex-col gap-5 lg:pt-2">
              <p className="text-ink-dim leading-relaxed" style={{ fontFamily: 'var(--font-barlow)', fontSize: '1.05rem' }}>
                A Belluno il mercato del marketing digitale è ancora concentrato su <strong className="font-semibold text-ink">siti web, SEO classica e social media</strong>. Sono attività necessarie, ma non bastano più da sole.
              </p>
              <p className="text-ink-dim leading-relaxed" style={{ fontFamily: 'var(--font-barlow)', fontSize: '1.05rem' }}>
                L'AI Marketing non significa delegare tutto a un chatbot. Significa usare strumenti di intelligenza artificiale generativa per <strong className="font-semibold text-ink">velocizzare la produzione</strong> di contenuti e campagne, mantenendo strategia e controllo umano su ogni decisione importante.
              </p>
              <p className="text-ink-dim leading-relaxed" style={{ fontFamily: 'var(--font-barlow)', fontSize: '1.05rem' }}>
                Per le PMI del territorio — spesso con un team marketing di una o due persone — questo significa fare con risorse limitate quello che prima richiedeva un'agenzia strutturata.
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
              Come lo applico
            </p>
            <h2
              className="font-display font-black italic text-ink leading-tight mb-14"
              style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', letterSpacing: '-0.02em' }}
            >
              Quattro aree dove l'AI fa la differenza
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {useCases.map(({ title, body }, i) => (
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
            <div className="mt-12">
              <Link
                href="/servizi"
                className="font-condensed uppercase text-ink text-xs tracking-[0.35em] border-b border-ink pb-0.5 hover:text-green hover:border-green transition-colors duration-300"
                style={{ fontFamily: 'var(--font-barlow-condensed)' }}
              >
                Tutti i servizi →
              </Link>
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
                { q: 'Cosa significa "AI Marketing" in pratica?', a: "Significa usare l'intelligenza artificiale come moltiplicatore delle attività di marketing: piani editoriali, prime bozze di contenuti, segmentazione delle campagne, analisi dei dati. La strategia e le decisioni restano umane, l'AI accelera l'esecuzione." },
                { q: "Ha senso l'AI Marketing per una piccola azienda di Belluno?", a: "Sì, anzi è dove fa più differenza: le PMI hanno meno risorse interne, e l'AI permette di fare con un team piccolo (o con una sola persona) quello che prima richiedeva un'agenzia intera." },
                { q: 'Che differenza c\'è con una agenzia di marketing tradizionale?', a: <span>Le agenzie tradizionali del territorio lavorano bene su sito, social e Google Ads, ma raramente integrano l'AI generativa nei processi o si occupano di <Link href="/belluno/geo" className="text-green underline underline-offset-2 hover:no-underline">GEO Optimization</Link>. È la parte di competenza che porto in più.</span> },
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
              <Link href="/belluno/automazioni-ai" className="font-condensed uppercase text-ink text-xs tracking-[0.35em] border-b border-ink pb-0.5 hover:text-green hover:border-green transition-colors duration-300" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>
                Automazioni AI per PMI →
              </Link>
            </div>
          </div>
        </section>

        <Contact />
      </main>
    </>
  );
}
