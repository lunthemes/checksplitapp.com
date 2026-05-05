/** Structured legal/support copy for localized pages (same shape for every language). */

export interface LabeledBullet {
  label: string;
  text: string;
}

export interface PrivacyPage {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lastUpdatedPrefix: string;
  lastUpdatedDate: string;
  intro: string;
  s1Title: string;
  s1Intro: string;
  s1Bullets: LabeledBullet[];
  s2Title: string;
  s2Intro: string;
  s2List: string[];
  s3Title: string;
  s3Intro: string;
  s3List: string[];
  s4Title: string;
  s4Intro: string;
  s4List: string[];
  s5Title: string;
  s5Body: string;
  s6Title: string;
  s6Intro: string;
  s6List: string[];
  s7Title: string;
  s7Body: string;
  s8Title: string;
  s8Intro: string;
  /** Five entries: Firebase, Gemini, RevenueCat, Apple, OCR — `text` may contain HTML for links. */
  s8Bullets: LabeledBullet[];
  s9Title: string;
  s9Body: string;
  s10Title: string;
  s10Intro: string;
  emailLabel: string;
  developerLabel: string;
  developerName: string;
  relatedNavLabel: string;
  relatedTerms: string;
  relatedDeleteAccount: string;
  relatedDeleteData: string;
}

export interface TermsPage {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lastUpdatedPrefix: string;
  lastUpdatedDate: string;
  welcome: string;
  s1Title: string;
  s1BeforePrivacyLink: string;
  s1PrivacyLinkText: string;
  s1AfterPrivacyLink: string;
  s2Title: string;
  s2Intro: string;
  s2List: string[];
  importantTitle: string;
  importantBody: string;
  s3Title: string;
  s3Intro: string;
  s3List: string[];
  s4Title: string;
  s4Intro: string;
  s4List: string[];
  s4SubscriptionsLead: string;
  s4SubscriptionsPrivacyLinkText: string;
  s4SubscriptionsTail: string;
  s5Title: string;
  s5Intro: string;
  s5List: string[];
  s6Title: string;
  s6Body: string;
  s7Title: string;
  s7Intro: string;
  s7List: string[];
  s8Title: string;
  s8Body: string;
  s9Title: string;
  s9Body: string;
  s10Title: string;
  s10Intro: string;
  s10List: string[];
  s11Title: string;
  s11Body: string;
  s12Title: string;
  s12Intro: string;
  emailLabel: string;
  developerLabel: string;
  developerName: string;
  relatedNavLabel: string;
  relatedPrivacy: string;
  relatedDeleteAccount: string;
  relatedDeleteData: string;
}

export interface DeleteAccountPage {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lastUpdatedPrefix: string;
  lastUpdatedDate: string;
  intro: string;
  howTitle: string;
  howSteps: string[];
  howNote: string;
  whatDeleteTitle: string;
  whatDeleteIntro: string;
  whatDeleteList: string[];
  retainTitle: string;
  retainBullets: LabeledBullet[];
  timingTitle: string;
  timingBody: string;
  privacySeeAlso: string;
  privacyLinkText: string;
  relatedNavLabel: string;
  relatedDeleteData: string;
  relatedTerms: string;
}

export interface DeleteDataPage {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lastUpdatedPrefix: string;
  lastUpdatedDate: string;
  intro: string;
  step1Title: string;
  step1Intro: string;
  step1Bullets: LabeledBullet[];
  step1Note: string;
  step2Title: string;
  step2Intro: string;
  step2Steps: string[];
  step2Note: string;
  vsTitle: string;
  vsBullets: LabeledBullet[];
  timingTitle: string;
  timingBody: string;
  accountInsteadLead: string;
  accountInsteadLinkText: string;
  accountInsteadTail: string;
  privacyLead: string;
  privacyLinkText: string;
  privacyTail: string;
}

export interface SupportPage {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  thankYou: string;
  contactTitle: string;
  contactNote: string;
  faqTitle: string;
  faqScanTitle: string;
  faqScanBody: string;
  faqJoinTitle: string;
  faqJoinBody: string;
  faqSubTitle: string;
  faqSubBody: string;
  legalTitle: string;
  legalPrivacy: string;
  legalTerms: string;
  legalDeleteAccount: string;
  legalDeleteData: string;
  developerLine: string;
}

export interface LegalBundle {
  privacy: PrivacyPage;
  terms: TermsPage;
  deleteAccount: DeleteAccountPage;
  deleteData: DeleteDataPage;
  support: SupportPage;
}
