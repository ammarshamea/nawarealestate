"use client";

import BrandImage from "@/components/ui/BrandImage";
import Eyebrow from "@/components/ui/Eyebrow";
import MagneticCTA from "@/components/ui/MagneticCTA";
import { scrollToSection } from "@/components/ui/AnchorLink";
import { StaggerReveal, StaggerItem } from "@/components/ui/ScrollReveal";
import { partnershipAudiences } from "@/lib/data/company";
import { brandImages } from "@/lib/data/images";
import { sectionAnchors } from "@/lib/data/sections";
import { useSite } from "@/lib/context";
import { t, tx } from "@/lib/i18n";

export default function Partnerships() {
  const { lang } = useSite();

  return (
    <section id={sectionAnchors.partnerships} className="section-padding surface-dark-brand">
      <div className="container-luxury grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <StaggerReveal className="order-2 lg:order-1">
          <StaggerItem image>
            <div className="brand-media-frame aspect-[4/3] max-h-[min(480px,55vh)]">
              <BrandImage
                src={brandImages.partnershipsMeeting}
                alt={tx(t.partnershipsSection.headline, lang)}
                className="brand-media"
              />
            </div>
          </StaggerItem>
        </StaggerReveal>
        <StaggerReveal className="order-1 lg:order-2">
          <StaggerItem>
            <Eyebrow label={t.partnershipsSection.label} />
          </StaggerItem>
          <StaggerItem>
            <h2 className="mt-6 text-3xl md:text-4xl font-bold leading-tight whitespace-pre-line">
              {tx(t.partnershipsSection.headline, lang)}
            </h2>
          </StaggerItem>
          <StaggerItem>
            <p className="mt-6 leading-relaxed" style={{ color: "var(--c-text-2)" }}>
              {tx(t.partnershipsSection.body, lang)}
            </p>
          </StaggerItem>
          <StaggerItem>
            <ul className="mt-8 flex flex-wrap gap-3 md:gap-4">
              {partnershipAudiences.map((aud) => (
                <li
                  key={aud.en}
                  className="text-sm px-5 py-2.5 border"
                  style={{ borderColor: "rgba(235,191,91,0.4)", color: "var(--c-text-2)" }}
                >
                  {tx(aud, lang)}
                </li>
              ))}
            </ul>
          </StaggerItem>
          <StaggerItem className="mt-10">
            <MagneticCTA
              className="btn-gold btn-magnetic"
              onClick={() => scrollToSection(sectionAnchors.contact)}
            >
              {tx(t.partnershipsSection.cta, lang)}
            </MagneticCTA>
          </StaggerItem>
        </StaggerReveal>
      </div>
    </section>
  );
}
