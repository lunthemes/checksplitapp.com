import type { Dictionary } from "../types";

export const en: Dictionary = {
  meta: {
    title: "Bill splitting app for friends | CheqSplit",
    description:
      "Scan restaurant receipts, track shared expenses, and keep clear balances with friends.",
    ogDescription:
      "Two clear paths: split one restaurant bill by item, or track shared group and trip expenses—and see who owes whom.",
    twitterDescription:
      "Split a restaurant bill by item, or track group expenses over time. CheqSplit shows who owes whom.",
    softwareDescription:
      "CheqSplit helps you scan restaurant receipts and split by item, or track ongoing group and trip expenses and see who owes whom.",
  },
  nav: {
    features: "Features",
    how: "How it works",
    useCases: "Use cases",
    faq: "FAQ",
    restaurant: "Restaurant bill",
    groupExpenses: "Group expenses",
    guides: "Guides",
  },
  header: { download: "Get the free app" },
  hero: {
    title: "Split expenses with friends and see who owes whom",
    body: "Scan restaurant receipts, track shared expenses, and keep clear balances with friends. Invite people from previous groups and discuss costs in the group chat or directly with a friend.",
    alts: [
      "CheqSplit home screen showing the current group",
      "Group overview showing participant contributions",
      "CheqSplit: itemized restaurant bill split and receipt lines",
    ],
  },
  heroSlide2: {
    title: "Split restaurant bills by item",
    description:
      "Scan the receipt, assign each line to the right people, and see each person’s share clearly—without passing around a calculator.",
    button: "Split a restaurant bill",
  },
  workflows: {
    title: "Choose what you are splitting",
    restaurantTitle: "A restaurant bill",
    restaurantText:
      "Scan the receipt, review the items, invite the table, and assign each item to the people who ordered or shared it.",
    restaurantCta: "Split a restaurant bill",
    groupTitle: "Group or trip expenses",
    groupText:
      "Keep shared expenses in one group: record the payer and participants, add receipts from Bills, and check who owes whom in Summary. CheqSplit calculates balances; it does not transfer money.",
    groupCta: "Track group expenses",
  },
  features: {
    title: "Why CheqSplit?",
    items: [
      {
        title: "Scan restaurant receipts",
        desc: "Scan a receipt to pull in line items and totals so you can start from the printed bill.",
      },
      {
        title: "Split by line item",
        desc: "Assign each line to the right people instead of splitting everything down the middle.",
      },
      {
        title: "Keep group spending in one place",
        desc: "Restaurant bills and trip costs live on one shared expense history.",
      },
      {
        title: "See who owes whom",
        desc: "CheqSplit calculates the group balance so everyone can see who owes whom.",
      },
    ],
  },
  how: {
    title: "How CheqSplit works",
    subtitle:
      "Five steps: split a restaurant bill, track group expenses in a trip, and see who owes whom—from the first invite to a report the group can check.",
    stepPill: (n) => `STEP ${n}`,
    steps: [
      {
        label: "Create a group for your trip",
        body: "On the home screen, tap Create group, name the group, choose its currency, and invite participants by link or QR code.",
        imageAlt: "CheqSplit home screen showing the current group",
        bullets: [
          "Clear trip name",
          "Invites by link or QR",
          "Group expenses in one trip",
        ],
      },
      {
        label: "Split the check by line",
        body: "Everyone sees the same check on their phones and marks their items together.",
        imageAlt: "CheqSplit: scan a receipt to split a bill by item",
        bullets: [
          "Mark who pays for what",
          "Assign shared items",
          "Edit tax and tip separately",
        ],
      },
      {
        label: "Add shared expenses",
        body: "Open Expenses and tap Add Expense. Enter the description, amount and currency, optionally choose a category, select the payer, then choose Everyone or Custom for the participants. Any participant can add an expense.",
        imageAlt: "CheqSplit Add Expense screen with payer and participants",
        bullets: [
          "Add Expense on the Expenses tab",
          "Whole group or selected people",
          "Anyone in the trip can add",
        ],
      },
      {
        label: "See who owes whom",
        body: "CheqSplit totals everything, shows each person’s share, and who owes whom.",
        imageAlt: "CheqSplit: balance summary showing who owes whom",
        bullets: [
          "Total amount of spending",
          "Per-person totals",
          "Plain view of who owes what, and how much",
        ],
      },
      {
        label: "Save the trip and the report",
        body: "Archive completed trips or export a detailed PDF with costs, summary totals, and a clear chart.",
        imageAlt: "CheqSplit: trip report with expense summary",
        bullets: [
          "Archive of finished trips",
          "A full PDF report",
          "Amounts, tables, and charts",
        ],
      },
    ],
  },
  useCases: {
    title: "Built for everyday shared expenses",
    intro:
      "CheqSplit fits when you share a restaurant check or keep group expenses in one trip—so everyone sees the same record and who owes whom.",
    items: [
      {
        title: "Restaurant bills",
        desc: "Scan the check, split by dish, and see each person’s share.",
      },
      {
        title: "Group trips",
        desc: "Accommodation, transport, meals, tickets, and activities in one running balance.",
      },
      {
        title: "Group expense history",
        desc: "Ongoing trip costs from different payers on one timeline.",
      },
      {
        title: "Who owes whom",
        desc: "Clear balances from the shared record—not a payment transfer.",
      },
    ],
  },
  cta: {
    title: "Start with the expense in front of you",
    body: "Download CheqSplit free, then choose a restaurant split or group tracking.",
    sectionAria: "Download CheqSplit for free",
    imgAlt: "CheqSplit home: split shared bills and track group expenses",
    badgeAlts: {
      appStore: "Download free on the App Store",
      play: "Get it free on Google Play",
    },
    groupAria: "Download the app for free",
  },
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        q: "What does CheqSplit do?",
        a: "It scans and splits itemized restaurant bills, and it tracks ongoing group expenses in a trip so you can see who owes whom.",
      },
      {
        q: "Can I split a receipt by item?",
        a: "Yes. Review the scanned lines and assign each item to the people who had or shared it.",
      },
      {
        q: "Can I track expenses across a trip or group?",
        a: "Keep shared expenses in one group: record the payer and participants, add receipts from Bills, and check who owes whom in Summary. CheqSplit calculates balances; it does not transfer money.",
      },
      {
        q: "Does CheqSplit transfer money?",
        a: "No. CheqSplit calculates shares and shows who owes whom. It is not a payment service.",
      },
      {
        q: "Can I export a report?",
        a: "Yes. You can archive a finished trip and export a PDF report with expenses, totals, and a chart.",
      },
      {
        q: "How do I invite people?",
        a: "Share a link or QR code so participants join the same bill or the same trip.",
      },
    ],
  },
  footer: {
    tagline: "Split group expenses fairly, without the guesswork.",
    product: "Product",
    company: "Company",
    legal: "Legal",
    about: "Support",
    contact: "Contact",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    deleteAccount: "Delete account",
    deleteData: "Delete your data",
    rights: "All rights reserved.",
  },
  a11y: {
    keyFeatures: "Key features",
    primaryNav: "Primary",
    openMenu: "Open menu",
    howSection: "How it works",
    logoHome: "CheqSplit home",
  },
};
