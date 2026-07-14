"use client";

import { useState, useEffect, useId } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import AnchorLink, { scrollToSection } from "@/components/ui/AnchorLink";
import MagneticCTA from "@/components/ui/MagneticCTA";
import NawaLogo from "@/components/ui/NawaLogo";
import { navLinks, sectionAnchors } from "@/lib/data/sections";
import { useSite } from "@/lib/context";
import { t, tx } from "@/lib/i18n";

const MOBILE_DRAWER_GAP =
  "max-[380px]:w-full max-[380px]:max-w-none w-[min(22rem,calc(100vw-16px))] sm:w-[min(24rem,calc(100vw-24px))]";

const labelMap = {
  home: t.nav.home,
  about: t.nav.about,
  philosophy: t.nav.philosophy,
  services: t.nav.services,
  projects: t.nav.projects,
  investment: t.nav.investment,
  contact: t.nav.contact,
} as const;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeAnchor, setActiveAnchor] = useState<string>(sectionAnchors.home);
  const { lang, setLang, isAr } = useSite();
  const menuId = useId();

  const atopHero = activeAnchor === sectionAnchors.home;

  useEffect(() => {
    const ids = Object.values(sectionAnchors);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveAnchor(visible.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5] },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navBg = atopHero ? "transparent" : "rgba(249,237,209,0.92)";
  const linkColor = (anchor: string, hovered: boolean) => {
    if (activeAnchor === anchor) return "#b58516";
    if (hovered) return atopHero ? "#ffffff" : "#000000";
    return atopHero ? "rgba(255,255,255,0.88)" : "rgba(0,0,0,0.62)";
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="fixed left-0 right-0 z-50 pt-[env(safe-area-inset-top,0px)]"
      >
        <div
          style={{
            background: navBg,
            backdropFilter: atopHero ? "none" : "blur(8px)",
            borderBottom: atopHero ? "none" : "1px solid rgba(181,133,22,0.2)",
            transition: "background 0.5s, backdrop-filter 0.5s",
          }}
        >
          <div className="container-luxury flex h-[var(--nav-height)] min-h-[var(--nav-height)] items-center justify-between gap-2">
            <AnchorLink anchor={sectionAnchors.home} onClick={() => setMenuOpen(false)}>
              <NawaLogo height={48} />
            </AnchorLink>

            <nav className="hidden items-center gap-5 xl:gap-8 lg:flex" aria-label="Main">
              {navLinks.map((link) => (
                <NavItem
                  key={link.anchor}
                  anchor={link.anchor}
                  label={tx(labelMap[link.key], lang)}
                  isAr={isAr}
                  color={linkColor(link.anchor, false)}
                  isActive={activeAnchor === link.anchor}
                  onNavigate={() => setMenuOpen(false)}
                />
              ))}
            </nav>

            <div className="flex items-center gap-2 shrink-0">
              <div
                className="hidden overflow-hidden lg:flex rounded-sm border"
                style={{ borderColor: atopHero ? "rgba(255,255,255,0.35)" : "rgba(181,133,22,0.25)" }}
              >
                {(["en", "ar"] as const).map((l) => (
                  <button
                    key={l}
                    type="button"
                    onClick={() => setLang(l)}
                    className="min-h-[44px] min-w-[44px] px-2.5 text-xs font-bold"
                    style={{
                      background: lang === l ? "#b58516" : "transparent",
                      color: lang === l ? "#000" : atopHero ? "#fff" : "rgba(0,0,0,0.6)",
                    }}
                  >
                    {l === "en" ? "EN" : "ع"}
                  </button>
                ))}
              </div>

              <MagneticCTA
                className="btn-gold max-lg:!hidden lg:inline-flex !px-5 !py-3 text-[0.65rem]"
                onClick={() => scrollToSection(sectionAnchors.contact)}
              >
                {tx(t.nav.partnership, lang)}
              </MagneticCTA>

              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                className="flex lg:hidden min-h-[48px] min-w-[48px] items-center justify-center rounded-md border"
                style={{
                  borderColor: atopHero ? "rgba(255,255,255,0.35)" : "rgba(181,133,22,0.25)",
                  color: atopHero ? "#fff" : "#000",
                }}
                aria-expanded={menuOpen}
                aria-controls={menuId}
              >
                <Menu size={22} />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-black/75 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              id={menuId}
              role="dialog"
              aria-modal
              initial={{ x: isAr ? "-100%" : "100%" }}
              animate={{ x: 0 }}
              exit={{ x: isAr ? "-100%" : "100%" }}
              className={`fixed top-0 bottom-0 z-[70] flex flex-col bg-[#f9edd1] text-black ${
                isAr ? "left-0" : "right-0"
              } ${MOBILE_DRAWER_GAP}`}
            >
              <div className="flex items-center justify-between p-4 border-b border-black/10">
                <NawaLogo height={40} />
                <button type="button" onClick={() => setMenuOpen(false)} aria-label="Close">
                  <X size={20} />
                </button>
              </div>
              <nav className="flex-1 overflow-y-auto p-4 space-y-2">
                {navLinks.map((link) => (
                  <AnchorLink
                    key={link.anchor}
                    anchor={link.anchor}
                    onClick={() => setMenuOpen(false)}
                    className="block w-full p-4 border border-black/10 text-sm font-bold"
                  >
                    {tx(labelMap[link.key], lang)}
                  </AnchorLink>
                ))}
              </nav>
              <div className="p-4 border-t border-black/10 space-y-3">
                <div className="flex gap-2">
                  {(["en", "ar"] as const).map((l) => (
                    <button
                      key={l}
                      type="button"
                      onClick={() => setLang(l)}
                      className="flex-1 py-3 text-xs font-bold border border-black/15"
                      style={{ background: lang === l ? "#b58516" : "transparent" }}
                    >
                      {l === "en" ? "English" : "العربية"}
                    </button>
                  ))}
                </div>
                <div className="grid grid-cols-1 gap-3">
                  <MagneticCTA
                    className="btn-outline-gold w-full justify-center"
                    onClick={() => {
                      setMenuOpen(false);
                      scrollToSection(sectionAnchors.contact);
                    }}
                  >
                    {tx(t.nav.contact, lang)}
                  </MagneticCTA>
                  <MagneticCTA
                    className="btn-gold w-full justify-center"
                    onClick={() => {
                      setMenuOpen(false);
                      scrollToSection(sectionAnchors.contact);
                    }}
                  >
                    {tx(t.nav.partnership, lang)}
                  </MagneticCTA>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function NavItem({
  anchor,
  label,
  isAr,
  color,
  isActive,
  onNavigate,
}: {
  anchor: string;
  label: string;
  isAr: boolean;
  color: string;
  isActive: boolean;
  onNavigate: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <AnchorLink
      anchor={anchor}
      onClick={onNavigate}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative pb-1"
      style={{
        fontSize: isAr ? "0.82rem" : "0.65rem",
        letterSpacing: isAr ? "0.02em" : "0.18em",
        fontWeight: 700,
        textTransform: "uppercase",
        color: hovered ? (isActive ? "#b58516" : color) : color,
      }}
    >
      {label}
    </AnchorLink>
  );
}
