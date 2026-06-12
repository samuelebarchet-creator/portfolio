import type { Metadata } from 'next';
import SmoothScrollHero from '@/components/ui/smooth-scroll-hero';
import StatsBar from '@/components/StatsBar';
import Contact from '@/components/Contact';
import { about } from '@/lib/about';

export const metadata: Metadata = {
  title: 'About — Samuele Barchet',
  description: 'Brand & Digital Strategist. La mia storia, dalle Dolomiti al digitale.',
};

const bioChapters = [
  {
    label: 'Le origini',
    paragraphs: [
      "Sono nato a Belluno nel 2001 in una famiglia molto numerosa, composta da otto persone. Crescere in un contesto dove ognuno aveva idee, valori e punti di vista diversi mi ha insegnato presto una cosa: comunicare non significa parlare, significa farsi capire.",
      "Probabilmente è da lì che nasce il mio interesse per la comunicazione. Dalla curiosità di capire cosa spinge le persone a scegliere, fidarsi, cambiare idea o sentirsi parte di qualcosa.",
    ],
  },
  {
    label: 'Il percorso',
    paragraphs: [
      "Dopo il liceo ho scelto di dedicare un anno al servizio civile, lavorando a stretto contatto con persone con disabilità. È stata un'esperienza che mi ha permesso di avvicinarmi al mondo delle associazioni, dell'organizzazione di eventi e della comunicazione sociale, scoprendo quanto le parole e le storie possano avere un impatto concreto sulla vita delle persone.",
      "Per dare una base più solida a questa passione mi sono iscritto all'Università di Padova, dove mi sono laureato in Comunicazione con una tesi dedicata alla gestione del brand. Parallelamente ho iniziato a lavorare come freelance, trasformando ogni progetto in un'occasione per mettere in pratica ciò che studiavo.",
      "Successivamente mi sono trasferito a Milano per frequentare la laurea magistrale in Digital Marketing presso l'Università IULM. Qui ho approfondito il rapporto tra dati, strategia e comportamento degli utenti, avvicinandomi sempre di più al mondo dell'intelligenza artificiale applicata al marketing.",
    ],
  },
  {
    label: 'Oggi',
    paragraphs: [
      "Negli anni ho collaborato con startup, e-commerce, organizzazioni no-profit, progetti sociali e aziende digitali. Ambiti molto diversi tra loro, ma accomunati dalla stessa sfida: trovare il modo giusto di comunicare il proprio valore.",
      "Oggi aiuto brand e organizzazioni a costruire una presenza digitale più chiara, coerente e strategica. Il mio lavoro parte sempre da una domanda semplice: perché qualcuno dovrebbe scegliere proprio voi?",
    ],
  },
];

const philosophy = [
  "La strategia viene prima degli strumenti. Prima di parlare di social, advertising o contenuti, serve capire chi si è, a chi si parla e quale spazio si vuole occupare nella mente delle persone.",
  "Per questo il mio approccio unisce analisi, creatività e pragmatismo: trasformare idee complesse in messaggi chiari e obiettivi concreti.",
];

export default function AboutPage() {
  return (
    <main>
      {/* ── Smooth scroll reveal — Dolomites ───────────────────────────────── */}
      <SmoothScrollHero
        scrollHeight={1400}
        desktopImage="/about/mountains.jpg"
        mobileImage="/about/mountains.jpg"
        initialClipPercentage={18}
        finalClipPercentage={82}
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
              className="overflow-hidden"
              style={{ aspectRatio: '3/4' }}
            >
              <img
                src="/about/samuele.jpg"
                alt="Samuele Barchet a Padova"
                className="w-full h-full object-cover object-top"
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
              <h1
                className="font-display font-black italic text-ink leading-[0.88]"
                style={{
                  fontFamily: 'var(--font-playfair)',
                  fontSize: 'clamp(3rem, 7vw, 6rem)',
                  letterSpacing: '-0.03em',
                }}
              >
                Samuele<br />Barchet
              </h1>
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

      <Contact />
    </main>
  );
}
