module.exports = {
  purge: [],
  theme: {
    screens: {
      'sm': {'max':'640px'},
      'md': {'max':'768px'},
      'lg': {'max':'1024px'},
      'xl': {'max':'1280px'},
    },
    extend: {
      }
  },
  variants: {
    outline: ['responsive', 'focus'],
    animation: ['responsive', 'motion-safe', 'motion-reduce']
  },
  plugins: [],
}
