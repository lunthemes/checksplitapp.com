import type { TripExpensesGuideCopy } from "./types";

export const tripExpensesGuideFr: TripExpensesGuideCopy = {
  metaTitle: "Comment partager les dépenses d'un voyage entre amis | CheqSplit",
  metaDescription: "Créez un seul voyage, indiquez qui a payé et qui participe à chaque dépense, puis vérifiez les soldes avant la fin du séjour.",
  h1: "Comment partager les dépenses d'un voyage entre amis",
  answer: "Créez un seul voyage, indiquez qui a payé et qui participe à chaque dépense, puis vérifiez les soldes avant la fin du séjour.",
  answerFollow: "En enregistrant chaque dépense au fur et à mesure, le groupe n'aura pas à refaire tous les comptes à la fin du voyage.",
  rulesH2: "Mettez-vous d'accord sur les règles avant le départ",
  rulesBody: "Avant le premier paiement, convenez des frais partagés par tous et de ceux qui ne concernent que certaines personnes. Notez séparément le payeur et les participants et ajoutez rapidement chaque dépense. Choisissez une devise de groupe pour les soldes. Pour une autre devise, vérifiez le taux de référence et sa date, saisissez un taux manuel ou le montant réellement débité par votre banque dans la devise du groupe. Des règles claires assurent un suivi cohérent.",
  stepsH2: "Comment partager les dépenses de voyage en 5 étapes",
  steps: [
    { title: "Créez un groupe pour votre voyage", desc: "Sur l’écran d’accueil, appuyez sur Créer un groupe, nommez-le, choisissez sa devise et invitez les participants par lien ou code QR." },
    { title: "Indiquez qui a payé", desc: "Précisez clairement qui a réglé chaque dépense : billets, hébergement, transport, restaurant ou activité payée pour le groupe." },
    { title: "Sélectionnez les participants", desc: "N'incluez tout le monde que si la dépense concerne réellement tout le groupe. Pour un taxi, une activité ou un restaurant, sélectionnez uniquement les personnes concernées." },
    { title: "Ajoutez les dépenses au fur et à mesure", desc: "Ouvrez Dépenses et appuyez sur Ajouter une dépense. Saisissez la description, le montant et la devise, choisissez éventuellement une catégorie et le payeur, puis Tous ou Personnalisé pour les participants. Chaque participant peut ajouter une dépense." },
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
  productBody: "Créez un groupe depuis l’accueil, choisissez sa devise et invitez les participants. Dans Dépenses, Ajouter une dépense permet de saisir hôtel, taxi ou billets : montant, devise, payeur et participants via Tous ou Personnalisé ; la catégorie est facultative. Dans Tickets, Ajouter un ticket ouvre le scan ou l’importation. Vérifiez les articles, puis répartissez par article ou à parts égales. Pour une autre devise, utilisez le taux de référence et sa date, un taux manuel ou le débit bancaire réel dans la devise du groupe. Consultez les soldes, exportez un rapport PDF ou archivez le groupe. CheqSplit ne transfère pas d’argent.",
  productCta: "Suivre les dépenses de groupe et de voyage avec CheqSplit",
  receiptNoteBefore: "Si une dépense du voyage correspond à une addition de restaurant détaillée, utilisez d'abord ",
  receiptNoteLabel: "la méthode de partage par article",
  receiptNoteAfter: " directement depuis l’onglet Tickets du groupe avec Ajouter un ticket. Scannez ou importez le ticket, vérifiez les articles et le total, puis répartissez par article ou à parts égales ; le ticket est automatiquement associé au groupe.",
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
      a: "Dans le groupe, ouvrez Tickets et appuyez sur Ajouter un ticket pour scanner ou importer un ticket. Vérifiez les articles détectés et le total ; le ticket est automatiquement associé au groupe. Répartissez ensuite par article ou à parts égales.",
    },
    {
      q: "CheqSplit convertit-il les devises ?",
      a: "Oui. Les dépenses du groupe peuvent être saisies dans une autre devise. Vérifiez le taux de référence et sa date, saisissez un taux manuel ou le débit bancaire réel dans la devise du groupe. CheqSplit utilise le montant converti pour les soldes du groupe ; l’application ne transfère pas d’argent.",
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
