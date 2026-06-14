import type { Metadata } from 'next';
import Hero from '@/components/Hero';

export const metadata: Metadata = {
  title: 'Samuele Barchet — Brand & Digital Strategist',
  description: 'Brand & Digital Strategist freelance tra Milano e Belluno. Costruisco identità di marca e strategie digitali misurabili per aziende e organizzazioni in Italia.',
  alternates: { canonical: 'https://www.samuelebarchet.com' },
  openGraph: {
    title: 'Samuele Barchet — Brand & Digital Strategist',
    description: 'Brand & Digital Strategist freelance tra Milano e Belluno. Costruisco identità di marca e strategie digitali misurabili per aziende e organizzazioni in Italia.',
    url: 'https://www.samuelebarchet.com',
    images: [{ url: '/about/samuele.jpg', width: 1200, height: 630, alt: 'Samuele Barchet' }],
  },
};
import StatsBar from '@/components/StatsBar';
import WorkMarquee from '@/components/WorkMarquee';
import ClientsBar from '@/components/ClientsBar';
import CollabGrid from '@/components/CollabGrid';
import ServicesSection from '@/components/ServicesSection';
import About from '@/components/About';
import ThinkingGrid from '@/components/ThinkingGrid';
import Contact from '@/components/Contact';

export default function Page() {
  return (
    <main>
      <Hero />
      <StatsBar />
      <WorkMarquee />
      <ClientsBar />
      <CollabGrid />
      <ServicesSection />
      <About />
      <ThinkingGrid />
      <Contact />
    </main>
  );
}
