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
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        serif: ['Playfair Display', ...defaultTheme.fontFamily.serif]
      },
      backgroundImage: {
        menu: "url('https://plus.unsplash.com/premium_photo-1694715915615-51472fccf407?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        'home-dark':
          "url('https://images.unsplash.com/photo-1672305330907-8092be9161ea?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=leohoho-uskQ8hyZNgQ-unsplash.jpg&w=640')",
        home: "url('https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=petr-sevcovic-qE1jxYXiwOA-unsplash.jpg&w=640')"
      }
    }
  },
  plugins: [require('preline/plugin')]
}
