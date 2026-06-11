export type ThinkingPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
};

export const thinkingPosts: ThinkingPost[] = [
  {
    slug: 'brand-prima-dei-contenuti',
    title: "Perché costruisci contenuti prima di avere un brand",
    excerpt:
      "La maggior parte dei brand inizia a postare prima di sapere cosa vuole comunicare. Il risultato è tanto rumore, poco segnale. Ecco il problema e come uscirne.",
    category: 'Brand Strategy',
    readTime: '4 min',
    date: '2025-11-10',
  },
  {
    slug: 'local-seo-vale-ancora',
    title: "La SEO locale vale ancora (anzi, vale di più)",
    excerpt:
      "Con l'esplosione di Google AI Overview molti pensano che la SEO sia morta. Per i business locali è il contrario: chi presidia bene il territorio digitale vince.",
    category: 'Digital Marketing',
    readTime: '5 min',
    date: '2025-10-22',
  },
  {
    slug: 'social-media-non-e-strategia',
    title: "Essere sui social non è una strategia",
    excerpt:
      "Avere un profilo Instagram non significa fare marketing. Ti spiego la differenza tra presenza e strategia, e perché la confusione costa cara.",
    category: 'Social Media',
    readTime: '3 min',
    date: '2025-09-15',
  },
  {
    slug: 'tono-di-voce-dimenticato',
    title: "Il tono di voce è l'identità che tutti dimenticano",
    excerpt:
      "Logo, colori, font: il kit base di ogni brand. Ma il modo in cui parli dice chi sei più di qualsiasi elemento visivo. Perché il tono di voce è il vero differenziatore.",
    category: 'Brand Strategy',
    readTime: '4 min',
    date: '2025-08-30',
  },
];

export function getPost(slug: string): ThinkingPost | undefined {
  return thinkingPosts.find((p) => p.slug === slug);
}
