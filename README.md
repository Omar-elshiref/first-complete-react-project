>>>>> 1 <<<< react was vite ================================================================================

npm create vite@latest papyr -- --template react

cd papyr

npm i 

>>>> 2 <<<< tailwindcss ===================================================================================

npm install -D tailwindcss postcss autoprefixer

npx tailwindcss init -p

add this to tailwind.config.js file:

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

add this to index.css file:

@tailwind base;
@tailwind components;
@tailwind utilities;

