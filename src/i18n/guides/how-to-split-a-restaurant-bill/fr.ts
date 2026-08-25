import type { RestaurantBillGuideCopy } from "./types";

export const restaurantBillGuideFr: RestaurantBillGuideCopy = {
  metaTitle: "Comment partager équitablement une addition au restaurant | CheqSplit",
  metaDescription: "Vérifiez le ticket final, attribuez les commandes individuelles, répartissez les articles partagés entre les bonnes personnes et assurez-vous que tous les montants correspondent au total de l'addition.",
  h1: "Comment partager équitablement une addition au restaurant",
  answer: "Vérifiez le ticket final, attribuez les commandes individuelles, répartissez les articles partagés entre les bonnes personnes et assurez-vous que tous les montants correspondent au total de l'addition.",
  choiceH2: "Choisissez entre un partage à parts égales et un partage par article",
  choiceBody: "Le partage à parts égales est le plus rapide lorsque les commandes se ressemblent et que tout le monde accepte de diviser le total de la même façon. Si chacun a commandé des plats ou boissons différents, le partage par article est généralement plus juste : attribuez d'abord à chacun sa propre commande. Les plats à partager, bouteilles et desserts ne doivent concerner que les personnes qui en ont profité. Ajoutez ensuite les frais de service, taxes et pourboires afin que toutes les parts correspondent au total de l'addition. Si les montants ne correspondent pas, une ligne ou un supplément a probablement été oublié. Le partage reste ainsi fidèle à l'addition réelle plutôt qu'à une estimation.",
  stepsH2: "Comment partager équitablement une addition en 5 étapes",
  steps: [
    { title: "Vérifiez le ticket", desc: "Confirmez chaque ligne et le total final avant de commencer à répartir les montants." },
    { title: "Attribuez les commandes individuelles", desc: "Attribuez à chacun uniquement les plats et boissons qu'il a commandés. Commencez par les lignes les plus évidentes." },
    { title: "Répartissez les articles partagés", desc: "Incluez uniquement les personnes qui ont partagé un plat ou une bouteille. Répartissez à parts égales ou selon une proportion convenue." },
    { title: "Vérifiez les montants restants", desc: "Recherchez les lignes non attribuées, les erreurs de scan ainsi que les taxes ou pourboires encore non répartis." },
    { title: "Affichez le résultat", desc: "Chacun doit pouvoir vérifier sa part et son solde final afin que tout le monde valide le calcul avant de quitter la table." }
  ],
  exampleH2: "Exemple : partager une addition entre quatre personnes",
  exampleIntro: "Maya, Noah, Owen et Priya partagent la même addition. Maya et Noah partagent également une bouteille de vin. Des frais de service de 10 % s'appliquent au sous-total des plats et boissons.",
  exampleReceiptCaption: "Addition",
  exampleReceiptRows: [
    { item: "Pâtes (Maya)", amount: "€15.00" },
    { item: "Burger (Noah)", amount: "€15.00" },
    { item: "Poisson grillé (Owen)", amount: "€20.00" },
    { item: "Salade (Priya)", amount: "€10.00" },
    { item: "Bouteille de vin (Maya et Noah)", amount: "€20.00" },
    { item: "Sous-total", amount: "€80.00" },
    { item: "Frais de service (10 %)", amount: "€8.00" },
    { item: "Total de l'addition", amount: "€88.00" }
  ],
  exampleShareCaption: "Montant à payer",
  exampleShareRows: [
    { person: "Maya (pâtes €15 + moitié du vin €10 + service €2.50)", amount: "€27.50" },
    { person: "Noah (burger €15 + moitié du vin €10 + service €2.50)", amount: "€27.50" },
    { person: "Owen (poisson €20 + service €2.00)", amount: "€22.00" },
    { person: "Priya (salade €10 + service €1.00)", amount: "€11.00" },
    { person: "Total des quatre parts", amount: "€88.00" }
  ],
  exampleNote: "Les frais de service sont répartis proportionnellement au montant des plats et boissons de chacun : Maya et Noah représentent chacun €25 du sous-total de €80, Owen €20 et Priya €10. Les quatre parts totalisent exactement €88, soit le montant final de l'addition.",
  productH2: "Partagez une addition par article avec CheqSplit",
  productBody: "CheqSplit reprend les mêmes étapes : scan du ticket, partage de l'addition par lien ou QR code, attribution des commandes individuelles et partagées, ajout séparé des frais et du pourboire, puis affichage de qui doit combien à qui. CheqSplit calcule les soldes, mais ne transfère pas d'argent.",
  productCta: "Partager une addition avec CheqSplit",
  faqH2: "Questions fréquentes sur le partage de l'addition",
  faq: [
    {
      q: "Faut-il toujours partager l'addition à parts égales ?",
      a: "Seulement si le groupe est d'accord et que les commandes sont similaires. Si chacun a commandé des choses différentes, attribuez les articles afin que le total de chaque personne corresponde à ce qu'elle a réellement consommé.",
    },
    {
      q: "Comment faut-il répartir un article partagé ?",
      a: "Entre les personnes concernées — à parts égales ou selon un pourcentage convenu lorsque les parts ne sont pas identiques.",
    },
    {
      q: "Pourquoi les totaux ne correspondent-ils parfois pas ?",
      a: "Vérifiez les articles non attribués, les erreurs de scan ou de saisie ainsi que les taxes ou le pourboire dans Frais et Pourboire afin que le partage corresponde exactement au total du ticket.",
    },
  ],
  ctaTitle: "Prêts à partager l'addition directement à table ?",
  ctaBody: "Scannez l'addition, attribuez les articles aux personnes qui les ont commandés et voyez clairement qui doit combien à qui.",
  crumbGuides: "Guides",
  crumbCurrent: "Addition au restaurant",
  colItem: "Article",
  colAmount: "Montant",
  colPerson: "Personne",
  colDue: "Montant à payer",
};
