import type { Metadata } from 'next';
import Contact from '@/components/Contact';
import { about } from '@/lib/about';

export const metadata: Metadata = {
  title: 'Contatti — Samuele Barchet',
  description: `Scrivimi a ${about.email}. Rispondo entro 24 ore.`,
};

export default function ContattiPage() {
  return (
    <main className="pt-16">
      {/* Page intro */}
      <section className="px-6 md:px-14 pt-20 pb-4 max-w-6xl mx-auto">
        <p
          className="font-condensed uppercase text-green text-xs tracking-[0.5em] mb-6"
          style={{ fontFamily: 'var(--font-barlow-condensed)' }}
        >
          Parliamo
        </p>
        <h1
          className="font-display font-black italic text-ink leading-[0.9]"
          style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: 'clamp(3rem, 8vw, 8rem)',
            letterSpacing: '-0.03em',
          }}
        >
          Contatti
        </h1>
      </section>

      <Contact />
    </main>
  );
}
