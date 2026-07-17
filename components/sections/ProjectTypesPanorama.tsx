"use client";

import BrandImage from "@/components/ui/BrandImage";
import { StaggerReveal, StaggerItem } from "@/components/ui/ScrollReveal";
import { projectTypes } from "@/lib/data/projectTypes";
import { sectionAnchors } from "@/lib/data/sections";
import { useSite } from "@/lib/context";
import { t, tx } from "@/lib/i18n";

export default function ProjectTypesPanorama() {
  const { lang, isAr } = useSite();

  return (
    <section
      id={sectionAnchors.projectTypes}
      className="project-types-section section-padding surface-dark-brand"
      aria-labelledby="project-types-heading"
    >
      <div className="container-luxury">
        <StaggerReveal>
          <div className="section-header">
            <StaggerItem>
              <p id="project-types-heading" className="eyebrow project-types-section-eyebrow">
                {tx(t.projectTypes.label, lang)}
              </p>
            </StaggerItem>
          </div>
        </StaggerReveal>

        <StaggerReveal className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {projectTypes.map((pt) => (
            <StaggerItem key={pt.id} image>
              <article dir={isAr ? "rtl" : "ltr"} className="project-types-card">
                <div className="project-types-card-media">
                  <BrandImage
                    src={pt.image}
                    alt={tx(pt.title, lang)}
                    className="project-types-card-image"
                  />
                  <div className="project-types-card-gradient" />
                  <div className="project-types-card-overlay">
                    <h3 className="project-types-card-title">{tx(pt.title, lang)}</h3>
                    <p className="project-types-card-desc">{tx(pt.desc, lang)}</p>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
