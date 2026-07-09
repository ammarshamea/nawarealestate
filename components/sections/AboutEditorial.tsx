"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BrandImage from "@/components/ui/BrandImage";
import Eyebrow from "@/components/ui/Eyebrow";
import { StaggerReveal, StaggerItem } from "@/components/ui/ScrollReveal";
import { brandImages } from "@/lib/data/images";
import { sectionAnchors } from "@/lib/data/sections";
import { useSite } from "@/lib/context";
import { t, tx } from "@/lib/i18n";

export default function AboutEditorial() {
  const { lang, reducedMotion } = useSite();
  const [showDestinations, setShowDestinations] = useState(false);
  const showMorph = reducedMotion || showDestinations;

  useEffect(() => {
    if (reducedMotion) return;
    const t1 = window.setTimeout(() => setShowDestinations(true), 2200);
    return () => window.clearTimeout(t1);
  }, [reducedMotion]);

  return (
    <section id={sectionAnchors.about} className="section-padding surface-ivory relative overflow-hidden">
      <div className="container-luxury grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <StaggerReveal>
          <StaggerItem>
            <Eyebrow label={t.intro.label} />
          </StaggerItem>
          <StaggerItem>
            <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              {tx(t.intro.p2, lang)}
            </h2>
          </StaggerItem>
          <StaggerItem>
            <p className="mt-6 text-base leading-relaxed" style={{ color: "var(--c-text-2)" }}>
              {tx(t.intro.p1, lang)}
            </p>
          </StaggerItem>
          <StaggerItem>
            <div className="mt-8 h-16 relative overflow-hidden">
              <AnimatePresence mode="wait">
                {!showMorph ? (
                  <motion.span
                    key="from"
                    className="absolute text-4xl md:text-5xl font-bold text-gold-gradient"
                    initial={{ opacity: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, filter: "blur(8px)" }}
                    transition={{ duration: 0.6 }}
                  >
                    {tx(t.intro.morphFrom, lang)}
                  </motion.span>
                ) : (
                  <motion.span
                    key="to"
                    className="absolute text-4xl md:text-5xl font-bold text-gold-gradient"
                    initial={{ opacity: 0, filter: "blur(8px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: 0.6 }}
                  >
                    {tx(t.intro.morphTo, lang)}
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          </StaggerItem>
        </StaggerReveal>
        <StaggerReveal>
          <StaggerItem image>
            <div className="brand-media-frame aspect-[4/5] max-h-[min(640px,70vh)] w-full">
              <BrandImage
                src={brandImages.residentialStreet}
                alt={tx(t.intro.label, lang)}
                className="brand-media"
              />
            </div>
          </StaggerItem>
        </StaggerReveal>
      </div>
    </section>
  );
}
