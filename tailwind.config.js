/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        bodyDark: "hsl(230, 17%, 14%)",
        topDark: "hsl(232, 19%, 15%)",
        littleText: "hsl(228, 34%, 66%)",
        bigText: "hsl(0, 0%, 100%)",
        toggleg1: "hsl(210, 78%, 56%)",
        toggleg2: "hsl(146, 68%, 55%)",
      },
    },
    fontFamily: {
      fontNew: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};
