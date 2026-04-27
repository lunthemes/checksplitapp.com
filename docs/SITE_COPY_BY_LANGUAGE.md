# CheqSplit – toate textele de pe site (export automat)

**Regenerare:** `npm run site-copy` (sau `npx tsx scripts/site-copy-export.ts`) — sursa este `src/i18n/dictionaries/*.ts`.

**Structură:** un antet `## cod — nume` per limbă, apoi `###` pentru fiecare secțiune (meta, nav, header, hero, features, how, useCases, cta, faq, footer, a11y).

**Index (cod):** `en` (English) · `ro` (Română) · `fr` (Français) · `de` (Deutsch) · `es` (Español) · `it` (Italiano) · `pl` (Polski) · `ru` (Русский) · `hu` (Magyar) · `tr` (Türkçe)

---

## Comutator limbă — `src/i18n/config.ts`

| Cod | Denumire | Steag | Etichetă (picker) | Scurt |
|-----|----------|-------|-------------------|------|
| en | English | 🇬🇧 | Language | EN |
| ro | Română | 🇷🇴 | Limbă | RO |
| ru | Русский | 🇷🇺 | Язык | RU |
| fr | Français | 🇫🇷 | Langue | FR |
| de | Deutsch | 🇩🇪 | Sprache | DE |
| es | Español | 🇪🇸 | Idioma | ES |
| it | Italiano | 🇮🇹 | Lingua | IT |
| pl | Polski | 🇵🇱 | Język | PL |
| hu | Magyar | 🇭🇺 | Nyelv | HU |
| tr | Türkçe | 🇹🇷 | Dil | TR |

---

## Text static brand — `src/data/landing.ts`

- **Nume aplicație / text logo:** CheqSplit

---

## `en` — English

### `meta`
- **title:** CheqSplit: Split Expenses, Scan Receipts & Track Group Bills
- **description:** Split expenses, scan receipts, and track shared bills. CheqSplit shows who owes whom after restaurants, trips, groceries, and any group plan—without spreadsheet chaos.
- **ogDescription:** Split expenses fairly: scan receipts, track shared expenses, and see who owes whom. Made for restaurants, group trips, roommates, and everyday shared costs.
- **twitterDescription:** Split expenses and shared bills without awkward math, screenshots, or spreadsheets—CheqSplit does the work.
- **softwareDescription:** CheqSplit helps you split expenses, scan receipts, track shared bills, and see who owes whom for restaurants, trips, groceries, and group activities.
### `nav`
- **features:** Features
- **how:** How it works
- **useCases:** Use cases
- **faq:** FAQ
### `header`
- **download:** Get the app
### `hero`
- **title:** Split expenses, scan receipts, track shared bills
- **body:** Split expenses, scan receipts, and track what the group spent—so you always see who owes whom after dinner out, a trip, groceries, or a shared night in.
- **alts[0]:** CheqSplit: group trip and shared expenses
- **alts[1]:** CheqSplit mobile app showing shared expenses
- **alts[2]:** CheqSplit: itemized bill split and receipt lines
### `features`
- **title:** Why CheqSplit?
- **Item 1 — title:** Scan receipts fast
  - **desc:** Scan a receipt to pull in line items, taxes, and totals in seconds—no retyping.
- **Item 2 — title:** Split by line item
  - **desc:** Assign each line to the right people instead of splitting everything down the middle.
- **Item 3 — title:** Keep group spending in one place
  - **desc:** Restaurant tabs, trip costs, groceries, and other shared expenses live on one timeline.
- **Item 4 — title:** See who owes whom
  - **desc:** Balances update automatically so everyone knows what to settle and when.
### `how`
- **title:** How CheqSplit works
- **subtitle:** Five clear steps from a new trip to a report everyone can trust.
- **stepPill(n):** For n=1…5 the pill text is: Step 1 · Step 2 · Step 3 · Step 4 · Step 5
- **Step 1**
  - **label:** Start a trip in seconds
  - **body:** Name the trip, invite the group, and you’re in—no endless settings.
  - **imageAlt:** CheqSplit: group trip and shared expenses
  - **bullets[0]:** Set up a trip in moments
  - **bullets[1]:** One-tap invites
  - **bullets[2]:** Works for dinners, weekends away, and more
- **Step 2**
  - **label:** Split shared expenses by item
  - **body:** Line by line, assign the bill to the people who actually ordered it.
  - **imageAlt:** CheqSplit: scan a receipt to split a bill by item
  - **bullets[0]:** Per-line splits
  - **bullets[1]:** Shared plates & custom splits
  - **bullets[2]:** Tips and fees included
- **Step 3**
  - **label:** Track every shared expense
  - **body:** Categorize spending, attach notes, and keep a single running view for the group.
  - **imageAlt:** CheqSplit: mobile screen with shared group expenses
  - **bullets[0]:** Helpful categories
  - **bullets[1]:** Receipts & notes
  - **bullets[2]:** One timeline for the group
- **Step 4**
  - **label:** Settle up with live balances
  - **body:** Balances change as people pay, so you spend less time chasing in the group chat.
  - **imageAlt:** CheqSplit: balance summary showing who owes whom
  - **bullets[0]:** Net balances for each person
  - **bullets[1]:** Optional nudges
  - **bullets[2]:** Export-friendly summaries
- **Step 5**
  - **label:** Share a clean trip report
  - **body:** Charts, totals, and who paid what—ready to send or look back on later.
  - **imageAlt:** CheqSplit: trip report with expense summary
  - **bullets[0]:** Simple visuals
  - **bullets[1]:** Share a link or image
  - **bullets[2]:** Private by design
### `useCases`
- **title:** Built for real shared spending
- **intro:** Whenever you split expenses with others, CheqSplit fits: restaurant checks, group trips, groceries with roommates, family costs, and shopping with friends. Scan the receipt, assign what each person had, add fees or discounts, and get a clear settlement you can all agree on—no back-of-napkin math.
- **Item 1 — title:** Restaurants
  - **desc:** Itemize the check, split by dish, and close the tab fairly.
- **Item 2 — title:** Group trips
  - **desc:** Flights, rooms, and meals in one running total.
- **Item 3 — title:** Home & family
  - **desc:** Groceries, events, and day-to-day household costs.
- **Item 4 — title:** Shared shopping
  - **desc:** Gifts, bulk runs, and projects you split with friends.
### `cta`
- **title:** Ready to split expenses without the stress?
- **body:** Get CheqSplit and make shared bills and group expenses easier for everyone.
- **sectionAria:** Download CheqSplit
- **imgAlt:** CheqSplit home: split shared bills and track group expenses
- **badgeAlts.appStore:** Download on the App Store
- **badgeAlts.play:** Get it on Google Play
- **playSoon:** Soon
- **playDisabledHint:** Not available yet
- **groupAria:** Download the app
### `faq`
- **title:** Frequently asked questions
- **1. Q:** What is CheqSplit?
  - **A:** CheqSplit is a bill-splitting and group expense app. Scan receipts, split line items, track shared costs, and see who owes whom in one place.
- **2. Q:** Can I split a receipt by line item?
  - **A:** Yes. Assign each line to specific people so everyone pays for what they actually ordered or used.
- **3. Q:** Is CheqSplit good for group trips?
  - **A:** Yes. Create a trip, add shared expenses, invite your group, attach receipts, and export a final summary with who owes whom.
- **4. Q:** Can I use CheqSplit for restaurants and grocery runs?
  - **A:** Yes. It works for restaurant bills, cafés, food shopping, and any situation where a few people are splitting the cost.
- **5. Q:** Does CheqSplit work offline?
  - **A:** You can do a lot on your phone locally, but sharing a trip and syncing with others needs an internet connection.
- **6. Q:** How do I invite people to a trip?
  - **A:** Start a trip in CheqSplit, add expenses, then share the trip link. When people join, they can see the shared balance and their part.
### `footer`
- **tagline:** Split group expenses fairly, quickly, and without the guesswork.
- **product:** Product
- **company:** Company
- **legal:** Legal
- **about:** About
- **contact:** Contact
- **privacy:** Privacy
- **terms:** Terms
- **rights:** All rights reserved.
### `a11y`
- **keyFeatures:** Key features
- **primaryNav:** Primary
- **howSection:** How it works
- **logoHome:** CheqSplit home

---

## `ro` — Română

### `meta`
- **title:** CheqSplit: împarte cheltuielile, scanează bonurile, urmărește cheltuielile de grup
- **description:** CheqSplit te ajută să împarți cheltuielile, să scanezi bonurile, să urmărești cheltuielile comune plătite de grup și să vezi clar cine cui datorează bani – după restaurant, la călătorii, la cumpărături sau în orice plan cu prietenii.
- **ogDescription:** Împarte cheltuielile echilibrat: scanează bonurile, urmărește cheltuielile comune, vezi cine cui datorează bani. Potrivit pentru restaurante, excursii, colegi de apartament și familii.
- **twitterDescription:** O modalitate simplă de a împărți cheltuielile fără Excel și fără conversații stânjenitoare la încheierea notei.
- **softwareDescription:** CheqSplit te ajută să împarți cheltuielile, să scanezi bonurile, să urmărești plățile de grup și să vezi cine cui datorează bani, la restaurant, în deplasări sau la activități cu prietenii.
### `nav`
- **features:** Funcții
- **how:** Cum funcționează
- **useCases:** Cazuri de folosință
- **faq:** Întrebări frecvente
### `header`
- **download:** Descarcă aplicația
### `hero`
- **title:** Împarte cheltuielile, scanează bonurile, vezi cine cui datorează bani
- **body:** CheqSplit te ajută să împarți nota, să scanezi bonurile, să urmărești plățile făcute de grup și să vezi ușor cine cui datorează bani, după cină, la drum, la magazin sau când vă puneți banii la comun.
- **alts[0]:** CheqSplit: listă de cheltuieli la o excursie de grup
- **alts[1]:** CheqSplit: ecran aplicație cu plăți împărțite
- **alts[2]:** CheqSplit: notă de plată, împărțire pe articole
### `features`
- **title:** De ce CheqSplit?
- **Item 1 — title:** Scanează bonul pe loc
  - **desc:** Citește rapid articolele, TVA și totalul, fără să transcrii manual fiecare rând.
