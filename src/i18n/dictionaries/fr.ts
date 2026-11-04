import type { Dictionary } from "../types";

export const fr: Dictionary = {
  meta: {
    title: "Application de partage des dépenses entre amis | CheqSplit",
    description:
      "Scannez les tickets de restaurant, suivez les dépenses communes et consultez vos soldes entre amis.",
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
    restaurant: "Addition au restaurant",
    groupExpenses: "Dépenses de groupe",
    guides: "Guides",
  },
  header: { download: "Télécharger gratuitement" },
  hero: {
    title: "Partagez les dépenses entre amis et voyez qui doit combien",
    body: "Scannez les tickets de restaurant, suivez les dépenses communes et consultez vos soldes entre amis. Invitez des personnes de groupes précédents et discutez des frais dans le chat du groupe ou en privé.",
    alts: [
      "Écran d’accueil CheqSplit avec le groupe actuel",
      "Vue d’ensemble du groupe avec les contributions des participants",
      "CheqSplit : écran de partage d'addition, lignes de ticket",
    ],
  },
  heroSlide2: {
    title: "Partagez l’addition au restaurant plus vite",
    description: "Scannez le reçu, attribuez les articles et voyez clairement la part de chacun — parfait pour les dîners entre amis, les rendez-vous et les repas de groupe.",
    button: "Découvrez comment partager l’addition et scanner les reçus",
  },
  workflows: {
    title: "Choisissez ce que vous partagez",
    restaurantTitle: "Une addition de restaurant",
    restaurantText:
      "Scannez le ticket, vérifiez les articles, invitez la table et attribuez chaque article aux personnes qui l'ont commandé ou partagé.",
    restaurantCta: "Partager une addition",
    groupTitle: "Dépenses de groupe ou de voyage",
    groupText:
      "Gardez les dépenses communes dans un groupe : indiquez le payeur et les participants, ajoutez les tickets depuis Tickets et consultez qui doit combien à qui dans Résumé. CheqSplit calcule les soldes ; l’application ne transfère pas d’argent.",
    groupCta: "Suivre les dépenses de groupe",
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
        title: "Toutes les dépenses du groupe au même endroit",
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
    subtitle:
      "Cinq étapes : partager les dépenses, scanner l’addition, suivre les comptes du groupe et savoir qui doit quoi à qui – du lancement d’un voyage à un bilan clair pour toute l’équipe.",
    stepPill: (n) => `ÉTAPE ${n}`,
    steps: [
      {
        label: "Créez un groupe pour votre voyage",
        body: "Sur l’écran d’accueil, appuyez sur Créer un groupe, nommez-le, choisissez sa devise et invitez les participants par lien ou code QR.",
        imageAlt: "Écran d’accueil CheqSplit avec le groupe actuel",
        bullets: [
          "Démarrage immédiat",
          "Invitation par lien ou QR",
          "Dîner, vacances, ou toute sortie de groupe",
        ],
      },
      {
        label: "Répartissez l’addition poste par poste",
        body: "Tout le monde voit le même ticket sur son téléphone et coche, en direct, ce qui le concerne.",
        imageAlt: "CheqSplit : scan d'un ticket pour partager l'addition",
        bullets: [
          "Indiquez, qui règle quoi",
          "Pots partagés, pourboire, couverts, charges",
          "D’un coup d’œil, qui doit combien",
        ],
      },
      {
        label: "Ajoutez les dépenses communes",
        body: "Ouvrez Dépenses et appuyez sur Ajouter une dépense. Saisissez la description, le montant et la devise, choisissez éventuellement une catégorie et le payeur, puis Tous ou Personnalisé pour les participants. Chaque participant peut ajouter une dépense.",
        imageAlt: "CheqSplit : mobile, dépenses partagées",
        bullets: [
          "Dépenses enregistrées par chacun",
          "Partage sur tout le groupe ou sur des personnes choisies",
          "Tout est conservé sur un seul fil commun",
        ],
      },
      {
        label: "Voyez qui doit quoi à qui",
        body: "CheqSplit totalise, détaille chaque part et indique, qui doit envoyer de l’argent à qui.",
        imageAlt: "CheqSplit : résumé des soldes par personne",
        bullets: [
          "Total des dépenses",
          "Résultat par participant",
          "Clair : qui, à qui, combien",
        ],
      },
      {
        label: "Sauvegardez le voyage et le bilan",
        body: "Archivez les voyages terminés ou exportez un PDF détaillé : dépenses, totaux et graphique clair.",
        imageAlt: "CheqSplit : rapport de voyage, résumé",
        bullets: [
          "Archives de voyages terminés",
          "Rapport PDF complet",
          "Montants, tableaux et graphiques",
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
        title: "Restaurants et bars",
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
    body: "Téléchargez gratuitement CheqSplit : le groupe partage les dépenses proprement, sans se prendre la tête sur le détail de chaque ticket.",
    sectionAria: "Télécharger CheqSplit gratuitement",
    imgAlt: "Accueil de l'app CheqSplit pour partager l'addition",
    badgeAlts: {
      appStore: "Télécharger gratuitement sur l’App Store",
      play: "Télécharger gratuitement sur Google Play",
    },
    groupAria: "Télécharger l’application gratuitement",
  },
  faq: {
    title: "Questions fréquentes",
    items: [
      {
        q: "Qu'est-ce que CheqSplit ?",
        a: "C'est une application gratuite pour partager les factures, suivre les dépenses de groupe et comprendre en un coup d'œil qui doit quoi à qui, à partir de tickets scannés et d'affectations ligne par ligne.",
      },
      {
        q: "Puis-je partager un ticket poste par poste ?",
        a: "Oui. Vous affectez chaque ligne aux bonnes personnes, afin que chacun ne paie que ce qu'il a consommé ou validé.",
      },
      {
        q: "Est-ce adapté aux voyages à plusieurs ?",
        a: "Gardez les dépenses communes dans un groupe : indiquez le payeur et les participants, ajoutez les tickets depuis Tickets et consultez qui doit combien à qui dans Résumé. CheqSplit calcule les soldes ; l’application ne transfère pas d’argent.",
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
    tagline: "Partagez les dépenses de groupe équitablement, sans calculs compliqués.",
    product: "Produit",
    company: "Entreprise",
    legal: "Mentions légales",
    about: "Assistance",
    contact: "Contact",
    privacy: "Politique de confidentialité",
    terms: "Conditions d'utilisation",
    deleteAccount: "Supprimer le compte",
    deleteData: "Supprimer vos données",
    rights: "Tous droits réservés.",
  },
  a11y: {
    keyFeatures: "Fonctionnalités clés",
    primaryNav: "Navigation principale",
    openMenu: "Ouvrir le menu",
    howSection: "Fonctionnement",
    logoHome: "Accueil CheqSplit",
  },
};
