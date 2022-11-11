const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Segoe UI', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