- **Item 2 — title:** Împarte pe fiecare articol
  - **desc:** Fiecare poziție merge la cine a comandat, nu se împarte tot „după ochi”.
- **Item 3 — title:** Cheltuieli comune, într-un singur loc
  - **desc:** De la plata notei la restaurant până la cumpărături și alte cheltuieli făcute de grup, totul e pe o singură listă, mereu la zi.
- **Item 4 — title:** Cine cui datorează bani
  - **desc:** Soldurile se recalculează automat, ca fiecare să știe ce rest mai are de plătit.
### `how`
- **title:** Cum funcționează CheqSplit
- **subtitle:** Cinci pași de la o excursie nouă la un rezumat de care să poți avea toți încredere.
- **stepPill(n):** For n=1…5 the pill text is: Pasul 1 · Pasul 2 · Pasul 3 · Pasul 4 · Pasul 5
- **Step 1**
  - **label:** Deschide o excursie în câteva secunde
  - **body:** Alege un nume, invită grupul, și ești gata, fără o grămadă de setări.
  - **imageAlt:** CheqSplit: excursie de grup
  - **bullets[0]:** Excursia se creează rapid
  - **bullets[1]:** Invită-ți prietenii ușor
  - **bullets[2]:** Pentru cină în oraș, weekend, concediu
- **Step 2**
  - **label:** Note pe articol, fără bătăi de cap
  - **body:** Bonul e detaliat pe articole: fiecare linie ajunge la persoanele care au comandat-o.
  - **imageAlt:** CheqSplit: scanare bon, împărțire pe rând
  - **bullets[0]:** Împărțire per linie
  - **bullets[1]:** Feluri împărțite, bacșiș, taxe
  - **bullets[2]:** Fără calcule forțate la jumătate
- **Step 3**
  - **label:** Urmărește fiecare cheltuială
  - **body:** Pui categorii, note și vezi toată imaginea, într-un singur jurnal al grupului.
  - **imageAlt:** CheqSplit: cheltuieli comune, ecran mobil
  - **bullets[0]:** Categorii utile
  - **bullets[1]:** Bonuri & notițe
  - **bullets[2]:** O singură cronologie pentru toți
- **Step 4**
  - **label:** Stinge diferențele, pas cu pas
  - **body:** Când cineva plătește, soldurile se actualizează — mai puține mesaje „cât îmi datorezi?”.
  - **imageAlt:** CheqSplit: sume datorate, cine pe cine a plătit
  - **bullets[0]:** Sume nete pe persoană
  - **bullets[1]:** Memento (opțional) pentru plată
  - **bullets[2]:** Rezumate pe care le poți trimite mai departe
- **Step 5**
  - **label:** Raport clar la final
  - **body:** Totaluri, cine a plătit ce și, dacă e nevoie, ceva vizual. Trimiți link sau imagine.
  - **imageAlt:** CheqSplit: raport al excursiei, rezumat
  - **bullets[0]:** Rezumat ușor de urmărit
  - **bullets[1]:** Partajare prin link sau imagine
  - **bullets[2]:** Confidențialitate, implicit
### `useCases`
- **title:** Pentru orice cheltuială pe care o împarți
- **intro:** Când mergeți la restaurant, faceți o excursie cu prietenii sau puneți bani la comun la cumpărături, CheqSplit ține totul ordonat. Scanezi, atribui fiecare articol, treci reduceri sau comisioane, iar la final ai un decont clar, fără tabel făcut pe genunchi.
- **Item 1 — title:** Restaurant & cafenea
  - **desc:** Vezi pe farfurie cine a luat ce și închideți seara fără nervi.
- **Item 2 — title:** Excursii de grup
  - **desc:** O singură listă pentru mese, cazare și restul de drum.
- **Item 3 — title:** Casă & familie
  - **desc:** Alimente, evenimente, cheltuieli mici, împărțite corect.
- **Item 4 — title:** Cumpărături împreună
  - **desc:** Cadouri, aprovizionare, proiecte făcute pe banii câtorva oameni.
### `cta`
- **title:** Vrei să lași în urmă haosul de la decont?
- **body:** CheqSplit pune ordine pe notele la restaurant, pe excursiile cu bani la comun și te ajută pe toți să știți cine a plătit cât.
- **sectionAria:** Descarcă CheqSplit
- **imgAlt:** CheqSplit, aplicația prin care împarți la comun bonurile și plățile de grup
- **badgeAlts.appStore:** Descarcă pe App Store
- **badgeAlts.play:** Disponibil pe Google Play
- **playSoon:** Curând
- **playDisabledHint:** În curând aici
- **groupAria:** Descarcă aplicația
### `faq`
- **title:** Întrebări frecvente
- **1. Q:** Ce este CheqSplit?
  - **A:** E o aplicație ca să împarți notele de plată și cheltuielile comune: scanezi bonurile, ții evidența, vezi cine cui datorează bani — tot într-un singur loc.
- **2. Q:** Pot împărți bonul pe fiecare articol în parte?
  - **A:** Da. Alegi linie cu linie: fiecare plătește ce a consumat, nu cât iese la o împărțeală aproximativă.
- **3. Q:** E potrivită pentru excursii la mai mulți oameni?
  - **A:** Da. Deschizi o excursie, treci cheltuielile, inviți oamenii, atașezi bonurile (scanate sau importate), iar la final poți scoate un decont: cine a plătit cât.
- **4. Q:** Mă ajută doar la restaurant sau și în alte situații?
  - **A:** Da, ori de câte ori împarți bani la mai mulți: cumpărături, băuturi, ture prin țară, vacanțe, cum vrei tu.
- **5. Q:** Rulează și fără rețea?
  - **A:** O parte din date rămân pe telefon, dar partajarea excursiei cu ceilalți și sincronizarea au nevoie de internet.
- **6. Q:** Cum invit pe cineva într-o excursie?
  - **A:** Deschizi excursia, adaugi tranzacțiile, apoi trimiți linkul de invitație. Din el intră cei invitați și văd decontul, inclusiv cât mai are fiecare de plătit.
### `footer`
- **tagline:** Cheltuieli comune, fără interpretări — corect, rapid și pe înțelesul tuturor.
- **product:** Produs
- **company:** Companie
- **legal:** Legal
- **about:** Despre
- **contact:** Contact
- **privacy:** Confidențialitate
- **terms:** Termeni
- **rights:** Toate drepturile rezervate.
### `a11y`
- **keyFeatures:** Puncte principale
- **primaryNav:** Navigare principală
- **howSection:** Cum funcționează
- **logoHome:** Prima pagină CheqSplit

---

## `fr` — Français

### `meta`
- **title:** CheqSplit : partager les dépenses, scanner les tickets, suivre les comptes du groupe
- **description:** Avec CheqSplit, partagez les dépenses, scannez les tickets de caisse, suivez ce que le groupe a payé en commun et voyez clairement qui doit combien à qui – au restaurant, en voyage, aux courses, entre amis ou en coloc.
- **ogDescription:** Partagez les dépenses proprement : scan de ticket, suivi des dépenses communes, soldes clairs. Idéal pour les restos, les weekends à plusieurs, la coloc et la famille.
- **twitterDescription:** Partagez les dépenses et les notes sans tableur ni fil de messages interminable pour tout recalculer.
- **softwareDescription:** CheqSplit vous aide à partager les dépenses, à scanner les tickets, à suivre ce qui a été payé en commun et à voir qui doit quoi à qui, au restaurant, en voyage ou en groupe.
### `nav`
- **features:** Fonctionnalités
- **how:** Fonctionnement
- **useCases:** Cas d'usage
- **faq:** FAQ
### `header`
- **download:** Télécharger l'app
### `hero`
- **title:** Partagez les dépenses, scannez l’addition, voyez qui doit quoi à qui
- **body:** Scannez le ticket, suivez les dépenses partagées et gardez une vision simple de qui doit combien à qui – sortie au resto, week-end, courses à plusieurs, soirée entre amis.
- **alts[0]:** CheqSplit : suivi de dépenses pour un voyage de groupe
- **alts[1]:** App CheqSplit : dépenses partagées
- **alts[2]:** CheqSplit : écran de partage d'addition, lignes de ticket
### `features`
- **title:** Pourquoi choisir CheqSplit ?
- **Item 1 — title:** Scan de ticket en quelques secondes
  - **desc:** Récupérez les lignes, la TVA et le total en un clin d'œil, sans tout retaper à la main.
- **Item 2 — title:** Répartir ligne par ligne
  - **desc:** Vous affectez chaque poste du ticket aux bonnes personnes, plutôt que de tout couper en parts égales.
- **Item 3 — title:** Tout le groupe, un seul fil
  - **desc:** Restaurants, courses, billets, nuits d'hôtel : l'essentiel de ce que vous payez ensemble, au même endroit.
- **Item 4 — title:** Qui doit combien à qui
  - **desc:** CheqSplit calcule les soldes pour que chacun sache quoi rembourser au reste du groupe.
### `how`
- **title:** Comment fonctionne CheqSplit
- **subtitle:** Cinq étapes, du début du voyage au compte-rendu que tout le monde peut lire sereinement.
- **stepPill(n):** For n=1…5 the pill text is: Étape 1 · Étape 2 · Étape 3 · Étape 4 · Étape 5
- **Step 1**
  - **label:** Créez un voyage en un instant
  - **body:** Donnez un nom, invitez votre groupe, et c'est parti – pas de long parcours dans les options.
  - **imageAlt:** CheqSplit : écran d'un voyage de groupe
  - **bullets[0]:** Mise en route en quelques secondes
  - **bullets[1]:** Invitations faciles
  - **bullets[2]:** Repas, week-end, vacances : tout fonctionne
- **Step 2**
  - **label:** Partagez l'addition poste par poste
  - **body:** L'addition détaillée : chaque ligne va à la personne qui a vraiment consommé ou payé.
  - **imageAlt:** CheqSplit : scan d'un ticket pour partager l'addition
  - **bullets[0]:** Lignes du ticket affectées une par une
  - **bullets[1]:** Plats partagés, pourboire, frais de service
  - **bullets[2]:** Un total clair pour chacun
- **Step 3**
  - **label:** Suivez toutes les dépenses communes
  - **body:** Classez les sorties, ajoutez des notes et gardez la vue d'ensemble sur ce que le groupe a payé.
  - **imageAlt:** CheqSplit : mobile, dépenses partagées
  - **bullets[0]:** Des catégories utiles
  - **bullets[1]:** Tickets et petits commentaires
  - **bullets[2]:** Une seule frise pour le groupe
