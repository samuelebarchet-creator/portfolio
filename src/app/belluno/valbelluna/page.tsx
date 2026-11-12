import type { Metadata } from 'next';
import Link from 'next/link';
import LocalServicePage, { type LocalServiceContent } from '@/components/LocalServicePage';

const content: LocalServiceContent = {
  path: '/belluno/valbelluna',
  title: 'Social media e marketing a Sedico e in Valbelluna',
  description:
    'Social media, comunicazione e campagne per aziende e attività di Sedico, Santa Giustina, Borgo Valbelluna e Limana. Un consulente che lavora in Valbelluna.',
  breadcrumb: 'Social media e marketing in Valbelluna',
  serviceType: ['Social Media Management', 'Comunicazione aziendale', 'Meta Ads'],
  about: ['Social media manager Sedico', 'Marketing Valbelluna', 'Consulente marketing Sedico', 'Comunicazione Borgo Valbelluna'],
  eyebrow: 'Valbelluna',
  h1: 'Social media e marketing in Valbelluna',
  lead:
    'Lavoro da Sedico con aziende e attività della Valbelluna: social media, comunicazione e campagne per farsi conoscere da chi vive tra Belluno e Feltre.',
  secondaryCta: { label: 'Il caso All Fit', href: '/thinking/marketing-palestra-belluno-caso-allfit' },
  intro: {
    h2: 'Un consulente di qui, per le attività di qui',
    paragraphs: [
      <>
        La mia attività ha sede a <strong className="font-semibold text-ink">Sedico</strong>. In Valbelluna i clienti si conoscono, si passano parola e riconoscono chi c&apos;è nei contenuti: una comunicazione che funziona altrove, qui deve essere più vera e più vicina.
      </>,
      <>
        Per questo parto sempre da chi siete e da cosa vi distingue da chi sta due paesi più in là. Poi arrivano social, contenuti e campagne, nell&apos;ordine giusto.
      </>,
    ],
  },
  items: {
    h2: 'Come lavoro con le attività della valle',
    list: [
      { title: 'Social media', body: 'Strategia, piano editoriale e contenuti, in gestione completa o affiancando chi in azienda se ne occupa.' },
      { title: 'Campagne locali', body: 'Meta Ads mirate ai comuni della valle: pochi chilometri, pubblico preciso, budget che non si disperde.' },
      { title: 'Contenuti con volti veri', body: 'Titolari, staff e clienti riconoscibili funzionano meglio di qualsiasi immagine da catalogo, soprattutto in un territorio piccolo.' },
      { title: 'Comunicazione anche fuori dai social', body: 'Volantini, insegne, mezzi pubblici: lo stesso messaggio adattato a ogni formato, non la stessa grafica ingrandita.' },
    ],
    note: <>Mi muovo in tutta la valle: Sedico, Santa Giustina, Borgo Valbelluna (Trichiana, Mel, Lentiai) e Limana, oltre a Belluno e Feltre.</>,
  },
  proof: {
    h2: 'Un caso della valle: All Fit',
    body: (
      <>
        All Fit ha palestre a Belluno, Sedico e Trichiana. Come referente della comunicazione curo posizionamento, contenuti social e video con istruttori e titolare, campagne Meta e YouTube Ads e i materiali fuori dai social, come la grafica sull&apos;autobus della linea Belluno–Trichiana. Lo racconto nel{' '}
        <Link href="/thinking/marketing-palestra-belluno-caso-allfit" className="text-green underline underline-offset-2 hover:no-underline">
          caso All Fit
        </Link>
        .
      </>
    ),
    cards: [
      { name: 'All Fit', tag: 'Fitness · Belluno, Sedico, Trichiana', desc: 'Posizionamento, contenuti social e video, campagne e materiali OOH.', href: '/projects/allfit' },
      { name: 'Marketing per una palestra', tag: 'Articolo · Caso del territorio', desc: 'Come si fa marketing per una palestra oltre gli sconti.', href: '/thinking/marketing-palestra-belluno-caso-allfit' },
      { name: 'Social media a Belluno', tag: 'Servizio', desc: 'Come imposto e gestisco i social delle attività della provincia.', href: '/belluno/social-media' },
    ],
  },
  faqs: [
    { q: 'Ci possiamo incontrare di persona?', a: 'Sì: lavoro da Sedico, quindi in Valbelluna ci si vede facilmente per le sessioni strategiche. Il lavoro di ogni giorno si fa anche da remoto.' },
    { q: 'Lavori anche con attività molto piccole?', a: 'Sì. Per un negozio o un’attività di servizio spesso basta impostare bene strategia e piano editoriale, e poi affiancare chi pubblica.' },
    { q: 'Fai anche campagne a pagamento solo sulla valle?', a: 'Sì: le campagne Meta si possono limitare a pochi comuni o a un raggio preciso, così il budget arriva solo a chi può davvero diventare cliente.' },
  ],
  related: [
    { label: 'Comunicazione a Belluno', href: '/belluno' },
    { label: 'Meta Ads a Belluno', href: '/belluno/meta-ads' },
  ],
};

export const metadata: Metadata = {
  title: content.title,
  description: content.description,
  alternates: { canonical: `https://www.samuelebarchet.com${content.path}` },
  openGraph: { title: content.title, description: content.description, url: `https://www.samuelebarchet.com${content.path}` },
};

export default function Page() {
  return <LocalServicePage content={content} />;
}
