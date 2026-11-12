import type { Metadata } from 'next';
import Link from 'next/link';
import Contact from '@/components/Contact';
import { WarpShadow } from '@/components/ui/warp-shadow';

const URL = 'https://www.samuelebarchet.com/milano';
const TITLE = 'Brand Strategist e Social Media a Milano — Samuele Barchet';
const DESCRIPTION =
  'Brand strategist freelance a Milano: posizionamento, tono di voce, social media e campagne Meta Ads per PMI, startup e brand con una missione. Un consulente, non un’agenzia.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: URL },
};

const faqs = [
  {
    q: 'Lavori in presenza a Milano?',
    a: 'Sì. Le sessioni strategiche, come il workshop di posizionamento, si fanno volentieri di persona; il lavoro di ogni giorno anche da remoto.',
  },
  {
    q: 'Che differenza c’è con un’agenzia milanese?',
    a: 'Lavori direttamente con me, senza account manager in mezzo. Parto dalla strategia e dal tono di voce, poi costruisco contenuti e campagne coerenti con quella scelta.',
  },
  {
    q: 'Con che tipo di aziende lavori?',
    a: 'PMI, startup, e-commerce e organizzazioni con una missione: ho seguito progetti nel fashion inclusivo, nell’e-commerce per la mobilità accessibile, nella produzione video e nel SaaS.',
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
        { '@type': 'Thing', name: 'Brand Strategist Milano' },
        { '@type': 'Thing', name: 'Social Media Milano' },
      ],
      author: { '@id': 'https://www.samuelebarchet.com/#person' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.samuelebarchet.com' },
          { '@type': 'ListItem', position: 2, name: 'Brand strategy e social media a Milano', item: URL },
        ],
      },
    },
    {
      '@type': 'Service',
      name: 'Brand strategy e social media a Milano',
      serviceType: ['Brand Strategy', 'Social Media Management', 'Meta Ads'],
      provider: { '@id': 'https://www.samuelebarchet.com/#person' },
      areaServed: { '@type': 'City', name: 'Milano' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
    },
  ],
};

