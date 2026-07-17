"use client";

import BrandImage from "@/components/ui/BrandImage";
import Eyebrow from "@/components/ui/Eyebrow";
import { StaggerReveal, StaggerItem } from "@/components/ui/ScrollReveal";
import { brandImages } from "@/lib/data/images";
import { sectionAnchors } from "@/lib/data/sections";
import { useSite } from "@/lib/context";
import { t, tx } from "@/lib/i18n";

export default function AboutEditorial() {
  const { lang } = useSite();

  return (
    <section
      id={sectionAnchors.about}
      className="about-editorial surface-ivory relative min-h-[min(85vh,820px)] overflow-hidden"
      aria-label={tx(t.intro.label, lang)}
    >
      <div className="about-editorial-bg" aria-hidden="true">
        <BrandImage
          src={brandImages.aboutUs}
          alt=""
          className="about-editorial-bg-image"
        />
        <div className="about-editorial-bg-overlay" />
      </div>

      <div className="relative z-10 flex min-h-[min(85vh,820px)] items-center">
        <div className="container-luxury section-padding w-full">
          <StaggerReveal>
            <div className="about-editorial-content">
              <StaggerItem>
                <Eyebrow label={t.intro.label} className="about-editorial-eyebrow" />
              </StaggerItem>
              <StaggerItem>
                <p className="section-body about-editorial-text">{tx(t.intro.p1, lang)}</p>
              </StaggerItem>
              <StaggerItem>
                <p className="section-body about-editorial-text mt-4 md:mt-5">
                  {tx(t.intro.p2, lang)}
                </p>
              </StaggerItem>
            </div>
          </StaggerReveal>
        </div>
      </div>
    </section>
  );
}
