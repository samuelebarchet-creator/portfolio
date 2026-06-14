import type { Metadata } from 'next';
import SmoothScrollHero from '@/components/ui/smooth-scroll-hero';
import ThinkingGrid from '@/components/ThinkingGrid';
import Contact from '@/components/Contact';
import { thinkingPosts } from '@/lib/thinking';

export const metadata: Metadata = {
  title: 'Idee su Brand, Digital e Strategia — Samuele Barchet',
  description: 'Brand, digital, strategia. Articoli e riflessioni di Samuele Barchet su comunicazione, marketing e costruzione dei brand.',
  alternates: { canonical: 'https://www.samuelebarchet.com/thinking' },
  openGraph: {
    title: 'Idee su Brand, Digital e Strategia — Samuele Barchet',
    description: 'Articoli e riflessioni su brand, digital e strategia.',
    url: 'https://www.samuelebarchet.com/thinking',
  },
};

const ldJson = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": "https://www.samuelebarchet.com/thinking",
  "url": "https://www.samuelebarchet.com/thinking",
  "name": "Thinking — Samuele Barchet",
  "description": "Articoli e riflessioni su brand strategy, digital marketing e comunicazione.",
  "author": { "@type": "Person", "@id": "https://www.samuelebarchet.com/#person" },
  "blogPost": thinkingPosts.map((p) => ({
    "@type": "BlogPosting",
    "headline": p.title,
    "description": p.excerpt,
    "url": `https://www.samuelebarchet.com/thinking/${p.slug}`,
    "@id": `https://www.samuelebarchet.com/thinking/${p.slug}`,
    "datePublished": p.date,
    "author": { "@type": "Person", "@id": "https://www.samuelebarchet.com/#person" },
    "keywords": p.category,
    "inLanguage": "it-IT",
  })),
};

export default function ThinkingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }} />
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
    </>
  );
}
