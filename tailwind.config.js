/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3A5A40",
        "primary-hover": "#2E4E36", // Slightly darker than primary
        "secondary-hover": "#4C7350", // Slightly darker than secondary
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
