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
          buttonText: '#4F4C43',
          defaultback: '#d6ceb6',
          butonBack: '#b0ab97',
          bgLayoutLeft: '#D5CFAF',
        },
        secundary: {
          default: '#797767',
          buttonlagout: '#716858',
          buttonDefoult: '#49483d',
          guionColor: '#b1ab96',
          boxColor: '#69695f',
          boxColorBack: '#929075',
        },
        boxColor: {
          One: '#8c8068',
          two: '#cc846b',
          three: '#ad9065',
          four: '#ae9a7d',
          five: '#dfbf9c',
          six: '#EBC9A4',
          seven: '#ffffff'
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