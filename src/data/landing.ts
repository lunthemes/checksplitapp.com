import { howStepScreens } from "./screens";

export const featureItems = [
  {
    title: "Scan bills instantly",
    desc: "Use receipt scanning to capture items, prices, taxes, and totals in seconds.",
    icon: "/icons/scan-bill.svg",
    iconBg: "bg-blue-100",
  },
  {
    title: "Split by item",
    desc: "Assign each receipt item to the right people instead of guessing equal shares.",
    icon: "/icons/split-item.svg",
    iconBg: "bg-purple-100",
  },
  {
    title: "Track everything",
    desc: "Keep restaurant bills, groceries, trip costs, and shared expenses in one place.",
    icon: "/icons/track-expenses.svg",
    iconBg: "bg-emerald-100",
  },
  {
    title: "See who owes whom",
    desc: "CheqSplit calculates balances automatically, so everyone knows what to pay.",
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
    image: {
      src: howStepScreens[0],
      alt: "CheqSplit group trip expense tracker screen",
    },
    items: [
      "Fast trip creation",
      "Invites in a tap",
      "Works for dinners or vacations",
    ],
    theme: howStepThemes[0],
  },
  {
    step: "2",
    label: "Split expenses by item",
    body: "Itemized bills: assign each line to the right people so the math is obvious.",
    image: {
      src: howStepScreens[1],
      alt: "CheqSplit receipt scanner screen for splitting bills",
    },
    items: [
      "Line-item splits",
      "Shared items & splits",
      "Tips and fees handled",
    ],
    theme: howStepThemes[1],
  },
  {
    step: "3",
    label: "Track every shared expense",
    body: "Categorize spending and keep the full picture in one running total.",
    image: {
      src: howStepScreens[2],
      alt: "CheqSplit mobile app screen showing shared expenses",
    },
    items: [
      "Smart categories",
      "Receipts & notes",
      "One timeline for the group",
    ],
    theme: howStepThemes[2],
  },
  {
    step: "4",
    label: "Settle balances instantly",
    body: "Settle up with balances that update as people pay—no more chasing.",
    image: {
      src: howStepScreens[3],
      alt: "CheqSplit balance summary showing who owes whom",
    },
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
    image: {
      src: howStepScreens[4],
      alt: "CheqSplit trip report with expense summary",
    },
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
    title: "Restaurants",
    desc: "Itemize the check, split by dish, and settle fairly.",
    icon: "/icons/split-item.svg",
    ring: "ring-orange-200 bg-orange-50",
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

export const faqItems: { q: string; a: string }[] = [
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
