import type { Metadata } from "next";
import { Playfair_Display, Barlow, Barlow_Condensed } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "700", "900"],
});

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Samuele Barchet — Brand & Digital Strategist",
  description: "Brand & Digital Strategist. Costruisco identità di marca e strategie digitali che generano risultati misurabili.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      className={`${playfair.variable} ${barlow.variable} ${barlowCondensed.variable} h-full`}
    >
      <body className="min-h-full bg-bg text-ink antialiased">
        {/* Iubenda — cookie banner (id keeps it from re-running on SPA navigation) */}
        <Script
          id="iubenda-cs"
          src="https://embeds.iubenda.com/widgets/32af739a-b291-4656-b010-4a02716ea05b.js"
          strategy="beforeInteractive"
        />
        {/* Iubenda — policy link styling */}
        <Script
          id="iubenda-js"
          src="https://cdn.iubenda.com/iubenda.js"
          strategy="lazyOnload"
        />
        {/* MEME BANNER — rimuovere dopo screenshot */}
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 9999, background: '#b39ddb', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', padding: '8px 20px' }}>
          <img src="/regina.jpg" alt="regina" style={{ height: '48px', width: '48px', objectFit: 'cover', borderRadius: '50%', border: '2px solid white' }} />
          <span style={{ fontFamily: 'sans-serif', fontWeight: 'bold', fontSize: '1.1rem', color: 'white', letterSpacing: '0.02em' }}>Ciao regina galattica sei molto bella 👑</span>
          <img src="/regina.jpg" alt="regina" style={{ height: '48px', width: '48px', objectFit: 'cover', borderRadius: '50%', border: '2px solid white' }} />
        </div>
        <CustomCursor />
        <ScrollProgress />
        <SmoothScroll>
          <Nav />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