- **Step 4**
  - **label:** Réglez les comptes au fil de l'eau
  - **body:** Les soldes se mettent à jour quand quelqu'un rembourse – moins de relances en boucle sur le chat.
  - **imageAlt:** CheqSplit : résumé des soldes par personne
  - **bullets[0]:** Solde net par personne
  - **bullets[1]:** Rappels de paiement optionnels
  - **bullets[2]:** Versions que vous pouvez partager
- **Step 5**
  - **label:** Partagez un bilan propre
  - **body:** Totaux, graphiques, qui a payé quoi : prêt à envoyer sur le groupe ou à archiver pour plus tard.
  - **imageAlt:** CheqSplit : rapport de voyage, résumé
  - **bullets[0]:** Synthèses lisibles d'un coup d'œil
  - **bullets[1]:** Lien ou visuel
  - **bullets[2]:** Confidentialité dès le départ
### `useCases`
- **title:** Pour toutes les dépenses que vous partagez
- **intro:** Dès que vous partagez l'addition, un weekend ou le caddie, CheqSplit s'adapte : resto, coloc, famille, sorties entre amis. Vous scannez, vous affectez chaque poste, vous tenez compte des remises ou des pourboires, et vous finissez avec un règlement clair, sans ressaisir tout sur une feuille de calcul.
- **Item 1 — title:** Restaurants & bars
  - **desc:** Détaillez l'addition, partagez par plat, et chacun règle ce qu'il a pris.
- **Item 2 — title:** Voyages de groupe
  - **desc:** Billets, hébergement, repas : un seul fil pour le budget du tour.
- **Item 3 — title:** Vie de famille
  - **desc:** Courses, sorties, petits achats courants, suivis simplement.
- **Item 4 — title:** Achats à plusieurs
  - **desc:** Cadeaux, gros lot, commande groupée, tout ce que vous partagez à plus de deux.
### `cta`
- **title:** Prêt à arrêter de tout recalculer à la main ?
- **body:** Avec CheqSplit, le groupe partage les dépenses proprement, sans se prendre la tête sur le détail de chaque ticket.
- **sectionAria:** Télécharger CheqSplit
- **imgAlt:** Accueil de l'app CheqSplit pour partager l'addition
- **badgeAlts.appStore:** Télécharger sur l'App Store
- **badgeAlts.play:** Télécharger sur Google Play
- **playSoon:** Bientôt
- **playDisabledHint:** Pas encore disponible
- **groupAria:** Télécharger l'application
### `faq`
- **title:** Questions fréquentes
- **1. Q:** Qu'est-ce que CheqSplit ?
  - **A:** C'est une application pour partager les factures, suivre les dépenses de groupe et comprendre en un coup d'œil qui doit quoi à qui, à partir de tickets scannés et d'affectations ligne par ligne.
- **2. Q:** Puis-je partager un ticket poste par poste ?
  - **A:** Oui. Vous affectez chaque ligne aux bonnes personnes, afin que chacun ne paie que ce qu'il a consommé ou validé.
- **3. Q:** Est-ce adapté aux voyages à plusieurs ?
  - **A:** Oui. Vous ouvrez un voyage, y ajoutez les dépenses, invitez les participants, ajoutez les reçus, et vous exportez un bilan final avec les soldes entre personnes.
- **4. Q:** Ça sert seulement au restaurant ?
  - **A:** Non, partout où plusieurs personnes partagent un coût : supermarché, bar, soirée, week-end, achats en ligne groupés, etc.
- **5. Q:** CheqSplit fonctionne-t-il hors connexion ?
  - **A:** Vous pouvez conserver certaines infos sur l'appareil, mais le partage d'un voyage et la synchronisation entre participants nécessitent internet.
- **6. Q:** Comment inviter quelqu'un sur un voyage ?
  - **A:** Créez le voyage dans CheqSplit, ajoutez des dépenses, puis partagez le lien du voyage. Vos proches rejoignent, voient la balance partagée et leurs sommes restantes.
### `footer`
- **tagline:** Le moyen le plus simple de partager des dépenses de groupe, sans mauvaise surprise sur le total.
- **product:** Produit
- **company:** Entreprise
- **legal:** Mentions légales
- **about:** À propos
- **contact:** Contact
- **privacy:** Confidentialité
- **terms:** Conditions
- **rights:** Tous droits réservés.
### `a11y`
- **keyFeatures:** Fonctionnalités clés
- **primaryNav:** Navigation principale
- **howSection:** Fonctionnement
- **logoHome:** Accueil CheqSplit

---

## `de` — Deutsch

### `meta`
- **title:** CheqSplit: Ausgaben teilen, Belege scannen, Gruppenkosten im Blick
- **description:** Teile Ausgaben, scanne Kassenzettel, behalte geteilte Kosten im Blick und sieh schnell, wer wem wie viel schuldet – im Restaurant, auf Reisen, beim Einkauf oder in der Gruppe.
- **ogDescription:** Ausgaben fair aufteilen: Belege scannen, gemeinsame Kosten verfolgen, Saldo kennen. Für Restaurants, Gruppenreisen, Wohngemeinschaft und Familie.
- **twitterDescription:** Gemeinsame Kosten teilen, ohne Taschenrechner, Excel und endlose Chats – CheqSplit rechnet mit.
- **softwareDescription:** CheqSplit hilft dir, Ausgaben zu teilen, Belege zu scannen, geteilte Kosten zu verfolgen und zu sehen, wer wem wie viel schuldet – im Alltag, auf Reisen und in Gruppen.
### `nav`
- **features:** Funktionen
- **how:** So funktioniert's
- **useCases:** Einsatzbereiche
- **faq:** FAQ
### `header`
- **download:** App herunterladen
### `hero`
- **title:** Ausgaben teilen, Belege scannen, Saldo kennen
- **body:** Teile Ausgaben, scanne Belege und behalte im Blick, wer wem was schuldet – nach dem Abendessen, auf dem Wochenend-Trip, beim Einkauf oder mit deiner Gruppe.
- **alts[0]:** CheqSplit: Gruppenreise, gemeinsame Ausgaben
- **alts[1]:** CheqSplit-App: geteilte Ausgaben im Überblick
- **alts[2]:** CheqSplit: Rechnung splitten, Kassenbon-Zeilen
### `features`
- **title:** Warum CheqSplit?
- **Item 1 — title:** Belege in Sekunden erfassen
  - **desc:** Scanne den Kassenzettel: Positionen, Steuern, Summe – ohne alles abzutippen.
- **Item 2 — title:** Pro Zeile teilen
  - **desc:** Weise jede Position der Person zu, die wirklich bestellt hat – statt alles pauschal zu teilen.
- **Item 3 — title:** Alles an einem Ort
  - **desc:** Restaurant, Wochenende, Einkauf, gemeinsame Kosten – alles in einer Zeitleiste.
- **Item 4 — title:** Wer schuldet wem
  - **desc:** CheqSplit hält die Salden aktuell, damit klar ist, wer wem was zahlt.
### `how`
- **title:** So funktioniert CheqSplit
- **subtitle:** Fünf Schritte – von der Reiseidee zu einem verständlichen Report, dem alle trauen.
- **stepPill(n):** For n=1…5 the pill text is: Schritt 1 · Schritt 2 · Schritt 3 · Schritt 4 · Schritt 5
- **Step 1**
  - **label:** Reise in Sekunden starten
  - **body:** Namen vergeben, Freund:innen einladen – und schon bist du drin, ohne endlos in den Einstellungen zu hängen.
  - **imageAlt:** CheqSplit: Gruppenreise, Übersicht
  - **bullets[0]:** In wenigen Momenten eingerichtet
  - **bullets[1]:** Einladungen ohne Umwege
  - **bullets[2]:** Für Essen, Kurztrip, längerer Urlaub
- **Step 2**
  - **label:** Ausgabe für Ausgabe aufteilen
  - **body:** Position für Position: Jede Zeile deinem Kreis so zuordnen, wie ihr es bestellt habt.
  - **imageAlt:** CheqSplit: Kassenbon-Scanner, Aufteilung
  - **bullets[0]:** Zeilenweises Splitten
  - **bullets[1]:** Geteilte Gerichte, Trinkgeld, Servicegebühren
  - **bullets[2]:** Klare Rechnung für jede Person
- **Step 3**
  - **label:** Gemeinsame Kosten sammeln
  - **body:** Kategorien, Notizen, ein laufendes Gesamtbild, das alle in der Gruppe sehen.
  - **imageAlt:** CheqSplit: Handy, geteilte Gruppenausgaben
  - **bullets[0]:** Sinnvolle Kategorien
  - **bullets[1]:** Belegfotos & Notizen
  - **bullets[2]:** Eine Zeitleiste für euch
- **Step 4**
  - **label:** Saldo mitlaufen lassen
  - **body:** Wer überweist oder bar zahlt, siehst du am Saldo – weniger Nachtelefonate und „Hast du schon…?“.
  - **imageAlt:** CheqSplit: Salden, wer wem was schuldet
  - **bullets[0]:** Netto-Salden pro Person
  - **bullets[1]:** Optional: freundliche Erinnerungen
  - **bullets[2]:** Zusammenfassungen fürs Weiterreichen
- **Step 5**
  - **label:** Sauberen Reise-Report teilen
  - **body:** Summen, wer was gezahlt hat, ein paar visuelle Hervorhebungen – zum Weiterleiten oder später Nachschauen.
  - **imageAlt:** CheqSplit: Reise-Report, Ausgaben
  - **bullets[0]:** Klarer Überblick
  - **bullets[1]:** Link oder Bild
  - **bullets[2]:** Datenschutz ernst genommen
### `useCases`
- **title:** Für jede Situation mit geteilten Kosten
- **intro:** Sobald ihr als Gruppe einkauft, esst, verreist, CheqSplit passt dazu. Du scannst, ordnest zu, berücksichtigst Rabatt und Gebühren, und bekommst am Ende eine klare Abrechnung, ohne in Tabellenkalkulationen zu grübeln.
- **Item 1 — title:** Gastronomie
  - **desc:** Jede Position, wer was bestellt hat, fairer Abschluss für alle.
