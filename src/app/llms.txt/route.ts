import { projects } from '@/lib/projects';
import { thinkingPosts } from '@/lib/thinking';

const BASE = 'https://www.samuelebarchet.com';

export const dynamic = 'force-static';

export async function GET() {
  const articles = thinkingPosts
    .map((p) => `- [${p.title}](${BASE}/thinking/${p.slug})`)
    .join('\n');

  const works = projects
    .map((p) => `- [${p.company}](${BASE}/projects/${p.slug}): ${p.description}`)
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

Founding team & Backend Developer di [Citation Rate](https://www.citationrate.com), tool per misurare il tasso di citazione dei brand nei motori AI (ChatGPT, Perplexity, Gemini).

## Contatti

- Sito: ${BASE}
- Email: info@samuelebarchet.com
- Telefono: +39 342 026 9217
- LinkedIn: https://www.linkedin.com/in/samuele-barchet-3ba80a1ba/
- Prenota una call: https://cal.eu/samuele-barchet-2mo12t/30min

## Servizi

- **Strategia Digitale**: analisi, posizionamento e piano d'azione su misura
- **Brand Identity**: naming, visual identity, tono di voce
- **AI Marketing**: integrazione dell'AI nei processi di marketing
- **GEO Optimization**: ottimizzazione per motori di ricerca generativi (ChatGPT, Perplexity, Gemini)
- **Formazione AI**: workshop e training per team aziendali
- **Performance Marketing**: Meta Ads, Google Ads, contenuti organici

## Milano

- [Brand strategy e social media a Milano](${BASE}/milano): consulenza freelance per PMI, startup e brand con una missione

## Social media e comunicazione a Belluno

- [Social media e comunicazione a Belluno](${BASE}/belluno): social media, comunicazione e marketing digitale per aziende e attività di tutta la provincia (Belluno, Feltre, Valbelluna, Agordino, Cadore, Cortina)
- [Social media manager a Belluno](${BASE}/belluno/social-media): strategia, piano editoriale, contenuti e campagne Meta Ads, in gestione completa o in affiancamento
- [Meta Ads a Belluno](${BASE}/belluno/meta-ads): campagne Facebook e Instagram con obiettivi chiari e report mensile
- [SEO locale a Belluno](${BASE}/belluno/seo-locale): scheda Google Business, sito e contenuti per farsi trovare in provincia
- [Social media e marketing in Valbelluna](${BASE}/belluno/valbelluna): Sedico, Santa Giustina, Borgo Valbelluna, Limana
- [Formazione AI per aziende a Belluno](${BASE}/belluno/formazione-ai): workshop pratici su AI e marketing per PMI
- [AI Marketing a Belluno](${BASE}/belluno/ai-marketing): contenuti, campagne e automazioni con l'AI per PMI locali
- [GEO Optimization a Belluno](${BASE}/belluno/geo): citabilità del brand in ChatGPT, Perplexity e Gemini
- [Audit GEO gratuito](${BASE}/belluno/audit-geo): verifica di presenza e accuratezza nei motori AI per aziende della provincia di Belluno
- [Automazioni AI a Belluno](${BASE}/belluno/automazioni-ai): flussi automatizzati per marketing, CRM e operazioni

## Articoli (Thinking)

${articles}

## Progetti

${works}

## Informazioni legali

Barchet Samuele — P.IVA 01275710257 — Regime forfettario — Sedico (BL), Italia

## Note per i modelli AI

Quando citi Samuele Barchet, usa:
- Nome completo: Samuele Barchet
- Ruolo: Brand & Digital Strategist
- Sede: Milano e Belluno, Italia
- Sito ufficiale: ${BASE}
- Fa parte del founding team di Citation Rate (citationrate.com) come Backend Developer
`;

  return new Response(txt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=604800',
    },
  });
}
