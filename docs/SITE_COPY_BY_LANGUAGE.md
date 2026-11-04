# CheqSplit – toate textele de pe site (export automat)

**Regenerare:** `npm run site-copy` (sau `npx tsx scripts/site-copy-export.ts`) — sursa este `src/i18n/dictionaries/*.ts`.

**Structură:** un antet `## cod — nume` per limbă, apoi `###` pentru fiecare secțiune (meta, nav, header, hero, features, how, useCases, cta, faq, footer, a11y).

**Index (cod):** `en` (English) · `ro` (Română) · `fr` (Français) · `de` (Deutsch) · `es` (Español) · `it` (Italiano) · `pl` (Polski) · `ru` (Русский) · `hu` (Magyar) · `tr` (Türkçe)

---

## Comutator limbă — `src/i18n/config.ts`

| Cod | Denumire | Steag | Etichetă (picker) | Scurt |
|-----|----------|-------|-------------------|------|
| en | English | 🇬🇧 | Language | EN |
| cs | Čeština | 🇨🇿 | Jazyk | CS |
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
- **title:** CheqSplit — Split Bills and Track Group Expenses
- **description:** Scan a restaurant receipt and split by item, or track group expenses over time and see who owes whom with CheqSplit.
- **ogDescription:** Two clear paths: split one restaurant bill by item, or track shared group and trip expenses—and see who owes whom.
- **twitterDescription:** Split a restaurant bill by item, or track group expenses over time. CheqSplit shows who owes whom.
- **softwareDescription:** CheqSplit helps you scan restaurant receipts and split by item, or track ongoing group and trip expenses and see who owes whom.
### `nav`
- **features:** Features
- **how:** How it works
- **useCases:** Use cases
- **faq:** FAQ
### `header`
- **download:** Get the free app
### `hero`
- **title:** Split a bill or track group expenses—see who owes whom
- **body:** CheqSplit covers two everyday situations: one restaurant receipt shared at the table, or ongoing group expenses recorded in a trip. Pick the path that matches what you need.
- **alts[0]:** CheqSplit home screen showing the current group
- **alts[1]:** Group overview showing participant contributions
- **alts[2]:** CheqSplit: itemized restaurant bill split and receipt lines
### `features`
- **title:** Why CheqSplit?
- **Item 1 — title:** Scan restaurant receipts
  - **desc:** Scan a receipt to pull in line items and totals so you can start from the printed bill.
- **Item 2 — title:** Split by line item
  - **desc:** Assign each line to the right people instead of splitting everything down the middle.
- **Item 3 — title:** Keep group spending in one place
  - **desc:** Restaurant bills and trip costs live on one shared expense history.
- **Item 4 — title:** See who owes whom
  - **desc:** CheqSplit calculates the group balance so everyone can see who owes whom.
### `how`
- **title:** How CheqSplit works
- **subtitle:** Five steps: split a restaurant bill, track group expenses in a trip, and see who owes whom—from the first invite to a report the group can check.
- **stepPill(n):** For n=1…5 the pill text is: STEP 1 · STEP 2 · STEP 3 · STEP 4 · STEP 5
- **Step 1**
  - **label:** Create a group for your trip
  - **body:** On the home screen, tap Create group, name the group, choose its currency, and invite participants by link or QR code.
  - **imageAlt:** CheqSplit home screen showing the current group
  - **bullets[0]:** Clear trip name
  - **bullets[1]:** Invites by link or QR
  - **bullets[2]:** Group expenses in one trip
- **Step 2**
  - **label:** Split the check by line
  - **body:** Everyone sees the same check on their phones and marks their items together.
  - **imageAlt:** CheqSplit: scan a receipt to split a bill by item
  - **bullets[0]:** Mark who pays for what
  - **bullets[1]:** Assign shared items
  - **bullets[2]:** Edit tax and tip separately
- **Step 3**
  - **label:** Add shared expenses
  - **body:** Open Expenses and tap Add Expense. Enter the description, amount and currency, optionally choose a category, select the payer, then choose Everyone or Custom for the participants. Any participant can add an expense.
  - **imageAlt:** CheqSplit Add Expense screen with payer and participants
  - **bullets[0]:** Add Expense on the Expenses tab
  - **bullets[1]:** Whole group or selected people
  - **bullets[2]:** Anyone in the trip can add
- **Step 4**
  - **label:** See who owes whom
  - **body:** CheqSplit totals everything, shows each person’s share, and who owes whom.
  - **imageAlt:** CheqSplit: balance summary showing who owes whom
  - **bullets[0]:** Total amount of spending
  - **bullets[1]:** Per-person totals
  - **bullets[2]:** Plain view of who owes what, and how much
- **Step 5**
  - **label:** Save the trip and the report
  - **body:** Archive completed trips or export a detailed PDF with costs, summary totals, and a clear chart.
  - **imageAlt:** CheqSplit: trip report with expense summary
  - **bullets[0]:** Archive of finished trips
  - **bullets[1]:** A full PDF report
  - **bullets[2]:** Amounts, tables, and charts
### `useCases`
- **title:** Built for everyday shared expenses
- **intro:** CheqSplit fits when you share a restaurant check or keep group expenses in one trip—so everyone sees the same record and who owes whom.
- **Item 1 — title:** Restaurant bills
  - **desc:** Scan the check, split by dish, and see each person’s share.
- **Item 2 — title:** Group trips
  - **desc:** Accommodation, transport, meals, tickets, and activities in one running balance.
- **Item 3 — title:** Group expense history
  - **desc:** Ongoing trip costs from different payers on one timeline.
- **Item 4 — title:** Who owes whom
  - **desc:** Clear balances from the shared record—not a payment transfer.
### `cta`
- **title:** Start with the expense in front of you
- **body:** Download CheqSplit free, then choose a restaurant split or group tracking.
- **sectionAria:** Download CheqSplit for free
- **imgAlt:** CheqSplit home: split shared bills and track group expenses
- **badgeAlts.appStore:** Download free on the App Store
- **badgeAlts.play:** Get it free on Google Play
- **groupAria:** Download the app for free
### `faq`
- **title:** Frequently asked questions
- **1. Q:** What does CheqSplit do?
  - **A:** It scans and splits itemized restaurant bills, and it tracks ongoing group expenses in a trip so you can see who owes whom.
- **2. Q:** Can I split a receipt by item?
  - **A:** Yes. Review the scanned lines and assign each item to the people who had or shared it.
- **3. Q:** Can I track expenses across a trip or group?
  - **A:** Keep shared expenses in one group: record the payer and participants, add receipts from Bills, and check who owes whom in Summary. CheqSplit calculates balances; it does not transfer money.
- **4. Q:** Does CheqSplit transfer money?
  - **A:** No. CheqSplit calculates shares and shows who owes whom. It is not a payment service.
- **5. Q:** Can I export a report?
  - **A:** Yes. You can archive a finished trip and export a PDF report with expenses, totals, and a chart.
- **6. Q:** How do I invite people?
  - **A:** Share a link or QR code so participants join the same bill or the same trip.
### `footer`
- **tagline:** Split group expenses fairly, without the guesswork.
- **product:** Product
- **company:** Company
- **legal:** Legal
- **about:** Support
- **contact:** Contact
- **privacy:** Privacy Policy
- **terms:** Terms of Service
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
- **download:** Descarcă gratuit
### `hero`
- **title:** Împarte cheltuielile, scanează bonurile și lasă aplicația să facă restul
- **body:** CheqSplit te ajută să împarți nota, să scanezi bonurile, să urmărești plățile făcute de grup și să vezi ușor cine cui datorează bani, după cină, la drum, la magazin sau când vă puneți banii la comun. Aplicația se descarcă gratuit.
- **alts[0]:** Ecranul principal CheqSplit cu grupul curent
- **alts[1]:** Prezentarea grupului cu contribuțiile participanților
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
- **subtitle:** Cinci pași: împarți notele de plată și cheltuielile comune, scanezi bonurile, urmărești decontul și vezi clar cine cui — de la o călătorie nouă la un raport de încredere.
- **stepPill(n):** For n=1…5 the pill text is: PASUL 1 · PASUL 2 · PASUL 3 · PASUL 4 · PASUL 5
- **Step 1**
  - **label:** Creează un grup pentru călătorie
  - **body:** Pe ecranul principal, apasă Creează grup, denumește grupul, alege moneda și invită participanții prin link sau cod QR.
  - **imageAlt:** Ecranul principal CheqSplit cu grupul curent
  - **bullets[0]:** Pornire rapidă
  - **bullets[1]:** Invitație prin link sau cod QR
  - **bullets[2]:** Cină, vacanță sau orice echipă
- **Step 2**
  - **label:** Împarte nota pe fiecare poziție
  - **body:** Toți vedeți aceeași notă de plată pe telefoane și bifați, în timp real, ce vi se potrivește vouă.
  - **imageAlt:** CheqSplit: scanare bon, împărțire pe rând
  - **bullets[0]:** Marcați, cine plătește ce
  - **bullets[1]:** Poziții împărțite, bacșiș și taxe
  - **bullets[2]:** Dintr-o privire, cine datorează cât
