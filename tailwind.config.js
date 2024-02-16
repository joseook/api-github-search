/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
    './src/pages/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      fontFamily: {
        sans: ['Inter var',...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}

