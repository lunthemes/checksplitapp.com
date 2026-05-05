import type { PrivacyPage } from "../../types";

const link = (href: string, text: string) =>
  `<a class="font-medium text-brand-600 underline hover:text-brand-700" href="${href}">${text}</a>`;

export const privacyHu: PrivacyPage = {
  metaTitle: "Adatvédelmi irányelvek – CheqSplit",
  metaDescription:
    "Hogyan gyűjti, használja és védi a CheqSplit az Ön adatait mobilalkalmazásunk használata során.",
  h1: "Adatvédelmi irányelvek",
  lastUpdatedPrefix: "Utolsó frissítés:",
  lastUpdatedDate: "2026. március 25.",
  intro:
    'A CheqSplit („mi”, „a miénk” vagy „minket”) elkötelezett az Ön magánéletének védelme mellett. Ez az Adatvédelmi szabályzat elmagyarázza, hogyan gyűjtjük, használjuk és védjük az Ön adatait mobilalkalmazásunk használata során.',
  s1Title: "1 — Milyen adatokat gyűjtünk",
  s1Intro: "A CheqSplit a számlamegosztás működéséhez szükséges minimális adatokat gyűjti:",
  s1Bullets: [
    {
      label: "Hitelesítés",
      text: "A CheqSplit névtelen munkamenettel is használható, vagy e-mail és jelszóval jelentkezhet be / kapcsolhatja össze fiókját (a Firebase Authentication tárolja és ellenőrzi), vagy Google-fiókkal léphet be. E-mail/jelszó vagy Google esetén megkapjuk a Firebase által a fiókjához társított azonosítókat (általában az e-mailt, Google esetén a nevét), hogy más eszközökön is be tudjon jelentkezni és helyreállíthassa a hozzáférést. A jelszavakat a Firebase kezeli; nem tároljuk a jelszavát nyílt szövegként.",
    },
    {
      label: "Számla- és utazásadatok",
      text: "Az Ön által önként megadott információk, beleértve a tételek nevét, mennyiségét, árát, a résztvevők nevét, az utazások nevét és a kapcsolódó közös költségadatokat.",
    },
    {
      label: "Nyugtaképek és szkennelés",
      text: "Az Ön által készített vagy importált fényképeket az eszközön lehet elemezni eszközön belüli szövegfelismeréssel (OCR). Ha az alkalmazásban be van kapcsolva az okos nyugtaszkennelés, a nyugta képének egy része és/vagy a kinyert szöveg elküldhető a Google generatív AI (Gemini) szolgáltatásához a tételek és összegek felismeréséhez. A számla megosztása előtt mindig ellenőrizze és javítsa a tételeket.",
    },
    {
      label: "Előfizetések",
      text: "Prémium csomag vásárlása esetén az Apple dolgozza fel a fizetést. Az előjogosultság ellenőrzéséhez a RevenueCat-et használjuk; a RevenueCat megkapja az alkalmazás felhasználói azonosítóját és a vásárlással kapcsolatos adatokat az ő szabályzatuk szerint.",
    },
    {
      label: "Eszközinformációk",
      text: "Alapvető eszköz- és diagnosztikai adatok az alkalmazás működéséhez és az összeomlások jelentéséhez.",
    },
  ],
  s2Title: "2 — Hogyan használjuk fel az Ön adatait",
  s2Intro: "Az összegyűjtött információkat arra használjuk, hogy:",
  s2List: [
    "Biztosítsuk a számlamegosztás és -megosztás funkcióit",
    "Valós idejű együttműködést tegyünk lehetővé más résztvevőkkel",
    "Tároljuk a számlaelőzményeket az Ön kényelme érdekében",
    "Javítsuk az alkalmazás teljesítményét és javítsuk a hibákat",
  ],
  s3Title: "3 — Adattárolás és biztonság",
  s3Intro: "Az Ön adatait biztonságosan tároljuk a Google Firebase szolgáltatásokkal:",
  s3List: [
    "A számlaadatok a Firebase Realtime Database-ben vannak tárolva, biztonsági szabályokkal, amelyek biztosítják, hogy csak az engedélyezett résztvevők férjenek hozzá az adott számlákhoz.",
    "Az adatok átvitele HTTPS-sel titkosított.",
    "Nem tárolunk fizetési adatokat, és nem dolgozunk fel fizetéseket.",
  ],
  s4Title: "4 — Adatmegosztás",
  s4Intro:
    "Nem értékesítjük, nem cseréljük ki és nem béreljük ki személyes adatait harmadik feleknek. Az Ön adatai csak akkor oszthatók meg:",
  s4List: [
    "Azokkal a résztvevőkkel, akiket meghív egy számla megosztására (látják a számla tételeit és az Ön által választott megjelenítési nevet)",
    "Szolgáltatókkal (Firebase/Google) a tárhely és infrastruktúra érdekében",
    "Ha a törvény megköveteli, vagy jogaink védelme érdekében",
  ],
  s5Title: "5 — Adatmegőrzés",
  s5Body:
    "A számlaadatok addig maradnak meg, amíg az alkalmazásban megtartja őket. Bármikor törölheti a számlákat. A befejezett munkamenetek az eszközén helyben tárolódnak, és az alkalmazás beállításaiban törölhetők.",
  s6Title: "6 — Az Ön jogai",
  s6Intro: "Önnek joga van:",
  s6List: [
    "Hozzáférni az alkalmazásban tárolt adataihoz",
    "Törölni a számláit és a munkamenet-előzményeket",
    "Információt kérni az általunk tárolt adatokról",
  ],
  s7Title: "7 — Gyermekek adatvédelme",
  s7Body:
    "A CheqSplit nem 13 év alatti gyermekek számára készült. Tudatosan nem gyűjtünk személyes adatokat gyermekektől.",
  s8Title: "8 — Harmadik felek szolgáltatásai",
  s8Intro: "Alkalmazásunk a következő harmadik féltől származó szolgáltatásokat használja:",
  s8Bullets: [
    {
      label: "Google Firebase",
      text: `Hitelesítés, Realtime Database és kapcsolódó infrastruktúra. Link: ${link("https://firebase.google.com/support/privacy", "https://firebase.google.com/support/privacy")}`,
    },
    {
      label: "Google AI (Gemini)",
      text: `Opcionális felhős feldolgozás a nyugták értelmezéséhez, ha elérhető az okos szkennelés. Link: ${link("https://ai.google.dev/gemini-api/terms", "https://ai.google.dev/gemini-api/terms")}, és a Google adatvédelmi szabályzatai érvényesek.`,
    },
    {
      label: "RevenueCat",
      text: `Előfizetés állapota és alkalmazáson belüli vásárlások kezelése. Link: ${link("https://www.revenuecat.com/privacy", "https://www.revenuecat.com/privacy")}`,
    },
    {
      label: "Apple",
      text: "Az alkalmazás terjesztése és alkalmazáson belüli vásárlások az App Store-on keresztül.",
    },
    {
      label: "Eszközön belüli OCR",
      text: "A nyugtaképekről származó szövegfelismerés az eszközön futhat az Apple eszközön belüli API-jaival (Androidon az eszköz/gyártó OCR-je, ahol alkalmazható).",
    },
  ],
  s9Title: "9 — Változások ebben a szabályzatban",
  s9Body:
    'Időnként frissíthetjük ezt az Adatvédelmi szabályzatot. A változásokról az új szabályzat alkalmazásban történő közzétételével és a „Utolsó frissítés” dátumának módosításával értesítjük.',
  s10Title: "10 — Kapcsolat",
  s10Intro: "Ha kérdése van ezzel az Adatvédelmi szabályzattal kapcsolatban, lépjen velünk kapcsolatba:",
  emailLabel: "E-mail:",
  developerLabel: "Fejlesztő:",
  developerName: "Lunthemes",
  relatedNavLabel: "Lásd még:",
  relatedTerms: "Szolgáltatási feltételek",
  relatedDeleteAccount: "Fiók törlése",
  relatedDeleteData: "Adatok törlése",
};
