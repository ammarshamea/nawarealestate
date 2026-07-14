"use client";

import BrandImage from "@/components/ui/BrandImage";
import Eyebrow from "@/components/ui/Eyebrow";
import { StaggerReveal, StaggerItem } from "@/components/ui/ScrollReveal";
import { brandImages } from "@/lib/data/images";
import { sectionAnchors } from "@/lib/data/sections";
import { useSite } from "@/lib/context";
import { t, tx } from "@/lib/i18n";

export default function MissionSection() {
  const { lang } = useSite();

  return (
    <section id={sectionAnchors.mission} className="section-padding surface-dark-brand relative overflow-hidden">
      <div className="container-luxury grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <StaggerReveal className="order-2 lg:order-1">
          <StaggerItem image>
            <div className="brand-media-frame aspect-[4/3] max-h-[min(480px,55vh)]">
              <BrandImage
                src={brandImages.developmentOffice}
                alt={tx(t.mission.label, lang)}
                className="brand-media"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </StaggerItem>
        </StaggerReveal>
        <StaggerReveal className="order-1 lg:order-2">
          <div className="section-header">
            <StaggerItem>
              <Eyebrow label={t.mission.label} />
            </StaggerItem>
            <StaggerItem>
              <h2 className="section-title section-title--preline">{tx(t.mission.headline, lang)}</h2>
            </StaggerItem>
            <StaggerItem>
              <p className="section-body mt-4">{tx(t.about.missionText, lang)}</p>
            </StaggerItem>
          </div>
        </StaggerReveal>
      </div>
    </section>
  );
}
