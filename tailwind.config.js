/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: { min: "300px", max: "639px" },
      ...defaultTheme.screens,
      // 'sm': {'min': '640px', 'max': '767px'},

      // 'md': {'min': '768px', 'max': '1023px'},

      // 'lg': {'min': '1024px', 'max': '1279px'},

      // 'xl': {'min': '1280px', 'max': '1535px'},
    },
    extend: {},
  },
  plugins: [],
};
