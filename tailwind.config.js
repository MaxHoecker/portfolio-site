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
      },
      dominant: {
        light: '#57AAFF',
        DEFAULT: '#2C73D2',
        dark: '#004FA8'
      },
      complimentary: {
        light: '#70FACB',
        DEFAULT: '#2AC195',
        dark: '#008A62'
      },
      accent: {
        light: '#F6F9FF',
        DEFAULT: '#424656',
        dark: '#1d2536'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
