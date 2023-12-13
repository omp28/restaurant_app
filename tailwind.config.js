/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,tsx,ts,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        giloryBold: ["GiloryBold", "sans-serif"],
        giloryLight: ["GiloryLight", "sans-serif"],
      },
    },
  },
  plugins: [],
};
