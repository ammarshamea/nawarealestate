import { brandImages } from "./images";

export const philosophyPillars = [
  {
    id: "location",
    number: "01",
    title: { en: "Location", ar: "الموقع" },
    desc: {
      en: "Strategic positioning in Riyadh's most promising corridors — where growth meets demand.",
      ar: "مواقع استراتيجية في أبرز محاور الرياض — حيث يلتقي النمو بالطلب.",
    },
    image: brandImages.skylineSunset,
    surface: "ivory" as const,
  },
  {
    id: "design",
    number: "02",
    title: { en: "Design", ar: "التصميم" },
    desc: {
      en: "Architecture that transforms vision into experience — modern, refined, and distinctly Saudi.",
      ar: "عمارة تحوّل الرؤية إلى تجربة — عصرية، راقية، وذات هوية سعودية.",
    },
    image: brandImages.architecturalBlueprint,
    surface: "transition" as const,
  },
  {
    id: "value",
    number: "03",
    title: { en: "Value", ar: "القيمة" },
    desc: {
      en: "Long-term investment relevance built on quality, location, and market understanding.",
      ar: "قيمة استثمارية طويلة المدى مبنية على الجودة والموقع وفهم السوق.",
    },
    image: brandImages.residentialWalkway,
    surface: "dark" as const,
  },
] as const;