- **Item 2 — title:** Gruppenreisen
  - **desc:** Flug, Zimmer, Verpflegung, ein gemeinsamer Blick fürs Budget.
- **Item 3 — title:** Wohnen & Familie
  - **desc:** Einkauf, Alltag, alles, was getragen, aber klar abgerechnet werden soll.
- **Item 4 — title:** Einkäufe zu mehreren
  - **desc:** Geschenke, Sammelbestellungen, Projekte, bei denen ihr die Kosten teilt.
### `cta`
- **title:** Bereit, Ausgaben entspannter zu teilen?
- **body:** CheqSplit sorgt dafür, dass eure Gruppe schnell weiß, wer wem was schuldet – ganz ohne Zettelwirtschaft.
- **sectionAria:** CheqSplit herunterladen
- **imgAlt:** CheqSplit Start, Rechnung teilen, Ausgaben verfolgen
- **badgeAlts.appStore:** Im App Store herunterladen
- **badgeAlts.play:** Bei Google Play
- **playSoon:** Bald
- **playDisabledHint:** Noch nicht verfügbar
- **groupAria:** App herunterladen
### `faq`
- **title:** Häufige Fragen
- **1. Q:** Was ist CheqSplit?
  - **A:** Eine App, mit der du Kosten teilst, Kassenzettel scannst, alle Ausgaben der Gruppe im Blick behältst und auf einen Blick siehst, wer wem was schuldet – sauber, nachvollziehbar, Zeile für Zeile.
- **2. Q:** Kann ich einen Kassenbon tatsächlich pro Artikel teilen?
  - **A:** Ja. Du weist jede Zeile der richtigen Person zu – jeder zahlt nur, was wirklich zu seiner Bestellung gehört.
- **3. Q:** Eignet sich die App für Gruppenreisen?
  - **A:** Ja. Du legst eine Reise an, trägst geteilte Ausgaben ein, hängst Belegfotos daran und bekommst am Ende einen klaren Überblick, wer wem wie viel schuldet.
- **4. Q:** Kann ich CheqSplit auch für Restaurant und Wocheneinkauf nutzen?
  - **A:** Immer, wenn zu zweit, dritt, viert bezahlt wird. Restaurant, Kaffee, Einkaufsliste, alles, was an einem Strang hängt.
- **5. Q:** Gibt's das auch offline?
  - **A:** Manches kannst du lokal auf dem Handy führen, doch geteilte Reisen und Synchronisierung mit deinen Leuten laufen online.
- **6. Q:** Wie lade ich jemanden ein?
  - **A:** In CheqSplit Reise anlegen, Ausgaben nachtragen, Reise-Link teilen – wer einsteigt, sieht dieselben Salden wie du.
### `footer`
- **tagline:** Gruppenkosten leichter teilen: fair, klar, ohne doppelte Mathe-Runden.
- **product:** Produkt
- **company:** Unternehmen
- **legal:** Rechtliches
- **about:** Über uns
- **contact:** Kontakt
- **privacy:** Datenschutz
- **terms:** Nutzungsbedingungen
- **rights:** Alle Rechte vorbehalten.
### `a11y`
- **keyFeatures:** Hauptfunktionen
- **primaryNav:** Hauptnavigation
- **howSection:** Ablauf
- **logoHome:** Zur Startseite CheqSplit

---

## `es` — Español

### `meta`
- **title:** CheqSplit: divide gastos, escanea recibos y controla cuentas compartidas
- **description:** Con CheqSplit dividir gastos, escanear recibos y seguir lo que paga el grupo es más sencillo: verás con claridad quién debe cuánto a quién, ya sea en un restaurante, de viaje, de compras o en un plan con amigos.
- **ogDescription:** Divide gastos con criterio: recibos escaneados, gastos compartidos, saldos claros. Restaurantes, viajes, piso compartido, familia.
- **twitterDescription:** Dividir gastos y saldar cuentas sin hojas de cálculo ni cadenas interminables en el chat.
- **softwareDescription:** CheqSplit te ayuda a dividir gastos, escanear recibos, llevar al día los pagos en grupo y ver quién debe cuánto a quién, en el día a día, de viaje o con amigos.
### `nav`
- **features:** Funciones
- **how:** Cómo funciona
- **useCases:** Casos de uso
- **faq:** Preguntas frecuentes
### `header`
- **download:** Descargar la app
### `hero`
- **title:** Divide gastos, escanea recibos, ve quién debe cuánto a quién
- **body:** Con CheqSplit escaneas recibos, sigues los gastos compartidos y ves al instante quién debe cuánto a quién, tras una cena, un viaje, la compra o cualquier plan en grupo.
- **alts[0]:** CheqSplit: viaje y gasto compartido en grupo
- **alts[1]:** App CheqSplit con gasto compartido
- **alts[2]:** CheqSplit: dividir la cuenta, líneas del recibo
### `features`
- **title:** Por qué CheqSplit
- **Item 1 — title:** Escanea al momento
  - **desc:** Carga en segundos los ítems, el IVA y el total del ticket, sin teclear todo a mano.
- **Item 2 — title:** Dividir línea a línea
  - **desc:** Cada apunte del recibo va a quien corresponde, en vez de repartir todo a ciegas por mitades.
- **Item 3 — title:** Tus gastos, un solo hilo
  - **desc:** Restaurante, viaje, compra: lo que aporta el grupo, con orden, en un solo lugar.
- **Item 4 — title:** Quién le debe cuánto a quién
  - **desc:** Los saldos se recalculan y cada uno sabe qué le toca, sin cuentas a mano en el chat.
### `how`
- **title:** Cómo funciona CheqSplit
- **subtitle:** Cinco pasos, desde abrir un viaje hasta dejar claro el reparto a todo el mundo.
- **stepPill(n):** For n=1…5 the pill text is: Paso 1 · Paso 2 · Paso 3 · Paso 4 · Paso 5
- **Step 1**
  - **label:** Abre un viaje al momento
  - **body:** Dale un nombre, invita al resto, listo, sin ajustes interminables.
  - **imageAlt:** CheqSplit: viaje en grupo
  - **bullets[0]:** Nuevo plan en poco tiempo
  - **bullets[1]:** Invitación fácil
  - **bullets[2]:** Cenas, fin de semana, viajes: vale para todo
- **Step 2**
  - **label:** Divide el gasto, ítem a ítem
  - **body:** Cuenta detallada, cada plato, bebida o recargo, asignado a quien corresponde.
  - **imageAlt:** CheqSplit: escanear y dividir un ticket
  - **bullets[0]:** A cada línea, a quien toque
  - **bullets[1]:** Raciones a medias, propina, extras
  - **bullets[2]:** Cuenta justa, sin aproximación rara
- **Step 3**
  - **label:** Anota todo el gasto común
  - **body:** Categorías, notas y un único hilo con lo que aporta cada uno, sin perder nada de vista.
  - **imageAlt:** CheqSplit: móvil, gastos de grupo
  - **bullets[0]:** Categorías con sentido
  - **bullets[1]:** Recibos o recordatorios
  - **bullets[2]:** Línea de tiempo para el grupo
- **Step 4**
  - **label:** Cierra deudas según pagáis
  - **body:** A medida que alguien paga, el saldo baja, menos de «me debes aún el del otro día» en el chat.
  - **imageAlt:** CheqSplit: resumen de saldos, quién debe a quién
  - **bullets[0]:** Saldos neto por persona
  - **bullets[1]:** Avisos opcionales de pago
  - **bullets[2]:** Resúmenes fáciles de reenviar
- **Step 5**
  - **label:** Un informe listo que compartir
  - **body:** Totales, quién pagó qué, a veces con gráfico, para reenviar o descargar cuando cierre el plan.
  - **imageAlt:** CheqSplit: informe del viaje o del grupo
  - **bullets[0]:** Resúmenes claros de un vistazo
  - **bullets[1]:** Enlace o imagen
  - **bullets[2]:** Privacidad, como norma
### `useCases`
- **title:** Cualquier gasto que compartas
- **intro:** Cenas, escapadas, gastos de compra, familia: si varias personas ponen dinero, CheqSplit pone orden. Escanea el recibo, asigna posiciones, ajusta descuentos o propina y reparte la cuenta con claridad, sin hojas de cálculo improvisadas.
- **Item 1 — title:** Restaurantes y bares
  - **desc:** Cuenta por raciones, cervezas, cierre limpio, sin rencores.
- **Item 2 — title:** Viajes en grupo
  - **desc:** Billete, cama, comida: lo que aporta cada uno, en un solo hilo de gasto.
- **Item 3 — title:** Casa y familia
  - **desc:** Compra, regalos, caja común, sin dejar a nadie a ciegas.
- **Item 4 — title:** Compras compartidas
  - **desc:** Regalos, pedidos, cosas a medias con amigos, pagos claros a la hora de saldar.
### `cta`
- **title:** ¿Listo para dejar de recalcular en el chat?
- **body:** Prueba CheqSplit: divide gastos con criterio, con saldos claros y sin hojas de cálculo improvisadas.
- **sectionAria:** Descargar CheqSplit
- **imgAlt:** Pantalla inicial de CheqSplit, dividir gasto en grupo
- **badgeAlts.appStore:** Descargar en el App Store
- **badgeAlts.play:** Descargar en Google Play
- **playSoon:** Pronto
- **playDisabledHint:** Aún no disponible
- **groupAria:** Descargar la aplicación
### `faq`
- **title:** Preguntas frecuentes
- **1. Q:** ¿Qué es CheqSplit?
  - **A:** Una app para compartir cuentas y llevar el control del gasto en grupo: recibos escaneados, reparto por filas, saldo claro de quién a quién, todo junto en la misma app.
- **2. Q:** ¿Puedo repartir un recibo artículo por artículo?
  - **A:** Sí. Asigna cada línea a quien corresponde y cada uno paga lo que le toca, sin adivinar ‘a medias’.
- **3. Q:** ¿Sirve para un viaje con amigos o familia?
  - **A:** Sí. Crea un viaje, añade gastos compartidos, invita a la gente, adjunta recibos y, al cierre, obtén un resumen con quién debe a quién.
- **4. Q:** ¿Solo es para restaurantes?
  - **A:** No. Sirve para el súper, bares, escapadas, compras a medias: siempre que varias personas compartan un gasto.
