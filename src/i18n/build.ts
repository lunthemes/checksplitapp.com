import { howStepScreens } from "../data/screens";
import { howStepThemes, featureCardVisuals, useCaseVisuals } from "../data/landing";
import type { Dictionary } from "./types";

type HowStep = {
  step: string;
  label: string;
  body: string;
  image: { src: string; alt: string };
  items: string[];
  theme: (typeof howStepThemes)[number];
};

export function buildHowSteps(t: Dictionary): HowStep[] {
  return t.how.steps.map((s, i) => ({
    step: String(i + 1),
    label: s.label,
    body: s.body,
    image: { src: howStepScreens[i]!, alt: s.imageAlt },
    items: [...s.bullets],
    theme: howStepThemes[i]!,
  }));
}

export function buildFeatureItems(
  t: Dictionary,
): { title: string; desc: string; icon: string; iconBg: string }[] {
  return t.features.items.map((item, i) => ({
    ...item,
    ...featureCardVisuals[i]!,
  }));
}

export function buildUseCaseItems(
  t: Dictionary,
): { title: string; desc: string; icon: string; ring: string }[] {
  return t.useCases.items.map((item, i) => ({
    ...item,
    ...useCaseVisuals[i]!,
  }));
}
