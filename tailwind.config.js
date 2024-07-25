/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent:  "#18AD47",
        accentDark: "#179957"
      },
      container: {
        center: true,
        padding: "15px"
      },
    },
  },
  plugins: [],
}