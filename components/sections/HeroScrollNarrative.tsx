"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BrandImage from "@/components/ui/BrandImage";
import { scrollToSection } from "@/components/ui/AnchorLink";
import MagneticCTA from "@/components/ui/MagneticCTA";
import { brandImages } from "@/lib/data/images";
import { sectionAnchors } from "@/lib/data/sections";
import { useSite } from "@/lib/context";
import { t, tx } from "@/lib/i18n";
import { getGsap, isMobileViewport } from "@/lib/motion/gsapClient";
import { publicPath } from "@/lib/publicPath";

const heroFrames = [
  { image: brandImages.skylineSunset, stage: 0 },
  { image: brandImages.residentialStreet, stage: 1 },
  { image: brandImages.resortEntrance, stage: 2 },
  { image: brandImages.familyCommunity, stage: 3 },
  { image: brandImages.buildLifestyles, stage: 4 },
] as const;

const EASE = [0.22, 1, 0.36, 1] as const;

const contentVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function HeroScrollNarrative() {
  const { lang, reducedMotion } = useSite();
  const containerRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const frameRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeStage, setActiveStage] = useState(0);

  const stages = t.hero.stages;

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = publicPath(brandImages.skylineSunset);
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  useEffect(() => {
    if (reducedMotion || !containerRef.current || !pinRef.current) {
      return;
    }

    let ctx: { revert: () => void } | undefined;
    let cancelled = false;

    getGsap().then(({ gsap, ScrollTrigger }) => {
      if (cancelled || !containerRef.current || !pinRef.current) return;

      ctx = gsap.context(() => {
        const mobile = isMobileViewport();
        const pinHeight = mobile ? "+=120%" : "+=180%";

        const syncStage = (progress: number) => {
          if (progress < 0.2) setActiveStage(0);
          else if (progress < 0.45) setActiveStage(1);
          else if (progress < 0.7) setActiveStage(2);
          else if (progress < 0.92) setActiveStage(3);
          else setActiveStage(4);
        };

        ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top top",
          end: pinHeight,
          pin: pinRef.current,
          pinSpacing: true,
          anticipatePin: 1,
          scrub: mobile ? 0.5 : 0.65,
          invalidateOnRefresh: true,
          onUpdate: (self) => syncStage(self.progress),
          onLeaveBack: () => setActiveStage(0),
        });

        setActiveStage(0);

        ScrollTrigger.refresh();
      }, containerRef);
    });

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, [reducedMotion]);

  useEffect(() => {
    if (reducedMotion) return;

    let cancelled = false;

    getGsap().then(({ gsap }) => {
      if (cancelled) return;

      frameRefs.current.forEach((el, i) => {
        if (!el) return;
        const isActive = activeStage === i;
        gsap.to(el, {
          opacity: isActive ? 1 : 0,
          scale: isActive ? 1 : 1.06,
          duration: 0.8,
          ease: "power2.inOut",
          overwrite: "auto",
        });
      });
    });

    return () => {
      cancelled = true;
    };
  }, [activeStage, reducedMotion]);

  return (
    <section
      id={sectionAnchors.home}
      ref={containerRef}
      className="hero-scene pin-section relative"
      aria-label={tx(t.hero.eyebrow, lang)}
    >
      <div ref={pinRef} className="hero-viewport relative overflow-hidden">
        {heroFrames.map((frame, i) => (
          <div
            key={frame.image}
            ref={(el) => {
              frameRefs.current[i] = el;
            }}
            className="absolute inset-0 will-change-transform"
            style={{
              opacity: reducedMotion ? (activeStage === i ? 1 : 0) : i === 0 ? 1 : 0,
              zIndex: activeStage === i ? 1 : 0,
            }}
          >
            <BrandImage
              src={frame.image}
              alt=""
              priority={i === 0}
              className={`brand-media absolute inset-0 scale-105${i === 0 ? " brand-media-skyline" : ""}`}
            />
          </div>
        ))}
        <div className="absolute inset-0 z-[2] bg-gradient-to-t from-black/75 via-black/35 to-transparent" />

        <motion.div
          className="relative z-10 flex h-full flex-col justify-end container-luxury pb-12 md:pb-20 pt-[var(--nav-height)]"
          variants={contentVariants}
          initial={reducedMotion ? "visible" : "hidden"}
          animate="visible"
          transition={{ duration: 0.85, ease: EASE, staggerChildren: 0.08 }}
        >
          <motion.p className="eyebrow mb-4" style={{ color: "#ebbf5b" }} variants={contentVariants}>
            {tx(t.hero.eyebrow, lang)}
          </motion.p>
          <StageHeadline lang={lang} activeStage={activeStage} stages={stages} reducedMotion={reducedMotion} />
          <AnimatePresence mode="wait">
            <motion.p
              key={`support-${activeStage}`}
              className="mt-4 max-w-xl text-sm md:text-base leading-relaxed"
              style={{ color: "rgba(255,255,255,0.72)" }}
              initial={reducedMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reducedMotion ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.5, ease: EASE }}
            >
              {tx(t.hero.supporting, lang)}
            </motion.p>
          </AnimatePresence>
          <motion.p
            key={`location-${activeStage}`}
            className="mt-3 text-xs tracking-widest uppercase"
            style={{ color: "rgba(255,255,255,0.5)" }}
            initial={reducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            {tx(t.hero.location, lang)}
          </motion.p>
          <motion.div
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
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

        <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 flex gap-2">
          {[0, 1, 2, 3, 4].map((i) => (
            <span
              key={i}
              className="h-1 rounded-full transition-all duration-300"
              style={{
                width: activeStage === i ? 24 : 8,
                background: activeStage === i ? "#ebbf5b" : "rgba(255,255,255,0.35)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function StageHeadline({
  lang,
  activeStage,
  stages,
  reducedMotion,
}: {
  lang: "en" | "ar";
  activeStage: number;
  stages: readonly { en: string; ar: string }[];
  reducedMotion: boolean;
}) {
  const text = tx(stages[Math.min(activeStage, stages.length - 1)], lang);
  const lines = text.split("\n");

  if (reducedMotion) {
    return (
      <h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl hero-headline-plain whitespace-pre-line"
        style={{ color: "#ffffff" }}
      >
        {text}
      </h1>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.h1
        key={activeStage}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl hero-headline-plain overflow-hidden"
        style={{ color: "#ffffff" }}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
          exit: { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
        }}
      >
        {lines.map((line, i) => (
          <motion.span
            key={`${activeStage}-${i}`}
            className="block"
            variants={{
              hidden: { opacity: 0, y: 28, clipPath: "inset(100% 0 0 0)" },
              visible: {
                opacity: 1,
                y: 0,
                clipPath: "inset(0% 0 0 0)",
                transition: { duration: 0.65, ease: EASE },
              },
              exit: {
                opacity: 0,
                y: -16,
                transition: { duration: 0.35, ease: EASE },
              },
            }}
          >
            {line}
          </motion.span>
        ))}
      </motion.h1>
    </AnimatePresence>
  );
}
