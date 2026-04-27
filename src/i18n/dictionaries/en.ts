import type { Dictionary } from "../types";

export const en: Dictionary = {
  meta: {
    title: "CheqSplit: Split Expenses, Scan Receipts & Track Group Bills",
    description:
      "CheqSplit helps you split expenses, scan receipts, track shared bills, and see who owes whom after restaurants, trips, groceries, or group activities.",
    ogDescription:
      "Split expenses fairly: scan receipts, track shared bills, and see who owes whom. Great for restaurants, trips, roommates, and group activities.",
    twitterDescription:
      "The easy way to split expenses and shared bills without awkward math or spreadsheets.",
    softwareDescription:
      "CheqSplit helps you split expenses, scan receipts, track shared bills, and see who owes whom after restaurants, trips, or group activities.",
  },
  nav: {
    features: "Features",
    how: "How it works",
    useCases: "Use cases",
    faq: "FAQ",
  },
  header: { download: "Download app" },
  hero: {
    title: "Split Expenses, Scan Receipts, and Track Group Bills",
    body: "CheqSplit helps you split expenses, scan receipts, track shared bills, and see who owes whom after restaurants, trips, groceries, or group activities.",
    alts: [
      "CheqSplit group trip expense tracker screen",
      "CheqSplit mobile app screen showing shared expenses",
      "CheqSplit live bill split and receipt line items",
    ],
  },
  features: {
    title: "Why use CheqSplit?",
    items: [
      {
        title: "Scan bills instantly",
        desc: "Use receipt scanning to capture items, prices, taxes, and totals in seconds.",
      },
      {
        title: "Split by item",
        desc: "Assign each receipt item to the right people instead of guessing equal shares.",
      },
      {
        title: "Track everything",
        desc: "Keep restaurant bills, groceries, trip costs, and shared expenses in one place.",
      },
      {
        title: "See who owes whom",
        desc: "CheqSplit calculates balances automatically, so everyone knows what to pay.",
      },
    ],
  },
  how: {
    title: "How CheqSplit Works",
    subtitle: "Five clear steps from trip to a clean report everyone can trust.",
    stepPill: (n) => `Step ${n}`,
    steps: [
      {
        label: "Create trips in seconds",
        body: "Name your trip, invite friends, and you’re set—no setup rabbit holes.",
        imageAlt: "CheqSplit group trip expense tracker screen",
        bullets: [
          "Fast trip creation",
          "Invites in a tap",
          "Works for dinners or vacations",
        ],
      },
      {
        label: "Split expenses by item",
        body: "Itemized bills: assign each line to the right people so the math is obvious.",
        imageAlt: "CheqSplit receipt scanner screen for splitting bills",
        bullets: ["Line-item splits", "Shared items & splits", "Tips and fees handled"],
      },
      {
        label: "Track every shared expense",
        body: "Categorize spending and keep the full picture in one running total.",
        imageAlt: "CheqSplit mobile app screen showing shared expenses",
        bullets: ["Smart categories", "Receipts & notes", "One timeline for the group"],
      },
      {
        label: "Settle balances instantly",
        body: "Settle up with balances that update as people pay—no more chasing.",
        imageAlt: "CheqSplit balance summary showing who owes whom",
        bullets: [
          "Net balances",
          "Payment reminders (optional)",
          "Exportable summaries",
        ],
      },
      {
        label: "Share clean trip reports",
        body: "Pie charts, totals, and who paid what—ready to send or review later.",
        imageAlt: "CheqSplit trip report with expense summary",
        bullets: ["Visual summaries", "Share as link or image", "Private by default"],
      },
    ],
  },
  useCases: {
    title: "Perfect for Any Shared Expense",
    intro:
      "Whenever you need to split expenses with others—dining out, travel, or groceries—CheqSplit is built for real life: restaurant bills, group trips, roommate groceries, family purchases, and shopping with friends. Instead of calculating manually, you can scan receipts, assign items, add fees or discounts, and get a clear settlement summary.",
    items: [
      {
        title: "Restaurants",
        desc: "Itemize the check, split by dish, and settle fairly.",
      },
      { title: "Group trips", desc: "Flights, hotels, and meals in one place." },
      { title: "Families", desc: "Groceries, events, and household bills." },
      {
        title: "Shared shopping",
        desc: "Gifts, bulk buys, and projects with friends.",
      },
    ],
  },
  cta: {
    title: "Ready to split smarter?",
    body: "Join thousands of groups who split expenses without the stress.",
    sectionAria: "Download CheqSplit",
    imgAlt:
      "CheqSplit mobile app home screen for splitting bills and shared expenses",
    badgeAlts: {
      appStore: "Download on the App Store",
      play: "Get it on Google Play",
    },
    playSoon: "Soon",
    playDisabledHint: "Not available yet",
    groupAria: "Download the app",
  },
  faq: {
    title: "Frequently Asked Questions",
    items: [
      {
        q: "What is CheqSplit?",
        a: "CheqSplit is a bill splitting and group expense tracking app that helps you scan receipts, split items, track shared costs, and see who owes whom.",
      },
      {
        q: "Can I split a receipt by item?",
        a: "Yes. CheqSplit lets you assign individual receipt items to specific people, so everyone pays only for what they had.",
      },
      {
        q: "Is CheqSplit good for group trips?",
        a: "Yes. You can create a trip, add shared expenses, invite participants, attach receipts, and generate a final report showing who owes whom.",
      },
      {
        q: "Can I use CheqSplit for restaurants?",
        a: "Yes. CheqSplit is useful for restaurant bills, cafés, bars, groceries, shopping, vacations, and any situation where several people share expenses.",
      },
      {
        q: "Does CheqSplit work offline?",
        a: "You can manage some data locally, but sharing trips and syncing with other participants requires internet access.",
      },
      {
        q: "How do I invite people to a trip?",
        a: "Create a trip in CheqSplit, add expenses, then share the trip link with friends so they can join and see the shared balance.",
      },
    ],
  },
  footer: {
    tagline: "The easier way to split group expenses—fair, fast, and clear.",
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
