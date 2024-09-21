/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F195F0',
        secondary: '#FA56F7',
      },
      fontFamily: {
        inter: ["Inter", "system-ui"],
      }
    },
  },
  plugins: [],
}