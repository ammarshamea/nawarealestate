"use client";

import { useLayoutEffect, useMemo, useRef } from "react";
import BrandImage from "@/components/ui/BrandImage";
import { projectTypes } from "@/lib/data/projectTypes";
import { sectionAnchors } from "@/lib/data/sections";
import { useSite } from "@/lib/context";
import { t, tx } from "@/lib/i18n";
import { getGsap } from "@/lib/motion/gsapClient";
import { bindLocaleHorizontalScroll } from "@/lib/motion/rtl";
import { refreshScrollTriggersPreservingPosition } from "@/lib/motion/scrollSync";

function horizontalScrollLength(panelCount: number) {
  const h = window.innerHeight;
  return Math.max(1, panelCount - 1) * h * 1.12;
}

function ProjectTypesSectionHeader() {
  const { lang, isAr } = useSite();

  return (
    <header className="project-types-section-header" dir={isAr ? "rtl" : "ltr"}>
      <p id="project-types-heading" className="eyebrow project-types-section-eyebrow">
        {tx(t.projectTypes.label, lang)}
      </p>
    </header>
  );
}

function ProjectTypesStagePanel({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div className="project-types-panel max-w-3xl">
      <h3 className="project-types-panel-title">{title}</h3>
      <div className="project-types-panel-body">
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default function ProjectTypesPanorama() {
  const { lang, isAr, reducedMotion } = useSite();
  const stageSignature = useMemo(() => projectTypes.map((pt) => pt.id).join("|"), []);
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const moverRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const isArRef = useRef(isAr);
  isArRef.current = isAr;
  const panelCount = projectTypes.length;

  useLayoutEffect(() => {
    if (reducedMotion || panelCount <= 1) return;
    if (!sectionRef.current || !pinRef.current || !moverRef.current || !trackRef.current) return;

    let disposed = false;
    let ctx: { revert: () => void } | null = null;

    const resetMover = (gsap: Awaited<ReturnType<typeof getGsap>>["gsap"]) => {
      const mover = moverRef.current;
      if (!mover) return;
      gsap.killTweensOf(mover);
      gsap.set(mover, { clearProps: "transform" });
    };

    const setup = async () => {
      const { gsap } = await getGsap();
      if (disposed || !sectionRef.current || !pinRef.current || !moverRef.current || !trackRef.current) {
        return;
      }

      ctx?.revert();
      ctx = null;
      resetMover(gsap);

      await new Promise<void>((resolve) => {
        requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
      });
      if (disposed || !trackRef.current || !moverRef.current) return;

      const rtl = isArRef.current;

      ctx = gsap.context(() => {
        const getTravel = () => {
          const track = trackRef.current;
          if (!track) return 0;
          return Math.max(0, track.scrollWidth - window.innerWidth);
        };

        bindLocaleHorizontalScroll(gsap, moverRef.current!, getTravel, rtl, {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${horizontalScrollLength(panelCount)}`,
          pin: pinRef.current,
          pinSpacing: true,
          scrub: 0.85,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          fastScrollEnd: true,
        });
      }, sectionRef);

      requestAnimationFrame(() => {
        if (!disposed) void refreshScrollTriggersPreservingPosition();
      });
    };

    void setup();

    const onResize = () => {
      requestAnimationFrame(() => {
        if (!disposed) void setup();
      });
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("orientationchange", onResize);

    return () => {
      disposed = true;
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
      ctx?.revert();
      ctx = null;
      void getGsap().then(({ gsap }) => resetMover(gsap));
    };
  }, [reducedMotion, isAr, lang, stageSignature, panelCount]);

  if (reducedMotion) {
    return (
      <section
        id={sectionAnchors.projectTypes}
        className="project-types-section project-types-section--static surface-dark-brand"
        aria-labelledby="project-types-heading"
      >
        <ProjectTypesSectionHeader />
        {projectTypes.map((pt, i) => (
          <article
            key={pt.id}
            dir={isAr ? "rtl" : "ltr"}
            className="project-types-static-card"
          >
            <div className="project-types-static-media project-types-static-media--fullscreen">
              <BrandImage
                src={pt.image}
                alt={tx(pt.title, lang)}
                className="project-types-slide-image"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/20" />
              <div className="project-types-slide-overlay">
                <ProjectTypesStagePanel
                  title={tx(pt.title, lang)}
                  desc={tx(pt.desc, lang)}
                />
              </div>
            </div>
          </article>
        ))}
      </section>
    );
  }

  return (
    <section
      id={sectionAnchors.projectTypes}
      ref={sectionRef}
      className="project-types-section relative surface-dark-brand"
      aria-labelledby="project-types-heading"
      data-locale={lang}
    >
      <div ref={pinRef} dir="ltr" className="project-types-pin">
        <ProjectTypesSectionHeader />
        <div ref={moverRef} className="project-types-track-mover">
          <div
            key={lang}
            ref={trackRef}
            className={isAr ? "project-types-track project-types-track--rtl" : "project-types-track"}
          >
            {projectTypes.map((pt, i) => (
              <article
                key={pt.id}
                dir={isAr ? "rtl" : "ltr"}
                className="project-types-slide"
              >
                <BrandImage
                  src={pt.image}
                  alt={tx(pt.title, lang)}
                  priority={i < 2}
                  loading={i < 2 ? "eager" : "lazy"}
                  className="project-types-slide-image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/20" />
                <div className="project-types-slide-overlay">
                  <ProjectTypesStagePanel
                    title={tx(pt.title, lang)}
                    desc={tx(pt.desc, lang)}
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
