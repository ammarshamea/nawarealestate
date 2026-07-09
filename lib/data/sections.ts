export const sectionAnchors = {
  home: "home",
  about: "about",
  philosophy: "philosophy",
  story: "story",
  services: "services",
  projectTypes: "project-types",
  vision: "vision",
  values: "values",
  investment: "investment",
  partnerships: "partnerships",
  sustainability: "sustainability",
  contact: "contact",
} as const;

export type SectionAnchor = (typeof sectionAnchors)[keyof typeof sectionAnchors];

export const navLinks = [
  { anchor: sectionAnchors.home, key: "home" as const },
  { anchor: sectionAnchors.about, key: "about" as const },
  { anchor: sectionAnchors.philosophy, key: "philosophy" as const },
  { anchor: sectionAnchors.services, key: "services" as const },
  { anchor: sectionAnchors.projectTypes, key: "projects" as const },
  { anchor: sectionAnchors.investment, key: "investment" as const },
  { anchor: sectionAnchors.contact, key: "contact" as const },
] as const;
