# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

---

# Sistema de Gestion de Mascotas

Aplicacion web desarrollada en React para la visualizacion, registro, edicion y eliminacion de mascotas mediante el consumo de una API REST.

---

## Requisitos Previos

* Node.js (version 18.0.0 o superior)
* npm (incluido con Node.js)
* Servidor backend/API en ejecucion

---

## Instalacion

1. Clonar el repositorio:
   git clone (https://github.com/Peschke/MascotaApp.git)

2. Ingresar a la carpeta del proyecto:
   cd <MASCOTA_FRONT>

3. Instalar las dependencias de Node:
   npm install

---

## Ejecucion

1. Verificar que la API indicada en "src/services/api.js" se encuentre en ejecucion.

2. Iniciar el servidor de desarrollo:
   npm run dev

3. Abrir el navegador e ingresar a la direccion local provista en la consola (por ejemplo, http://localhost:5173).

---

## Tecnologias Utilizadas

### Entorno de Desarrollo y Librerías
* React:    Librería principal para la construcción de la interfaz de usuario basada en componentes.
* React     Router DOM: Gestión de la navegación y enrutamiento dentro de la aplicación SPA.
* Axios:    Cliente HTTP para la conexión e integración con la API REST de backend.
* CSS3:     Maquetación y diseño visual modular mediante hojas de estilo independientes por componente.
* Git:      Sistema de control de versiones para el seguimiento de cambios y gestión del repositorio.

### Apoyo y Asistencia Técnica
* Modelo de IA (Gemini): Utilizado especialmente para la estructuración y estandarización visual del proyecto. Se empleó de manera puntual para la maquetación CSS, la definición de nombres de clases JSX alineadas al lenguaje del dominio (español) y la redacción formal de la documentación técnica.