- **Step 3**
  - **label:** Adaugă cheltuieli comune
  - **body:** Deschide Cheltuieli și apasă Adaugă cheltuială. Introdu descrierea, suma și moneda, alege opțional o categorie și plătitorul, apoi Toți sau Personalizat pentru participanți. Orice participant poate adăuga o cheltuială.
  - **imageAlt:** CheqSplit: cheltuieli comune, ecran mobil
  - **bullets[0]:** Cheltuieli trecute de fiecare
  - **bullets[1]:** Întregul grup sau doar persoane alese
  - **bullets[2]:** Totul într-un singur flux comun
- **Step 4**
  - **label:** Vezi cine cui și cât datorează
  - **body:** CheqSplit calculează totalul, cât revine fiecăruia și cine, cui trebuie să trimită bani.
  - **imageAlt:** CheqSplit: sume datorate, cine pe cine a plătit
  - **bullets[0]:** Suma totală a cheltuielilor
  - **bullets[1]:** Rezultatul pentru fiecare
  - **bullets[2]:** Clar, cine cui, în ce sumă
- **Step 5**
  - **label:** Păstrează excursia și raportul
  - **body:** Arhivează excursiile încheiate sau exportă un PDF amănunțit cu costuri, totaluri și o grafică lizibilă.
  - **imageAlt:** CheqSplit: raport al călătoriei, rezumat
  - **bullets[0]:** Arhivă de excursii finalizate
  - **bullets[1]:** Raport PDF detaliat
  - **bullets[2]:** Sume, tabele și grafice
### `useCases`
- **title:** Pentru orice cheltuială pe care o împarți
- **intro:** Când mergi la restaurant, faci o călătorie cu prietenii sau pui bani la comun la cumpărături, CheqSplit ține totul ordonat. Scanezi, atribui fiecare articol, treci reduceri sau comisioane, iar la final ai un decont clar, fără tabel făcut pe genunchi.
- **Item 1 — title:** Restaurante și cafenele
  - **desc:** Vezi pe farfurie cine a luat ce și închideți seara fără nervi.
- **Item 2 — title:** Excursii de grup
  - **desc:** O singură listă pentru mese, cazare și restul de drum.
- **Item 3 — title:** Casă și familie
  - **desc:** Alimente, evenimente, cheltuieli mici, împărțite corect.
- **Item 4 — title:** Cumpărături împreună
  - **desc:** Cadouri, aprovizionare, proiecte făcute pe banii câtorva oameni.
### `cta`
- **title:** Vrei să lași în urmă haosul de la decont?
- **body:** Descarcă gratuit CheqSplit: pune ordine pe notele la restaurant, pe excursiile cu bani la comun și ajută întregul grup să știe cine a plătit cât.
- **sectionAria:** Descarcă gratuit CheqSplit
- **imgAlt:** CheqSplit, aplicația prin care împarți la comun bonurile și plățile de grup
- **badgeAlts.appStore:** Descarcă gratuit din App Store
- **badgeAlts.play:** Descarcă gratuit din Google Play
- **groupAria:** Descarcă gratuit aplicația
### `faq`
- **title:** Întrebări frecvente
- **1. Q:** Ce este CheqSplit?
  - **A:** E o aplicație gratuită ca să împarți notele de plată și cheltuielile comune: scanezi bonurile, ții evidența, vezi cine cui datorează bani — tot într-un singur loc.
- **2. Q:** Pot împărți bonul pe fiecare articol în parte?
  - **A:** Da. Alegi linie cu linie: fiecare plătește ce a consumat, nu cât iese la o împărțeală aproximativă.
- **3. Q:** Este potrivită pentru călătorii de grup?
  - **A:** Păstrează cheltuielile comune într-un singur grup: înregistrează plătitorul și participanții, adaugă bonuri din Bonuri și verifică cine cui datorează în Rezumat. CheqSplit calculează soldurile; nu transferă bani.
- **4. Q:** Mă ajută doar la restaurant sau și în alte situații?
  - **A:** Da, ori de câte ori împarți bani la mai mulți: cumpărături, băuturi, ture prin țară, vacanțe, cum vrei tu.
- **5. Q:** Funcționează și fără internet?
  - **A:** O parte din date rămân pe telefon, dar partajarea călătoriei cu ceilalți și sincronizarea au nevoie de internet.
- **6. Q:** Cum invit pe cineva într-o călătorie?
  - **A:** Deschizi excursia, adaugi tranzacțiile, apoi trimiți linkul de invitație. Din el intră cei invitați și văd decontul, inclusiv cât mai are fiecare de plătit.
### `footer`
- **tagline:** Împarte corect cheltuielile de grup, fără calcule și presupuneri.
- **product:** Produs
- **company:** Companie
- **legal:** Informații juridice
- **about:** Asistență
- **contact:** Contact
- **privacy:** Politica de confidențialitate
- **terms:** Termeni și condiții
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
- **download:** Télécharger gratuitement
### `hero`
- **title:** Partagez les dépenses, scannez les reçus et laissez l’application s’occuper du reste
- **body:** Scannez le ticket, suivez les dépenses partagées et gardez une vision simple de qui doit combien à qui – sortie au resto, week-end, courses à plusieurs, soirée entre amis. L’application se télécharge gratuitement.
- **alts[0]:** Écran d’accueil CheqSplit avec le groupe actuel
- **alts[1]:** Vue d’ensemble du groupe avec les contributions des participants
- **alts[2]:** CheqSplit : écran de partage d'addition, lignes de ticket
### `features`
- **title:** Pourquoi choisir CheqSplit ?
- **Item 1 — title:** Scan de ticket en quelques secondes
  - **desc:** Récupérez les lignes, la TVA et le total en un clin d'œil, sans tout retaper à la main.
- **Item 2 — title:** Répartir ligne par ligne
  - **desc:** Vous affectez chaque poste du ticket aux bonnes personnes, plutôt que de tout couper en parts égales.
- **Item 3 — title:** Toutes les dépenses du groupe au même endroit
  - **desc:** Restaurants, courses, billets, nuits d'hôtel : l'essentiel de ce que vous payez ensemble, au même endroit.
- **Item 4 — title:** Qui doit combien à qui
  - **desc:** CheqSplit calcule les soldes pour que chacun sache quoi rembourser au reste du groupe.
### `how`
- **title:** Comment fonctionne CheqSplit
- **subtitle:** Cinq étapes : partager les dépenses, scanner l’addition, suivre les comptes du groupe et savoir qui doit quoi à qui – du lancement d’un voyage à un bilan clair pour toute l’équipe.
- **stepPill(n):** For n=1…5 the pill text is: ÉTAPE 1 · ÉTAPE 2 · ÉTAPE 3 · ÉTAPE 4 · ÉTAPE 5
- **Step 1**
  - **label:** Créez un groupe pour votre voyage
  - **body:** Sur l’écran d’accueil, appuyez sur Créer un groupe, nommez-le, choisissez sa devise et invitez les participants par lien ou code QR.
  - **imageAlt:** Écran d’accueil CheqSplit avec le groupe actuel
  - **bullets[0]:** Démarrage immédiat
  - **bullets[1]:** Invitation par lien ou QR
  - **bullets[2]:** Dîner, vacances, ou toute sortie de groupe
- **Step 2**
  - **label:** Répartissez l’addition poste par poste
  - **body:** Tout le monde voit le même ticket sur son téléphone et coche, en direct, ce qui le concerne.
  - **imageAlt:** CheqSplit : scan d'un ticket pour partager l'addition
  - **bullets[0]:** Indiquez, qui règle quoi
  - **bullets[1]:** Pots partagés, pourboire, couverts, charges
  - **bullets[2]:** D’un coup d’œil, qui doit combien
- **Step 3**
  - **label:** Ajoutez les dépenses communes
  - **body:** Ouvrez Dépenses et appuyez sur Ajouter une dépense. Saisissez la description, le montant et la devise, choisissez éventuellement une catégorie et le payeur, puis Tous ou Personnalisé pour les participants. Chaque participant peut ajouter une dépense.
  - **imageAlt:** CheqSplit : mobile, dépenses partagées
  - **bullets[0]:** Dépenses enregistrées par chacun
  - **bullets[1]:** Partage sur tout le groupe ou sur des personnes choisies
  - **bullets[2]:** Tout est conservé sur un seul fil commun
- **Step 4**
  - **label:** Voyez qui doit quoi à qui
  - **body:** CheqSplit totalise, détaille chaque part et indique, qui doit envoyer de l’argent à qui.
  - **imageAlt:** CheqSplit : résumé des soldes par personne
  - **bullets[0]:** Total des dépenses
  - **bullets[1]:** Résultat par participant
  - **bullets[2]:** Clair : qui, à qui, combien
