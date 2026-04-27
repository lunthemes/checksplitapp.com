import type { Dictionary } from "../types";

export const fr: Dictionary = {
  meta: {
    title: "CheqSplit : partager les dépenses, scanner les tickets, suivre les comptes du groupe",
    description:
      "Avec CheqSplit, partagez les dépenses, scannez les tickets de caisse, suivez ce que le groupe a payé en commun et voyez clairement qui doit combien à qui – au restaurant, en voyage, aux courses, entre amis ou en coloc.",
    ogDescription:
      "Partagez les dépenses proprement : scan de ticket, suivi des dépenses communes, soldes clairs. Idéal pour les restos, les weekends à plusieurs, la coloc et la famille.",
    twitterDescription:
      "Partagez les dépenses et les notes sans tableur ni fil de messages interminable pour tout recalculer.",
    softwareDescription:
      "CheqSplit vous aide à partager les dépenses, à scanner les tickets, à suivre ce qui a été payé en commun et à voir qui doit quoi à qui, au restaurant, en voyage ou en groupe.",
  },
  nav: {
    features: "Fonctionnalités",
    how: "Fonctionnement",
    useCases: "Cas d'usage",
    faq: "FAQ",
  },
  header: { download: "Télécharger l'app" },
  hero: {
    title: "Partagez les dépenses, scannez l’addition, voyez qui doit quoi à qui",
    body: "Scannez le ticket, suivez les dépenses partagées et gardez une vision simple de qui doit combien à qui – sortie au resto, week-end, courses à plusieurs, soirée entre amis.",
    alts: [
      "CheqSplit : suivi de dépenses pour un voyage de groupe",
      "App CheqSplit : dépenses partagées",
      "CheqSplit : écran de partage d'addition, lignes de ticket",
    ],
  },
  features: {
    title: "Pourquoi choisir CheqSplit ?",
    items: [
      {
        title: "Scan de ticket en quelques secondes",
        desc: "Récupérez les lignes, la TVA et le total en un clin d'œil, sans tout retaper à la main.",
      },
      {
        title: "Répartir ligne par ligne",
        desc: "Vous affectez chaque poste du ticket aux bonnes personnes, plutôt que de tout couper en parts égales.",
      },
      {
        title: "Tout le groupe, un seul fil",
        desc: "Restaurants, courses, billets, nuits d'hôtel : l'essentiel de ce que vous payez ensemble, au même endroit.",
      },
      {
        title: "Qui doit combien à qui",
        desc: "CheqSplit calcule les soldes pour que chacun sache quoi rembourser au reste du groupe.",
      },
    ],
  },
  how: {
    title: "Comment fonctionne CheqSplit",
    subtitle: "Cinq étapes, du début du voyage au compte-rendu que tout le monde peut lire sereinement.",
    stepPill: (n) => `Étape ${n}`,
    steps: [
      {
        label: "Créez un voyage en un instant",
        body: "Donnez un nom, invitez votre groupe, et c'est parti – pas de long parcours dans les options.",
        imageAlt: "CheqSplit : écran d'un voyage de groupe",
        bullets: [
          "Mise en route en quelques secondes",
          "Invitations faciles",
          "Repas, week-end, vacances : tout fonctionne",
        ],
      },
      {
        label: "Partagez l'addition poste par poste",
        body: "L'addition détaillée : chaque ligne va à la personne qui a vraiment consommé ou payé.",
        imageAlt: "CheqSplit : scan d'un ticket pour partager l'addition",
        bullets: [
          "Lignes du ticket affectées une par une",
          "Plats partagés, pourboire, frais de service",
          "Un total clair pour chacun",
        ],
      },
      {
        label: "Suivez toutes les dépenses communes",
        body: "Classez les sorties, ajoutez des notes et gardez la vue d'ensemble sur ce que le groupe a payé.",
        imageAlt: "CheqSplit : mobile, dépenses partagées",
        bullets: [
          "Des catégories utiles",
          "Tickets et petits commentaires",
          "Une seule frise pour le groupe",
        ],
      },
      {
        label: "Réglez les comptes au fil de l'eau",
        body: "Les soldes se mettent à jour quand quelqu'un rembourse – moins de relances en boucle sur le chat.",
        imageAlt: "CheqSplit : résumé des soldes par personne",
        bullets: [
          "Solde net par personne",
          "Rappels de paiement optionnels",
          "Versions que vous pouvez partager",
        ],
      },
      {
        label: "Partagez un bilan propre",
        body: "Totaux, graphiques, qui a payé quoi : prêt à envoyer sur le groupe ou à archiver pour plus tard.",
        imageAlt: "CheqSplit : rapport de voyage, résumé",
        bullets: [
          "Synthèses lisibles d'un coup d'œil",
          "Lien ou visuel",
          "Confidentialité dès le départ",
        ],
      },
    ],
  },
  useCases: {
    title: "Pour toutes les dépenses que vous partagez",
    intro:
      "Dès que vous partagez l'addition, un weekend ou le caddie, CheqSplit s'adapte : resto, coloc, famille, sorties entre amis. Vous scannez, vous affectez chaque poste, vous tenez compte des remises ou des pourboires, et vous finissez avec un règlement clair, sans ressaisir tout sur une feuille de calcul.",
    items: [
      {
        title: "Restaurants & bars",
        desc: "Détaillez l'addition, partagez par plat, et chacun règle ce qu'il a pris.",
      },
      { title: "Voyages de groupe", desc: "Billets, hébergement, repas : un seul fil pour le budget du tour." },
      { title: "Vie de famille", desc: "Courses, sorties, petits achats courants, suivis simplement." },
      {
        title: "Achats à plusieurs",
        desc: "Cadeaux, gros lot, commande groupée, tout ce que vous partagez à plus de deux.",
      },
    ],
  },
  cta: {
    title: "Prêt à arrêter de tout recalculer à la main ?",
    body: "Avec CheqSplit, le groupe partage les dépenses proprement, sans se prendre la tête sur le détail de chaque ticket.",
    sectionAria: "Télécharger CheqSplit",
    imgAlt: "Accueil de l'app CheqSplit pour partager l'addition",
    badgeAlts: {
      appStore: "Télécharger sur l'App Store",
      play: "Télécharger sur Google Play",
    },
    playSoon: "Bientôt",
    playDisabledHint: "Pas encore disponible",
    groupAria: "Télécharger l'application",
  },
  faq: {
    title: "Questions fréquentes",
    items: [
      {
        q: "Qu'est-ce que CheqSplit ?",
        a: "C'est une application pour partager les factures, suivre les dépenses de groupe et comprendre en un coup d'œil qui doit quoi à qui, à partir de tickets scannés et d'affectations ligne par ligne.",
      },
      {
        q: "Puis-je partager un ticket poste par poste ?",
        a: "Oui. Vous affectez chaque ligne aux bonnes personnes, afin que chacun ne paie que ce qu'il a consommé ou validé.",
      },
      {
        q: "Est-ce adapté aux voyages à plusieurs ?",
        a: "Oui. Vous ouvrez un voyage, y ajoutez les dépenses, invitez les participants, ajoutez les reçus, et vous exportez un bilan final avec les soldes entre personnes.",
      },
      {
        q: "Ça sert seulement au restaurant ?",
        a: "Non, partout où plusieurs personnes partagent un coût : supermarché, bar, soirée, week-end, achats en ligne groupés, etc.",
      },
      {
        q: "CheqSplit fonctionne-t-il hors connexion ?",
        a: "Vous pouvez conserver certaines infos sur l'appareil, mais le partage d'un voyage et la synchronisation entre participants nécessitent internet.",
      },
      {
        q: "Comment inviter quelqu'un sur un voyage ?",
        a: "Créez le voyage dans CheqSplit, ajoutez des dépenses, puis partagez le lien du voyage. Vos proches rejoignent, voient la balance partagée et leurs sommes restantes.",
      },
    ],
  },
  footer: {
    tagline: "Le moyen le plus simple de partager des dépenses de groupe, sans mauvaise surprise sur le total.",
    product: "Produit",
    company: "Entreprise",
    legal: "Mentions légales",
    about: "À propos",
    contact: "Contact",
    privacy: "Confidentialité",
    terms: "Conditions",
    rights: "Tous droits réservés.",
  },
  a11y: {
    keyFeatures: "Fonctionnalités clés",
    primaryNav: "Navigation principale",
    howSection: "Fonctionnement",
    logoHome: "Accueil CheqSplit",
  },
};
