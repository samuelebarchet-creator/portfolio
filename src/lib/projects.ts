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
  metaDescription?: string;
  tag: string;
  fullDescription: string;
  deliverables: string[];
  results: string[];
  color: string;
  logoSrc?: string;
  images?: { src: string; alt?: string; width: number; height: number }[];
  links?: ProjectLink;
};

export const projects: Project[] = [
  {
    slug: 'braghes',
    year: '2024',
    company: "Braghe's",
    role: 'Brand Strategist',
    description: 'Brand di abbigliamento accessibile per persone in carrozzina.',
    metaDescription: "Brand Strategy per Braghe's, marchio di abbigliamento accessibile per persone in carrozzina. Posizionamento, tone of voice e identità di marca. Settore fashion inclusivo.",
    tag: 'Fashion · Accessibilità',
    fullDescription:
      "Braghe's è un progetto di abbigliamento progettato per rispondere a esigenze concrete di **persone con disabilità motorie**, trasformando un capo funzionale in uno strumento di **autonomia e identità**. Il settore della moda inclusiva è ancora poco presidiato: la maggior parte dei brand ignora questo segmento o lo tratta come un'aggiunta marginale. Braghe's nasce con l'obiettivo opposto — mettere la **disabilità al centro del design**, non come limite ma come punto di partenza creativo. Il lavoro si è concentrato sulla costruzione del brand e del suo linguaggio: definire un **posizionamento coraggioso e non convenzionale**, sviluppare un tono di voce autentico e coerente con la community di riferimento, tradurre esigenze reali in comunicazione di marca riconoscibile. Un progetto dove il **brand diventa veicolo di visibilità e consapevolezza** su un tema che il mainstream fatica ancora ad affrontare con serietà.",
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
      { src: '/projects/braghes/braghes-1.jpg', alt: "Braghe's – lifestyle shot", width: 1066, height: 1600 },
      { src: '/projects/braghes/braghes-2.jpg', alt: "Braghe's – dettaglio etichetta", width: 1066, height: 1600 },
      { src: '/projects/braghes/braghes-3.jpg', alt: "Braghe's – team", width: 1600, height: 1066 },
      { src: '/projects/braghes/braghes-4.jpg', alt: "Braghe's – modella", width: 1066, height: 1600 },
      { src: '/projects/braghes/braghes-5.jpg', alt: "Braghe's – outdoor", width: 1600, height: 1066 },
    ],
    links: {
      website: 'https://braghes.sedutosrl.com/',
      instagram: 'https://www.instagram.com/braghes_it/',
      facebook: 'https://www.facebook.com/people/Braghes/61558409318175/',
    },
  },
  {
    slug: 'rc-ricambi',
    year: '2025',
    company: 'RC – Ricambi per Carrozzine',
    role: 'Digital Strategist',
    description: 'E-commerce di componenti per mobilità accessibile.',
    metaDescription: 'Digital Strategy per RC – Ricambi per Carrozzine: e-commerce specializzato in componenti per mobilità accessibile. Customer journey, funnel di acquisto e comunicazione prodotto.',
    tag: 'E-commerce · Accessibilità',
    fullDescription:
      "RC è un **e-commerce specializzato nella vendita di ricambi per carrozzine manuali**, con l'obiettivo di rendere componenti tecnici più accessibili, chiari e acquistabili online. Il mercato dei ricambi per mobilità accessibile è frammentato: i prodotti esistono, ma trovarli, confrontarli e acquistarli richiede spesso un percorso complicato che scoraggia l'utente finale. RC nasce per eliminare questa frizione. Il lavoro ha riguardato la dimensione strategica e comunicativa del progetto: analisi approfondita della **customer journey e del funnel di acquisto**, supporto alla definizione del posizionamento **\"Reale Convenienza\"**, ottimizzazione della comunicazione prodotto e delle categorie, semplificazione del linguaggio commerciale per rendere le specifiche tecniche comprensibili anche a chi non è esperto del settore. Un intervento focalizzato su **chiarezza, conversione** e miglioramento concreto dell'esperienza utente lungo tutto il percorso d'acquisto.",
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
      { src: '/projects/rc/rc-1.jpg', alt: 'RC – atleta in carrozzina', width: 1600, height: 1066 },
      { src: '/projects/rc/rc-2.jpg', alt: 'RC – meccanico con ricambi', width: 1600, height: 1066 },
      { src: '/projects/rc/rc-3.jpg', alt: 'RC – cerchi per carrozzina', width: 1600, height: 1066 },
      { src: '/projects/rc/rc-4.jpg', alt: 'RC – community', width: 1600, height: 1066 },
    ],
    links: {
      website: 'https://ricambicarrozzine.it/',
      instagram: 'https://www.instagram.com/ricambi_per_carrozzine',
      facebook: 'https://www.facebook.com/profile.php?id=61576259998563',
    },
  },
  {
    slug: 'programma-formula',
    year: '2025',
    company: 'Programma Formula',
    role: 'Social Media Manager & Content Strategist',
    description: "Campagna di raccolta fondi per l'Unità Spinale, CROSSabili × CESVI.",
    metaDescription: "Content Strategy per Programma Formula: campagna di raccolta fondi per l'Unità Spinale in partnership con CROSSabili, CESVI e Intesa Sanpaolo. Concept, script video e storytelling.",
    tag: 'Social Campaign · Non-profit',
    fullDescription:
      "Formula è una **campagna di comunicazione sociale** nata dalla collaborazione tra CROSSabili e CESVI, con il sostegno di Intesa Sanpaolo, per raccogliere fondi a favore delle unità spinali e dei percorsi di autonomia per persone con disabilità. La sfida comunicativa era duplice: sensibilizzare un pubblico ampio su un tema poco conosciuto e trasformare quella consapevolezza in **azione concreta** — una donazione, una condivisione, un coinvolgimento. Il lavoro si è concentrato sulla costruzione narrativa della campagna: sviluppo del **concept comunicativo**, scrittura degli **script video ufficiali**, definizione del tono emotivo coerente tra tutti i materiali, progettazione del flusso comunicativo multicanale dalla prima impression alla call to action. Un progetto dove la **precisione narrativa** fa la differenza tra una campagna che muove le persone e una che scivola via.",
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
    year: '2026',
    company: 'Citation Rate',
    role: 'SaaS Developer',
    description: 'Piattaforma SaaS per AI visibility e digital presence.',
    metaDescription: 'Brand Strategy per Citation Rate, piattaforma SaaS per AI visibility e digital presence. Posizionamento B2B, semplificazione del messaggio e go-to-market su un mercato emergente.',
    tag: 'AI · SaaS · B2B',
    fullDescription:
      "Citation Rate è una **piattaforma digitale focalizzata sulla visibilità dei brand nei sistemi di intelligenza artificiale** — ChatGPT, Perplexity, Google AI Overview — e nei nuovi ecosistemi di ricerca che stanno ridefinendo come le persone trovano informazioni e scelgono brand. Il mercato dell'AI visibility è emergente: i potenziali clienti spesso non sanno ancora di avere il problema che Citation Rate risolve. Questo rende la comunicazione B2B particolarmente delicata. Il lavoro ha riguardato la definizione del **posizionamento del prodotto**, la semplificazione del messaggio chiave e del valore offerto, il supporto alla **comunicazione B2B** e all'onboarding concettuale, e la traduzione di un tema complesso in un linguaggio accessibile e convincente per chi non è nativo dell'AI marketing. Un progetto all'intersezione tra **intelligenza artificiale, marketing e strategia di crescita digitale**.",
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
    year: '2023',
    company: 'CROSSabili',
    role: 'Social Media Manager, Content Strategist & Community Manager (volontario)',
    description: 'Community e organizzazione per inclusione e accessibilità.',
    metaDescription: 'Content Strategy e Community Management per CROSSabili: organizzazione no-profit per inclusione e accessibilità. Campagne social, narrazione community-driven e comunicazione eventi.',
    tag: 'Non-profit · Community',
    fullDescription:
      "CROSSabili è una **realtà attiva nel mondo dell'inclusione e della disabilità**, con progetti sportivi, eventi sul territorio e un'identità costruita intorno alla partecipazione e alla comunità. La comunicazione di un'organizzazione no-profit ha dinamiche diverse dal mondo commerciale: le persone non seguono per un prodotto, ma per un **senso di appartenenza e una visione condivisa**. Il contributo si è concentrato sulla comunicazione e sullo storytelling: sviluppo di **contenuti per campagne social e iniziative di sensibilizzazione**, adattamento del linguaggio ai diversi formati comunicativi (Instagram, eventi, materiali cartacei), costruzione di una narrazione coerente e **community-driven** capace di coinvolgere sia chi vive la disabilità in prima persona sia chi la incontra per la prima volta. Un lavoro orientato a rendere la comunicazione più **autentica, partecipativa e accessibile** per una comunità che merita visibilità.",
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
      { src: '/projects/crossabili/crossabili-1.jpg', alt: 'CROSSabili – evento Mask to Ride', width: 1600, height: 1066 },
      { src: '/projects/crossabili/crossabili-2.jpg', alt: 'CROSSabili – show', width: 1600, height: 1067 },
      { src: '/projects/crossabili/crossabili-3.jpg', alt: 'CROSSabili – stunt', width: 1600, height: 1066 },
      { src: '/projects/crossabili/crossabili-4.jpg', alt: 'CROSSabili – esperienza', width: 1600, height: 1067 },
      { src: '/projects/crossabili/crossabili-5.jpg', alt: 'CROSSabili – action', width: 1600, height: 1066 },
    ],
    links: {
      website: 'https://www.crossabili.it/',
      instagram: 'https://www.instagram.com/crossabili/',
      facebook: 'https://www.facebook.com/CROSSabili',
    },
  },
  {
    slug: 'vyst',
    year: '2025',
    company: 'VYST',
    role: 'Social Media Manager',
    description: "Gestione e ottimizzazione social per un'azienda di produzione video.",
    metaDescription: 'Social Media Management per VYST, azienda di produzione video. Ottimizzazione dei contenuti per Meta e LinkedIn, gestione della pagina e linea editoriale.',
    tag: 'Social Media · Video Production',
    fullDescription:
      "VYST è un'**azienda di produzione video**. Ho preso in mano la gestione della loro presenza social con un obiettivo preciso: **ottimizzare i contenuti per Meta e LinkedIn**. Il lavoro si è concentrato sull'adattare formati e linguaggio ai due canali (più immediato e visivo su Meta, più professionale e B2B su LinkedIn), sulla costruzione di una **linea editoriale coerente** e sulla valorizzazione della qualità produttiva in contenuti pensati per la fruizione social. Un lavoro di **social media management** orientato a tradurre il valore dei video in presenza, riconoscibilità e **crescita organica** sui canali giusti.",
    deliverables: [
      'Gestione pagine social (Meta, LinkedIn)',
      'Ottimizzazione dei contenuti per canale',
      'Linea editoriale e piano contenuti',
      'Adattamento dei formati video per il social',
      'Crescita organica e posizionamento',
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
