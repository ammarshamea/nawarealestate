"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import BrandImage from "@/components/ui/BrandImage";
import { scrollToSection } from "@/components/ui/AnchorLink";
import MagneticCTA from "@/components/ui/MagneticCTA";
import { brandImages } from "@/lib/data/images";
import { sectionAnchors } from "@/lib/data/sections";
import { useSite } from "@/lib/context";
import { t, tx } from "@/lib/i18n";
import { publicPath } from "@/lib/publicPath";

const HERO_IMAGE = brandImages.residentialStreet;

const EASE = [0.22, 1, 0.36, 1] as const;

const contentVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function HeroScrollNarrative() {
  const { lang, reducedMotion } = useSite();

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = publicPath(HERO_IMAGE);
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <section
      id={sectionAnchors.home}
      className="hero-scene relative"
      aria-label={tx(t.hero.eyebrow, lang)}
    >
      <div className="hero-viewport relative overflow-hidden">
        <BrandImage
          src={HERO_IMAGE}
          alt={tx(t.hero.headline, lang)}
          priority
          className="brand-media absolute inset-0 scale-105"
        />
        <div className="absolute inset-0 z-[2] bg-gradient-to-t from-black/75 via-black/35 to-transparent" />

        <motion.div
          className="relative z-10 flex h-full flex-col justify-end container-luxury pb-16 md:pb-24 pt-[var(--nav-height)] overflow-visible"
          variants={contentVariants}
          initial={reducedMotion ? "visible" : "hidden"}
          animate="visible"
          transition={{ duration: 0.85, ease: EASE, staggerChildren: 0.08 }}
        >
          <motion.p className="eyebrow mb-4" variants={contentVariants}>
            {tx(t.hero.eyebrow, lang)}
          </motion.p>
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl hero-headline-plain whitespace-pre-line"
            style={{ color: "#ffffff" }}
            variants={contentVariants}
          >
            {tx(t.hero.headline, lang)}
          </motion.h1>
          <motion.p
            className="mt-4 max-w-xl text-sm md:text-base leading-relaxed"
            style={{ color: "rgba(255,255,255,0.72)" }}
            variants={contentVariants}
          >
            {tx(t.hero.supporting, lang)}
          </motion.p>
          <motion.p
            className="mt-3 text-xs tracking-widest uppercase"
            style={{ color: "rgba(255,255,255,0.5)" }}
            variants={contentVariants}
          >
            {tx(t.hero.location, lang)}
          </motion.p>
          <motion.div
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            variants={contentVariants}
          >
            <MagneticCTA
              className="btn-gold btn-magnetic w-full sm:w-auto"
              onClick={() => scrollToSection(sectionAnchors.about)}
            >
              {tx(t.hero.cta1, lang)}
            </MagneticCTA>
            <MagneticCTA
              className="btn-outline-gold btn-magnetic w-full sm:w-auto"
              href={`#${sectionAnchors.contact}`}
              onClick={() => scrollToSection(sectionAnchors.contact)}
            >
              {tx(t.hero.cta2, lang)}
            </MagneticCTA>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
