import { useContext } from "react";
import { LanguageContext } from "./language-context-object";

export function useIdioma() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useIdioma debe usarse dentro de LanguageProvider");
  return ctx;
}
