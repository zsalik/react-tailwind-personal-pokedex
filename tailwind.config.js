module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    flex: {
      '24':'0 0 24%',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
