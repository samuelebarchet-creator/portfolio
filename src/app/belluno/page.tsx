import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Contact from '@/components/Contact';
import { WarpShadow } from '@/components/ui/warp-shadow';

export const metadata: Metadata = {
  title: 'Social Media e Marketing Digitale a Belluno — Samuele Barchet',
  description:
    'Social media, comunicazione e marketing digitale a Belluno: strategia, contenuti e campagne per aziende e attività della provincia, dalle Dolomiti a Feltre.',
  alternates: { canonical: 'https://www.samuelebarchet.com/belluno' },
  openGraph: {
    title: 'Social Media e Marketing Digitale a Belluno — Samuele Barchet',
    description:
      'Social media e comunicazione per le aziende della provincia di Belluno: prima la strategia, poi contenuti e campagne.',
    url: 'https://www.samuelebarchet.com/belluno',
    images: [{ url: '/belluno/hero.jpg', width: 1200, height: 630, alt: 'AI Marketing a Belluno — Dolomiti' }],
  },
};

const TOWNS = [
  'Belluno', 'Feltre', 'Ponte nelle Alpi', 'Sedico', 'Santa Giustina', 'Alpago',
  'Longarone', 'Agordo', 'Pieve di Cadore', 'Auronzo di Cadore', "Cortina d'Ampezzo", 'Borgo Valbelluna',
];

const FAQS = [
  {
    q: 'Vi occupate solo di social media?',
    a: 'Il centro sono social e comunicazione: strategia, tono di voce, contenuti e campagne Meta Ads. Intorno ci sono sito, SEO locale e, per chi vuole guardare avanti, l’intelligenza artificiale applicata al marketing.',
  },
  {
    q: 'Lavori in presenza in provincia di Belluno?',
    a: 'Sì: per le sessioni strategiche posso venire di persona in tutta la provincia, il lavoro operativo si fa anche da remoto.',
  },
  {
    q: 'Che cosa c’entra l’AI con una piccola attività locale?',
    a: 'Oggi poco, domani molto: sempre più persone chiedono a ChatGPT o a Gemini quale attività scegliere. Costruire adesso una comunicazione chiara e coerente è anche il modo per farsi trovare lì.',
  },
];

const ldJson = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.samuelebarchet.com/belluno',
      url: 'https://www.samuelebarchet.com/belluno',
      name: 'Social Media e Marketing Digitale a Belluno — Samuele Barchet',
      description:
        'Social media, comunicazione e marketing digitale per aziende e attività della provincia di Belluno, con le basi per l’AI.',
      dateModified: '2026-11-12',
      about: [
        { '@type': 'Thing', name: 'Social Media Belluno' },
        { '@type': 'Thing', name: 'Marketing Digitale Belluno' },
        { '@type': 'Thing', name: 'Comunicazione aziendale Belluno' },
        { '@type': 'Thing', name: 'Consulente Marketing Belluno' },
      ],
      author: { '@id': 'https://www.samuelebarchet.com/#person' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.samuelebarchet.com' },
          { '@type': 'ListItem', position: 2, name: 'Social media e comunicazione a Belluno', item: 'https://www.samuelebarchet.com/belluno' },
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
        ...TOWNS.map((name) => ({ '@type': 'City', name })),
        { '@type': 'AdministrativeArea', name: 'Provincia di Belluno' },
        { '@type': 'Country', name: 'Italy' },
      ],
      serviceType: ['Social Media Management', 'Comunicazione aziendale', 'Marketing Digitale', 'Meta Ads', 'Strategia Digitale', 'AI Marketing'],
      founder: { '@id': 'https://www.samuelebarchet.com/#person' },
    },,
    {
      '@type': 'FAQPage',
      mainEntity: FAQS.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
    }
  ],
};

