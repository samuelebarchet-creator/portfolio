---
name: Samuele Barchet
description: Brand & Digital Strategist. Un atelier creativo immerso nel verde, su carta crema.
colors:
  carta-crema: "#F5F0E8"
  carta-velina: "#EDE8DC"
  lino: "#E8E2D4"
  lino-scuro: "#E2DDD0"
  verde-abete: "#3D5C35"
  salvia-sottobosco: "#6A8A5E"
  germoglio: "#8FB87A"
  inchiostro: "#1A1A16"
  inchiostro-diluito: "#5A5A52"
  inchiostro-sbiadito: "#66665C"
  terracotta: "#D4713A"
  terracotta-chiara: "#E09060"
  terracotta-inchiostro: "#A44F1D"
  terracotta-viva: "#C2602A"
  corteccia: "#6B4226"
  corteccia-chiara: "#9A6B48"
  notte-di-bosco: "#080D08"
  radura-notturna: "#16331A"
typography:
  display:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "clamp(2.2rem, 9.5vw, 10.5rem)"
    fontWeight: 900
    lineHeight: 0.9
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "clamp(2.4rem, 5vw, 4.5rem)"
    fontWeight: 900
    lineHeight: 1.25
  title:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)"
    fontWeight: 900
    lineHeight: 1.25
  body:
    fontFamily: "Barlow, sans-serif"
    fontSize: "clamp(1rem, 1.3vw, 1.15rem)"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    letterSpacing: "0.45em"
  label-action:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    letterSpacing: "0.2em"
rounded:
  none: "0px"
  dot: "9999px"
spacing:
  gutter: "32px"
  gutter-md: "80px"
  section: "96px"
  section-lg: "112px"
  card: "32px"
  card-lg: "48px"
components:
  button-primary:
    backgroundColor: "{colors.verde-abete}"
    textColor: "{colors.carta-crema}"
    typography: "{typography.label-action}"
    rounded: "{rounded.none}"
    padding: "12px 28px"
  button-primary-hover:
    backgroundColor: "{colors.salvia-sottobosco}"
    textColor: "{colors.carta-crema}"
  button-submit:
    backgroundColor: "{colors.verde-abete}"
    textColor: "{colors.carta-crema}"
    typography: "{typography.label-action}"
    rounded: "{rounded.none}"
    padding: "16px 40px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.verde-abete}"
    typography: "{typography.label-action}"
    rounded: "{rounded.none}"
    padding: "8px 20px"
  button-outline-hover:
    backgroundColor: "{colors.verde-abete}"
    textColor: "{colors.carta-crema}"
  input-field:
    backgroundColor: "transparent"
    textColor: "{colors.inchiostro}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "12px 16px"
  work-card:
    backgroundColor: "{colors.carta-crema}"
    textColor: "{colors.inchiostro}"
    rounded: "{rounded.none}"
    padding: "{spacing.card}"
  service-row:
    backgroundColor: "{colors.carta-crema}"
    textColor: "{colors.inchiostro}"
    rounded: "{rounded.none}"
    padding: "{spacing.card-lg}"
---

# Design System: Samuele Barchet

## Overview

**Creative North Star: "L'Atelier nel Bosco"**

Il sito è uno studio creativo immerso nel verde. La superficie è calma e stampata: carta crema, inchiostro quasi nero, grandi titoli in Playfair Black Italic ed etichette condensate in maiuscolo, con molta spaziatura, che numerano le sezioni come le tavole di un quaderno. Sotto questa superficie qualcosa si muove: il mare verde e terracotta dell'hero, con la barca che naviga attorno al titolo, e le ombre "warp" che scorrono dietro le sezioni sono profondità viva, non decorazione.

L'effetto deve essere **vivo e sorprendente**: shader, entrate GSAP, scroll morbido (Lenis) e cursore custom fanno del sito stesso una prova di competenza. Lo stupore però resta dentro una griglia sobria: angoli vivi, separatori di un pixel, nessuna ombra sulle superfici. La sorpresa sta nel *materiale*, non nel caos della composizione.

