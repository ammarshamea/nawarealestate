"use client";

import BrandImage from "@/components/ui/BrandImage";
import Eyebrow from "@/components/ui/Eyebrow";
import { StaggerReveal, StaggerItem } from "@/components/ui/ScrollReveal";
import { brandImages } from "@/lib/data/images";
import { sectionAnchors } from "@/lib/data/sections";
import { useSite } from "@/lib/context";
import { t, tx } from "@/lib/i18n";

export default function Vision2030Section() {
  const { lang } = useSite();

  return (
    <section id={sectionAnchors.vision2030} className="section-padding surface-ivory relative overflow-hidden">
      <div className="container-luxury grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <StaggerReveal>
          <div className="section-header">
            <StaggerItem>
              <Eyebrow label={t.vision2030.label} />
            </StaggerItem>
            <StaggerItem>
              <h2 className="section-title section-title--preline">{tx(t.vision2030.headline, lang)}</h2>
            </StaggerItem>
            <StaggerItem>
              <p className="section-body mt-4">{tx(t.vision.sub, lang)}</p>
            </StaggerItem>
          </div>
        </StaggerReveal>
        <StaggerReveal>
          <StaggerItem image>
            <div className="brand-media-frame aspect-[16/10] max-h-[min(420px,50vh)]">
              <BrandImage
                src={brandImages.architecturalBlueprint}
                alt={tx(t.vision2030.label, lang)}
                className="brand-media"
              />
            </div>
          </StaggerItem>
        </StaggerReveal>
      </div>
    </section>
  );
}
