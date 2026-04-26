/**
 * Screenshot-uri din `public/screens/` (PNG cu rama de iPhone).
 * Dacă schimbi un asset, păstrează același nume (ex. `home-trip.png`, `pdf-report.png`).
 */
const SCREENS = {
  home: "home.png",
  overview: "overview.png",
  homeTrip: "home-trip.png",
  liveSplit: "live-split.png",
  allExpenses: "all-expenses.png",
  whoOwes: "who-owes.png",
  pdfReport: "pdf-report.png",
} as const;

export function screenUrl(name: string): string {
  return encodeURI(`/screens/${name}`);
}

export const heroPhoneScreens: readonly [string, string, string] = [
  screenUrl(SCREENS.home),
  screenUrl(SCREENS.overview),
  screenUrl(SCREENS.liveSplit),
];

/** Secțiunea CTA: ecranul cu listă de trips. */
export const ctaPhoneScreen = screenUrl(SCREENS.homeTrip);

/** Step 1 … 5 (aceeași ordine ca în `howSteps` din `landing.ts`). */
export const howStepScreens = [
  screenUrl(SCREENS.homeTrip),
  screenUrl(SCREENS.liveSplit),
  screenUrl(SCREENS.allExpenses),
  screenUrl(SCREENS.whoOwes),
  screenUrl(SCREENS.pdfReport),
] as const;
