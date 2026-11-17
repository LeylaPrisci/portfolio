import { contenido } from "../i18n/contenido";
import { useIdioma } from "../i18n/useIdioma";
import { ProyectoMock } from "./ProyectoMock";

export function Proyectos() {
  const { idioma } = useIdioma();
  const proyectos = contenido.proyectos;

  return (
    <section id="proyectos">
      <div className="container">
        <h2 className="section-titulo">{proyectos.titulo[idioma]}</h2>
        <p className="section-subtitulo">{proyectos.subtitulo[idioma]}</p>

        <div className="proyectos-lista">
          {proyectos.items.map((proyecto) => (
            <div className="proyecto-card" key={proyecto.nombre}>
              <div className="proyecto-texto">
                <p className="proyecto-eyebrow">
                  {idioma === "es" ? "Proyecto" : "Project"}
                </p>
                <h3 className="proyecto-nombre">{proyecto.nombre}</h3>
                <p className="proyecto-descripcion">{proyecto.descripcion[idioma]}</p>
                {proyecto.stack.map((linea) => (
                  <p className="proyecto-stack" key={linea.etiqueta}>
                    <strong>{linea.etiqueta}</strong> — {linea.texto[idioma]}
                  </p>
                ))}
                <div className="proyecto-links">
                  {proyecto.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-secondary"
                    >
                      {link.label[idioma]}
                    </a>
                  ))}
                </div>
              </div>

              <div className="proyecto-visual-frame">
                {proyecto.visual.tipo === "imagen" ? (
                  <img
                    className="proyecto-visual-img"
                    src={proyecto.visual.src}
                    alt={proyecto.nombre}
                    loading="lazy"
                  />
                ) : (
                  <ProyectoMock Icono={proyecto.visual.Icono} />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
