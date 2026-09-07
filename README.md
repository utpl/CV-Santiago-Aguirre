# CV · Hermel Santiago Aguirre Montaño

Portafolio y currículum profesional de una sola página. Ingeniero en Sistemas
especializado en tecnología educativa: Canvas LMS, Moodle, automatización de
contenido y seguridad de la información.

## Stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS 3** con paleta institucional propia (navy `#004170` / dorado `#F2BF42`)
- **framer-motion** para las transiciones de entrada
- **lucide-react** para la iconografía
- Imagen Open Graph generada en tiempo de build con `next/og`

## Estructura

```
src/
  app/
    layout.tsx            metadata, fuentes, JSON-LD (schema.org/Person)
    page.tsx              composición de la página
    globals.css           capa base, componentes y estilos de impresión
    opengraph-image.tsx   imagen social generada dinámicamente
    robots.ts, sitemap.ts
  components/             secciones y piezas de UI
  lib/
    site.ts               datos de identidad y contacto
    data.ts               contenido del CV (experiencia, proyectos, stack…)
    types.ts              tipos compartidos
scripts/
  generar-cv-pdf.mjs      genera el PDF del CV desde HTML (Chromium)
public/
  FOTO.jpg
  cv-santiago-aguirre.pdf
```

Todo el contenido editable vive en `src/lib/data.ts` y `src/lib/site.ts`.
No hace falta tocar los componentes para actualizar el CV.

## Regenerar el PDF del CV

El PDF que descarga el botón "Descargar CV" se genera desde HTML con Chromium,
así que comparte tipografía y paleta con el sitio. Para regenerarlo tras editar
su contenido en `scripts/generar-cv-pdf.mjs`:

```bash
npm i -D playwright && npx playwright install chromium
node scripts/generar-cv-pdf.mjs
```

Sale en `public/cv-santiago-aguirre.pdf`, con texto seleccionable (legible por
los filtros automáticos de reclutamiento).

## Desarrollo

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build de producción
npm run lint
```

## Despliegue

Desplegado en Vercel desde la rama `main`. Cada push publica automáticamente.

Variable de entorno opcional:

| Variable               | Descripción                                              |
| ---------------------- | -------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | URL canónica del sitio (por defecto, la URL de producción de Vercel) |

## Licencia

Contenido personal. El código puede reutilizarse libremente como plantilla.
