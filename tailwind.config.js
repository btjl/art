/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      keyframes: {
        flipYAxis: {
          "0%, 100%": { transform: "rotateY(0deg)" },
          "50%": { transform: "rotateY(180deg)" },
        },
      },
      animation: {
        flipYAxis: "flipYAxis 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
