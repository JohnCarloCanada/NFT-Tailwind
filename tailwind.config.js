/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    enabled: true,
    content: ["./*.html"],
  },
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      softBlue: "hsl(215, 51%, 70%)",
      cyan: "hsl(178, 100%, 50%)",
      veryDarkBlueMainBG: "hsl(217, 54%, 11%)",
      veryDarkBlueCardBG: "hsl(216, 50%, 16%)",
      veryDarkBlueLine: "hsl(215, 32%, 27%)",
      white: "#fff",
    },
    extend: {
      fontFamily: {
        outfit: "'Outfit', sans-serif",
      },
    },
  },
  plugins: [],
};
