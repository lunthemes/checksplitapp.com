import type { TripExpensesGuideCopy } from "./types";

export const tripExpensesGuideFr: TripExpensesGuideCopy = {
  metaTitle: "Comment partager les dépenses d'un voyage entre amis | CheqSplit",
  metaDescription: "Créez un seul voyage, indiquez qui a payé et qui participe à chaque dépense, puis vérifiez les soldes avant la fin du séjour.",
  h1: "Comment partager les dépenses d'un voyage entre amis",
  answer: "Créez un seul voyage, indiquez qui a payé et qui participe à chaque dépense, puis vérifiez les soldes avant la fin du séjour.",
  answerFollow: "En enregistrant chaque dépense au fur et à mesure, le groupe n'aura pas à refaire tous les comptes à la fin du voyage.",
  rulesH2: "Mettez-vous d'accord sur les règles avant le départ",
  rulesBody: "Avant même la première dépense, déterminez quels coûts concernent tout le groupe et lesquels ne concernent que certaines personnes. L'hébergement est souvent partagé par tous, alors qu'un taxi ou un billet de musée peut ne concerner que quelques participants. Indiquez séparément qui a payé et qui participe à la dépense, car la personne qui avance l'argent n'est pas forcément incluse dans le partage. Ajoutez chaque dépense tant que le montant et les participants sont encore frais en mémoire. Si vous utilisez plusieurs devises, convenez dès le départ de la façon de les enregistrer : CheqSplit ne convertit pas les devises. Des règles claires dès le début permettent de garder un historique cohérent jusqu'au règlement final.",
  stepsH2: "Comment partager les dépenses de voyage en 5 étapes",
  steps: [
    { title: "Créez le voyage dès le départ", desc: "Donnez-lui un nom, ajoutez les personnes concernées et saisissez les dépenses déjà effectuées pour que tout le groupe parte d'un même historique." },
    { title: "Indiquez qui a payé", desc: "Précisez clairement qui a réglé chaque dépense : billets, hébergement, transport, restaurant ou activité payée pour le groupe." },
    { title: "Sélectionnez les participants", desc: "N'incluez tout le monde que si la dépense concerne réellement tout le groupe. Pour un taxi, une activité ou un restaurant, sélectionnez uniquement les personnes concernées." },
    { title: "Ajoutez les dépenses au fur et à mesure", desc: "Saisissez les montants tant que vous les avez encore en tête. Dans CheqSplit, ouvrez l'onglet Dépenses et touchez Ajouter une dépense. N'importe quel participant peut ajouter une dépense." },
    { title: "Vérifiez les soldes", desc: "Avant de clôturer ou d'exporter le voyage, vérifiez l'historique commun et qui doit combien à qui. Commencez par ajouter les dépenses manquantes." }
  ],
  exampleH2: "Exemple : partager les dépenses d'un week-end entre quatre amis",
  exampleIntro: "Alex, Blair, Casey et Dana passent un week-end ensemble. L'hôtel et les billets du musée concernent tout le monde. Le taxi ne concerne qu'Alex, Blair et Casey.",
  exampleExpenseCaption: "Dépenses",
  exampleExpenseRows: [
    {
      expense: "Hôtel",
      payer: "Alex",
      participants: "Alex, Blair, Casey, Dana",
      amount: "€400.00",
    },
    {
      expense: "Taxi",
      payer: "Blair",
      participants: "Alex, Blair, Casey",
      amount: "€45.00",
    },
    {
      expense: "Billets du musée",
      payer: "Dana",
      participants: "Alex, Blair, Casey, Dana",
      amount: "€80.00",
    }
  ],
  exampleBalanceCaption: "Payé et part due",
  exampleBalanceRows: [
    { person: "Alex", paid: "€400.00", share: "€135.00", net: "doit recevoir €265.00" },
    { person: "Blair", paid: "€45.00", share: "€135.00", net: "doit €90.00" },
    { person: "Casey", paid: "€0.00", share: "€135.00", net: "doit €135.00" },
    { person: "Dana", paid: "€80.00", share: "€120.00", net: "doit €40.00" }
  ],
  exampleSettle: "Blair verse €90 à Alex, Casey lui verse €135 et Dana €40. Ces trois paiements totalisent €265, exactement ce qu'Alex doit récupérer.",
  exampleNote: "Parts : hôtel €100 par personne ; taxi €15 par personne pour les trois passagers ; billets €20 par personne. Dana n'a pas pris le taxi, sa part est donc de €120 au lieu de €135. CheqSplit calcule ces soldes, mais ne transfère pas d'argent.",
  productH2: "Suivez les dépenses partagées du voyage avec CheqSplit",
  productBody: "CheqSplit vous permet de créer un voyage, d'indiquer qui a payé et les participants de chaque dépense, de conserver un historique partagé et de voir qui doit combien à qui. Ajoutez taxi, hôtel ou billets depuis Dépenses avec Ajouter une dépense, et une addition de restaurant détaillée depuis Additions avec Ajouter une addition. Une fois le voyage terminé, archivez-le et exportez un rapport PDF. CheqSplit calcule les soldes, mais ne transfère pas d'argent et ne convertit pas les devises.",
  productCta: "Suivre les dépenses de groupe et de voyage avec CheqSplit",
  receiptNoteBefore: "Si une dépense du voyage correspond à une addition de restaurant détaillée, utilisez d'abord ",
  receiptNoteLabel: "la méthode de partage par article",
  receiptNoteAfter: ", frais et pourboire compris. Ouvrez ensuite l'onglet Additions du voyage et touchez Ajouter une addition.",
  faqH2: "Questions fréquentes sur le partage des dépenses de voyage",
  faq: [
    {
      q: "Chaque dépense doit-elle inclure tout le monde ?",
      a: "Non. Sélectionnez uniquement les participants concernés par cette dépense.",
    },
    {
      q: "Quand faut-il enregistrer une dépense ?",
      a: "Dès que possible, tant que le montant, la personne qui a payé et les participants concernés sont encore faciles à identifier.",
    },
    {
      q: "Comment faut-il gérer une addition de restaurant ?",
      a: "Utilisez le parcours prévu pour les tickets de restaurant afin de répartir les articles, taxes et pourboire compris. Ouvrez ensuite l'onglet Additions du voyage et touchez Ajouter une addition.",
    },
    {
      q: "CheqSplit convertit-il les devises ?",
      a: "Non. La conversion de devises n'est pas une fonctionnalité confirmée de CheqSplit. Enregistrez les montants tels qu'ils apparaissent sur la dépense.",
    },
  ],
  ctaTitle: "Toutes les dépenses du voyage dans un historique commun",
  ctaBody: "Créez un voyage pour votre groupe, ajoutez les dépenses au fur et à mesure et laissez CheqSplit afficher qui doit combien à qui à la fin.",
  crumbGuides: "Guides",
  crumbCurrent: "Dépenses de voyage",
  colExpense: "Dépense",
  colPayer: "Payé par",
  colParticipants: "Participants",
  colAmount: "Montant",
  colPerson: "Personne",
  colPaid: "Payé",
  colShare: "Part",
  colResult: "Résultat",
};
