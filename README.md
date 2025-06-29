# Cuestionario de Ciencias

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Code Style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-4.4.5-9C4EDD.svg)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18.2.0-61DAFB.svg)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-06B6D4.svg)](https://tailwindcss.com/)

Una aplicación de cuestionario interactivo desarrollada con React, TypeScript, Vite y Tailwind CSS. Esta aplicación está diseñada para ayudar a los estudiantes a mejorar sus habilidades de estudio a través de preguntas de opción múltiple, verdadero/falso y completar espacios en blanco.

## 🚀 Características

- Interfaz de usuario moderna y receptiva
- Modo oscuro/claro
- Diferentes tipos de preguntas:
  - Opción múltiple
  - Verdadero/Falso
  - Completar espacios en blanco
- Retroalimentación inmediata
- Puntuación y revisión de respuestas
- Totalmente tipado con TypeScript
- Optimizado para rendimiento

## 📦 Requisitos previos

- Node.js 16.14.0 o superior
- npm 8.3.0 o superior (o yarn/pnpm)

## 🛠️ Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/questionario-ciencias.git
   cd questionario-ciencias
   ```

2. Instala las dependencias:
   ```bash
   npm install
   # o
   yarn
   # o
   pnpm install
   ```

3. Copia el archivo de entorno de ejemplo:
   ```bash
   cp .env.example .env
   ```

4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   # o
   yarn dev
   # o
   pnpm dev
   ```

   La aplicación estará disponible en [http://localhost:3000](http://localhost:3000)

## 🏗️ Scripts disponibles

- `dev`: Inicia el servidor de desarrollo
- `build`: Compila la aplicación para producción
- `preview`: Previsualiza la compilación de producción localmente
- `lint`: Ejecuta ESLint
- `format`: Formatea el código con Prettier
- `typecheck`: Verifica los tipos de TypeScript
- `predeploy`: Compila la aplicación para producción
- `deploy`: Despliega la aplicación a GitHub Pages

## 🎨 Estructura del proyecto

```
src/
├── assets/           # Archivos estáticos (imágenes, fuentes, etc.)
├── components/       # Componentes reutilizables
│   ├── QuizIntro.tsx # Pantalla de introducción
│   ├── QuizQuestion.tsx # Componente de pregunta
│   └── QuizResults.tsx # Pantalla de resultados
├── data/             # Datos de las preguntas
│   └── quizData.ts   # Preguntas y respuestas
├── styles/           # Estilos globales
│   └── globals.css   # Estilos globales
├── App.tsx           # Componente principal
├── main.tsx          # Punto de entrada de la aplicación
└── vite-env.d.ts     # Tipos de Vite
```

## 🌍 Despliegue

### GitHub Pages

1. Asegúrate de que la opción `homepage` en `package.json` tenga la URL correcta de tu repositorio de GitHub Pages.

2. Ejecuta el comando de despliegue:
   ```bash
   npm run deploy
   # o
   yarn deploy
   # o
   pnpm deploy
   ```

### Netlify

1. Conecta tu repositorio a Netlify
2. Configura la carpeta de salida como `dist`
3. Establece el comando de construcción como `npm run build`
4. ¡Despliega!

## 🛠️ Tecnologías utilizadas

- [React](https://reactjs.org/) - Biblioteca de JavaScript para construir interfaces de usuario
- [TypeScript](https://www.typescriptlang.org/) - JavaScript tipado
- [Vite](https://vitejs.dev/) - Herramienta de construcción y desarrollo
- [Tailwind CSS](https://tailwindcss.com/) - Framework de utilidades CSS
- [React Router](https://reactrouter.com/) - Enrutamiento en el cliente
- [ESLint](https://eslint.org/) - Linter de JavaScript/TypeScript
- [Prettier](https://prettier.io/) - Formateador de código
- [GitHub Pages](https://pages.github.com/) - Alojamiento web

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más información.

## 🙏 Agradecimientos

- [Vite](https://vitejs.dev/) por la excelente herramienta de desarrollo
- [Tailwind CSS](https://tailwindcss.com/) por el increíble framework de utilidades
- [React](https://reactjs.org/) por hacer que la construcción de interfaces de usuario sea divertida

---

Hecho con ❤️ por [Tu Nombre]
