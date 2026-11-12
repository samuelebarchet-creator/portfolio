import Link from 'next/link';
import type { ReactNode } from 'react';
import Contact from '@/components/Contact';
import { WarpShadow } from '@/components/ui/warp-shadow';

/* Shared layout for the local service pages (/belluno/*). Each page passes its own
   copy and facts; the structure stays the same so the cluster reads as one system. */

const BASE = 'https://www.samuelebarchet.com';

export type Faq = { q: string; a: string };
export type Item = { title: string; body: ReactNode };
export type CaseCard = { name: string; tag: string; desc: string; href: string };

export type LocalServiceContent = {
  path: string;
  title: string;
  description: string;
  breadcrumb: string;
  serviceType: string[];
  about: string[];
  eyebrow: string;
  h1: string;
  lead: string;
  secondaryCta?: { label: string; href: string };
  intro: { h2: string; paragraphs: ReactNode[] };
  items: { h2: string; list: Item[]; note?: ReactNode };
  proof?: { h2: string; body: ReactNode; cards: CaseCard[] };
  aside?: { h2: string; body: ReactNode; links: { label: string; href: string }[] };
  faqs: Faq[];
  related: { label: string; href: string }[];
};

export function buildLocalServiceLd(c: LocalServiceContent) {
  const url = `${BASE}${c.path}`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': url,
        url,
        name: c.title,
        description: c.description,
        dateModified: '2026-11-12',
        about: c.about.map((name) => ({ '@type': 'Thing', name })),
        author: { '@id': `${BASE}/#person` },
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
            { '@type': 'ListItem', position: 2, name: 'Social media e comunicazione a Belluno', item: `${BASE}/belluno` },
            { '@type': 'ListItem', position: 3, name: c.breadcrumb, item: url },
          ],
        },
      },
      {
        '@type': 'Service',
        name: c.breadcrumb,
        serviceType: c.serviceType,
        provider: { '@id': `${BASE}/#person` },
        areaServed: { '@type': 'AdministrativeArea', name: 'Provincia di Belluno' },
      },
      {
        '@type': 'FAQPage',
        mainEntity: c.faqs.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
      },
    ],
  };
}

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

export default function LocalServicePage({ content: c }: { content: LocalServiceContent }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildLocalServiceLd(c)) }} />
      <main>
        {/* Hero */}
        <section data-surface="dark" className="w-full px-8 md:px-20 pt-40 pb-24" style={{ background: 'var(--ink)' }}>
          <div className="max-w-6xl mx-auto">
            <p className="font-condensed uppercase text-xs tracking-[0.5em] mb-6" style={label}>
              <Link href="/belluno" className="hover:underline">Belluno</Link> · {c.eyebrow}
            </p>
            <h1
              className="font-display font-black italic text-bg leading-[0.95]"
              style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(2.4rem, 6vw, 5rem)', letterSpacing: '-0.03em', maxWidth: '18ch' }}
            >
              {c.h1}
            </h1>
            <p className="mt-8 text-bg/80 leading-relaxed max-w-2xl" style={{ fontFamily: 'var(--font-barlow)', fontSize: 'clamp(1rem, 1.3vw, 1.15rem)' }}>
              {c.lead}
            </p>
            <div className="mt-10 flex flex-wrap gap-6">
              <Link href="/contatti" className="font-condensed uppercase text-xs tracking-[0.35em] border-b border-bg/50 pb-0.5 hover:border-green transition-colors duration-300" style={label}>
                Parliamone →
              </Link>
              {c.secondaryCta && (
                <Link href={c.secondaryCta.href} className="font-condensed uppercase text-xs tracking-[0.35em] border-b border-bg/25 pb-0.5 hover:border-green transition-colors duration-300" style={label}>
                  {c.secondaryCta.label} →
                </Link>
              )}
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="relative w-full px-8 md:px-20 py-24 overflow-hidden" style={{ borderBottom: '1px solid rgba(61,92,53,0.1)' }}>
          <Warp />
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 relative" style={{ zIndex: 1 }}>
            <h2 className="font-display font-black italic text-ink leading-tight" style={h2}>
              {c.intro.h2}
            </h2>
            <div className="flex flex-col gap-5 lg:pt-2">
              {c.intro.paragraphs.map((p, i) => (
                <p key={i} className="text-ink-dim leading-relaxed" style={body}>
                  {p}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* What I do */}
        <section className="relative w-full px-8 md:px-20 py-24 overflow-hidden" style={{ background: 'var(--bg-alt)', borderBottom: '1px solid rgba(61,92,53,0.1)' }}>
          <Warp />
          <div className="max-w-6xl mx-auto relative" style={{ zIndex: 1 }}>
            <h2 className="font-display font-black italic text-ink leading-tight mb-14" style={h2}>
              {c.items.h2}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {c.items.list.map(({ title, body: text }) => (
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
            {c.items.note && (
              <p className="mt-10 text-ink-dim leading-relaxed max-w-3xl" style={body}>
                {c.items.note}
              </p>
            )}
          </div>
        </section>

        {/* Proof */}
        {c.proof && (
          <section className="relative w-full px-8 md:px-20 py-24 overflow-hidden" style={{ borderBottom: '1px solid rgba(61,92,53,0.1)' }}>
            <Warp />
            <div className="max-w-6xl mx-auto relative" style={{ zIndex: 1 }}>
              <h2 className="font-display font-black italic text-ink leading-tight mb-6" style={h2}>
                {c.proof.h2}
              </h2>
              <p className="text-ink-dim leading-relaxed max-w-2xl mb-14" style={body}>
                {c.proof.body}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {c.proof.cards.map(({ name, tag, desc, href }) => (
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
                      Leggi →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Aside */}
        {c.aside && (
          <section className="w-full px-8 md:px-20 py-20" style={{ background: 'var(--bg-alt)', borderBottom: '1px solid rgba(61,92,53,0.1)' }}>
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
              <h2 className="font-display font-black italic text-ink leading-tight" style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)' }}>
                {c.aside.h2}
              </h2>
              <div className="flex flex-col gap-5">
                <p className="text-ink-dim leading-relaxed" style={body}>
                  {c.aside.body}
                </p>
                <div className="flex flex-wrap gap-6">
                  {c.aside.links.map(({ label: l, href }) => (
                    <Link key={href} href={href} className={textLink} style={label}>
                      {l} →
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* FAQ */}
        <section className="px-8 md:px-20 py-20" style={{ borderBottom: '1px solid rgba(61,92,53,0.1)' }}>
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display font-black italic text-ink leading-tight mb-8" style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)' }}>
              Domande frequenti
            </h2>
            <div className="flex flex-col" style={{ borderTop: '1px solid rgba(61,92,53,0.1)' }}>
              {c.faqs.map(({ q, a }) => (
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
              {c.related.map(({ label: l, href }) => (
                <Link key={href} href={href} className={textLink} style={label}>
                  {l} →
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
