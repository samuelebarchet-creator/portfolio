import type { Metadata } from 'next';
import HeroVerde from '@/components/HeroVerde';

export const metadata: Metadata = {
  title: 'Samuele Barchet — Brand & Digital Strategist a Milano e Belluno',
  description: 'Brand & Digital Strategist freelance tra Milano e Belluno: identità di marca, strategie digitali misurabili, AI marketing e GEO per aziende in Italia.',
  alternates: { canonical: 'https://www.samuelebarchet.com' },
  openGraph: {
    title: 'Samuele Barchet — Brand & Digital Strategist a Milano e Belluno',
    description: 'Brand & Digital Strategist freelance tra Milano e Belluno: identità di marca, strategie digitali misurabili, AI marketing e GEO per aziende in Italia.',
    url: 'https://www.samuelebarchet.com',
    images: [{ url: '/about/samuele.jpg', width: 1200, height: 630, alt: 'Samuele Barchet' }],
  },
};
import StatsBar from '@/components/StatsBar';
import ClientsBar from '@/components/ClientsBar';
import CollabGrid from '@/components/CollabGrid';
import ServicesSection from '@/components/ServicesSection';
import About from '@/components/About';
import Testimonials, { FeaturedQuote } from '@/components/Testimonials';
import ThinkingGrid from '@/components/ThinkingGrid';
import Contact from '@/components/Contact';

export default function Page() {
  return (
    <main>
      <HeroVerde />
      <ClientsBar />
      <FeaturedQuote />
      <CollabGrid featured />
      <StatsBar />
      <ServicesSection preview />
      <About />
      <Testimonials excludeFeatured />
      <ThinkingGrid preview />
      <Contact />
    </main>
  );
}
