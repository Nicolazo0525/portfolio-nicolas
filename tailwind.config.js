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
          buttonText: '#362c3a',
          defaultback: '#d6ceb6',
          butonBack: '#b0ab97',
        },
        secundary: {
          default: '#797767',
          buttonlagout: '#716858',
          buttonDefoult: '#49483d',
          guionColor: '#b1ab96',
          boxColor: '#69695f',
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
  variants:{
    extend:{
      textColor: ['hover'],
      fill: ['hover'],
      backgroundColor: ['hover']
    },
  },
  plugins: [],
}