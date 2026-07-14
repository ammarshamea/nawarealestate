"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BrandImage from "@/components/ui/BrandImage";
import Eyebrow from "@/components/ui/Eyebrow";
import { StaggerReveal, StaggerItem } from "@/components/ui/ScrollReveal";
import { services } from "@/lib/data/services";
import { sectionAnchors } from "@/lib/data/sections";
import { useSite } from "@/lib/context";
import { t, tx } from "@/lib/i18n";
import { getGsap } from "@/lib/motion/gsapClient";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function ServicesExplorer() {
  const { lang, reducedMotion, isAr } = useSite();
  const [active, setActive] = useState(0);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const item = services[active];
  const slideX = isAr ? -28 : 28;

  useEffect(() => {
    if (reducedMotion) return;

    let cancelled = false;

    getGsap().then(({ gsap }) => {
      if (cancelled) return;

      imageRefs.current.forEach((el, i) => {
        if (!el) return;
        const isActive = active === i;
        gsap.to(el, {
          opacity: isActive ? 1 : 0,
          scale: isActive ? 1 : 1.04,
          duration: 0.7,
          ease: "power2.inOut",
          overwrite: "auto",
        });
      });
    });

    return () => {
      cancelled = true;
    };
  }, [active, reducedMotion]);

  return (
    <section id={sectionAnchors.services} className="section-padding surface-ivory">
      <div className="container-luxury">
        <StaggerReveal>
          <div className="section-header">
            <StaggerItem>
              <Eyebrow label={t.services.label} />
            </StaggerItem>
            <StaggerItem>
              <h2 className="section-title">{tx(t.services.h2a, lang)}</h2>
            </StaggerItem>
          </div>
        </StaggerReveal>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] gap-10">
          <ul className="space-y-2" role="tablist">
            {services.map((svc, i) => {
              const isActive = active === i;
              return (
                <li key={svc.id}>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className="w-full text-start py-4 px-4 border-s-2 transition-colors"
                    style={{
                      borderColor: isActive ? "var(--color-brand-gold)" : "transparent",
                      color: isActive ? "var(--color-brand-black)" : "var(--c-text-2)",
                      background: isActive ? "rgba(181,133,22,0.08)" : "transparent",
                    }}
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                  >
                    <span className="section-index">{String(i + 1).padStart(2, "0")}</span>
                    <span className="block mt-1 section-card-title">{tx(svc.title, lang)}</span>
                  </button>
                </li>
              );
            })}
          </ul>

          <div
            className="brand-media-frame min-h-[320px] lg:min-h-[min(480px,55vh)] max-h-[min(520px,60vh)] relative overflow-hidden"
            role="tabpanel"
          >
            {services.map((svc, i) => (
              <div
                key={svc.id}
                ref={(el) => {
                  imageRefs.current[i] = el;
                }}
                className="absolute inset-0 will-change-transform"
                style={{
                  opacity: reducedMotion ? (active === i ? 1 : 0) : i === 0 ? 1 : 0,
                  zIndex: active === i ? 1 : 0,
                }}
              >
                <BrandImage src={svc.image} alt={tx(svc.title, lang)} className="brand-media" />
              </div>
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-[2]" />
            <div className="absolute bottom-0 p-6 md:p-8 z-[3]">
              <AnimatePresence mode="wait">
                <motion.p
                  key={active}
                  className="text-white/90 section-body !mt-0 max-w-md !text-[clamp(0.9375rem,1.4vw,1rem)] !text-white/88"
                  initial={reducedMotion ? false : { opacity: 0, x: slideX }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={reducedMotion ? undefined : { opacity: 0, x: -slideX }}
                  transition={{ duration: 0.5, ease: EASE }}
                >
                  {tx(item.desc, lang)}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