- **5. Q:** ¿Funciona sin conexión?
  - **A:** Puedes trabajar con parte de la información almacenada en el dispositivo, pero compartir un viaje y sincronizarte con el resto requiere internet.
- **6. Q:** ¿Cómo invito a alguien?
  - **A:** Crea un viaje en la app, registra gastos y comparte el enlace del viaje. Quien se una verá el mismo resumen y sus saldos.
### `footer`
- **tagline:** Dividir gastos en grupo, con claridad y sin sorpresas: justo, sencillo, al instante.
- **product:** Producto
- **company:** Empresa
- **legal:** Aviso legal
- **about:** Acerca de
- **contact:** Contacto
- **privacy:** Privacidad
- **terms:** Términos
- **rights:** Todos los derechos reservados.
### `a11y`
- **keyFeatures:** Funciones principales
- **primaryNav:** Navegación principal
- **howSection:** Cómo funciona
- **logoHome:** Inicio de CheqSplit

---

## `it` — Italiano

### `meta`
- **title:** CheqSplit: dividi le spese, scansiona scontrini, traccia le spese di gruppo
- **description:** Dividi le spese, scansiona gli scontrini e tieni d'occhio le uscite in comune. CheqSplit ti mostra in modo chiaro chi deve quanto a chi, al ristorante, in viaggio, alla spesa o in qualsiasi piano a più persone.
- **ogDescription:** Dividi in modo equo: scontrino in app, spese condivise, saldi chiari. Cene, gite, convivenza, famiglia e compagnia.
- **twitterDescription:** Dividi le spese comuni senza fogli di calcolo o chat interminabili sull'ultimo centesimo.
- **softwareDescription:** CheqSplit ti aiuta a dividere le spese, a scansionare scontrini, a tracciare le uscite condivise e a capire subito chi deve quanto a chi, a cena, in viaggio o in gruppo.
### `nav`
- **features:** Funzionalità
- **how:** Come funziona
- **useCases:** Casi d'uso
- **faq:** Domande frequenti
### `header`
- **download:** Scarica l'app
### `hero`
- **title:** Dividi le spese, scansiona lo scontrino, vedi chi deve quanto a chi
- **body:** Con CheqSplit puoi scansionare gli scontrini, tenere sotto controllo le spese condivise e vedere in un attimo cosa resta da saldare, dopo cena, in gita, a casa o in viaggio con amici e famiglia.
- **alts[0]:** CheqSplit: viaggio di gruppo e spese condivise
- **alts[1]:** App CheqSplit: elenco spese di gruppo
- **alts[2]:** CheqSplit: scontrino, divisione per riga
### `features`
- **title:** Perché usare CheqSplit
- **Item 1 — title:** Scontrino in pochi secondi
  - **desc:** Scansiona e recupera voci, IVA e totale senza riscrivere tutto a mano.
- **Item 2 — title:** Dividi riga per riga
  - **desc:** Assegna ogni voce a chi l'ha ordinata, invece di spaccare il conto a metà a occhio.
- **Item 3 — title:** Tutte le uscite, un solo filo
  - **desc:** Ristorante, spesa, viaggi: tutto ciò che il gruppo paga insieme, in un'unica linea del tempo.
- **Item 4 — title:** Saldo: chi deve a chi
  - **desc:** I saldi si aggiornano in automatico: ognuno vede cosa deve ancora restituire o ricevere.
### `how`
- **title:** Come funziona CheqSplit
- **subtitle:** Cinque passaggi, da quando apri un viaggio a quando condividi il riepilogo con il gruppo.
- **stepPill(n):** For n=1…5 the pill text is: Passo 1 · Passo 2 · Passo 3 · Passo 4 · Passo 5
- **Step 1**
  - **label:** Apri un viaggio in un attimo
  - **body:** Dagli un nome, invita il gruppo, e parti: niente giro a vuoto tra le impostazioni.
  - **imageAlt:** CheqSplit: viaggio di gruppo
  - **bullets[0]:** Avvio in pochi tocchi
  - **bullets[1]:** Inviti semplici
  - **bullets[2]:** Cena, weekend, vacanze, tutto in un'unica logica
- **Step 2**
  - **label:** Dividi conto e scontrino per voce
  - **body:** Ricevuta dettagliata: ogni piatto, ogni caffè, a chi l'ha effettivamente preso.
  - **imageAlt:** CheqSplit: scansiona scontrino, split
  - **bullets[0]:** Righe assegnate a nome
  - **bullets[1]:** Piatti condivisi, mance, servizio, tutto conteggiato
  - **bullets[2]:** Meno 'dividiamo a metà e basta'
- **Step 3**
  - **label:** Registra ogni uscita in comune
  - **body:** Categorie, appunti e un solo registro, così nulla resta in sospeso a fine serata o di viaggio.
  - **imageAlt:** CheqSplit: spese condivise, mobile
  - **bullets[0]:** Categorie che hanno senso per il gruppo
  - **bullets[1]:** Foto scontrino o nota condivisa
  - **bullets[2]:** Una sola sequenza, per tutti
- **Step 4**
  - **label:** Saldare man mano che si paga
  - **body:** Ogni pagamento aggiorna il saldo, meno messaggi del tipo 'mi devi ancora i venti euro'.
  - **imageAlt:** CheqSplit: riepilogo saldi, chi deve a chi
  - **bullets[0]:** Saldo netto per ognuno
  - **bullets[1]:** Promemoria opzionali
  - **bullets[2]:** Estratti facili da inoltrare
- **Step 5**
  - **label:** Condividi un report pulito
  - **body:** Totali, chi ha pagato cosa, eventuali grafici, pronti da mandare o da consultare dopo.
  - **imageAlt:** CheqSplit: report uscita o viaggio
  - **bullets[0]:** Riepilogo chiaro a colpo d'occhio
  - **bullets[1]:** Link o immagine, come preferite
  - **bullets[2]:** Rispetto della privacy, per impostazione predefinita
### `useCases`
- **title:** Ogni volta che dividi una spesa
- **intro:** Cene, gite, spesa, famiglia, coinquilini, acquisti condivisi: CheqSplit unisce scontrino, promemoria e conti. Scansioni, assegni, aggiungi sconti o maggiorazioni, e a fine giornata hai un saldo comprensibile per tutti, senza tabelle improvvisate a mezzanotte.
- **Item 1 — title:** Ristorante e locali
  - **desc:** Scomponi il conto, dividi per piatto, chiudi l'uscita in modo equo.
- **Item 2 — title:** Viaggi in gruppo
  - **desc:** Voli, soggiorno, pasti: un unico registro per chi ha messo i soldi e per chi deve ancora restituire.
- **Item 3 — title:** Casa e famiglia
  - **desc:** Spesa, regali, piccoli acconti in comune, senza dimenticare nessuno.
- **Item 4 — title:** Acquisti insieme
  - **desc:** Regali, scorte, progetti divisi, con cifre e quote sempre visibili.
### `cta`
- **title:** Pronto a dividere le spese con meno grattacapi?
- **body:** Migliaia di persone usano CheqSplit per uscite di gruppo più ordinate, senza litigate sull'ultima cifra.
- **sectionAria:** Scarica CheqSplit
- **imgAlt:** Home CheqSplit: dividi scontrini e spese condivise
- **badgeAlts.appStore:** Scarica sull'App Store
- **badgeAlts.play:** Disponibile su Google Play
- **playSoon:** Presto
- **playDisabledHint:** Non ancora disponibile
- **groupAria:** Scarica l'applicazione
### `faq`
- **title:** Domande frequenti
- **1. Q:** Che cos'è CheqSplit?
  - **A:** È un'app per dividere i conti, scansionare scontrini, tracciare le uscite a più e vedere come si ripartiscono i costi, senza fogli o chat infinite.
- **2. Q:** Posso dividere un scontrino per articolo?
  - **A:** Sì. Assegni ogni riga a chi l'ha consumata, così ognuno paga in proporzione a ciò che ha preso, non a una quota uguale «a occhio».
- **3. Q:** Va bene per vacanze o gite a più persone?
  - **A:** Sì. Crei un viaggio, aggiungi le spese, inviti le persone, carichi scontrini e, al termine, ottieni un resoconto con i saldi tra le persone.
- **4. Q:** È adatto al solo ristorante?
  - **A:** Anche supermercato, bar, gite, ovunque mettiate soldi in comune, non serve solo il ristorante.
- **5. Q:** Funziona senza rete?
  - **A:** Puoi lavorare con dati in locale sul dispositivo, ma per condividere il viaggio o sincronizzare il gruppo serve la connessione a internet.
- **6. Q:** Come invito un amico?
  - **A:** Crei un viaggio, inserisci le uscite e condividi il link. Chi entra vede lo stesso riepilogo e gli stessi saldi che vedi tu.
### `footer`
- **tagline:** Dividi le spese in modo chiaro, senza tabelle improvvisate e senza fraintendimenti a fine serata.
- **product:** Prodotto
- **company:** Azienda
- **legal:** Note legali
- **about:** Informazioni
- **contact:** Contatti
- **privacy:** Privacy
- **terms:** Termini
- **rights:** Tutti i diritti riservati.
### `a11y`
- **keyFeatures:** Punti salienti
- **primaryNav:** Navigazione principale
- **howSection:** Come funziona
- **logoHome:** Home CheqSplit

---

## `pl` — Polski

