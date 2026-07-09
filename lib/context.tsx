"use client";

import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from "react";

export type Lang = "en" | "ar";

function applyLangToDocument(l: Lang) {
  const html = document.documentElement;
  html.lang = l;
  html.dir = l === "ar" ? "rtl" : "ltr";
  html.classList.toggle("font-tajawal", l === "ar");
  html.classList.toggle("font-josefin", l === "en");
}

interface SiteCtx {
  lang: Lang;
  isAr: boolean;
  /** @deprecated Brand uses fixed ivory/black surfaces */
  isDark: boolean;
  setLang: (l: Lang) => void;
  reducedMotion: boolean;
}

const SiteContext = createContext<SiteCtx>({
  lang: "ar",
  isAr: true,
  isDark: true,
  setLang: () => {},
  reducedMotion: false,
});

export function SiteProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ar");
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const stored = (localStorage.getItem("nawah-lang") as Lang | null) ?? "ar";
    setLangState(stored);
    applyLangToDocument(stored);

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);

    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    localStorage.setItem("nawah-lang", l);
    applyLangToDocument(l);
  }, []);

  return (
    <SiteContext.Provider value={{ lang, isAr: lang === "ar", isDark: true, setLang, reducedMotion }}>
      {children}
    </SiteContext.Provider>
  );
}

export const useSite = () => useContext(SiteContext);
