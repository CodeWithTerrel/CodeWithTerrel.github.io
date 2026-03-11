/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter Variable", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glass: "0 10px 30px rgba(0,0,0,0.35)",
      },
    },
  },
  plugins: [],
};