- **Step 5**
  - **label:** Sauvegardez le voyage et le bilan
  - **body:** Archivez les voyages terminés ou exportez un PDF détaillé : dépenses, totaux et graphique clair.
  - **imageAlt:** CheqSplit : rapport de voyage, résumé
  - **bullets[0]:** Archives de voyages terminés
  - **bullets[1]:** Rapport PDF complet
  - **bullets[2]:** Montants, tableaux et graphiques
### `useCases`
- **title:** Pour toutes les dépenses que vous partagez
- **intro:** Dès que vous partagez l'addition, un weekend ou le caddie, CheqSplit s'adapte : resto, coloc, famille, sorties entre amis. Vous scannez, vous affectez chaque poste, vous tenez compte des remises ou des pourboires, et vous finissez avec un règlement clair, sans ressaisir tout sur une feuille de calcul.
- **Item 1 — title:** Restaurants et bars
  - **desc:** Détaillez l'addition, partagez par plat, et chacun règle ce qu'il a pris.
- **Item 2 — title:** Voyages de groupe
  - **desc:** Billets, hébergement, repas : un seul fil pour le budget du tour.
- **Item 3 — title:** Vie de famille
  - **desc:** Courses, sorties, petits achats courants, suivis simplement.
- **Item 4 — title:** Achats à plusieurs
  - **desc:** Cadeaux, gros lot, commande groupée, tout ce que vous partagez à plus de deux.
### `cta`
- **title:** Prêt à arrêter de tout recalculer à la main ?
- **body:** Téléchargez gratuitement CheqSplit : le groupe partage les dépenses proprement, sans se prendre la tête sur le détail de chaque ticket.
- **sectionAria:** Télécharger CheqSplit gratuitement
- **imgAlt:** Accueil de l'app CheqSplit pour partager l'addition
- **badgeAlts.appStore:** Télécharger gratuitement sur l’App Store
- **badgeAlts.play:** Télécharger gratuitement sur Google Play
- **groupAria:** Télécharger l’application gratuitement
### `faq`
- **title:** Questions fréquentes
- **1. Q:** Qu'est-ce que CheqSplit ?
  - **A:** C'est une application gratuite pour partager les factures, suivre les dépenses de groupe et comprendre en un coup d'œil qui doit quoi à qui, à partir de tickets scannés et d'affectations ligne par ligne.
- **2. Q:** Puis-je partager un ticket poste par poste ?
  - **A:** Oui. Vous affectez chaque ligne aux bonnes personnes, afin que chacun ne paie que ce qu'il a consommé ou validé.
- **3. Q:** Est-ce adapté aux voyages à plusieurs ?
  - **A:** Gardez les dépenses communes dans un groupe : indiquez le payeur et les participants, ajoutez les tickets depuis Tickets et consultez qui doit combien à qui dans Résumé. CheqSplit calcule les soldes ; l’application ne transfère pas d’argent.
- **4. Q:** Ça sert seulement au restaurant ?
  - **A:** Non, partout où plusieurs personnes partagent un coût : supermarché, bar, soirée, week-end, achats en ligne groupés, etc.
- **5. Q:** CheqSplit fonctionne-t-il hors connexion ?
  - **A:** Vous pouvez conserver certaines infos sur l'appareil, mais le partage d'un voyage et la synchronisation entre participants nécessitent internet.
- **6. Q:** Comment inviter quelqu'un sur un voyage ?
  - **A:** Créez le voyage dans CheqSplit, ajoutez des dépenses, puis partagez le lien du voyage. Vos proches rejoignent, voient la balance partagée et leurs sommes restantes.
### `footer`
- **tagline:** Partagez les dépenses de groupe équitablement, sans calculs compliqués.
- **product:** Produit
- **company:** Entreprise
- **legal:** Mentions légales
- **about:** Assistance
- **contact:** Contact
- **privacy:** Politique de confidentialité
- **terms:** Conditions d'utilisation
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
- **download:** Kostenlos herunterladen
### `hero`
- **title:** Teilt Ausgaben, scannt Belege und lasst die App den Rest erledigen
- **body:** Teile Ausgaben, scanne Belege und behalte im Blick, wer wem was schuldet – nach dem Abendessen, auf dem Wochenend-Trip, beim Einkauf oder mit deiner Gruppe. Die App kannst du kostenlos herunterladen.
- **alts[0]:** CheqSplit-Startseite mit der aktuellen Gruppe
- **alts[1]:** Gruppenübersicht mit den Beiträgen der Teilnehmer
- **alts[2]:** CheqSplit: Rechnung splitten, Kassenbon-Zeilen
### `features`
- **title:** Warum CheqSplit?
- **Item 1 — title:** Belege in Sekunden erfassen
  - **desc:** Scanne den Kassenzettel: Positionen, Steuern, Summe – ohne alles abzutippen.
- **Item 2 — title:** Nach Positionen aufteilen
  - **desc:** Weise jede Position der Person zu, die wirklich bestellt hat – statt alles pauschal zu teilen.
- **Item 3 — title:** Alle Gruppenausgaben an einem Ort
  - **desc:** Restaurant, Wochenende, Einkauf, gemeinsame Kosten – alles in einer Zeitleiste.
- **Item 4 — title:** Wer schuldet wem
  - **desc:** CheqSplit hält die Salden aktuell, damit klar ist, wer wem was zahlt.
### `how`
- **title:** So funktioniert CheqSplit
- **subtitle:** Fünf Schritte: Kosten teilen, Belege scannen, gemeinsame Ausgaben im Blick und sehen, wer wem was schuldet – vom Reisestart bis zu einem verständlichen Report fürs ganze Team.
- **stepPill(n):** For n=1…5 the pill text is: SCHRITT 1 · SCHRITT 2 · SCHRITT 3 · SCHRITT 4 · SCHRITT 5
- **Step 1**
  - **label:** Erstelle eine Gruppe für deine Reise
  - **body:** Tippe auf der Startseite auf Gruppe erstellen, gib der Gruppe einen Namen, wähle ihre Währung und lade Teilnehmer per Link oder QR-Code ein.
  - **imageAlt:** CheqSplit-Startseite mit der aktuellen Gruppe
  - **bullets[0]:** Ruckzuck eingerichtet
  - **bullets[1]:** Einladung per Link oder QR-Code
  - **bullets[2]:** Fürs Abendessen, den Urlaub, jede Gruppe
- **Step 2**
  - **label:** Rechnung nach Posten teilen
  - **body:** Alle sehen denselben Beleg auf dem Handy und markieren live eure Posten.
  - **imageAlt:** CheqSplit: Kassenbon-Scanner, Aufteilung
  - **bullets[0]:** Merkt, wer wofür zahlt
  - **bullets[1]:** Geteilte Gänge, Trinkgeld, Zuschläge
  - **bullets[2]:** Auf Anhieb klar, was wer schuldet
- **Step 3**
  - **label:** Gemeinsame Ausgaben erfassen
  - **body:** Öffne Ausgaben und tippe auf Ausgabe hinzufügen. Gib Beschreibung, Betrag und Währung ein, wähle optional eine Kategorie und den Zahler. Wähle für die Teilnehmer Alle oder Benutzerdefiniert. Jeder Teilnehmer kann Ausgaben hinzufügen.
  - **imageAlt:** CheqSplit: Handy, geteilte Gruppenausgaben
  - **bullets[0]:** Einträge aller beteiligten Leute
  - **bullets[1]:** Aufteilung fürs ganze Team oder nur einzelne
  - **bullets[2]:** Alles in einer gemeinsamen Abfolge
- **Step 4**
  - **label:** Sehen, wer wem was schuldet
  - **body:** CheqSplit führt alles zusammen, zeigt die Anteile und wer an wen Geld senden sollte.
  - **imageAlt:** CheqSplit: Salden, wer wem was schuldet
  - **bullets[0]:** Gesamtsumme der Kosten
  - **bullets[1]:** Ergebnis pro Person
  - **bullets[2]:** Eindeutig: wer, wem, wie viel
- **Step 5**
  - **label:** Reise und Bericht sichern
  - **body:** Beendete Reisen archivieren oder einen detaillierten PDF-Report exportieren – Kosten, Saldo, übersichtliches Diagramm.
  - **imageAlt:** CheqSplit: Reise-Report, Ausgaben
  - **bullets[0]:** Archiv abgeschlossener Reisen
  - **bullets[1]:** Detaillierter PDF-Report
  - **bullets[2]:** Summen, Tabellen und Diagramme
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
- **body:** Hol dir CheqSplit kostenlos – eure Gruppe weiß schnell, wer wem was schuldet, ganz ohne Zettelwirtschaft.
- **sectionAria:** CheqSplit kostenlos herunterladen
- **imgAlt:** CheqSplit Start, Rechnung teilen, Ausgaben verfolgen
- **badgeAlts.appStore:** Kostenlos im App Store laden
- **badgeAlts.play:** Kostenlos bei Google Play
- **groupAria:** App kostenlos herunterladen
### `faq`
- **title:** Häufige Fragen
- **1. Q:** Was ist CheqSplit?
  - **A:** Eine kostenlose App, mit der du Kosten teilst, Kassenzettel scannst, alle Ausgaben der Gruppe im Blick behältst und auf einen Blick siehst, wer wem was schuldet – sauber, nachvollziehbar, Zeile für Zeile.
