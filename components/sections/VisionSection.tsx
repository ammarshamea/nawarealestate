"use client";

import BrandImage from "@/components/ui/BrandImage";
import Eyebrow from "@/components/ui/Eyebrow";
import { StaggerReveal, StaggerItem } from "@/components/ui/ScrollReveal";
import { brandImages } from "@/lib/data/images";
import { sectionAnchors } from "@/lib/data/sections";
import { useSite } from "@/lib/context";
import { t, tx } from "@/lib/i18n";

export default function VisionSection() {
  const { lang } = useSite();

  return (
    <section id={sectionAnchors.vision} className="section-padding surface-ivory relative overflow-hidden">
      <div className="container-luxury grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <StaggerReveal>
          <div className="section-header">
            <StaggerItem>
              <Eyebrow label={t.vision.label} />
            </StaggerItem>
            <StaggerItem>
              <h2 className="section-title section-title--preline">{tx(t.vision.headline, lang)}</h2>
            </StaggerItem>
            <StaggerItem>
              <p className="section-body mt-4">{tx(t.about.visionText, lang)}</p>
            </StaggerItem>
          </div>
        </StaggerReveal>
        <StaggerReveal>
          <StaggerItem image>
            <div className="brand-media-frame aspect-video max-h-[min(420px,50vh)] lg:sticky lg:top-24">
              <BrandImage
                src={brandImages.urbanPlaza}
                alt={tx(t.vision.label, lang)}
                className="brand-media"
              />
            </div>
          </StaggerItem>
        </StaggerReveal>
      </div>
    </section>
  );
}
