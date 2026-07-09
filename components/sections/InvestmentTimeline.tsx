"use client";

import { useState } from "react";
import BrandImage from "@/components/ui/BrandImage";
import Eyebrow from "@/components/ui/Eyebrow";
import NawahLine from "@/components/motion/NawahLine";
import { StaggerReveal, StaggerItem } from "@/components/ui/ScrollReveal";
import { investmentTimeline } from "@/lib/data/company";
import { brandImages } from "@/lib/data/images";
import { sectionAnchors } from "@/lib/data/sections";
import { useSite } from "@/lib/context";
import { t, tx } from "@/lib/i18n";

export default function InvestmentTimeline() {
  const { lang } = useSite();
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id={sectionAnchors.investment} className="section-padding surface-ivory">
      <div className="container-luxury grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <StaggerReveal>
          <StaggerItem>
            <Eyebrow label={t.investmentValue.label} />
          </StaggerItem>
          <StaggerItem>
            <h2 className="mt-6 text-3xl md:text-4xl font-bold leading-tight whitespace-pre-line">
              {tx(t.investmentValue.headline, lang)}
            </h2>
          </StaggerItem>
          <StaggerItem>
            <ul className="mt-8 flex flex-wrap gap-3">
              {t.investmentValue.themes.map((theme) => (
                <li
                  key={theme.en}
                  className="text-xs font-bold uppercase tracking-wider px-4 py-2 border"
                  style={{ borderColor: "var(--color-brand-gold)", color: "var(--color-brand-gold)" }}
                >
                  {tx(theme, lang)}
                </li>
              ))}
            </ul>
          </StaggerItem>
          <StaggerItem>
            <div className="mt-10 relative h-24">
              <NawahLine variant="timeline" className="absolute inset-0" />
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="mt-4 flex flex-wrap gap-2">
              {investmentTimeline.map((step, i) => (
                <button
                  key={step.en}
                  type="button"
                  className="text-xs md:text-sm px-3 py-2 transition-colors"
                  style={{
                    color: activeStep === i ? "var(--color-brand-gold)" : "var(--c-text-2)",
                    fontWeight: activeStep === i ? 700 : 400,
                  }}
                  onClick={() => setActiveStep(i)}
                >
                  {tx(step, lang)}
                </button>
              ))}
            </div>
          </StaggerItem>
        </StaggerReveal>
        <StaggerReveal>
          <StaggerItem image>
            <div className="brand-media-frame aspect-[4/3] max-h-[min(480px,55vh)]">
              <BrandImage
                src={brandImages.investmentTerrace}
                alt={tx(t.investmentValue.headline, lang)}
                className="brand-media"
              />
            </div>
          </StaggerItem>
        </StaggerReveal>
      </div>
    </section>
  );
}
