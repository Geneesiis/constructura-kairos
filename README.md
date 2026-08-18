# Constructura Kairos

**Pitch comercial:** Constructura Kairos es una plantilla profesional y ligera para empresas de construcción, diseño y arquitectos que necesitan una presentación online moderna y rápida. Destaca por su rendimiento, estructura modular y facilidad de despliegue.

**Resumen ejecutivo:**
- Objetivo: presentar servicios, proyectos y facilitar el contacto comercial.
- Público objetivo: empresas de construcción, estudios de arquitectura, contratistas y diseñadores.
- Valor: despliegue rápido, mantenimiento sencillo y aspecto profesional optimizado para conversiones.

**Características principales:**
- Diseño responsivo y navegación accesible.
- Páginas: Inicio, Servicios, Proyectos, Contacto y Página 404.
- SEO básico: títulos dinámicos con `react-helmet-async`.
- Enrutamiento con `react-router-dom` y componentes reutilizables.

**Tecnologías y dependencias principales:**
- Runtime: Node.js (recomendado >= 18)
- Framework: React 19 (`react`, `react-dom`)
- Bundler: Vite (`vite`, `@vitejs/plugin-react`)
- Estilos: Tailwind CSS (`tailwindcss`, `@tailwindcss/vite`, `postcss`, `autoprefixer`)
- UI / Iconos: `lucide-react`
- SEO: `react-helmet-async`
- Enrutado: `react-router-dom`

(Dependencias de desarrollo incluidas: `oxlint`, tipos de React y herramientas de construcción.)

**Requisitos del entorno:**
- Node.js LTS (18+ recomendado)
- npm o yarn

**Estructura del proyecto (resumen):**
- [index.html](index.html)
- [src/main.jsx](src/main.jsx)
- [src/App.jsx](src/App.jsx)
- [src/pages](src/pages) — `Home`, `Services`, `Projects`, `Contact`, `NotFound`
- [src/components](src/components)
- [src/constants](src/constants)
- [public](public)

**Instalación (local) — paso a paso:**

```bash
git clone <url-del-repositorio>
cd constructura-pro
npm install
# o: yarn install
```

Desarrollo:

```bash
npm run dev
# o: yarn dev
```

Construir para producción:

```bash
npm run build
npm run preview
```

**Guía de diseño (rápida):**
- Paleta: usar colores corporativos coherentes en `src/constants/brand.js`.
- Tipografía: mantener jerarquía clara (H1, H2, H3) y tamaños responsivos.
- Componentes: crear componentes atómicos reutilizables en `src/components`.
- Imágenes: optimizar y alojar en `public/img` o CDN.

**Checklist de despliegue (mínimo):**
- [ ] Ejecutar `npm run build` y verificar `dist/`.
- [ ] Probar `npm run preview` localmente.
- [ ] Configurar `public/_redirects` con `/* /index.html 200` para SPA.
- [ ] Conectar repositorio a Vercel/Netlify (o subir `dist/`).
- [ ] Revisar variables de entorno si se incorporan servicios externos.

**Buenas prácticas y recomendaciones:**
- Añadir tests simples para componentes críticos.
- Usar Prettier/eslint si se integra TypeScript posteriormente.
- Revisar accesibilidad (contrastes y etiquetas ARIA).

**Cómo contribuir:**
- Abrir un issue describiendo el cambio o mejora.
- Crear una rama: `feature/<descripcion>`.
- Enviar pull request con descripción clara y capturas si aplica.

**Contacto y soporte:**
- Usa la sección de Contacto del sitio o abre un issue en el repositorio.

**Licencia:**
- MIT — ajustar según política de la organización.