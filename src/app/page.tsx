import Hero from '@/components/Hero';
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
