/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#49593F",
        secondary: "#A3AFA5",
        accent: "#F5F5F5",
        "text-color": "#252525",
        highlight: "#D1DED5",
      },
    },
    fontFamily: {
      custom: ["Bitter", "serif"],
    },
  },
  plugins: [],
};
