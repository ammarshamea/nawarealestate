"use client";

import AnchorLink from "@/components/ui/AnchorLink";
import NawahLine from "@/components/motion/NawahLine";
import NawaLogo from "@/components/ui/NawaLogo";
import { navLinks, sectionAnchors } from "@/lib/data/sections";
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

export default function Footer() {
  const { lang } = useSite();

  return (
    <footer className="surface-dark-brand relative overflow-hidden border-t border-[rgba(181,133,22,0.2)]">
      <div className="absolute inset-x-0 top-0 h-24 opacity-30 pointer-events-none">
        <NawahLine variant="coreReturn" animate={false} />
      </div>
      <div className="container-luxury py-16 relative">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-4 md:gap-12">
          <div className="lg:col-span-1">
            <AnchorLink anchor={sectionAnchors.home}>
              <NawaLogo height={72} />
            </AnchorLink>
            <p className="text-sm leading-relaxed mt-6" style={{ color: "var(--c-text-2)" }}>
              {tx(t.hero.supporting, lang)}
            </p>
            <p className="mt-4 text-gold-gradient text-sm font-bold">{tx(t.brand.tagline, lang)}</p>
          </div>

          <div>
            <h4 className="eyebrow mb-6" style={{ color: "var(--color-brand-gold)" }}>
              {tx(t.footer.nav, lang)}
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.anchor}>
                  <AnchorLink anchor={link.anchor} className="text-sm" style={{ color: "var(--c-text-2)" }}>
                    {tx(labelMap[link.key], lang)}
                  </AnchorLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="eyebrow mb-6" style={{ color: "var(--color-brand-gold)" }}>
              {tx(t.footer.devTypes, lang)}
            </h4>
            <ul className="space-y-3">
              {projectTypes.map((item) => (
                <li key={item.id} className="text-sm" style={{ color: "var(--c-text-2)" }}>
                  {tx(item.title, lang)}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="eyebrow mb-6" style={{ color: "var(--color-brand-gold)" }}>
              {tx(t.footer.contact, lang)}
            </h4>
            <ul className="space-y-4 text-sm" style={{ color: "var(--c-text-2)" }}>
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
