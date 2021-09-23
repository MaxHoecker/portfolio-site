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
        dark: '#32405E'
      },
      primary: {
        DEFAULT: '#C49D41',
      },
      secondary: {
        DEFAULT: '#45708F',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
