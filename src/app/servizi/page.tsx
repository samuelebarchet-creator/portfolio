import type { Metadata } from 'next';
import ServicesSection from '@/components/ServicesSection';
import Contact from '@/components/Contact';

export const metadata: Metadata = {
  title: 'Servizi — Samuele Barchet',
  description: 'Brand Strategy, Content Strategy, Social Media Management, Digital Marketing. Strategie su misura per brand ambiziosi.',
};

export default function ServiziPage() {
  return (
    <main className="pt-16">
      {/* Page intro */}
      <section className="px-6 md:px-14 pt-20 pb-4 max-w-6xl mx-auto">
        <p
          className="font-condensed uppercase text-green text-xs tracking-[0.5em] mb-6"
          style={{ fontFamily: 'var(--font-barlow-condensed)' }}
        >
          Cosa faccio
        </p>
        <h1
          className="font-display font-black italic text-ink leading-[0.9]"
          style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: 'clamp(3rem, 8vw, 8rem)',
            letterSpacing: '-0.03em',
          }}
        >
          Servizi
        </h1>
      </section>

      <ServicesSection />
      <Contact />
    </main>
  );
}
