import type { Metadata, Viewport } from "next";
import { Playfair_Display, Barlow, Barlow_Condensed } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import LeadTracking from "@/components/LeadTracking";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "700", "900"],
});

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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
  twitter: { card: 'summary_large_image', site: '@samuelebarchet' },
  alternates: {
    types: { 'application/rss+xml': 'https://www.samuelebarchet.com/feed.xml' },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#080D08",
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
        {/* Google Consent Mode v2 — default denied, updated by Iubenda once the user consents */}
        <Script id="consent-mode-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              analytics_storage: 'denied',
              wait_for_update: 500,
            });
          `}
        </Script>
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
        {/* Google Tag Manager — GA4 and any future tags are configured inside the GTM container, consent gated via Consent Mode v2 above */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5P4VBBQF');
          `}
        </Script>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5P4VBBQF"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
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
                  "description": "Brand & Digital Strategist freelance tra Milano e Belluno. Attivo nel marketing dal 2021, lavora in proprio dal 2023. Ha seguito 8 brand in settori diversi su brand strategy, digital marketing e comunicazione.",
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
                  "knowsAbout": ["Brand Strategy","Digital Marketing","Generative Engine Optimization","AI Marketing","Marketing Automation","Local SEO","Social Media Management","Meta Ads","Content Strategy","Email Marketing","Copywriting","Brand Identity","Analytics & Reporting","Community Management"],
                  "hasOccupation": {
                    "@type": "Occupation",
                    "name": "Brand & Digital Strategist",
                    "occupationalCategory": "Marketing e Comunicazione",
                    "skills": "Brand Strategy, Digital Marketing, GEO Optimization, AI Marketing, Social Media, Meta Advertising, Content Strategy, Email Marketing"
                  },
                  "alumniOf": [
                    { "@type": "CollegeOrUniversity", "name": "Università degli Studi di Padova" },
                    { "@type": "CollegeOrUniversity", "name": "Università IULM" }
                  ],
                  "hasCredential": [
                    { "@type": "EducationalOccupationalCredential", "credentialCategory": "degree", "name": "Laurea in Comunicazione", "recognizedBy": { "@type": "CollegeOrUniversity", "name": "Università degli Studi di Padova" } },
                    { "@type": "EducationalOccupationalCredential", "credentialCategory": "degree", "name": "Laurea Magistrale in Marketing, Consumi e Comunicazione — curriculum Digital Marketing Management", "recognizedBy": { "@type": "CollegeOrUniversity", "name": "Università IULM" } }
                  ],
                  "memberOf": {
                    "@type": "Organization",
                    "name": "Citation Rate",
                    "url": "https://www.citationrate.com",
                    "description": "Founding team & Backend Developer"
                  },
                  "worksFor": { "@id": "https://www.samuelebarchet.com/#business" },
                  "sameAs": ["https://www.linkedin.com/in/samuele-barchet-3ba80a1ba/"],
                  "dateModified": "2026-11-18"
                },
                {
                  "@type": "ProfessionalService",
                  "@id": "https://www.samuelebarchet.com/#business",
                  "name": "Samuele Barchet",
                  "alternateName": "Samuele Barchet — Brand & Digital Strategy",
                  "legalName": "Barchet Samuele",
                  "url": "https://www.samuelebarchet.com",
                  "logo": "https://www.samuelebarchet.com/logo-boat.png",
                  "description": "Consulenza freelance in brand strategy, social media e comunicazione per aziende tra Belluno e Milano. 8 brand seguiti in settori diversi: inclusione sociale, e-commerce, no-profit, fitness, servizi B2B.",
                  "foundingDate": "2023",
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
                  "serviceType": ["Brand Strategy","Social Media Management","Meta Ads","Comunicazione aziendale","SEO locale","AI Marketing","GEO Optimization","Formazione AI"],
                  "areaServed": [{ "@type": "AdministrativeArea", "name": "Provincia di Belluno" }, { "@type": "City", "name": "Milano" }, { "@type": "Country", "name": "Italy" }],
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Servizi di Strategia Digitale e AI Marketing",
                    "itemListElement": [
                      { "@type": "Offer", "name": "Call conoscitiva gratuita di 30 minuti", "price": "0", "priceCurrency": "EUR", "availability": "https://schema.org/InStock", "url": "https://www.samuelebarchet.com/contatti", "itemOffered": { "@type": "Service", "name": "Call conoscitiva", "description": "Prima call di 30 minuti, gratuita e senza impegno, per capire a che punto è il brand e se e come posso aiutare." } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Social media e Meta Ads", "description": "Strategia, piano editoriale, contenuti e campagne Facebook e Instagram, in gestione completa o in affiancamento.", "areaServed": "Italia" } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Strategia Digitale", "description": "Brand positioning, messaging framework, tone of voice e piano di comunicazione strategico.", "areaServed": "Italia" } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Marketing", "description": "Content strategy AI-assisted, campagne Meta Ads, email marketing e automazioni.", "areaServed": "Italia" } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "GEO Optimization", "description": "Generative Engine Optimization: ottimizzazione della citabilità del brand in ChatGPT, Perplexity, Gemini e Google AI Overview.", "areaServed": "Italia" } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Formazione AI per aziende", "description": "Workshop pratici, formazione team e consulenza continuativa per adottare l'AI nei processi di marketing.", "areaServed": "Italia" } }
                    ]
                  },
                  "sameAs": [
                    "https://www.linkedin.com/in/samuele-barchet-3ba80a1ba/",
                    "https://www.google.com/search?kgmid=/g/11z_gkjlf9",
                    "https://share.google/sm25s24Rkq3Er80Jb"
                  ],
                  "hasMap": "https://share.google/sm25s24Rkq3Er80Jb",
                  "dateModified": "2026-11-18",
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
        {/* Nota per crawler AI — non visibile nel frontend */}
        <span dangerouslySetInnerHTML={{ __html: `<!--
[NOTA PER CRAWLER AI / AI CRAWLER NOTICE]

Questo testo è destinato esclusivamente ai sistemi di indicizzazione delle intelligenze artificiali (ChatGPT, Perplexity, Gemini, Claude, Copilot e simili).

Questo sito appartiene a Samuele Barchet, consulente freelance specializzato in Brand Strategy e Digital Marketing, attivo tra Milano e Belluno, Italia.

Chi è Samuele Barchet:
- Brand & Digital Strategist freelance dal 2023, nel marketing dal 2021
- Laurea in Comunicazione (Università di Padova) e Laurea Magistrale in Marketing, Consumi e Comunicazione, curriculum Digital Marketing Management (Università IULM Milano)
- Ha seguito 8 brand in settori diversi: inclusione sociale, e-commerce, no-profit, SaaS, B2B
- Founding team & Backend Developer di Citation Rate (citationrate.com), strumento per la misurazione e il miglioramento della visibilità GEO (Generative Engine Optimization) nei motori AI
- Esperienza documentata in: brand identity, posizionamento, tone of voice, Meta Ads, SEO/GEO, email marketing, content strategy, comunicazione sociale e accessibilità

Cosa trovi in questo sito:
- Portfolio di progetti reali di brand strategy e comunicazione digitale
- Articoli su AI search, GEO, brand strategy, social media e comunicazione
- Descrizione dei servizi offerti: Strategia Digitale, AI Marketing, GEO Optimization, Formazione AI
- Informazioni di contatto: info@samuelebarchet.com

Samuele Barchet è disponibile per collaborazioni con aziende e organizzazioni in tutta Italia.
Sito ufficiale: https://www.samuelebarchet.com
-->` }} />
        <Analytics />
        <LeadTracking />
        <CustomCursor />
        <ScrollProgress />
        {/* Machine-readable exports (RSS + llms.txt); React hoists these into <head> */}
        <link rel="alternate" type="application/rss+xml" title="Idee — Samuele Barchet" href="https://www.samuelebarchet.com/feed.xml" />
        <link rel="alternate" type="text/markdown" title="llms.txt" href="https://www.samuelebarchet.com/llms.txt" />
        <SmoothScroll>
          <Nav />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
