import { contenido } from "../i18n/contenido";
import { useIdioma } from "../i18n/useIdioma";

export function Header() {
  const { idioma, cambiarIdioma } = useIdioma();
  const nav = contenido.nav;

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <a href="#inicio" className="site-logo">
          leyla<span>.</span>gallo
        </a>
        <nav className="site-nav">
          <a href="#perfil">{nav.perfil[idioma]}</a>
          <a href="#experiencia">{nav.experiencia[idioma]}</a>
          <a href="#proyectos">{nav.proyectos[idioma]}</a>
          <a href="#educacion">{nav.educacion[idioma]}</a>
          <a href="#habilidades">{nav.habilidades[idioma]}</a>
          <a href="#contacto">{nav.contacto[idioma]}</a>
        </nav>
        <div className="lang-toggle">
          <button
            type="button"
            className={idioma === "es" ? "activo" : ""}
            onClick={() => cambiarIdioma("es")}
            aria-pressed={idioma === "es"}
          >
            ES
          </button>
          <button
            type="button"
            className={idioma === "en" ? "activo" : ""}
            onClick={() => cambiarIdioma("en")}
            aria-pressed={idioma === "en"}
          >
            EN
          </button>
        </div>
      </div>
    </header>
  );
}
