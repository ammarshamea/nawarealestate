"use client";

import Eyebrow from "@/components/ui/Eyebrow";
import { StaggerReveal, StaggerItem } from "@/components/ui/ScrollReveal";
import { competitiveAdvantages } from "@/lib/data/company";
import { sectionAnchors } from "@/lib/data/sections";
import { useSite } from "@/lib/context";
import { t, tx } from "@/lib/i18n";

export default function CompetitiveAdvantage() {
  const { lang } = useSite();

  return (
    <section id={sectionAnchors.advantage} className="section-padding surface-dark-brand relative overflow-hidden">
      <div className="container-luxury">
        <StaggerReveal>
          <div className="section-header">
            <StaggerItem>
              <Eyebrow label={t.competitiveAdvantage.label} />
            </StaggerItem>
            <StaggerItem>
              <h2 className="section-title section-title--preline">
                {tx(t.competitiveAdvantage.headline, lang)}
              </h2>
            </StaggerItem>
            <StaggerItem>
              <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {competitiveAdvantages.map((item, i) => (
                  <li
                    key={item.en}
                    className={`feature-card${i === 4 ? " !bg-[rgba(235,191,91,0.08)]" : ""}`}
                  >
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
