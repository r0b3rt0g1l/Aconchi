# CLAUDE.md — Portal Municipal de Aconchi

Memoria de trabajo para Claude Code: contexto, reglas duras y estado actual del
proyecto. Léelo antes de tocar el repo.

## Qué es
Sitio oficial del **H. Ayuntamiento de Aconchi, Sonora** (administración 2024-2027):
portal institucional público con gobierno, transparencia, turismo, noticias y servicios
al ciudadano. Construido sobre `plantilla-municipal`, una plantilla reutilizable que se
parametriza por municipio (`lib/municipalConfig.js`). Desarrollado por Northa Digital.

> Migrado desde un demo estático HTML/CSS/JS ("generación 0") a la arquitectura base v2.
> Respaldo del demo: `~/Developer/Aconchi-demo-backup-20260629` + tag git
> `pre-migracion-base-baviacora`.

## Stack
- **Next.js 16** (App Router) · **React 19** · **Tailwind CSS 4** (tokens en `@theme`,
  `app/globals.css`).
- UI: `react-aria-components`, `@radix-ui/*`, `framer-motion`, `embla-carousel`,
  `lucide-react`. Imágenes: `next-cloudinary` + `sharp`.
- **Capa de datos tipada en TypeScript**: `lib/content/` (`cms.ts`, `index.ts`,
  `types.ts`). El resto es `.js`/`.jsx`; **los módulos nuevos van en TypeScript**.
- Scripts: `npm run dev | build | start | lint | typecheck` (`tsc --noEmit`).

## Conexión al CMS — punto ÚNICO
Todo el contenido dinámico entra por **`lib/content/`**. El único archivo que habla con
el backend es **`lib/content/cms.ts`**:
- Lee `NEXT_PUBLIC_API_URL` (base) y `NEXT_PUBLIC_MUNICIPIO_SLUG` (slug `aconchi`).
- Arma `${API_URL}/api/municipios/${SLUG}/<recurso>` (recursos: `hero`, `noticias`,
  `imagenes`, `documentos`, `sevac`, `funcionarios`, `portada-historia`).
- `fetch` con timeout **30s** (`AbortController`) e ISR `next: { revalidate: 60 }`.
- Las páginas consumen SOLO `@/lib/content` (index.ts), nunca `cms.ts` directo.
- ⚠️ `NEXT_PUBLIC_*` se **hornea en build time**: cambiar las vars en Vercel exige un
  **rebuild**, no basta redeploy del artefacto viejo.

### Patrón de fallback estático (tri-state)
Cada getter devuelve:
- **`null`** → sin API / error de red / respuesta inválida → cae al **fallback estático**
  del repo (`lib/*.js`: `cabildo.js`, `noticias.js`, `heroSlides`, …).
- **`[]`** → CMS OK pero sin items activos → el consumidor decide (p. ej. el hero NO
  muestra nada, para no exponer slides hardcoded de la plantilla).
- **`[...]`** → datos reales del CMS.

El **cabildo de Aconchi viene del CMS** (recurso `funcionarios`); `lib/cabildo.js` solo
trae placeholders `[PENDIENTE]` como fallback ("Por designar" en la UI).

## Regla de privacidad DURA — cero contacto directo
- **Prohibido exponer contacto directo**: nada de `mailto:` ni `tel:` en el código fuente
  ni en el build/dist. Las únicas menciones en `src` son comentarios que explican la
  política (`components/gobierno/PresidenteCard.jsx`, `RegidorCard.jsx`).
- Todo contacto va por **formulario/modal** (Web3Forms): `app/contacto/` y
  `app/transparencia/informacion-publica/`.
- `municipalConfig.contacto` guarda teléfono/correo institucionales como **dato**, pero la
  UI NO los renderiza como enlaces de contacto.
- El **JSON-LD** (`lib/jsonLd.ts → governmentOrganizationLd`) omite teléfono y correo a
  propósito.
