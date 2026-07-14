"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import BrandImage from "@/components/ui/BrandImage";
import Eyebrow from "@/components/ui/Eyebrow";
import NawahLine from "@/components/motion/NawahLine";
import { StaggerReveal, StaggerItem } from "@/components/ui/ScrollReveal";
import { investmentTimeline, investmentTimelineDetails } from "@/lib/data/company";
import { brandImages } from "@/lib/data/images";
import { sectionAnchors } from "@/lib/data/sections";
import { useSite } from "@/lib/context";
import { t, tx } from "@/lib/i18n";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function InvestmentTimeline() {
  const { lang, reducedMotion } = useSite();
  const [activeStep, setActiveStep] = useState(0);
  const step = investmentTimelineDetails[activeStep];
  const stepTitle = investmentTimeline[activeStep];

  return (
    <section id={sectionAnchors.investment} className="section-padding surface-ivory">
      <div className="container-luxury grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <StaggerReveal>
          <div className="section-header">
            <StaggerItem>
              <Eyebrow label={t.investmentValue.label} />
            </StaggerItem>
            <StaggerItem>
              <h2 className="section-title section-title--preline">
                {tx(t.investmentValue.headline, lang)}
              </h2>
            </StaggerItem>
            <StaggerItem>
              <ul className="mt-6 flex flex-wrap gap-3">
                {t.investmentValue.themes.map((theme) => (
                  <li key={theme.en} className="section-tag section-tag--gold">
                    {tx(theme, lang)}
                  </li>
                ))}
              </ul>
            </StaggerItem>
            <StaggerItem>
              <div className="mt-8 relative h-24">
                <NawahLine variant="timeline" className="absolute inset-0" />
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="mt-4 flex flex-wrap gap-2">
                {investmentTimeline.map((timelineStep, i) => (
                  <button
                    key={timelineStep.en}
                    type="button"
                    aria-pressed={activeStep === i}
                    className="section-tag !border-transparent px-3 py-2 transition-colors"
                    style={{
                      color: activeStep === i ? "var(--color-brand-gold)" : "var(--c-text-2)",
                      fontWeight: activeStep === i ? 700 : 500,
                      background: activeStep === i ? "rgba(181,133,22,0.08)" : "transparent",
                    }}
                    onClick={() => setActiveStep(i)}
                  >
                    {tx(timelineStep, lang)}
                  </button>
                ))}
              </div>
            </StaggerItem>
            <StaggerItem>
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeStep}-${lang}`}
                  initial={reducedMotion ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reducedMotion ? undefined : { opacity: 0, y: -12 }}
                  transition={{ duration: 0.45, ease: EASE }}
                  className="mt-6"
                >
                  <p className="section-label mb-2">{tx(stepTitle, lang)}</p>
                  <p className="section-body mt-0">{tx(step.desc, lang)}</p>
                </motion.div>
              </AnimatePresence>
            </StaggerItem>
          </div>
        </StaggerReveal>
        <StaggerReveal>
          <StaggerItem image>
            <div className="brand-media-frame aspect-[4/3] max-h-[min(480px,55vh)]">
              <BrandImage
                src={brandImages.investmentTerrace}
                alt={tx(stepTitle, lang)}
                className="brand-media"
              />
            </div>
          </StaggerItem>
        </StaggerReveal>
      </div>
    </section>
  );
}
