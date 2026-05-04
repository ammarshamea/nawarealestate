"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Lang  = "en" | "ar";
export type Theme = "dark" | "light";

interface SiteCtx {
  lang:     Lang;
  theme:    Theme;
  isAr:     boolean;
  isDark:   boolean;
  setLang:  (l: Lang)  => void;
  setTheme: (t: Theme) => void;
}

const SiteContext = createContext<SiteCtx>({
  lang: "en", theme: "dark", isAr: false, isDark: true,
  setLang: () => {}, setTheme: () => {},
});

export function SiteProvider({ children }: { children: ReactNode }) {
  const [lang,  setLangState]  = useState<Lang>("en");
  const [theme, setThemeState] = useState<Theme>("dark");
  const [mounted, setMounted]  = useState(false);

  /* Hydrate from localStorage once on client */
  useEffect(() => {
    const l = localStorage.getItem("nawah-lang")  as Lang  | null;
    const t = localStorage.getItem("nawah-theme") as Theme | null;
    const resolvedLang  = l ?? "en";
    const resolvedTheme = t ?? "dark";
    setLangState(resolvedLang);
    setThemeState(resolvedTheme);
    applyLang(resolvedLang);
    applyTheme(resolvedTheme);
    setMounted(true);
  }, []);

  function applyLang(l: Lang) {
    const html = document.documentElement;
    html.lang = l;
    html.dir  = l === "ar" ? "rtl" : "ltr";
    html.classList.toggle("font-tajawal", l === "ar");
    html.classList.toggle("font-josefin", l === "en");
  }

  function applyTheme(t: Theme) {
    document.documentElement.setAttribute("data-theme", t);
  }

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("nawah-lang", l);
    applyLang(l);
  };

  const setTheme = (t: Theme) => {
    setThemeState(t);
    localStorage.setItem("nawah-theme", t);
    applyTheme(t);
  };

  /* Prevent flash before hydration */
  if (!mounted) return null;

  return (
    <SiteContext.Provider
      value={{
        lang, theme, isAr: lang === "ar", isDark: theme === "dark",
        setLang, setTheme,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
}

export const useSite = () => useContext(SiteContext);
