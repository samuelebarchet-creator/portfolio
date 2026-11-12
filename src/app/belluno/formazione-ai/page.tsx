import type { Metadata } from 'next';
import LocalServicePage, { type LocalServiceContent } from '@/components/LocalServicePage';

const content: LocalServiceContent = {
  path: '/belluno/formazione-ai',
  title: 'Formazione AI per aziende a Belluno — Samuele Barchet',
  description:
    'Formazione sull’intelligenza artificiale per aziende e PMI di Belluno: workshop pratici su AI e marketing, sui vostri processi reali, in aula o da remoto.',
  breadcrumb: 'Formazione AI per aziende a Belluno',
  serviceType: ['Formazione aziendale', 'Formazione intelligenza artificiale', 'Workshop AI e marketing'],
  about: ['Formazione AI aziende Belluno', 'Corso intelligenza artificiale PMI Belluno', 'Workshop AI marketing'],
  eyebrow: 'Formazione AI',
  h1: 'Formazione AI per aziende a Belluno',
  lead:
    'Workshop pratici sull’intelligenza artificiale per le PMI della provincia: niente teoria generica, lavoriamo sui vostri processi reali per capire dove l’AI fa risparmiare tempo davvero.',
  secondaryCta: { label: 'L’AI e i clienti nel 2026', href: '/thinking/ai-comportamento-utenti-2026' },
  intro: {
    h2: 'Da parola di moda a strumento di lavoro',
    paragraphs: [
      <>Molte aziende sanno che l&apos;AI è importante, ma non sanno da dove cominciare, o l&apos;hanno provata una volta e hanno smesso.</>,
      <>
        La formazione serve a questo: <strong className="font-semibold text-ink">partire dalle attività che già fate</strong> (comunicazione, contenuti, email, analisi) e capire dove l&apos;AI aiuta e dove no. L&apos;obiettivo sono competenze interne vere, non dipendere da strumenti che non si capiscono.
      </>,
    ],
  },
  items: {
    h2: 'Cosa facciamo in aula',
    list: [
      { title: 'Workshop su AI e marketing', body: 'Contenuti, social, email e campagne: come usare l’AI per produrre di più mantenendo il vostro tono di voce.' },
      { title: 'Prompt applicati al vostro lavoro', body: 'Non elenchi di trucchi: prompt costruiti sui vostri casi reali, da riusare dopo il corso.' },
      { title: 'AI nei processi aziendali', body: 'Dove inserire l’AI nei flussi di ogni giorno, con quali strumenti e con quali limiti.' },
      { title: 'Affiancamento dopo il corso', body: 'Se serve, resto come riferimento esterno per qualche mese, finché il team non è autonomo.' },
    ],
    note: (
      <>
        Si fa in aula, in azienda in provincia di Belluno o a Milano, oppure da remoto. Molte PMI aderiscono a un fondo interprofessionale senza saperlo: se è il vostro caso, verifichiamo insieme se il percorso può essere finanziato.
      </>
    ),
  },
  aside: {
    h2: 'Per chi vuole già applicarla',
    body: 'Dopo la formazione, l’AI si può portare direttamente nel marketing: contenuti, campagne e visibilità nelle risposte di ChatGPT e Gemini.',
    links: [
      { label: 'AI marketing a Belluno', href: '/belluno/ai-marketing' },
      { label: 'Automazioni AI per PMI', href: '/belluno/automazioni-ai' },
    ],
  },
  faqs: [
    { q: 'Serve avere già esperienza con l’AI?', a: 'No. Si parte da zero o quasi, con strumenti accessibili, e si costruisce sulle attività che il team già fa ogni giorno.' },
    { q: 'Quanto dura un percorso?', a: 'Dipende dagli obiettivi: da un workshop di mezza giornata a un percorso in più incontri con affiancamento. Lo definiamo insieme dopo una prima call.' },
    { q: 'La formazione si può finanziare?', a: 'Se l’azienda aderisce a un fondo interprofessionale, spesso sì: va verificato caso per caso con il fondo o con chi gestisce la vostra formazione.' },
  ],
  related: [
    { label: 'Comunicazione a Belluno', href: '/belluno' },
    { label: 'Tutti i servizi', href: '/servizi' },
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
