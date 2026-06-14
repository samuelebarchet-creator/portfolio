import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SmoothScrollHero from '@/components/ui/smooth-scroll-hero';
import StatsBar from '@/components/StatsBar';
import Contact from '@/components/Contact';
import { about } from '@/lib/about';

export const metadata: Metadata = {
  title: 'Samuele Barchet — Brand & Digital Strategist Freelance',
  description: 'Brand & Digital Strategist freelance. Dalla provincia di Belluno al mondo del marketing digitale: la mia storia, i miei valori e il mio approccio.',
  alternates: { canonical: 'https://www.samuelebarchet.com/about' },
  openGraph: {
    title: 'Samuele Barchet — Brand & Digital Strategist Freelance',
    description: 'Brand & Digital Strategist freelance. Dalla provincia di Belluno al mondo del marketing digitale.',
    url: 'https://www.samuelebarchet.com/about',
    images: [{ url: '/about/samuele.jpg', width: 1200, height: 630, alt: 'Samuele Barchet' }],
  },
};

const ldJson = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": "https://www.samuelebarchet.com/about",
  "url": "https://www.samuelebarchet.com/about",
  "name": "About — Samuele Barchet",
  "dateModified": "2026-06-14",
  "mainEntity": {
    "@type": "Person",
    "@id": "https://www.samuelebarchet.com/#person",
    "name": "Samuele Barchet",
    "jobTitle": "Brand & Digital Strategist",
    "birthDate": "2001",
    "birthPlace": { "@type": "Place", "name": "Belluno, Italia" },
    "alumniOf": [
      { "@type": "EducationalOrganization", "name": "Università di Padova", "description": "Laurea in Comunicazione" },
      { "@type": "EducationalOrganization", "name": "Università IULM Milano", "description": "Laurea Magistrale in Digital Marketing" }
    ],
    "knowsAbout": ["Brand Strategy", "Digital Marketing", "Social Media", "Meta Ads", "Content Strategy", "Email Marketing", "Copywriting"],
    "image": "https://www.samuelebarchet.com/about/samuele.jpg",
    "url": "https://www.samuelebarchet.com",
    "sameAs": ["https://www.linkedin.com/in/samuele-barchet-3ba80a1ba/"]
  }
};

const B = ({ children }: { children: ReactNode }) => (
  <strong className="font-semibold text-ink">{children}</strong>
);

const bioChapters: { label: string; paragraphs: ReactNode[] }[] = [
  {
    label: 'Le origini',
    paragraphs: [
      <><B>Sono nato a Belluno nel 2001</B> in una famiglia molto numerosa, composta da otto persone.<br />Crescere in un contesto dove ognuno aveva idee, valori e punti di vista diversi mi ha insegnato presto una cosa: <B>comunicare non significa parlare, significa farsi capire.</B></>,
      <>Probabilmente è da lì che nasce il mio interesse per la comunicazione.<br />Dalla curiosità di capire cosa spinge le persone a <B>scegliere, fidarsi, cambiare idea</B> o sentirsi parte di qualcosa.</>,
    ],
  },
  {
    label: 'Il percorso',
    paragraphs: [
      <>Dopo il liceo ho scelto di dedicare un anno al <B>servizio civile</B>, lavorando a stretto contatto con <B>persone con disabilità</B>.<br />È stata un&apos;esperienza che mi ha permesso di avvicinarmi al mondo delle associazioni, dell&apos;organizzazione di eventi e della <B>comunicazione sociale</B>, scoprendo quanto le parole e le storie possano avere un impatto concreto sulla vita delle persone.</>,
      <>Per dare una base più solida a questa passione mi sono iscritto all&apos;<B>Università di Padova</B>, dove mi sono laureato in <B>Comunicazione</B> con una tesi dedicata alla gestione del brand.<br />Parallelamente ho iniziato a lavorare come <B>freelance</B>, trasformando ogni progetto in un&apos;occasione per mettere in pratica ciò che studiavo.</>,
      <>Successivamente mi sono trasferito a <B>Milano</B> per frequentare la laurea magistrale in <B>Digital Marketing</B> presso l&apos;<B>Università IULM</B>.<br />Qui ho approfondito il rapporto tra dati, strategia e comportamento degli utenti, avvicinandomi sempre di più al mondo dell&apos;<B>intelligenza artificiale</B> applicata al marketing.</>,
    ],
  },
  {
    label: 'Oggi',
    paragraphs: [
      <>Negli anni ho collaborato con <B>startup</B>, <B>e-commerce</B>, <B>organizzazioni no-profit</B>, progetti sociali e aziende digitali.<br />Ambiti molto diversi tra loro, ma accomunati dalla stessa sfida: trovare il modo giusto di comunicare il proprio valore.<br />Puoi vedere alcuni <Link href="/lavori" className="text-green underline underline-offset-2 hover:no-underline">lavori realizzati</Link>.</>,
      <>Oggi aiuto brand e organizzazioni a costruire una <B>presenza digitale più chiara, coerente e strategica</B>.<br />Il mio lavoro parte sempre da una domanda semplice: <B>perché qualcuno dovrebbe scegliere proprio voi?</B><br />Scopri come attraverso i <Link href="/servizi" className="text-green underline underline-offset-2 hover:no-underline">servizi che offro</Link>.</>,
    ],
  },
];

