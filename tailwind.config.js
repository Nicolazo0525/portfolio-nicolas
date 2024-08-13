/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: {
          default: '#b6b09b',

        },
        secundary: {
          default: '#797767',
        },
      },
    },
  },
  plugins: [],
}