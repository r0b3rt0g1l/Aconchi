# Municipio de Aconchi, Sonora

Sitio oficial del **H. Ayuntamiento de Aconchi, Sonora**. Administración 2024-2027.
Construido sobre `plantilla-municipal` (Next.js App Router, React 19, Tailwind CSS 4).

## 🚀 Desarrollo local

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

## 🔧 Variables de entorno

```bash
cp .env.example .env.local
```

- `NEXT_PUBLIC_MUNICIPIO_SLUG=aconchi` — slug para los endpoints del CMS.
- `NEXT_PUBLIC_SITE_URL` — URL canónica (sitemap, robots, SEO).
- `NEXT_PUBLIC_API_URL` — backend CMS (opcional; vacío = solo fallbacks estáticos).
- `WEB3FORMS_ACCESS_KEY` / `NEXT_PUBLIC_WEB3FORMS_KEY` — endpoint de formularios.

## 📌 Estado de los datos

- **Confirmado:** identidad, datos INEGI (superficie, población, altitudes,
  colindancias), historia e hitos verificados, atractivos (aguas termales El Agua
  Caliente, templo de San Pedro y San Pablo), paleta blanco/cobre, transparencia
  estatal (PET Sonora, id 1094).
- **Por CMS:** cabildo/funcionarios, hero, noticias, documentos, SEvAC.
- **Pendiente (no inventar):** lema, clima, actividades económicas, contacto,
  densidad/IDH, fotos reales del municipio.

Respaldo del demo estático anterior: `~/Developer/Aconchi-demo-backup-20260629`
y tag git `pre-migracion-base-baviacora`.

## 📚 Stack

Next.js 16 (App Router) · React 19 · Tailwind CSS 4 · react-aria-components ·
@radix-ui · framer-motion · embla-carousel · next-cloudinary + sharp.
