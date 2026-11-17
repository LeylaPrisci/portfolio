import type { IconType } from "react-icons";

export interface ExperienciaItem {
  empresa: string;
  rol: Record<"es" | "en", string>;
  periodo: Record<"es" | "en", string>;
  lugar: string;
  logros: Record<"es" | "en", string[]>;
}

export interface EducacionItem {
  titulo: Record<"es" | "en", string>;
  institucion: string;
  periodo: Record<"es" | "en", string>;
  lugar: string;
}

export type HabilidadItem = string | Record<"es" | "en", string>;

export interface ProyectoLink {
  label: Record<"es" | "en", string>;
  url: string;
}

export interface ProyectoStackLinea {
  etiqueta: string;
  texto: Record<"es" | "en", string>;
}

export type ProyectoVisual = { tipo: "imagen"; src: string } | { tipo: "mock"; Icono: IconType };

export interface Proyecto {
  nombre: string;
  descripcion: Record<"es" | "en", string>;
  stack: ProyectoStackLinea[];
  links: ProyectoLink[];
  visual: ProyectoVisual;
}

export interface GrupoHabilidades {
  categoria: Record<"es" | "en", string>;
  items: HabilidadItem[];
}

export const contenido = {
  nav: {
    inicio: { es: "Inicio", en: "Home" },
    perfil: { es: "Perfil", en: "About" },
    experiencia: { es: "Experiencia", en: "Experience" },
    proyectos: { es: "Proyectos", en: "Projects" },
    educacion: { es: "Educación", en: "Education" },
    habilidades: { es: "Habilidades", en: "Skills" },
    contacto: { es: "Contacto", en: "Contact" },
  },

  hero: {
    nombre: "Leyla Gallo",
    saludo: { es: "¡Hola! Soy", en: "Hello! I'm" },
    estado: {
      es: "Disponible para nuevos desafíos",
      en: "Available for new opportunities",
    },
    rol: {
      es: "Desarrolladora Backend & Analista de Seguridad",
      en: "Backend Developer & Security Analyst",
    },
    tagline: {
      es: "REST APIs escalables, bases de datos relacionales y containerización — con foco en rendimiento, persistencia segura de datos y buenas prácticas de ciberdefensa.",
      en: "Scalable REST APIs, relational databases and containerization — focused on performance, secure data persistence and cyberdefense best practices.",
    },
    ubicacion: "San Miguel de Tucumán, Argentina",
    ctaProyectos: { es: "Ver proyectos", en: "View projects" },
    ctaContacto: { es: "Contactar", en: "Get in touch" },
    ctaCV: { es: "Descargar CV", en: "Download CV" },
  },

  cv: {
    es: { archivo: "/cv/Leyla-Gallo-CV-ES.pdf", nombreDescarga: "Leyla-Gallo-CV-ES.pdf" },
    en: { archivo: "/cv/Leyla-Gallo-CV-EN.pdf", nombreDescarga: "Leyla-Gallo-CV-EN.pdf" },
  },

  perfil: {
    titulo: { es: "Perfil profesional", en: "Professional profile" },
    texto: {
      es: "Desarrolladora Backend y Analista de Seguridad especializada en el diseño de REST APIs escalables, administración de bases de datos relacionales (PostgreSQL, MySQL) y containerización con Docker. Experiencia en todo el ciclo de vida de desarrollo de software (SDLC), optimización de consultas complejas (query tuning), autenticación segura y aplicación de buenas prácticas de arquitectura limpia. Uso activo de flujos de desarrollo asistidos por IA (Claude, Gemini) para debugging, revisión de código y documentación técnica. Enfoque prioritario en rendimiento de servidor, persistencia de datos segura y reducción de latencia en sistemas de alta demanda.",
      en: "Backend Developer and Security Analyst specialized in designing scalable REST APIs, administering relational databases (PostgreSQL, MySQL) and containerization with Docker. Experienced across the full software development lifecycle (SDLC), complex query optimization (query tuning), secure authentication and clean architecture best practices. Active use of AI-assisted development workflows (Claude, Gemini) for debugging, code review and technical documentation. Strong focus on server performance, secure data persistence and latency reduction in high-demand systems.",
    },
  },

  experiencia: {
    titulo: { es: "Experiencia laboral", en: "Work experience" },
    items: [
      {
        empresa: "Municipalidad de Yerba Buena",
        rol: { es: "Backend Developer", en: "Backend Developer" },
        periodo: { es: "2023 — Actualidad", en: "2023 — Present" },
        lugar: "Tucumán, Argentina",
        logros: {
          es: [
            "Diseñé y desarrollé arquitecturas backend basadas en REST APIs utilizando Node.js para sistemas de gestión pública, logrando una mejora del 20% en el tiempo de respuesta de endpoints críticos.",
            "Desarrollé y mantuve funcionalidades frontend con React y TypeScript, trabajando en conjunto con otro desarrollador frontend, incluyendo tareas de ajuste y mantenimiento sobre componentes existentes.",
            "Administré y optimicé bases de datos relacionales (PostgreSQL y MySQL), ejecutando modelado de esquemas, estrategias de indexación avanzada y resolución de cuellos de botella mediante query tuning.",
            "Estandaricé los entornos de desarrollo y pruebas mediante Docker y Docker Compose, garantizando el aislamiento de servicios multi-contenedor y reduciendo los tiempos de despliegue.",
            "Implementé esquemas de autenticación y autorización segura con JWT, integrando validación estricta de datos y estándares de código limpio dentro del SDLC.",
            "Documenté APIs REST con Swagger y Postman, facilitando la integración entre equipos de frontend y backend.",
            "Utilizo flujos de desarrollo asistidos por IA (Claude, Gemini) para debugging, revisión de código y documentación técnica, validando todo el resultado generado en cuanto a corrección y seguridad antes de entregarlo.",
          ],
          en: [
            "Designed and developed REST API-based backend architectures using Node.js for public sector management systems, achieving a 20% improvement in response time for critical endpoints.",
            "Developed and maintained frontend features with React and TypeScript, working alongside another frontend developer, including adjustments and maintenance of existing components.",
            "Administered and optimized relational databases (PostgreSQL and MySQL), performing schema modeling, advanced indexing strategies and bottleneck resolution through query tuning.",
            "Standardized development and testing environments using Docker and Docker Compose, ensuring multi-container service isolation and reducing deployment times.",
            "Implemented secure authentication and authorization schemes with JWT, integrating strict data validation and clean code standards within the SDLC.",
            "Documented REST APIs with Swagger and Postman, facilitating integration between frontend and backend teams.",
            "Use AI-assisted development workflows (Claude, Gemini) for debugging, code review and technical documentation, validating all generated output for correctness and security before delivery.",
          ],
        },
      },
    ] satisfies ExperienciaItem[],
  },

  proyectos: {
    titulo: { es: "Proyectos destacados", en: "Featured projects" },
    subtitulo: {
      es: "Sistemas reales, documentados y versionados en GitHub.",
      en: "Real systems, documented and version-controlled on GitHub.",
    },
    items: [
      {
        nombre: "Catastro",
        descripcion: {
          es: "Digitalización de los circuitos de trámites de obra de la Dirección de Catastro y Edificación: máquina de estados con reglas de negocio reales (visado y pago como eventos independientes que habilitan un expediente), roles profesionales habilitados, cálculo de montos parametrizado y documentación con reglas de vigencia propias. Incluye un panel de administración que consume la API.",
          en: "Digitization of the building-permit workflows for the Buildings & Cadastre Department: a state machine with real business rules (review and payment as independent events that jointly unlock a case file), licensed professional roles, parameterized fee calculation, and documents with their own validity rules. Includes an admin panel consuming the API.",
        },
        stack: [
          {
            etiqueta: "Backend",
            texto: {
              es: "NestJS, Prisma, PostgreSQL, JWT, Docker. REST API documentada con Swagger, cobertura de tests unitarios sobre la máquina de estados y las reglas de negocio.",
              en: "NestJS, Prisma, PostgreSQL, JWT, Docker. REST API documented with Swagger, unit test coverage over the state machine and business rules.",
            },
          },
          {
            etiqueta: "Frontend",
            texto: {
              es: "React, TypeScript, Vite. Panel de administración para gestionar profesionales, trámites, expedientes y personal interno, con roles y permisos reflejados en la UI.",
              en: "React, TypeScript, Vite. Admin panel to manage professionals, cases, case files and internal staff, with roles and permissions reflected in the UI.",
            },
          },
        ],
        links: [
          { label: { es: "Repositorio backend", en: "Backend repository" }, url: "https://github.com/LeylaPrisci/catastro-api" },
          { label: { es: "Repositorio frontend", en: "Frontend repository" }, url: "https://github.com/LeylaPrisci/catastro-frontend" },
        ],
        visual: { tipo: "imagen", src: "/proyectos/catastro-portada.png" },
      },
      {
        nombre: "Sabores del Jardín",
        descripcion: {
          es: "Plataforma de e-commerce para la venta de productos artesanales y tradicionales de Tucumán: catálogo de productos, autenticación segura con JWT, diseño responsive e integración con redes sociales y suscripción por email, pensada tanto para productores locales como para clientes.",
          en: "E-commerce platform for selling artisanal and traditional products from Tucumán: product catalog, secure JWT authentication, responsive design, and social media/email subscription integration, built to serve both local producers and customers.",
        },
        stack: [
          {
            etiqueta: "Backend",
            texto: {
              es: "Django, Django REST Framework, PostgreSQL, autenticación JWT.",
              en: "Django, Django REST Framework, PostgreSQL, JWT authentication.",
            },
          },
          {
            etiqueta: "Frontend",
            texto: {
              es: "Next.js, TypeScript, Tailwind CSS.",
              en: "Next.js, TypeScript, Tailwind CSS.",
            },
          },
        ],
        links: [
          { label: { es: "Repositorio", en: "Repository" }, url: "https://github.com/LeylaPrisci/Sabores-del-Jardin" },
        ],
        visual: { tipo: "imagen", src: "/proyectos/sabores-portada.png" },
      },
      {
        nombre: "Minimarket",
        descripcion: {
          es: "Aplicación de escritorio para la gestión de un minimarket: alta/baja/modificación de productos, control de stock con alertas de mínimo, registro de ventas y administración de usuarios por rol.",
          en: "Desktop application for managing a small market: product CRUD, stock control with minimum-threshold alerts, sales logging, and role-based user administration.",
        },
        stack: [
          {
            etiqueta: "Stack",
            texto: {
              es: "C#, SQL Server.",
              en: "C#, SQL Server.",
            },
          },
        ],
        links: [{ label: { es: "Repositorio", en: "Repository" }, url: "https://github.com/LeylaPrisci/minimarket" }],
        visual: { tipo: "imagen", src: "/proyectos/minimarket-portada.png" },
      },
      {
        nombre: "Barbería — Página Web",
        descripcion: {
          es: "Sitio web institucional para una barbería: catálogo de servicios con precios, galería de trabajos, formulario de contacto para turnos e integración con redes sociales.",
          en: "Institutional website for a barbershop: service catalog with pricing, work gallery, appointment contact form, and social media integration.",
        },
        stack: [
          {
            etiqueta: "Stack",
            texto: {
              es: "HTML5, CSS3, JavaScript.",
              en: "HTML5, CSS3, JavaScript.",
            },
          },
        ],
        links: [
          { label: { es: "Repositorio", en: "Repository" }, url: "https://github.com/LeylaPrisci/BarberiaPaginaWeb" },
        ],
        visual: { tipo: "imagen", src: "/proyectos/barberia-portada.png" },
      },
    ] satisfies Proyecto[] as Proyecto[],
  },

  educacion: {
    titulo: { es: "Educación", en: "Education" },
    items: [
      {
        titulo: { es: "Licenciatura en Ciberdefensa", en: "B.Sc. in Cyberdefense" },
        institucion: "Facultad de la Defensa Nacional (FADENA)",
        periodo: { es: "En curso", en: "In progress" },
        lugar: "Buenos Aires, Argentina (a distancia)",
      },
      {
        titulo: { es: "Tecnicatura Superior en Desarrollo de Software", en: "Associate Degree in Software Development" },
        institucion: "IES Instituto Superior Alfredo Coviello",
        periodo: { es: "2023 — 2025", en: "2023 — 2025" },
        lugar: "Tucumán, Argentina",
      },
      {
        titulo: { es: "Especialización Full Stack Python", en: "Full Stack Python Specialization" },
        institucion: "Programa Codo a Codo",
        periodo: { es: "2021 — 2022", en: "2021 — 2022" },
        lugar: "Buenos Aires, Argentina (a distancia)",
      },
    ] satisfies EducacionItem[],
  },

  habilidades: {
    titulo: { es: "Habilidades técnicas", en: "Technical skills" },
    grupos: [
      {
        categoria: { es: "Desarrollo backend & lenguajes", en: "Backend development & languages" },
        items: [
          "Node.js (Express)",
          "NestJS",
          "C# (.NET)",
          "Python",
          "JavaScript / TypeScript",
          "RESTful APIs",
          { es: "Arquitectura en capas / limpia", en: "Layered / clean architecture" },
          "JWT",
          "Swagger / Postman",
        ],
      },
      {
        categoria: { es: "Bases de datos & DBA", en: "Databases & DBA" },
        items: [
          "PostgreSQL",
          "MySQL",
          { es: "Modelado relacional", en: "Relational modeling" },
          "Query tuning",
          { es: "Estrategias de indexación", en: "Indexing strategies" },
          { es: "Migración de esquemas", en: "Schema migrations" },
        ],
      },
      {
        categoria: { es: "DevOps & herramientas", en: "DevOps & tooling" },
        items: ["Docker", "Docker Compose", "Git", "GitHub", "Bitbucket", "CI/CD"],
      },
      {
        categoria: { es: "Seguridad & análisis", en: "Security & analysis" },
        items: [
          { es: "Evaluación y gestión de riesgos", en: "Risk assessment & management" },
          { es: "Prácticas de código seguro", en: "Secure coding practices" },
          { es: "Control de acceso (RBAC)", en: "Access control (RBAC)" },
          { es: "Autenticación y autorización", en: "Authentication & authorization" },
        ],
      },
      {
        categoria: { es: "Desarrollo asistido por IA", en: "AI-assisted development" },
        items: ["Claude", "Gemini"],
      },
    ] satisfies GrupoHabilidades[],
  },

  contacto: {
    titulo: { es: "Contacto", en: "Contact" },
    texto: {
      es: "¿Querés charlar sobre una oportunidad? Escribime.",
      en: "Want to talk about an opportunity? Reach out.",
    },
    email: "leylapgallo@gmail.com",
    telefono: "+54 381 472-3690",
    linkedin: "https://linkedin.com/in/leylapriscilagallo",
    github: "https://github.com/leylaprisci",
    ubicacion: "San Miguel de Tucumán, Argentina",
  },

  footer: {
    derechos: { es: "Todos los derechos reservados.", en: "All rights reserved." },
  },
};
