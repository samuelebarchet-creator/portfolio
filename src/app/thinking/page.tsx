import type { Metadata } from 'next';
import SmoothScrollHero from '@/components/ui/smooth-scroll-hero';
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
      {/* Hero — smooth scroll reveal (stesso pattern dell'About) */}
      <SmoothScrollHero
        scrollHeight={1120}
        desktopImage="/thinking/hero.jpg"
        mobileImage="/thinking/hero-mobile.jpg"
        initialClipPercentage={0}
        finalClipPercentage={100}
        heroLabel="Idee & riflessioni"
        heroTitle="Pensieri che vanno a fondo"
      />

      <ThinkingGrid />
      <Contact />
    </main>
  );
}