### `meta`
- **title:** CheqSplit: dziel wydatki, skanuj paragony, śledź wspólne rachunki
- **description:** CheqSplit pomaga dzielić wydatki, skanować paragony, pilnować wspólnych kosztów i szybko zobaczyć, kto komu ile jest winien – po restauracji, w podróży, na zakupach, w gronie znajomych.
- **ogDescription:** Dziel wydatki uczciwie: skanuj paragony, śledź wspólne koszty, miej jasne salda. Restauracje, wyjazdy, wspólne mieszkanie, rodzina.
- **twitterDescription:** Prosto dzielić wydatki i wspólne rachunki, bez tabel, screenów w czacie i nieporozumień przy rozliczaniu.
- **softwareDescription:** CheqSplit pomaga dzielić wydatki, skanować paragony, śledzić wspólne koszty i sprawdzać, kto komu ile jest winien, po spotkaniach, w podróży i w grupie.
### `nav`
- **features:** Funkcje
- **how:** Jak to działa
- **useCases:** Zastosowania
- **faq:** FAQ
### `header`
- **download:** Pobierz aplikację
### `hero`
- **title:** Dziel wydatki, skanuj paragony, zobacz, kto komu ile jest winien
- **body:** CheqSplit ułatwia dzielenie wydatków, skanowanie paragonów, śledzenie wspólnych kosztów i rozliczanie, kto komu ile jest winien – w restauracji, na wyjeździe, na zakupach, w grupie.
- **alts[0]:** CheqSplit: wspólna podróż, lista wydatków
- **alts[1]:** Aplikacja CheqSplit: wspólne wydatki w grupie
- **alts[2]:** CheqSplit: podział rachunku, pozycje z paragonu
### `features`
- **title:** Dlaczego CheqSplit?
- **Item 1 — title:** Skan paragonu w chwilę
  - **desc:** Wczytaj pozycje, podatki i sumę – zamiast przepisywać wszystko ręcznie.
- **Item 2 — title:** Podział według pozycji
  - **desc:** Przydziel każdą linię odpowiedniej osobie, zamiast dzielić wszystko po równo w ciemno.
- **Item 3 — title:** Jeden podgląd wszystkich kosztów
  - **desc:** Jedna oś czasu: restauracja, wyjazd, zakupy i inne wspólne wydatki w jednym miejscu.
- **Item 4 — title:** Kto komu ile jest winien
  - **desc:** Aplikacja liczy salda, a Ty widzisz, kto ma dopłacić, kto wychodzi na zero.
### `how`
- **title:** Jak działa CheqSplit
- **subtitle:** Pięć jasnych kroków, od wycieczki po czytelny raport, który wszyscy mogą zatwierdzić.
- **stepPill(n):** For n=1…5 the pill text is: Krok 1 · Krok 2 · Krok 3 · Krok 4 · Krok 5
- **Step 1**
  - **label:** Utwórz wycieczkę w minutę
  - **body:** Daj nazwę, zaproś znajomych – i konfigurację masz z głowy.
  - **imageAlt:** CheqSplit: wycieczka grupowa
  - **bullets[0]:** Szybki start
  - **bullets[1]:** Proste zaproszenia
  - **bullets[2]:** Dla kolacji, weekendu albo dłuższego wyjazdu
- **Step 2**
  - **label:** Dziel wydatki według pozycji
  - **body:** Szczegółowy rachunek: każda linia przypisana właśnie tym, którzy to zamówili.
  - **imageAlt:** CheqSplit: skanowanie paragonu
  - **bullets[0]:** Pozycja po pozycji
  - **bullets[1]:** Wspólne potrawy, napiwki, opłaty serwisowe
  - **bullets[2]:** Czytelny wynik
- **Step 3**
  - **label:** Zapisuj wszystko, co wspólne
  - **body:** Kategorie, notatki i spójny obraz, na jednej osi czasu dla grupy.
  - **imageAlt:** CheqSplit: lista wspólnych wydatków
  - **bullets[0]:** Kategorie, które mają sens
  - **bullets[1]:** Zdjęcia paragonów
  - **bullets[2]:** Jedna linia czasowa wydatków
- **Step 4**
  - **label:** Rozlicz salda, kiedy płacicie
  - **body:** Suma się aktualizuje, gdy ktoś płaci przelewem lub gotówką – mniej pytań „kiedy oddasz?”.
  - **imageAlt:** CheqSplit: podsumowanie sald
  - **bullets[0]:** Saldo netto na osobę
  - **bullets[1]:** Opcjonalne przypomnienia
  - **bullets[2]:** Eksport podsumowania
- **Step 5**
  - **label:** Udostępnij czytelny raport
  - **body:** Wykres, suma, kto płacił, co miał w koszyku – łatwo wysłać dalej lub wrócić do niego później.
  - **imageAlt:** CheqSplit: raport wycieczki
  - **bullets[0]:** Czytelne podsumowania
  - **bullets[1]:** Link albo plik
  - **bullets[2]:** Dbałość o prywatność
### `useCases`
- **title:** Na każdy wspólny wydatek
- **intro:** Gdy w kilka osób łączycie koszty, CheqSplit trzyma porządek: jecie, wyjeżdżacie, robicie zakupy wspólnie. Zamiast liczyć w głowie, skanuj, przypisuj pozycje, miej pod kontrolą zniżki czy napiwki, a na koniec wiesz, kto komu ile jest winien, bez pomyłek.
- **Item 1 — title:** Restauracje
  - **desc:** Otwierasz pozycje z rachunku, dzielisz tak, by było uczciwie, zamykasz wieczór bez konfliktu.
- **Item 2 — title:** Wycieczki w grupie
  - **desc:** Lot, nocleg, jedzenie, jeden widok na wszystkich: kto za co zapłacił.
- **Item 3 — title:** Dom i rodzina
  - **desc:** Zakupy, drobne zdarzenia, wspólny budżet domu.
- **Item 4 — title:** Wspólne zakupy
  - **desc:** Prezenty, większe paczki, cokolwiek, co łączycie w kilka par rąk.
### `cta`
- **title:** Mniej chaosu przy wspólnych rachunkach?
- **body:** Z CheqSplit szybko ustalicie, kto, ile i za co płaci — bez wojen o kalkulator.
- **sectionAria:** Pobierz CheqSplit
- **imgAlt:** Ekran startu CheqSplit, dzielenie rachunku
- **badgeAlts.appStore:** Pobierz w App Store
- **badgeAlts.play:** Pobierz w Google Play
- **playSoon:** Wkrótce
- **playDisabledHint:** Jeszcze niedostępne
- **groupAria:** Pobierz aplikację
### `faq`
- **title:** Najczęściej zadawane pytania
- **1. Q:** Co to CheqSplit?
  - **A:** Aplikacja do dzielenia rachunków i wspólnych wydatków. Skanujesz, przypisujesz linie, widzisz, kto komu ile jest winien, w jednym miejscu.
- **2. Q:** Czy da się dzielić rachunek do pozycji z paragonu?
  - **A:** Tak. Każdą linię możesz dodać do właściwej osoby – płacisz tylko za to, z czego skorzystałeś.
- **3. Q:** Czy to się sprawdza na wycieczkach w kilka osób?
  - **A:** Tak. Utwórz wycieczkę, dodawaj wydatki, wrzucaj zdjęcia paragonów, a na końcu wyciągnij z tego czytelną listę, kto komu ile jest winien.
- **4. Q:** Czy działa tylko w restauracji?
  - **A:** Nie, zawsze wtedy, gdy kilka osób łączy w jednym koszty – w barze, sklepie, w podróży, na wspólnym zamówieniu.
- **5. Q:** A bez internetu?
  - **A:** Część danych możesz mieć lokalnie, ale wspólna wycieczka i sync z ekipą wymaga połączenia z siecią.
- **6. Q:** Jak zaprosić kogoś do wycieczki?
  - **A:** W CheqSplit utwórz wycieczkę, wprowadź wydatki, wyślij link do wycieczki – osoba, która dołącza, też zobaczy, jak wyglądają wspólne sumy i jej udział.
### `footer`
- **tagline:** Dziel wspólne koszty w prosty, otwarty sposób – szybko, jasno, bez domysłów.
- **product:** Produkt
- **company:** Firma
- **legal:** Informacje prawne
- **about:** O nas
- **contact:** Kontakt
- **privacy:** Prywatność
- **terms:** Regulamin
- **rights:** Wszelkie prawa zastrzeżone.
### `a11y`
- **keyFeatures:** Kluczowe funkcje
- **primaryNav:** Nawigacja główna
- **howSection:** Jak to działa
- **logoHome:** Strona główna CheqSplit

---

## `ru` — Русский

### `meta`
- **title:** CheqSplit: делитесь расходами, сканируйте чеки, ведите учёт совместных трат
- **description:** CheqSplit помогает делить расходы, сканировать чеки, вести учёт совместных трат и сразу видеть, кто кому сколько должен — в ресторане, в поездке с друзьями, в магазине, на совместных покупках.
- **ogDescription:** Делитесь тратами честно: скан чеков, позиции, понятные расчёты. Рестораны, поездки, соседи по квартире, компания друзей.
- **twitterDescription:** Простой способ вести общий счёт без бесконечных пересчётов в чате и ссор из-за цифр.
- **softwareDescription:** CheqSplit помогает делить расходы, сканировать чеки, вести совместные расходы и смотреть, кто кому сколько должен — за ужином, в поездке, в кругу друзей.
### `nav`
- **features:** Возможности
- **how:** Как это устроено
- **useCases:** Сценарии
- **faq:** Вопросы
### `header`
- **download:** Скачать приложение
### `hero`
- **title:** Делитесь тратами, сканируйте чеки и смотрите, кто кому и сколько должен
- **body:** CheqSplit помогает делить расходы, сканировать чеки, вести учёт совместных трат и в любой момент смотреть, кто кому сколько должен — в ресторане, в поездке, в магазине, в кругу друзей.
- **alts[0]:** Экран поездки CheqSplit
- **alts[1]:** Приложение CheqSplit: совместные расходы
- **alts[2]:** Разделение счёта, строки чека CheqSplit
### `features`
- **title:** Почему CheqSplit?
- **Item 1 — title:** Сканирование чека за секунды
  - **desc:** Сканер: позиции, цены, налог, итог — без ручного переноса каждой строки.
- **Item 2 — title:** По строчкам чека
  - **desc:** Каждую позицию — нужному человеку, вместо деления «всё поровну на глаз».
- **Item 3 — title:** Всё в одной ленте
  - **desc:** Кафе, супермаркет, билеты — вся ваша «общая касса» на одной шкале, без снимков чеков, потерянных в чате.
- **Item 4 — title:** Кто кому сколько должен
  - **desc:** Приложение ведёт расчёты: всем ясно, кто кому.
### `how`
- **title:** Как устроен CheqSplit
- **subtitle:** Пять шагов — от старта поездки до честного отчёта, в котором разберётся каждый в группе.
- **stepPill(n):** For n=1…5 the pill text is: Шаг 1 · Шаг 2 · Шаг 3 · Шаг 4 · Шаг 5
- **Step 1**
  - **label:** Создать поездку за мгновение
  - **body:** Название, приглашения, без вечного копания в настройках.
  - **imageAlt:** CheqSplit: групповая поездка
  - **bullets[0]:** Быстрый старт
  - **bullets[1]:** Приглашения
  - **bullets[2]:** Ужин или отпуск
