import type { Metadata } from 'next';
import ThinkingGrid from '@/components/ThinkingGrid';
import Contact from '@/components/Contact';

export const metadata: Metadata = {
  title: 'Thinking — Samuele Barchet',
  description: 'Brand, digital, strategia. Quello che penso quando smetto di lavorare.',
};

export default function ThinkingPage() {
  return (
    <main className="pt-16">
      {/* Page intro */}
      <section className="px-8 md:px-20 pt-20 pb-4 max-w-6xl mx-auto">
        <p
          className="font-condensed uppercase text-green text-xs tracking-[0.5em] mb-6"
          style={{ fontFamily: 'var(--font-barlow-condensed)' }}
        >
          Idee &amp; riflessioni
        </p>
        <h1
          className="font-display font-black italic text-ink leading-[0.9]"
          style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: 'clamp(3rem, 8vw, 8rem)',
            letterSpacing: '-0.03em',
          }}
        >
          Thinking
        </h1>
      </section>

      <ThinkingGrid />
      <Contact />
    </main>
  );
}
