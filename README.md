# portfolio-site

Sitio de portfolio personal de Leyla Gallo (Backend Developer & Security Analyst), bilingüe (ES/EN).

**Stack:** React 19 · TypeScript · Vite.

## Contenido

Sitio de una sola página con las secciones: Inicio, Perfil profesional, Experiencia laboral, Proyectos destacados (Catastro, Sabores del Jardín, Minimarket, Barbería), Educación, Habilidades técnicas y Contacto. Todo el texto vive en `src/i18n/contenido.ts` (diccionario `{ es, en }` por campo) — para actualizar el contenido del sitio (nueva experiencia, otro proyecto, etc.) se edita ese archivo, no los componentes.

Cada proyecto tiene un `visual` (`{tipo:"imagen", src}` para una captura real en `public/proyectos/`, o `{tipo:"mock", Icono}` para un mockup genérico vía `ProyectoMock.tsx` cuando no hay una instancia corriendo para capturar). La sección de Habilidades muestra primero una órbita de logos reales (`react-icons`, componente `OrbitaHabilidades.tsx`) de las tecnologías principales, y debajo el detalle completo en tags de texto.

El selector de idioma (`src/i18n/LanguageContext.tsx` + `useIdioma.ts`) persiste la elección en `localStorage` y, si no hay nada guardado, arranca según el idioma del navegador (`navigator.language`).

El botón "Descargar CV" del Hero sirve el PDF correspondiente al idioma activo (`public/cv/Leyla-Gallo-CV-ES.pdf` / `-EN.pdf`). Para actualizar el CV, reemplazar esos dos archivos manteniendo el mismo nombre.

## Desarrollo

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Genera `dist/` (estático, sin servidor) — se puede desplegar en Vercel, Netlify, GitHub Pages o cualquier hosting estático conectando este repo.

## Pendiente

- Deploy real (Vercel/Netlify) con el repo conectado.
- Sumar los proyectos de DevOps y ciberdefensa (planeados sobre el mismo backend de Catastro) a la sección "Proyecto destacado" cuando estén listos.
