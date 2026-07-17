"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
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
  const [descTop, setDescTop] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const listRef = useRef<HTMLUListElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const item = services[active];
  const slideX = isAr ? -28 : 28;

  const syncDescPosition = useCallback(() => {
    const tab = tabRefs.current[active];
    const panel = panelRef.current;
    if (!tab || !panel) return;

    const tabRect = tab.getBoundingClientRect();
    const panelRect = panel.getBoundingClientRect();
    setDescTop(tabRect.top + tabRect.height / 2 - panelRect.top);
  }, [active]);

  useLayoutEffect(() => {
    syncDescPosition();

    const list = listRef.current;
    const panel = panelRef.current;
    if (!list || !panel || typeof ResizeObserver === "undefined") return;

    const observer = new ResizeObserver(syncDescPosition);
    observer.observe(list);
    observer.observe(panel);
    window.addEventListener("resize", syncDescPosition);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", syncDescPosition);
    };
  }, [syncDescPosition]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useLayoutEffect(() => {
    if (!isDesktop) return;
    syncDescPosition();
  }, [isDesktop, syncDescPosition]);

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
  }, [active, reducedMotion]);

  return (
    <section
      id={sectionAnchors.services}
      className="services-explorer relative min-h-[min(92vh,920px)] overflow-hidden"
      aria-label={tx(t.services.h2a, lang)}
    >
      <div className="absolute inset-0" aria-hidden="true">
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
            <BrandImage
              src={svc.image}
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/25" />
          </div>
        ))}
      </div>

      <div className="relative z-10 flex min-h-[min(92vh,920px)] flex-col justify-end">
        <div className="container-luxury section-padding pb-10 pt-28 md:pb-14 md:pt-32">
          <StaggerReveal>
            <div className="section-header mb-8 md:mb-10">
              <StaggerItem>
                <Eyebrow label={t.services.label} className="!text-[rgba(235,191,91,0.95)]" />
              </StaggerItem>
              <StaggerItem>
                <h2 className="section-title !text-white">{tx(t.services.h2a, lang)}</h2>
              </StaggerItem>
            </div>
          </StaggerReveal>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-stretch lg:gap-14 xl:gap-20">
            <ul ref={listRef} className="space-y-1" role="tablist">
              {services.map((svc, i) => {
                const isActive = active === i;
                return (
                  <li key={svc.id}>
                    <button
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      ref={(el) => {
                        tabRefs.current[i] = el;
                      }}
                      className="services-explorer-tab w-full cursor-pointer py-3 px-3 text-start transition-colors md:py-3.5 md:px-4"
                      style={{
                        borderInlineStart: `2px solid ${isActive ? "var(--color-brand-gold)" : "transparent"}`,
                        color: isActive ? "#ffffff" : "rgba(255,255,255,0.62)",
                        background: isActive ? "rgba(181,133,22,0.14)" : "transparent",
                      }}
                      onMouseEnter={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      onClick={() => setActive(i)}
                    >
                      <span className="section-index !text-[rgba(235,191,91,0.85)]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="mt-1 block section-card-title !text-[clamp(1rem,1.8vw,1.2rem)]">
                        {tx(svc.title, lang)}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>

            <div ref={panelRef} role="tabpanel" aria-live="polite" className="services-explorer-panel relative">
              <div
                className="services-explorer-panel-inner max-w-lg"
                style={isDesktop ? { top: descTop } : undefined}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={reducedMotion ? false : { opacity: 0, x: slideX }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={reducedMotion ? undefined : { opacity: 0, x: -slideX }}
                    transition={{ duration: 0.5, ease: EASE }}
                  >
                    <p className="section-body !mt-0 !text-[clamp(0.9375rem,1.5vw,1.0625rem)] !text-white/88">
                      {tx(item.desc, lang)}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