const label = { fontFamily: 'var(--font-barlow-condensed)', color: 'var(--orange-text)', fontWeight: 'bold' } as const;
const body = { fontFamily: 'var(--font-barlow)', fontSize: '1.05rem' } as const;
const h2 = { fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', letterSpacing: '-0.02em' } as const;
const textLink =
  'font-condensed uppercase text-xs tracking-[0.35em] border-b border-ink pb-0.5 hover:text-green hover:border-green transition-colors duration-300';

const services = [
  { title: 'Brand strategy', body: 'Posizionamento, target, messaggi e tono di voce: la base su cui costruire tutto il resto.', href: '/servizi' },
  { title: 'Social media', body: 'Strategia, piano editoriale e contenuti, in gestione completa o affiancando il vostro team.', href: '/belluno/social-media' },
  { title: 'Campagne Meta Ads', body: 'Facebook e Instagram a pagamento con obiettivi chiari e un report mensile leggibile.', href: '/servizi' },
  { title: 'Visibilità sulle AI', body: 'Per chi vuole già guardare avanti: farsi trovare e citare da ChatGPT, Perplexity e Gemini.', href: '/belluno/geo' },
];

const cases = [
  { name: "Braghe's", tag: 'Fashion · Accessibilità', href: '/projects/braghes' },
  { name: 'RC – Ricambi per Carrozzine', tag: 'E-commerce · Accessibilità', href: '/projects/rc-ricambi' },
  { name: 'VYST', tag: 'Social media · Video', href: '/projects/vyst' },
  { name: '3D Axis', tag: 'Social · E-commerce', href: '/projects/3d-axis' },
];

export default function MilanoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }} />
      <main>
        <section data-surface="dark" className="w-full px-8 md:px-20 pt-40 pb-24" style={{ background: 'var(--ink)' }}>
          <div className="max-w-6xl mx-auto">
            <p className="font-condensed uppercase text-xs tracking-[0.5em] mb-6" style={label}>
              Milano · Freelance
            </p>
            <h1
              className="font-display font-black italic text-bg leading-[0.95]"
              style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(2.4rem, 6vw, 5rem)', letterSpacing: '-0.03em', maxWidth: '16ch' }}
            >
              Brand strategy e social media a Milano
            </h1>
            <p className="mt-8 text-bg/80 leading-relaxed max-w-2xl" style={{ fontFamily: 'var(--font-barlow)', fontSize: 'clamp(1rem, 1.3vw, 1.15rem)' }}>
              Lavoro tra Milano e Belluno con PMI, startup e brand che hanno qualcosa da dire. Prima capiamo chi siete e per chi, poi costruiamo social, contenuti e campagne coerenti con quella scelta.
            </p>
            <div className="mt-10 flex flex-wrap gap-6">
              <Link href="/contatti" className="font-condensed uppercase text-xs tracking-[0.35em] border-b border-bg/50 pb-0.5 hover:border-green transition-colors duration-300" style={label}>
                Parliamone →
              </Link>
              <Link href="/lavori" className="font-condensed uppercase text-xs tracking-[0.35em] border-b border-bg/25 pb-0.5 hover:border-green transition-colors duration-300" style={label}>
                I lavori →
              </Link>
            </div>
          </div>
        </section>

        <section className="relative w-full px-8 md:px-20 py-24 overflow-hidden" style={{ borderBottom: '1px solid rgba(61,92,53,0.1)' }}>
          <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
            <WarpShadow color="rgba(61, 92, 53, 0.22)" animation={{ scale: 45, speed: 55 }} noise={{ opacity: 0.12, scale: 1.2 }} sizing="fill" />
          </div>
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 relative" style={{ zIndex: 1 }}>
            <h2 className="font-display font-black italic text-ink leading-tight" style={h2}>
              Un consulente, non un&apos;agenzia
            </h2>
            <div className="flex flex-col gap-5 lg:pt-2">
              <p className="text-ink-dim leading-relaxed" style={body}>
                A Milano non mancano le agenzie. Quello che spesso manca è qualcuno che si sieda con voi e vi aiuti a decidere <strong className="font-semibold text-ink">cosa dire, prima di come dirlo</strong>.
              </p>
              <p className="text-ink-dim leading-relaxed" style={body}>
                Ho studiato comunicazione a Padova e digital marketing allo IULM di Milano. Oggi lavoro in proprio: quando mi scrivete, lavorate con me, senza passaggi intermedi.
              </p>
              <p className="text-ink-dim leading-relaxed" style={body}>
                Il metodo è sempre lo stesso: <strong className="font-semibold text-ink">strategia e tono di voce prima, poi contenuti e campagne</strong>, misurati ogni mese.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full px-8 md:px-20 py-24" style={{ background: 'var(--bg-alt)', borderBottom: '1px solid rgba(61,92,53,0.1)' }}>
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display font-black italic text-ink leading-tight mb-14" style={h2}>
              Cosa posso fare per voi
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map(({ title, body: text, href }) => (
                <Link key={title} href={href} className="group flex flex-col gap-4 p-8 transition-colors duration-300 hover:bg-bg-alt" style={{ border: '1px solid rgba(61,92,53,0.15)', background: 'var(--bg)' }}>
                  <h3 className="font-display font-black italic text-ink leading-tight group-hover:text-green transition-colors duration-300" style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.3rem, 2vw, 1.7rem)' }}>
                    {title}
                  </h3>
                  <p className="text-ink-dim leading-relaxed" style={{ fontFamily: 'var(--font-barlow)', fontSize: '1rem' }}>
                    {text}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full px-8 md:px-20 py-24" style={{ borderBottom: '1px solid rgba(61,92,53,0.1)' }}>
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display font-black italic text-ink leading-tight mb-10" style={h2}>
              Alcuni progetti
            </h2>
            <ul className="flex flex-col" style={{ borderTop: '1px solid rgba(61,92,53,0.1)' }}>
              {cases.map(({ name, tag, href }) => (
                <li key={href} style={{ borderBottom: '1px solid rgba(61,92,53,0.1)' }}>
                  <Link href={href} className="group flex items-baseline justify-between gap-6 py-6">
                    <span className="font-display font-black italic text-ink group-hover:text-green transition-colors duration-300" style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.2rem, 2vw, 1.6rem)' }}>
                      {name}
                    </span>
                    <span className="font-condensed uppercase text-xs tracking-[0.25em] text-ink-dim shrink-0" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>
                      {tag} →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

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
              <Link href="/servizi" className={textLink} style={label}>
                Tutti i servizi →
              </Link>
              <Link href="/belluno" className={textLink} style={label}>
                Anche a Belluno →
              </Link>
            </div>
          </div>
        </section>

        <Contact />
      </main>
    </>
  );
}
