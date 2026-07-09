import type { Metadata } from "next";
import HomeExperience from "@/components/HomeExperience";

export const metadata: Metadata = {
  title: "نواة التطوير العقاري | Nawah Real Estate Development",
  description:
    "نواة التطوير العقاري | Nawah Real Estate Development — Crafting Luxury… Building Lifestyles | نصنع الفخامة… ونبني أسلوب حياة",
};

export default function HomePage() {
  return <HomeExperience />;
}
