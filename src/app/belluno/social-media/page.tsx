import type { Metadata } from 'next';
import Link from 'next/link';
import Contact from '@/components/Contact';
import { WarpShadow } from '@/components/ui/warp-shadow';

const URL = 'https://www.samuelebarchet.com/belluno/social-media';
const TITLE = 'Social Media Manager a Belluno — Samuele Barchet';
const DESCRIPTION =
  'Consulente social media a Belluno: strategia, piano editoriale, contenuti e campagne Meta Ads per aziende e attività della provincia, gestiti o affiancati.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: 'Social media per le aziende della provincia di Belluno: prima la strategia, poi contenuti e campagne.',
    url: URL,
    images: [{ url: '/belluno/hero.jpg', width: 1200, height: 630, alt: 'Social media a Belluno — Dolomiti' }],
  },
};

const faqs = [
  {
    q: 'Gestisci tu i profili o formi chi lavora in azienda?',
    a: 'Entrambe le cose. Posso gestire i social dall’inizio alla fine, oppure impostare strategia e piano editoriale e affiancare la persona che in azienda se ne occupa, finché non è autonoma.',
  },
  {
    q: 'Lavori solo con aziende di Belluno?',
    a: 'No, seguo brand in tutta Italia. Ma una parte del mio lavoro è dedicata alla provincia di Belluno, dove sono cresciuto: per le sessioni strategiche posso venire di persona, il resto si fa anche da remoto.',
  },
  {
    q: 'Fai anche campagne a pagamento su Facebook e Instagram?',
    a: 'Sì. Imposto e gestisco campagne Meta Ads con obiettivi diversi (farsi conoscere, raccogliere contatti, rafforzare il legame con il territorio) e misuro ogni mese cosa funziona.',
  },
  {
    q: 'Quanto tempo serve per vedere risultati sui social?',
    a: 'Dipende da dove si parte. I primi segnali (contenuti che funzionano meglio di altri, pubblico che risponde) si vedono in poche settimane; una presenza riconoscibile si costruisce in mesi, non in giorni.',
  },
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
      dateModified: '2026-11-12',
      about: [
        { '@type': 'Thing', name: 'Social Media Manager Belluno' },
        { '@type': 'Thing', name: 'Consulente Social Media Belluno' },
        { '@type': 'Thing', name: 'Comunicazione aziendale Belluno' },
      ],
      author: { '@id': 'https://www.samuelebarchet.com/#person' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.samuelebarchet.com' },
          { '@type': 'ListItem', position: 2, name: 'Social media e comunicazione a Belluno', item: 'https://www.samuelebarchet.com/belluno' },
          { '@type': 'ListItem', position: 3, name: 'Social media a Belluno', item: URL },
        ],
      },
    },
    {
      '@type': 'Service',
      name: 'Gestione e consulenza social media a Belluno',
      serviceType: 'Social Media Management',
      provider: { '@id': 'https://www.samuelebarchet.com/#person' },
      areaServed: { '@type': 'AdministrativeArea', name: 'Provincia di Belluno' },
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

const work = [
  {
    title: 'Strategia e tono di voce',
    body: 'Chi siete, a chi parlate, cosa volete che la gente pensi di voi. Prima di pubblicare qualsiasi cosa, mettiamo nero su bianco posizionamento e modo di parlare.',
  },
  {
    title: 'Piano editoriale e contenuti',
    body: 'Rubriche ricorrenti, calendario mensile, testi, script per i video e adattamento a ogni formato. Contenuti che sembrano vostri, non presi da un modello.',
  },
  {
    title: 'Campagne Meta Ads',
    body: 'Facebook e Instagram a pagamento con obiettivi chiari: farsi conoscere, raccogliere contatti, rafforzare il legame con chi vive nella zona.',
  },
  {
    title: 'Numeri che contano',
    body: 'Un report mensile leggibile: cosa ha funzionato, cosa no, cosa cambiamo il mese dopo. Niente metriche di vanità.',
  },
];

const label = { fontFamily: 'var(--font-barlow-condensed)', color: 'var(--orange-text)', fontWeight: 'bold' } as const;
const body = { fontFamily: 'var(--font-barlow)', fontSize: '1.05rem' } as const;
const h2 = { fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', letterSpacing: '-0.02em' } as const;
const textLink =
  'font-condensed uppercase text-xs tracking-[0.35em] border-b border-ink pb-0.5 hover:text-green hover:border-green transition-colors duration-300';

function Warp() {
  return (
    <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
      <WarpShadow color="rgba(61, 92, 53, 0.22)" animation={{ scale: 45, speed: 55 }} noise={{ opacity: 0.12, scale: 1.2 }} sizing="fill" />
    </div>
  );
}

export default function SocialMediaBellunoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }} />
      <main>
        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section data-surface="dark" className="w-full px-8 md:px-20 pt-40 pb-24" style={{ background: 'var(--ink)' }}>
          <div className="max-w-6xl mx-auto">
            <p className="font-condensed uppercase text-xs tracking-[0.5em] mb-6" style={label}>
              <Link href="/belluno" className="hover:underline">Belluno</Link> · Social media
            </p>
            <h1
              className="font-display font-black italic text-bg leading-[0.95]"
              style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(2.4rem, 6vw, 5rem)', letterSpacing: '-0.03em', maxWidth: '18ch' }}
            >
              Social media manager e consulente social a Belluno
            </h1>
            <p className="mt-8 text-bg/80 leading-relaxed max-w-2xl" style={{ fontFamily: 'var(--font-barlow)', fontSize: 'clamp(1rem, 1.3vw, 1.15rem)' }}>
              Imposto e gestisco i social delle aziende della provincia partendo da una domanda: cosa volete che la gente pensi di voi? Poi arrivano piano editoriale, contenuti e campagne.
            </p>
            <div className="mt-10 flex flex-wrap gap-6">
              <Link href="/contatti" className="font-condensed uppercase text-xs tracking-[0.35em] border-b border-bg/50 pb-0.5 hover:border-green transition-colors duration-300" style={label}>
                Parliamone →
              </Link>
              <Link href="/thinking/marketing-palestra-belluno-caso-allfit" className="font-condensed uppercase text-xs tracking-[0.35em] border-b border-bg/25 pb-0.5 hover:border-green transition-colors duration-300" style={label}>
                Il caso All Fit →
              </Link>
            </div>
          </div>
        </section>

        {/* ── Il punto di partenza ─────────────────────────────────────────── */}
        <section className="relative w-full px-8 md:px-20 py-24 overflow-hidden" style={{ borderBottom: '1px solid rgba(61,92,53,0.1)' }}>
          <Warp />
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 relative" style={{ zIndex: 1 }}>
            <h2 className="font-display font-black italic text-ink leading-tight" style={h2}>
              Essere sui social non è ancora una strategia
            </h2>
            <div className="flex flex-col gap-5 lg:pt-2">
              <p className="text-ink-dim leading-relaxed" style={body}>
                Molte attività del bellunese hanno una pagina Facebook e un profilo Instagram, aggiornati quando c&apos;è tempo. Il risultato è una presenza che c&apos;è, ma <strong className="font-semibold text-ink">non dice niente di preciso</strong> e non porta clienti.
              </p>
              <p className="text-ink-dim leading-relaxed" style={body}>
                Il problema quasi mai è la frequenza dei post. È che manca una risposta a monte: chi siete, per chi, e perché qualcuno dovrebbe scegliere voi invece di chi sta in fondo alla strada. Ne ho scritto in{' '}
                <Link href="/thinking/social-media-non-e-strategia" className="text-green underline underline-offset-2 hover:no-underline">
                  Essere sui social non è una strategia
                </Link>
                .
              </p>
              <p className="text-ink-dim leading-relaxed" style={body}>
                Il mio lavoro parte da lì: <strong className="font-semibold text-ink">prima la strategia e il tono di voce, poi i contenuti</strong>. Nell&apos;ordine giusto.
              </p>
            </div>
          </div>
        </section>

        {/* ── Cosa faccio ──────────────────────────────────────────────────── */}
        <section className="relative w-full px-8 md:px-20 py-24 overflow-hidden" style={{ background: 'var(--bg-alt)', borderBottom: '1px solid rgba(61,92,53,0.1)' }}>
          <Warp />
          <div className="max-w-6xl mx-auto relative" style={{ zIndex: 1 }}>
            <h2 className="font-display font-black italic text-ink leading-tight mb-14" style={h2}>
              Cosa faccio per i vostri social
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {work.map(({ title, body: text }) => (
                <div key={title} className="flex flex-col gap-4 p-8" style={{ border: '1px solid rgba(61,92,53,0.15)', background: 'var(--bg)' }}>
                  <h3 className="font-display font-black italic text-ink leading-tight" style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.3rem, 2vw, 1.7rem)' }}>
                    {title}
                  </h3>
                  <p className="text-ink-dim leading-relaxed" style={{ fontFamily: 'var(--font-barlow)', fontSize: '1rem' }}>
                    {text}
                  </p>
                </div>
              ))}
            </div>

            <h3 className="mt-20 font-display font-black italic text-ink leading-tight mb-8" style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}>
              Due modi di lavorare insieme
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0" style={{ borderTop: '1px solid rgba(61,92,53,0.12)' }}>
              {[
                { t: 'Gestione completa', d: 'Mi occupo io di strategia, contenuti, pubblicazione e campagne. Voi approvate e mi raccontate cosa succede in azienda.' },
                { t: 'Affiancamento', d: 'Imposto strategia e piano editoriale, poi affianco chi in azienda gestisce i social, con formazione e revisioni periodiche, finché non è autonomo.' },
              ].map(({ t, d }) => (
                <div key={t} className="py-8 md:pr-10" style={{ borderBottom: '1px solid rgba(61,92,53,0.12)' }}>
                  <p className="font-display font-black italic text-ink mb-2" style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.25rem' }}>
                    {t}
                  </p>
                  <p className="text-ink-dim leading-relaxed" style={{ fontFamily: 'var(--font-barlow)', fontSize: '1rem' }}>
                    {d}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Dal territorio ───────────────────────────────────────────────── */}
        <section className="relative w-full px-8 md:px-20 py-24 overflow-hidden" style={{ borderBottom: '1px solid rgba(61,92,53,0.1)' }}>
          <Warp />
          <div className="max-w-6xl mx-auto relative" style={{ zIndex: 1 }}>
            <h2 className="font-display font-black italic text-ink leading-tight mb-6" style={h2}>
              Social media fatti qui
            </h2>
            <p className="text-ink-dim leading-relaxed max-w-2xl mb-14" style={body}>
              Per <strong className="font-semibold text-ink">All Fit</strong>, palestre a Belluno, Sedico e Trichiana (più un club a Ponte di Piave, nel trevigiano), curo come referente della comunicazione posizionamento, tono di voce, contenuti social ricorrenti e video, più campagne Meta e YouTube Ads su tre obiettivi: farsi conoscere, raccogliere contatti e rafforzare il legame con il territorio.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: 'All Fit', tag: 'Fitness · Belluno', desc: 'Contenuti ricorrenti, video e campagne Meta e YouTube Ads per palestre tra Belluno e Treviso.', href: '/projects/allfit' },
                { name: 'VYST', tag: 'Social media · Video', desc: 'Gestione delle pagine Meta e LinkedIn, linea editoriale e formati video per i social.', href: '/projects/vyst' },
                { name: '3D Axis', tag: 'Social · E-commerce', desc: 'Strategia Instagram e Facebook, copywriting, piano editoriale e report mensili.', href: '/projects/3d-axis' },
              ].map(({ name, tag, desc, href }) => (
                <Link key={href} href={href} className="group flex flex-col gap-4 p-6 transition-colors duration-300 hover:bg-bg-alt" style={{ border: '1px solid rgba(61,92,53,0.15)', background: 'var(--bg)' }}>
                  <p className="font-condensed uppercase text-xs tracking-[0.3em] text-ink-dim" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>
                    {tag}
                  </p>
                  <h3 className="font-display font-black italic text-ink leading-tight group-hover:text-green transition-colors duration-300" style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.5rem' }}>
                    {name}
                  </h3>
                  <p className="text-ink-dim leading-relaxed text-sm grow" style={{ fontFamily: 'var(--font-barlow)' }}>
                    {desc}
                  </p>
                  <span className="font-condensed uppercase text-xs tracking-[0.25em] text-green" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>
                    Vedi il progetto →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── E domani ─────────────────────────────────────────────────────── */}
        <section className="w-full px-8 md:px-20 py-20" style={{ background: 'var(--bg-alt)', borderBottom: '1px solid rgba(61,92,53,0.1)' }}>
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <h2 className="font-display font-black italic text-ink leading-tight" style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)' }}>
              E domani? Social pronti per l&apos;intelligenza artificiale
            </h2>
            <div className="flex flex-col gap-5">
              <p className="text-ink-dim leading-relaxed" style={body}>
                I social restano il centro della comunicazione di un&apos;azienda locale. Ma sempre più persone chiedono a ChatGPT o a Gemini quale attività scegliere. I contenuti che costruiamo oggi, chiari e coerenti, sono anche quelli che domani queste risposte citeranno.
              </p>
              <div className="flex flex-wrap gap-6">
                <Link href="/belluno/ai-marketing" className={textLink} style={label}>
                  AI Marketing a Belluno →
                </Link>
                <Link href="/belluno/geo" className={textLink} style={label}>
                  Farsi citare da ChatGPT →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────────────── */}
        <section className="px-8 md:px-20 py-20" style={{ borderBottom: '1px solid rgba(61,92,53,0.1)' }}>
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display font-black italic text-ink leading-tight mb-8" style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)' }}>
              Domande frequenti
            </h2>
            <div className="flex flex-col" style={{ borderTop: '1px solid rgba(61,92,53,0.1)' }}>
              {faqs.map(({ q, a }) => (
                <div key={q} className="py-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16" style={{ borderBottom: '1px solid rgba(61,92,53,0.1)' }}>
                  <h3 className="font-display font-black italic text-ink leading-snug" style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1rem, 1.5vw, 1.2rem)' }}>
                    {q}
                  </h3>
                  <p className="text-ink-dim leading-relaxed" style={{ fontFamily: 'var(--font-barlow)', fontSize: '0.95rem' }}>
                    {a}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-12 flex flex-wrap gap-8">
              <Link href="/belluno" className={textLink} style={label}>
                Comunicazione a Belluno →
              </Link>
              <Link href="/servizi" className={textLink} style={label}>
                Tutti i servizi →
              </Link>
            </div>
          </div>
        </section>

        <Contact />
      </main>
    </>
  );
}
