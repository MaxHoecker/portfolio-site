module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        'fade-in-right': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          },
        },
        'fade-out-right': {
          'from': {
            opacity: '1',
            transform: 'translateX(0px)'
          },
          'to': {
            opacity: '0',
            transform: 'translateX(10px)'
          },
        },
        'fade-in-left': {
          '0%': {
            opacity: '0',
            transform: 'translateX(10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          },
        },
        'fade-out-left': {
          'from': {
            opacity: '1',
            transform: 'translateX(0px)'
          },
          'to': {
            opacity: '0',
            transform: 'translateX(10px)'
          },
        }
      },
      animation: {
        'fade-in-right': 'fade-in-right 0.5s ease-out',
        'fade-out-right': 'fade-out-right 0.5s ease-out',
        'fade-in-left': 'fade-in-right 0.5s ease-out',
        'fade-out-left': 'fade-out-right 0.5s ease-out'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
