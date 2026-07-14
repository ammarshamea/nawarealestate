"use client";

import Eyebrow from "@/components/ui/Eyebrow";
import { StaggerReveal, StaggerItem } from "@/components/ui/ScrollReveal";
import { sustainabilityThemes } from "@/lib/data/company";
import { sectionAnchors } from "@/lib/data/sections";
import { useSite } from "@/lib/context";
import { t, tx } from "@/lib/i18n";

export default function Sustainability() {
  const { lang } = useSite();

  return (
    <section id={sectionAnchors.sustainability} className="section-padding surface-ivory relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        aria-hidden
        style={{
          background: "radial-gradient(circle at 30% 20%, #ebbf5b, transparent 50%), radial-gradient(circle at 70% 80%, #b58516, transparent 45%)",
        }}
      />
      <div className="container-luxury relative grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
        <StaggerReveal>
          <div className="section-header">
            <StaggerItem>
              <Eyebrow label={t.sustainabilitySection.label} />
            </StaggerItem>
            <StaggerItem>
              <h2 className="section-title section-title--preline">
                {tx(t.sustainabilitySection.headline, lang)}
              </h2>
            </StaggerItem>
            <StaggerItem>
              <p className="section-body">{tx(t.sustainabilitySection.body, lang)}</p>
            </StaggerItem>
          </div>
        </StaggerReveal>
        <StaggerReveal stagger={0.08}>
          {sustainabilityThemes.map((theme, i) => (
            <StaggerItem key={theme.en}>
              <div className="feature-card">
                <span className="section-index">{String(i + 1).padStart(2, "0")}</span>
                <p className="section-card-title">{tx(theme, lang)}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
