# Vocabular CheqSplit – texte pe site (pe limbi)

Sursa principală: `src/i18n/dictionaries/{en,ro,fr,de,es,it,pl,ru,hu,tr}.ts` (interfață + SEO).  
Comutator limbă: `src/i18n/config.ts` (`localeDisplayNames`, `localePickerLabel`, `localeFlags`).  
Numele mărcii: **CheqSplit** (în cod: `src/data/landing.ts` / JSON-LD) – același în toate limbile.

---

## English (`en`) — `en.ts`

### meta
- **title:** CheqSplit: Split Expenses, Scan Receipts & Track Group Bills
- **description:** CheqSplit helps you split expenses, scan receipts, track shared bills, and see who owes whom after restaurants, trips, groceries, or group activities.
- **ogDescription:** Split expenses fairly: scan receipts, track shared bills, and see who owes whom. Great for restaurants, trips, roommates, and group activities.
- **twitterDescription:** The easy way to split expenses and shared bills without awkward math or spreadsheets.
- **softwareDescription:** (same idea as description)

### nav
- **features:** Features
- **how:** How it works
- **useCases:** Use cases
- **faq:** FAQ

### header
- **download:** Download app

### hero
- **title:** Split Expenses, Scan Receipts, and Track Group Bills
- **body:** (see meta description)
- **alts[3]:** (telefoane) group trip / shared expenses / bill split & receipt lines

### features
- **title:** Why use CheqSplit?
- **items[4] title/desc:** Scan bills instantly; Split by item; Track everything; See who owes whom (each with paragraph)

### how
- **title:** How CheqSplit Works
- **subtitle:** Five clear steps from trip to a clean report everyone can trust.
- **stepPill(n):** `Step ${n}`
- **steps[5]:** label, body, imageAlt, bullets[3] each (create trips; split by item; track; settle; share reports)

### useCases
- **title:** Perfect for Any Shared Expense
- **intro:** (long paragraph)
- **items[4]:** Restaurants, Group trips, Families, Shared shopping (title+desc)

### cta
- **title, body, sectionAria, imgAlt, groupAria**
- **badgeAlts.appStore, badgeAlts.play**
- **playSoon:** Soon
- **playDisabledHint:** Not available yet

### faq
- **title:** Frequently Asked Questions
- **items[6] q/a:** (see `en.ts`)

### footer
- **tagline, product, company, legal, about, contact, privacy, terms, rights**

### a11y
- **keyFeatures, primaryNav, howSection, logoHome**

---

## Română (`ro`) — `ro.ts`

### meta
- **title:** CheqSplit: împarte cheltuielile, scanează bonurile, urmărește facturile de grup
- **description, ogDescription, twitterDescription, softwareDescription:** (vezi fișierul)

### nav
- **features:** Funcții | **how:** Cum funcționează | **useCases:** Cazuri de utilizare | **faq:** Întrebări frecvente

### header
- **download:** Descarcă aplicația

### hero
- **title:** Împarte cheltuielile, scanează bonurile și află cine plătește ce
- **body, alts[3]:** (vezi `ro.ts`)

### features
- **title:** De ce CheqSplit?  
- **items[4]:** (Scanează facturi instant; Împarte pe articol; Urmărește totul; Vezi cine cui trebuie) + descrieri

### how, useCases, cta, faq, footer, a11y
- Structură identică cu `en`, textele complete în `ro.ts`.

---

## Français (`fr`) — `fr.ts`

### meta
- **title:** CheqSplit : partager les dépenses, scanner des tickets et suivre les factures de groupe
- (description, og, twitter, software) — vezi `fr.ts`

### nav
- **features:** Fonctionnalités | **how:** Fonctionnement | **useCases:** Cas d'usage | **faq:** FAQ

### header
- **download:** Télécharger l'app

### hero
- **title:** Partagez les dépenses, scannez l’addition et suivez les comptes du groupe
- (body, alts)

### features … a11y
- Vezi `fr.ts` (Pourquoi choisir…, FAQ Questions fréquentes, etc.)

---

## Deutsch (`de`) — `de.ts`

### meta
- **title:** CheqSplit: Kosten teilen, Belege scannen & Gruppenkosten im Blick
### nav
- Funktionen | So funktioniert's | Einsatzbereiche | FAQ
### header
- App herunterladen
### hero
- **title:** Gemeinsame Kosten teilen, Belege scannen und sofort sehen, wer wem was schuldet
- (restant în `de.ts`)

---

## Español (`es`) — `es.ts`

