import type { Dictionary } from "../types";

export const cs: Dictionary = {
  meta: {
    title: "CheqSplit: Rozdělte výdaje, skenujte účtenky a sledujte společné účty",
    description:
      "Rozdělte výdaje, skenujte účtenky a sledujte sdílené účty. CheqSplit hned ukáže, kdo komu dluží po restauraci, výletu, nákupu i dalších skupinových plánech.",
    ogDescription:
      "Rozdělte výdaje férově: skenujte účtenky, sledujte společné výdaje a mějte jasno, kdo komu dluží. Ideální pro restaurace, skupinové cesty, spolubydlení i rodinu.",
    twitterDescription:
      "Rozdělujte výdaje a společné účty bez složitých výpočtů, screenshotů a tabulek - CheqSplit to udělá za vás.",
    softwareDescription:
      "CheqSplit pomáhá rozdělit výdaje, skenovat účtenky, sledovat společné účty a jasně vidět, kdo komu dluží za restaurace, cesty, nákupy i další společné aktivity.",
  },
  nav: {
    features: "Funkce",
    how: "Jak to funguje",
    useCases: "Použití",
    faq: "FAQ",
  },
  header: { download: "Stáhnout aplikaci zdarma" },
  hero: {
    title: "Rozdělte výdaje, skenujte účtenky a zbytek nechte na aplikaci",
    body: "Rozdělte výdaje, skenujte účtenky a sledujte, co skupina utratila - a vždy budete vědět, kdo komu dluží po večeři, výletu, nákupu nebo společném večeru. Aplikaci si stáhnete zdarma.",
    alts: [
      "CheqSplit: skupinový výlet a sdílené výdaje",
      "Mobilní aplikace CheqSplit pro sdílené výdaje",
      "CheqSplit: rozdělení účtu po položkách a řádky účtenky",
    ],
  },
  heroSlide2: {
    title: "Rozdělte účet v restauraci rychleji",
    description: "Naskenujte účtenku, přiřaďte položky a jasně uvidíte podíl každého — ideální pro večeře s přáteli, rande i skupinová posezení.",
    button: "Zjistit více",
  },
  features: {
    title: "Proč CheqSplit?",
    items: [
      {
        title: "Rychlé skenování účtenek",
        desc: "Naskenujte účtenku a během pár sekund načtěte položky, daně i celkovou částku - bez přepisování.",
      },
      {
        title: "Rozdělení po položkách",
        desc: "Přiřaďte každou položku správným lidem místo dělení všeho napůl.",
      },
      {
        title: "Všechny skupinové výdaje na jednom místě",
        desc: "Útraty v restauraci, náklady na cestu, nákupy i další společné výdaje máte v jedné časové ose.",
      },
      {
        title: "Jasně vidíte, kdo komu dluží",
        desc: "Zůstatky se počítají automaticky, takže každý ví, co a kdy má vyrovnat.",
      },
    ],
  },
  how: {
    title: "Jak CheqSplit funguje",
    subtitle:
      "Pět kroků: rozdělte výdaje, skenujte účtenky, sledujte společné účty a zjistěte, kdo komu dluží - od nové cesty až po přehled, kterému celá skupina věří.",
    stepPill: (n) => `KROK ${n}`,
    steps: [
      {
        label: "Založte cestu během pár sekund",
        body: "Přidejte název, pozvěte lidi přes odkaz nebo QR kód a hned začněte dělit společné výdaje.",
        imageAlt: "CheqSplit: skupinová cesta a sdílené výdaje",
        bullets: [
          "Rychlý start",
          "Pozvánky přes odkaz nebo QR",
          "Večeře, dovolená i jakákoli skupina",
        ],
      },
      {
        label: "Rozdělte účet po řádcích",
        body: "Každý vidí stejný účet na svém telefonu a v reálném čase označí své položky.",
        imageAlt: "CheqSplit: sken účtenky a rozdělení účtu po položkách",
        bullets: [
          "Označte, kdo co platí",
          "Rozdělte i společné položky, spropitné a poplatky za obsluhu",
          "Jasně vidíte, kdo má kolik zaplatit",
        ],
      },
      {
        label: "Přidávejte společné výdaje",
        body: "Zaznamenejte, kdo zaplatil a mezi koho se má částka rozdělit.",
        imageAlt: "CheqSplit: mobilní obrazovka se společnými skupinovými výdaji",
        bullets: [
          "Výdaje od všech účastníků",
          "Rozdělení mezi celou skupinu nebo jen vybrané lidi",
          "Všechno v jednom sdíleném přehledu",
        ],
      },
      {
        label: "Zjistěte, kdo komu dluží",
        body: "CheqSplit vše sečte, ukáže podíl každého člověka a komu má poslat peníze.",
        imageAlt: "CheqSplit: souhrn zůstatků a přehled, kdo komu dluží",
        bullets: [
          "Celková výše výdajů",
          "Součty za jednotlivé osoby",
          "Přehledně kdo, komu a kolik dluží",
        ],
      },
      {
        label: "Uložte cestu i report",
        body: "Dokončené cesty archivujte nebo exportujte detailní PDF se souhrny, tabulkami a grafy.",
        imageAlt: "CheqSplit: report cesty se souhrnem výdajů",
        bullets: [
          "Archiv dokončených cest",
          "Kompletní PDF report",
          "Částky, tabulky a grafy",
        ],
      },
    ],
  },
  useCases: {
    title: "Vytvořeno pro reálné sdílené výdaje",
    intro:
      "Kdykoli dělíte výdaje s ostatními, CheqSplit se hodí: účty v restauraci, skupinové cesty, nákupy se spolubydlícími, rodinné výdaje i společné nákupy s přáteli. Naskenujte účtenku, přiřaďte položky, přidejte poplatky nebo slevy a získejte jasné vyrovnání, se kterým všichni souhlasí - bez počítání na ubrousek.",
    items: [
      {
        title: "Restaurace",
        desc: "Rozepište účet po položkách, rozdělte podle jídel a uzavřete útratu férově.",
      },
      { title: "Skupinové výlety", desc: "Lety, ubytování a jídlo v jednom průběžném součtu." },
      { title: "Domov a rodina", desc: "Potraviny, akce i každodenní domácí výdaje." },
      {
        title: "Společné nákupy",
        desc: "Dárky, větší nákupy i projekty, které sdílíte s přáteli.",
      },
    ],
  },
  cta: {
    title: "Připraveni dělit výdaje bez stresu?",
    body: "Stáhněte si CheqSplit zdarma a zjednodušte společné účty i skupinové výdaje pro všechny.",
    sectionAria: "Stáhnout CheqSplit zdarma",
    imgAlt: "Domovská obrazovka CheqSplit: rozdělení účtů a sledování skupinových výdajů",
    badgeAlts: {
      appStore: "Stáhnout zdarma v App Store",
      play: "Stáhnout zdarma v Google Play",
    },
    playSoon: "Brzy",
    playDisabledHint: "Zatím není k dispozici",
    groupAria: "Stáhnout aplikaci zdarma",
  },
  faq: {
    title: "Často kladené otázky",
    items: [
      {
        q: "Co je CheqSplit?",
        a: "CheqSplit je bezplatná aplikace pro dělení účtů a skupinových výdajů. Naskenujte účtenky, rozdělte položky, sledujte společné náklady a mějte přehled, kdo komu dluží, na jednom místě.",
      },
      {
        q: "Můžu rozdělit účtenku po položkách?",
        a: "Ano. Každý řádek můžete přiřadit konkrétním lidem, aby každý platil jen to, co si skutečně objednal nebo využil.",
      },
      {
        q: "Hodí se CheqSplit na skupinové cesty?",
        a: "Ano. Založte cestu, přidávejte společné výdaje, pozvěte skupinu, připojte účtenky a na konci exportujte přehled, kdo komu dluží.",
      },
      {
        q: "Můžu CheqSplit používat v restauraci i při nákupech potravin?",
        a: "Ano. Funguje na účty z restaurace, kavárny, nákupy potravin i jakoukoli situaci, kdy se částka dělí mezi více lidí.",
      },
      {
        q: "Funguje CheqSplit offline?",
        a: "Na telefonu zvládnete hodně věcí lokálně, ale sdílení cesty a synchronizace s ostatními vyžaduje internetové připojení.",
      },
      {
        q: "Jak pozvu lidi do cesty?",
        a: "V CheqSplit založte cestu, přidejte výdaje a sdílejte odkaz na cestu. Po připojení uvidí lidé společný zůstatek i svůj podíl.",
      },
    ],
  },
  footer: {
    tagline: "Dělte skupinové výdaje férově, rychle a bez dohadů.",
    product: "Produkt",
    company: "Společnost",
    legal: "Právní",
    about: "O nás",
    contact: "Kontakt",
    privacy: "Soukromí",
    terms: "Podmínky",
    rights: "Všechna práva vyhrazena.",
  },
  a11y: {
    keyFeatures: "Klíčové funkce",
    primaryNav: "Hlavní navigace",
    openMenu: "Otevřít menu",
    howSection: "Jak to funguje",
    logoHome: "Domů CheqSplit",
  },
};

