import type { Metadata } from 'next';
import Link from 'next/link';
import LocalServicePage, { type LocalServiceContent } from '@/components/LocalServicePage';

const content: LocalServiceContent = {
  path: '/belluno/meta-ads',
  title: 'Meta Ads a Belluno: campagne Facebook e Instagram',
  description:
    'Campagne Meta Ads a Belluno: Facebook e Instagram a pagamento per aziende e attività della provincia, con obiettivi chiari e un report mensile leggibile.',
  breadcrumb: 'Meta Ads a Belluno',
  serviceType: ['Meta Ads', 'Facebook Ads', 'Instagram Ads', 'Advertising locale'],
  about: ['Meta Ads Belluno', 'Facebook Ads Belluno', 'Instagram Ads Belluno', 'Pubblicità sui social Belluno'],
  eyebrow: 'Meta Ads',
  h1: 'Campagne Meta Ads a Belluno',
  lead:
    'Facebook e Instagram a pagamento per le attività della provincia: pochi obiettivi, chiari, misurati ogni mese. Prima di aumentare il budget, capiamo cosa state amplificando.',
  secondaryCta: { label: 'Perché le campagne non convertono', href: '/thinking/meta-ads-non-convertono' },
  intro: {
    h2: 'Il problema raramente è il budget',
    paragraphs: [
      <>
        Molte campagne di attività locali spendono senza un obiettivo preciso: si &quot;sponsorizza il post&quot; e si spera. Così i risultati non cambiano, anche aumentando la spesa.
      </>,
      <>
        Quasi sempre la catena si rompe prima: <strong className="font-semibold text-ink">messaggio poco chiaro, pubblico sbagliato, nessun passo successivo</strong> per chi vede l&apos;annuncio. Ne ho scritto in{' '}
        <Link href="/thinking/meta-ads-non-convertono" className="text-green underline underline-offset-2 hover:no-underline">
          Perché le tue campagne Meta non convertono
        </Link>
        .
      </>,
      <>In una provincia come Belluno il pubblico è piccolo e si conosce: campagne precise e riconoscibili rendono più di campagne grandi e generiche.</>,
    ],
  },
  items: {
    h2: 'Come imposto le campagne',
    list: [
      { title: 'Un obiettivo per campagna', body: 'Farsi conoscere, raccogliere contatti, rafforzare il legame con chi vive nella zona: ogni campagna ne ha uno, e lo misuriamo su quello.' },
      { title: 'Pubblico locale', body: 'Comuni, raggio, interessi e pubblici simili ai vostri clienti. In un territorio piccolo, sbagliare pubblico significa sprecare metà del budget.' },
      { title: 'Creatività che sembrano vostre', body: 'Testi e video coerenti con il vostro tono di voce. Volti e luoghi riconoscibili funzionano meglio di immagini da catalogo.' },
      { title: 'Report mensile leggibile', body: 'Quanto avete speso, cosa ha portato, cosa cambiamo. Niente metriche di vanità: costo per contatto e risultati reali.' },
    ],
    note: (
      <>
        In una delle campagne che ho seguito il costo per contatto è sceso del <strong className="font-semibold text-ink">73% rispetto al benchmark</strong>. Non è una promessa: è quello che succede quando messaggio, pubblico e obiettivo sono allineati.
      </>
    ),
  },
  proof: {
    h2: 'Campagne fatte qui',
    body: (
      <>
        Per <strong className="font-semibold text-ink">All Fit</strong>, palestre tra Belluno e Treviso, gestisco campagne Meta e YouTube Ads su tre obiettivi distinti (farsi conoscere, raccogliere contatti, legame con il territorio), con il monitoraggio dei dati di Meta e Google Analytics.
      </>
    ),
    cards: [
      { name: 'All Fit', tag: 'Fitness · Belluno e Treviso', desc: 'Meta e YouTube Ads su tre obiettivi, contenuti video e materiali OOH.', href: '/projects/allfit' },
      { name: 'Marketing per una palestra', tag: 'Articolo · Caso del territorio', desc: 'Posizionamento, tono di voce e contenuti nel caso All Fit.', href: '/thinking/marketing-palestra-belluno-caso-allfit' },
      { name: 'Campagne Meta che non convertono', tag: 'Articolo · Advertising', desc: 'Dove si rompe la catena, prima ancora del budget.', href: '/thinking/meta-ads-non-convertono' },
    ],
  },
  aside: {
    h2: 'Le campagne funzionano meglio con social curati',
    body: 'Chi clicca su un annuncio guarda subito il vostro profilo. Se i social sono fermi o confusi, la campagna perde efficacia: per questo lavoro su entrambi insieme.',
    links: [{ label: 'Social media a Belluno', href: '/belluno/social-media' }],
  },
  faqs: [
    { q: 'Quanto budget serve per partire?', a: 'Dipende dall’obiettivo e dall’area. Per un’attività locale si può partire con un budget contenuto e aumentarlo solo quando i numeri dicono che la campagna funziona.' },
    { q: 'Gestisci anche Google Ads o YouTube?', a: 'Il centro sono Facebook e Instagram. Per All Fit gestisco anche campagne YouTube Ads; per Google Ads valutiamo caso per caso.' },
    { q: 'In quanto tempo si vedono i risultati?', a: 'I primi dati utili arrivano in poche settimane: servono per capire quali messaggi e pubblici funzionano. Le ottimizzazioni vere si fanno mese dopo mese.' },
  ],
  related: [
    { label: 'Social media a Belluno', href: '/belluno/social-media' },
    { label: 'Comunicazione a Belluno', href: '/belluno' },
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
