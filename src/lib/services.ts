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
      'Prima di parlare di contenuti, social o campagne, serve capire **chi sei, cosa ti rende diverso** e quale spazio vuoi occupare nella mente delle persone.\n\nInsieme definiamo il **posizionamento del brand**, il messaggio chiave e la strategia che guiderà tutte le attività future.',
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
      'Una volta definita la direzione, costruiamo un **sistema di comunicazione coerente** su tutti i canali.\n\nL\'obiettivo non è pubblicare di più, ma **comunicare meglio**.',
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
      'Advertising, email marketing, **funnel di acquisizione** e analytics devono lavorare insieme.\n\nOgni attività viene progettata per supportare **obiettivi concreti e misurabili**, trasformando la visibilità in opportunità di business reale.',
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
