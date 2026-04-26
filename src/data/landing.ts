import { howStepScreens } from "./screens";

export const featureItems = [
  {
    title: "Scan bills instantly",
    desc: "From receipt to line items in seconds.",
    icon: "/icons/scan-bill.svg",
    iconBg: "bg-blue-100",
  },
  {
    title: "Split by item",
    desc: "Assign who ordered what, fairly.",
    icon: "/icons/split-item.svg",
    iconBg: "bg-purple-100",
  },
  {
    title: "Track everything",
    desc: "Categories, trips, and history in one place.",
    icon: "/icons/track-expenses.svg",
    iconBg: "bg-emerald-100",
  },
  {
    title: "See who owes whom",
    desc: "Clear balances, zero spreadsheets.",
    icon: "/icons/who-owes-whom.svg",
    iconBg: "bg-orange-100",
  },
] as const;

/** Tema per pas: fundal secțiune; pill + bife = culori vii, text alb (mockup). */
export const howStepThemes = [
  {
    section: "bg-white",
    pill: "bg-sky-500 text-white shadow-md shadow-sky-500/25",
    check: "bg-sky-500 text-white",
  },
  {
    section: "bg-violet-50/95",
    pill: "bg-violet-600 text-white shadow-md shadow-violet-500/30",
    check: "bg-violet-600 text-white",
  },
  {
    section: "bg-white",
    pill: "bg-sky-500 text-white shadow-md shadow-sky-500/25",
    check: "bg-sky-500 text-white",
  },
  {
    section: "bg-emerald-50/90",
    pill: "bg-emerald-500 text-white shadow-md shadow-emerald-500/25",
    check: "bg-emerald-500 text-white",
  },
  {
    section: "bg-orange-50/90",
    pill: "bg-orange-500 text-white shadow-md shadow-orange-500/25",
    check: "bg-orange-500 text-white",
  },
] as const;

export const howSteps = [
  {
    step: "1",
    label: "Create trips in seconds",
    body: "Name your trip, invite friends, and you’re set—no setup rabbit holes.",
    image: { src: howStepScreens[0], alt: "CheqSplit: create a trip" },
    items: [
      "Fast trip creation",
      "Invites in a tap",
      "Works for dinners or vacations",
    ],
    theme: howStepThemes[0],
  },
  {
    step: "2",
    label: "Split by item, not guesswork",
    body: "Itemized bills: assign each line to the right people so the math is obvious.",
    image: { src: howStepScreens[1], alt: "CheqSplit: split the bill by item" },
    items: [
      "Line-item splits",
      "Shared items & splits",
      "Tips and fees handled",
    ],
    theme: howStepThemes[1],
  },
  {
    step: "3",
    label: "Track every expense in one place",
    body: "Categorize spending and keep the full picture in one running total.",
    image: { src: howStepScreens[2], alt: "CheqSplit: group expenses" },
    items: [
      "Smart categories",
      "Receipts & notes",
      "One timeline for the group",
    ],
    theme: howStepThemes[2],
  },
  {
    step: "4",
    label: "See who owes whom instantly",
    body: "Settle up with balances that update as people pay—no more chasing.",
    image: { src: howStepScreens[3], alt: "CheqSplit: who owes whom" },
    items: [
      "Net balances",
      "Payment reminders (optional)",
      "Exportable summaries",
    ],
    theme: howStepThemes[3],
  },
  {
    step: "5",
    label: "Share clean trip reports",
    body: "Pie charts, totals, and who paid what—ready to send or review later.",
    image: { src: howStepScreens[4], alt: "CheqSplit: trip report" },
    items: [
      "Visual summaries",
      "Share as link or image",
      "Private by default",
    ],
    theme: howStepThemes[4],
  },
] as const;

export const useCases = [
  {
    title: "Roommates",
    desc: "Split rent, utilities, and house supplies.",
    icon: "/icons/roommates.svg",
    ring: "ring-rose-200 bg-rose-50",
  },
  {
    title: "Group trips",
    desc: "Flights, hotels, and meals in one place.",
    icon: "/icons/trip.svg",
    ring: "ring-sky-200 bg-sky-50",
  },
  {
    title: "Families",
    desc: "Groceries, events, and household bills.",
    icon: "/icons/scan-bill.svg",
    ring: "ring-amber-200 bg-amber-50",
  },
  {
    title: "Shared shopping",
    desc: "Gifts, bulk buys, and projects with friends.",
    icon: "/icons/shopping.svg",
    ring: "ring-violet-200 bg-violet-50",
  },
] as const;

export const stats = [
  { n: "25K+", t: "Happy users" },
  { n: "1M+", t: "Expenses split" },
  { n: "150+", t: "Countries" },
  { n: "4.8/5", t: "App Store & Play Store" },
] as const;

export const faqItems: { q: string; a: string }[] = [
  { q: "Is CheqSplit free to use?", a: "Placeholder — replace with your product answer." },
  { q: "Can I use it offline?", a: "Placeholder — replace with your product answer." },
  { q: "Does it work in multiple currencies?", a: "Placeholder — replace with your product answer." },
  { q: "How do I invite people to a trip?", a: "Placeholder — replace with your product answer." },
  { q: "Is my data private?", a: "Placeholder — replace with your product answer." },
  { q: "How do I export a trip report?", a: "Placeholder — replace with your product answer." },
];

export const site = {
  /** Pictogramă (fără text) — plasează fișierul la `public/logos/icon.png`. */
  logoIcon: "/logos/icon.png",
  name: "CheqSplit",
} as const;

/** Badge-uri oficiale App Store / Google Play — fișiere în `public/logos/`. */
export const store = {
  badgeAppStore: "/logos/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg",
  badgeGooglePlay: "/logos/GetItOnGooglePlay_Badge_Web_color_English.svg",
  appStoreUrl: "#",
  googlePlayUrl: "#",
} as const;
