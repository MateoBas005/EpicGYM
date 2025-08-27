# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```



# EpicGYM - Proyecto React

## Descripción

EpicGYM es una landing page para un gimnasio, desarrollada con React y Tailwind CSS.  
Incluye secciones como planes, actividades, testimonios, ubicación y contacto, además de integración con redes sociales.

---

## Estructura del Proyecto

```
EpicGYM/
│
├── src/
│   ├── App.tsx           # Componente principal (toda la página)
│   ├── assets/           # Imágenes usadas en la web
│   │   └── image/
│   ├── index.tsx         # Punto de entrada de React
│   └── ...               # Otros archivos
├── package.json          # Dependencias y scripts
└── README.md             # Documentación del proyecto
```

---

## ¿Cómo funciona App.tsx?

- **App.tsx** contiene toda la lógica y el renderizado de la web.
- Usa hooks como `useState` y `useEffect` para manejar el estado y animaciones.
- Importa iconos de `lucide-react` para mostrar redes sociales y otros elementos visuales.

---

## Sugerencia para Modularizar

Para mejorar la legibilidad y escalabilidad, puedes **separar cada sección en componentes**.  
Por ejemplo:

```
src/
├── components/
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── BenefitsCarousel.tsx
│   ├── HistorySection.tsx
│   ├── PlansSection.tsx
│   ├── ActivitiesSection.tsx
│   ├── TestimonialsSection.tsx
│   ├── LocationSection.tsx
│   ├── Footer.tsx
│   └── SocialIcons.tsx      # Aquí puedes poner los iconos SVG alternativos
└── App.tsx                  # Solo importa y organiza los componentes
```

**Ventajas:**
- El código es más fácil de leer y mantener.
- Puedes reutilizar componentes.
- Es más sencillo agregar nuevas funcionalidades.

---

## Iconos de Redes Sociales

Los iconos `Instagram` y `Facebook` de `lucide-react` están **deprecated**.  
Puedes crear un archivo `SocialIcons.tsx` y poner allí los SVG alternativos:

```tsx
// src/components/SocialIcons.tsx
export const InstagramIcon = () => (
  <svg width={28} height={28} fill="currentColor" viewBox="0 0 24 24">
    {/* ...SVG path... */}
  </svg>
);

export const FacebookIcon = () => (
  <svg width={28} height={28} fill="currentColor" viewBox="0 0 24 24">
    {/* ...SVG path... */}
  </svg>
);
```

Luego, en tu componente principal, los usas así:

```tsx
import { InstagramIcon, FacebookIcon } from './components/SocialIcons';

<a href={gymData.socialMedia.instagram}><InstagramIcon /></a>
<a href={gymData.socialMedia.facebook}><FacebookIcon /></a>
```

---

## Recomendaciones para Principiantes

- **Divide el código en componentes pequeños.**
- Usa comentarios JSX `{/* ... */}` para explicar partes importantes.
- Mantén las imágenes en una carpeta `assets/image`.
- Documenta cada componente con una breve descripción de su función.
- Usa nombres claros y descriptivos para tus archivos y funciones.

---

## Instalación y Ejecución

1. Instala dependencias:
   ```bash
   npm install
   ```
2. Ejecuta el proyecto:
   ```bash
   npm start
   ```

---

## Recursos útiles

- [React Docs](https://react.dev/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev/icons/)

---

## Notas

- Si ves iconos tachados, es porque están deprecated. Usa SVGs personalizados como se muestra arriba.
- Modularizar tu código te ayudará a escalar y mantener tu proyecto fácilmente.

---

¿Dudas? ¡Agrega comentarios en tu código usando `{/* ... */}` y consulta la documentación!