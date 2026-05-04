import type { Metadata } from "next";
import ProjectsPage from "@/components/projects/ProjectsPage";

export const metadata: Metadata = {
  title: "Projects | Nawah Real Estate Development — Luxury Developments in Riyadh",
  description:
    "Explore Nawah's portfolio of luxury real estate developments in Riyadh — luxury compounds, private villas, premium apartments, commercial towers, business centers, and retail destinations.",
};

export default function Projects() {
  return <ProjectsPage />;
}
