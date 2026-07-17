"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import CinematicIntro from "@/components/motion/CinematicIntro";
import HeroScrollNarrative from "@/components/sections/HeroScrollNarrative";
import AboutEditorial from "@/components/sections/AboutEditorial";
import CompanyStory from "@/components/sections/CompanyStory";
import ServicesExplorer from "@/components/sections/ServicesExplorer";
import ProjectTypesPanorama from "@/components/sections/ProjectTypesPanorama";
import VisionMissionTriad from "@/components/sections/VisionMissionTriad";
import ValuesManifesto from "@/components/sections/ValuesManifesto";
import CompetitiveAdvantage from "@/components/sections/CompetitiveAdvantage";
import Partnerships from "@/components/sections/Partnerships";
import ContactExperience from "@/components/sections/ContactExperience";
import { StaggerReveal, StaggerItem } from "@/components/ui/ScrollReveal";
import { useSite } from "@/lib/context";
import { t, tx } from "@/lib/i18n";

const NawahLine = dynamic(() => import("@/components/motion/NawahLine"), { ssr: false });

export default function HomeExperience() {
  const { lang } = useSite();
  const [introDone, setIntroDone] = useState(false);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;
    const scrollToHash = () => document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
    const id = window.setTimeout(scrollToHash, introDone ? 100 : 400);
    return () => window.clearTimeout(id);
  }, [introDone]);

  return (
    <>
      <a href="#about" className="skip-link">
        {tx(t.common.learnMore, lang)}
      </a>
      <CinematicIntro onComplete={() => setIntroDone(true)} />
      <HeroScrollNarrative />
      <AboutEditorial />
      <CompanyStory />
      <ServicesExplorer />
      <ProjectTypesPanorama />
      <VisionMissionTriad />
      <ValuesManifesto />
      <CompetitiveAdvantage />
      <Partnerships />
      <ContactExperience />
      <section id="tagline" className="surface-dark-brand py-16 relative overflow-hidden">
        <div className="absolute inset-0 h-32 opacity-40">
          <NawahLine variant="coreReturn" />
        </div>
        <div className="container-luxury text-center relative">
          <StaggerReveal>
            <StaggerItem>
              <p className="text-gold-gradient section-card-title text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                {tx(t.brand.tagline, lang)}
              </p>
            </StaggerItem>
          </StaggerReveal>
        </div>
      </section>
    </>
  );
}
