import { brandImages } from "./images";

export const projectTypes = [
  {
    id: "compounds",
    title: { en: "Luxury Compounds", ar: "مجمعات سكنية فاخرة" },
    desc: {
      en: "Gated communities designed as complete lifestyle destinations.",
      ar: "مجتمعات مسوّرة مصممة كوجهات متكاملة لأسلوب الحياة.",
    },
    image: brandImages.residentialStreet,
  },
  {
    id: "villas",
    title: { en: "Private Villas", ar: "فلل مستقلة" },
    desc: {
      en: "Independent luxury residences with architectural distinction.",
      ar: "مساكن فاخرة مستقلة بتميز معماري واضح.",
    },
    image: brandImages.resortEntrance,
  },
  {
    id: "apartments",
    title: { en: "Premium Apartments", ar: "شقق راقية" },
    desc: {
      en: "Refined urban living with premium finishes and amenities.",
      ar: "حياة حضرية راقية بتشطيبات ومرافق متميزة.",
    },
    image: brandImages.residentialWalkway,
  },
  {
    id: "towers",
    title: { en: "Commercial Towers", ar: "أبراج تجارية" },
    desc: {
      en: "Landmark commercial architecture on Riyadh's evolving skyline.",
      ar: "أبراج تجارية بارزة على أفق الرياض المتطور.",
    },
    image: brandImages.skylineSunset,
  },
  {
    id: "business",
    title: { en: "Business Centers", ar: "مراكز أعمال" },
    desc: {
      en: "Professional environments built for corporate excellence.",
      ar: "بيئات مهنية مصممة للتميز المؤسسي.",
    },
    image: brandImages.developmentOffice,
  },
  {
    id: "retail",
    title: { en: "Retail Destinations", ar: "وجهات تجارية حديثة" },
    desc: {
      en: "Contemporary retail and lifestyle destinations for modern Riyadh.",
      ar: "وجهات تجارية وترفيهية عصرية لمدينة الرياض الحديثة.",
    },
    image: brandImages.urbanPlaza,
  },
] as const;
