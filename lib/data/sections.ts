export const sectionAnchors = {
  home: "home",
  about: "about",
  philosophy: "philosophy",
  story: "story",
  services: "services",
  projectTypes: "project-types",
  targetMarket: "target-market",
  vision: "vision",
  mission: "mission",
  vision2030: "vision-2030",
  values: "values",
  investment: "investment",
  advantage: "advantage",
  partnerships: "partnerships",
  sustainability: "sustainability",
  contact: "contact",
} as const;

export type SectionAnchor = (typeof sectionAnchors)[keyof typeof sectionAnchors];

export const footerLinks = [
  { anchor: sectionAnchors.story, key: "story" as const },
  { anchor: sectionAnchors.targetMarket, key: "targetMarket" as const },
  { anchor: sectionAnchors.mission, key: "mission" as const },
  { anchor: sectionAnchors.vision2030, key: "vision2030" as const },
  { anchor: sectionAnchors.values, key: "values" as const },
  { anchor: sectionAnchors.partnerships, key: "partnerships" as const },
  { anchor: sectionAnchors.sustainability, key: "sustainability" as const },
] as const;

export const navLinks = [
  { anchor: sectionAnchors.home, key: "home" as const },
  { anchor: sectionAnchors.about, key: "about" as const },
  { anchor: sectionAnchors.philosophy, key: "philosophy" as const },
  { anchor: sectionAnchors.services, key: "services" as const },
  { anchor: sectionAnchors.projectTypes, key: "projects" as const },
  { anchor: sectionAnchors.investment, key: "investment" as const },
  { anchor: sectionAnchors.contact, key: "contact" as const },
] as const;
