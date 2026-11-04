import type { Dictionary } from "../types";

export const cs: Dictionary = {
  meta: {
    title: "Aplikace na dělení výdajů s přáteli | CheqSplit",
    description:
      "Skenujte účtenky, zaznamenávejte společné výdaje a sledujte zůstatky s přáteli.",
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
    restaurant: "Účet v restauraci",
    groupExpenses: "Skupinové výdaje",
    guides: "Návody",
  },
  header: { download: "Stáhnout zdarma" },
  hero: {
    title: "Rozdělte výdaje s přáteli a zjistěte, kdo komu dluží",
    body: "Skenujte účtenky, zaznamenávejte společné výdaje a sledujte zůstatky s přáteli. Zvěte lidi z předchozích skupin a řešte náklady ve skupinovém nebo soukromém chatu.",
    alts: [
      "Hlavní obrazovka CheqSplit s aktuální skupinou",
      "Přehled skupiny s příspěvky účastníků",
      "CheqSplit: rozdělení účtu po položkách a řádky účtenky",
    ],
  },
  heroSlide2: {
    title: "Rozdělte účet v restauraci rychleji",
    description: "Naskenujte účtenku, přiřaďte položky a jasně uvidíte podíl každého — ideální pro večeře s přáteli, rande i skupinová posezení.",
    button: "Zjistěte, jak rozdělit účet a naskenovat účtenku",
  },
  workflows: {
    title: "Vyberte, co chcete rozdělit",
    restaurantTitle: "Účet z restaurace",
    restaurantText:
      "Naskenujte účtenku, zkontrolujte položky, pozvěte stůl a přiřaďte každou položku lidem, kteří ji objednali nebo sdíleli.",
    restaurantCta: "Rozdělit účet z restaurace",
    groupTitle: "Skupinové nebo cestovní výdaje",
    groupText:
      "Uchovávejte společné výdaje v jedné skupině: zaznamenejte plátce a účastníky, přidejte účtenky v záložce Účtenky a v Přehledu zkontrolujte, kdo komu dluží. CheqSplit počítá zůstatky; nepřevádí peníze.",
    groupCta: "Sledovat skupinové výdaje",
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
        label: "Vytvořte skupinu pro cestu",
        body: "Na hlavní obrazovce klepněte na Vytvořit skupinu, pojmenujte ji, zvolte měnu a pozvěte účastníky odkazem nebo QR kódem.",
        imageAlt: "Hlavní obrazovka CheqSplit s aktuální skupinou",
        bullets: [
          "Rychlý start",
          "Pozvánky přes odkaz nebo QR",
          "Večeře, dovolená i jakákoli skupina",
        ],
      },
      {
        label: "Rozdělte účet podle položek",
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
        body: "Otevřete Výdaje a klepněte na Přidat výdaj. Zadejte popis, částku a měnu, případně kategorii, vyberte plátce a potom Všichni nebo Vlastní pro účastníky. Výdaj může přidat každý účastník.",
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
        label: "Uložte cestu i přehled",
        body: "Dokončené cesty archivujte nebo exportujte detailní PDF se souhrny, tabulkami a grafy.",
        imageAlt: "CheqSplit: přehled cesty se souhrnem výdajů",
        bullets: [
          "Archiv dokončených cest",
          "Kompletní PDF přehled",
          "Částky, tabulky a grafy",
        ],
      },
    ],
  },
  useCases: {
    title: "Pro skutečné společné výdaje",
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
        a: "Uchovávejte společné výdaje v jedné skupině: zaznamenejte plátce a účastníky, přidejte účtenky v záložce Účtenky a v Přehledu zkontrolujte, kdo komu dluží. CheqSplit počítá zůstatky; nepřevádí peníze.",
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
    tagline: "Rozdělte společné výdaje spravedlivě a bez zbytečného počítání.",
    product: "Produkt",
    company: "Společnost",
    legal: "Právní informace",
    about: "Podpora",
    contact: "Kontakt",
    privacy: "Zásady ochrany osobních údajů",
    terms: "Podmínky používání",
    deleteAccount: "Smazat účet",
    deleteData: "Smazat vaše data",
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

