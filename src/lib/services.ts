export type Service = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  forWho: string;
};

export const services: Service[] = [
  {
    id: 'strategia-digitale',
    title: 'Strategia Digitale',
    subtitle: 'Una direzione chiara prima di qualsiasi strumento',
    description:
      'Prima di parlare di contenuti, social o campagne, serve capire **chi sei, cosa ti rende diverso** e quale spazio vuoi occupare nella mente delle persone.\n\nInsieme definiamo il **posizionamento del brand**, il piano di comunicazione e la strategia che guiderà tutte le attività future. Ho seguito **8 brand in settori diversi**: dall\'e-commerce all\'inclusione sociale, dal no-profit al B2B. E ogni progetto inizia da qui.',
    deliverables: [
      'Analisi competitiva e di mercato',
      'Brand positioning',
      'Target personas',
      'Messaging framework',
      'Tone of voice',
      'Piano di comunicazione strategico',
    ],
    forWho: 'Brand in fase di lancio, crescita o riposizionamento strategico.',
  },
  {
    id: 'ai-marketing',
    title: 'AI Marketing',
    subtitle: 'Contenuti, campagne e crescita con l\'intelligenza artificiale',
    description:
      'Costruiamo un **sistema di marketing che usa l\'AI come moltiplicatore**: dalla produzione dei contenuti alle campagne di acquisizione, dall\'email marketing alle automazioni.\n\nL\'obiettivo non è automatizzare tutto, ma **fare di più con meno sforzo** e misurare ogni attività su risultati concreti. Contenuti gestiti con questa logica hanno raggiunto **fino a 120.000 persone in modo organico** su un singolo post.',
    deliverables: [
      'Content strategy AI-assisted',
      'Piano editoriale',
      'Campagne Meta Ads',
      'Email marketing e automazioni',
      'Copywriting',
      'Analytics e reporting mensile',
    ],
    forWho: 'Aziende che vogliono comunicare meglio e crescere online usando gli strumenti AI in modo strategico.',
  },
  {
    id: 'geo-optimization',
    title: 'GEO Optimization',
    subtitle: 'Essere trovati da Google, ChatGPT e i nuovi motori AI',
    description:
      'La **GEO (Generative Engine Optimization)** ottimizza la presenza di un brand nelle risposte degli strumenti AI: ChatGPT, Perplexity, Gemini, Google AI Overview.\n\nMentre la SEO ti fa trovare su Google, la GEO ti fa **citare e consigliare dalle AI**, dove sempre più persone cercano informazioni e scelgono i brand. Ho fondato **[Citationrate](https://citationrate.com)** per misurare questa visibilità in modo sistematico.',
    deliverables: [
      'Audit SEO e GEO',
      'Struttura dati schema.org',
      'Ottimizzazione citabilità AI',
      'Siti web e landing SEO-ready',
      'llms.txt e AI-readiness',
      'Monitoraggio citation rate',
    ],
    forWho: 'Brand e aziende che vogliono essere trovati sia su Google che dai nuovi motori di ricerca AI.',
  },
  {
    id: 'formazione-ai',
    title: 'Formazione AI per aziende',
    subtitle: 'Trasformare l\'AI da buzzword a vantaggio operativo',
    description:
      'Molte aziende sanno che l\'AI è importante ma non sanno da dove iniziare. La formazione non è teorica: **lavoriamo sui tuoi processi reali**, identificando dove l\'AI può creare valore immediato.\n\nPosso anche affiancare il team nel tempo come **partner strategico esterno**, supportando le decisioni di marketing e coordinando le attività. Il risultato: competenze interne reali, non dipendenza da strumenti che non si capiscono.',
    deliverables: [
      'Workshop pratici su AI e marketing',
      'Formazione team su strumenti AI',
      'Prompt engineering applicato',
      'Integrazione AI nei workflow aziendali',
      'Consulenza continuativa',
      'Coordinamento fornitori e collaboratori',
    ],
    forWho: 'PMI, team marketing e professionisti che vogliono adottare l\'AI in modo concreto e misurabile.',
  },
];

export const approachValues = [
  {
    label: 'Strategia prima',
    description: 'Ogni decisione parte da un obiettivo chiaro.',
  },
  {
    label: 'Dati che parlano',
    description: 'Analizzo ciò che funziona e ciò che può essere migliorato.',
  },
  {
    label: 'Chiarezza sopra tutto',
    description: 'I progetti migliori nascono quando tutti comprendono la direzione.',
  },
  {
    label: 'Persone al centro',
    description: 'Prima dei canali, degli strumenti e degli algoritmi ci sono sempre le persone.',
  },
];
