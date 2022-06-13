module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'publish',
    content: ['./src/**/*.tsx']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
}