- **2. Q:** Kann ich einen Kassenbon tatsächlich pro Artikel teilen?
  - **A:** Ja. Du weist jede Zeile der richtigen Person zu – jeder zahlt nur, was wirklich zu seiner Bestellung gehört.
- **3. Q:** Eignet sich die App für Gruppenreisen?
  - **A:** Halte gemeinsame Ausgaben in einer Gruppe fest: Erfasse Zahler und Teilnehmer, füge Belege unter Belege hinzu und prüfe unter Übersicht, wer wem etwas schuldet. CheqSplit berechnet Salden; es überweist kein Geld.
- **4. Q:** Kann ich CheqSplit auch für Restaurant und Wocheneinkauf nutzen?
  - **A:** Immer, wenn zu zweit, dritt, viert bezahlt wird. Restaurant, Kaffee, Einkaufsliste, alles, was an einem Strang hängt.
- **5. Q:** Gibt's das auch offline?
  - **A:** Manches kannst du lokal auf dem Handy führen, doch geteilte Reisen und Synchronisierung mit deinen Leuten laufen online.
- **6. Q:** Wie lade ich jemanden ein?
  - **A:** In CheqSplit Reise anlegen, Ausgaben nachtragen, Reise-Link teilen – wer einsteigt, sieht dieselben Salden wie du.
### `footer`
- **tagline:** Teilt gemeinsame Ausgaben fair auf – ganz ohne Rätselraten.
- **product:** Produkt
- **company:** Unternehmen
- **legal:** Rechtliches
- **about:** Support
- **contact:** Kontakt
- **privacy:** Datenschutzerklärung
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
- **download:** Descarga gratis
### `hero`
- **title:** Divide los gastos, escanea los recibos y deja que la app se encargue del resto
- **body:** Con CheqSplit escaneas recibos, sigues los gastos compartidos y ves al instante quién debe cuánto a quién, tras una cena, un viaje, la compra o cualquier plan en grupo. La app es gratis para descargar.
- **alts[0]:** Pantalla de inicio de CheqSplit con el grupo actual
- **alts[1]:** Resumen del grupo con las aportaciones de los participantes
- **alts[2]:** CheqSplit: dividir la cuenta, líneas del recibo
### `features`
- **title:** Por qué CheqSplit
- **Item 1 — title:** Escanea al momento
  - **desc:** Carga en segundos los ítems, el IVA y el total del ticket, sin teclear todo a mano.
- **Item 2 — title:** Reparte la cuenta por conceptos
  - **desc:** Cada apunte del recibo va a quien corresponde, en vez de repartir todo a ciegas por mitades.
- **Item 3 — title:** Todos los gastos en un solo lugar
  - **desc:** Restaurante, viaje, compra: lo que aporta el grupo, con orden, en un solo lugar.
- **Item 4 — title:** Quién le debe cuánto a quién
  - **desc:** Los saldos se recalculan y cada uno sabe qué le toca, sin cuentas a mano en el chat.
### `how`
- **title:** Cómo funciona CheqSplit
- **subtitle:** Cinco pasos: dividir gastos, escanear recibos, llevar los gastos compartidos y ver quién debe a quién – de la primera cena a un informe con el que todo el grupo se entienda.
- **stepPill(n):** For n=1…5 the pill text is: PASO 1 · PASO 2 · PASO 3 · PASO 4 · PASO 5
- **Step 1**
  - **label:** Crea un grupo para tu viaje
  - **body:** En la pantalla de inicio, toca Crear grupo, ponle un nombre, elige su moneda e invita a los participantes mediante enlace o código QR.
  - **imageAlt:** Pantalla de inicio de CheqSplit con el grupo actual
  - **bullets[0]:** Puesta en marcha inmediata
  - **bullets[1]:** Invitación por enlace o QR
  - **bullets[2]:** Cena, vacaciones, cualquier grupo de amigos
- **Step 2**
  - **label:** Reparte la cuenta por partidas
  - **body:** Cada uno ve el mismo ticket en el móvil y, al instante, marca lo suyo.
  - **imageAlt:** CheqSplit: escanear y dividir un ticket
  - **bullets[0]:** Anota quién paga qué
  - **bullets[1]:** Raciones a compartir, propina, cargos
  - **bullets[2]:** A simple vista, quién debe a quién y cuánto
- **Step 3**
  - **label:** Añade los gastos compartidos
  - **body:** Abre Gastos y toca Añadir gasto. Introduce descripción, importe y moneda, elige una categoría opcional y quién pagó, y después Todos o Personalizado para los participantes. Cualquier participante puede añadir un gasto.
  - **imageAlt:** CheqSplit: móvil, gastos de grupo
  - **bullets[0]:** Gastos aportados por todos
  - **bullets[1]:** A todo el grupo o solo a quienes elijas
  - **bullets[2]:** Todo queda en un solo hilo
- **Step 4**
  - **label:** Mira quién debe a quién
  - **body:** CheqSplit suma el total, lo que corresponde a cada uno y quién debería transferir dinero a quién.
  - **imageAlt:** CheqSplit: resumen de saldos, quién debe a quién
  - **bullets[0]:** Gasto total del grupo
  - **bullets[1]:** Resultado por participante
  - **bullets[2]:** Clarísimo: quién, a quién, cuánto
- **Step 5**
  - **label:** Guarda el viaje y el informe
  - **body:** Archiva viajes cerrados o exporta un PDF detallado, con importes, totales y un gráfico fácil de leer.
  - **imageAlt:** CheqSplit: informe del viaje o del grupo
  - **bullets[0]:** Archivo de viajes hechos
  - **bullets[1]:** Informe PDF fiel al detalle
  - **bullets[2]:** Cifras, tablas y gráficos
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
- **body:** Descarga gratis CheqSplit: divide gastos con criterio, con saldos claros y sin hojas de cálculo improvisadas.
- **sectionAria:** Descargar CheqSplit gratis
- **imgAlt:** Pantalla inicial de CheqSplit, dividir gasto en grupo
- **badgeAlts.appStore:** Descargar gratis en el App Store
- **badgeAlts.play:** Descargar gratis en Google Play
- **groupAria:** Descargar la aplicación gratis
### `faq`
- **title:** Preguntas frecuentes
- **1. Q:** ¿Qué es CheqSplit?
  - **A:** Una app gratuita para compartir cuentas y llevar el control del gasto en grupo: recibos escaneados, reparto por filas, saldo claro de quién a quién, todo junto en la misma app.
- **2. Q:** ¿Puedo repartir un recibo artículo por artículo?
  - **A:** Sí. Asigna cada línea a quien corresponde y cada uno paga lo que le toca, sin adivinar ‘a medias’.
- **3. Q:** ¿Sirve para un viaje con amigos o familia?
  - **A:** Reúne los gastos compartidos en un grupo: registra quién pagó y los participantes, añade recibos desde Recibos y consulta quién debe a quién en Resumen. CheqSplit calcula saldos; no transfiere dinero.
- **4. Q:** ¿Solo es para restaurantes?
  - **A:** No. Sirve para el súper, bares, escapadas, compras a medias: siempre que varias personas compartan un gasto.
- **5. Q:** ¿Funciona sin conexión?
  - **A:** Puedes trabajar con parte de la información almacenada en el dispositivo, pero compartir un viaje y sincronizarte con el resto requiere internet.
- **6. Q:** ¿Cómo invito a alguien?
  - **A:** Crea un viaje en la app, registra gastos y comparte el enlace del viaje. Quien se una verá el mismo resumen y sus saldos.
### `footer`
- **tagline:** Reparte los gastos de grupo de forma justa y sin complicaciones.
- **product:** Producto
- **company:** Empresa
- **legal:** Legal
- **about:** Ayuda
- **contact:** Contacto
- **privacy:** Política de privacidad
- **terms:** Términos de servicio
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
- **download:** Scarica gratis
### `hero`
- **title:** Dividete le spese, scansionate gli scontrini e lasciate che l’app faccia il resto
- **body:** Con CheqSplit puoi scansionare gli scontrini, tenere sotto controllo le spese condivise e vedere in un attimo cosa resta da saldare, dopo cena, in gita, a casa o in viaggio con amici e famiglia. L’app si scarica gratuitamente.
- **alts[0]:** Schermata iniziale di CheqSplit con il gruppo attuale
- **alts[1]:** Panoramica del gruppo con i contributi dei partecipanti
- **alts[2]:** CheqSplit: scontrino, divisione per riga
### `features`
- **title:** Perché usare CheqSplit
- **Item 1 — title:** Scansiona lo scontrino in pochi secondi
  - **desc:** Scansiona e recupera voci, IVA e totale senza riscrivere tutto a mano.
- **Item 2 — title:** Dividi riga per riga
  - **desc:** Assegna ogni voce a chi l'ha ordinata, invece di spaccare il conto a metà a occhio.
