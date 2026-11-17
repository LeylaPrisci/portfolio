import { contenido } from "../i18n/contenido";
import { useIdioma } from "../i18n/useIdioma";

export function Perfil() {
  const { idioma } = useIdioma();
  const perfil = contenido.perfil;

  return (
    <section id="perfil">
      <div className="container">
        <h2 className="section-titulo">{perfil.titulo[idioma]}</h2>
        <p className="perfil-texto">{perfil.texto[idioma]}</p>
      </div>
    </section>
  );
}
