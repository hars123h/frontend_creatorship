/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: ["class"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
      },
      // screens:{
      //   "900px": "900px",
      //   "1000px": "1000px",
      //   "1100px": "1100px",
      //   "1200px": "1200px",
      //   "1300px": "1300px",
      //   "1500px": "1500px",
      //   "800px": "800px",
      //   "500px": "500px",
      //   "400px": "400px",
      //   "600px": "600px",

      // }
    },
  },
  plugins: [],
};