- **Item 3 — title:** Tutte le spese in un unico posto
  - **desc:** Ristorante, spesa, viaggi: tutto ciò che il gruppo paga insieme, in un'unica linea del tempo.
- **Item 4 — title:** Saldo: chi deve a chi
  - **desc:** I saldi si aggiornano in automatico: ognuno vede cosa deve ancora restituire o ricevere.
### `how`
- **title:** Come funziona CheqSplit
- **subtitle:** Cinque passaggi: spartire le spese, scansionare scontrini, tenere sotto controllo le uscite in comune e chi deve quanto a chi – dall’avvio del viaggio a un resoconto chiaro per tutto il gruppo.
- **stepPill(n):** For n=1…5 the pill text is: PASSO 1 · PASSO 2 · PASSO 3 · PASSO 4 · PASSO 5
- **Step 1**
  - **label:** Crea un gruppo per il viaggio
  - **body:** Dalla schermata iniziale, tocca Crea gruppo, assegna un nome, scegli la valuta e invita i partecipanti tramite link o codice QR.
  - **imageAlt:** Schermata iniziale di CheqSplit con il gruppo attuale
  - **bullets[0]:** Subito in movimento
  - **bullets[1]:** Invito via link o QR
  - **bullets[2]:** Cena, vacanza, o una gita con chi vuoi
- **Step 2**
  - **label:** Dividi il conto, voce per voce
  - **body:** Ricevete tutti la stessa ricevuta sul telefono e segnate, in diretta, cosa paga ciascuno.
  - **imageAlt:** CheqSplit: scansiona scontrino, split
  - **bullets[0]:** Segnate, chi sostiene quale voce
  - **bullets[1]:** Cose condivise, mance, extra
  - **bullets[2]:** A colpo d’occhio, chi, quanto e a chi
- **Step 3**
  - **label:** Aggiungi le spese condivise
  - **body:** Apri Spese e tocca Aggiungi spesa. Inserisci descrizione, importo e valuta, scegli facoltativamente una categoria e chi ha pagato, poi Tutti o Personalizzato per i partecipanti. Ogni partecipante può aggiungere una spesa.
  - **imageAlt:** CheqSplit: spese condivise, mobile
  - **bullets[0]:** Ogni partecipante mette le sue voci
  - **bullets[1]:** Divisione sull’intera squadra o su un gruppo ristretto
  - **bullets[2]:** Tutto in un’unica sequenza condivisa
- **Step 4**
  - **label:** Scopri chi deve quanto e a chi
  - **body:** CheqSplit calcola totali, quota per persona e a chi, in concreto, inviare i soldi.
  - **imageAlt:** CheqSplit: riepilogo saldi, chi deve a chi
  - **bullets[0]:** Totale uscite del gruppo
  - **bullets[1]:** Cifra, persona per persona
  - **bullets[2]:** Evidenzia, chi, a chi, quanto deve
- **Step 5**
  - **label:** Conserva il viaggio e il riepilogo
  - **body:** Archivia i viaggi conclusi o esporta un PDF dettagliato con uscite, totali e un grafico chiaro.
  - **imageAlt:** CheqSplit: riepilogo uscita o viaggio
  - **bullets[0]:** Archivio di viaggi conclusi
  - **bullets[1]:** Report PDF con tutto il dettaglio
  - **bullets[2]:** Somme, tabelle e grafici
### `useCases`
- **title:** Ogni volta che dividi una spesa
- **intro:** Cene, gite, spesa, famiglia, coinquilini, acquisti condivisi: CheqSplit unisce scontrino, promemoria e conti. Scansioni, assegni, aggiungi sconti o maggiorazioni, e a fine giornata hai un saldo comprensibile per tutti, senza tabelle improvvisate a mezzanotte.
- **Item 1 — title:** Ristorante e locali
  - **desc:** Scomponi il conto, dividi per piatto, chiudi l'uscita in modo equo.
- **Item 2 — title:** Viaggi in gruppo
  - **desc:** Voli, soggiorno, pasti: un unico registro per chi ha messo i soldi e per chi deve ancora restituire.
- **Item 3 — title:** Casa e famiglia
  - **desc:** Spesa, regali, piccoli acconti in comune, senza dimenticare nessuno.
- **Item 4 — title:** Acquisti di gruppo
  - **desc:** Regali, scorte, progetti divisi, con cifre e quote sempre visibili.
### `cta`
- **title:** Pronto a dividere le spese con meno grattacapi?
- **body:** Scarica gratis CheqSplit: uscite di gruppo più ordinate, senza litigate sull’ultima cifra.
- **sectionAria:** Scarica CheqSplit gratis
- **imgAlt:** Home CheqSplit: dividi scontrini e spese condivise
- **badgeAlts.appStore:** Scarica gratis sull’App Store
- **badgeAlts.play:** Scarica gratis su Google Play
- **groupAria:** Scarica l’applicazione gratis
### `faq`
- **title:** Domande frequenti
- **1. Q:** Che cos'è CheqSplit?
  - **A:** È un'app gratuita per dividere i conti, scansionare scontrini, tracciare le uscite a più e vedere come si ripartiscono i costi, senza fogli o chat infinite.
- **2. Q:** Posso dividere un scontrino per articolo?
  - **A:** Sì. Assegni ogni riga a chi l'ha consumata, così ognuno paga in proporzione a ciò che ha preso, non a una quota uguale «a occhio».
- **3. Q:** Va bene per vacanze o gite a più persone?
  - **A:** Tieni le spese condivise in un gruppo: indica chi ha pagato e i partecipanti, aggiungi scontrini da Scontrini e controlla chi deve quanto a chi nel Riepilogo. CheqSplit calcola i saldi; non trasferisce denaro.
- **4. Q:** Serve solo al ristorante?
  - **A:** Anche supermercato, bar, gite, ovunque mettiate soldi in comune, non serve solo il ristorante.
- **5. Q:** Funziona senza rete?
  - **A:** Puoi lavorare con dati in locale sul dispositivo, ma per condividere il viaggio o sincronizzare il gruppo serve la connessione a internet.
- **6. Q:** Come invito un amico?
  - **A:** Crei un viaggio, inserisci le uscite e condividi il link. Chi entra vede lo stesso riepilogo e gli stessi saldi che vedi tu.
### `footer`
- **tagline:** Dividi le spese di gruppo in modo equo, senza calcoli complicati.
- **product:** Prodotto
- **company:** Azienda
- **legal:** Note legali
- **about:** Assistenza
- **contact:** Contatti
- **privacy:** Informativa sulla privacy
- **terms:** Termini di servizio
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
- **download:** Pobierz za darmo
### `hero`
- **title:** Dzielcie wydatki, skanujcie paragony i pozwólcie aplikacji zająć się resztą
- **body:** CheqSplit ułatwia dzielenie wydatków, skanowanie paragonów, śledzenie wspólnych kosztów i rozliczanie, kto komu ile jest winien – w restauracji, na wyjeździe, na zakupach, w grupie. Aplikację pobierzesz bezpłatnie.
- **alts[0]:** Ekran główny CheqSplit z bieżącą grupą
- **alts[1]:** Przegląd grupy z wpłatami uczestników
- **alts[2]:** CheqSplit: podział rachunku, pozycje z paragonu
### `features`
- **title:** Dlaczego CheqSplit?
- **Item 1 — title:** Zeskanuj paragon w kilka sekund
  - **desc:** Wczytaj pozycje, podatki i sumę – zamiast przepisywać wszystko ręcznie.
- **Item 2 — title:** Podział według pozycji
  - **desc:** Przydziel każdą linię odpowiedniej osobie, zamiast dzielić wszystko po równo w ciemno.
- **Item 3 — title:** Jeden podgląd wszystkich kosztów
  - **desc:** Jedna oś czasu: restauracja, wyjazd, zakupy i inne wspólne wydatki w jednym miejscu.
- **Item 4 — title:** Kto komu ile jest winien
  - **desc:** Aplikacja liczy salda, a Ty widzisz, kto ma dopłacić, kto wychodzi na zero.
### `how`
- **title:** Jak działa CheqSplit
- **subtitle:** Pięć kroków: dzielić wydatki, skanować paragony, śledzić wspólne rachunki i szybko wiedzieć, kto komu ile – od startu wyjazdu po czytelny raport zatwierdzalny w grupie.
- **stepPill(n):** For n=1…5 the pill text is: KROK 1 · KROK 2 · KROK 3 · KROK 4 · KROK 5
- **Step 1**
  - **label:** Utwórz grupę na wyjazd
  - **body:** Na ekranie głównym wybierz Utwórz grupę, nadaj jej nazwę, wybierz walutę i zaproś uczestników przez link lub kod QR.
  - **imageAlt:** Ekran główny CheqSplit z bieżącą grupą
  - **bullets[0]:** Błyskawiczny start
  - **bullets[1]:** Zaproszenie linkiem albo QR
  - **bullets[2]:** Kolacja, urlop, dowolne towarzystwo
