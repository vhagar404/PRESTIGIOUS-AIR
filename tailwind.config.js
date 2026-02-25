/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#EA580C",
        secondary: "#F97316",
        bg: "#F3F4F6",
      },
    },
  },
  plugins: [],
};