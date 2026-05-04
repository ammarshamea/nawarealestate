import type { Metadata } from "next";
import AboutPage from "@/components/about/AboutPage";

export const metadata: Metadata = {
  title: "About Nawah | Our Story, Vision & Mission — نواة التطوير العقاري",
  description:
    "Learn about Nawah Real Estate Development — our founding story, vision, mission, core values, development philosophy, and commitment to Saudi Vision 2030.",
};

export default function About() {
  return <AboutPage />;
}