- **Step 2**
  - **label:** Делить чек по строкам
  - **body:** Позиции: каждой — своему, сумма сходится.
  - **imageAlt:** CheqSplit: скан чека
  - **bullets[0]:** По линиям
  - **bullets[1]:** Совместные блюда, чаевые, сборы
  - **bullets[2]:** Понятно
- **Step 3**
  - **label:** Вести учёт совместных трат
  - **body:** Категории и заметки — полный вид в одной ленте на шкале времени.
  - **imageAlt:** CheqSplit: совместные расходы
  - **bullets[0]:** Удобные категории
  - **bullets[1]:** Чеки и пометки
  - **bullets[2]:** Одна лента для всех
- **Step 4**
  - **label:** Закрывать баланс
  - **body:** Баланс обновляется, когда кто-то платит: меньше напоминаний в чате «когда кинешь?».
  - **imageAlt:** CheqSplit: баланс
  - **bullets[0]:** Сводка по каждому
  - **bullets[1]:** Напоминания (по желанию)
  - **bullets[2]:** Итоги к отправке
- **Step 5**
  - **label:** Делиться чистым отчётом
  - **body:** Графики, суммы, кто за что — отправить или пересмотреть.
  - **imageAlt:** CheqSplit: отчёт по поездке
  - **bullets[0]:** Наглядные сводки
  - **bullets[1]:** Ссылка или картинка
  - **bullets[2]:** Конфиденциальность в приоритете
### `useCases`
- **title:** Любой общий расход
- **intro:** Собрались в ресторане, взяли вместе выезд на выходные, делите смету в поездке, покупки по дому, закупку на праздник: CheqSplit с этим справляется. Сканируйте, назначайте строки, учитывайте скидки — в конце честная, понятная сводка, без путаницы, кто кому сколько.
- **Item 1 — title:** Ресторан
  - **desc:** Считайте блюда по-честному, закрывайте чек справедливо, без споров, кто сколько внёс.
- **Item 2 — title:** Поездки с друзьями
  - **desc:** Билеты, жильё, питание — в одной ленте, без путаницы, кто что купил.
- **Item 3 — title:** Семьи
  - **desc:** Продукты, события, дом.
- **Item 4 — title:** Совместные покупки
  - **desc:** Подарки, опт, планы, где вносите деньги не в одиночку.
### `cta`
- **title:** Готовы упростить взаиморасчёты в группе?
- **body:** Тысячи дружеских и семейных групп уже пользуются CheqSplit, чтобы сходиться по цифрам без ссор.
- **sectionAria:** Скачать CheqSplit
- **imgAlt:** CheqSplit: старт, общие расходы и баланс
- **badgeAlts.appStore:** Скачать в App Store
- **badgeAlts.play:** Скачать в Google Play
- **playSoon:** Скоро
- **playDisabledHint:** Пока недоступно
- **groupAria:** Скачать приложение
### `faq`
- **title:** Частые вопросы
- **1. Q:** Что такое CheqSplit?
  - **A:** Это приложение, чтобы сканировать чеки, вести совместные расходы и смотреть, кто кому сколько должен, без таблиц и россыпи снимков в мессенджерах.
- **2. Q:** Можно разбить чек по позициям?
  - **A:** Да. Каждую строчку — своему человеку, каждый платит за то, что взял сам, а не за «средний чек на всех».
- **3. Q:** Подходит для поездок компанией?
  - **A:** Да. Создайте поездку, добавьте расходы, пригласите людей, прикрепите чеки, в конце получите отчёт с итогами, кто кому сколько.
- **4. Q:** Только ресторан или нет?
  - **A:** Кафе, магазин, такси, отпуск — везде, где несколько человек делят один кошелёк.
- **5. Q:** Работает без интернета?
  - **A:** Часть данных хранится локально на устройстве, но совместный доступ к поездке и синхронизация с группой требуют подключения к сети.
- **6. Q:** Как пригласить друга?
  - **A:** Создайте поездку, добавьте расходы и поделитесь ссылкой. Кто по ней зайдёт, увидит те же цифры баланса, что и вы.
### `footer`
- **tagline:** Самый простой способ делить общий счёт: честно, быстро, прозрачно.
- **product:** Продукт
- **company:** Компания
- **legal:** Правовая информация
- **about:** О продукте
- **contact:** Контакты
- **privacy:** Конфиденциальность
- **terms:** Условия
- **rights:** Все права защищены.
### `a11y`
- **keyFeatures:** Ключевые функции
- **primaryNav:** Навигация
- **howSection:** Как работает
- **logoHome:** Домой CheqSplit

---

## `hu` — Magyar

### `meta`
- **title:** CheqSplit: oszd a költségeket, szkenneld a blokkot, kövesd a közös kiadásokat
- **description:** A CheqSplit segít a költségek megosztásában, blokk vagy nyugta beolvasásában, közös kiadások követésében, és hogy egyértelműen lásd, ki kinek mennyivel tartozik – étteremben, utazáson, bevásárláskor, baráti vagy családi körben.
- **ogDescription:** Méltányosan oszd a költségeket: blokk beolvasás, tételek, egyenleg. Vendéglő, utak, bérlőtársak, baráti kör.
- **twitterDescription:** Egyszerű mód a közös költségek elszámolására táblázatok és folyamatos kézi számolás nélkül.
- **softwareDescription:** A CheqSplit segít költséget megosztani, blokkot szkennelni, közös kiadásokat követni, és megnézni, ki kinek mennyit tartozik, vacsorán, utazáson, csoportban.
### `nav`
- **features:** Funkciók
- **how:** Működés
- **useCases:** Használat
- **faq:** GYIK
### `header`
- **download:** Alkalmazás letöltése
### `hero`
- **title:** Oszd a számlát, szkenelj blokkot, és tudd, ki kinek és mennyi tartozik
- **body:** A CheqSplit segít a költségek megosztásában, a blokkok beolvasásában és a közös kiadások követésében, hogy tisztán lásd, ki kinek mennyivel tartozik — étteremben, utazáson, bevásárláskor, baráti vagy családi környezetben.
- **alts[0]:** CheqSplit: csoportos utazás képernyő
- **alts[1]:** CheqSplit: közös kiadások
- **alts[2]:** Számlamegosztás, tétel sorok CheqSplit
### `features`
- **title:** Miért épp a CheqSplit?
- **Item 1 — title:** Blokkok beolvasása pillanatok alatt
  - **desc:** A szkenneléssel tételek, adók, végösszeg pár mp alatt, kézi pötyögés nélkül.
- **Item 2 — title:** Tételenkénti megosztás
  - **desc:** Minden sor a megfelelőhöz, nem vakon felezzük a végösszeget.
- **Item 3 — title:** Egy helyen a kép
  - **desc:** Étterem, bolt, utak, mind egy idővonalon.
- **Item 4 — title:** Ki kinek tartozik
  - **desc:** Az app számol mindenkinek világosan.
### `how`
- **title:** Hogyan működik a CheqSplit
- **subtitle:** Öt világos lépés az utazástól a mindenkinek elfogadott összegzésig.
- **stepPill(n):** For n=1…5 the pill text is: 1. lépés · 2. lépés · 3. lépés · 4. lépés · 5. lépés
- **Step 1**
  - **label:** Utazás másodpercek alatt
  - **body:** Név, meghívók, fölös bonyolítás nélkül.
  - **imageAlt:** CheqSplit: csoportos túra
  - **bullets[0]:** Gyors létrehozás
  - **bullets[1]:** Hívó link
  - **bullets[2]:** Vacsora is, nyaralás is
- **Step 2**
  - **label:** Bonts soronként
  - **body:** Részletes bizonylat: a sor a megfelelőhöz, a kerekítés oké.
  - **imageAlt:** CheqSplit: blokk beolvasás
  - **bullets[0]:** Sor szerinti osztás
  - **bullets[1]:** Közös tál, borravaló, díj
  - **bullets[2]:** Olvasható
- **Step 3**
  - **label:** A közös kiadásokat követni
  - **body:** Jegyzetek, kategóriák, egy tiszta idővonal – kivel mi történt, egy helyen.
  - **imageAlt:** CheqSplit: közös költség
  - **bullets[0]:** Kategóriák
  - **bullets[1]:** Bizonylat vagy fénykép, jegyzet
  - **bullets[2]:** Egy idővonalon a csapat
- **Step 4**
  - **label:** Egyenlítsd a tartozást
  - **body:** A fizetésekkel frissül az egyenleg – kevesebb „még mindig tartozol” beszéd.
  - **imageAlt:** CheqSplit: egyenleg
  - **bullets[0]:** Nettó tartozás
  - **bullets[1]:** Emlékeztető (opcionális)
  - **bullets[2]:** Összefoglaló export
- **Step 5**
  - **label:** Ossz meg tiszta, átlátható jelentést
  - **body:** Grafikon, végösszeg, ki mire, küldd tovább vagy tartsd meg későbbre.
  - **imageAlt:** CheqSplit: utazási, kiadási összegzés
  - **bullets[0]:** Vizuális
  - **bullets[1]:** Link vagy kép
  - **bullets[2]:** Adatvédelem
### `useCases`
- **title:** Minden közös költségre jó
- **intro:** Közös vacsora, túra, bevásárlás, baráti pénz: amikor többen dobtok a közösbe, a CheqSplit ad rendet. Beolvasod a blokkot, a tételeket a megfelelő emberekhez kapcsolod, kezeled a kedvezményt és a díjakat, a végén pedig tiszta, érthető lezárás, félreértések nélkül.
- **Item 1 — title:** Vendéglő
  - **desc:** Tételekre bont, igazságosan zárj.
- **Item 2 — title:** Csoportos utazások
  - **desc:** Járat, szoba, eledel egy lapon.
- **Item 3 — title:** Család
  - **desc:** Kosár, program, benti kiadás.
- **Item 4 — title:** Közös bevásárlás
  - **desc:** Ajándék, nagybevásárlás, baráti vagy családi büdzsé, minden tétel nyomon.
