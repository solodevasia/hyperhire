/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{html,tsx}"],
  theme: {
    extend: {},
    screens: {
      "laptop": {max: '1175px'},
      "min-laptop": {min: '1175px'},
      mobile: {max: '650px'},
      "min-mobile": {min: '650px'}
    }
  },
  plugins: [],
}

