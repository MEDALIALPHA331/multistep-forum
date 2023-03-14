/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        magnoliabg: "hsl(217, 100%, 97%)",
        lightBlue: "hsl(206, 94%, 87%)",
        btnNext: "hsl(213, 96%, 18%)",
        cooldgray: "hsl(231, 11%, 63%)",
        pastelBlue: "hsl(228, 100%, 84%)",
        primary: "rgba(253,179,31,255)",
        blueText: "hsl(243, 100%, 62%)",
      },

      fontFamily: {
        ubunto: ["Ubuntu", "sans-serif"],
      },
    },
  },
  plugins: [],
};
