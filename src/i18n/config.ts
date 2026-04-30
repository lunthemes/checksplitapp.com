/**
 * App-supported locales (same as client `SupportedLanguage`).
 * Full landing copy: `en`, `ro`. Others use English copy until translated.
 */
export const supportedLanguages = [
  "en",
  "cs",
  "ro",
  "ru",
  "fr",
  "de",
  "es",
  "it",
  "pl",
  "hu",
  "tr",
] as const;

export type SupportedLanguage = (typeof supportedLanguages)[number];

/** Same list as `supportedLanguages` (for older imports) */
export const locales = supportedLanguages;
/** @deprecated use `SupportedLanguage` */
export type Locale = SupportedLanguage;

export const defaultLocale: SupportedLanguage = "en";

/** Root `/` redirect target */
export const defaultLocalePath = `/${defaultLocale}/` as const;

export function isLocale(s: string): s is SupportedLanguage {
  return (supportedLanguages as readonly string[]).includes(s);
}

/**
 * Steag (emoji) pentru fiecare limbă în listă / în comutator (rezumat).
 * Drapeau: indicativ țării cel mai apropiat de varianta de limbă.
 */
export const localeFlags: Record<SupportedLanguage, string> = {
  en: "🇬🇧",
  cs: "🇨🇿",
  ro: "🇷🇴",
  ru: "🇷🇺",
  fr: "🇫🇷",
  de: "🇩🇪",
  es: "🇪🇸",
  it: "🇮🇹",
  pl: "🇵🇱",
  hu: "🇭🇺",
  tr: "🇹🇷",
};

/** Short code shown in compact UI (optional) */
export const localeShortCode: Record<SupportedLanguage, string> = {
  en: "EN",
  cs: "CS",
  ro: "RO",
  ru: "RU",
  fr: "FR",
  de: "DE",
  es: "ES",
  it: "IT",
  pl: "PL",
  hu: "HU",
  tr: "TR",
};

/** Native name for the language dropdown */
export const localeDisplayNames: Record<SupportedLanguage, string> = {
  en: "English",
  cs: "Čeština",
  ro: "Română",
  ru: "Русский",
  fr: "Français",
  de: "Deutsch",
  es: "Español",
  it: "Italiano",
  pl: "Polski",
  hu: "Magyar",
  tr: "Türkçe",
};

/** "Language" label for the picker, in that locale’s UI */
export const localePickerLabel: Record<SupportedLanguage, string> = {
  en: "Language",
  cs: "Jazyk",
  ro: "Limbă",
  ru: "Язык",
  fr: "Langue",
  de: "Sprache",
  es: "Idioma",
  it: "Lingua",
  pl: "Język",
  hu: "Nyelv",
  tr: "Dil",
};
