# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primario: titolari e responsabili di **PMI locali** (Belluno, Veneto, Milano) che cercano un partner marketing esterno di cui potersi fidare. Arrivano di solito già con un nome in mente (passaparola, LinkedIn, Instagram, Citationrate, ricerca locale tipo "marketing Belluno") e usano il sito per verificare che Samuele sia serio, competente e la persona giusta prima di scrivergli.

Secondari (presenti nel copy, non prioritari): brand in lancio o riposizionamento, team che vogliono formazione AI.

## Product Purpose

Sito personale di Samuele Barchet, Brand & Digital Strategist freelance. Il suo compito principale è la **credibilità**: dimostrare con lavori reali, persone reali e un modo di pensare riconoscibile che Samuele è affidabile, così che il contatto (call Cal.com, form, email, telefono) arrivi già convinto.

Successo = chi ha già sentito parlare di Samuele esce dal sito con fiducia confermata. La conversione diretta conta, ma è secondaria rispetto alla fiducia.

## Positioning

**Brand strategist prima di tutto.** Posizionamento, identità e tono di voce vengono prima di qualsiasi strumento ("strategia prima, poi social, advertising e contenuti, nell'ordine giusto"). AI marketing, GEO e formazione sono strumenti e servizi a valle della strategia, non il titolo. Avere fondato Citationrate è una prova di competenza, non l'identità del sito.

Elemento non copiabile: radici reali nel territorio (Belluno / Milano) e casi concreti in settori con una missione, come l'abbigliamento inclusivo (Braghe's, RC Ricambi per Carrozzine, CROSSabili).

## Operating Context

- Mercato italiano, sito solo in italiano (`lang="it"`).
- Spesso la visita arriva dopo un primo contatto: si legge su mobile, a volte poco prima o dopo una call.
- Percorsi: home → lavori / progetto → about → contatti. Pagine: `/`, `/lavori`, `/projects/[slug]`, `/servizi`, `/about`, `/thinking`, `/contatti`, `/belluno` (landing SEO locale).
- Canali di contatto: call Cal.com (`CalButton`), lead form (`/api/lead`), email info@samuelebarchet.com, telefono.

## Capabilities and Constraints

- Next.js 16.2 (versione con breaking changes: vedi AGENTS.md), React 19, Tailwind, GSAP, Lenis, shader WebGL (`@paper-design/shaders-react` più shader custom). Deploy su Vercel.
- Consent Mode v2 + Iubenda + GTM (GTM-5P4VBBQF) + Vercel Analytics: ogni nuovo script o tracciamento deve passare dal consenso.
- La SEO/GEO è parte del prodotto: JSON-LD Person/ProfessionalService, `llms.txt`, feed RSS, sitemap. Le modifiche non devono rompere gerarchia degli H1, metadata o dati strutturati. Backlog SEO in `samuelebarchet.com-audit/`.
- Gli shader devono restare leggeri su mobile (commit del 2026-11-05).
- Aperto: gli articoli `/thinking` non hanno ancora pagine dedicate (risultavano 404 nell'audit di giugno 2026).

## Brand Commitments

- Nome: Samuele Barchet. Ruolo: "Brand & Digital Strategist". Sedi: Milano · Belluno.
- Voce: diretta, umana, in prima persona, senza gergo ("Parlo come un essere umano"). Valori dichiarati: Strategia prima · Dati che parlano · Chiarezza sopra tutto.
- Asset esistenti: logo barca (`public/logo-boat.png`, `boat-sailing*.png`), loghi clienti in `public/logos/`, foto delle testimonianze in `public/testimonials/`.

## Evidence on Hand

- 8 progetti con caso studio in `src/lib/projects.ts`: Braghe's, RC – Ricambi per Carrozzine, Programma Formula, Citation Rate, CROSSabili, VYST, All Fit, 3D Axis. Le immagini sono in `public/projects/`.
- 3 testimonianze reali (`src/components/Testimonials.tsx`): Mattia Cattapan (Crossabili / Sedut SRL), Alessandro Pellizzer (Vyst), Daniil Kopiev (Advertising Manager).
- Numeri nel copy (`src/lib/about.ts`, `services.ts`): 7+ anni, 20+ progetti, 8 brand seguiti, 4M+ visualizzazioni, fino a 120.000 persone raggiunte con un singolo post, −73% CPL rispetto al benchmark (confermato dall'autore il 2026-11-12). Sono dichiarazioni dell'autore: non modificarle né aggiungerne altre senza conferma.
- Non esistono: prezzi pubblici, premi, citazioni stampa, loghi di clienti oltre a quelli elencati. Non inventarli.

## Product Principles

1. **La fiducia prima della conversione.** Ogni pagina deve rendere Samuele più credibile; i CTA devono essere disponibili, ma senza pressione.
2. **Le prove valgono più delle promesse.** Lavori reali, persone reali e numeri verificabili vengono prima delle affermazioni generiche.
3. **Prima la strategia, poi gli strumenti.** AI e GEO compaiono come mezzi al servizio del brand, mai come titolo dell'identità.
4. **Vicino e reale.** Il legame con Belluno/Milano e il tono umano sono un vantaggio da far vedere, non da nascondere.
5. **Leggibile dagli umani e dalle AI.** Struttura, semantica e dati strutturati fanno parte del lavoro, non sono un extra.
