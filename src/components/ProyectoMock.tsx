import type { IconType } from "react-icons";

/** Mockup generico de ventana de navegador (SVG a mano, sin imagen externa)
 * para proyectos sin una instancia corriendo para capturar - se distingue
 * claramente de una captura real (no pretende serlo), con un icono grande
 * del rubro del proyecto adentro. */
export function ProyectoMock({ Icono }: { Icono: IconType }) {
  return (
    <div className="proyecto-mock">
      <div className="proyecto-mock-barra">
        <span />
        <span />
        <span />
      </div>
      <div className="proyecto-mock-cuerpo">
        <Icono aria-hidden="true" />
        <div className="proyecto-mock-linea proyecto-mock-linea--larga" />
        <div className="proyecto-mock-linea proyecto-mock-linea--corta" />
      </div>
    </div>
  );
}
