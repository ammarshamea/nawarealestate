import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import Introduction from "@/components/home/Introduction";
import Services from "@/components/home/Services";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import InvestmentValue from "@/components/home/InvestmentValue";
import Statistics from "@/components/home/Statistics";
import Vision2030 from "@/components/home/Vision2030";
import HomeCTA from "@/components/home/HomeCTA";

export const metadata: Metadata = {
  title: "Nawah Real Estate Development | نواة التطوير العقاري — Riyadh",
  description:
    "Nawah Real Estate Development — Saudi Arabia's premier luxury real estate developer in Riyadh. Crafting Luxury… Building Lifestyles. Explore landmark residences, compounds, and commercial developments.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Introduction />
      <Services />
      <FeaturedProjects />
      <InvestmentValue />
      <Statistics />
      <Vision2030 />
      <HomeCTA />
    </>
  );
}
