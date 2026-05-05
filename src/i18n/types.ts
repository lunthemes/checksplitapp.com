export type FaqEntry = { q: string; a: string };

export type FeatureText = { title: string; desc: string };
export type HowStepText = {
  label: string;
  body: string;
  imageAlt: string;
  bullets: [string, string, string];
};
export type UseCaseText = { title: string; desc: string };

export interface Dictionary {
  meta: {
    title: string;
    description: string;
    ogDescription: string;
    twitterDescription: string;
    softwareDescription: string;
  };
  nav: {
    features: string;
    how: string;
    useCases: string;
    faq: string;
  };
  header: { download: string };
  hero: {
    title: string;
    body: string;
    alts: [string, string, string];
  };
  heroSlide2: {
    title: string;
    description: string;
    button: string;
  };
  features: {
    title: string;
    items: [FeatureText, FeatureText, FeatureText, FeatureText];
  };
  how: {
    title: string;
    subtitle: string;
    stepPill: (stepNum: string) => string;
    steps: [HowStepText, HowStepText, HowStepText, HowStepText, HowStepText];
  };
  useCases: {
    title: string;
    intro: string;
    items: [UseCaseText, UseCaseText, UseCaseText, UseCaseText];
  };
  cta: {
    title: string;
    body: string;
    sectionAria: string;
    imgAlt: string;
    badgeAlts: { appStore: string; play: string };
    /** Scurt etichetă lângă Google Play (ex. «Curând») */
    playSoon: string;
    /** Sfat pentru accesibilitate: de ce nu e activ (ex. «Nedisponibil momentan») */
    playDisabledHint: string;
    groupAria: string;
  };
  faq: {
    title: string;
    items: FaqEntry[];
  };
  footer: {
    tagline: string;
    product: string;
    company: string;
    legal: string;
    about: string;
    contact: string;
    privacy: string;
    terms: string;
    deleteAccount: string;
    deleteData: string;
    rights: string;
  };
  a11y: {
    keyFeatures: string;
    primaryNav: string;
    openMenu: string;
    howSection: string;
    logoHome: string;
  };
}
