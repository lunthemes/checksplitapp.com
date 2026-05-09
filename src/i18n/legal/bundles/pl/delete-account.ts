import type { DeleteAccountPage } from "../../types";

const mail = '<a class="font-medium text-brand-600 underline hover:text-brand-700" href="mailto:support@cheqsplitapp.com">support@cheqsplitapp.com</a>';

export const deleteAccountPl: DeleteAccountPage = {
  metaTitle: "Usuń konto – CheqSplit",
  metaDescription:
    "Jak poprosić o usunięcie konta CheqSplit i powiązanych danych osobowych.",
  h1: "Usuń konto",
  lastUpdatedPrefix: "Ostatnia aktualizacja:",
  lastUpdatedDate: "16 kwietnia 2026",
  intro:
    `Ta strona wyjaśnia, jak poprosić o usunięcie konta CheqSplit i powiązanych danych osobowych przetwarzanych przez <strong>CheqSplit</strong> (aplikację w Google Play przy tej pozycji dewelopera).`,
  howTitle: "Jak poprosić o usunięcie konta",
  howSteps: [
    `Wyślij wiadomość e-mail na adres ${mail} z adresu powiązanego z kontem CheqSplit (tego samego, którego używasz do Firebase / logowania Google, jeśli dotyczy).`,
    "Użyj tematu: <strong>Prośba o usunięcie konta</strong>.",
    "W treści wyraźnie napisz, że chcesz usunąć konto CheqSplit i powiązane dane. Jeśli logujesz się przez Google, podaj adres e-mail konta Google, abyśmy mogli dopasować tożsamość.",
  ],
  howNote:
    "Możemy odpowiedzieć w celu potwierdzenia tożsamości przed realizacją prośby. Jeśli nie możemy zweryfikować prośby, możemy poprosić o dodatkowe informacje.",
  whatDeleteTitle: "Co usuwamy",
  whatDeleteIntro: "Po przetworzeniu zweryfikowanej prośby staramy się usunąć lub zanonimizować:",
  whatDeleteList: [
    "Dane profilu uwierzytelniania przechowywane w naszym backendzie (np. rekord użytkownika Firebase Authentication powiązany z kontem).",
    "Dane aplikacji przechowywane pod identyfikatorem użytkownika w naszych bazach (np. wyjazdy, rachunki i powiązana treść przypisana do konta), z uwzględnieniem ograniczeń technicznych i prawnych poniżej.",
  ],
  retainTitle: "Co może zostać (i dlaczego)",
  retainBullets: [
    {
      label: "Dane zagregowane lub zdeidentyfikowane",
      text: "których nie da się w rozsądny sposób ponownie powiązać z Tobą.",
    },
    {
      label: "Rejestry, które musimy zachować",
      text: "przez ograniczony czas tam, gdzie wymaga tego prawo (np. podatkowe, księgowe lub obowiązki zapobiegania oszustwom).",
    },
    {
      label: "Dane przechowywane tylko na Twoim urządzeniu",
      text: "dopóki nie odinstalujesz aplikacji lub nie wyczyszczysz danych aplikacji; nie możemy zdalnie wyczyścić telefonu innego użytkownika. Inni uczestnicy mogą zachować kopie udostępnionych rachunków, które już otrzymali.",
    },
    {
      label: "Rejestry subskrypcji i zakupów",
      text: "przetwarzane przez Apple lub Google oraz naszych dostawców płatności/subskrypcji mogą być zachowane zgodnie z ich politykami i wymogami prawnymi; usunięcie konta CheqSplit nie usuwa dokumentów w systemach rozliczeniowych App Store / Play.",
    },
  ],
  timingTitle: "Terminy",
  timingBody:
    "Zweryfikowane prośby o usunięcie realizujemy w rozsądnym terminie, zwykle w ciągu <strong>30 dni</strong>, chyba że prawo lub wyjątkowe okoliczności (np. spór lub dochodzenie w sprawie nadużyć) wymagają dłuższego okresu.",
  privacySeeAlso: "Ogólne praktyki prywatności znajdziesz w naszej",
  privacyLinkText: "Polityce prywatności",
  relatedNavLabel: "Powiązane:",
  relatedDeleteData: "Usuń dane (bez usuwania konta)",
  relatedTerms: "Warunki korzystania z usługi",
};
