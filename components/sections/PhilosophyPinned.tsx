"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BrandImage from "@/components/ui/BrandImage";
import Eyebrow from "@/components/ui/Eyebrow";
import { StaggerReveal, StaggerItem } from "@/components/ui/ScrollReveal";
import { philosophyPillars } from "@/lib/data/philosophy";
import { sectionAnchors } from "@/lib/data/sections";
import { useSite } from "@/lib/context";
import { t, tx } from "@/lib/i18n";
import { getGsap, isMobileViewport } from "@/lib/motion/gsapClient";
import { useGsapScrollContext } from "@/lib/motion/useGsapScrollContext";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function PhilosophyPinned() {
  const { lang, isAr, reducedMotion } = useSite();
  const containerRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState(0);

  useGsapScrollContext(containerRef, {
    enabled: !reducedMotion,
    deps: [lang, isAr],
    setup: ({ ScrollTrigger }) => {
      if (!containerRef.current || !pinRef.current) return;

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: isMobileViewport() ? "+=150%" : "+=250%",
        pin: pinRef.current,
        pinSpacing: true,
        anticipatePin: 1,
        scrub: 0.5,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const p = self.progress;
          if (p < 0.33) setActive(0);
          else if (p < 0.66) setActive(1);
          else setActive(2);
        },
      });

      setActive(0);
    },
  });

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
          scale: isActive ? 1 : 1.05,
          duration: 0.75,
          ease: "power2.inOut",
          overwrite: "auto",
        });
      });
    });

    return () => {
      cancelled = true;
    };
  }, [active, reducedMotion]);

  const pillar = philosophyPillars[active];
  const isDark = pillar.surface === "dark";

  return (
    <section
      id={sectionAnchors.philosophy}
      ref={containerRef}
      className="pin-section relative"
      aria-labelledby="philosophy-heading"
    >
      <div
        ref={pinRef}
        className={`hero-viewport flex flex-col justify-center section-padding pt-[calc(var(--nav-height)+2rem)] transition-colors duration-500 ${
          isDark ? "surface-dark-brand" : "surface-ivory"
        }`}
      >
        <div className="container-luxury">
          <StaggerReveal>
            <StaggerItem>
              <Eyebrow label={t.philosophy.label} />
            </StaggerItem>
            <StaggerItem>
              <h2 id="philosophy-heading" className="section-title">
                {tx(t.philosophy.title, lang)}
              </h2>
            </StaggerItem>
            <StaggerItem>
              <p className="section-subtitle">{tx(t.philosophy.subtitle, lang)}</p>
            </StaggerItem>
          </StaggerReveal>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${active}-${lang}`}
                  initial={reducedMotion ? false : { opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reducedMotion ? undefined : { opacity: 0, y: -16 }}
                  transition={{ duration: 0.55, ease: EASE }}
                >
                  <span className="text-5xl md:text-6xl font-bold text-gold-gradient">{pillar.number}</span>
                  <h3 className="mt-4 text-2xl md:text-[1.75rem] font-bold">{tx(pillar.title, lang)}</h3>
                  <p className="mt-4 section-body max-w-md">{tx(pillar.desc, lang)}</p>
                </motion.div>
              </AnimatePresence>
              <div className="mt-8 flex gap-3">
                {philosophyPillars.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`${i + 1}`}
                    className="h-1 rounded-full transition-all"
                    style={{
                      width: active === i ? 32 : 12,
                      background: active === i ? "var(--color-brand-gold)" : "var(--c-text-3)",
                    }}
                    onClick={() => setActive(i)}
                  />
                ))}
              </div>
            </div>
            <div className="brand-media-frame aspect-video max-h-[min(420px,50vh)] relative overflow-hidden">
              {philosophyPillars.map((p, i) => (
                <div
                  key={p.number}
                  ref={(el) => {
                    imageRefs.current[i] = el;
                  }}
                  className="absolute inset-0 will-change-transform"
                  style={{
                    opacity: reducedMotion ? (active === i ? 1 : 0) : i === 0 ? 1 : 0,
                    zIndex: active === i ? 1 : 0,
                  }}
                >
                  <BrandImage src={p.image} alt={tx(p.title, lang)} className="brand-media" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
