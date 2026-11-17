import { contenido } from "../i18n/contenido";
import { useIdioma } from "../i18n/useIdioma";

export function Experiencia() {
  const { idioma } = useIdioma();
  const experiencia = contenido.experiencia;

  return (
    <section id="experiencia">
      <div className="container">
        <h2 className="section-titulo">{experiencia.titulo[idioma]}</h2>
        {experiencia.items.map((item) => (
          <div className="experiencia-item" key={item.empresa}>
            <div className="experiencia-meta">
              <strong>{item.empresa}</strong>
              <span>{item.periodo[idioma]}</span>
              <br />
              <span>{item.lugar}</span>
            </div>
            <div>
              <p className="experiencia-rol">{item.rol[idioma]}</p>
              <ul className="experiencia-logros">
                {item.logros[idioma].map((logro) => (
                  <li key={logro}>{logro}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
