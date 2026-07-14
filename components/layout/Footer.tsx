"use client";

import AnchorLink from "@/components/ui/AnchorLink";
import NawahLine from "@/components/motion/NawahLine";
import NawaLogo from "@/components/ui/NawaLogo";
import { footerLinks, navLinks, sectionAnchors } from "@/lib/data/sections";
import { useSite } from "@/lib/context";
import { t, tx } from "@/lib/i18n";
import { projectTypes } from "@/lib/data/projectTypes";

const labelMap = {
  home: t.nav.home,
  about: t.nav.about,
  philosophy: t.nav.philosophy,
  services: t.nav.services,
  projects: t.nav.projects,
  investment: t.nav.investment,
  contact: t.nav.contact,
} as const;

const footerLabelMap = {
  story: t.nav.story,
  targetMarket: t.nav.targetMarket,
  mission: t.nav.mission,
  vision2030: t.nav.vision2030,
  values: t.nav.values,
  partnerships: t.nav.partnerships,
  sustainability: t.nav.sustainability,
} as const;

export default function Footer() {
  const { lang } = useSite();

  return (
    <footer className="surface-dark-brand relative overflow-hidden border-t border-[rgba(181,133,22,0.2)]">
      <div className="absolute inset-x-0 top-0 h-24 opacity-30 pointer-events-none">
        <NawahLine variant="coreReturn" animate={false} />
      </div>
      <div className="container-luxury py-16 relative">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5 md:gap-12">
          <div className="lg:col-span-1">
            <AnchorLink anchor={sectionAnchors.home}>
              <NawaLogo height={72} />
            </AnchorLink>
            <p className="section-body !text-[0.9375rem] mt-6">
              {tx(t.hero.supporting, lang)}
            </p>
            <p className="mt-4 text-gold-gradient section-card-title">{tx(t.brand.tagline, lang)}</p>
          </div>

          <div>
            <h4 className="eyebrow mb-6">
              {tx(t.footer.nav, lang)}
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.anchor}>
                  <AnchorLink anchor={link.anchor} className="section-body !mt-0 !text-[0.9375rem]">
                    {tx(labelMap[link.key], lang)}
                  </AnchorLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="eyebrow mb-6">
              {tx(t.footer.moreLinks, lang)}
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.anchor}>
                  <AnchorLink anchor={link.anchor} className="section-body !mt-0 !text-[0.9375rem]">
                    {tx(footerLabelMap[link.key], lang)}
                  </AnchorLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="eyebrow mb-6">
              {tx(t.footer.devTypes, lang)}
            </h4>
            <ul className="space-y-3">
              {projectTypes.map((item) => (
                <li key={item.id} className="section-body !mt-0 !text-[0.9375rem]">
                  {tx(item.title, lang)}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="eyebrow mb-6">
              {tx(t.footer.contact, lang)}
            </h4>
            <ul className="space-y-4 section-body !text-[0.9375rem]">
              <li>{tx(t.contact.officeVal, lang)}</li>
              <li>
                <a href="tel:+966500000000" className="link-arch ltr-inline">
                  +966 50 000 0000
                </a>
              </li>
              <li>
                <a href="mailto:info@nawah.sa" className="link-arch ltr-inline">
                  info@nawah.sa
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="gold-line my-12" />
        <p className="text-center text-xs" style={{ color: "var(--c-text-3)" }}>
          © {new Date().getFullYear()} {tx(t.brand.title, lang)}. {tx(t.footer.rights, lang)}
        </p>
      </div>
    </footer>
  );
}