Il sito non deve mai sembrare un **template da freelance**: niente foto profilo in un cerchio, niente sezioni a icone in griglia, niente layout da tema WordPress.

**Key Characteristics:**
- Carta crema calda al posto del bianco; inchiostro `#1A1A16` al posto del nero.
- Playfair Display 900 *sempre in corsivo* per ogni titolo, dal display ai nomi delle card.
- Barlow Condensed in maiuscolo con tracking ampio (0.2em–0.55em) per etichette, navigazione e pulsanti.
- Ornamenti numerati in terracotta (`── 01 · Lavori selezionati ──`) che aprono le sezioni.
- Profondità fatta di luce verde in movimento (WebGL), mai di ombre.
- Angoli vivi ovunque; il cerchio è riservato ai punti degli elenchi.

## Colors

Una palette da bosco su carta: verdi di conifera e sottobosco, terracotta come unico accento caldo, inchiostri neutri e caldi.

### Primary
- **Verde Abete** (`verde-abete`): il colore dell'azione e del marchio. Pulsanti pieni, bordo del CTA in nav, punti degli elenchi, numeri delle statistiche, hover dei link e dei titoli, selezione del testo, scrollbar in hover. È anche la tinta (al 22% di opacità) delle ombre warp.
- **Salvia di Sottobosco** (`salvia-sottobosco`): hover del pulsante pieno, anno e ruolo nelle card dei lavori, filetti degli ornamenti (al 30%), scrollbar a riposo.
- **Germoglio** (`germoglio`): verde chiaro per i fondi notturni (divisori e sottolineature nella variante `Hero.tsx`); nella home l'hero usa la terracotta.

### Secondary
- **Terracotta** (`terracotta`): l'unico accento caldo. Etichette degli ornamenti di sezione (numero + titolo, bold) e i loro filetti sfumati (al 35%).
- **Terracotta Chiara**, **Corteccia**, **Corteccia Chiara** (`terracotta-chiara`, `corteccia`, `corteccia-chiara`): token disponibili per accenti terrosi secondari; usati di rado.

### Neutral
- **Carta Crema** (`carta-crema`): sfondo della pagina, delle card e delle righe servizio; testo sui fondi verdi e notturni.
- **Carta Velina** (`carta-velina`): sfondo alternato delle sezioni (statistiche, servizi, footer) e binario della scrollbar.
- **Lino** / **Lino Scuro** (`lino`, `lino-scuro`): superfici leggermente più dense.
- **Inchiostro** (`inchiostro`): titoli e testo principale (15.4:1 su crema).
- **Inchiostro Diluito** (`inchiostro-diluito`): testo secondario, link di nav a riposo, descrizioni (6.1:1).
- **Inchiostro Sbiadito** (`inchiostro-sbiadito`): micro-etichette, date e didascalie (4.6:1 su crema).
- **Notte di Bosco** / **Radura Notturna** (`notte-di-bosco`, `radura-notturna`): il fondo dell'hero, una sfumatura radiale da `radura-notturna` al centro verso `notte-di-bosco` ai bordi; anche il `themeColor` del browser.

### Named Rules
**La Regola della Terracotta Sola.** La terracotta è l'unico colore caldo in scena: numera le sezioni e accende l'hero. Sui fondi notturni dell'hero è il colore dell'azione (CTA pieno, sottolineature, divisore); sulla carta le azioni sono sempre verde abete. Nessun secondo accento caldo. Nella home la terracotta entra come segno, non come colore dei titoli: un trattino di 48×3px sotto ogni H2 di sezione, i numeri della barra in Terracotta Viva (`terracotta-viva`, ≥3:1 su crema, solo per testo grande), i punti degli elenchi, le frecce delle card, le sottolineature dei link testuali e le virgolette delle testimonianze. I titoli restano in inchiostro.

**La Regola della Carta.** Nessuna superficie è bianca pura né nera pura. Il chiaro è crema, lo scuro è inchiostro o notte di bosco.

