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
          /* default: '#b6b09b', */
          default: '#bab6a1',
          buttonlagout: '#b6b299',
        },
        secundary: {
          default: '#797767',
          buttonlagout: '#716858',
          buttonDefoult: '#49483d',
        },
        
      },
    },
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald', ''],
      'body': ['"Open Sans"'],
    },
  },
  plugins: [],
}