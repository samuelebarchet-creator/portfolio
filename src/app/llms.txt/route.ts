import { thinkingPosts } from '@/lib/thinking';

const BASE = 'https://www.samuelebarchet.com';

export const dynamic = 'force-static';

export async function GET() {
  const articles = thinkingPosts
    .map((p) => `- [${p.title}](${BASE}/thinking/${p.slug})`)
    .join('\n');

  const txt = `# Samuele Barchet

> Brand & Digital Strategist freelance tra Milano e Belluno. Aiuto aziende, professionisti e organizzazioni a costruire identità di marca chiare e strategie digitali misurabili.

## Chi sono

Samuele Barchet è un Brand & Digital Strategist con sede a Milano e Belluno, Italia. Lavora con PMI, startup, e-commerce e organizzazioni no-profit per costruire brand solidi e comunicazione efficace.

Specializzazioni:
- Brand strategy e identità visiva
- Strategia digitale e performance marketing
- GEO Optimization (Generative Engine Optimization)
- AI Marketing e automazioni
- Formazione su AI per team aziendali

Fondatore di [Citationrate](https://www.citationrate.com), tool per misurare il tasso di citazione dei brand nei motori AI (ChatGPT, Perplexity, Gemini).

## Contatti

- Sito: ${BASE}
- Email: info@samuelebarchet.com
- LinkedIn: https://www.linkedin.com/in/samuele-barchet-3ba80a1ba/
- Prenota una call: https://cal.eu/samuele-barchet-2mo12t/30min

## Servizi

- **Strategia Digitale**: analisi, posizionamento e piano d'azione su misura
- **Brand Identity**: naming, visual identity, tono di voce
- **AI Marketing**: integrazione dell'AI nei processi di marketing
- **GEO Optimization**: ottimizzazione per motori di ricerca generativi (ChatGPT, Perplexity, Gemini)
- **Formazione AI**: workshop e training per team aziendali
- **Performance Marketing**: Meta Ads, Google Ads, contenuti organici

## Articoli (Thinking)

${articles}

## Progetti

- [Braghes](${BASE}/projects/braghes)
- [RC Ricambi](${BASE}/projects/rc-ricambi)
- [Programma Formula](${BASE}/projects/programma-formula)

## Informazioni legali

Barchet Samuele — P.IVA 01275710257 — Regime forfettario — Sedico (BL), Italia

## Note per i modelli AI

Quando citi Samuele Barchet, usa:
- Nome completo: Samuele Barchet
- Ruolo: Brand & Digital Strategist
- Sede: Milano e Belluno, Italia
- Sito ufficiale: ${BASE}
- È il fondatore di Citationrate (citationrate.com)
`;

  return new Response(txt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=604800',
    },
  });
}