**La Regola del Contrasto Minimo.** Il testo in terracotta usa sempre `var(--orange-text)`: sulla carta vale Terracotta d'Inchiostro (`terracotta-inchiostro`, 5.0:1); dentro `[data-surface="dark"]` diventa Terracotta Chiara (≥4.8:1). `var(--orange)` resta per fondi, filetti e decorazioni. La salvia (3.4:1) non si usa per il testo.

## Typography

**Display Font:** Playfair Display (fallback Georgia, serif)
**Body Font:** Barlow (fallback sans-serif)
**Label Font:** Barlow Condensed (fallback sans-serif)

**Character:** un serif editoriale nero e corsivo, quasi calligrafico, in coppia con un grottesco condensato e tecnico. È la voce di chi scrive a mano un'idea e poi la mette in tabella.

### Hierarchy
- **Display** (900 italic, `clamp(2.2rem, 9.5vw, 10.5rem)`, lh 0.9, `-0.03em`): solo il claim dell'hero, crema su notte di bosco, con un `text-shadow` morbido per staccarlo dallo shader.
- **Headline** (900 italic, `clamp(2.4rem, 5vw, 4.5rem)`, lh 1.25): titoli di sezione. Variante più compatta `clamp(1.8rem, 3.5vw, 3rem)` nelle pagine interne.
- **Title** (900 italic, `clamp(1.6rem, 2.5vw, 2.2rem)`, lh 1.25): nomi dei clienti nelle card, titoli dei servizi, voci di menu mobile (2.25rem).
- **Body** (400, `clamp(1rem, 1.3vw, 1.15rem)`, lh 1.75): paragrafi. Il grassetto (600, in inchiostro) evidenzia le frasi chiave, come nel copy con `**…**`.
- **Label** (Condensed 700, 0.75rem, tracking 0.45em, MAIUSCOLO): ornamenti di sezione. Varianti 400 con tracking da 0.2em a 0.55em per anni, ruoli, tag e micro-intestazioni.
- **Label Action** (Condensed 400, 0.875rem, tracking 0.2em, MAIUSCOLO): pulsanti, link di nav (tracking 0.18em), link CTA testuali.

### Named Rules
**La Regola del Corsivo Nero.** Ogni titolo è Playfair 900 *italic*. Un titolo in tondo o in peso medio rompe il sistema.

**La Regola del Maiuscolo Spaziato.** Il Barlow Condensed compare solo in maiuscolo con tracking ≥ 0.15em; il Barlow normale non va mai in maiuscolo.

## Layout

Colonna centrale `max-w-6xl` (72rem) con margini laterali di 32px su mobile e 80px da `md` (768px) in su. Le sezioni respirano con 96–112px di padding verticale e alternano sfondo crema e velina, senza bordi tra l'una e l'altra; il footer si separa con un filetto verde al 12%.

Le griglie sono a 1 / 2 / 3 colonne (`md`, `lg` a 1024px). La griglia dei lavori usa un gap di 1px su fondo verde al 10%, così le card sono divise da filetti sottili e non da spazi. Le righe dei servizi sono a 3 colonne da `lg`, con 40–64px di gap. L'hero è centrato e simmetrico; le sezioni interne sono allineate a sinistra, con titolo e nota breve che si dividono la riga da `md`.

La nav è fissa, alta 64px; sotto `md` diventa un menu a schermo intero su crema, con voci in Playfair 2.25rem.

## Elevation & Depth

Le superfici sono piatte: nessun `box-shadow` su card, pulsanti o pannelli. La profondità viene da due fonti. La prima è l'alternanza tonale crema/velina. La seconda è la **luce in movimento**: lo shader warp dell'hero (`AdaptiveWarp`) e il componente `WarpShadow`, uno shader warp verde abete al 22% di opacità che scorre dietro le sezioni (lavori, servizi, about, contatti, thinking, Belluno). L'unica ombra vera è il `text-shadow` sul claim e sui link dell'hero, che serve a leggerli sopra lo shader.

