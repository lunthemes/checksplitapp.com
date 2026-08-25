import type { RestaurantBillGuideCopy } from "./types";

export const restaurantBillGuideEn: RestaurantBillGuideCopy = {
  metaTitle: "How to Split a Restaurant Bill Fairly | CheqSplit",
  metaDescription:
    "Check a receipt, assign individual and shared items, reconcile the total, and calculate each person’s share with this practical method.",
  h1: "How to split a restaurant bill fairly",
  answer:
    "Check the final receipt, assign individual items first, divide shared items among the people involved, and reconcile all shares to the receipt total.",
  choiceH2: "Choose between an equal split and an itemized split",
  choiceBody:
    "An equal split is the fastest option when orders are similar and everyone agrees to share the total. When people ordered different dishes or drinks, an itemized split is usually fairer: assign each person their own items first. Shared plates, bottles, or desserts should include only the people who had them. After the items are assigned, add tax, service charge, and tip so the individual shares add up to the receipt total. If the amounts do not match, a line was missed or a fee was left out. This keeps the split tied to the printed bill instead of a rough estimate.",
  stepsH2: "How to split a restaurant bill fairly in 5 steps",
  steps: [
    {
      title: "Check the receipt",
      desc: "Confirm every line item and the final total before anyone starts dividing amounts.",
    },
    {
      title: "Assign individual orders",
      desc: "Give each person the dishes and drinks only they ordered. Clear the obvious lines first.",
    },
    {
      title: "Divide shared items",
      desc: "Include only the people who shared a plate or bottle. Split equally, or by an agreed percentage when shares are uneven.",
    },
    {
      title: "Check remaining amounts",
      desc: "Look for unassigned lines, scan errors, and tax or tip still left out of Fees & Tips.",
    },
    {
      title: "Show the result",
      desc: "Let each person see their share and the resulting balance so everyone agrees before you leave the table.",
    },
  ],
  exampleH2: "Example: splitting a restaurant bill between four people",
  exampleIntro:
    "Maya, Noah, Owen, and Priya share one receipt. Maya and Noah also split a bottle of wine. A 10% service charge applies to the food and drink subtotal.",
  exampleReceiptCaption: "Receipt",
  exampleReceiptRows: [
    { item: "Pasta (Maya)", amount: "€15.00" },
    { item: "Burger (Noah)", amount: "€15.00" },
    { item: "Grilled fish (Owen)", amount: "€20.00" },
    { item: "Salad (Priya)", amount: "€10.00" },
    { item: "Bottle of wine (Maya and Noah)", amount: "€20.00" },
    { item: "Subtotal", amount: "€80.00" },
    { item: "Service charge (10%)", amount: "€8.00" },
    { item: "Receipt total", amount: "€88.00" },
  ],
  exampleShareCaption: "Amount due",
  exampleShareRows: [
    { person: "Maya (pasta €15 + half wine €10 + service €2.50)", amount: "€27.50" },
    { person: "Noah (burger €15 + half wine €10 + service €2.50)", amount: "€27.50" },
    { person: "Owen (fish €20 + service €2.00)", amount: "€22.00" },
    { person: "Priya (salad €10 + service €1.00)", amount: "€11.00" },
    { person: "Total of the four shares", amount: "€88.00" },
  ],
  exampleNote:
    "Service is allocated in proportion to each person’s food and drink: Maya and Noah each have €25 of the €80 subtotal, Owen €20, and Priya €10. The four shares add up to the €88 receipt total.",
  productH2: "Split a restaurant bill by item with CheqSplit",
  productBody:
    "CheqSplit implements the same steps by scanning the restaurant receipt, sharing the bill by link or QR, assigning individual and shared items, editing tax and tip as separate amounts, and showing who owes whom. It calculates balances; it does not transfer money.",
  productCta: "Split a restaurant receipt with CheqSplit",
  faqH2: "Restaurant bill splitting FAQ",
  faq: [
    {
      q: "Should the bill always be equal?",
      a: "Only if the group agrees and orders are similar. When orders differ, assign items so each person’s total matches what they had.",
    },
    {
      q: "How should a shared item be divided?",
      a: "Among the people involved—equally, or by an agreed percentage when shares are uneven.",
    },
    {
      q: "Why do totals sometimes differ?",
      a: "Check unassigned items, scan or typing errors, and tax or tip in Fees & Tips so the split matches the receipt total.",
    },
  ],
  ctaTitle: "Ready to split the receipt at the table?",
  ctaBody:
    "Scan the restaurant bill, assign items with the people who ordered them, and see who owes whom clearly.",
  crumbGuides: "Guides",
  crumbCurrent: "Restaurant bill",
  colItem: "Item",
  colAmount: "Amount",
  colPerson: "Person",
  colDue: "Amount due",
};
