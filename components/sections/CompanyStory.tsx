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
    <section id={sectionAnchors.story} className="section-padding surface-dark-brand relative">
      <StaggerReveal className="container-luxury grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <StaggerItem image className="order-2 lg:order-1 w-full">
          <div className="brand-media-frame brand-media-frame--story aspect-[4/3] w-full min-h-[min(280px,45vh)] max-h-[min(480px,55vh)]">
            <BrandImage
              src={brandImages.developmentOffice}
              alt={tx(t.story.label, lang)}
              className="brand-media"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        </StaggerItem>
        <StaggerItem className="order-1 lg:order-2">
          <div className="section-header">
            <Eyebrow label={t.story.label} />
            <h2 className="section-title section-title--preline mt-4">{tx(t.story.headline, lang)}</h2>
            <p className="section-body mt-4">{tx(t.story.body, lang)}</p>
            <ol className="mt-8 space-y-4 border-s-2 ps-6" style={{ borderColor: "var(--color-brand-gold)" }}>
              {companyStorySteps.map((step, i) => (
                <li key={step.en}>
                  <span className="section-index">{String(i + 1).padStart(2, "0")}</span>
                  <p className="section-card-title">{tx(step, lang)}</p>
                </li>
              ))}
            </ol>
          </div>
        </StaggerItem>
      </StaggerReveal>
    </section>
  );
}
