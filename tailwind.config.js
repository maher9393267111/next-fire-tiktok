/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "xs": "300px",
        "sm": "440px",
        md: "900px",
        lg: "1200px",
        ipad: "800px",
        xl: "1500px",

        "2xl": "1800px",
      },


    },
  },
  plugins: [],
}
