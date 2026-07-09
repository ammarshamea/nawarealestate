"use client";

type GsapBundle = {
  gsap: typeof import("gsap").gsap;
  ScrollTrigger: typeof import("gsap/ScrollTrigger").ScrollTrigger;
};

let gsapReady: Promise<GsapBundle> | null = null;

export async function getGsap(): Promise<GsapBundle> {
  if (!gsapReady) {
    gsapReady = (async () => {
      const gsapModule = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsapModule.gsap.registerPlugin(ScrollTrigger);
      return { gsap: gsapModule.gsap, ScrollTrigger };
    })();
  }
  return gsapReady;
}

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function isMobileViewport(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(max-width: 768px)").matches;
}
