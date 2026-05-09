# David Gallego — Portfolio

Portafolio personal desarrollado con React + Vite. Presenta mi experiencia profesional, proyectos y stack tecnológico con soporte completo para español e inglés.

## Stack

- **React 19** + **Vite 8**
- **react-icons** — brand icons (Simple Icons)
- **Vercel Analytics**
- CSS vanilla (sin frameworks UI)

## Características

- Diseño dark mode con animaciones CSS
- Secciones: Hero, About, Experience, Projects, Skills, Contact
- Sección de proyectos con cards, screenshots y badges (Freelance)
- Skills con iconos de marca por tecnología
- Navbar responsive con menú mobile (burger → X, scroll lock)
- i18n manual ES / EN sin librerías externas
- Despliegue en Vercel

## Estructura

```
src/
├── components/
│   ├── layout/       # Navbar, Footer
│   └── sections/     # Hero, About, Experience, Projects, Skills, Contact
├── context/          # LangContext (i18n)
├── data/             # content.js (textos ES + EN)
├── App.jsx
└── main.jsx
```

## Desarrollo

```bash
npm install
npm run dev       # http://localhost:5173
npm run build
npm run preview
```
