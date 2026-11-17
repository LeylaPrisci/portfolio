import { contenido } from "../i18n/contenido";
import { useIdioma } from "../i18n/useIdioma";

export function Contacto() {
  const { idioma } = useIdioma();
  const contacto = contenido.contacto;

  return (
    <section id="contacto">
      <div className="container">
        <h2 className="section-titulo">{contacto.titulo[idioma]}</h2>
        <p className="contacto-texto">{contacto.texto[idioma]}</p>
        <div className="contacto-lista">
          <div className="contacto-item">
            <span className="label">Email</span>
            <a href={`mailto:${contacto.email}`}>{contacto.email}</a>
          </div>
          <div className="contacto-item">
            <span className="label">{idioma === "es" ? "Teléfono" : "Phone"}</span>
            <span>{contacto.telefono}</span>
          </div>
          <div className="contacto-item">
            <span className="label">LinkedIn</span>
            <a href={contacto.linkedin} target="_blank" rel="noreferrer">
              {contacto.linkedin.replace("https://", "")}
            </a>
          </div>
          <div className="contacto-item">
            <span className="label">GitHub</span>
            <a href={contacto.github} target="_blank" rel="noreferrer">
              {contacto.github.replace("https://", "")}
            </a>
          </div>
          <div className="contacto-item">
            <span className="label">{idioma === "es" ? "Ubicación" : "Location"}</span>
            <span>{contacto.ubicacion}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