const services = [
  {
    title: 'Social media',
    body: 'Strategia, piano editoriale, contenuti e gestione dei profili, oppure affiancamento di chi in azienda se ne occupa. Facebook, Instagram e LinkedIn.',
  },
  {
    title: 'Comunicazione e tono di voce',
    body: 'Chi siete, a chi parlate e come. Posizionamento, messaggi e modo di parlare, da usare ovunque: social, sito, volantini, insegne.',
  },
  {
    title: 'Campagne Meta Ads',
    body: 'Facebook e Instagram a pagamento con obiettivi chiari: farsi conoscere, raccogliere contatti, rafforzare il legame con chi vive nella zona.',
  },
  {
    title: 'Presenza online e SEO locale',
    body: 'Sito, scheda Google e contenuti pensati per farsi trovare da chi cerca un’attività come la vostra in provincia.',
  },
];

const reasons = [
  {
    label: 'Conosco il territorio',
    body: 'Sono cresciuto in provincia di Belluno. So come funzionano le PMI di montagna, quali sfide affrontano e come comunicano online, spesso non abbastanza.',
  },
  {
    label: 'Non sono un\'agenzia',
    body: 'Quando parli con me, lavori con me. Nessun account manager. Sei sempre in contatto diretto con chi fa il lavoro.',
  },
  {
    label: 'Prima la strategia, poi i post',
    body: 'Non parto dal calendario dei contenuti ma da cosa volete comunicare. È la differenza tra esserci sui social e usarli davvero.',
  },
  {
    label: 'Già pronto per l’AI',
    body: 'Quando sarà il momento di usare l’intelligenza artificiale nel marketing, non dovrete cambiare consulente: è una competenza che porto già oggi.',
  },
  {
    label: 'Lavoro da remoto e in presenza',
    body: 'Posso incontrarmi di persona per le sessioni strategiche o lavorare completamente da remoto. La flessibilità non compromette la qualità.',
  },
];

