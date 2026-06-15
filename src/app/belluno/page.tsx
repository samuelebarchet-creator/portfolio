import type { Metadata } from 'next';
import Link from 'next/link';
import Contact from '@/components/Contact';

export const metadata: Metadata = {
  title: 'Marketing Digitale e AI a Belluno — Samuele Barchet',
  description:
    'Consulente di Marketing Digitale e AI a Belluno. Strategia digitale, AI Marketing e GEO Optimization per aziende e professionisti del territorio bellunese e delle Dolomiti.',
  alternates: { canonical: 'https://www.samuelebarchet.com/belluno' },
  openGraph: {
    title: 'Marketing Digitale e AI a Belluno — Samuele Barchet',
    description:
      'Consulente di Marketing Digitale e AI a Belluno. Strategia digitale, AI Marketing e GEO Optimization per aziende del territorio.',
    url: 'https://www.samuelebarchet.com/belluno',
  },
};

const ldJson = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.samuelebarchet.com/belluno',
      url: 'https://www.samuelebarchet.com/belluno',
      name: 'Marketing Digitale e AI a Belluno — Samuele Barchet',
      description:
        'Consulente di Marketing Digitale, AI Marketing e GEO Optimization a Belluno. Strategie digitali per aziende e professionisti del territorio bellunese.',
      dateModified: '2026-06-15',
      about: [
        { '@type': 'Thing', 'name': 'Marketing Digitale Belluno' },
        { '@type': 'Thing', 'name': 'AI Marketing Belluno' },
        { '@type': 'Thing', 'name': 'Consulente Marketing Belluno' },
      ],
      author: { '@id': 'https://www.samuelebarchet.com/#person' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.samuelebarchet.com' },
          { '@type': 'ListItem', position: 2, name: 'Marketing Digitale a Belluno', item: 'https://www.samuelebarchet.com/belluno' },
        ],
      },
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://www.samuelebarchet.com/#business-belluno',
      name: 'Samuele Barchet — Consulente Marketing Digitale Belluno',
      url: 'https://www.samuelebarchet.com',
      telephone: '+393420269217',
      email: 'info@samuelebarchet.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Belluno',
        addressRegion: 'BL',
        addressCountry: 'IT',
      },
      geo: { '@type': 'GeoCoordinates', latitude: 46.1399, longitude: 12.2174 },
      areaServed: [
        { '@type': 'City', name: 'Belluno' },
        { '@type': 'City', name: 'Feltre' },
        { '@type': 'City', name: 'Cortina d\'Ampezzo' },
        { '@type': 'AdministrativeArea', name: 'Provincia di Belluno' },
        { '@type': 'Country', name: 'Italy' },
      ],
      serviceType: ['Marketing Digitale', 'AI Marketing', 'GEO Optimization', 'Strategia Digitale'],
      founder: { '@id': 'https://www.samuelebarchet.com/#person' },
    },
  ],
};

const services = [
  {
    title: 'Strategia Digitale',
    body: 'Posizionamento, messaging e piano di comunicazione costruito sulle esigenze reali del tuo business. Prima di qualsiasi strumento, serve una direzione.',
  },
  {
    title: 'AI Marketing',
    body: 'Contenuti, campagne e crescita con l\'intelligenza artificiale. Dal piano editoriale alla gestione dei Meta Ads, con l\'AI come moltiplicatore delle attività.',
  },
  {
    title: 'GEO Optimization',
    body: 'Ottimizzazione per essere trovati su Google e citati da ChatGPT, Perplexity e Gemini. La nuova frontiera della visibilità online.',
  },
  {
    title: 'Formazione AI per aziende',
    body: 'Workshop pratici e consulenza continuativa per adottare l\'AI nei processi di marketing. Competenze interne reali, non dipendenza da strumenti che non si capiscono.',
  },
];

const reasons = [
  {
    label: 'Conosco il territorio',
    body: 'Sono cresciuto in provincia di Belluno. So come funzionano le PMI di montagna, quali sfide affrontano e come comunicano (spesso: non abbastanza) online.',
  },
  {
    label: 'Lavoro da remoto e in presenza',
    body: 'Posso incontrarmi di persona per le sessioni strategiche o lavorare completamente da remoto. La flessibilità non compromette la qualità del lavoro.',
  },
  {
    label: 'Non sono un\'agenzia',
    body: 'Quando parli con me, lavori con me. Nessun account manager, nessun junior che gestisce il progetto dopo la firma. Sei sempre in contatto diretto con chi fa il lavoro.',
  },
  {
    label: 'Specializzato in AI e GEO',
    body: 'Mentre la maggior parte delle agenzie locali si occupa ancora solo di siti web e social, io mi sono specializzato nel marketing dell\'AI: come usarla e come farsi trovare attraverso di essa.',
  },
];

