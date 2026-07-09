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
      <div className="container-luxury relative grid grid-cols-1 lg:grid-cols-2 gap-12">
        <StaggerReveal>
          <StaggerItem>
            <Eyebrow label={t.sustainabilitySection.label} />
          </StaggerItem>
          <StaggerItem>
            <h2 className="mt-6 text-3xl md:text-4xl font-bold leading-tight whitespace-pre-line">
              {tx(t.sustainabilitySection.headline, lang)}
            </h2>
          </StaggerItem>
          <StaggerItem>
            <p className="mt-6 leading-relaxed" style={{ color: "var(--c-text-2)" }}>
              {tx(t.sustainabilitySection.body, lang)}
            </p>
          </StaggerItem>
        </StaggerReveal>
        <StaggerReveal stagger={0.08}>
          {sustainabilityThemes.map((theme, i) => (
            <StaggerItem key={theme.en}>
              <div
                className="p-6 border min-h-[140px] flex flex-col justify-end"
                style={{
                  borderColor: "rgba(181,133,22,0.25)",
                  background: i % 2 === 0 ? "rgba(181,133,22,0.06)" : "transparent",
                }}
              >
                <span className="text-xs font-bold mb-3" style={{ color: "var(--color-brand-gold)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-bold">{tx(theme, lang)}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
