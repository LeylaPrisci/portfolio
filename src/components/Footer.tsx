import { contenido } from "../i18n/contenido";
import { useIdioma } from "../i18n/useIdioma";

const anio = new Date().getFullYear();

export function Footer() {
  const { idioma } = useIdioma();

  return (
    <footer className="site-footer">
      <p>
        © {anio} Leyla Gallo — {contenido.footer.derechos[idioma]}
      </p>
    </footer>
  );
}
