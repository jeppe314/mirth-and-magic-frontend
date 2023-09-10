/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3A5A40",
        secondary: "#588157",
        accent: "#A3B18A",
        highlight: "#DAD7CD",
        "text-color-light": "#DAD7CD",
        "text-color-dark": "#25362E",
      },
    },
    fontFamily: {
      custom: ["Bitter", "serif"],
    },
  },
  plugins: [],
};