export default function BellunoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }} />
      <main>

        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <div data-surface="dark" className="relative w-full overflow-hidden" style={{ minHeight: '100svh' }}>
          {/* Immagine desktop */}
          <Image
            src="/belluno/hero-desktop.jpg"
            alt="Alpinisti in salita tra i seracchi delle Dolomiti"
            fill
            priority
            className="object-cover object-center hidden md:block"
            sizes="100vw"
          />
          {/* Immagine mobile */}
          <Image
            src="/belluno/hero-mobile.jpg"
            alt="Alpinisti in salita tra i seracchi delle Dolomiti"
            fill
            priority
            className="object-cover object-center md:hidden"
            sizes="100vw"
          />
          {/* Overlay — più leggero in alto per far respirare l'immagine */}
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to bottom, rgba(8,13,8,0.15) 0%, rgba(8,13,8,0.45) 55%, rgba(8,13,8,0.75) 100%)' }}
          />
          {/* Contenuto hero */}
          <div className="relative z-10 flex flex-col justify-end h-full min-h-[100svh] px-8 md:px-20 pb-20 pt-32">
            <div className="max-w-6xl mx-auto w-full">
              <p
                className="font-condensed uppercase text-xs tracking-[0.5em] mb-6"
                style={{ fontFamily: 'var(--font-barlow-condensed)', color: 'var(--orange-text)', fontWeight: 'bold' }}
              >
                Belluno · Feltre · Dolomiti
              </p>
              <h1
                className="font-display font-black italic text-bg leading-[1.0]"
                style={{
                  fontFamily: 'var(--font-playfair)',
                  fontSize: 'clamp(3.2rem, 9vw, 8rem)',
                  letterSpacing: '-0.03em',
                  maxWidth: '13ch',
                }}
              >
                Social media e comunicazione a Belluno
              </h1>
              <p
                className="mt-8 text-bg/70 leading-relaxed max-w-xl"
                style={{ fontFamily: 'var(--font-barlow)', fontSize: 'clamp(1rem, 1.3vw, 1.1rem)' }}
              >
                Aiuto aziende e attività della provincia di Belluno a comunicare in modo chiaro sui social e online:
                prima la strategia, poi contenuti e campagne. Nell&apos;ordine giusto.
              </p>
              <div className="mt-10 flex flex-wrap gap-6">
                <Link
                  href="/contatti"
                  className="font-condensed uppercase text-bg text-xs tracking-[0.35em] border-b border-bg/50 pb-0.5 hover:text-green hover:border-green transition-colors duration-300"
                  style={{ fontFamily: 'var(--font-barlow-condensed)', color: 'var(--orange-text)', fontWeight: 'bold' }}
                >
                  Parliamone →
                </Link>
                <Link
                  href="/servizi"
                  className="font-condensed uppercase text-bg/50 text-xs tracking-[0.35em] border-b border-bg/25 pb-0.5 hover:text-green hover:border-green transition-colors duration-300"
                  style={{ fontFamily: 'var(--font-barlow-condensed)', color: 'var(--orange-text)', fontWeight: 'bold' }}
                >
                  I miei servizi →
                </Link>
                <Link
                  href="/belluno/social-media"
                  className="font-condensed uppercase text-bg/50 text-xs tracking-[0.35em] border-b border-bg/25 pb-0.5 hover:text-green hover:border-green transition-colors duration-300"
                  style={{ fontFamily: 'var(--font-barlow-condensed)', color: 'var(--orange-text)', fontWeight: 'bold' }}
                >
                  Social media a Belluno →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ── Chi sono / territorio ─────────────────────────────────────────── */}
        <section
          className="relative w-full px-8 md:px-20 py-24 overflow-hidden"
          style={{ borderBottom: '1px solid rgba(61,92,53,0.1)' }}
        >
          <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
            <WarpShadow
              color="rgba(61, 92, 53, 0.22)"
              animation={{ scale: 45, speed: 55 }}
              noise={{ opacity: 0.12, scale: 1.2 }}
              sizing="fill"
            />
          </div>
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative" style={{ zIndex: 1 }}>
            <div>
              <p
                className="font-condensed uppercase text-xs tracking-[0.5em] mb-6"
                style={{ fontFamily: 'var(--font-barlow-condensed)', color: 'var(--orange-text)', fontWeight: 'bold' }}
              >
                Chi sono
              </p>
              <h2
                className="font-display font-black italic text-ink leading-tight mb-8"
                style={{
                  fontFamily: 'var(--font-playfair)',
                  fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
                  letterSpacing: '-0.02em',
                }}
              >
                Un consulente del territorio,<br />per la comunicazione di oggi e di domani
              </h2>
              <div className="flex flex-col gap-5">
                <p className="text-ink-dim leading-relaxed" style={{ fontFamily: 'var(--font-barlow)', fontSize: '1.05rem' }}>
                  Sono nato e cresciuto in provincia di Belluno. Dopo la laurea in <strong className="font-semibold text-ink">Comunicazione a Padova</strong> e la specializzazione in <strong className="font-semibold text-ink">Digital Marketing alla IULM di Milano</strong>, sono tornato a lavorare, tra le altre cose, per il territorio che mi ha formato.
                </p>
                <p className="text-ink-dim leading-relaxed" style={{ fontFamily: 'var(--font-barlow)', fontSize: '1.05rem' }}>
                  Oggi seguo brand e organizzazioni in tutta Italia, ma una parte del mio lavoro è dedicata alle realtà bellunesi: <strong className="font-semibold text-ink">PMI, attività locali, associazioni no-profit</strong> e brand che operano tra le Dolomiti e il Veneto.
                </p>
                <p className="text-ink-dim leading-relaxed" style={{ fontFamily: 'var(--font-barlow)', fontSize: '1.05rem' }}>
                  Il mio punto di differenza non è essere &quot;l&apos;agenzia locale&quot;. È partire da <strong className="font-semibold text-ink">strategia e tono di voce</strong> prima di aprire il calendario dei post, e guardare già avanti: a come l&apos;intelligenza artificiale cambierà il modo in cui i clienti cercano e scelgono un&apos;attività.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center gap-0 lg:pt-4">
              {[
                { value: '8', label: 'Brand seguiti in settori diversi' },
                { value: '2023', label: 'Anno di inizio attività freelance' },
                { value: 'GEO', label: 'Founding team di Citation Rate' },
              ].map(({ value, label }, i) => (
                <div
                  key={label}
                  className="py-8"
                  style={{
                    borderTop: i === 0 ? '1px solid rgba(61,92,53,0.12)' : undefined,
                    borderBottom: '1px solid rgba(61,92,53,0.12)',
                  }}
                >
                  <p
                    className="font-display font-black italic text-green leading-none mb-2"
                    style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(2.5rem, 4vw, 3.5rem)' }}
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

        {/* ── Pull quote — ink background ───────────────────────────────────── */}
        <section
          data-surface="dark"
          className="w-full px-8 md:px-20 py-24"
          style={{ background: 'var(--ink)' }}
        >
          <div className="max-w-6xl mx-auto">
            <p
              className="font-condensed uppercase text-xs tracking-[0.5em] mb-10"
              style={{ fontFamily: 'var(--font-barlow-condensed)', color: 'var(--orange-text)', fontWeight: 'bold' }}
            >
              Il contesto
            </p>
            <blockquote
              className="font-display font-black italic text-bg leading-[0.92] max-w-4xl"
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(2rem, 5vw, 4.5rem)',
                letterSpacing: '-0.02em',
              }}
            >
              &quot;Le aziende bellunesi valgono più di quanto riescano a raccontare. Il problema non è essere sui social: è non sapere cosa dire.&quot;
            </blockquote>
            <p
              className="mt-10 text-bg/60 leading-relaxed max-w-2xl"
              style={{ fontFamily: 'var(--font-barlow)', fontSize: '1.05rem' }}
            >
              La provincia di Belluno ha un tessuto produttivo solido: <strong className="font-semibold text-bg/90">manifattura, turismo montano, artigianato, agroalimentare</strong>. Realtà che spesso hanno più valore di quanto riescano a comunicare online. Chi si muove adesso costruisce un vantaggio che tra due anni sarà molto più costoso da recuperare.
            </p>
          </div>
        </section>

        {/* ── Servizi ───────────────────────────────────────────────────────── */}
        <section
          className="relative w-full px-8 md:px-20 py-24 overflow-hidden"
          style={{ background: 'var(--bg-alt)', borderBottom: '1px solid rgba(61,92,53,0.1)' }}
        >
          <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
            <WarpShadow
              color="rgba(61, 92, 53, 0.22)"
              animation={{ scale: 45, speed: 55 }}
              noise={{ opacity: 0.12, scale: 1.2 }}
              sizing="fill"
            />
          </div>
          <div className="max-w-6xl mx-auto relative" style={{ zIndex: 1 }}>
            <p
              className="font-condensed uppercase text-xs tracking-[0.5em] mb-4"
              style={{ fontFamily: 'var(--font-barlow-condensed)', color: 'var(--orange-text)', fontWeight: 'bold' }}
            >
              Cosa offro
            </p>
            <h2
              className="font-display font-black italic text-ink leading-tight mb-14"
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
                letterSpacing: '-0.02em',
              }}
            >
              Servizi per le aziende del territorio
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map(({ title, body }, i) => (
                <div
                  key={title}
                  className="flex flex-col gap-4 p-8"
                  style={{ border: '1px solid rgba(61,92,53,0.15)', background: 'var(--bg)' }}
                >
                  <span
                    className="font-condensed text-xs uppercase tracking-[0.4em]"
                    style={{ fontFamily: 'var(--font-barlow-condensed)', color: 'var(--orange-text)', fontWeight: 'bold' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3
                    className="font-display font-black italic text-ink leading-tight"
                    style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.4rem, 2vw, 1.9rem)' }}
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
                style={{ fontFamily: 'var(--font-barlow-condensed)', color: 'var(--orange-text)', fontWeight: 'bold' }}
              >
                Tutti i dettagli sui servizi →
              </Link>
            </div>

            <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Social media a Belluno', desc: 'Strategia, contenuti e gestione dei social della vostra attività.', href: '/belluno/social-media' },
                { title: 'Meta Ads a Belluno', desc: 'Campagne Facebook e Instagram con obiettivi chiari e report mensile.', href: '/belluno/meta-ads' },
                { title: 'SEO locale a Belluno', desc: 'Scheda Google, sito e contenuti per farsi trovare in provincia.', href: '/belluno/seo-locale' },
                { title: 'Sedico e Valbelluna', desc: 'Social e marketing per le attività della valle, con il caso All Fit.', href: '/belluno/valbelluna' },
                { title: 'Formazione AI per aziende', desc: "Workshop pratici sull'intelligenza artificiale per le PMI.", href: '/belluno/formazione-ai' },
                { title: 'Farsi citare da ChatGPT', desc: 'GEO: essere tra le attività che ChatGPT, Perplexity e Gemini consigliano.', href: '/belluno/geo' },
              ].map(({ title, desc, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="group flex flex-col gap-3 p-6 transition-colors duration-300 hover:bg-bg"
                  style={{ border: '1px solid rgba(61,92,53,0.15)', background: 'var(--bg)' }}
                >
                  <h3
                    className="font-display font-black italic text-ink leading-tight group-hover:text-green transition-colors duration-300"
                    style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.3rem' }}
                  >
                    {title}
                  </h3>
                  <p className="text-ink-faint leading-relaxed text-sm grow" style={{ fontFamily: 'var(--font-barlow)' }}>
                    {desc}
                  </p>
                  <span
                    className="font-condensed uppercase text-xs tracking-[0.25em]"
                    style={{ fontFamily: 'var(--font-barlow-condensed)', color: 'var(--orange-text)', fontWeight: 'bold' }}
                  >
                    Scopri di più →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Perché lavorare con me ────────────────────────────────────────── */}
        <section
          className="relative w-full px-8 md:px-20 py-24 overflow-hidden"
          style={{ borderBottom: '1px solid rgba(61,92,53,0.1)' }}
        >
          <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
            <WarpShadow
              color="rgba(61, 92, 53, 0.22)"
              animation={{ scale: 45, speed: 55 }}
              noise={{ opacity: 0.12, scale: 1.2 }}
              sizing="fill"
            />
          </div>
          <div className="max-w-6xl mx-auto relative" style={{ zIndex: 1 }}>
            <p
              className="font-condensed uppercase text-xs tracking-[0.5em] mb-4"
              style={{ fontFamily: 'var(--font-barlow-condensed)', color: 'var(--orange-text)', fontWeight: 'bold' }}
            >
              Perché lavorare con me
            </p>
            <h2
              className="font-display font-black italic text-ink leading-tight mb-14"
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
                letterSpacing: '-0.02em',
                maxWidth: '22ch',
              }}
            >
              Non un&apos;agenzia. Un consulente con radici nel territorio.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0" style={{ borderTop: '1px solid rgba(61,92,53,0.1)' }}>
              {reasons.map(({ label, body }) => (
                <div
                  key={label}
                  className="py-8 pr-8"
                  style={{ borderBottom: '1px solid rgba(61,92,53,0.1)' }}
                >
                  <p
                    className="font-condensed uppercase text-ink text-xs tracking-[0.25em] mb-3"
                    style={{ fontFamily: 'var(--font-barlow-condensed)', color: 'var(--orange-text)', fontWeight: 'bold' }}
                  >
                    <strong>{label}</strong>
                  </p>
                  <p className="text-ink-dim leading-relaxed" style={{ fontFamily: 'var(--font-barlow)', fontSize: '1rem' }}>
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Progetti del territorio ───────────────────────────────────────── */}
        <section
          className="relative w-full px-8 md:px-20 py-24 overflow-hidden"
          style={{ background: 'var(--bg-alt)', borderBottom: '1px solid rgba(61,92,53,0.1)' }}
        >
          <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
            <WarpShadow
              color="rgba(61, 92, 53, 0.22)"
              animation={{ scale: 45, speed: 55 }}
              noise={{ opacity: 0.12, scale: 1.2 }}
              sizing="fill"
            />
          </div>
          <div className="max-w-6xl mx-auto relative" style={{ zIndex: 1 }}>
            <p
              className="font-condensed uppercase text-xs tracking-[0.5em] mb-4"
              style={{ fontFamily: 'var(--font-barlow-condensed)', color: 'var(--orange-text)', fontWeight: 'bold' }}
            >
              Progetti del territorio
            </p>
            <h2
              className="font-display font-black italic text-ink leading-tight mb-14"
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
                letterSpacing: '-0.02em',
              }}
            >
              Alcune realtà con cui ho lavorato
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  name: 'All Fit',
                  tag: 'Fitness · Belluno e Treviso',
                  desc: 'Palestre a Belluno, Sedico e Trichiana (più Ponte di Piave, TV): posizionamento, tono di voce, contenuti social e video, campagne Meta e YouTube Ads.',
                  slug: 'allfit',
                },
                {
                  name: "Braghe's",
                  tag: 'Fashion · Accessibilità',
                  desc: 'Brand di abbigliamento accessibile per persone in carrozzina. Posizionamento, tone of voice e identità di marca nel settore fashion inclusivo.',
                  slug: 'braghes',
                },
                {
                  name: 'RC Ricambi Carrozzine',
                  tag: 'E-commerce · Accessibilità',
                  desc: 'E-commerce di ricambi per carrozzine. Strategia di comunicazione e crescita digitale per un mercato di nicchia ad alta specificità tecnica.',
                  slug: 'rc-ricambi',
                },
                {
                  name: 'CROSSabili',
                  tag: 'No-profit · Community',
                  desc: 'Community e organizzazione per inclusione e accessibilità: campagne social, storytelling e comunicazione degli eventi.',
                  slug: 'crossabili',
                },
              ].map(({ name, tag, desc, slug }) => (
                <Link
                  key={slug}
                  href={`/projects/${slug}`}
                  className="group flex flex-col gap-4 p-6 transition-colors duration-300 hover:bg-bg"
                  style={{ border: '1px solid rgba(61,92,53,0.15)', background: 'var(--bg)' }}
                >
                  <p
                    className="font-condensed uppercase text-xs tracking-[0.35em]"
                    style={{ fontFamily: 'var(--font-barlow-condensed)', color: 'var(--orange-text)', fontWeight: 'bold' }}
                  >
                    {tag}
                  </p>
                  <h3
                    className="font-display font-black italic text-ink leading-tight group-hover:text-green transition-colors duration-300"
                    style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.5rem' }}
                  >
                    {name}
                  </h3>
                  <p className="text-ink-faint leading-relaxed text-sm grow" style={{ fontFamily: 'var(--font-barlow)' }}>
                    {desc}
                  </p>
                  <span
                    className="font-condensed uppercase text-xs tracking-[0.25em]"
                    style={{ fontFamily: 'var(--font-barlow-condensed)', color: 'var(--orange-text)', fontWeight: 'bold' }}
                  >
                    Vedi progetto →
                  </span>
                </Link>
              ))}
            </div>

            <div className="mt-12">
              <Link
                href="/lavori"
                className="font-condensed uppercase text-ink text-xs tracking-[0.35em] border-b border-ink pb-0.5 hover:text-green hover:border-green transition-colors duration-300"
                style={{ fontFamily: 'var(--font-barlow-condensed)', color: 'var(--orange-text)', fontWeight: 'bold' }}
              >
                Tutti i progetti →
              </Link>
            </div>
          </div>
        </section>

        {/* ── Dove lavoro + FAQ ─────────────────────────────────────────────── */}
        <section className="w-full px-8 md:px-20 py-24" style={{ borderBottom: '1px solid rgba(61,92,53,0.1)' }}>
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <h2
                className="font-display font-black italic text-ink leading-tight mb-6"
                style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', letterSpacing: '-0.02em' }}
              >
                In tutta la provincia di Belluno
              </h2>
              <p className="text-ink-dim leading-relaxed mb-8" style={{ fontFamily: 'var(--font-barlow)', fontSize: '1.05rem' }}>
                Lavoro con aziende e attività di tutto il bellunese, dalla Valbelluna al Cadore. Le sessioni strategiche si fanno di persona, il lavoro di ogni giorno anche da remoto.
              </p>
              <ul className="flex flex-wrap gap-x-5 gap-y-2">
                {TOWNS.map((town) => (
                  <li key={town} className="text-ink" style={{ fontFamily: 'var(--font-barlow)', fontSize: '1rem' }}>
                    {town}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2
                className="font-display font-black italic text-ink leading-tight mb-6"
                style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', letterSpacing: '-0.02em' }}
              >
                Domande frequenti
              </h2>
              <div className="flex flex-col" style={{ borderTop: '1px solid rgba(61,92,53,0.1)' }}>
                {FAQS.map(({ q, a }) => (
                  <div key={q} className="py-6" style={{ borderBottom: '1px solid rgba(61,92,53,0.1)' }}>
                    <h3 className="font-display font-black italic text-ink leading-snug mb-2" style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.15rem' }}>
                      {q}
                    </h3>
                    <p className="text-ink-dim leading-relaxed" style={{ fontFamily: 'var(--font-barlow)', fontSize: '0.98rem' }}>
                      {a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Approfondimenti ───────────────────────────────────────────────── */}
        <section
          className="relative w-full px-8 md:px-20 py-20 overflow-hidden"
          style={{ borderBottom: '1px solid rgba(61,92,53,0.1)' }}
        >
          <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
            <WarpShadow
              color="rgba(61, 92, 53, 0.22)"
              animation={{ scale: 45, speed: 55 }}
              noise={{ opacity: 0.12, scale: 1.2 }}
              sizing="fill"
            />
          </div>
          <div className="max-w-6xl mx-auto relative" style={{ zIndex: 1 }}>
            <p
              className="font-condensed uppercase text-xs tracking-[0.5em] mb-8"
              style={{ fontFamily: 'var(--font-barlow-condensed)', color: 'var(--orange-text)', fontWeight: 'bold' }}
            >
              Approfondimenti
            </p>
            <div className="flex flex-col">
              {[
                { title: 'Come fare marketing per una palestra: il caso All Fit', slug: 'marketing-palestra-belluno-caso-allfit', cat: 'Caso del territorio' },
                { title: 'Essere sui social non è una strategia', slug: 'social-media-non-e-strategia', cat: 'Social media' },
                { title: "Il tono di voce è l'identità che tutti dimenticano", slug: 'tono-di-voce-dimenticato', cat: 'Comunicazione' },
                { title: 'La SEO locale vale ancora (anzi, vale di più)', slug: 'local-seo-vale-ancora', cat: 'Digital Marketing' },
                { title: 'Come far comparire la tua azienda nelle risposte di ChatGPT', slug: 'comparire-risposte-chatgpt', cat: 'AI, per domani' },
              ].map(({ title, slug, cat }) => (
                <Link
                  key={slug}
                  href={`/thinking/${slug}`}
                  className="group flex items-start justify-between gap-6 py-6"
                  style={{ borderBottom: '1px solid rgba(61,92,53,0.1)' }}
                >
                  <div>
                    <p
                      className="font-condensed uppercase text-xs tracking-[0.3em] mb-2"
                      style={{ fontFamily: 'var(--font-barlow-condensed)', color: 'var(--orange-text)', fontWeight: 'bold' }}
                    >
                      {cat}
                    </p>
                    <p
                      className="text-ink group-hover:text-green transition-colors duration-300 font-medium"
                      style={{ fontFamily: 'var(--font-barlow)', fontSize: '1.05rem' }}
                    >
                      {title}
                    </p>
                  </div>
                  <span
                    className="font-condensed text-ink-faint text-xs tracking-[0.2em] shrink-0 mt-1 group-hover:text-green transition-colors duration-300"
                    style={{ fontFamily: 'var(--font-barlow-condensed)', color: 'var(--orange-text)', fontWeight: 'bold' }}
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
