import type { PrivacyPage } from "../../types";

const link = (href: string, text: string) =>
  `<a class="font-medium text-brand-600 underline hover:text-brand-700" href="${href}">${text}</a>`;

export const privacyEn: PrivacyPage = {
  metaTitle: "Privacy Policy - CheqSplit",
  metaDescription:
    "How CheqSplit collects, uses, and safeguards your information when you use our mobile application.",
  h1: "Privacy Policy",
  lastUpdatedPrefix: "Last updated:",
  lastUpdatedDate: "March 25, 2026",
  intro:
    'CheqSplit ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our mobile application.',
  s1Title: "1 — Information We Collect",
  s1Intro: "CheqSplit collects minimal data necessary to provide bill splitting functionality:",
  s1Bullets: [
    {
      label: "Authentication",
      text: "You can use CheqSplit with an anonymous session, or link or sign in with email and password (stored and verified by Firebase Authentication), or sign in with Google. If you use email/password or Google, we receive the identifiers Firebase associates with your account (typically email and, for Google, your name) so you can sign in on other devices and recover access. Passwords are handled by Firebase; we do not store your password in plain text.",
    },
    {
      label: "Bill and trip data",
      text: "Information you voluntarily enter, including item names, quantities, prices, participant names, trip names, and related shared-expense data.",
    },
    {
      label: "Receipt images and scanning",
      text: "Photos you take or import may be analyzed on your device using on-device text recognition (OCR). When smart receipt scanning is enabled in the app, portions of the receipt image and/or extracted text may be sent to Google’s generative AI (Gemini) service to help detect line items and totals. You should always review and correct items before sharing a bill.",
    },
    {
      label: "Subscriptions",
      text: "If you purchase a premium plan, Apple processes the payment. We use RevenueCat to validate entitlements; RevenueCat receives an app user identifier and purchase-related data as described in their policy.",
    },
    {
      label: "Device information",
      text: "Basic device and diagnostic data for app functionality and crash reporting.",
    },
  ],
  s2Title: "2 — How We Use Your Information",
  s2Intro: "We use the collected information to:",
  s2List: [
    "Provide bill splitting and sharing functionality",
    "Enable real-time collaboration with other participants",
    "Store your bill history for your convenience",
    "Improve app performance and fix bugs",
  ],
  s3Title: "3 — Data Storage and Security",
  s3Intro: "Your data is stored securely using Google Firebase services:",
  s3List: [
    "Bill data is stored in Firebase Realtime Database with security rules that ensure only authorized participants can access specific bills.",
    "Data is encrypted in transit using HTTPS.",
    "We do not store payment information or process payments.",
  ],
  s4Title: "4 — Data Sharing",
  s4Intro:
    "We do not sell, trade, or rent your personal information to third parties. Your data may be shared only:",
  s4List: [
    "With other participants you invite to split a bill (they can see bill items and your chosen display name)",
    "With service providers (Firebase/Google) for hosting and infrastructure",
    "If required by law or to protect our rights",
  ],
  s5Title: "5 — Data Retention",
  s5Body:
    "Bill data is retained as long as you keep it in the app. You can delete your bills at any time. Completed sessions are stored locally on your device and can be cleared through app settings.",
  s6Title: "6 — Your Rights",
  s6Intro: "You have the right to:",
  s6List: [
    "Access your data stored in the app",
    "Delete your bills and session history",
    "Request information about data we hold",
  ],
  s7Title: "7 — Children's Privacy",
  s7Body:
    "CheqSplit is not intended for children under 13 years of age. We do not knowingly collect personal information from children.",
  s8Title: "8 — Third-Party Services",
  s8Intro: "Our app uses the following third-party services:",
  s8Bullets: [
    {
      label: "Google Firebase",
      text: `Authentication, Realtime Database, and related infrastructure. Link: ${link("https://firebase.google.com/support/privacy", "https://firebase.google.com/support/privacy")}`,
    },
    {
      label: "Google AI (Gemini)",
      text: `Optional cloud processing for receipt understanding when smart scanning is available. Link: ${link("https://ai.google.dev/gemini-api/terms", "https://ai.google.dev/gemini-api/terms")} and Google’s privacy policies apply.`,
    },
    {
      label: "RevenueCat",
      text: `Subscription status and in-app purchase management. Link: ${link("https://www.revenuecat.com/privacy", "https://www.revenuecat.com/privacy")}`,
    },
    {
      label: "Apple",
      text: "App distribution and in-app purchases through the App Store.",
    },
    {
      label: "On-device OCR",
      text: "Text recognition from receipt images may run on your device using Apple’s on-device APIs (and on Android, device/vendor OCR where applicable).",
    },
  ],
  s9Title: "9 — Changes to This Policy",
  s9Body:
    'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy in the app and updating the "Last updated" date.',
  s10Title: "10 — Contact Us",
  s10Intro: "If you have any questions about this Privacy Policy, please contact us:",
  emailLabel: "Email:",
  developerLabel: "Developer:",
  developerName: "Lunthemes",
  relatedNavLabel: "See also:",
  relatedTerms: "Terms of Service",
  relatedDeleteAccount: "Delete your account",
  relatedDeleteData: "Delete your data",
};
