# Interactive Web Template

[Español](#español) · [English](#english)

---

## Español

### Índice

- [Descripción](#descripción)
- [Características](#características)
- [Secciones](#secciones)
- [Tecnologías](#tecnologías)
- [Requisitos](#requisitos)
- [Cómo usarla](#cómo-usarla)
- [Personalización](#personalización)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Licencia](#licencia)

### Descripción

Plantilla de página web **de una sola página** con navegación entre secciones sin recargar, animaciones y efectos interactivos. Está pensada como base para portfolios, páginas de producto o landings personales: se cambian los textos y los colores y queda lista.

No usa frameworks ni build: son tres archivos (`index.html`, `styles.css`, `main.js`) que funcionan directamente en el navegador.

### Características

- **Navegación SPA sin router**: `showSection()` muestra una sección y oculta el resto.
- **Partículas flotantes**: 20 partículas de colores generadas aleatoriamente al cargar.
- **Buscador integrado**: navega entre secciones ignorando mayúsculas, tildes y acentos.
- **Formulario con confirmación**: al enviar muestra «¡MENSAJE ENVIADO!» y lanza confeti.
- **Explosión de color**: al hacer clic en la figura de la portada se genera una explosión de partículas.
- **Nav con efecto al hacer scroll**: cambia el fondo y el desenfoque al bajar.
- **Diseño responsive** con CSS grid y flexbox.

### Secciones

| Sección | ID | Contenido |
|---|---|---|
| Inicio | `home` | Portada con título, descripción, botón y redes sociales |
| Sección 1 | `holi` | Bloque de texto con lista de elementos y tarjetas |
| Sección 2 | `about` | Segunda sección de contenido |
| Contacto | `contact` | Formulario de contacto |

El buscador del menú reconoce `seccion 1`, `seccion 2` y `contacto`, con o sin tildes.

### Tecnologías

- **HTML5**
- **CSS3**: animaciones, `backdrop-filter`, grid y variables.
- **JavaScript** vanilla (sin dependencias).

### Requisitos

Un navegador moderno. Opcionalmente, Python o Node para servir la carpeta.

### Cómo usarla

Abre `index.html` directamente o sirve la carpeta:

```bash
python -m http.server 8000
```

o

```bash
npx serve .
```

Después visita `http://localhost:8000`.

### Personalización

- **Contenido**: sustituye los textos de ejemplo (`Lorem ipsum`) en `index.html`.
- **Colores**: edita las variables de `styles.css` y el array `colors` de `createParticles()` y `createColorExplosion()` en `main.js`.
- **Secciones**: añade un `<section id="nueva" class="section">` y un enlace con `onclick="showSection('nueva')"`.
- **Buscador**: amplía el bloque de `searchBox` en `main.js` con las nuevas secciones.
- **Formulario**: ahora solo simula el envío; conéctalo a un backend o a un servicio como Formspree.

### Estructura del proyecto

```text
Interactive-Web-Template/
├── index.html    # Estructura y contenido
├── styles.css    # Estilos y animaciones
├── main.js       # Navegación, partículas, buscador y formulario
├── LICENSE
└── README.md
```

### Licencia

Este proyecto se distribuye bajo la **licencia MIT**. Consulta [LICENSE](LICENSE).

---

## English

### Table of contents

- [Overview](#overview)
- [Features](#features)
- [Sections](#sections)
- [Tech stack](#tech-stack)
- [Requirements](#requirements)
- [How to use](#how-to-use)
- [Customization](#customization)
- [Project structure](#project-structure)
- [License](#license)

### Overview

A **single-page** website template with section navigation (no reload), animations and interactive effects. It is meant as a base for portfolios, product pages or personal landings: change the copy and colors and you are done.

No frameworks or build step: just three files (`index.html`, `styles.css`, `main.js`) that run directly in the browser.

### Features

- **Router-less SPA navigation**: `showSection()` shows one section and hides the rest.
- **Floating particles**: 20 randomly generated colored particles on load.
- **Built-in search**: jumps between sections ignoring case and accents.
- **Form with feedback**: shows "¡MENSAJE ENVIADO!" and fires confetti on submit.
- **Color explosion**: clicking the hero shape bursts into particles.
- **Scroll-aware navbar**: background and blur change as you scroll.
- **Responsive layout** using CSS grid and flexbox.

### Sections

| Section | ID | Content |
|---|---|---|
| Home | `home` | Hero with title, description, CTA and social links |
| Section 1 | `holi` | Text block with a list and cards |
| Section 2 | `about` | Second content section |
| Contact | `contact` | Contact form |

The navbar search recognizes `seccion 1`, `seccion 2` and `contacto`, with or without accents.

### Tech stack

- **HTML5**
- **CSS3**: animations, `backdrop-filter`, grid and variables.
- **Vanilla JavaScript** (no dependencies).

### Requirements

A modern browser. Optionally Python or Node to serve the folder.

### How to use

Open `index.html` directly, or serve the folder:

```bash
python -m http.server 8000
```

or

```bash
npx serve .
```

Then visit `http://localhost:8000`.

### Customization

- **Content**: replace the placeholder text (`Lorem ipsum`) in `index.html`.
- **Colors**: edit the CSS variables in `styles.css` and the `colors` array in `createParticles()` and `createColorExplosion()` in `main.js`.
- **Sections**: add `<section id="new" class="section">` and a link with `onclick="showSection('new')"`.
- **Search**: extend the `searchBox` block in `main.js` with the new sections.
- **Form**: it only simulates submission; connect it to a backend or a service such as Formspree.

### Project structure

```text
Interactive-Web-Template/
├── index.html    # Markup and content
├── styles.css    # Styles and animations
├── main.js       # Navigation, particles, search and form
├── LICENSE
└── README.md
```

### License

This project is released under the **MIT License**. See [LICENSE](LICENSE).
