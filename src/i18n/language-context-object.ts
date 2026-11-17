import { createContext } from "react";

export type Idioma = "es" | "en";

export interface LanguageContextValue {
  idioma: Idioma;
  cambiarIdioma: (idioma: Idioma) => void;
}

export const LanguageContext = createContext<LanguageContextValue | null>(null);
