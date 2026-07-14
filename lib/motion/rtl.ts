type GsapLike = {
  fromTo: (
    target: Element | null,
    fromVars: object,
    toVars: object,
  ) => unknown;
};

type ScrollTriggerConfig = Record<string, unknown>;

/** Arabic: start at first slide on the right, end on the left. English: opposite. */
export function bindLocaleHorizontalScroll(
  gsap: GsapLike,
  mover: HTMLElement,
  getTravel: () => number,
  isRtl: boolean,
  scrollTrigger: ScrollTriggerConfig,
) {
  const tweenVars = {
    ease: "none" as const,
    force3D: true,
    scrollTrigger,
  };

  if (isRtl) {
    return gsap.fromTo(mover, { x: () => -getTravel() }, { x: 0, ...tweenVars });
  }

  return gsap.fromTo(mover, { x: 0 }, { x: () => -getTravel(), ...tweenVars });
}

export function scrollMarginForNav(): string {
  return "var(--nav-height)";
}