### `cta`
- **title:** Egyszerűbb elszámolás, kevesebb számológéppel töltött perc?
- **body:** A CheqSplit segít átláthatóan rendezni a közös kiadásokat, számolópapír nélkül, kevesebb félreértéssel.
- **sectionAria:** CheqSplit letöltése
- **imgAlt:** CheqSplit kezdőképernyő, közös számlák és kiadások
- **badgeAlts.appStore:** Letöltés App Store-ból
- **badgeAlts.play:** Letöltés Google Play-ből
- **playSoon:** Hamarosan
- **playDisabledHint:** Még nem elérhető
- **groupAria:** Töltsd le
### `faq`
- **title:** Gyakori kérdések
- **1. Q:** Mi a CheqSplit?
  - **A:** Alkalmazás közös számlákhoz: blokk beolvasás, tételes bontás, mindenki látja az egyenleget, ki kinek mennyit.
- **2. Q:** Lehet tételsoronként osztani a blokkot?
  - **A:** Igen. A tételek emberekhez rendelhetők, mindenki azt fizeti, amit ténylegesen fogyasztott.
- **3. Q:** Működik csoportos utazáshoz is?
  - **A:** Igen. Létrehozol egy utat, hozzáadsz kiadásokat, meghívod a társakat, a végén egy tiszta összegzést kapsz, ki kinek mennyivel tartozik.
- **4. Q:** Csak étteremhez jó?
  - **A:** Bárhol, ahol több ember osztja a költséget: kocsma, bevásárlás, rövid vagy hosszabb utazás, közös vásárlás – a lényeg, hogy ne egyedül fizesd.
- **5. Q:** Használható hálózat nélkül is?
  - **A:** Bizonyos adat helyben is marad, de a közös utat és a többiekkel való szinkront internethez kell kötni.
- **6. Q:** Hogyan hívok meg valakit?
  - **A:** Indíts utat, vegyél fel tételket, oszd meg a meghívó linket, a belépő ugyanazt az egyenleget látja, amit te.
### `footer`
- **tagline:** A legegyszerűbb a közös költségre: igaz, gyors, átlátható.
- **product:** Termék
- **company:** Cég
- **legal:** Jogi
- **about:** Rólunk
- **contact:** Kapcsolat
- **privacy:** Adatvédelem
- **terms:** Feltételek
- **rights:** Minden jog fenntartva.
### `a11y`
- **keyFeatures:** Lényeg
- **primaryNav:** Elsődleges navigáció
- **howSection:** Folyamat
- **logoHome:** CheqSplit kezdőlap

---

## `tr` — Türkçe

### `meta`
- **title:** CheqSplit: masrafları bölüş, fişleri tara, ortak harcamaları takip et
- **description:** CheqSplit, masrafları paylaşmanıza, fişleri taramanıza, ortak harcamaları izlemenize ve yemekten, seyahatten, alışverişten veya grup planlarından sonra kimin kime ne kadar borçlu olduğunu net göstermenize yardımcı olur.
- **ogDescription:** Adil paylaş: fiş taraması, kalemler, net bakiyeler. Restoran, geziler, ev arkadaşları, arkadaş grupları.
- **twitterDescription:** Ortak giderleri tablo, hesap kâğıdı ve sınırsız mesaj telaşı olmadan bölüştürmek için pratik yol.
- **softwareDescription:** CheqSplit, masrafları bölüşmeye, fişleri taramaya, ortak harcamaları takip etmeye ve kimin kime ne kadar borçlu olduğunu net görmeye yardımcı olur: yemek, grup seyahatleri, alışveriş, günlük planlar.
### `nav`
- **features:** Özellikler
- **how:** Nasıl çalışır
- **useCases:** Kullanım alanları
- **faq:** S.S.S.
### `header`
- **download:** Uygulamayı indir
### `hero`
- **title:** Giderleri paylaş, fişi tara, grupta kimin kime ne borçlu olduğunu anında gör
- **body:** CheqSplit, masrafları paylaşmanıza, fişleri taramanıza, ortak giderleri izlemenize ve kimin kime ne kadar borçlu olduğunu anında görmenize yardımcı olur: restoranda, yolculukta, market alışverişinde, grup içinde.
- **alts[0]:** CheqSplit gezi ekranı
- **alts[1]:** CheqSplit uygulaması: ortak harcama
- **alts[2]:** Hesap böl, fiş satırları CheqSplit
### `features`
- **title:** Neden CheqSplit?
- **Item 1 — title:** Hemen fişi kaydet
  - **desc:** Taramayla: kalem, vergi, toplam anında, elle yazma derdi yok.
- **Item 2 — title:** Kalem kalem böl
  - **desc:** Her satır doğru kişiye; körü körüne yarı yarıya değil, gerçek tüketime göre.
- **Item 3 — title:** Her şey bir yerde
  - **desc:** Restoran, pazar, turlar, tüm bütçe aynı akışta.
- **Item 4 — title:** Kimin kime ne kadar borçlu
  - **desc:** Bakiyeleri uygulama hesaplar, herkes ne ödeyeceğini bilir.
### `how`
- **title:** CheqSplit nasıl işler
- **subtitle:** Geziden herkesin inandığı sade beş adım.
- **stepPill(n):** For n=1…5 the pill text is: Adım 1 · Adım 2 · Adım 3 · Adım 4 · Adım 5
- **Step 1**
  - **label:** Geziyi anında aç
  - **body:** İsim ver, arkadaşlarını ekle, sonsuz menü dolaşmaya gerek yok.
  - **imageAlt:** CheqSplit: gezi ekranı
  - **bullets[0]:** Hızlı oluştur
  - **bullets[1]:** Kolay davet
  - **bullets[2]:** Akşam veya tatil
- **Step 2**
  - **label:** Kaleme göre böl
  - **body:** Ayrıntılı fiş: her satır doğru kişide, toplam uyuşur, sürpriz yok.
  - **imageAlt:** CheqSplit: fiş taraması
  - **bullets[0]:** Satıra böl
  - **bullets[1]:** Ortak tabak, bahşiş, harç
  - **bullets[2]:** Açık
- **Step 3**
  - **label:** Paylaşılan tüm gideri izle
  - **body:** Kategori ve not, tek bir zaman hattı.
  - **imageAlt:** CheqSplit: paylaşılan gider
  - **bullets[0]:** Kategoriler
  - **bullets[1]:** Fiş notu
  - **bullets[2]:** Grubun tüm gideri tek akışta
- **Step 4**
  - **label:** Bakiyeyi hızlı kapa
  - **body:** Her ödeme ile güncellenen hesap, daha az telaşlı sohbet.
  - **imageAlt:** CheqSplit: bakiyeler
  - **bullets[0]:** Net bakiye özeti
  - **bullets[1]:** Opsiyon hatırlatıcı
  - **bullets[2]:** Özeti dışa al
- **Step 5**
  - **label:** Temiz rapor paylaş
  - **body:** Grafik, toplamlar, kimin nereye ne ödediği: paylaşın veya sonra tekrar açın.
  - **imageAlt:** CheqSplit: gezi raporu
  - **bullets[0]:** Özet görünüm
  - **bullets[1]:** Bağlantı veya görsel paylaşım
  - **bullets[2]:** Gizliliğe özen
### `useCases`
- **title:** Her türlü paylaşılan gider
- **intro:** Birkaç kişi aynı harcamayı paylaştığında—akşam yemeği, hafta sonu gezisi, aile alışverişi—CheqSplit her şeyi toparlar. Fişi tarar, satırları eşleştirirsin, indirim ve ücretleri eklersin, sonunda net bir kapanış alırsın.
- **Item 1 — title:** Restoran
  - **desc:** Kalemler, adil böl, ödeyebilir gibi.
- **Item 2 — title:** Grup seyahatleri
  - **desc:** Uçuş, oda, yemek, tek pencere.
- **Item 3 — title:** Aile
  - **desc:** Sepet, gün, evin masrafı.
- **Item 4 — title:** Ortak alışveriş
  - **desc:** Hediye, toplu, arkadaş proje.
### `cta`
- **title:** Giderleri daha net bölüştürmek ister misiniz?
- **body:** Binlerce grup, CheqSplit ile hesap kavgası olmadan hallediyor.
- **sectionAria:** CheqSplit indir
- **imgAlt:** CheqSplit açılış, hesap böl
- **badgeAlts.appStore:** App Store’da al
- **badgeAlts.play:** Google Play’de al
- **playSoon:** Yakında
- **playDisabledHint:** Henüz yok
- **groupAria:** İndir
### `faq`
- **title:** Sıkça sorulan sorular
- **1. Q:** CheqSplit nedir?
  - **A:** Ortak masraf ve hesap uygulaması: fiş taraması, satırları kişilere atama, kimin kime ne kadar borçlu olduğunu tek ekranda görmek.
- **2. Q:** Fişi satır satır bölebiliyor musunuz?
  - **A:** Evet. Her kalemi tüketene göre ayrı ayrı paylaşabilirsiniz.
- **3. Q:** Arkadaşlarla tatile uygun mu?
  - **A:** Evet. Gezi açar, gider eklersiniz, kişileri ve fişleri eklersiniz; sonda anlaşılır bir rapor alırsınız.
- **4. Q:** Sadece restoran için mi?
  - **A:** Hayır. Kafe, market, gezi, ortak alışveriş, birkaç kişinin aynı kasadan ödediği her senaryo için uygundur.
- **5. Q:** Çevrimdışı çalışıyor mu?
  - **A:** Bazı veriler cihazda kalabilir, ancak geziyi paylaşmak ve grup ile senkron kalmak için internet gerekir.
- **6. Q:** Birini geziye nasıl davet ederim?
  - **A:** Bir gezi oluşturun, harcamaları girin, davet bağlantısını paylaşın; katılan aynı bakiyeleri sizinle birlikte görür.
### `footer`
- **tagline:** Grupta masrafları paylaşmak: kolay, adil, net.
- **product:** Ürün
- **company:** Şirket
- **legal:** Yasal
- **about:** Hakkında
- **contact:** İletişim
- **privacy:** Gizlilik
- **terms:** Kullanım koşulları
- **rights:** Tüm haklar saklıdır.
### `a11y`
- **keyFeatures:** Ana özellikler
- **primaryNav:** Birincil gezinme
- **howSection:** Nasıl çalışır
- **logoHome:** CheqSplit ana sayfa

---

