import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import { LanguageContext, type Lang } from "./LanguageContext";
import { ko as koDict } from "./ko";

const STORAGE_KEY = "lang";

function getInitialLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "fr" || saved === "en" || saved === "ko") return saved;
  } catch {
    // localStorage indisponible (navigation privée, etc.)
  }
  const nav = navigator.language?.toLowerCase() ?? "";
  if (nav.startsWith("fr")) return "fr";
  if (nav.startsWith("ko")) return "ko";
  return "en";
}

function pick<T>(lang: Lang, fr: T, en: T, ko?: T): T {
  if (lang === "fr") return fr;
  if (lang === "en") return en;
  if (ko !== undefined) return ko;
  if (typeof en === "string") {
    const hit = koDict[en];
    if (hit !== undefined) return hit as T;
    if (import.meta.env.DEV) console.warn(`[i18n] traduction coréenne manquante : "${en}"`);
  }
  return en;
}

export default function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore
    }
  }, []);

  const value = useMemo(
    () => ({ lang, setLang, t: <T,>(fr: T, en: T, ko?: T) => pick(lang, fr, en, ko) }),
    [lang, setLang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
