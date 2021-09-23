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
        DEFAULT: '#405278',
      },
      primary: {
        DEFAULT: '#1fb6ff',
      },
      secondary: {
        DEFAULT: '#ffffff',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