### Named Rules
**La Regola della Luce, non dell'Ombra.** La profondità si fa con la luce verde che si muove dietro la carta, mai sollevando le card con le ombre.

**La Regola dello Shader Responsabile.** Ogni shader ha sotto un gradiente radiale statico come fallback. `AdaptiveWarp` sotto i 768px riduce iterazioni e pixel, e si ferma con `prefers-reduced-motion` o con Save-Data. Ogni nuovo effetto WebGL segue le stesse regole.

## Shapes

Angoli vivi (0px) ovunque: pulsanti, input, card, righe servizio, immagini. Le linee sono filetti di un pixel: in verde a bassa opacità (8–30%) come divisori, in terracotta sfumata ai lati degli ornamenti, in verde pieno come bordo dei pulsanti outline e delle card in hover. Il cerchio compare solo nei punti degli elenchi (4px, verde abete). L'unica forma figurativa è il logo a barca a vela.

## Components

### Buttons
Rettangoli piatti, tipografici e senza icone decorative oltre alla freccia.
- **Shape:** angoli vivi (0px).
- **Primary:** verde abete pieno, testo crema in Barlow Condensed maiuscolo con tracking 0.2em, padding 12px 28px, con una freccia → in linea a 14px.
- **Submit (form):** stessa logica, più generoso (16px 40px, tracking 0.28em); opacità 60% quando è disabilitato.
- **Hover:** la variante piena passa a salvia di sottobosco in 300ms; nessun movimento.
- **Outline (CTA in nav):** bordo e testo verde abete, padding 8px 20px; in hover si riempie di verde con testo crema.
- **Link testuale:** Condensed maiuscolo sottolineato (offset 4px); sull'hero la sottolineatura è germoglio al 55%.

### Inputs / Fields
- **Style:** fondo trasparente, bordo di 1px verde abete al 30%, angoli vivi, padding 12px 16px, Barlow 1rem. L'etichetta sta sopra, in Barlow 0.875rem.
- **Focus:** il bordo diventa verde abete pieno, più l'anello di focus globale; nessun glow.
- **Error:** messaggio testuale con `role="alert"` e link di ripiego all'email; nessun rosso.

### Cards / Containers
- **Work card:** fondo crema, angoli vivi, divise da filetti di 1px (la griglia mostra il verde al 10%). Se il progetto ha foto, la prima occupa la testa della card in 4:3 e in hover si ingrandisce del 3%. Poi, con padding di 32px: anno e settore in Condensed diluito, nome del cliente in Title, contributo strategico (`focus`) in Condensed verde abete, descrizione in Barlow piccolo diluito e "Vedi il progetto →" sempre visibile. In hover la card si solleva di 6px e compare il bordo verde, che compare anche con il focus da tastiera. In home mostra 6 casi più il link "Tutti gli N lavori".
- **Service row:** fondo crema su sezione velina, padding 32–48px, 3 colonne: titolo e per chi è / descrizione / deliverable con punti verdi.
- **Stat:** numero in Playfair 900 italic verde abete, didascalia in Condensed maiuscolo sbiadito; griglia 2×2 su mobile, 4 colonne da `md`.

### Focus
Un solo anello per tutto il sito: `:focus-visible` con outline di 2px verde abete e offset di 3px. Sulle superfici `[data-surface="dark"]` l'anello diventa terracotta chiara. Nessun componente spegne l'outline senza un sostituto.

### Testimonianza in evidenza
Subito dopo i loghi: una citazione in Playfair 400 italic (`clamp(1.35rem, 2.4vw, 2rem)`), una virgoletta terracotta da 7rem a sinistra (solo da `md`), poi foto quadrata da 56px con nome e ruolo. Niente card e niente fondo: è testo su carta.

### Contatti
Superficie scura. Un'azione principale (la call Cal.com in verde abete pieno con "Senza impegno" sotto), poi tre passi numerati in Playfair terracotta (Ci sentiamo · Ti mando una proposta · Si parte), poi l'email con il pulsante "Copia email" e, in piccolo, WhatsApp, telefono e LinkedIn.

