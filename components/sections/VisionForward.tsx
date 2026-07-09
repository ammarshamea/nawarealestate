"use client";

import BrandImage from "@/components/ui/BrandImage";
import Eyebrow from "@/components/ui/Eyebrow";
import { StaggerReveal, StaggerItem } from "@/components/ui/ScrollReveal";
import { brandImages } from "@/lib/data/images";
import { sectionAnchors } from "@/lib/data/sections";
import { useSite } from "@/lib/context";
import { t, tx } from "@/lib/i18n";

export default function VisionForward() {
  const { lang } = useSite();

  return (
    <section id={sectionAnchors.vision} className="section-padding surface-ivory relative overflow-hidden">
      <div className="container-luxury relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <StaggerReveal>
          <StaggerItem>
            <Eyebrow label={t.vision.label} />
          </StaggerItem>
          <StaggerItem>
            <h2 className="mt-6 text-3xl md:text-4xl font-bold leading-tight whitespace-pre-line">
              {tx(t.vision.headline, lang)}
            </h2>
          </StaggerItem>
          <StaggerItem>
            <p className="mt-6 leading-relaxed" style={{ color: "var(--c-text-2)" }}>
              {tx(t.vision.body, lang)}
            </p>
          </StaggerItem>
        </StaggerReveal>
        <StaggerReveal>
          <StaggerItem image>
            <div className="brand-media-frame aspect-video max-h-[min(420px,50vh)]">
              <BrandImage
                src={brandImages.urbanPlaza}
                alt={tx(t.vision.headline, lang)}
                className="brand-media"
              />
            </div>
          </StaggerItem>
        </StaggerReveal>
      </div>
    </section>
  );
}
