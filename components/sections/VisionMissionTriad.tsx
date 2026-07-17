"use client";

import BrandImage from "@/components/ui/BrandImage";
import Eyebrow from "@/components/ui/Eyebrow";
import { StaggerReveal, StaggerItem } from "@/components/ui/ScrollReveal";
import { brandImages } from "@/lib/data/images";
import { sectionAnchors } from "@/lib/data/sections";
import { useSite } from "@/lib/context";
import { t, tx } from "@/lib/i18n";

const pillars = [
  {
    id: sectionAnchors.vision,
    label: t.vision.label,
    headline: t.vision.headline,
    body: t.about.visionText,
    image: brandImages.vision,
  },
  {
    id: sectionAnchors.mission,
    label: t.mission.label,
    headline: t.mission.headline,
    body: t.about.missionText,
    image: brandImages.mission,
  },
  {
    id: sectionAnchors.vision2030,
    label: t.vision2030.label,
    headline: t.vision2030.headline,
    body: t.vision.sub,
    image: brandImages.vision2030,
  },
] as const;

export default function VisionMissionTriad() {
  const { lang } = useSite();

  return (
    <section
      id={sectionAnchors.vision}
      className="section-padding surface-ivory relative overflow-hidden"
      aria-label={`${tx(t.vision.label, lang)}, ${tx(t.mission.label, lang)}, ${tx(t.vision2030.label, lang)}`}
    >
      <div className="container-luxury">
        <StaggerReveal className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-5 lg:gap-6">
          {pillars.map((pillar) => (
            <StaggerItem key={pillar.id} image>
              <article id={pillar.id} className="vision-triad-card h-full">
                <div className="vision-triad-media brand-media-frame aspect-[4/3]">
                  <BrandImage
                    src={pillar.image}
                    alt={tx(pillar.label, lang)}
                    className="brand-media"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
                </div>
                <div className="vision-triad-content mt-5">
                  <Eyebrow label={pillar.label} />
                  <h3 className="section-title section-title--preline mt-4 text-[clamp(1.35rem,2.2vw,1.75rem)]">
                    {tx(pillar.headline, lang)}
                  </h3>
                  <p className="section-body mt-3">{tx(pillar.body, lang)}</p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
