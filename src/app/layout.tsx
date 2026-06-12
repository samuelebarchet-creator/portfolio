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
  description: "Brand & Digital Strategist freelance. Costruisco identità di marca e strategie digitali misurabili per aziende e organizzazioni in Italia.",
  metadataBase: new URL("https://www.samuelebarchet.com"),
  openGraph: {
    type: "website",
    locale: "it_IT",
    siteName: "Samuele Barchet",
  },
  robots: { index: true, follow: true },
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
        {/* JSON-LD — Person + ProfessionalService schema for AI citability */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://www.samuelebarchet.com/#person",
                  "name": "Samuele Barchet",
                  "jobTitle": "Brand & Digital Strategist",
                  "description": "Brand & Digital Strategist freelance con base a Treviso. Attivo nel marketing dal 2019, lavora in proprio dal 2022. Segue 8 brand in settori diversi su brand strategy, digital marketing e comunicazione.",
                  "url": "https://www.samuelebarchet.com",
                  "image": "https://www.samuelebarchet.com/about/samuele.jpg",
                  "email": "info@samuelebarchet.com",
                  "telephone": "+393420269217",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Via Giuseppe Mazzini 6",
                    "addressLocality": "Sedico",
                    "addressRegion": "BL",
                    "postalCode": "32036",
                    "addressCountry": "IT"
                  },
                  "areaServed": { "@type": "Country", "name": "Italy" },
                  "knowsAbout": ["Brand Strategy","Digital Marketing","Social Media Management","Meta Ads","Content Strategy","Email Marketing","Copywriting","Brand Identity","Analytics & Reporting","Community Management"],
                  "hasOccupation": {
                    "@type": "Occupation",
                    "name": "Brand & Digital Strategist",
                    "occupationalCategory": "Marketing e Comunicazione",
                    "skills": "Brand Strategy, Digital Marketing, Social Media, Meta Advertising, Content Strategy, Email Marketing"
                  },
                  "sameAs": ["https://www.linkedin.com/in/samuele-barchet-3ba80a1ba/"],
                  "dateModified": "2026-06-12"
                },
                {
                  "@type": "ProfessionalService",
                  "@id": "https://www.samuelebarchet.com/#business",
                  "name": "Samuele Barchet — Brand & Digital Strategy",
                  "legalName": "Barchet Samuele",
                  "url": "https://www.samuelebarchet.com",
                  "logo": "https://www.samuelebarchet.com/about/samuele.jpg",
                  "description": "Consulenza freelance in brand strategy e digital marketing. 8 brand seguiti attivamente in settori diversi: inclusione sociale, e-commerce, no-profit, servizi B2B.",
                  "foundingDate": "2022",
                  "founder": { "@id": "https://www.samuelebarchet.com/#person" },
                  "telephone": "+393420269217",
                  "email": "info@samuelebarchet.com",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Via Giuseppe Mazzini 6",
                    "addressLocality": "Sedico",
                    "addressRegion": "BL",
                    "postalCode": "32036",
                    "addressCountry": "IT"
                  },
                  "areaServed": { "@type": "Country", "name": "Italy" },
                  "serviceType": ["Brand Strategy","Digital Marketing","Social Media Management","Content Strategy","Meta Ads"],
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Servizi di Brand & Digital Strategy",
                    "itemListElement": [
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Brand Strategy", "description": "Posizionamento, valori, tone of voice e piano di comunicazione strategico.", "areaServed": "Italia" } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Communication Strategy", "description": "Piano editoriale, gestione social, copywriting e storytelling di marca multi-canale.", "areaServed": "Italia" } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Digital Growth", "description": "Campagne Meta Ads, email marketing, funnel di acquisizione e analisi dei dati.", "areaServed": "Italia" } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Strategic Partnership", "description": "Collaborazioni strategiche, partnership con creator e organizzazioni, sviluppo di network.", "areaServed": "Italia" } }
                    ]
                  },
                  "sameAs": ["https://www.linkedin.com/in/samuele-barchet-3ba80a1ba/"],
                  "dateModified": "2026-06-12",
                  "about": [
                    {"@type": "Thing", "name": "Brand Strategy"},
                    {"@type": "Thing", "name": "Digital Marketing"},
                    {"@type": "Thing", "name": "Social Media Marketing"},
                    {"@type": "Thing", "name": "Meta Advertising"},
                    {"@type": "Thing", "name": "Content Marketing"}
                  ],
                  "mentions": [
                    {"@type": "Thing", "name": "Meta Ads"},
                    {"@type": "Thing", "name": "Google Analytics 4"},
                    {"@type": "Thing", "name": "LinkedIn"},
                    {"@type": "Thing", "name": "Instagram"},
                    {"@type": "Thing", "name": "Email Marketing"},
                    {"@type": "Thing", "name": "Mailchimp"},
                    {"@type": "Thing", "name": "Semrush"}
                  ]
                }
              ]
            })
          }}
        />
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
