import { contenido } from "../i18n/contenido";
import { useIdioma } from "../i18n/useIdioma";
import { AvatarDev } from "./AvatarDev";

export function Hero() {
  const { idioma } = useIdioma();
  const hero = contenido.hero;
  const cv = contenido.cv[idioma];

  return (
    <section id="inicio" style={{ borderTop: "none" }}>
      <div className="container">
        <div className="hero-frame">
          <span className="hero-corner hero-corner--tl" aria-hidden="true" />
          <span className="hero-corner hero-corner--tr" aria-hidden="true" />
          <span className="hero-corner hero-corner--bl" aria-hidden="true" />
          <span className="hero-corner hero-corner--br" aria-hidden="true" />

          <div className="hero-layout">
            <AvatarDev />

            <div className="hero-contenido">
              <div className="hero-status-badge">
                <span className="hero-status-dot" aria-hidden="true" />
                {hero.estado[idioma]}
              </div>

              <p className="hero-eyebrow">{"root@leyla:~$ whoami"}</p>
              <h1>
                {hero.saludo[idioma]} <span className="hero-nombre-destacado">{hero.nombre}</span>
              </h1>
              <p className="hero-rol">{hero.rol[idioma]}</p>
              <p className="hero-tagline">{hero.tagline[idioma]}</p>
              <p className="hero-ubicacion">{hero.ubicacion}</p>
              <div className="hero-cta">
                <a href="#proyectos" className="btn btn-primary">
                  {hero.ctaProyectos[idioma]}
                </a>
                <a href="#contacto" className="btn btn-secondary">
                  {hero.ctaContacto[idioma]}
                </a>
                <a href={cv.archivo} download={cv.nombreDescarga} className="btn btn-secondary">
                  {hero.ctaCV[idioma]}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
