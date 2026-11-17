import { contenido, type HabilidadItem } from "../i18n/contenido";
import { useIdioma } from "../i18n/useIdioma";
import type { Idioma } from "../i18n/language-context-object";
import { OrbitaHabilidades } from "./OrbitaHabilidades";

function textoItem(item: HabilidadItem, idioma: Idioma) {
  return typeof item === "string" ? item : item[idioma];
}

export function Habilidades() {
  const { idioma } = useIdioma();
  const habilidades = contenido.habilidades;

  return (
    <section id="habilidades">
      <div className="container">
        <h2 className="section-titulo">{habilidades.titulo[idioma]}</h2>

        <OrbitaHabilidades />

        <p className="habilidades-detalle-label">
          {idioma === "es" ? "Detalle completo" : "Full breakdown"}
        </p>
        <div className="habilidades-grid">
          {habilidades.grupos.map((grupo) => (
            <div key={grupo.categoria.es}>
              <p className="habilidades-categoria">{grupo.categoria[idioma]}</p>
              <div className="habilidades-tags">
                {grupo.items.map((item) => (
                  <span className="habilidad-tag" key={typeof item === "string" ? item : item.es}>
                    {textoItem(item, idioma)}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