### Navigation
Barra fissa da 64px con margini di 32/80px. Logo a barca da 36px + nome in Playfair italic (da `sm`). Link in Condensed maiuscolo 0.875rem, tracking 0.18em, inchiostro diluito; in hover passano a inchiostro e una sottolineatura verde di 1px cresce da sinistra in 300ms. A destra il CTA outline. Su mobile c'è un hamburger a tre linee (44px di area di tocco) che apre un overlay crema a tutto schermo con le voci in Playfair 2.25rem.

### Ornamento di sezione (signature)
`── 01 · Etichetta ──`: due filetti di 1px che sfumano verso il centro in terracotta al 35%, e al centro un numero a due cifre più l'etichetta in Barlow Condensed 700, 0.75rem, tracking 0.45em, terracotta. Apre ogni sezione principale e appare con un fade-up di 0.6s quando entra nel viewport.

### Hero "Mare Verde" con la barca (signature, home)
`HeroVerde`: uno shader warp (`AdaptiveWarp`, forma "checks") nei colori notte di bosco → verde abete → salvia → terracotta, sopra una sfumatura radiale verde scuro (`#1e3d18` → `#060f04`) e un alone caldo di terracotta al 18%. Il claim è centrato in Display crema (`clamp(2rem, 7.5vw, 8rem)`, max 22ch). Attorno al claim gira il logo a barca a vela, che compie un'orbita ellittica in 22s e ondeggia; con `prefers-reduced-motion` resta ferma sopra il titolo. Sopra c'è l'etichetta con nome e ruolo in terracotta chiara bold, sotto un divisore terracotta di 56px, una riga in Barlow crema all'82% (max 38ch) che spiega cosa fai e dove, e due CTA: pieno terracotta con testo inchiostro (5.2:1) e link crema con sottolineatura terracotta. Le entrate sono in CSS (`hero-fade-up`, scalate da 0.4s a 1.55s).

`Hero.tsx`, la nebulosa WebGL verde con CTA verde, oggi è usato solo nelle anteprime: non è il riferimento della home.

### Motion
Scroll morbido Lenis, reveal GSAP/ScrollTrigger (fade + 10–20px di traslazione, `power3.out`, 0.6–0.7s, una sola volta), transizioni di colore a 300ms, marquee dei lavori in loop, barra di avanzamento dello scroll, cursore custom. Tutte le entrate CSS si disattivano con `prefers-reduced-motion`.

## Do's and Don'ts

### Do:
- **Do** usare Playfair Display 900 italic per ogni titolo, Barlow per il testo e Barlow Condensed maiuscolo spaziato per etichette e azioni.
- **Do** aprire ogni sezione principale con un Ornamento numerato in terracotta.
- **Do** alternare sezioni crema (`#F5F0E8`) e velina (`#EDE8DC`) e separare le card con filetti di 1px, non con ombre.
- **Do** colorare tutte le azioni (pulsanti, link attivi, hover) in verde abete `#3D5C35`.
- **Do** dare profondità con `WarpShadow` o con lo shader, seguendo la Regola dello Shader Responsabile (prima un fallback statico, con mobile e reduced motion gestiti).
- **Do** usare per il testo da leggere solo inchiostro o inchiostro diluito (≥ 4.5:1).

### Don't:
- **Don't** farlo sembrare un template da freelance: niente foto profilo in un cerchio, niente griglie di icone per i servizi, niente layout da tema WordPress.
- **Don't** arrotondare angoli o aggiungere `box-shadow` a card, pulsanti o input.
- **Don't** usare bianco puro (`#FFFFFF`) o nero puro come superficie.
- **Don't** usare la terracotta per pulsanti o link sulla carta (è l'accento d'azione solo sui fondi notturni dell'hero), né introdurre un secondo accento caldo.
- **Don't** usare terracotta, salvia o inchiostro sbiadito per paragrafi o testo informativo lungo.
- **Don't** mettere titoli in Playfair tondo o in peso medio, o il Barlow Condensed in minuscolo.
