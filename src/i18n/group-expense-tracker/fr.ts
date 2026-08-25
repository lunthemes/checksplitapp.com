import type { GroupExpenseTrackerCopy } from "./types";
import { groupExpenseTrackerEn } from "./en";

export const groupExpenseTrackerFr: GroupExpenseTrackerCopy = {
  metaTitle: "Suivez les dépenses du groupe et voyez qui doit combien à qui | CheqSplit",
  metaDescription: "Regroupez toutes les dépenses communes au même endroit, indiquez qui a payé et qui a participé à chaque dépense, puis consultez à tout moment les soldes du groupe.",
  softwareDescription: "Regroupez toutes les dépenses communes au même endroit, indiquez qui a payé et qui a participé à chaque dépense, puis consultez à tout moment les soldes du groupe.",
  h1: "Suivez les dépenses du groupe et voyez qui doit combien à qui",
  heroText: "Regroupez toutes les dépenses communes au même endroit, indiquez qui a payé et qui a participé à chaque dépense, puis consultez à tout moment les soldes du groupe.",
  downloadCta: "Télécharger gratuitement",
  secondaryCta: "",
  nav: {
    how: "Comment fonctionne le suivi des dépenses de groupe",
    faq: "Questions fréquentes",
  },
  timelineH2: "Un historique commun plutôt que des dépenses éparpillées dans les messages",
  timelineText: "L'un paie l'hôtel, un autre achète les billets et quelqu'un d'autre règle le taxi. Au lieu de rechercher toutes ces informations dans les messages, CheqSplit conserve chaque dépense dans un historique partagé.",
  howH2: "Comment fonctionne le suivi des dépenses de groupe",
  steps: [
    {
      title: "Invitez le groupe au voyage",
      text: "Après avoir créé et nommé le voyage, invitez les participants à l'aide d'un lien ou d'un QR code.",
      imageAlt: "Invitez le groupe au voyage",
    },
    {
      title: "Ajoutez chaque dépense",
      text: "Ouvrez l'onglet Dépenses et touchez Ajouter une dépense. Saisissez la description et le montant, indiquez qui a payé et sélectionnez les participants concernés.",
      imageAlt: "Ajoutez chaque dépense",
    },
    {
      title: "Choisissez qui participe à la dépense",
      text: "Sélectionnez Tout le monde ou Personnalisé, puis cochez uniquement les personnes concernées par cette dépense.",
      imageAlt: "Choisissez qui participe à la dépense",
    },
    {
      title: "Suivez l'historique des dépenses partagées",
      text: "Chaque dépense ajoutée apparaît dans l'onglet Dépenses avec son montant, la personne qui a payé et les participants.",
      imageAlt: "Suivez l'historique des dépenses partagées",
    },
    {
      title: "Voyez qui doit combien à qui",
      text: "Ouvrez Résumé pour voir qui doit recevoir de l'argent et qui doit payer. CheqSplit calcule les soldes, mais ne transfère pas d'argent.",
      imageAlt: "Voyez qui doit combien à qui",
    }
  ],
  subsetH2: "Utilisez le bon partage pour chaque dépense",
  subsetText: "Toutes les dépenses ne concernent pas forcément tout le monde. Attribuez le taxi uniquement à ceux qui l'ont pris, les billets aux participants concernés et les dépenses réellement communes à tout le groupe. Pour une addition détaillée au restaurant, utilisez l'onglet Additions puis Ajouter une addition.",
  receiptBridgeH2: "Ajoutez au voyage une addition de restaurant détaillée",
  receiptBridgeText: "Si le groupe dispose d'une addition détaillée, utilisez d'abord le partage par article pour attribuer les plats et boissons, frais et pourboire compris. Ouvrez ensuite l'onglet Additions du voyage et touchez Ajouter une addition.",
  receiptBridgeCta: "Voir comment fonctionne le partage d'une addition",
  reportH2: "Terminez avec un historique que tout le groupe peut consulter",
  reportText: "Archivez le voyage et exportez un rapport PDF contenant les dépenses, les totaux, les tableaux et le graphique. Le résultat est bien plus facile à vérifier qu'un calcul final reconstitué de mémoire.",
  fitsH2: "Quand utiliser CheqSplit",
  fits: [
    "Un week-end ou des vacances entre amis",
    "Un voyage de groupe avec hébergement, transport, repas, billets ou activités",
    "Plusieurs dépenses de voyage payées par des personnes différentes",
    "Une addition de restaurant détaillée, ajoutée depuis l'onglet Additions avec Ajouter une addition",
  ],
  faqH2: "Questions fréquentes sur les dépenses de groupe",
  faq: [
    {
      q: "Plusieurs personnes peuvent-elles ajouter des dépenses ?",
      a: "Oui. N'importe quel participant peut ouvrir l'onglet Dépenses et toucher Ajouter une dépense. Pour un ticket détaillé, utilisez l'onglet Additions puis Ajouter une addition.",
    },
    {
      q: "Une dépense peut-elle ne concerner que certaines personnes ?",
      a: "Oui. Choisissez Tout le monde ou Personnalisé, puis sélectionnez uniquement les participants qui ont réellement partagé cette dépense.",
    },
    {
      q: "Puis-je scanner un ticket pour une dépense de voyage ?",
      a: "Utilisez le parcours prévu pour les tickets de restaurant afin de répartir les articles, taxes et pourboire compris. Ouvrez ensuite l'onglet Additions du voyage et touchez Ajouter une addition.",
    },
    {
      q: "Comment savoir qui doit payer qui ?",
      a: "CheqSplit regroupe les dépenses du groupe et affiche les soldes obtenus — qui doit combien à qui. Il calcule les parts, mais ne transfère pas d'argent.",
    },
    {
      q: "Puis-je exporter le résultat ?",
      a: "Oui. CheqSplit peut exporter un rapport PDF détaillé comprenant les dépenses, les totaux, les tableaux et un graphique. Vous pouvez également archiver un voyage terminé.",
    },
  ],
  ctaTitle: "Toutes les dépenses du groupe dans un seul suivi clair",
  ctaBody: "Créez un voyage, ajoutez les dépenses au fur et à mesure et laissez CheqSplit afficher qui doit combien à qui.",
  internalRestaurantBefore: "Besoin de partager une addition de dîner par article ? Utilisez ",
  internalRestaurantLabel: "le partage d'addition au restaurant",
  internalRestaurantAfter: " pour le scan, l'invitation et l'attribution des articles en direct.",
  guideBridgeBefore: "Vous préférez d'abord une méthode pas à pas ? Lisez ",
  guideBridgeLabel: "comment partager les dépenses d'un voyage entre amis",
  guideBridgeAfter: ".",
  a11y: {
    nav: groupExpenseTrackerEn.a11y.nav,
    hero: "Suivez les dépenses du groupe et voyez qui doit combien à qui",
    timeline: "Un historique commun plutôt que des dépenses éparpillées dans les messages",
    how: "Comment fonctionne le suivi des dépenses de groupe",
    subset: "Utilisez le bon partage pour chaque dépense",
    receipt: "Ajoutez au voyage une addition de restaurant détaillée",
    report: "Terminez avec un historique que tout le groupe peut consulter",
    fits: "Quand utiliser CheqSplit",
    faq: "Questions fréquentes sur les dépenses de groupe",
  },
};
