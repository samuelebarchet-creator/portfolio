import type { Metadata } from 'next';
import ServicesSection from '@/components/ServicesSection';
import Contact from '@/components/Contact';

export const metadata: Metadata = {
  title: 'Servizi — Samuele Barchet',
  description: 'Brand Strategy, Communication Strategy, Digital Growth e Strategic Partnership. Strategie su misura per brand e organizzazioni in Italia.',
  alternates: { canonical: 'https://www.samuelebarchet.com/servizi' },
  openGraph: {
    title: 'Servizi — Samuele Barchet',
    description: 'Brand Strategy, Communication Strategy, Digital Growth e Strategic Partnership. Strategie su misura per brand e organizzazioni.',
    url: 'https://www.samuelebarchet.com/servizi',
  },
};

export default function ServiziPage() {
  return (
    <main className="pt-16">
      {/* Intro */}
      <section className="px-8 md:px-20 pt-20 pb-16 max-w-6xl mx-auto">
        <p
          className="font-condensed uppercase text-green text-xs tracking-[0.5em] mb-6"
          style={{ fontFamily: 'var(--font-barlow-condensed)' }}
        >
          Cosa faccio
        </p>
        <h1
          className="font-display font-black italic text-ink leading-[0.9] mb-10"
          style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: 'clamp(3rem, 8vw, 8rem)',
            letterSpacing: '-0.03em',
          }}
        >
          Come posso<br />aiutarti
        </h1>

        <div className="max-w-2xl flex flex-col gap-5">
          <p
            className="text-ink leading-relaxed"
            style={{ fontFamily: 'var(--font-barlow)', fontSize: 'clamp(1rem, 1.3vw, 1.15rem)' }}
          >
            Ogni progetto è diverso, ma il punto di partenza è sempre lo stesso: capire dove sei oggi, dove vuoi arrivare e cosa ti sta impedendo di farlo.
          </p>
          <p
            className="text-ink-dim leading-relaxed"
            style={{ fontFamily: 'var(--font-barlow)', fontSize: 'clamp(1rem, 1.3vw, 1.15rem)' }}
          >
            Lavoro con aziende, professionisti e organizzazioni che hanno qualcosa di importante da offrire ma hanno bisogno di una strategia più chiara per comunicarlo.
          </p>
        </div>

        {/* KPI row */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-0 max-w-2xl" style={{ borderTop: '1px solid rgba(61,92,53,0.12)' }}>
          {[
            { value: '8', label: 'Brand seguiti attivamente in settori diversi' },
            { value: '120k+', label: 'Copertura organica su singolo contenuto' },
            { value: '−73%', label: 'CPL vs benchmark su campagne di acquisizione' },
          ].map(({ value, label }, i) => (
            <div
              key={value}
              className="pt-6 pr-8"
              style={i < 2 ? { borderRight: '1px solid rgba(61,92,53,0.12)' } : undefined}
            >
              <p
                className="font-display font-black italic text-green leading-none mb-2"
                style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
              >
                {value}
              </p>
              <p
                className="font-condensed text-ink-faint uppercase tracking-[0.18em] leading-snug"
                style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: '0.72rem' }}
              >
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <ServicesSection />
      <Contact />
    </main>
  );
}
