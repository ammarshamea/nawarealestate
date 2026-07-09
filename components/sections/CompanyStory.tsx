"use client";

import BrandImage from "@/components/ui/BrandImage";
import Eyebrow from "@/components/ui/Eyebrow";
import { StaggerReveal, StaggerItem } from "@/components/ui/ScrollReveal";
import { companyStorySteps } from "@/lib/data/company";
import { brandImages } from "@/lib/data/images";
import { sectionAnchors } from "@/lib/data/sections";
import { useSite } from "@/lib/context";
import { t, tx } from "@/lib/i18n";

export default function CompanyStory() {
  const { lang } = useSite();

  return (
    <section id={sectionAnchors.story} className="section-padding surface-dark-brand relative overflow-hidden">
      <div className="container-luxury grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <StaggerReveal className="order-2 lg:order-1">
          <StaggerItem image>
            <div className="brand-media-frame aspect-[4/3] max-h-[min(480px,55vh)]">
              <BrandImage
                src={brandImages.developmentOffice}
                alt={tx(t.story.label, lang)}
                className="brand-media"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </StaggerItem>
        </StaggerReveal>
        <StaggerReveal className="order-1 lg:order-2">
          <StaggerItem>
            <Eyebrow label={t.story.label} />
          </StaggerItem>
          <StaggerItem>
            <h2 className="mt-6 text-3xl md:text-4xl font-bold leading-tight whitespace-pre-line">
              {tx(t.story.headline, lang)}
            </h2>
          </StaggerItem>
          <StaggerItem>
            <p className="mt-6 leading-relaxed" style={{ color: "var(--c-text-2)" }}>
              {tx(t.story.body, lang)}
            </p>
          </StaggerItem>
          <StaggerItem>
            <ol className="mt-10 space-y-4 border-s-2 ps-6" style={{ borderColor: "var(--color-brand-gold)" }}>
              {companyStorySteps.map((step, i) => (
                <li key={step.en} className="relative">
                  <span className="text-xs font-bold" style={{ color: "var(--color-brand-gold-light)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-1 text-sm md:text-base">{tx(step, lang)}</p>
                </li>
              ))}
            </ol>
          </StaggerItem>
        </StaggerReveal>
      </div>
    </section>
  );
}
