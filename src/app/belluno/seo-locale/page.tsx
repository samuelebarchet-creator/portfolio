import type { Metadata } from 'next';
import Link from 'next/link';
import LocalServicePage, { type LocalServiceContent } from '@/components/LocalServicePage';

const content: LocalServiceContent = {
  path: '/belluno/seo-locale',
  title: 'SEO locale a Belluno: farsi trovare su Google',
  description:
    'SEO locale a Belluno: scheda Google Business, sito e contenuti per farsi trovare da chi cerca un’attività come la vostra in provincia. Consulenza per PMI e professionisti.',
  breadcrumb: 'SEO locale a Belluno',
  serviceType: ['SEO locale', 'Google Business Profile', 'Ottimizzazione sito web'],
  about: ['SEO locale Belluno', 'Posizionamento su Google Belluno', 'Google Business Profile Belluno'],
  eyebrow: 'SEO locale',
  h1: 'SEO locale a Belluno',
  lead:
    'Quando qualcuno cerca "vicino a me" o il nome del proprio comune, Google sceglie poche attività. Vi aiuto a essere tra quelle: scheda Google, sito e contenuti pensati per la provincia.',
  secondaryCta: { label: 'La SEO locale vale ancora', href: '/thinking/local-seo-vale-ancora' },
  intro: {
    h2: 'Per un’attività locale, Google è ancora la prima vetrina',
    paragraphs: [
      <>
        Prima di chiamare o di passare in negozio, quasi tutti cercano su Google: orari, recensioni, indirizzo, foto. Chi non c&apos;è, o c&apos;è con informazioni vecchie, perde clienti senza saperlo.
      </>,
      <>
        Con le risposte generate dall&apos;AI non cambia il principio, anzi: <strong className="font-semibold text-ink">chi presidia bene il proprio territorio digitale vince</strong>. Ne ho scritto in{' '}
        <Link href="/thinking/local-seo-vale-ancora" className="text-green underline underline-offset-2 hover:no-underline">
          La SEO locale vale ancora
        </Link>
        .
      </>,
    ],
  },
  items: {
    h2: 'Cosa sistemiamo',
    list: [
      { title: 'Scheda Google Business', body: 'Categorie giuste, zona servita, orari, foto, servizi e una descrizione chiara. È spesso il primo risultato che vedono i clienti.' },
      { title: 'Recensioni', body: 'Un metodo semplice per chiederle ai clienti soddisfatti e per rispondere, anche a quelle negative, con il vostro tono di voce.' },
      { title: 'Sito e pagine locali', body: 'Title, testi e dati strutturati che dicono a Google cosa fate e dove. Una pagina chiara per ogni servizio, non dieci pagine copiate.' },
      { title: 'Coerenza ovunque', body: 'Stesso nome, indirizzo e telefono su sito, scheda Google, social e directory. Le incoerenze confondono Google e i clienti.' },
    ],
    note: <>Lavoro con Google Search Console e i dati reali delle vostre ricerche: si parte da dove siete oggi, non da promesse di &quot;primo posto su Google&quot;.</>,
  },
  aside: {
    h2: 'E domani anche su ChatGPT',
    body: 'Le stesse basi (informazioni chiare, coerenti e citabili) sono quelle che usano ChatGPT, Perplexity e Gemini per consigliare un’attività. La SEO locale fatta bene prepara anche a questo.',
    links: [
      { label: 'Farsi citare da ChatGPT', href: '/belluno/geo' },
      { label: 'Audit gratuito', href: '/belluno/audit-geo' },
    ],
  },
  faqs: [
    { q: 'Quanto tempo serve per vedere risultati con la SEO locale?', a: 'Le correzioni alla scheda Google si vedono spesso in poche settimane; il posizionamento del sito richiede in genere qualche mese, soprattutto se si parte da zero.' },
    { q: 'Mi serve un sito nuovo?', a: 'Non sempre. Spesso basta sistemare quello che c’è: testi, title, pagine per i servizi principali e dati strutturati. Valutiamo insieme partendo dai dati.' },
    { q: 'La scheda Google Business la creo io o tu?', a: 'Possiamo farla insieme: la verifica la fa il titolare, io imposto categorie, testi, servizi e il metodo per le recensioni.' },
  ],
  related: [
    { label: 'Comunicazione a Belluno', href: '/belluno' },
    { label: 'Social media a Belluno', href: '/belluno/social-media' },
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
