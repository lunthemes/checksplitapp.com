import type { FaqEntry } from "../i18n/types";

/** Site origin with trailing slash (canonical root `https://example.com/`). */
export const siteUrl = "https://cheqsplitapp.com/" as const;

export function getSoftwareApplicationJsonLd(description: string, pageUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "CheqSplit",
    url: pageUrl,
    operatingSystem: "iOS, Android",
    applicationCategory: "FinanceApplication",
    description,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  } as const;
}

export function getFaqPageJsonLd(faqItems: readonly FaqEntry[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question" as const,
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: item.a,
      },
    })),
  };
}

export function getHowToJsonLd(opts: {
  name: string;
  description: string;
  url: string;
  steps: readonly { title: string; desc: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: opts.name,
    description: opts.description,
    url: opts.url,
    step: opts.steps.map((s, i) => ({
      "@type": "HowToStep" as const,
      position: i + 1,
      name: s.title,
      text: s.desc,
    })),
  };
}
