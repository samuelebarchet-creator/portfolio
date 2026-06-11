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
};

export const projects: Project[] = [
  {
    slug: 'braghes',
    year: '2024',
    company: "Braghe's",
    role: 'Brand Strategist & Social Media Manager',
    description:
      "Sviluppo della strategia di marca e gestione completa dei social per un brand streetwear veneto in forte crescita.",
    tag: 'Fashion · Streetwear',
    fullDescription:
      "Braghe's nasce come piccolo brand streetwear locale con un'identità forte ma non ancora definita strategicamente. Il lavoro è partito da un'analisi approfondita del posizionamento competitivo e del pubblico target, per costruire una voce di marca coerente su tutti i touchpoint digitali. Dalla definizione del tono di comunicazione alla pianificazione editoriale mensile, ogni contenuto è stato pensato per rafforzare l'identità e convertire follower in clienti.",
    deliverables: [
      'Brand strategy & positioning',
      'Piano editoriale mensile',
      'Gestione Instagram & TikTok',
      'Content production (foto + copy)',
      'Campagne Meta Ads',
      'Brand guidelines documento',
    ],
    results: [
      '+340% engagement rate in 6 mesi',
      '+180% follower organici',
      'Lancio capsule collection esaurita in 48h',
    ],
    color: '#3D5C35',
    logoSrc: '/logos/braghes.png',
  },
  {
    slug: 'programma-formula',
    year: '2024',
    company: 'Programma Formula',
    role: 'Brand & Content Strategist',
    description:
      'Identità di contenuto e strategia digitale per un progetto legato al mondo dei motorsport e della Formula.',
    tag: 'Motorsport · Media',
    fullDescription:
      'Programma Formula è una realtà che porta i propri clienti a vivere esperienze esclusive legate al mondo della Formula 1 e dei motorsport. La sfida era costruire una presenza digitale che comunicasse esclusività e passione senza risultare elitaria. Abbiamo sviluppato una strategia di contenuto che racconta le esperienze dall\'interno — il dietro le quinte, le emozioni, la cultura del motorsport — aumentando la percezione di valore e il tasso di conversione delle richieste.',
    deliverables: [
      'Brand strategy & messaging',
      'Strategia contenuti Instagram',
      'Copywriting istituzionale',
      'Gestione community',
      'Visual identity guidelines',
      'Email marketing setup',
    ],
    results: [
      '+220% reach organica',
      '+95% richieste di informazioni',
      'Featured su pagina IG ufficiale Formula 1',
    ],
    color: '#D4713A',
  },
  {
    slug: 'rc-ricambi',
    year: '2023',
    company: 'RC Ricambi Carrozzeria',
    role: 'Digital Marketing Strategist',
    description:
      'Strategia SEO locale e digital marketing per una carrozzeria con focus su acquisizione clienti e visibilità online.',
    tag: 'Automotive · Local SEO',
    fullDescription:
      "RC Ricambi Carrozzeria è una realtà consolidata nel settore ricambi auto che però non riusciva a sfruttare il potenziale digitale per attrarre nuovi clienti. L'intervento ha coperto l'intera presenza online: ottimizzazione Google My Business, strategia SEO locale, gestione delle recensioni e un piano di contenuti educativi sui social per posizionarsi come punto di riferimento tecnico nella zona. Il risultato è stato un aumento significativo delle richieste di preventivo digitali.",
    deliverables: [
      'Audit SEO & digital presenza',
      'Ottimizzazione Google My Business',
      'Strategia SEO locale',
      'Content plan social',
      'Gestione recensioni online',
      'Reportistica mensile',
    ],
    results: [
      '+280% visite scheda Google',
      '+165% richieste preventivo online',
      'Posizione #1 per 8 keyword locali',
    ],
    color: '#6B4226',
    logoSrc: '/logos/ricambi.jpg',
  },
  {
    slug: 'citation-rate',
    year: '2023',
    company: 'Citation Rate',
    role: 'Brand Strategist & Growth Advisor',
    description:
      'Posizionamento e strategia di go-to-market per uno strumento AI dedicato alla ricerca accademica.',
    tag: 'AI · SaaS · Research',
    fullDescription:
      'Citation Rate è uno strumento SaaS che utilizza intelligenza artificiale per aiutare ricercatori e accademici a trovare e gestire fonti bibliografiche. Il progetto di brand strategy aveva l\'obiettivo di definire un posizionamento credibile in un mercato competitivo e comunicare il valore del prodotto a un pubblico tecnico ma non necessariamente tech-savvy. Abbiamo costruito il messaging framework, il tono di voce e la strategia di acquisizione utenti via content marketing e community accademica.',
    deliverables: [
      'Brand strategy & positioning',
      'Messaging framework & tone of voice',
      'Go-to-market strategy',
      'Landing page copywriting',
      'Content marketing plan',
      'Strategia partnership accademiche',
    ],
    results: [
      '0→1.200 utenti registrati in 4 mesi',
      '42% conversione free→trial',
      'Feature in 3 newsletter accademiche',
    ],
    color: '#1A3A6B',
  },
  {
    slug: 'crossabili',
    year: '2022',
    company: 'Crossabili by Mattia Cattapan',
    role: 'Content Strategist & Social Media Manager',
    description:
      'Comunicazione digitale e strategia di contenuto per un progetto di sensibilizzazione sull\'accessibilità.',
    tag: 'Social Impact · Content',
    fullDescription:
      'Crossabili è il progetto di comunicazione di Mattia Cattapan incentrato sull\'accessibilità e l\'inclusione. La sfida comunicativa era delicata: parlare di disabilità e barriere architettoniche con un linguaggio diretto, mai pietistico, capace di informare e allo stesso tempo attivare una comunità. Abbiamo costruito una voce editoriale distintiva — ironica quanto basta, sempre precisa — e una strategia di contenuto capace di raggiungere sia la community diretta sia i decisori istituzionali.',
    deliverables: [
      'Strategia editoriale annuale',
      'Tone of voice & linee guida',
      'Gestione Instagram & LinkedIn',
      'Script video e Reels',
      'Collaborazioni media e partnership',
      'Report impatto semestrale',
    ],
    results: [
      '+500% reach organica in 12 mesi',
      '4M+ visualizzazioni totali contenuti',
      'Citato da 3 testate giornalistiche nazionali',
    ],
    color: '#3D5C35',
    logoSrc: '/logos/crossabili.png',
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
