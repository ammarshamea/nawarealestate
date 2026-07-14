"use client";

import { useLayoutEffect, useRef, type RefObject } from "react";
import { getGsap } from "@/lib/motion/gsapClient";
import {
  LOCALE_CHANGE_EVENT,
  refreshScrollTriggersPreservingPosition,
} from "@/lib/motion/scrollSync";

type GsapBundle = Awaited<ReturnType<typeof getGsap>>;

export type GsapScrollSetupContext = {
  gsap: GsapBundle["gsap"];
  ScrollTrigger: GsapBundle["ScrollTrigger"];
  section: HTMLElement;
};

type UseGsapScrollContextOptions = {
  enabled?: boolean;
  deps?: unknown[];
  resetElements?: RefObject<HTMLElement | null>[];
  setup: (ctx: GsapScrollSetupContext) => void;
};

export function useGsapScrollContext(
  sectionRef: RefObject<HTMLElement | null>,
  options: UseGsapScrollContextOptions,
) {
  const ctxRef = useRef<{ revert: () => void } | null>(null);
  const setupRef = useRef(options.setup);
  setupRef.current = options.setup;

  const { enabled = true, deps = [], resetElements = [] } = options;

  useLayoutEffect(() => {
    if (!enabled || !sectionRef.current) return;

    let disposed = false;

    const resetTransforms = (gsap: GsapBundle["gsap"]) => {
      resetElements.forEach((ref) => {
        const el = ref.current;
        if (!el) return;
        gsap.killTweensOf(el);
        gsap.set(el, { x: 0, clearProps: "transform" });
      });
    };

    const teardown = (gsap: GsapBundle["gsap"]) => {
      ctxRef.current?.revert();
      ctxRef.current = null;
      resetTransforms(gsap);
    };

    const runSetup = async () => {
      if (!sectionRef.current || disposed) return;

      const { gsap, ScrollTrigger } = await getGsap();
      if (disposed || !sectionRef.current) return;

      teardown(gsap);

      ctxRef.current = gsap.context(() => {
        setupRef.current({ gsap, ScrollTrigger, section: sectionRef.current! });
      }, sectionRef);

      requestAnimationFrame(() => {
        if (!disposed) void refreshScrollTriggersPreservingPosition();
      });
    };

    void runSetup();

    const onLayoutChange = () => {
      requestAnimationFrame(() => {
        if (!disposed) void runSetup();
      });
    };

    window.addEventListener("resize", onLayoutChange);
    window.addEventListener("orientationchange", onLayoutChange);
    window.addEventListener(LOCALE_CHANGE_EVENT, onLayoutChange);

    return () => {
      disposed = true;
      window.removeEventListener("resize", onLayoutChange);
      window.removeEventListener("orientationchange", onLayoutChange);
      window.removeEventListener(LOCALE_CHANGE_EVENT, onLayoutChange);
      void getGsap().then(({ gsap }) => teardown(gsap));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- deps passed via options.deps
  }, [enabled, sectionRef, ...deps]);
}

export function horizontalScrollLength(panelCount: number) {
  const h = window.innerHeight;
  return Math.max(1, panelCount - 1) * h * 1.12;
}
