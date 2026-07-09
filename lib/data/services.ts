import { brandImages } from "./images";

export const services = [
  {
    id: "residential",
    title: { en: "Luxury Residential Development", ar: "تطوير المشاريع السكنية الفاخرة" },
    desc: {
      en: "Premium residential destinations that combine architectural excellence with strategic Riyadh locations.",
      ar: "وجهات سكنية راقية تجمع بين التميز المعماري والمواقع الاستراتيجية في الرياض.",
    },
    image: brandImages.residentialStreet,
  },
  {
    id: "commercial",
    title: { en: "Commercial Development", ar: "تطوير المشاريع التجارية" },
    desc: {
      en: "Modern commercial environments designed for long-term relevance and market demand.",
      ar: "بيئات تجارية عصرية مصممة لتلبية الطلب السوقي والاستمرارية.",
    },
    image: brandImages.urbanPlaza,
  },
  {
    id: "mixed-use",
    title: { en: "Mixed-Use Development", ar: "تطوير المشاريع متعددة الاستخدام" },
    desc: {
      en: "Integrated destinations where living, working, and lifestyle converge in one vision.",
      ar: "وجهات متكاملة تجمع السكن والعمل وأسلوب الحياة في رؤية واحدة.",
    },
    image: brandImages.urbanPlaza,
  },
  {
    id: "management",
    title: { en: "Project Management", ar: "إدارة المشاريع" },
    desc: {
      en: "End-to-end oversight ensuring quality execution from concept through delivery.",
      ar: "إشراف شامل يضمن جودة التنفيذ من الفكرة حتى التسليم.",
    },
    image: brandImages.developmentOffice,
  },
  {
    id: "joint-venture",
    title: { en: "Joint Venture Development", ar: "التطوير المشترك مع المستثمرين" },
    desc: {
      en: "Strategic partnerships that align capital, land, and development expertise.",
      ar: "شراكات استراتيجية تجمع رأس المال والأرض والخبرة التطويرية.",
    },
    image: brandImages.partnershipsMeeting,
  },
  {
    id: "feasibility",
    title: { en: "Feasibility Studies", ar: "دراسات الجدوى العقارية" },
    desc: {
      en: "Market-informed analysis that grounds every development decision in evidence.",
      ar: "تحليل مبني على فهم السوق يؤسس كل قرار تطويري على أسس واضحة.",
    },
    image: brandImages.architecturalBlueprint,
  },
] as const;
