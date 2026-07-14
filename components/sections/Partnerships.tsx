"use client";

import BrandImage from "@/components/ui/BrandImage";
import Eyebrow from "@/components/ui/Eyebrow";
import MagneticCTA from "@/components/ui/MagneticCTA";
import { scrollToSection } from "@/components/ui/AnchorLink";
import { StaggerReveal, StaggerItem } from "@/components/ui/ScrollReveal";
import { brandImages } from "@/lib/data/images";
import { sectionAnchors } from "@/lib/data/sections";
import { useSite } from "@/lib/context";
import { t, tx } from "@/lib/i18n";

export default function Partnerships() {
  const { lang } = useSite();

  return (
    <section id={sectionAnchors.partnerships} className="section-padding surface-dark-brand">
      <div className="container-luxury grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
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
          <div className="section-header">
            <StaggerItem>
              <Eyebrow label={t.partnershipsSection.label} />
            </StaggerItem>
            <StaggerItem>
              <h2 className="section-title section-title--preline">
                {tx(t.partnershipsSection.headline, lang)}
              </h2>
            </StaggerItem>
            <StaggerItem>
              <p className="section-body">{tx(t.partnershipsSection.body, lang)}</p>
            </StaggerItem>
            <StaggerItem>
              <ul className="mt-6 flex flex-wrap gap-3">
                {t.about.partnerships.map((partner) => (
                  <li key={partner.en} className="section-tag">
                    {tx(partner, lang)}
                  </li>
                ))}
              </ul>
            </StaggerItem>
            <StaggerItem className="mt-8">
              <MagneticCTA
                className="btn-gold btn-magnetic"
                onClick={() => scrollToSection(sectionAnchors.contact)}
              >
                {tx(t.partnershipsSection.cta, lang)}
              </MagneticCTA>
            </StaggerItem>
          </div>
        </StaggerReveal>
      </div>
    </section>
  );
}
