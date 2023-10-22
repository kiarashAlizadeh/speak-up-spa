/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins"],
      },
      colors: {
        "primary": "#0065F4",
        "dark-primary": "#123276",
      },
    },
  },
  plugins: [],
}
