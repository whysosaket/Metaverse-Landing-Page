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
        gowun: ["Gowun Dodum", "sans-serif"],
        universoblack: ["Universo Black", "sans-serif"],
        universo: ["Universo", "sans-serif"],
        universolight: ["Universo Light", "sans-serif"],
        universostencil: ["Universo Stencil", "sans-serif"],
        universothin: ["Universo Thin", "sans-serif"],
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, rgba(255, 255, 255, 0.6) 1%, rgba(241, 149, 240, 0.8) 35%, rgba(250, 86, 247, 0.9) 100%), url(assets/noise.svg)',
        'custom-gradient2': 'linear-gradient(to right, rgba(255, 255, 255, 0.6) 1%, rgba(221, 129, 220, 0.8) 35%, rgba(230, 66, 227, 0.9) 100%), url(assets/noise.svg)',
        'text-gradient': 'linear-gradient(to right, #692767 20%, #b342af 55%)',
      },
    },
  },
  plugins: [],
}