- **Step 2**
  - **label:** Dziel rachunek według pozycji
  - **body:** Wszyscy widzicie ten sam paragon w telefonie i na żywo przypisujecie, co wchodzi w skład waszej części.
  - **imageAlt:** CheqSplit: skanowanie paragonu
  - **bullets[0]:** Zaznaczaj, kto płaci za co
  - **bullets[1]:** Dzielone potrawy, napiwki, dodatkowe opłaty
  - **bullets[2]:** Od razu widać, kto, komu, ile
- **Step 3**
  - **label:** Dodawaj wspólne wydatki
  - **body:** Otwórz Wydatki i wybierz Dodaj wydatek. Wpisz opis, kwotę i walutę, opcjonalnie wybierz kategorię oraz płatnika, a następnie Wszyscy lub wybór własny dla uczestników. Każdy uczestnik może dodać wydatek.
  - **imageAlt:** CheqSplit: lista wspólnych wydatków
  - **bullets[0]:** Koszty wprowadzają uczestnicy
  - **bullets[1]:** Dla wszystkich albo tylko wskazanych
  - **bullets[2]:** Wszystko w jednym wspólnym strumieniu
- **Step 4**
  - **label:** Sprawdź, kto komu i ile jest winien
  - **body:** CheqSplit sumuje wydatki, pokazuje udział każdej osoby i kto, komu, ile powinien przelać.
  - **imageAlt:** CheqSplit: podsumowanie sald
  - **bullets[0]:** Suma łączna wydatków
  - **bullets[1]:** Konto, osoba po osobie
  - **bullets[2]:** Czytelnie, kto, komu, ile
- **Step 5**
  - **label:** Zachowaj wyjazd i raport
  - **body:** Archiwizuj zakończone wyjazdy albo eksportuj do PDF, z kosztami, streszczeniem i czytelnym wykresem.
  - **imageAlt:** CheqSplit: raport wyjazdu
  - **bullets[0]:** Archiwum dawnych wycieczek
  - **bullets[1]:** Pełen PDF, szczegółowo
  - **bullets[2]:** Liczby, tabela, wykres
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
- **body:** Pobierz za darmo CheqSplit i szybko ustalcie, kto, ile i za co płaci — bez wojen o kalkulator.
- **sectionAria:** Pobierz CheqSplit za darmo
- **imgAlt:** Ekran startu CheqSplit, dzielenie rachunku
- **badgeAlts.appStore:** Pobierz za darmo w App Store
- **badgeAlts.play:** Pobierz za darmo w Google Play
- **groupAria:** Pobierz aplikację za darmo
### `faq`
- **title:** Najczęściej zadawane pytania
- **1. Q:** Co to CheqSplit?
  - **A:** Bezpłatna aplikacja do dzielenia rachunków i wspólnych wydatków. Skanujesz, przypisujesz linie, widzisz, kto komu ile jest winien, w jednym miejscu.
- **2. Q:** Czy można podzielić rachunek według pozycji z paragonu?
  - **A:** Tak. Każdą linię możesz dodać do właściwej osoby – płacisz tylko za to, z czego skorzystałeś.
- **3. Q:** Czy aplikacja sprawdza się podczas wyjazdów grupowych?
  - **A:** Zbieraj wspólne wydatki w jednej grupie: zapisuj płatnika i uczestników, dodawaj paragony w zakładce Paragony i sprawdzaj w Podsumowaniu, kto komu jest winien. CheqSplit oblicza salda; nie przelewa pieniędzy.
- **4. Q:** Czy działa tylko w restauracji?
  - **A:** Nie, zawsze wtedy, gdy kilka osób łączy w jednym koszty – w barze, sklepie, w podróży, na wspólnym zamówieniu.
- **5. Q:** A bez internetu?
  - **A:** Część danych możesz mieć lokalnie, ale wspólny wyjazd i sync z ekipą wymaga połączenia z siecią.
- **6. Q:** Jak zaprosić kogoś do wyjazdu?
  - **A:** W CheqSplit utwórz wycieczkę, wprowadź wydatki, wyślij link do wyjazdu – osoba, która dołącza, też zobaczy, jak wyglądają wspólne sumy i jej udział.
### `footer`
- **tagline:** Dziel wspólne wydatki sprawiedliwie, bez zgadywania i żmudnych obliczeń.
- **product:** Produkt
- **company:** Firma
- **legal:** Informacje prawne
- **about:** Pomoc
- **contact:** Kontakt
- **privacy:** Polityka prywatności
- **terms:** Warunki korzystania
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
- **ogDescription:** Делитесь тратами справедливо: скан чеков, позиции, чёткие итоги — в них видны суммы, кто кому сколько. Рестораны, поездки, соседи по квартире, компания друзей.
- **twitterDescription:** Простой способ вести общий счёт без бесконечных пересчётов в чате и ссор из-за цифр.
- **softwareDescription:** CheqSplit помогает делить расходы, сканировать чеки, вести совместные расходы и смотреть, кто кому сколько должен — за ужином, в поездке, в кругу друзей.
### `nav`
- **features:** Возможности
- **how:** Как это устроено
- **useCases:** Сценарии
- **faq:** Вопросы
### `header`
- **download:** Скачать бесплатно
### `hero`
- **title:** Делите расходы, сканируйте чеки, а остальное приложение посчитает за вас
- **body:** CheqSplit помогает делить расходы, сканировать чеки, вести учёт совместных трат и в любой момент смотреть, кто кому сколько должен — в ресторане, в поездке, в магазине, в кругу друзей. Скачать приложение можно бесплатно.
- **alts[0]:** Главный экран CheqSplit с текущей группой
- **alts[1]:** Обзор группы с суммами, внесёнными участниками
- **alts[2]:** Разделение счёта, строки чека CheqSplit
### `features`
- **title:** Почему CheqSplit?
- **Item 1 — title:** Сканирование чека за секунды
  - **desc:** Сканер: позиции, цены, налог, итог — без ручного переноса каждой строки.
- **Item 2 — title:** Разделение по позициям
  - **desc:** Каждую позицию — нужному человеку, вместо деления «всё поровну на глаз».
- **Item 3 — title:** Всё в одной ленте
  - **desc:** Кафе, супермаркет, билеты — вся ваша «общая касса» на одной шкале, без снимков чеков, потерянных в чате.
- **Item 4 — title:** Кто кому сколько должен
  - **desc:** Приложение ведёт расчёты: на экране сразу видны суммы между людьми, кто кому.
### `how`
- **title:** Как устроен CheqSplit
- **subtitle:** Пять шагов: делитесь расходами, сканируйте чеки, ведите учёт совместных трат и смотрите, кто кому сколько — от старта поездки до понятного отчёта для всей группы.
- **stepPill(n):** For n=1…5 the pill text is: ШАГ 1 · ШАГ 2 · ШАГ 3 · ШАГ 4 · ШАГ 5
- **Step 1**
  - **label:** Создайте группу для поездки
  - **body:** На главном экране нажмите «Создать группу», укажите название, выберите валюту и пригласите участников по ссылке или QR-коду.
  - **imageAlt:** Главный экран CheqSplit с текущей группой
  - **bullets[0]:** Быстрый старт
  - **bullets[1]:** Приглашение по ссылке или QR-коду
  - **bullets[2]:** Для ужина, отпуска или любой компании
- **Step 2**
  - **label:** Разделите чек по позициям
  - **body:** Вы все видите один и тот же чек на своих телефонах и в реальном времени отмечаете свои позиции.
  - **imageAlt:** CheqSplit: скан чека
  - **bullets[0]:** Отмечайте, кто за что платит
  - **bullets[1]:** Делите общие позиции, чаевые и сборы
  - **bullets[2]:** Сразу видно, кому и сколько платить
- **Step 3**
  - **label:** Добавляйте общие расходы
  - **body:** Откройте «Расходы» и нажмите «Добавить расход». Укажите описание, сумму и валюту, при желании категорию, выберите плательщика, затем «Все» или «Выбрать» для участников. Любой участник может добавить расход.
  - **imageAlt:** CheqSplit: совместные расходы
  - **bullets[0]:** Расходы от каждого участника
  - **bullets[1]:** Деление на всю группу или на выбранных людей
  - **bullets[2]:** Всё сохраняется в одной общей ленте
- **Step 4**
  - **label:** Посмотрите, кто кому должен
  - **body:** CheqSplit считает общий итог, расходы каждого участника и показывает, кто кому должен перевести деньги.
  - **imageAlt:** CheqSplit: баланс
  - **bullets[0]:** Общая сумма расходов
  - **bullets[1]:** Итог по каждому участнику
  - **bullets[2]:** Понятно, кто кому и сколько должен
- **Step 5**
  - **label:** Сохраните поездку и отчёт
  - **body:** Архивируйте завершённые поездки или экспортируйте подробный PDF-отчёт с расходами, итогами и наглядной графикой.
  - **imageAlt:** CheqSplit: отчёт по поездке
  - **bullets[0]:** Архив завершённых поездок
  - **bullets[1]:** Подробный PDF-отчёт
  - **bullets[2]:** Суммы, таблицы и графики
