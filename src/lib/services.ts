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
    subtitle: 'Costruisco la fondamenta del tuo brand',
    description:
      "Definiamo insieme chi sei, per chi parli e perché qualcuno dovrebbe sceglierti. Positioning, architettura del brand e messaging framework che guidano ogni decisione comunicativa.",
    deliverables: [
      'Analisi competitiva e di mercato',
      'Brand positioning statement',
      'Target persona (3 profili)',
      'Messaging framework',
      'Tono di voce & linee guida',
      'Brand strategy document (60+ pagine)',
    ],
    forWho: 'Brand in fase di lancio o di repositioning',
  },
  {
    id: 'content-strategy',
    title: 'Content Strategy',
    subtitle: 'Contenuti con un perché',
    description:
      "Niente contenuti casuali. Costruiamo un piano editoriale strategico che serve gli obiettivi di business e parla al pubblico giusto nel momento giusto — su ogni canale.",
    deliverables: [
      'Audit dei contenuti esistenti',
      'Piano editoriale mensile',
      'Content pillars & temi ricorrenti',
      'Calendario editoriale 90 giorni',
      'KPI e sistema di misurazione',
      'Template e linee guida per il team',
    ],
    forWho: 'Brand che producono contenuti senza una direzione chiara',
  },
  {
    id: 'social-media',
    title: 'Social Media Management',
    subtitle: 'Presenza digitale che converte',
    description:
      "Gestione completa dei canali social: dalla strategia alla produzione, dalla pubblicazione all'analisi dei dati. Trasformo i tuoi profili in strumenti di crescita reale.",
    deliverables: [
      'Strategia per piattaforma',
      'Produzione contenuti (foto, copy, video)',
      'Pianificazione e pubblicazione',
      'Gestione community e DM',
      'Campagne paid (Meta, TikTok)',
      'Report mensile con insight',
    ],
    forWho: 'Brand che vogliono delegare i social a qualcuno di strategico',
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    subtitle: 'Crescita misurabile, non vanity metrics',
    description:
      "SEO locale, email marketing, campagne paid e funnel di acquisizione. Ogni azione è misurabile e orientata a obiettivi concreti: traffico qualificato, lead, vendite.",
    deliverables: [
      'Audit SEO e presenza digitale',
      'Ottimizzazione Google My Business',
      'Strategia SEO on-page',
      'Setup email marketing e automazioni',
      'Gestione campagne paid',
      'Dashboard reporting mensile',
    ],
    forWho: 'Attività locali e PMI che vogliono più clienti online',
  },
];