const philosophy = [
  <>La <B>strategia</B> viene prima degli strumenti. Prima di parlare di social, advertising o contenuti, serve capire chi si è, a chi si parla e quale spazio si vuole occupare nella mente delle persone.</>,
  <>Per questo il mio approccio unisce <B>analisi, creatività e pragmatismo</B>: trasformare idee complesse in messaggi chiari e obiettivi concreti.</>,
];

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }} />
    <main>
      {/* ── Smooth scroll reveal — Dolomites ───────────────────────────────── */}
      <SmoothScrollHero
        scrollHeight={1120}
        desktopImage="/about/mountains.jpg"
        mobileImage="/about/mountains-mobile.jpg"
        initialClipPercentage={0}
        finalClipPercentage={100}
        heroLabel="About"
        heroTitle="Dalle montagne al mondo del digital"
      />

      {/* ── Portrait + identity ────────────────────────────────────────────── */}
      <section
        className="w-full bg-bg px-8 md:px-20 pt-24 pb-20"
        style={{ borderTop: '1px solid rgba(61,92,53,0.12)' }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Photo */}
          <div>
            <div
              className="relative overflow-hidden"
              style={{ aspectRatio: '3/4' }}
            >
              <Image
                src="/about/samuele.jpg"
                alt="Samuele Barchet a Padova"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <p
              className="mt-3 font-condensed text-ink-faint text-xs uppercase tracking-[0.3em]"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              Padova · Prato della Valle
            </p>
          </div>

          {/* Identity */}
          <div className="lg:pt-6 flex flex-col gap-6">
            <div>
              <p
                className="font-condensed uppercase text-green text-xs tracking-[0.5em] mb-6"
                style={{ fontFamily: 'var(--font-barlow-condensed)' }}
              >
                Chi sono
              </p>
              <h2
                className="font-display font-black italic text-ink leading-[0.88]"
                style={{
                  fontFamily: 'var(--font-playfair)',
                  fontSize: 'clamp(3rem, 7vw, 6rem)',
                  letterSpacing: '-0.03em',
                }}
              >
                Samuele<br />Barchet
              </h2>
              <p
                className="mt-3 font-condensed uppercase text-green text-sm tracking-[0.3em]"
                style={{ fontFamily: 'var(--font-barlow-condensed)' }}
              >
                Brand &amp; Digital Strategist · Belluno, 2001
              </p>
            </div>

            <div
              className="h-px w-full"
              style={{ background: 'rgba(61,92,53,0.15)' }}
            />

            {/* First two paragraphs */}
            {bioChapters[0].paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-ink-dim leading-relaxed"
                style={{ fontFamily: 'var(--font-barlow)', fontSize: '1.05rem' }}
              >
                {p}
              </p>
            ))}

            {/* Philosophy pull quote */}
            <blockquote
              className="pl-5 border-l-2 mt-4"
              style={{ borderColor: 'var(--green)' }}
            >
              <p
                className="font-display font-black italic text-ink leading-snug"
                style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.1rem, 2vw, 1.4rem)' }}
              >
                "{philosophy[0]}"
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ── Full bio ───────────────────────────────────────────────────────── */}
      <section
        className="w-full bg-bg-alt px-8 md:px-20 py-24"
        style={{ borderTop: '1px solid rgba(61,92,53,0.1)' }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

            {/* Chapters */}
            <div className="lg:col-span-2 flex flex-col gap-14">
              {bioChapters.slice(1).map((chapter) => (
                <div key={chapter.label}>
                  <p
                    className="font-condensed uppercase text-green text-xs tracking-[0.45em] mb-5"
                    style={{ fontFamily: 'var(--font-barlow-condensed)' }}
                  >
                    {chapter.label}
                  </p>
                  <div className="flex flex-col gap-5">
                    {chapter.paragraphs.map((p, i) => (
                      <p
                        key={i}
                        className="text-ink-dim leading-relaxed"
                        style={{ fontFamily: 'var(--font-barlow)', fontSize: '1.05rem' }}
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Sidebar — skills & approach */}
            <div className="flex flex-col gap-10">
              {/* Approach */}
              <div
                className="p-6"
                style={{ border: '1px solid rgba(61,92,53,0.15)', background: 'var(--bg)' }}
              >
                <p
                  className="font-condensed uppercase text-green text-xs tracking-[0.4em] mb-4"
                  style={{ fontFamily: 'var(--font-barlow-condensed)' }}
                >
                  Approccio
                </p>
                <p
                  className="font-display font-black italic text-ink leading-snug"
                  style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.1rem' }}
                >
                  "{philosophy[1]}"
                </p>
              </div>

              {/* Skills */}
              <div>
                <p
                  className="font-condensed uppercase text-ink-faint text-xs tracking-[0.35em] mb-4"
                  style={{ fontFamily: 'var(--font-barlow-condensed)' }}
                >
                  Competenze
                </p>
                <div className="flex flex-wrap gap-2">
                  {about.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 font-condensed text-xs uppercase tracking-[0.15em] text-ink-dim"
                      style={{
                        fontFamily: 'var(--font-barlow-condensed)',
                        border: '1px solid rgba(61,92,53,0.18)',
                        background: 'rgba(61,92,53,0.03)',
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ─────────────────────────────────────────────────────────── */}
      <StatsBar />

      {/* ── Tools ─────────────────────────────────────────────────────────── */}
      <section
        className="px-8 md:px-20 py-20"
        style={{ borderTop: '1px solid rgba(61,92,53,0.1)' }}
      >
        <div className="max-w-6xl mx-auto">
          <p
            className="font-condensed uppercase text-ink-faint text-xs tracking-[0.4em] mb-6"
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            Strumenti
          </p>
          <div className="flex flex-wrap gap-3">
            {about.tools.map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 font-condensed text-xs uppercase tracking-[0.15em] text-ink-dim"
                style={{
                  fontFamily: 'var(--font-barlow-condensed)',
                  border: '1px solid rgba(61,92,53,0.15)',
                  background: 'rgba(61,92,53,0.03)',
                }}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Internal navigation */}
      <section
        className="px-8 md:px-20 py-12"
        style={{ borderTop: '1px solid rgba(61,92,53,0.1)' }}
      >
        <div className="max-w-6xl mx-auto flex flex-wrap gap-8">
          <Link
            href="/servizi"
            className="font-condensed uppercase text-ink text-xs tracking-[0.35em] border-b border-ink pb-0.5 hover:text-green hover:border-green transition-colors duration-300"
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            I miei servizi →
          </Link>
          <Link
            href="/lavori"
            className="font-condensed uppercase text-ink text-xs tracking-[0.35em] border-b border-ink pb-0.5 hover:text-green hover:border-green transition-colors duration-300"
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            I miei lavori →
          </Link>
          <Link
            href="/contatti"
            className="font-condensed uppercase text-ink text-xs tracking-[0.35em] border-b border-ink pb-0.5 hover:text-green hover:border-green transition-colors duration-300"
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            Inizia una collaborazione →
          </Link>
        </div>
      </section>

      <Contact />
    </main>
    </>
  );
}
