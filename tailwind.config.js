module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        'mukta':['Mukta', 'sans-serif']
      }
    },
    colors:{
      backgroundColor: {
        light: '#465A85',
        DEFAULT: '#405278',
        dark: '#1d2536'
      },
      primary: {
        DEFAULT: '#D7D7D4',
      },
      secondary: {
        DEFAULT: '#7CC480',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