### `useCases`
- **title:** Любой общий расход
- **intro:** Собрались в ресторане, взяли вместе выезд на выходные, делите смету в поездке, покупки по дому, закупку на праздник: CheqSplit с этим справляется. Сканируйте, назначайте строки, учитывайте скидки — в конце честная итоговая сводка: в ней по строкам и по людям видно, кто, кому и сколько.
- **Item 1 — title:** Ресторан
  - **desc:** Считайте блюда по позициям, закрывайте счёт справедливо, без споров, кто сколько внёс.
- **Item 2 — title:** Поездки с друзьями
  - **desc:** Билеты, жильё, питание — в одной ленте, без путаницы, кто что купил.
- **Item 3 — title:** Семья
  - **desc:** Продукты, события, дом.
- **Item 4 — title:** Совместные покупки
  - **desc:** Подарки, опт, планы, где вносите деньги не в одиночку.
### `cta`
- **title:** Готовы упростить взаиморасчёты в группе?
- **body:** Скачайте CheqSplit бесплатно — тысячи групп уже сверяют цифры без ссор.
- **sectionAria:** Скачать CheqSplit бесплатно
- **imgAlt:** CheqSplit: старт, общие расходы и баланс
- **badgeAlts.appStore:** Скачать бесплатно в App Store
- **badgeAlts.play:** Скачать бесплатно в Google Play
- **groupAria:** Скачать приложение бесплатно
### `faq`
- **title:** Частые вопросы
- **1. Q:** Что такое CheqSplit?
  - **A:** Это бесплатное приложение, чтобы сканировать чеки, вести совместные расходы и смотреть, кто кому сколько должен, без таблиц и россыпи снимков в мессенджерах.
- **2. Q:** Можно разбить чек по позициям?
  - **A:** Да. Каждую строчку — своему человеку, каждый платит за то, что взял сам, а не за «средний чек на всех».
- **3. Q:** Подходит для поездок компанией?
  - **A:** Храните общие расходы в одной группе: указывайте плательщика и участников, добавляйте чеки во вкладке «Чеки» и смотрите, кто кому должен, в сводке. CheqSplit рассчитывает балансы, но не переводит деньги.
- **4. Q:** Только ресторан или нет?
  - **A:** Кафе, магазин, такси, отпуск — везде, где несколько человек делят один кошелёк.
- **5. Q:** Работает без интернета?
  - **A:** Часть данных хранится локально на устройстве, но совместный доступ к поездке и синхронизация с группой требуют подключения к сети.
- **6. Q:** Как пригласить друга?
  - **A:** Создайте поездку, добавьте расходы и поделитесь ссылкой. Кто по ней зайдёт, увидит те же цифры баланса, что и вы.
### `footer`
- **tagline:** Делите общие расходы справедливо и без лишних расчётов.
- **product:** Продукт
- **company:** Компания
- **legal:** Правовая информация
- **about:** Поддержка
- **contact:** Контакты
- **privacy:** Политика конфиденциальности
- **terms:** Условия использования
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
- **ogDescription:** Méltányosan oszd a költségeket: blokk beolvasás, tételek, egyenleg. Éttermek, utazások, bérlőtársak, baráti kör.
- **twitterDescription:** Egyszerű mód a közös költségek elszámolására táblázatok és folyamatos kézi számolás nélkül.
- **softwareDescription:** A CheqSplit segít költséget megosztani, blokkot szkennelni, közös kiadásokat követni, és megnézni, ki kinek mennyit tartozik, vacsorán, utazáson, csoportban.
### `nav`
- **features:** Funkciók
- **how:** Működés
- **useCases:** Használat
- **faq:** GYIK
### `header`
- **download:** Letöltés ingyen
### `hero`
- **title:** Osszátok meg a költségeket, szkenneljétek be a nyugtákat, a többit pedig bízzátok az alkalmazásra
- **body:** A CheqSplit segít a költségek megosztásában, a blokkok beolvasásában és a közös kiadások követésében, hogy tisztán lásd, ki kinek mennyivel tartozik — étteremben, utazáson, bevásárláskor, baráti vagy családi környezetben. Az alkalmazás ingyenesen letölthető.
- **alts[0]:** A CheqSplit kezdőképernyője az aktuális csoporttal
- **alts[1]:** Csoportáttekintés a résztvevők befizetéseivel
- **alts[2]:** Számlamegosztás, tétel sorok CheqSplit
### `features`
- **title:** Miért épp a CheqSplit?
- **Item 1 — title:** Blokkok beolvasása pillanatok alatt
  - **desc:** A szkenneléssel tételek, adók, végösszeg pár mp alatt, kézi pötyögés nélkül.
- **Item 2 — title:** Tételenkénti megosztás
  - **desc:** Minden sor a megfelelőhöz, nem vakon felezzük a végösszeget.
- **Item 3 — title:** Minden közös kiadás egy helyen
  - **desc:** Étterem, bolt, utak, mind egy idővonalon.
- **Item 4 — title:** Ki kinek tartozik
  - **desc:** Az app számol mindenkinek világosan.
### `how`
- **title:** Hogyan működik a CheqSplit
- **subtitle:** Öt lépés: a költségek megosztása, a blokkok beolvasása, a közös kiadások követése és, hogy ki kinek mennyivel tartozik, egyértelmesen – az utazás kezdetétől egy átlátható összegzésig.
- **stepPill(n):** For n=1…5 the pill text is: LÉPÉS 1 · LÉPÉS 2 · LÉPÉS 3 · LÉPÉS 4 · LÉPÉS 5
- **Step 1**
  - **label:** Hozz létre csoportot az utazáshoz
  - **body:** A kezdőképernyőn koppints a Csoport létrehozása gombra, nevezd el a csoportot, válassz pénznemet, majd hívj meg résztvevőket hivatkozással vagy QR-kóddal.
  - **imageAlt:** A CheqSplit kezdőképernyője az aktuális csoporttal
  - **bullets[0]:** Gyors indulás
  - **bullets[1]:** Meghívó linkkel vagy QR-kóddal
  - **bullets[2]:** Vacsora, nyaralás, bármilyen csapat
- **Step 2**
  - **label:** Bontsd szét a blokkot tételenként
  - **body:** Ugyanazt a bizonylatot látjátok a telefonon, valós időben húzzátok hozzá, ki mit vállal.
  - **imageAlt:** CheqSplit: blokk beolvasás
  - **bullets[0]:** Jelöld, ki miért fizet
  - **bullets[1]:** Közös fogások, borravaló, díjak
  - **bullets[2]:** Egyből látszik, kinek, mennyi, kinek
- **Step 3**
  - **label:** Rögzítsd a közös kiadásokat
  - **body:** Nyisd meg a Kiadások lapot, és koppints a Kiadás hozzáadása gombra. Add meg a leírást, összeget és pénznemet, opcionálisan a kategóriát, válaszd ki a fizetőt, majd a Mindenki vagy Egyéni lehetőséget a résztvevőkhöz. Bárki hozzáadhat kiadást.
  - **imageAlt:** CheqSplit: közös költség
  - **bullets[0]:** Mindenki rögzítheti a saját tételét
  - **bullets[1]:** Az egész csapatra vagy kiválasztott tagokra
  - **bullets[2]:** Egy helyen, egy közös folyam
- **Step 4**
  - **label:** Nézd meg, ki kinek, mennyivel tartozik
  - **body:** A CheqSplit kiszámolja a végösszeget, tagonként, és mutatja, kinek kinek kell utalnia.
  - **imageAlt:** CheqSplit: egyenleg
  - **bullets[0]:** Teljes kiadási összeg
  - **bullets[1]:** Eredmény személyenként
  - **bullets[2]:** Egyértelmű, ki, kinek, mennyi
- **Step 5**
  - **label:** Mentsd el az utazást és az összesítést
  - **body:** Archiváld a lezárt túrákat, vagy exportálj részletes PDF-et kiadásokkal, összesítéssel, áttekinthető diagrammal.
  - **imageAlt:** CheqSplit: utazási, kiadási összegzés
  - **bullets[0]:** Befejezett utak archívuma
  - **bullets[1]:** Részletes PDF-jelentés
  - **bullets[2]:** Összegek, táblák, diagramok
### `useCases`
- **title:** Minden közös kiadáshoz
- **intro:** Közös vacsora, túra, bevásárlás, baráti pénz: amikor többen dobtok a közösbe, a CheqSplit ad rendet. Beolvasod a blokkot, a tételeket a megfelelő emberekhez kapcsolod, kezeled a kedvezményt és a díjakat, a végén pedig tiszta, érthető lezárás, félreértések nélkül.
- **Item 1 — title:** Éttermek
  - **desc:** Tételekre bont, igazságosan zárj.
- **Item 2 — title:** Csoportos utazások
  - **desc:** Járat, szoba, eledel egy lapon.
