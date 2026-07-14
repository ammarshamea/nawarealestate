export const LOCALE_CHANGE_EVENT = "nawa:locale-change";

export function notifyLocaleChange() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(LOCALE_CHANGE_EVENT));
}

export async function refreshScrollTriggersPreservingPosition() {
  if (typeof window === "undefined") return;

  const scrollY = window.scrollY;
  const { ScrollTrigger } = await import("gsap/ScrollTrigger");
  ScrollTrigger.refresh(true);

  if (scrollY > 0) {
    window.scrollTo(0, scrollY);
  }
}
