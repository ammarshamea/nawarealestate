"use client";

import Eyebrow from "@/components/ui/Eyebrow";
import { StaggerReveal, StaggerItem } from "@/components/ui/ScrollReveal";
import { sectionAnchors } from "@/lib/data/sections";
import { useSite } from "@/lib/context";
import { t, tx } from "@/lib/i18n";

export default function TargetMarket() {
  const { lang } = useSite();

  return (
    <section id={sectionAnchors.targetMarket} className="section-padding surface-ivory">
      <div className="container-luxury">
        <StaggerReveal>
          <div className="section-header">
            <StaggerItem>
              <Eyebrow label={t.targetMarket.label} />
            </StaggerItem>
            <StaggerItem>
              <h2 className="section-title section-title--preline">{tx(t.targetMarket.headline, lang)}</h2>
            </StaggerItem>
            <StaggerItem>
              <p className="section-body mt-4 max-w-2xl">{tx(t.targetMarket.intro, lang)}</p>
            </StaggerItem>
            <StaggerItem>
              <ul className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                {t.targetMarket.items.map((item, i) => (
                  <li key={item.en} className="feature-card">
                    <span className="section-index">{String(i + 1).padStart(2, "0")}</span>
                    <p className="section-card-title">{tx(item, lang)}</p>
                  </li>
                ))}
              </ul>
            </StaggerItem>
          </div>
        </StaggerReveal>
      </div>
    </section>
  );
}
