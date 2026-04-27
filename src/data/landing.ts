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

export const featureCardVisuals = [
  { icon: "/app-icons/scan-bill.svg", iconBg: "bg-blue-100" },
  { icon: "/app-icons/split-item.svg", iconBg: "bg-purple-100" },
  { icon: "/app-icons/track-expenses.svg", iconBg: "bg-emerald-100" },
  { icon: "/app-icons/who-owes-whom.svg", iconBg: "bg-orange-100" },
] as const;

export const useCaseVisuals = [
  { icon: "/app-icons/split-item.svg", ring: "ring-orange-200 bg-orange-50" },
  { icon: "/app-icons/trip.svg", ring: "ring-sky-200 bg-sky-50" },
  { icon: "/app-icons/scan-bill.svg", ring: "ring-amber-200 bg-amber-50" },
  { icon: "/app-icons/shopping.svg", ring: "ring-violet-200 bg-violet-50" },
] as const;

export const site = {
  /** Pictogramă (fără text) — plasează fișierul la `public/logos/icon.png`. */
  logoIcon: "/logos/icon.png",
  name: "CheqSplit",
} as const;

/** Badge-uri oficiale App Store / Google Play — fișiere în `public/logos/`. */
export const store = {
  badgeAppStore: "/logos/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg",
  badgeGooglePlay: "/logos/GetItOnGooglePlay_Badge_Web_color_English.svg",
  appStoreUrl: "https://apps.apple.com/md/app/cheqsplit/id6756801835",
  googlePlayUrl: "#",
} as const;
