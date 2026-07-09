"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import BrandImage from "@/components/ui/BrandImage";
import Eyebrow from "@/components/ui/Eyebrow";
import { StaggerReveal, StaggerItem } from "@/components/ui/ScrollReveal";
import { projectTypes } from "@/lib/data/projectTypes";
import { sectionAnchors } from "@/lib/data/sections";
import { useSite } from "@/lib/context";
import { t, tx } from "@/lib/i18n";
import { getGsap, isMobileViewport } from "@/lib/motion/gsapClient";
import { horizontalScrollDirection } from "@/lib/motion/rtl";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function ProjectTypesPanorama() {
  const { lang, isAr, reducedMotion } = useSite();
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (reducedMotion || !sectionRef.current || !trackRef.current) return;

    let ctx: { revert: () => void } | undefined;
    let cancelled = false;

    getGsap().then(({ gsap, ScrollTrigger }) => {
      const track = trackRef.current;
      const section = sectionRef.current;
      if (cancelled || !track || !section) return;

      const dir = horizontalScrollDirection(isAr);
      const scrollWidth = Math.max(track.scrollWidth - window.innerWidth, 0);
      if (scrollWidth <= 0) return;

      ctx = gsap.context(() => {
        gsap.to(track, {
          x: dir * -scrollWidth,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${Math.min(scrollWidth, window.innerHeight * 2.5)}`,
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
            scrub: 0.55,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const idx = Math.round(self.progress * (projectTypes.length - 1));
              setActiveSlide(idx);
            },
          },
        });
        ScrollTrigger.refresh();
      }, section);
    });

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, [isAr, reducedMotion]);

  if (reducedMotion) {
    return (
      <section id={sectionAnchors.projectTypes} className="section-padding surface-dark-brand">
        <div className="container-luxury">
          <Eyebrow label={t.projectTypes.label} />
          <div className="mt-10 space-y-16">
            {projectTypes.map((pt) => (
              <PanoramaSlide
                key={pt.id}
                title={tx(pt.title, lang)}
                desc={tx(pt.desc, lang)}
                image={pt.image}
                isActive
                reducedMotion
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id={sectionAnchors.projectTypes} ref={sectionRef} className="pin-section relative surface-dark-brand overflow-hidden">
      <div className="absolute top-[calc(var(--nav-height)+1rem)] left-0 right-0 z-10 container-luxury">
        <StaggerReveal>
          <StaggerItem>
            <Eyebrow label={t.projectTypes.label} />
          </StaggerItem>
          <StaggerItem>
            <h2 className="mt-2 text-2xl md:text-3xl font-bold">
              {tx(t.projectTypes.h2a, lang)}
            </h2>
          </StaggerItem>
        </StaggerReveal>
      </div>
      <div
        ref={trackRef}
        className="flex hero-viewport min-h-[520px] pt-[calc(var(--nav-height)+5rem)]"
      >
        {projectTypes.map((pt, i) => (
          <div key={pt.id} className="relative flex-shrink-0 w-screen h-full px-4 md:px-8">
            <PanoramaSlide
              title={tx(pt.title, lang)}
              desc={tx(pt.desc, lang)}
              image={pt.image}
              isActive={activeSlide === i}
              reducedMotion={false}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

function PanoramaSlide({
  title,
  desc,
  image,
  isActive = true,
  reducedMotion = false,
}: {
  title: string;
  desc: string;
  image: string;
  isActive?: boolean;
  reducedMotion?: boolean;
}) {
  return (
    <div className="brand-media-frame relative h-full w-full overflow-hidden">
      <BrandImage src={image} alt={title} className="brand-media" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
      <motion.div
        className="absolute bottom-0 left-0 right-0 p-8 md:p-12"
        initial={false}
        animate={
          reducedMotion || isActive
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: 32 }
        }
        transition={{ duration: 0.65, ease: EASE }}
      >
        <motion.h3
          className="text-3xl md:text-5xl font-bold text-white max-w-2xl"
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, ease: EASE, delay: isActive ? 0.1 : 0 }}
        >
          {title}
        </motion.h3>
        <motion.p
          className="mt-4 text-sm md:text-base text-white/75 max-w-lg"
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.55, ease: EASE, delay: isActive ? 0.18 : 0 }}
        >
          {desc}
        </motion.p>
      </motion.div>
    </div>
  );
}
