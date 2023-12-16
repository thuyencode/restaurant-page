const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', 'node_modules/preline/dist/*.js'],
  theme: {
    extend: {
      screens: {
        xs: '475px'
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: [require('preline/plugin')]
}
