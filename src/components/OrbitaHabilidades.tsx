import { FaShieldHalved } from "react-icons/fa6";
import {
  SiNodedotjs,
  SiNestjs,
  SiTypescript,
  SiPython,
  SiSharp,
  SiPostgresql,
  SiMysql,
  SiDocker,
  SiGit,
  SiReact,
  SiJsonwebtokens,
} from "react-icons/si";

const ICONOS = [
  { Icono: SiNodedotjs, nombre: "Node.js", color: "#5FA04E" },
  { Icono: SiNestjs, nombre: "NestJS", color: "#E0234E" },
  { Icono: SiTypescript, nombre: "TypeScript", color: "#3178C6" },
  { Icono: SiReact, nombre: "React", color: "#61DAFB" },
  { Icono: SiPython, nombre: "Python", color: "#FFD43B" },
  { Icono: SiSharp, nombre: "C#", color: "#A179DC" },
  { Icono: SiPostgresql, nombre: "PostgreSQL", color: "#4169E1" },
  { Icono: SiMysql, nombre: "MySQL", color: "#4479A1" },
  { Icono: SiDocker, nombre: "Docker", color: "#2496ED" },
  { Icono: SiGit, nombre: "Git", color: "#F05032" },
  { Icono: SiJsonwebtokens, nombre: "JWT", color: "#D63AFF" },
];

/** Logos de las tecnologias que uso en orbita alrededor de un nucleo con
 * brillo (escudo: backend + ciberdefensa). El anillo entero gira despacio y
 * cada logo contragira a la misma velocidad para quedar siempre derecho -
 * tecnica clasica de "orbita" en CSS (3 niveles: posicion fija por angulo,
 * giro continuo del anillo, contragiro continuo del logo). */
export function OrbitaHabilidades() {
  const n = ICONOS.length;

  return (
    <div className="orbit-container" role="img" aria-label="Logos de tecnologias: Node.js, NestJS, TypeScript, React, Python, C#, PostgreSQL, MySQL, Docker, Git, JWT">
      <div className="orbit-core">
        <FaShieldHalved aria-hidden="true" />
      </div>
      <div className="orbit-ring">
        {ICONOS.map(({ Icono, nombre, color }, i) => {
          const angulo = (360 / n) * i;
          return (
            <div
              key={nombre}
              className="orbit-item"
              style={{ transform: `rotate(${angulo}deg) translateX(var(--orbit-radio)) rotate(${-angulo}deg)` }}
            >
              <div className="orbit-item-counter">
                <div className="orbit-item-badge" title={nombre} style={{ color }}>
                  <Icono aria-hidden="true" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