export default function BellunoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }} />
      <main>

        {/* ── Hero ──────────────────────────────────────────────────────────── */}
        <section
          className="w-full pt-36 pb-24 px-8 md:px-20"
          style={{ borderBottom: '1px solid rgba(61,92,53,0.1)' }}
        >
          <div className="max-w-6xl mx-auto">
            <p
              className="font-condensed uppercase text-green text-xs tracking-[0.5em] mb-8"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              Belluno · Veneto · Italia
            </p>
            <h1
              className="font-display font-black italic text-ink leading-[0.9]"
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(3rem, 8vw, 7rem)',
                letterSpacing: '-0.03em',
                maxWidth: '14ch',
              }}
            >
              Marketing Digitale e AI a Belluno
            </h1>
            <p
              className="mt-8 text-ink-dim leading-relaxed max-w-2xl"
              style={{ fontFamily: 'var(--font-barlow)', fontSize: 'clamp(1rem, 1.3vw, 1.15rem)' }}
            >
              Aiuto aziende e professionisti del territorio bellunese a costruire una presenza digitale più chiara, più efficace e pronta per l'era dell'AI. Dalla strategia alla GEO Optimization, fino alla formazione interna.
            </p>
            <div className="mt-10 flex flex-wrap gap-6">
              <Link
                href="/contatti"
                className="font-condensed uppercase text-ink text-xs tracking-[0.35em] border-b border-ink pb-0.5 hover:text-green hover:border-green transition-colors duration-300"
                style={{ fontFamily: 'var(--font-barlow-condensed)' }}
              >
                Parliamone →
              </Link>
              <Link
                href="/servizi"
                className="font-condensed uppercase text-ink-faint text-xs tracking-[0.35em] border-b border-current pb-0.5 hover:text-green hover:border-green transition-colors duration-300"
                style={{ fontFamily: 'var(--font-barlow-condensed)' }}
              >
                I miei servizi →
              </Link>
            </div>
          </div>
        </section>

        {/* ── Chi sono / territorio ─────────────────────────────────────────── */}
        <section
          className="w-full px-8 md:px-20 py-24"
          style={{ background: 'var(--bg-alt)', borderBottom: '1px solid rgba(61,92,53,0.1)' }}
        >
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <p
                className="font-condensed uppercase text-green text-xs tracking-[0.5em] mb-6"
                style={{ fontFamily: 'var(--font-barlow-condensed)' }}
              >
                Chi sono
              </p>
              <h2
                className="font-display font-black italic text-ink leading-tight mb-6"
                style={{
                  fontFamily: 'var(--font-playfair)',
                  fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
                  letterSpacing: '-0.02em',
                }}
              >
                Un consulente del territorio, con uno sguardo sul futuro del marketing
              </h2>
              <div className="flex flex-col gap-5">
                <p className="text-ink-dim leading-relaxed" style={{ fontFamily: 'var(--font-barlow)', fontSize: '1.05rem' }}>
                  Sono nato e cresciuto in provincia di Belluno. Dopo la laurea in Comunicazione a Padova e la specializzazione in Digital Marketing alla IULM di Milano, sono tornato a lavorare — anche — per il territorio che mi ha formato.
                </p>
                <p className="text-ink-dim leading-relaxed" style={{ fontFamily: 'var(--font-barlow)', fontSize: '1.05rem' }}>
                  Oggi seguo brand e organizzazioni in tutta Italia, ma una parte del mio lavoro è dedicata proprio alle realtà bellunesi: PMI, attività locali, associazioni no-profit e brand che operano tra le Dolomiti e il Veneto.
                </p>
                <p className="text-ink-dim leading-relaxed" style={{ fontFamily: 'var(--font-barlow)', fontSize: '1.05rem' }}>
                  Il mio punto di differenza non è essere "l'agenzia locale". È portare al territorio una competenza che qui è ancora rara: <strong className="font-semibold text-ink">AI Marketing e GEO Optimization</strong> — il modo in cui i brand vengono trovati non solo su Google, ma anche da ChatGPT, Perplexity e Gemini.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-6 lg:pt-16">
              <div style={{ borderTop: '1px solid rgba(61,92,53,0.12)' }} />
              {[
                { value: '8', label: 'Brand seguiti attivamente' },
                { value: '2022', label: 'Anno di inizio attività freelance' },
                { value: 'GEO', label: 'Fondatore di Citationrate.com' },
              ].map(({ value, label }) => (
                <div key={label} className="py-6" style={{ borderBottom: '1px solid rgba(61,92,53,0.08)' }}>
                  <p
                    className="font-display font-black italic text-green leading-none mb-1"
                    style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
                  >
                    {value}
                  </p>
                  <p
                    className="font-condensed text-ink-faint uppercase tracking-[0.2em]"
                    style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: '0.75rem' }}
                  >
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Servizi per il territorio ─────────────────────────────────────── */}
        <section
          className="w-full px-8 md:px-20 py-24"
          style={{ borderBottom: '1px solid rgba(61,92,53,0.1)' }}
        >
          <div className="max-w-6xl mx-auto">
            <p
              className="font-condensed uppercase text-green text-xs tracking-[0.5em] mb-14"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              Cosa offro
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {services.map(({ title, body }, i) => (
                <div
                  key={title}
                  className="flex flex-col gap-4 p-8"
                  style={{ border: '1px solid rgba(61,92,53,0.12)', background: 'var(--bg-alt)' }}
                >
                  <span
                    className="font-condensed text-green text-xs uppercase tracking-[0.4em]"
                    style={{ fontFamily: 'var(--font-barlow-condensed)' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h2
                    className="font-display font-black italic text-ink leading-tight"
                    style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.4rem, 2vw, 1.9rem)' }}
                  >
                    {title}
                  </h2>
                  <p className="text-ink-dim leading-relaxed" style={{ fontFamily: 'var(--font-barlow)', fontSize: '1rem' }}>
                    {body}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Link
                href="/servizi"
                className="font-condensed uppercase text-ink text-xs tracking-[0.35em] border-b border-ink pb-0.5 hover:text-green hover:border-green transition-colors duration-300"
                style={{ fontFamily: 'var(--font-barlow-condensed)' }}
              >
                Tutti i dettagli sui servizi →
              </Link>
            </div>
          </div>
        </section>

        {/* ── Il mercato locale ─────────────────────────────────────────────── */}
        <section
          className="w-full px-8 md:px-20 py-24"
          style={{ background: 'var(--bg-alt)', borderBottom: '1px solid rgba(61,92,53,0.1)' }}
        >
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <p
                className="font-condensed uppercase text-green text-xs tracking-[0.5em] mb-6"
                style={{ fontFamily: 'var(--font-barlow-condensed)' }}
              >
                Il contesto
              </p>
              <h2
                className="font-display font-black italic text-ink leading-tight mb-6"
                style={{
                  fontFamily: 'var(--font-playfair)',
                  fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
                  letterSpacing: '-0.02em',
                }}
              >
                Il mercato bellunese e la sfida digitale
              </h2>
              <div className="flex flex-col gap-5">
                <p className="text-ink-dim leading-relaxed" style={{ fontFamily: 'var(--font-barlow)', fontSize: '1.05rem' }}>
                  La provincia di Belluno ha un tessuto produttivo solido: manifattura, turismo montano, artigianato, agroalimentare, servizi. Realtà che spesso hanno più valore di quanto riescano a comunicare online.
                </p>
                <p className="text-ink-dim leading-relaxed" style={{ fontFamily: 'var(--font-barlow)', fontSize: '1.05rem' }}>
                  La maggior parte delle agenzie locali lavora ancora su siti web e social media. Pochissimi parlano seriamente di AI applicata al marketing. Ancora meno di GEO — la disciplina che decide se il tuo brand viene citato da ChatGPT quando qualcuno fa una domanda rilevante per il tuo settore.
                </p>
                <p className="text-ink-dim leading-relaxed" style={{ fontFamily: 'var(--font-barlow)', fontSize: '1.05rem' }}>
                  Chi si muove adesso costruisce un vantaggio reale. Il territorio ha le risorse — servono la direzione e gli strumenti giusti.
                </p>
              </div>
            </div>

            <div
              className="p-8"
              style={{ border: '1px solid rgba(61,92,53,0.15)', background: 'var(--bg)' }}
            >
              <p
                className="font-condensed uppercase text-green text-xs tracking-[0.4em] mb-6"
                style={{ fontFamily: 'var(--font-barlow-condensed)' }}
              >
                Perché lavorare con me
              </p>
              <div className="flex flex-col gap-8">
                {reasons.map(({ label, body }) => (
                  <div key={label}>
                    <p
                      className="font-condensed uppercase text-ink text-xs tracking-[0.2em] mb-2"
                      style={{ fontFamily: 'var(--font-barlow-condensed)' }}
                    >
                      {label}
                    </p>
                    <p className="text-ink-dim leading-relaxed" style={{ fontFamily: 'var(--font-barlow)', fontSize: '0.95rem' }}>
                      {body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Progetti del territorio ───────────────────────────────────────── */}
        <section
          className="w-full px-8 md:px-20 py-24"
          style={{ borderBottom: '1px solid rgba(61,92,53,0.1)' }}
        >
          <div className="max-w-6xl mx-auto">
            <p
              className="font-condensed uppercase text-green text-xs tracking-[0.5em] mb-6"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              Progetti del territorio
            </p>
            <h2
              className="font-display font-black italic text-ink leading-tight mb-12"
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
                letterSpacing: '-0.02em',
                maxWidth: '20ch',
              }}
            >
              Alcune realtà con cui ho lavorato
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Braghe's",
                  tag: 'Fashion · Accessibilità',
                  desc: 'Brand di abbigliamento accessibile per persone in carrozzina. Posizionamento, tone of voice e identità di marca nel settore fashion inclusivo.',
                  slug: 'braghes',
                },
                {
                  name: 'RC Ricambi Carrozzine',
                  tag: 'E-commerce · Accessibilità',
                  desc: 'E-commerce di ricambi per carrozzine manuali ed elettriche. Strategia di comunicazione e crescita digitale per un mercato di nicchia ad alta specificità tecnica.',
                  slug: 'rc-ricambi',
                },
                {
                  name: 'CROSSabili',
                  tag: 'No-profit · Comunicazione sociale',
                  desc: 'Associazione per la mobilità accessibile nelle aree montane. Brand strategy e comunicazione per un progetto di inclusione sociale nelle Dolomiti.',
                  slug: 'crossabili',
                },
              ].map(({ name, tag, desc, slug }) => (
                <Link
                  key={slug}
                  href={`/projects/${slug}`}
                  className="group flex flex-col gap-4 p-6 transition-colors duration-300 hover:bg-bg-alt"
                  style={{ border: '1px solid rgba(61,92,53,0.12)' }}
                >
                  <p
                    className="font-condensed uppercase text-green text-xs tracking-[0.35em]"
                    style={{ fontFamily: 'var(--font-barlow-condensed)' }}
                  >
                    {tag}
                  </p>
                  <h3
                    className="font-display font-black italic text-ink leading-tight group-hover:text-green transition-colors duration-300"
                    style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.5rem' }}
                  >
                    {name}
                  </h3>
                  <p className="text-ink-faint leading-relaxed text-sm" style={{ fontFamily: 'var(--font-barlow)' }}>
                    {desc}
                  </p>
                  <span
                    className="mt-auto font-condensed uppercase text-green text-xs tracking-[0.25em] group-hover:underline"
                    style={{ fontFamily: 'var(--font-barlow-condensed)' }}
                  >
                    Vedi progetto →
                  </span>
                </Link>
              ))}
            </div>

            <div className="mt-10">
              <Link
                href="/lavori"
                className="font-condensed uppercase text-ink text-xs tracking-[0.35em] border-b border-ink pb-0.5 hover:text-green hover:border-green transition-colors duration-300"
                style={{ fontFamily: 'var(--font-barlow-condensed)' }}
              >
                Tutti i progetti →
              </Link>
            </div>
          </div>
        </section>

        {/* ── Lettura correlata ─────────────────────────────────────────────── */}
        <section
          className="w-full px-8 md:px-20 py-20"
          style={{ background: 'var(--bg-alt)', borderBottom: '1px solid rgba(61,92,53,0.1)' }}
        >
          <div className="max-w-6xl mx-auto">
            <p
              className="font-condensed uppercase text-green text-xs tracking-[0.5em] mb-8"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              Approfondimenti
            </p>
            <div className="flex flex-col gap-4">
              {[
                { title: "Come l'AI sta cambiando il comportamento degli utenti nel 2026", slug: 'ai-comportamento-utenti-2026', cat: 'AI & Marketing' },
                { title: 'GEO vs SEO: differenze e opportunità', slug: 'geo-vs-seo', cat: 'AI & Marketing' },
                { title: 'La SEO locale vale ancora (anzi, vale di più)', slug: 'local-seo-vale-ancora', cat: 'Digital Marketing' },
              ].map(({ title, slug, cat }) => (
                <Link
                  key={slug}
                  href={`/thinking/${slug}`}
                  className="group flex items-start justify-between gap-6 py-4"
                  style={{ borderBottom: '1px solid rgba(61,92,53,0.08)' }}
                >
                  <div>
                    <p
                      className="font-condensed uppercase text-green text-xs tracking-[0.3em] mb-1"
                      style={{ fontFamily: 'var(--font-barlow-condensed)' }}
                    >
                      {cat}
                    </p>
                    <p
                      className="text-ink group-hover:text-green transition-colors duration-300"
                      style={{ fontFamily: 'var(--font-barlow)', fontSize: '1rem' }}
                    >
                      {title}
                    </p>
                  </div>
                  <span
                    className="font-condensed text-ink-faint text-xs tracking-[0.2em] shrink-0 mt-1 group-hover:text-green transition-colors duration-300"
                    style={{ fontFamily: 'var(--font-barlow-condensed)' }}
                  >
                    Leggi →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <Contact />
      </main>
    </>
  );
}
