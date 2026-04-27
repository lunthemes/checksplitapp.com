import type { Dictionary } from "../types";

export const en: Dictionary = {
  meta: {
    title: "CheqSplit: Split Expenses, Scan Receipts & Track Group Bills",
    description:
      "Split expenses, scan receipts, and track shared bills. CheqSplit shows who owes whom after restaurants, trips, groceries, and any group plan—without spreadsheet chaos.",
    ogDescription:
      "Split expenses fairly: scan receipts, track shared expenses, and see who owes whom. Made for restaurants, group trips, roommates, and everyday shared costs.",
    twitterDescription:
      "Split expenses and shared bills without awkward math, screenshots, or spreadsheets—CheqSplit does the work.",
    softwareDescription:
      "CheqSplit helps you split expenses, scan receipts, track shared bills, and see who owes whom for restaurants, trips, groceries, and group activities.",
  },
  nav: {
    features: "Features",
    how: "How it works",
    useCases: "Use cases",
    faq: "FAQ",
  },
  header: { download: "Get the app" },
  hero: {
    title: "Split expenses, scan receipts, track shared bills",
    body: "Split expenses, scan receipts, and track what the group spent—so you always see who owes whom after dinner out, a trip, groceries, or a shared night in.",
    alts: [
      "CheqSplit: group trip and shared expenses",
      "CheqSplit mobile app showing shared expenses",
      "CheqSplit: itemized bill split and receipt lines",
    ],
  },
  features: {
    title: "Why CheqSplit?",
    items: [
      {
        title: "Scan receipts fast",
        desc: "Scan a receipt to pull in line items, taxes, and totals in seconds—no retyping.",
      },
      {
        title: "Split by line item",
        desc: "Assign each line to the right people instead of splitting everything down the middle.",
      },
      {
        title: "Keep group spending in one place",
        desc: "Restaurant tabs, trip costs, groceries, and other shared expenses live on one timeline.",
      },
      {
        title: "See who owes whom",
        desc: "Balances update automatically so everyone knows what to settle and when.",
      },
    ],
  },
  how: {
    title: "How CheqSplit works",
    subtitle: "Five clear steps from a new trip to a report everyone can trust.",
    stepPill: (n) => `Step ${n}`,
    steps: [
      {
        label: "Start a trip in seconds",
        body: "Name the trip, invite the group, and you’re in—no endless settings.",
        imageAlt: "CheqSplit: group trip and shared expenses",
        bullets: [
          "Set up a trip in moments",
          "One-tap invites",
          "Works for dinners, weekends away, and more",
        ],
      },
      {
        label: "Split shared expenses by item",
        body: "Line by line, assign the bill to the people who actually ordered it.",
        imageAlt: "CheqSplit: scan a receipt to split a bill by item",
        bullets: ["Per-line splits", "Shared plates & custom splits", "Tips and fees included"],
      },
      {
        label: "Track every shared expense",
        body: "Categorize spending, attach notes, and keep a single running view for the group.",
        imageAlt: "CheqSplit: mobile screen with shared group expenses",
        bullets: ["Helpful categories", "Receipts & notes", "One timeline for the group"],
      },
      {
        label: "Settle up with live balances",
        body: "Balances change as people pay, so you spend less time chasing in the group chat.",
        imageAlt: "CheqSplit: balance summary showing who owes whom",
        bullets: [
          "Net balances for each person",
          "Optional nudges",
          "Export-friendly summaries",
        ],
      },
      {
        label: "Share a clean trip report",
        body: "Charts, totals, and who paid what—ready to send or look back on later.",
        imageAlt: "CheqSplit: trip report with expense summary",
        bullets: ["Simple visuals", "Share a link or image", "Private by design"],
      },
    ],
  },
  useCases: {
    title: "Built for real shared spending",
    intro:
      "Whenever you split expenses with others, CheqSplit fits: restaurant checks, group trips, groceries with roommates, family costs, and shopping with friends. Scan the receipt, assign what each person had, add fees or discounts, and get a clear settlement you can all agree on—no back-of-napkin math.",
    items: [
      {
        title: "Restaurants",
        desc: "Itemize the check, split by dish, and close the tab fairly.",
      },
      { title: "Group trips", desc: "Flights, rooms, and meals in one running total." },
      { title: "Home & family", desc: "Groceries, events, and day-to-day household costs." },
      {
        title: "Shared shopping",
        desc: "Gifts, bulk runs, and projects you split with friends.",
      },
    ],
  },
  cta: {
    title: "Ready to split expenses without the stress?",
    body: "Get CheqSplit and make shared bills and group expenses easier for everyone.",
    sectionAria: "Download CheqSplit",
    imgAlt: "CheqSplit home: split shared bills and track group expenses",
    badgeAlts: {
      appStore: "Download on the App Store",
      play: "Get it on Google Play",
    },
    playSoon: "Soon",
    playDisabledHint: "Not available yet",
    groupAria: "Download the app",
  },
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        q: "What is CheqSplit?",
        a: "CheqSplit is a bill-splitting and group expense app. Scan receipts, split line items, track shared costs, and see who owes whom in one place.",
      },
      {
        q: "Can I split a receipt by line item?",
        a: "Yes. Assign each line to specific people so everyone pays for what they actually ordered or used.",
      },
      {
        q: "Is CheqSplit good for group trips?",
        a: "Yes. Create a trip, add shared expenses, invite your group, attach receipts, and export a final summary with who owes whom.",
      },
      {
        q: "Can I use CheqSplit for restaurants and grocery runs?",
        a: "Yes. It works for restaurant bills, cafés, food shopping, and any situation where a few people are splitting the cost.",
      },
      {
        q: "Does CheqSplit work offline?",
        a: "You can do a lot on your phone locally, but sharing a trip and syncing with others needs an internet connection.",
      },
      {
        q: "How do I invite people to a trip?",
        a: "Start a trip in CheqSplit, add expenses, then share the trip link. When people join, they can see the shared balance and their part.",
      },
    ],
  },
  footer: {
    tagline: "Split group expenses fairly, quickly, and without the guesswork.",
    product: "Product",
    company: "Company",
    legal: "Legal",
    about: "About",
    contact: "Contact",
    privacy: "Privacy",
    terms: "Terms",
    rights: "All rights reserved.",
  },
  a11y: {
    keyFeatures: "Key features",
    primaryNav: "Primary",
    howSection: "How it works",
    logoHome: "CheqSplit home",
  },
};
