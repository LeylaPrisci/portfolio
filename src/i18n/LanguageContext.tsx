import { useEffect, useState, type ReactNode } from "react";
import { LanguageContext, type Idioma } from "./language-context-object";

function idiomaGuardado(): Idioma {
  try {
    const guardado = localStorage.getItem("portfolio_idioma");
    if (guardado === "es" || guardado === "en") return guardado;
  } catch {
    // localStorage puede fallar (privado/bloqueado) - usar el default
  }
  return navigator.language?.toLowerCase().startsWith("en") ? "en" : "es";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [idioma, setIdioma] = useState<Idioma>(idiomaGuardado);

  useEffect(() => {
    document.documentElement.lang = idioma;
    try {
      localStorage.setItem("portfolio_idioma", idioma);
    } catch {
      // ignorar si no se puede persistir
    }
  }, [idioma]);

  return (
    <LanguageContext.Provider value={{ idioma, cambiarIdioma: setIdioma }}>{children}</LanguageContext.Provider>
  );
}
