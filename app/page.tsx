import type { Metadata } from "next";
import HomeExperience from "@/components/HomeExperience";

export const metadata: Metadata = {
  title: "نواة للتطوير العقاري والمقاولات | Nawa Real Estate Development & Contracting",
  description:
    "نواة للتطوير العقاري والمقاولات | Nawa Real Estate Development & Contracting. Crafting Luxury… Building Lifestyles | نصنع الفخامة… ونبني أسلوب حياة",
};

export default function HomePage() {
  return <HomeExperience />;
}
