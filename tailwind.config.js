module.exports = {
  purge: {
    enable : true,
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    options : {
      safelist: [/^w-/]
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Avenir', 'Helvetica', 'Arial', 'sans-serif']
    },
    colors: {
      'veg': {
        'dark': '#aac100',
        'light':'#d4df59'
      }
    }
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled'],
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
