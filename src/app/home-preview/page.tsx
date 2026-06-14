import type { Metadata } from 'next';
import StoryScroll, { StoryCard } from '@/components/ui/story-scroll';
import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import WorkMarquee from '@/components/WorkMarquee';
import ClientsBar from '@/components/ClientsBar';
import CollabGrid from '@/components/CollabGrid';
import ServicesSection from '@/components/ServicesSection';
import About from '@/components/About';
import ThinkingGrid from '@/components/ThinkingGrid';
import Contact from '@/components/Contact';

export const metadata: Metadata = {
  title: 'Home (anteprima stacking) — Samuele Barchet',
  robots: { index: false, follow: false },
};

/* Anteprima della home attuale con le sezioni impacchettate come card che
   si impilano (stack/slide, niente rotazione). Sezioni invariate.
   Rotta nascosta e non indicizzata. */

export default function HomePreviewPage() {
  return (
    <StoryScroll rotation={0} aria-label="Home — anteprima stacking">
      <StoryCard background="var(--ink)"><Hero /></StoryCard>
      <StoryCard><StatsBar /></StoryCard>
      <StoryCard><WorkMarquee /></StoryCard>
      <StoryCard><ClientsBar /></StoryCard>
      <StoryCard><CollabGrid /></StoryCard>
      <StoryCard><ServicesSection /></StoryCard>
      <StoryCard><About /></StoryCard>
      <StoryCard><ThinkingGrid /></StoryCard>
      <StoryCard background="var(--ink)"><Contact /></StoryCard>
    </StoryScroll>
  );
}