- Nunca pongas datos personales (teléfonos/correos particulares) en el contenido.

## Parametrización por municipio
`lib/municipalConfig.js` es la fuente única de identidad y datos: `identidad`, `datos`,
`contacto`, `redes`, `enlacesExternos`, **`paleta`**, `servicios`. Regla de oro: **solo
datos CONFIRMADOS**; lo no confirmado se queda en `null`/`''` con marca `<<PENDIENTE>>` —
**no se inventa**.

## Color institucional — paleta blanco/cobre
Paleta estándar de la flota. Los nombres `--color-guinda*` se **heredan de la plantilla**;
los valores reales son carbón/cobre sobre fondo blanco:
- `--color-guinda: #23292E` (carbón), `-deep: #15191D`, `-soft: #3A434B`; cobre
  `--color-dorado: #B5732E`, `-700: #7A4E1F` (texto cobre AA sobre claro).
- CTA `--color-cta-bg: #9C5E22` / hover `#B5732E`; `--color-bg: #FFFFFF`,
  `--color-surface: #FAFAF8` (blanco-hueso para secciones alternas).
- Definida en `app/globals.css` (`@theme`) y espejada en `municipalConfig.paleta`.
- Tipografía: **Inter** (sin serifas). Banners internos en blanco/cobre (PageHeader, hubs);
  `BannerHero`/`NoticiaHero` condicionales (claro sin foto / hero de foto con imagen).

## Convenciones
- **TypeScript** para módulos nuevos (sin `any` salvo `RawCmsItem`).
- **Accesibilidad WCAG 2.1 AA**: labels, foco visible, contraste, `prefers-reduced-motion`,
  `alt` (`react-aria-components`).
- **Rendimiento**: Lighthouse ≥ 95; LCP del hero cuidado; `next/image` calidades `[75,85,90]`.
- **SEO**: `GovernmentOrganization` site-wide en `app/layout.js`; `BreadcrumbList` por página.
- Diseño: color/tipografía/espaciado SOLO desde tokens `@theme`, nunca valores sueltos.

## Estado actual (jun 2026)
- ✅ Migrado a la arquitectura base v2 (clon fresco de Baviácora `feat/info-importante`):
  capa `lib/content`, route group `(con-footer)`, paleta blanco/cobre, JSON-LD, privacidad.
- ✅ Datos de Aconchi: identidad + datos INEGI (superficie 358.74 km², población 2,563,
  8 comunidades, colindancias, hidrografía), historia e hitos verificados, 2 atractivos
  (aguas termales El Agua Caliente, templo de San Pedro y San Pablo), transparencia estatal
  (PET Sonora id 1094).
- ⏳ **Pendientes externos** (no de código, los coordina Roberto):
  - **Alta del slug `aconchi` en el backend/Supabase** (hoy `/api/municipios/aconchi` da 404).
  - **Proyecto + env vars en Vercel** (`NEXT_PUBLIC_API_URL`, `NEXT_PUBLIC_MUNICIPIO_SLUG=aconchi`).
  - **Escudo** descargado a `public/escudo-baviacora-hd.png` (nombre base reutilizado).
  - Fotos reales del municipio; dominio; Web3Forms.
- ⏳ Datos `<<PENDIENTE>>` en `municipalConfig`: lema, clima, actividades económicas,
  contacto, densidad/IDH — entran cuando se confirmen.

## Backend / admin (repos hermanos)
- **Backend CMS**: Express + Prisma + PostgreSQL (Supabase), **multi-tenant por slug**,
  endpoints `/api/municipios/:slug/<recurso>`. Hospedado en Render.
- **Admin**: `cms-admin` (Next.js), un municipio por sesión; el personal del ayuntamiento
  carga ahí el contenido.
- ⚠️ Render free duerme tras inactividad: el primer fetch tras dormir puede acercarse al
  timeout de 30s (riesgo de fallback puntual en ISR).
