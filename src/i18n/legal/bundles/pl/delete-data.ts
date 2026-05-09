import type { DeleteDataPage } from "../../types";

const mail = '<a class="font-medium text-brand-600 underline hover:text-brand-700" href="mailto:support@cheqsplitapp.com">support@cheqsplitapp.com</a>';

export const deleteDataPl: DeleteDataPage = {
  metaTitle: "Usuń dane (bez usuwania konta) – CheqSplit",
  metaDescription:
    "Usuń dane aplikacji CheqSplit bez zamykania konta. Informacje Google Play o „usuwaniu danych”.",
  h1: "Usuń dane (bez usuwania konta)",
  lastUpdatedPrefix: "Ostatnia aktualizacja:",
  lastUpdatedDate: "16 kwietnia 2026",
  intro:
    "<strong>CheqSplit</strong> (ta aplikacja w Google Play) pozwala usunąć część lub wszystkie dane aplikacji <strong>bez</strong> zamykania konta. Ta strona to link wymagany przez Google Play dla próśb o „usunięcie danych”.",
  step1Title: "Krok 1 — W aplikacji (najszybciej)",
  step1Intro: "Możesz samodzielnie usuwać treści:",
  step1Bullets: [
    {
      label: "Wyjazdy, rachunki i szkice",
      text: "Usuwaj lub archiwizuj pozycje w aplikacji zgodnie z każdym ekranem (np. usuń wyjazd, wyczyść rachunek, odrzuć szkic).",
    },
    {
      label: "Dane tylko lokalne",
      text: "Wyczyszczenie pamięci aplikacji lub odinstalowanie usuwa dane przechowywane wyłącznie na urządzeniu.",
    },
  ],
  step1Note:
    "Zmiany w aplikacji synchronizują się z naszymi serwerami tam, gdzie konto korzysta z funkcji chmury; usunięcie treści w aplikacji usuwa ją z aktywnego obszaru roboczego tam, gdzie jest to technicznie możliwe.",
  step2Title: "Krok 2 — E-mail w sprawie czyszczenia po stronie serwera",
  step2Intro:
    "Jeśli potrzebujesz usunięcia konkretnych danych z naszych systemów (np. kopii, których nie możesz usunąć w aplikacji, lub pomyłki), skontaktuj się z nami:",
  step2Steps: [
    `Napisz na ${mail} z adresu powiązanego z kontem (lub opisz, jak możemy Cię zweryfikować).`,
    "Temat: <strong>Prośba o usunięcie danych (bez zamykania konta)</strong>.",
    "Wymień, co usunąć (np. „wszystkie wyjazdy sprzed 2025”, „wyjazd o nazwie X”, „obrazy paragonów z daty …”).",
  ],
  step2Note:
    "Możemy poprosić o potwierdzenie tożsamości przed zmianą lub usunięciem danych powiązanych z kontem.",
  vsTitle: "Co usuwamy vs zachowujemy",
  vsBullets: [
    {
      label: "Usunięte na prośbę / w aplikacji:",
      text: "Tworzone przez użytkownika wyjazdy, rachunki, pozycje, etykiety uczestników i podobne treści, które usuniesz lub usuniemy po zweryfikowanej prośbie e-mail, z uwzględnieniem kopii zapasowych i blokad prawnych poniżej.",
    },
    {
      label: "Może być tymczasowo zachowane:",
      text: "Zaszyfrowane kopie zapasowe lub repliki, dopóki wygasną w zwykłych cyklach kopii (zwykle krótkoterminowo).",
    },
    {
      label: "Może być zachowane dłużej, jeśli wymaga tego prawo:",
      text: "Minimalne zapisy podatkowe, przeciwdziałanie oszustwom lub postępowanie prawne.",
    },
    {
      label: "Kopie innych użytkowników:",
      text: "Jeśli udostępniłeś rachunek, inni uczestnicy mogą nadal mieć swoją kopię; nie możemy usunąć danych na czyimś innym urządzeniu.",
    },
    {
      label: "Subskrypcje:",
      text: "Historia zakupów u Apple / Google podlega zasadom sklepu; usunięcie danych aplikacji nie usuwa pokwitowań w sklepie.",
    },
  ],
  timingTitle: "Terminy",
  timingBody:
    "Dążymy do zakończenia zweryfikowanych próśb o <strong>częściowe</strong> usunięcie w ciągu <strong>30 dni</strong>, chyba że prawo lub bezpieczeństwo wymaga inaczej.",
  accountInsteadLead: "Aby usunąć całe konto, zobacz",
  accountInsteadLinkText: "Usuń konto",
  accountInsteadTail: ".",
  privacyLead: "Ogólna prywatność:",
  privacyLinkText: "Polityka prywatności",
  privacyTail: ".",
};
