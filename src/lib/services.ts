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
    id: 'brand-strategy',
    title: 'Brand Strategy',
    subtitle: 'Costruire una direzione prima di fare marketing',
    description:
      'Prima di parlare di contenuti, social o campagne, serve capire **chi sei, cosa ti rende diverso** e quale spazio vuoi occupare nella mente delle persone.\n\nInsieme definiamo il **posizionamento del brand**, il messaggio chiave e la strategia che guiderà tutte le attività future. Ho seguito **8 brand in settori diversi**: dall\'e-commerce all\'inclusione sociale, dal no-profit al B2B. E ogni progetto inizia da qui.',
    deliverables: [
      'Analisi competitiva e di mercato',
      'Brand positioning',
      'Target personas',
      'Messaging framework',
      'Tone of voice',
      'Strategic roadmap',
    ],
    forWho: 'Brand in fase di lancio, crescita o riposizionamento.',
  },
  {
    id: 'communication-strategy',
    title: 'Communication Strategy',
    subtitle: 'Trasformare la strategia in comunicazione',
    description:
      'Una volta definita la direzione, costruiamo un **sistema di comunicazione coerente** su tutti i canali.\n\nL\'obiettivo non è pubblicare di più, ma **comunicare meglio**. Contenuti gestiti con questa logica hanno raggiunto **fino a 120.000 persone in modo organico** su un singolo post.',
    deliverables: [
      'Content strategy',
      'Content pillars',
      'Piano editoriale',
      'Campagne di comunicazione',
      'Copywriting',
      'Storytelling di brand',
    ],
    forWho: 'Aziende che comunicano in modo frammentato o senza una visione chiara.',
  },
  {
    id: 'digital-growth',
    title: 'Digital Growth',
    subtitle: 'Rendere la presenza digitale un asset',
    description:
      'Advertising, email marketing, **funnel di acquisizione** e analytics devono lavorare insieme.\n\nOgni attività viene progettata per supportare **obiettivi concreti e misurabili**. Nelle campagne di acquisizione gestite, il costo per lead si è attestato fino al **-73% rispetto al benchmark medio di settore** su Meta Ads.',
    deliverables: [
      'Audit della presenza digitale',
      'Funnel di acquisizione',
      'Email marketing e automazioni',
      'Meta Ads',
      'Analytics e reporting',
      'Dashboard mensile',
    ],
    forWho: 'PMI, attività locali e brand che vogliono trasformare la visibilità in opportunità di business.',
  },
  {
    id: 'web-ai-geo',
    title: 'Siti Web & Prodotti Digitali AI',
    subtitle: 'Siti e strumenti costruiti per essere trovati, da Google e dalle AI',
    description:
      'Progetto e sviluppo **siti web e prodotti digitali**, integrando l\'**AI** dove crea valore reale (automazioni, contenuti, strumenti interni) e costruendo tutto in **ottica GEO e SEO** fin dalle fondamenta.\n\n**Cos\'è la GEO?** È la Generative Engine Optimization: l\'ottimizzazione della presenza di un brand dentro le risposte degli strumenti di AI generativa come **ChatGPT, Perplexity, Gemini e Google AI Overview**. Se la SEO ti fa trovare su Google, la GEO ti fa **citare e consigliare dalle AI**, dove sempre più persone cercano informazioni e scelgono i brand.',
    deliverables: [
      'Siti web e landing performanti',
      'Prodotti digitali e strumenti su misura',
      'Integrazioni AI (automazioni, contenuti)',
      'Struttura SEO-ready',
      'Ottimizzazione GEO (citabilità nelle AI)',
      'Dati strutturati e contenuti machine-readable',
    ],
    forWho: 'Brand e aziende che vogliono un sito o un prodotto digitale pronto per Google e per le AI generative.',
  },
  {
    id: 'strategic-partnership',
    title: 'Strategic Partnership',
    subtitle: 'Un supporto continuativo per le decisioni importanti',
    description:
      'Alcuni progetti hanno bisogno di qualcuno che aiuti a **mantenere la direzione nel tempo**.\n\nIn questo caso lavoro come **partner esterno**, affiancando il team nella definizione delle priorità, delle attività e delle strategie di crescita.',
    deliverables: [
      'Consulenza continuativa',
      'Revisione delle attività marketing',
      'Supporto strategico',
      'Coordinamento fornitori e collaboratori',
      'Workshop e sessioni dedicate',
    ],
    forWho: 'Brand e organizzazioni che cercano una figura strategica senza assumere internamente.',
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
