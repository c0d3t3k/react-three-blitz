// tailwind.config.js
module.exports = {
  purge: ["{app,pages}/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class', //false, or 'media' or 'class'
  theme: {
    inset:{
       '1/5': '20%', 
    },
    extend: {
     colors: {
        'deep-purple': '#34017b',
        'deeper-purple': '#0e001d',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
