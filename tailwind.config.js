/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      } ,
      dropShadow: {
        glow: [
          "0 0px 10px rgba(255,255, 255, 0.35)",
          "0 0px 25px rgba(255, 255,255, 0.2)",
        ],
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        semiXl: "1180px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
plugins: [],
}

