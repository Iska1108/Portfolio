import { createContext, useContext } from "react";

export type Lang = "fr" | "en" | "ko";

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  /** Retourne la version FR, EN ou KO selon la langue active (KO : 3e argument, sinon dictionnaire ko.ts) */
  t: <T>(fr: T, en: T, ko?: T) => T;
};

export const LanguageContext = createContext<LanguageContextValue | null>(null);

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage doit être utilisé dans un <LanguageProvider>");
  return ctx;
}
