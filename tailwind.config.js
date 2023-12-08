/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', 'node_modules/preline/dist/*.js'],
  theme: {
    extend: {
      screens: {
        xs: '475px'
      }
    }
  },
  plugins: [require('preline/plugin')]
}
