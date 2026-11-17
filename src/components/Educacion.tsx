import { contenido } from "../i18n/contenido";
import { useIdioma } from "../i18n/useIdioma";

export function Educacion() {
  const { idioma } = useIdioma();
  const educacion = contenido.educacion;

  return (
    <section id="educacion">
      <div className="container">
        <h2 className="section-titulo">{educacion.titulo[idioma]}</h2>
        {educacion.items.map((item) => (
          <div className="educacion-item" key={item.institucion}>
            <div>
              <p className="educacion-titulo">{item.titulo[idioma]}</p>
              <p className="educacion-institucion">
                {item.institucion} · {item.lugar}
              </p>
            </div>
            <span className="educacion-periodo">{item.periodo[idioma]}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
