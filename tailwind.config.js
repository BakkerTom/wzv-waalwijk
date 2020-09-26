module.exports = {
  purge: [],
  theme: {
    extend: {
        colors: {
            brand: 'rgb(255,45,85)',
            secondary: '#40B3E2'
        }
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'group-hover'],
    opacity: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
