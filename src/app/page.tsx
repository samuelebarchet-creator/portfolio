import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import CollabGrid from '@/components/CollabGrid';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';

export default function Page() {
  return (
    <>
      <CustomCursor />
      <Nav />
      <main>
        <Hero />
        <StatsBar />
        <CollabGrid />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
