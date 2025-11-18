/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // Esto le dice a Tailwind que escanee tus archivos de Angular
  ],
  theme: {
    extend: {},
  },
  // Aquí se añade daisyUI como plugin
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake", "sunset"],
  },
}