export type ThinkingPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  content: string;
  heroImage?: string;
  heroImageMobile?: string;
};

export const thinkingPosts: ThinkingPost[] = [
  {
    slug: 'meta-ads-non-convertono',
    title: 'Perché le tue campagne Meta non convertono (e non è colpa del budget)',
    excerpt:
      'Aumenti il budget, i risultati non cambiano. Aumenti ancora, idem. Il problema quasi mai è quanto spendi — è cosa stai amplificando. Una lettura pratica su dove si rompe la catena.',
    category: 'Digital Marketing',
    readTime: '7 min',
    date: '2026-06-20',
    content: `Scenario tipico: spendi 500 euro al mese su Meta, i risultati sono deludenti, e la soluzione che ti viene proposta è aumentare il budget. Metti altri 200 euro. I risultati migliorano un po', ma non abbastanza. Metti altri 300. A quel punto stai spendendo mille euro al mese per numeri che dovrebbero costarti la metà.

Il problema non è il budget. Il problema è che il budget stai amplificando qualcosa che non funziona.

## Meta è un amplificatore, non un generatore di domanda

Questo è il malinteso fondamentale. Meta Ads non crea interesse dove non c'è. Porta il tuo messaggio davanti a persone che potrebbero essere interessate — ma se il messaggio è sbagliato, il targeting è generico o la pagina di destinazione non converte, nessuna spesa pubblicitaria risolve il problema.

L'algoritmo di Meta è diventato molto bravo a trovare le persone giuste. Così bravo che il targeting demografico classico — età, interessi, comportamenti — conta sempre meno rispetto a qualche anno fa. Quello che conta di più è la creatività. Il formato, il copy, il video, la foto. Perché è dalla creatività che l'algoritmo capisce chi risponde, chi clicca, chi compra.

**In pratica: la tua creatività è il tuo targeting.**

Se mostri un'inserzione e risponde un certo tipo di persona, il sistema impara da quel segnale e va a cercare persone simili. Se l'inserzione è generica, attira persone generiche. Se è precisa, attira persone precise.

## Il messaggio che parla a tutti non parla a nessuno

Il primo posto dove guardare quando una campagna non funziona non è il pubblico — è il messaggio.

Prendi la tua inserzione. Leggila come se non sapessi nulla del tuo brand. Risponde a un problema specifico di una persona specifica? O è una dichiarazione su chi sei e cosa fai?

"Siamo un'azienda specializzata in soluzioni innovative per la comunicazione integrata." È un messaggio. Ma non è rivolto a nessuno in particolare. Non risolve nessun problema. Non crea urgenza. Non motiva nessun clic.

Un messaggio efficace parte dal problema del cliente, non dalle caratteristiche del prodotto. "Hai un negozio fisico ma non sai come portare clienti online?" È diretto. È specifico. Parla a qualcuno che si riconosce in quel problema.

Più il messaggio è preciso, più l'algoritmo trova le persone giuste — perché chi risponde è esattamente il tuo cliente ideale.

## Stai ottimizzando per la metrica sbagliata

Secondo errore classico: scegliere l'obiettivo sbagliato al momento della creazione della campagna.

Meta ti chiede cosa vuoi ottenere: traffico, visualizzazioni, lead, acquisti. Molti scelgono traffico perché costa meno e i numeri sembrano migliori. CPM basso, tanti clic, tanta gente sul sito. Poi però nessuno compra, nessuno lascia il contatto, e il problema sembra il sito o l'offerta.

Il problema è a monte. Stai ottimizzando per la metrica sbagliata. Meta porta traffico quando chiedi traffico. Ma chi clicca su un'inserzione ottimizzata per traffico non è necessariamente qualcuno disposto ad acquistare — è qualcuno disposto a cliccare. L'algoritmo sa esattamente cosa stai cercando e lo trova.

**Ottimizza sempre per l'azione che vuoi che le persone facciano.** Se vuoi lead, usa l'obiettivo lead generation con il form nativo di Meta. Se vuoi acquisti, usa conversioni con il pixel configurato correttamente e gli eventi di acquisto tracciati. Costa di più a breve termine, ma il sistema impara a trovare persone che effettivamente agiscono — non solo persone che cliccano.

## Il clic è solo l'inizio

Anche con il messaggio giusto e l'obiettivo corretto, le campagne falliscono se la pagina di destinazione non è allineata con l'inserzione.

Allineamento significa che chi arriva sulla pagina dopo aver cliccato trova esattamente quello che l'inserzione prometteva. Stesso linguaggio, stessa offerta, stesso tono, stessa promessa visiva. Nessun salto logico tra il prima e il dopo.

Se l'inserzione parla di uno sconto del 20% e la pagina non lo menziona immediatamente, hai già perso. Se l'inserzione è visivamente moderna e il sito sembra fermo al 2015, hai già perso. Se la call to action dell'inserzione è "scopri di più" ma la pagina chiede subito i dati di pagamento, hai già perso.

Il percorso dall'inserzione alla conversione deve essere fluido, coerente, senza attrito. Ogni discontinuità si traduce in abbandono — e in soldi spesi per niente.

## Il budget come leva, non come soluzione

Una volta che hai un messaggio preciso, l'obiettivo giusto e una landing page che converte, allora il budget diventa una leva reale. Puoi aumentarlo con ragionevole certezza che i risultati scalino in modo proporzionale.

Ho lavorato su una campagna di lead generation dove il costo per lead era quasi tre volte il benchmark di settore. Non abbiamo aumentato il budget. Abbiamo riscritto il copy, cambiato il formato (da statico a video breve di 15 secondi), allineato la landing page al messaggio dell'inserzione. Il CPL è sceso del 73% in sei settimane — con lo stesso identico budget di partenza.

L'efficienza non viene dai soldi. Viene dalla coerenza tra messaggio, creatività e destinazione.

## Da dove iniziare

Se le tue campagne non performano, prima di toccare il budget fai queste tre cose.

**Rivedi il messaggio.** Chi è la persona specifica che stai cercando di raggiungere? Qual è il problema concreto che stai risolvendo? Il tuo copy parte da lì o parte da te?

**Controlla l'obiettivo di campagna.** Stai ottimizzando per l'azione che vuoi o per una metrica che sembra buona ma non è quella che conta?

**Verifica la coerenza.** Clicca sulla tua inserzione come se fossi un cliente. Cosa trovi dall'altra parte? È quello che ti aspettavi?

Il budget viene dopo. Prima si sistema la macchina.`,
  },
  {
    slug: 'ai-comportamento-utenti-2026',
    title: "Come l'AI sta cambiando il comportamento degli utenti nel 2026",
    heroImage: '/thinking/ai-comportamento-utenti-2026.jpg',
    heroImageMobile: '/thinking/ai-comportamento-utenti-2026-mobile.jpg',
    excerpt:
      "Nel 2026 le persone non cercano più solo su Google. Cercano su ChatGPT, Perplexity, Gemini. Il modo in cui i brand vengono trovati — o ignorati — sta cambiando in modo strutturale. Ecco cosa sta succedendo e cosa fare.",
    category: 'AI & Marketing',
    readTime: '6 min',
    date: '2026-06-14',
    content: `Per anni il ragionamento era semplice: vuoi essere trovato online? Fai SEO. Ottimizza il sito, scala le SERP di Google, genera traffico organico.

Quel modello non è morto. Ma non è più l'unico che conta.

## Il cambiamento che pochi hanno capito

Nel 2024 e 2025 una parte significativa delle ricerche si è spostata fuori da Google. ChatGPT ha superato 300 milioni di utenti attivi settimanali. Perplexity gestisce miliardi di query al mese. Gemini è integrato direttamente in Android e Chrome.

**Le persone non cercano più solo su Google. Chiedono direttamente alle AI.**

E le AI non restituiscono dieci link blu. Restituiscono una risposta. Un testo. Spesso senza link. Spesso senza citare fonti in modo esplicito.

Questo cambia tutto per chi fa comunicazione e marketing.

## Cosa sta cambiando nel comportamento di ricerca

Il pattern classico era: digito una query → leggo i titoli → clicco il link più rilevante → arrivo sul sito → mi convinco → converto.

Il nuovo pattern, per molte query, è: chiedo all'AI → ricevo una risposta sintetica → decido senza mai visitare un sito.

**Il tuo sito potrebbe non essere mai visitato, anche se l'AI ti cita.**

E se l'AI non ti cita? Non esisti. Non per quella persona, in quel momento, per quella domanda.

Il problema è che la maggior parte dei brand sta ancora ottimizzando per il vecchio comportamento. Pensa a Google, pensa ai click, pensa al traffico organico. Mentre il comportamento reale degli utenti si è già spostato altrove.

## GEO: il nuovo campo da gioco

Si chiama **GEO — Generative Engine Optimization** — ed è la disciplina che si occupa di ottimizzare la presenza di un brand nelle risposte dei motori generativi: ChatGPT, Perplexity, Gemini, Claude, Copilot.

Non è la morte della SEO. È il suo allargamento obbligatorio.

La SEO tradizionale ottimizza per gli algoritmi di ranking di Google: link, autorità di dominio, keyword density, tempo sul sito, Core Web Vitals.

La GEO ottimizza per il modo in cui i modelli linguistici selezionano, valutano e citano le fonti quando generano una risposta. Le logiche sono diverse — e spesso opposte.

**Per la SEO conta avere tanti link in entrata. Per la GEO conta essere citato da fonti che i modelli considerano autorevoli.** Non basta un sito tecnicamente ottimizzato: serve una reputazione distribuita, coerente, citabile.

## Il problema concreto delle PMI

Le grandi aziende si stanno attrezzando. Hanno team dedicati, consulenti specializzati, budget per costruire autorevolezza su più canali.

Le PMI, i freelance, i professionisti locali? La maggior parte non sa ancora che il problema esiste.

Fai una prova concreta: vai su ChatGPT o Perplexity e cerca il tuo nome, il nome della tua azienda, oppure una domanda che i tuoi clienti potrebbero fare per trovarti. Cosa risponde?

Se non compari — o se compari in modo inesatto — stai già perdendo visibilità su una quota crescente di ricerche.

## Cosa fare adesso

Non serve rivoluzionare tutto dall'oggi al domani. Serve capire dove si è e cosa manca.

**Costruisci autorevolezza citabile.** Scrivi contenuti specifici su temi in cui hai esperienza reale. Non guide generiche intercambiabili, ma punti di vista precisi, dati, esperienze dirette. Le AI tendono a citare fonti con un profilo chiaro e riconoscibile, non contenuti che potrebbero venire da chiunque.

**Ottimizza la struttura delle informazioni.** FAQ chiare, dati strutturati (schema.org), titoli descrittivi, credenziali leggibili. I modelli AI estraggono le informazioni in modo diverso da Google: privilegiano la chiarezza strutturale rispetto alla densità di keyword.

**Cura la tua presenza esterna.** LinkedIn, menzioni su siti di settore, articoli guest, interviste. La GEO si costruisce anche — e soprattutto — fuori dal tuo sito. Un brand citato da altri è molto più credibile agli occhi dei modelli generativi rispetto a uno che parla solo di sé stesso.

**Monitora come vieni percepito.** Questa è la parte che quasi nessuno fa: capire sistematicamente come i principali modelli AI descrivono il tuo brand, in quali contesti ti citano, con quale frequenza.

## Citationrate: lavorare su questo dall'interno

Ho fondato **[Citationrate](https://citationrate.com)** nel gennaio 2026 esattamente per questo motivo: dare alle aziende uno strumento concreto per misurare e migliorare la propria visibilità nei motori generativi.

Il nome dice tutto: non basta essere online, bisogna essere *citati*. La citation rate — la frequenza con cui un brand viene menzionato nelle risposte AI — è diventata una metrica che chi fa marketing non può più ignorare.

Il mercato della GEO è ancora agli inizi in Italia. Chi costruisce autorevolezza citabile adesso ha un vantaggio reale su chi aspetta che il tema diventi mainstream.

Se vuoi capire come integrare la GEO nella tua strategia di comunicazione, parti dalla sezione [servizi](/servizi) — o dai un'occhiata a come ho applicato questi principi nei [progetti che ho seguito](/lavori).`,
  },
  {
    slug: 'geo-vs-seo',
    title: 'GEO vs SEO: differenze e opportunità',
    excerpt:
      'GEO e SEO non sono la stessa cosa. La SEO ti fa trovare su Google. La GEO ti fa citare da ChatGPT, Perplexity e Gemini. Nel 2026, hai bisogno di entrambe — ma non molti lo sanno ancora.',
    category: 'AI & Marketing',
    readTime: '5 min',
    date: '2026-06-15',
    content: `Negli ultimi due anni, una nuova sigla ha iniziato a circolare nel mondo del marketing digitale: GEO. Generative Engine Optimization.

Se stai lavorando sulla visibilità online della tua azienda e non hai ancora sentito parlare di GEO, questo articolo è per te.

## Cosa significa SEO (e cosa non è più sufficiente)

La SEO — Search Engine Optimization — è la disciplina che ottimizza un sito per apparire nei risultati di Google e degli altri motori di ricerca tradizionali.

Per trent'anni ha funzionato così: l'utente digita una query → Google restituisce una lista ordinata di link → l'utente clicca sul risultato più rilevante → visita il sito.

La SEO ottimizza ogni passaggio di questo processo: la pertinenza della pagina, l'autorevolezza del dominio, la velocità di caricamento, i link in entrata, la struttura dei contenuti.

È ancora necessaria. Ma non è più sufficiente da sola.

## Cosa cambia con i motori generativi

Dal 2023 in poi, una parte crescente delle ricerche passa attraverso strumenti come ChatGPT, Perplexity, Gemini, Claude e Google AI Overview.

Questi strumenti non restituiscono una lista di link. **Generano una risposta.** Un testo. Spesso senza fonti cliccabili. Spesso senza portare traffico al sito.

Il comportamento dell'utente cambia: invece di digitare una query e scorrere i risultati, chiede direttamente all'AI. Se non sei nella risposta, non esisti per quell'utente in quel momento.

## GEO: ottimizzare per essere citati, non solo trovati

La GEO si occupa di aumentare la probabilità che un brand, un professionista o un prodotto venga **menzionato nelle risposte dei motori generativi**.

Non si tratta di "fregare" l'algoritmo. Si tratta di diventare genuinamente la risposta più credibile per certe domande.

Le differenze pratiche:

**SEO** → ottimizza per keyword e posizione su Google.
**GEO** → ottimizza per citabilità e rilevanza nei modelli linguistici.

**SEO** → misura posizioni, click e traffico organico.
**GEO** → misura citation rate, frequenza di menzione e contesto delle risposte AI.

**SEO** → dipende soprattutto da ciò che c'è sul tuo sito.
**GEO** → dipende da ciò che c'è sul tuo sito **più** da ciò che gli altri dicono di te.

## Cosa conta per la GEO

I modelli AI selezionano le fonti da citare sulla base di fattori che la SEO tradizionale non considera:

**Presenza esterna coerente.** Menzioni su LinkedIn, articoli di settore, interviste, Wikipedia. I modelli "conoscono" il web che hanno visto durante il training e aggiornano periodicamente.

**Chiarezza dell'identità.** Un brand con un profilo definito — chi è, cosa fa, per chi — è più facile da citare correttamente rispetto a uno generico.

**Struttura dei contenuti.** FAQ chiare, dati strutturati (schema.org), definizioni. I modelli preferiscono fonti facili da leggere e sintetizzare.

**Specificità e autorevolezza.** Un articolo che approfondisce davvero un tema ha più probabilità di essere citato rispetto a contenuti superficiali ottimizzati solo per keyword.

## SEO e GEO insieme: non un'alternativa

SEO e GEO non si escludono. Si integrano.

Un sito ben ottimizzato per Google è spesso già in buona posizione per la GEO: struttura chiara, contenuti di qualità, autorevolezza. Ma la GEO richiede un passo in più: costruire una **presenza esterna riconoscibile** e curare la citabilità dei propri contenuti.

La strategia più efficace nel 2026 usa entrambe, con priorità diverse:

- Traffico organico e visibilità su Google → **SEO**
- Brand awareness nei motori AI e autorevolezza percepita → **GEO**
- Posizionamento come esperto di settore → **entrambe**

## Il vantaggio di muoversi adesso

In Italia, la GEO è ancora un territorio poco presidiato. La maggior parte delle agenzie e dei professionisti parla ancora solo di SEO.

Chi costruisce autorevolezza citabile adesso — contenuti specifici, presenza esterna coerente, struttura ottimizzata per i modelli AI — ha un vantaggio che tra due anni sarà molto più costoso da recuperare.

È la stessa opportunità che esisteva con la SEO nei primi anni 2000. Tranne che il ciclo si sta accorciando.

Se vuoi capire come integrare SEO e GEO nella tua strategia digitale, guarda la sezione [servizi](/servizi) — in particolare la voce GEO Optimization. Oppure leggi come ho [applicato questi principi sui progetti seguiti](/lavori).`,
  },
  {
    slug: 'brand-prima-dei-contenuti',
    title: "Perché costruisci contenuti prima di avere un brand",
    excerpt:
      "La maggior parte dei brand inizia a postare prima di sapere cosa vuole comunicare. Il risultato è tanto rumore, poco segnale. Ecco il problema e come uscirne.",
    category: 'Brand Strategy',
    readTime: '4 min',
    date: '2025-11-10',
    content: `Ogni giorno vedo brand che aprono un profilo Instagram, iniziano a postare e poi si chiedono perché non funziona.

Il problema non è la frequenza. Non è la qualità delle immagini. Non è l'algoritmo.

Il problema è che stanno costruendo senza fondamenta.

## Il sintomo più comune

Quando inizio una nuova collaborazione, la prima domanda che faccio è semplice: a chi stai parlando e cosa vuoi che pensi di te?

La maggior parte delle persone non sa rispondere. Sa cosa vende. Sa come si chiama. Ma non sa **chi è** il brand, cosa lo rende diverso, quale spazio vuole occupare nella mente delle persone.

Eppure continua a pubblicare contenuti.

Il risultato è quello che vedo ogni giorno: post che cambiano tono settimana per settimana, visual incoerenti, messaggi che parlano a tutti e non convincono nessuno.

## Cosa succede quando costruisci al contrario

Il contenuto senza brand strategy è rumore. Può sembrare attività, ma non produce direzione.

Quando manca un posizionamento chiaro, ogni decisione comunicativa diventa un'opinione. "Questo post mi piace" sostituisce "questo post è coerente con chi siamo". Il risultato è un'identità che cambia a seconda di chi è in ufficio quel giorno.

Nel lungo periodo questo crea confusione. Le persone non capiscono cosa rappresenta il brand, non riescono a ricordarlo, non si fidano.

La **fiducia si costruisce sulla coerenza**. La coerenza si costruisce sulla chiarezza. La chiarezza viene prima dei contenuti.

## Il punto di partenza giusto

Prima di aprire Canva, prima di pianificare il calendario editoriale, devi rispondere a tre domande:

**Chi sei?** Non cosa vendi. Chi sei come brand: quali valori porta, quale punto di vista ha sul mondo, come si distingue da chi fa la stessa cosa.

**A chi parli?** Non "tutti". Un target preciso: cosa vuole, cosa teme, come prende decisioni, dove si informa.

**Perché dovrebbero sceglierti?** Qual è la tua differenza reale, quella che le persone possono percepire e che nessun competitor può copiare facilmente.

Solo quando hai risposte solide a queste tre domande puoi iniziare a costruire contenuti. Perché da quel momento ogni post, ogni storia, ogni campagna ha una direzione.

## La cosa che mi dicono sempre

"Ma non abbiamo tempo per la strategia, dobbiamo iniziare a comunicare."

Lo capisco. La pressione di essere presenti è reale. Ma considera questo: ogni mese che passi a pubblicare senza strategia è un mese in cui stai costruendo un'identità confusa nella mente delle persone. Quella confusione non sparisce quando finalmente decidi di fare le cose per bene. Devi prima disfarla.

Partire con chiarezza non è più lento. È più veloce, perché **ogni decisione che prendi dopo è più semplice**.

## Cosa fare adesso

Se stai pubblicando contenuti senza aver prima definito il tuo brand, non fermarti di colpo. Ma inizia a lavorare in parallelo sulla strategia.

Dedica del tempo a capire chi sei, a chi parli e perché sei diverso. Poi usa queste risposte come filtro per ogni decisione comunicativa che prendi.

Il contenuto smette di essere un'opinione e diventa una scelta coerente.

Se vuoi capire come questo principio si applica in pratica, puoi leggere i [servizi che offro](/servizi) o vedere come ho lavorato su alcuni [progetti reali](/lavori).`,
  },
  {
    slug: 'local-seo-vale-ancora',
    title: "La SEO locale vale ancora (anzi, vale di più)",
    excerpt:
      "Con l'esplosione di Google AI Overview molti pensano che la SEO sia morta. Per i business locali è il contrario: chi presidia bene il territorio digitale vince.",
    category: 'Digital Marketing',
    readTime: '5 min',
    date: '2025-10-22',
    content: `Negli ultimi mesi ho sentito la stessa domanda almeno venti volte: con Google AI Overview, ha ancora senso fare SEO?

La risposta dipende da cosa intendi per SEO. Per i business locali, la risposta è sì. Anzi, il momento è particolarmente favorevole.

## Cosa sta cambiando

Google sta inserendo risposte generate dall'AI in cima ai risultati per molte ricerche informative. "Come funziona il metabolismo", "qual è la capitale della Finlandia", "cos'è il marketing mix" — per questi tipi di query l'AI risponde direttamente e molte persone non cliccano oltre.

Per i business locali, questa dinamica cambia poco.

Quando qualcuno cerca "idraulico a Milano" o "ristorante vicino a me" o "fisioterapista Bologna", Google non risponde con un paragrafo generato dall'AI. Risponde con una mappa, con tre schede Google Business, con risultati locali.

Quella sezione — il **Local Pack** — è ancora pienamente umana e ancora pienamente cliccabile.

## Perché vale di più adesso

I competitor che si aggiornano lentamente stanno spostando tempo e risorse sulla creazione di contenuti generici, convinti che sia l'unico modo per posizionarsi online.

Nel frattempo, la SEO locale rimane sottovalutata da molti. Chi presidia bene il territorio digitale — profilo Google Business ottimizzato, recensioni aggiornate, NAP coerente ovunque, contenuti localizzati sul sito — ha un vantaggio reale su chi non lo fa.

È uno spazio **meno affollato di quanto sembri**.

## Cosa funziona oggi

Dalla mia esperienza, i fattori che fanno davvero la differenza:

**Google Business Profile.** Non basta averlo. Devi tenerlo aggiornato: foto recenti, orari corretti, risposta alle recensioni, descrizione che include le keyword locali.

**Recensioni.** Google le legge e le pesa. Avere 50 recensioni recenti vale più di avere 200 recensioni di tre anni fa. Crea un processo per raccoglierle sistematicamente, non aspettare che arrivino da sole.

**Coerenza NAP.** Nome, Indirizzo, Numero di telefono devono essere identici su ogni piattaforma: sito, Google Business, Facebook, directory di settore. Se variano, Google perde fiducia nella tua scheda.

**Contenuti localizzati.** Una pagina del tuo sito dedicata alla città in cui operi, con contenuto specifico e non copiato da template, rafforza la rilevanza geografica agli occhi di Google.

## Una cosa che molti ignorano

L'arrivo degli AI Overview sta portando il traffico qualificato ancora più verso i risultati locali. Se qualcuno fa una ricerca informativa e l'AI risponde, quella persona ha già capito cosa vuole. Quando poi cerca il professionista nella sua città, è già pronto a contattare.

**Il funnel si sta accorciando.** Chi presidia bene la SEO locale intercetta persone più vicine alla decisione d'acquisto.

## Il punto

Non sto dicendo che la SEO locale sia semplice o che funzioni senza lavoro costante. Dico che è uno strumento ancora molto efficace, spesso sottovalutato, e che il momento attuale crea opportunità reali per chi decide di investirci.

Se hai un business locale e non hai ancora ottimizzato la tua presenza su Google, stai lasciando traffico qualificato ai competitor.

Vuoi capire come integrare la SEO locale in una strategia di comunicazione più ampia? Trovi il mio approccio nella sezione [servizi](/servizi).`,
  },
  {
    slug: 'social-media-non-e-strategia',
    title: "Essere sui social non è una strategia",
    excerpt:
      "Avere un profilo Instagram non significa fare marketing. Ti spiego la differenza tra presenza e strategia, e perché la confusione costa cara.",
    category: 'Social Media',
    readTime: '3 min',
    date: '2025-09-15',
    content: `Il brief più comune che ricevo è questo: "Dobbiamo migliorare i nostri social."

Quasi sempre, la conversazione che segue rivela un problema diverso: non i social, ma la mancanza di una strategia di comunicazione.

## La confusione di fondo

Quando parliamo di "fare social", intrecciamo due cose diverse: uno strumento e un obiettivo.

I social media sono uno **strumento**. Come l'email marketing, come la pubblicità online, come il sito web. Sono un canale attraverso cui puoi raggiungere le persone.

Una **strategia di comunicazione** è un'altra cosa. È la risposta alle domande: cosa vuoi comunicare, a chi, con quale obiettivo, con quale tono, in quale momento del funnel.

Puoi usare uno strumento senza avere una strategia. Il risultato sarà casuale.

## Cosa succede senza strategia

Ho visto aziende con profili Instagram da 10.000 follower che non generano nessun contatto commerciale. E ho visto profili da 800 follower che portano clienti ogni mese.

La differenza non è la dimensione del pubblico. È la chiarezza del messaggio e la coerenza tra chi sei, cosa pubblichi e chi stai cercando di raggiungere.

Senza questa chiarezza pubblichi perché "bisogna essere presenti". Pubblichi quello che ti sembra interessante in quel momento. Cambi registro ogni settimana. Insegui i trend senza capire se sono rilevanti per il tuo brand.

Il pubblico non capisce cosa sei. Non si ricorda di te. Non ti segue per un motivo preciso.

## La domanda giusta da fare

Prima di decidere se aprire TikTok, se postare tre volte a settimana o se investire in sponsorizzate, devi rispondere a una domanda sola:

**Cosa vuoi che le persone pensino, sentano o facciano dopo aver interagito con i tuoi contenuti?**

Se non hai una risposta chiara a questa domanda, qualsiasi decisione tattica è prematura.

Se invece hai una risposta — "voglio che capiscano che sono il più competente in questo settore" oppure "voglio che si fidino di me prima ancora di contattarmi" — allora puoi scegliere lo strumento giusto, il formato giusto, il tono giusto.

## Il social giusto non esiste

Una delle domande più frequenti: su quale social dovrei essere?

Dipende completamente da chi stai cercando di raggiungere. TikTok e LinkedIn non sono equivalenti. Instagram e Facebook non hanno lo stesso pubblico. Un business B2B e uno B2C non usano gli stessi canali.

**Prima definisci il target. Poi vai dove sta il tuo target.**

## Presenza vs. strategia

Essere "presenti" sui social senza una strategia è un costo, non un investimento. Costa tempo per produrre contenuti, costa energie per gestire i commenti, costa attenzione per stare dietro ai cambiamenti degli algoritmi.

Tutto questo costo, senza un ritorno misurabile, genera frustrazione. E spesso porta a smettere proprio quando si stava iniziando a costruire qualcosa.

La differenza tra presenza e strategia è che la seconda ha un obiettivo chiaro, una misura del successo e una logica che connette ogni singolo contenuto a quell'obiettivo.

## Cosa fare

Non ti dico di smettere di pubblicare. Ti dico di fermarti un momento prima di farlo e rispondere a queste domande: chi legge quello che pubblichiamo? Cosa vogliamo che pensi di noi? Qual è il passo successivo che speriamo faccia?

Se le risposte cambiano ogni settimana, hai un problema di strategia, non di contenuti.

Vedi come ho affrontato questa sfida per alcuni dei [brand con cui ho lavorato](/lavori).`,
  },
  {
    slug: 'tono-di-voce-dimenticato',
    title: "Il tono di voce è l'identità che tutti dimenticano",
    excerpt:
      "Logo, colori, font: il kit base di ogni brand. Ma il modo in cui parli dice chi sei più di qualsiasi elemento visivo. Perché il tono di voce è il vero differenziatore.",
    category: 'Brand Strategy',
    readTime: '4 min',
    date: '2025-08-30',
    content: `Quando parliamo di identità di brand, la conversazione finisce quasi sempre allo stesso posto: logo, colori, font.

Il manuale del brand viene consegnato. Il team lo adotta. Le presentazioni diventano più coerenti, i post più riconoscibili.

E poi il brand apre la bocca.

## Il punto che manca

Il **tono di voce** è il modo in cui un brand comunica verbalmente: le parole che sceglie, la lunghezza delle frasi, il livello di formalità, l'umorismo (o la sua assenza), la struttura dei testi.

È l'equivalente verbale dell'identità visiva. Ed è sistematicamente trascurato.

Ho visto brand con identità visive impeccabili che usano un linguaggio piatto, generico, intercambiabile con qualsiasi competitor. Potrebbe scriverlo chiunque — e spesso è esattamente quello che succede: lo scrive chiunque sia disponibile quel giorno.

## Perché il tono di voce è il vero differenziatore

Il tuo logo può assomigliare ad altri. I tuoi colori sono scelti da migliaia di brand. Il tuo prodotto può essere replicato.

**Il modo in cui parli è più difficile da copiare.** Perché è una scelta culturale. Riflette chi siete davvero come organizzazione, come pensate, come vi rapportate con il vostro pubblico.

Pensa ai brand che riconosci anche solo dal testo, senza vedere il logo. Quella riconoscibilità verbale è costruita nel tempo attraverso un tono consistente. Non è un caso. È una scelta.

## Cosa definisce il tono di voce

Non si tratta solo di essere "formali" o "informali". Il tono di voce è un sistema più articolato che include:

**Personalità.** Il brand è autorevole, accessibile, provocatorio, rassicurante? Queste non sono opzioni estetiche: emergono da chi sei e da chi vuoi attrarre.

**Lessico.** Le parole che scegli segnalano appartenenza. Un brand nel settore tech e uno nell'artigianato non usano le stesse parole, anche se parlano alla stessa persona.

**Ritmo.** Frasi brevi e dirette danno un'impressione diversa rispetto a frasi elaborate. Entrambe possono funzionare, ma devono essere una scelta consapevole, non il risultato di chi ha scritto quel giorno.

**Punto di vista.** I brand più memorabili hanno un'opinione. Non sono neutrali. Dicono cosa pensano, anche quando è scomodo.

## L'errore più comune

Il tono di voce viene definito una volta, scritto in un documento e poi ignorato.

Il problema è che non può essere delegato a un documento. Deve essere interiorizzato da chi scrive i testi, da chi risponde ai commenti, da chi manda le email commerciali.

Un brand che parla con un tono nei post, un altro nelle email e un altro ancora nelle telefonate di vendita non ha un'identità coerente. Ha tre frammenti di identità che si contraddicono.

## Come iniziare

Non serve un lavoro enorme. Inizia con tre cose:

**Definisci cosa NON sei.** I confini negativi sono spesso più utili di quelli positivi. Se sai che il tuo brand non è mai condiscendente, non usa gergo tecnico inaccessibile e non finge entusiasmo che non ha, hai già eliminato molte scelte sbagliate.

**Scrivi esempi concreti.** Non solo aggettivi — "siamo diretti, caldi, professionali" — ma frasi reali. "Invece di *Si prega di contattare il nostro servizio assistenza* scriviamo *Scrivici, ti rispondiamo entro 24 ore*."

**Testa con chi scrive davvero.** Il documento di tono di voce deve essere usabile da chi produce i contenuti ogni giorno, non solo da chi lo ha scritto.

## Perché vale l'investimento

Il tono di voce costruisce fiducia nel tempo. Le persone riconoscono il brand, si abituano al suo modo di parlare, si aspettano una certa esperienza.

Quella familiarità — quella sensazione di "questo brand parla come me" — è uno degli asset più duraturi che puoi costruire. Ed è uno dei pochi che non puoi comprare con un aumento del budget advertising.

La definizione del tono di voce fa parte del lavoro che svolgo nella [Brand Strategy](/servizi). Se vuoi capire come funziona nel concreto, puoi partire da lì.`,
  },
  {
    slug: 'comparire-risposte-chatgpt',
    title: 'Come far comparire la tua azienda nelle risposte di ChatGPT',
    excerpt:
      "Sempre più persone chiedono direttamente a ChatGPT quale azienda contattare. Ecco cosa puoi fare concretamente per aumentare le probabilità di essere citato, passo dopo passo.",
    category: 'AI & Marketing',
    readTime: '5 min',
    date: '2026-06-16',
    content: `Prova un esperimento. Apri ChatGPT e chiedigli di consigliarti un'azienda nel tuo settore, nella tua città. Leggi la risposta.

Se la tua azienda non compare, hai appena visto in pratica il problema che migliaia di PMI italiane non sanno ancora di avere.

## Perché succede

ChatGPT, Perplexity e Gemini non funzionano come Google. Non restituiscono una lista di siti da cui scegliere: generano una risposta sintetica, basata su ciò che il modello "conosce" — i dati di addestramento e, per gli strumenti con accesso al web, le fonti che riesce a recuperare in tempo reale.

Se il tuo brand non è mai stato descritto in modo chiaro da fonti che il modello considera attendibili, semplicemente non ha materiale da cui generare una citazione corretta.

**Non è un problema di pubblicità. È un problema di informazioni disponibili e di come sono strutturate.**

## Cosa puoi controllare davvero

Non puoi "pagare" per apparire in una risposta di ChatGPT come fai con gli Ads su Google. Ma puoi influenzare in modo concreto la probabilità di essere citato.

**1. Scrivi una pagina "Chi siamo" che risponda a domande precise.** Non una descrizione generica ("siamo leader nel settore da 20 anni"), ma fatti verificabili: cosa fai esattamente, per chi, dove operi, da quando. I modelli AI privilegiano informazioni concrete e verificabili rispetto al linguaggio marketing vago.

**2. Aggiungi dati strutturati (schema.org) al tuo sito.** Markup come Organization, LocalBusiness, FAQPage aiutano i sistemi automatici — sia i crawler di Google sia quelli usati per addestrare e aggiornare i modelli AI — a interpretare correttamente chi sei e cosa offri.

**3. Costruisci una sezione FAQ reale.** Le domande frequenti, scritte in modo naturale e con risposte dirette, sono uno dei formati che i modelli generativi "leggono" più facilmente quando devono sintetizzare informazioni su un'azienda.

**4. Cura le menzioni esterne.** Una scheda Google Business completa, un profilo LinkedIn aggiornato, articoli o interviste su testate di settore, una pagina Wikipedia (se applicabile). Ogni fonte esterna coerente aumenta la probabilità che il tuo brand venga "riconosciuto" come affidabile.

**5. Sii specifico, non generico.** "Agenzia di marketing a Belluno" è una frase che potrebbe scrivere chiunque. "Consulente che ha seguito 8 brand in settori diversi, dall'inclusione sociale all'e-commerce" è una frase che descrive un'identità riconoscibile. I modelli AI tendono a citare fonti con un profilo distintivo, non intercambiabile.

## Quanto tempo ci vuole

Non è un interruttore che si accende. ChatGPT e gli altri modelli aggiornano periodicamente la loro "conoscenza" del web, non in tempo reale. Lavorando con costanza su contenuti e presenza esterna, i primi segnali si vedono di solito in due o tre mesi.

## Come misurarlo

La parte più trascurata: quasi nessuno controlla sistematicamente come viene descritto dai motori AI. Ho fondato **[Citationrate](https://citationrate.com)** proprio per questo: monitorare nel tempo la "citation rate" di un brand — quanto spesso, in che contesto e con quale precisione viene citato da ChatGPT, Perplexity e Gemini.

Senza una misurazione, lavori al buio: non sai se i cambiamenti che fai stanno funzionando o non stanno avendo alcun effetto.

## Il punto

Essere citati da ChatGPT non è più un dettaglio tecnico per pochi addetti ai lavori. È un canale di visibilità che sta crescendo mentre la SEO tradizionale rimane importante ma non più sufficiente da sola.

Chi inizia a lavorarci ora, in un mercato ancora poco presidiato, costruisce un vantaggio difficile da recuperare in seguito per chi aspetta.

Se vuoi capire come applicare questi principi alla tua azienda, guarda la sezione [GEO Optimization a Belluno](/belluno/geo) o leggi l'approfondimento su [GEO vs SEO](/thinking/geo-vs-seo).`,
  },
];

export function getPost(slug: string): ThinkingPost | undefined {
  return thinkingPosts.find((p) => p.slug === slug);
}
