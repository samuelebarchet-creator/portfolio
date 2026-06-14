import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import ThinkingGrid from '@/components/ThinkingGrid';
import Contact from '@/components/Contact';

export const metadata: Metadata = {
  title: 'Thinking — Samuele Barchet',
  description: 'Brand, digital, strategia. Articoli e riflessioni di Samuele Barchet su comunicazione, marketing e costruzione dei brand.',
  alternates: { canonical: 'https://www.samuelebarchet.com/thinking' },
  openGraph: {
    title: 'Thinking — Samuele Barchet',
    description: 'Articoli e riflessioni su brand, digital e strategia.',
    url: 'https://www.samuelebarchet.com/thinking',
  },
};

export default function ThinkingPage() {
  return (
    <main>
      {/* Hero — editorial */}
      <PageHero
        label="Idee & riflessioni"
        title={'Pensieri che\nvanno a fondo'}
        image="/thinking/hero.jpg"
        imageAlt="Connettersi in profondità"
        caption="Brand · Digital · Strategia"
      />

      <ThinkingGrid />
      <Contact />
    </main>
  );
}