### nav
- Funciones | Cómo funciona | Casos de uso | Preguntas
### header
- Descargar app
### hero
- **title:** Reparte los gastos, escanea el recibo y deja claro quién debe a quién
- (tot textul în `es.ts`)

---

## Italiano (`it`) — `it.ts`

### nav
- Funzionalità | Come funziona | Casi d'uso | Domande
### header
- Scarica l'app
### hero
- **title:** Spartisci le spese, scansiona lo scontrino e vedi in tempo reale i saldi
- (FAQ scurt, rest în `it.ts`)

---

## Polski (`pl`) — `pl.ts`

### nav
- Funkcje | Działanie | Zastosowania | FAQ
### header
- Pobierz aplikacjă
### hero
- **title:** Dziel koszty, skanuj paragony i w każdej chwili wiedz, kto komu i ile
- (pytania FAQ: "Najczęściej pytania" – vezi `pl.ts`)

---

## Русский (`ru`) — `ru.ts`

### nav
- Возможности | Как устроено | Сценарии | Вопросы
### header
- Скачать приложение
### hero
- **title:** Делитесь тратами, сканируйте чеки и смотрите, кто кому и сколько должен
- **features.title:** Почему CheqSplit?
- (restant în `ru.ts`)

---

## Magyar (`hu`) — `hu.ts`

### nav
- Funkciók | Működés | Használat | GYIK
### header
- Alkalmazás letöltése
### hero
- **title:** Oszd a számlát, szkenelj blokkot, és tudd, ki kinek és mennyi tartozik
- (restant în `hu.ts`)

---

## Türkçe (`tr`) — `tr.ts`

### nav
- Özellikler | Nasıl çalışır | Kullanım alanları | S.S.S.
### header
- Uygulamayı indir
### hero
- **title:** Giderleri paylaş, fişi tara, grupta kimin kime ne borçlu olduğunu anında gör
- (restant în `tr.ts`)

---

## Comutator limbă (toate limile) — `config.ts`

| Cod | Steag (emoji) | Denumire în listă | Etichetă „Limbă” lângă steag |
|-----|----------------|-------------------|------------------------------|
| en  | 🇬🇧            | English           | Language |
| ro  | 🇷🇴            | Română            | Limbă    |
| ru  | 🇷🇺            | Русский           | Язык     |
| fr  | 🇫🇷            | Français          | Langue   |
| de  | 🇩🇪            | Deutsch           | Sprache  |
| es  | 🇪🇸            | Español           | Idioma   |
| it  | 🇮🇹            | Italiano          | Lingua   |
| pl  | 🇵🇱            | Polski            | Język    |
| hu  | 🇭🇺            | Magyar            | Nyelv    |
| tr  | 🇹🇷            | Türkçe            | Dil      |

---

## Notă

Pentru **conținut 100% literal** (copy-paste) al fiecărui câmp, sursa adevărată rămân fișierele TypeScript: fiecare cheie e tipată în `src/i18n/types.ts` interfața `Dictionary`, iar toate șirurile sunt listate câte unul per limbă în fișierul corespunzător din `src/i18n/dictionaries/`.

*Generat / actualizat conform structurii repo (hero titles reflectă ultimele rafinări SEO).*

---

## Structura `Dictionary` (același set de chei în fiecare limbă)

Vezi `src/i18n/types.ts`. Rezumat:

- **meta** — `title`, `description`, `ogDescription`, `twitterDescription`, `softwareDescription`
- **nav** — `features`, `how`, `useCases`, `faq`
- **header** — `download`
- **hero** — `title`, `body`, `alts[0..2]`
- **features** — `title`, apoi `items[0..3].title` și `items[0..3].desc`
- **how** — `title`, `subtitle`, `stepPill(n)` (Șablon: „Step 1” / „Pasul 1” / …), apoi `steps[0..4]:` fiecare cu `label`, `body`, `imageAlt`, `bullets[0..2]`
- **useCases** — `title`, `intro`, `items[0..3].title`, `items[0..3].desc`
- **cta** — `title`, `body`, `sectionAria`, `imgAlt`, `badgeAlts.appStore`, `badgeAlts.play`, `playSoon`, `playDisabledHint`, `groupAria`
- **faq** — `title`, `items[0..5].q`, `items[0..5].a`
- **footer** — `tagline`, `product`, `company`, `legal`, `about`, `contact`, `privacy`, `terms`, `rights`
- **a11y** — `keyFeatures`, `primaryNav`, `howSection`, `logoHome`

**Text integral:** deschide `src/i18n/dictionaries/{limba}.ts` — fiecare fișier = vocabularul complet al acelei limbi.
