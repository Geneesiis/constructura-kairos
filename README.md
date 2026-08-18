<div align="center">

# Constructura Kairos

**Plantilla profesional y ligera para empresas de construcción, diseño y arquitectura**

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-Bundler-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38BDF8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Cloudflare Pages](https://img.shields.io/badge/Deploy-Cloudflare%20Pages-F38020?logo=cloudflare&logoColor=white)](https://pages.cloudflare.com/)
[![License: MIT](https://img.shields.io/badge/Licencia-MIT-green.svg)](#licencia)

[Demo en vivo](https://constructorakairos.cl/) · [Reportar un problema](#contacto-y-soporte) · [Cómo contribuir](#cómo-contribuir)

</div>

---

## Tabla de contenidos

- [Pitch comercial](#pitch-comercial)
- [Resumen ejecutivo](#resumen-ejecutivo)
- [Características principales](#características-principales)
- [Tecnologías y dependencias](#tecnologías-y-dependencias-principales)
- [Requisitos del entorno](#requisitos-del-entorno)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Instalación local](#instalación-local--paso-a-paso)
- [Guía de diseño](#guía-de-diseño-rápida)
- [Despliegue en Cloudflare Pages](#despliegue-en-cloudflare-pages)
- [Checklist de despliegue](#checklist-de-despliegue-mínimo)
- [Buenas prácticas](#buenas-prácticas-y-recomendaciones)
- [Cómo contribuir](#cómo-contribuir)
- [Contacto y soporte](#contacto-y-soporte)
- [Licencia](#licencia)

---

## Pitch comercial

Constructura Kairos es una plantilla profesional y ligera para empresas de construcción, diseño y arquitectos que necesitan una presentación online moderna y rápida. Destaca por su rendimiento, estructura modular y facilidad de despliegue.

🔗 **Sitio en producción:** [constructorakairos.cl](https://constructorakairos.cl/)

## Resumen ejecutivo

| | |
|---|---|
| **Objetivo** | Presentar servicios, proyectos y facilitar el contacto comercial. |
| **Público objetivo** | Empresas de construcción, estudios de arquitectura, contratistas y diseñadores. |
| **Propuesta de valor** | Despliegue rápido, mantenimiento sencillo y aspecto profesional optimizado para conversiones. |

## Características principales

- ✅ Diseño responsivo y navegación accesible.
- ✅ Páginas: Inicio, Servicios, Proyectos, Contacto y Página 404.
- ✅ SEO básico: títulos dinámicos con `react-helmet-async`.
- ✅ Enrutamiento con `react-router-dom` y componentes reutilizables.

## Tecnologías y dependencias principales

| Categoría | Tecnología |
|---|---|
| Runtime | Node.js (≥ 18 recomendado) |
| Framework | React 19 (`react`, `react-dom`) |
| Bundler | Vite (`vite`, `@vitejs/plugin-react`) |
| Estilos | Tailwind CSS (`tailwindcss`, `@tailwindcss/vite`, `postcss`, `autoprefixer`) |
| UI / Iconos | `lucide-react` |
| SEO | `react-helmet-async` |
| Enrutado | `react-router-dom` |
| Desarrollo | `oxlint`, tipos de React y herramientas de construcción |

## Requisitos del entorno

- Node.js LTS (18+ recomendado)
- npm o yarn

## Estructura del proyecto

```
constructura-kairos/
├── index.html
├── public/
│   └── _redirects
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── pages/          # Home, Services, Projects, Contact, NotFound
│   ├── components/     # Componentes atómicos reutilizables
│   └── constants/      # brand.js y otras constantes del proyecto
```

## Instalación local — paso a paso

```bash
git clone <url-del-repositorio>
cd constructura-kairos
npm install
# o: yarn install
```

**Desarrollo:**
```bash
npm run dev
# o: yarn dev
```

**Construir para producción:**
```bash
npm run build
npm run preview
```

## Guía de diseño (rápida)

- **Paleta:** usar colores corporativos coherentes en `src/constants/brand.js`.
- **Tipografía:** mantener jerarquía clara (H1, H2, H3) y tamaños responsivos.
- **Componentes:** crear componentes atómicos reutilizables en `src/components`.
- **Imágenes:** optimizar y alojar en `public/img` o CDN.

## Despliegue en Cloudflare Pages

1. Conecta el repositorio en el panel de **Cloudflare Pages** (Workers & Pages → Create → Pages → Connect to Git).
2. Configura el build:
   - **Comando de build:** `npm run build`
   - **Directorio de salida:** `dist`
   - **Versión de Node:** 18 o superior (variable de entorno `NODE_VERSION`).
3. Asegúrate de que `public/_redirects` contenga la regla SPA:
   ```
   /* /index.html 200
   ```
   Cloudflare Pages copia automáticamente este archivo a `dist/` durante el build.
4. Si el proyecto incorpora servicios externos (formulario de contacto, analytics, etc.), define las variables de entorno en **Settings → Environment variables** del proyecto en Cloudflare Pages.
5. Cada push a la rama de producción dispara un nuevo deploy automático; las ramas de feature generan *preview deployments* con URL propia.

Alternativa vía CLI (opcional):
```bash
npm install -g wrangler
wrangler pages deploy dist
```

## Checklist de despliegue (mínimo)

- [ ] Ejecutar `npm run build` y verificar `dist/`.
- [ ] Probar `npm run preview` localmente.
- [ ] Configurar `public/_redirects` con `/* /index.html 200` para SPA.
- [ ] Conectar el repositorio a Cloudflare Pages (o subir `dist/` manualmente).
- [ ] Revisar y configurar variables de entorno si se incorporan servicios externos.
- [ ] Verificar el dominio personalizado y certificado SSL en Cloudflare.

## Buenas prácticas y recomendaciones

- Añadir tests simples para componentes críticos.
- Usar Prettier/eslint si se integra TypeScript posteriormente.
- Revisar accesibilidad (contrastes y etiquetas ARIA).

## Cómo contribuir

1. Abre un *issue* describiendo el cambio o mejora.
2. Crea una rama: `feature/<descripcion>`.
3. Envía un *pull request* con descripción clara y capturas si aplica.

## Contacto y soporte

Usa la sección de Contacto del sitio en [constructorakairos.cl](https://constructorakairos.cl/) o abre un *issue* en el repositorio.

## Licencia

Distribuido bajo licencia **MIT**. Ajustar según la política de la organización si corresponde.
