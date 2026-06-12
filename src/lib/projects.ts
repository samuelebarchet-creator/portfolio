export type ProjectLink = {
  website?: string;
  instagram?: string;
  facebook?: string;
  extra?: { label: string; url: string }[];
};

export type Project = {
  slug: string;
  year: string;
  company: string;
  role: string;
  description: string;
  tag: string;
  fullDescription: string;
  deliverables: string[];
  results: string[];
  color: string;
  logoSrc?: string;
  images?: { src: string; alt?: string }[];
  links?: ProjectLink;
};

export const projects: Project[] = [
  {
    slug: 'braghes',
    year: '2024',
    company: "Braghe's",
    role: 'Brand Strategist',
    description: 'Brand di abbigliamento accessibile per persone in carrozzina.',
    tag: 'Fashion · Accessibilità',
    fullDescription:
      "Braghe's è un progetto di abbigliamento progettato per rispondere a esigenze concrete di **persone con disabilità motorie**, trasformando un capo funzionale in uno strumento di **autonomia e identità**. Il lavoro si è concentrato sulla costruzione del brand e del suo linguaggio: definire un **posizionamento coraggioso e non convenzionale**, sviluppare un tono di voce coerente con la community di riferimento, tradurre esigenze reali in comunicazione di marca. Un progetto dove il **brand diventa veicolo di visibilità e consapevolezza** su un tema spesso ignorato.",
    deliverables: [
      'Definizione del posizionamento',
      'Sviluppo tone of voice',
      'Brand identity & linguaggio visivo',
      'Narrazione e storytelling',
      'Comunicazione social e campagne',
    ],
    results: [],
    color: '#C1392B',
    logoSrc: '/logos/braghes.png',
    images: [
      { src: '/projects/braghes/braghes-1.jpg', alt: "Braghe's – lifestyle shot" },
      { src: '/projects/braghes/braghes-2.jpg', alt: "Braghe's – dettaglio etichetta" },
      { src: '/projects/braghes/braghes-3.jpg', alt: "Braghe's – team" },
      { src: '/projects/braghes/braghes-4.jpg', alt: "Braghe's – modella" },
      { src: '/projects/braghes/braghes-5.jpg', alt: "Braghe's – outdoor" },
    ],
    links: {
      website: 'https://braghes.sedutosrl.com/',
      instagram: 'https://www.instagram.com/braghes_it/',
      facebook: 'https://www.facebook.com/people/Braghes/61558409318175/',
    },
  },
  {
    slug: 'rc-ricambi',
    year: '2024',
    company: 'RC – Ricambi per Carrozzine',
    role: 'Digital Strategist',
    description: 'E-commerce di componenti per mobilità accessibile.',
    tag: 'E-commerce · Accessibilità',
    fullDescription:
      "RC è un **e-commerce specializzato nella vendita di ricambi per carrozzine manuali**, con l'obiettivo di rendere componenti tecnici più accessibili, chiari e acquistabili. Il lavoro ha riguardato la dimensione strategica e comunicativa del progetto: analisi della **customer journey e del funnel di acquisto**, supporto al posizionamento **\"Reale Convenienza\"**, ottimizzazione della comunicazione prodotto e delle categorie, semplificazione del linguaggio commerciale. Un intervento focalizzato su **chiarezza, conversione** e miglioramento dell'esperienza utente.",
    deliverables: [
      'Analisi customer journey e funnel',
      'Supporto al posizionamento',
      'Ottimizzazione comunicazione prodotto',
      'Semplificazione linguaggio commerciale',
      'Strategia editoriale e-commerce',
    ],
    results: [],
    color: '#3D5C35',
    images: [
      { src: '/projects/rc/rc-1.jpg', alt: 'RC – atleta in carrozzina' },
      { src: '/projects/rc/rc-2.jpg', alt: 'RC – meccanico con ricambi' },
      { src: '/projects/rc/rc-3.jpg', alt: 'RC – cerchi per carrozzina' },
      { src: '/projects/rc/rc-4.jpg', alt: 'RC – community' },
    ],
    links: {
      website: 'https://ricambicarrozzine.it/',
      instagram: 'https://www.instagram.com/ricambi_per_carrozzine',
      facebook: 'https://www.facebook.com/profile.php?id=61576259998563',
    },
  },
  {
    slug: 'programma-formula',
    year: '2024',
    company: 'Programma Formula',
    role: 'Content Strategist',
    description: "Campagna di raccolta fondi per l'Unità Spinale — CROSSabili × CESVI.",
    tag: 'Social Campaign · Non-profit',
    fullDescription:
      "Formula è una **campagna di comunicazione sociale** dedicata al sostegno delle unità spinali e ai percorsi di autonomia per persone con disabilità. Il lavoro si è concentrato sulla costruzione narrativa della campagna: sviluppo del **concept comunicativo**, scrittura degli **script video ufficiali**, definizione del **tono emotivo** coerente tra tutti i contenuti, progettazione del flusso comunicativo multicanale. Un progetto orientato alla **sensibilizzazione e alla raccolta fondi** attraverso uno storytelling strutturato e autentico.",
    deliverables: [
      'Sviluppo concept comunicativo',
      'Script video ufficiali',
      'Definizione del tono emotivo',
      'Flusso comunicativo multicanale',
      'Materiali campagna fundraising',
    ],
    results: [],
    color: '#2C6B9E',
    links: {
      extra: [
        { label: 'Campagna ForFunding', url: 'https://www.forfunding.intesasanpaolo.com/DonationPlatform-ISP/nav/progetto/unita-spinale' },
        { label: 'Comunicato Intesa Sanpaolo', url: 'https://group.intesasanpaolo.com/it/newsroom/comunicati-stampa/2026/01/intesa-sanpaolo-sostiene-la-raccolta-fondi--unita-spinale--ritro' },
      ],
    },
  },
  {
    slug: 'citation-rate',
    year: '2023',
    company: 'Citation Rate',
    role: 'Brand Strategist',
    description: 'Piattaforma SaaS per AI visibility e digital presence.',
    tag: 'AI · SaaS · B2B',
    fullDescription:
      "Citation Rate è una **piattaforma digitale focalizzata sulla visibilità dei brand nei sistemi di intelligenza artificiale** e nei nuovi ecosistemi di ricerca. Il lavoro ha riguardato la definizione del **posizionamento del prodotto**, la semplificazione del messaggio chiave e del valore offerto, il supporto alla **comunicazione B2B** e all'onboarding concettuale, e la traduzione di un tema complesso — la **AI visibility** — in un linguaggio accessibile e convincente per il mercato. Un progetto all'intersezione tra **AI, marketing e strategia di crescita digitale**.",
    deliverables: [
      'Definizione del posizionamento prodotto',
      'Semplificazione messaggio chiave',
      'Comunicazione B2B e onboarding',
      'Traduzione AI visibility in linguaggio accessibile',
      'Go-to-market strategy',
    ],
    results: [],
    color: '#1A3A6B',
    logoSrc: '/logos/vyst.png',
    links: {
      website: 'https://www.citationrate.com/',
      instagram: 'https://www.instagram.com/citationrate',
      facebook: 'https://www.facebook.com/profile.php?id=61586232725287',
    },
  },
  {
    slug: 'crossabili',
    year: '2022',
    company: 'CROSSabili',
    role: 'Content Strategist & Community Manager',
    description: 'Community e organizzazione per inclusione e accessibilità.',
    tag: 'Non-profit · Community',
    fullDescription:
      "CROSSabili è una **realtà attiva nel mondo dell'inclusione e della disabilità**, con progetti, eventi e attività sul territorio. Il contributo si è concentrato sulla comunicazione e sullo storytelling: sviluppo di **contenuti per campagne social e iniziative**, adattamento del linguaggio ai diversi formati comunicativi, costruzione di una **narrazione coerente e community-driven**, supporto alla comunicazione di eventi e progetti. Un lavoro orientato a rendere la comunicazione più **autentica, partecipativa e accessibile**.",
    deliverables: [
      'Contenuti per campagne social',
      'Adattamento del linguaggio ai formati',
      'Narrazione community-driven',
      'Comunicazione eventi e progetti',
      'Supporto alla crescita organica',
    ],
    results: [],
    color: '#3D5C35',
    logoSrc: '/logos/crossabili.png',
    images: [
      { src: '/projects/crossabili/crossabili-1.jpg', alt: 'CROSSabili – evento Mask to Ride' },
      { src: '/projects/crossabili/crossabili-2.jpg', alt: 'CROSSabili – show' },
      { src: '/projects/crossabili/crossabili-3.jpg', alt: 'CROSSabili – stunt' },
      { src: '/projects/crossabili/crossabili-4.jpg', alt: 'CROSSabili – esperienza' },
      { src: '/projects/crossabili/crossabili-5.jpg', alt: 'CROSSabili – action' },
    ],
    links: {
      website: 'https://www.crossabili.it/',
      instagram: 'https://www.instagram.com/crossabili/',
      facebook: 'https://www.facebook.com/CROSSabili',
    },
  },
  {
    slug: 'vyst',
    year: '2024',
    company: 'VYST',
    role: 'Brand Strategist',
    description: 'Brand / progetto digitale in fase di sviluppo.',
    tag: 'Brand · Digital',
    fullDescription:
      "VYST è un progetto digitale in fase di definizione, focalizzato sulla costruzione dell'**identità e del posizionamento comunicativo**. Il lavoro ha riguardato l'esplorazione del **posizionamento strategico del brand**, la definizione della direzione narrativa e comunicativa, la costruzione dei primi **framework di messaggio** e la traduzione dell'idea in struttura di brand. Un progetto ancora evolutivo, centrato sulla fase iniziale di **costruzione dell'identità**.",
    deliverables: [
      'Esplorazione posizionamento strategico',
      'Direzione narrativa e comunicativa',
      'Framework di messaggio',
      'Struttura di brand',
    ],
    results: [],
    color: '#4A4A3A',
    logoSrc: '/logos/vyst.png',
    links: {
      website: 'https://www.vyst.it/',
      instagram: 'https://www.instagram.com/vyst_video/',
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