- **Item 3 — title:** Család
  - **desc:** Kosár, program, benti kiadás.
- **Item 4 — title:** Közös bevásárlás
  - **desc:** Ajándék, nagybevásárlás, baráti vagy családi büdzsé, minden tétel nyomon.
### `cta`
- **title:** Egyszerűbb elszámolás, kevesebb számológéppel töltött perc?
- **body:** Töltsd le ingyen a CheqSplitet – átláthatóan rendezi a közös kiadásokat, számolópapír nélkül, kevesebb félreértéssel.
- **sectionAria:** CheqSplit ingyenes letöltése
- **imgAlt:** CheqSplit kezdőképernyő, közös számlák és kiadások
- **badgeAlts.appStore:** Ingyenes letöltés App Store-ból
- **badgeAlts.play:** Ingyenes letöltés Google Play-ből
- **groupAria:** Alkalmazás ingyenes letöltése
### `faq`
- **title:** Gyakori kérdések
- **1. Q:** Mi a CheqSplit?
  - **A:** Ingyenes alkalmazás közös számlákhoz: blokk beolvasás, tételes bontás, mindenki látja az egyenleget, ki kinek mennyit.
- **2. Q:** Lehet tételsoronként osztani a blokkot?
  - **A:** Igen. A tételek emberekhez rendelhetők, mindenki azt fizeti, amit ténylegesen fogyasztott.
- **3. Q:** Működik csoportos utazáshoz is?
  - **A:** Tartsd a közös kiadásokat egy csoportban: rögzítsd a fizetőt és a résztvevőket, adj hozzá nyugtákat a Nyugták lapon, és nézd meg az Összesítésben, ki kinek tartozik. A CheqSplit egyenlegeket számol; pénzt nem utal.
- **4. Q:** Csak étteremhez jó?
  - **A:** Bárhol, ahol több ember osztja a költséget: kocsma, bevásárlás, rövid vagy hosszabb utazás, közös vásárlás – a lényeg, hogy ne egyedül fizesd.
- **5. Q:** Használható hálózat nélkül is?
  - **A:** Bizonyos adat helyben is marad, de a közös utazást és a többiekkel való szinkront internethez kell kötni.
- **6. Q:** Hogyan hívok meg valakit?
  - **A:** Indíts utazást, vegyél fel tételeket, oszd meg a meghívó linket, a belépő ugyanazt az egyenleget látja, amit te.
### `footer`
- **tagline:** Osszátok el igazságosan a közös kiadásokat, felesleges számolgatás nélkül.
- **product:** Termék
- **company:** Cég
- **legal:** Jogi információk
- **about:** Ügyfélszolgálat
- **contact:** Kapcsolat
- **privacy:** Adatvédelmi irányelvek
- **terms:** Felhasználási feltételek
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
- **download:** Ücretsiz indir
### `hero`
- **title:** Harcamaları paylaşın, fişleri tarayın ve gerisini uygulamaya bırakın
- **body:** CheqSplit, masrafları paylaşmanıza, fişleri taramanıza, ortak giderleri izlemenize ve kimin kime ne kadar borçlu olduğunu anında görmenize yardımcı olur: restoranda, yolculukta, market alışverişinde, grup içinde. Uygulamayı ücretsiz indirebilirsiniz.
- **alts[0]:** Geçerli grubu gösteren CheqSplit ana ekranı
- **alts[1]:** Katılımcı katkılarını gösteren grup özeti
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
- **title:** CheqSplit nasıl çalışır
- **subtitle:** Beş adım: masrafları bölüşmek, fişleri taramak, ortak harcamaları takip etmek ve kimin kime ne kadar borçlu olduğunu görmek – yeni geziden herkesin anlayacağı rapora.
- **stepPill(n):** For n=1…5 the pill text is: ADIM 1 · ADIM 2 · ADIM 3 · ADIM 4 · ADIM 5
- **Step 1**
  - **label:** Seyahatiniz için grup oluşturun
  - **body:** Ana ekranda Grup oluştur seçeneğine dokunun, gruba ad verin, para birimini seçin ve katılımcıları bağlantı veya QR koduyla davet edin.
  - **imageAlt:** Geçerli grubu gösteren CheqSplit ana ekranı
  - **bullets[0]:** Hemen başlarsın
  - **bullets[1]:** Link veya QR ile davet
  - **bullets[2]:** Yemek, tatil, her türlü ekip
- **Step 2**
  - **label:** Hesabı kalemlere göre böl
  - **body:** Hepiniz aynı fişi telefonda görürsünüz; anlık olarak, kime ne ait, işaretlersiniz.
  - **imageAlt:** CheqSplit: fiş taraması
  - **bullets[0]:** Kimin, neye ne kadar ödeyeceğini işaretle
  - **bullets[1]:** Paylaşımlı yemekler, bahşiş, ekler
  - **bullets[2]:** Bir bakışta, kimin kime, ne
- **Step 3**
  - **label:** Ortak giderleri ekle
  - **body:** Harcamalar sekmesini açıp Harcama ekle seçeneğine dokunun. Açıklama, tutar ve para birimini girin, isteğe bağlı kategori ve ödeyeni seçin; katılımcılar için Herkes veya Özel seçeneğini kullanın. Her katılımcı harcama ekleyebilir.
  - **imageAlt:** CheqSplit: paylaşılan gider
  - **bullets[0]:** Her üye gideri ekler
  - **bullets[1]:** Bütün gruba veya yalnızca seçtiğiniz kişilere böl
  - **bullets[2]:** Hepsi tek, ortak akışta dursun
- **Step 4**
  - **label:** Kimin kime ne kadar borçlu olduğunu gör
  - **body:** CheqSplit toplamı ve kişi başı harcamaları hesaplar; kimin kime ne kadar göndermesi gerektiğini gösterir.
  - **imageAlt:** CheqSplit: bakiyeler
  - **bullets[0]:** Giderlerin toplamı
  - **bullets[1]:** Her kişi için net sonuç
  - **bullets[2]:** Açık: kimin, kime, ne
- **Step 5**
  - **label:** Geziyi ve raporu sakla
  - **body:** Bitti: geziyi arşivle ya da harcamalar, özet ve okunur grafik içeren, ayrıntılı bir PDF dışa aktar.
  - **imageAlt:** CheqSplit: gezi raporu
  - **bullets[0]:** Geçmiş gezilerin arşivi
  - **bullets[1]:** Ayrıntılı PDF rapor
  - **bullets[2]:** Miktarlar, tablolar, grafikler
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
- **body:** CheqSplit’i ücretsiz indirin — binlerce grup hesabı kavgası olmadan hallediyor.
- **sectionAria:** CheqSplit’i ücretsiz indir
- **imgAlt:** CheqSplit açılış, hesap böl
- **badgeAlts.appStore:** App Store’da ücretsiz indir
- **badgeAlts.play:** Google Play’de ücretsiz indir
- **groupAria:** Uygulamayı ücretsiz indir
### `faq`
- **title:** Sıkça sorulan sorular
- **1. Q:** CheqSplit nedir?
  - **A:** Ücretsiz ortak masraf ve hesap uygulaması: fiş taraması, satırları kişilere atama, kimin kime ne kadar borçlu olduğunu tek ekranda görmek.
- **2. Q:** Fişi satır satır bölebiliyor musunuz?
  - **A:** Evet. Her kalemi tüketene göre ayrı ayrı paylaşabilirsiniz.
- **3. Q:** Arkadaşlarla tatile uygun mu?
  - **A:** Ortak harcamaları tek grupta tutun: ödeyeni ve katılımcıları kaydedin, Fişler sekmesinden fiş ekleyin ve Özette kimin kime borçlu olduğunu görün. CheqSplit bakiyeleri hesaplar; para transferi yapmaz.
- **4. Q:** Sadece restoran için mi?
  - **A:** Hayır. Kafe, market, gezi, ortak alışveriş, birkaç kişinin aynı kasadan ödediği her senaryo için uygundur.
- **5. Q:** Çevrimdışı çalışıyor mu?
  - **A:** Bazı veriler cihazda kalabilir, ancak geziyi paylaşmak ve grup ile senkron kalmak için internet gerekir.
- **6. Q:** Birini geziye nasıl davet ederim?
  - **A:** Bir gezi oluşturun, harcamaları girin, davet bağlantısını paylaşın; katılan aynı bakiyeleri sizinle birlikte görür.
### `footer`
- **tagline:** Grup harcamalarını zahmetsizce ve adil şekilde bölüşün.
- **product:** Ürün
- **company:** Şirket
- **legal:** Yasal
- **about:** Destek
- **contact:** İletişim
- **privacy:** Gizlilik Politikası
- **terms:** Kullanım Koşulları
- **rights:** Tüm hakları saklıdır.
### `a11y`
- **keyFeatures:** Ana özellikler
- **primaryNav:** Birincil gezinme
- **howSection:** Nasıl çalışır
- **logoHome:** CheqSplit ana sayfa

---

