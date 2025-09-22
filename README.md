# Rick and Morty Challenge

Este proyecto utiliza la [Rick and Morty API](https://rickandmortyapi.com/) para cumplir con los objetivos planteados en el challenge.

## 🚀 Objetivos del challenge

- Obtener un listado de personajes paginados y mostrarlos en dos secciones:
  - **`Character #1`**
  - **`Character #2`**
- Cada personaje se muestra en una **Card** que incluye:
  - Nombre
  - Status
  - Especie
- Debajo de los listados se encuentran tres secciones adicionales:
  - **`Character #1 - Only Episodes`** → episodios en los que aparece únicamente el personaje seleccionado en **Character #1**.
  - **`Character #1 & Character #2 - Shared Episodes`** → episodios compartidos entre los dos personajes seleccionados.
  - **`Character #2 - Only Episodes`** → episodios en los que aparece únicamente el personaje seleccionado en **Character #2**.

## 🛠️ Stack Tecnológico

- [React](https://react.dev/)  
- [Next.js](https://nextjs.org/)  
- [Tailwind CSS](https://tailwindcss.com/)  
- [shadcn/ui](https://ui.shadcn.com/)  
- [Vercel](https://vercel.com/) para el deploy  

## 📂 Estructura de la app

La aplicación cuenta con 2 pantallas principales:

- `/` → Home
- `/compare` → Pantalla donde se resuelve el challenge solicitado

## ▶️ Demo

El proyecto está desplegado en Vercel.  
👉 [Ver demo](https://conexa-rickandmorty-challenge.vercel.app/)

## ⚙️ Instalación y uso

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/lxcste1/conexa-rickandmorty-challenge.git
   cd conexa-rickandmorty-challenge

2. Instalar dependencias:
   ```bash
   pnpm install

3. Ejecutar en modo desarrollo:
   ```bash
   pnpm dev

4. Abrir en el navegador:
   ```bash
   http://localhost:3000

## 📌 Notas

- El proyecto consume directamente la Rick and Morty API.
- Se implementó paginación para el listado de personajes.
- Se aplicó un enfoque UI moderno con Tailwind + shadcn.

👨‍💻 Desarrollado por Lucas Tello
