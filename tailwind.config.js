/** @type {import('tailwindcss').Config} */

import colors from "tailwindcss/colors";

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.amber,
        secondary: colors.blue,
        dark: colors.slate,
      },
      fontFamily: {
        header: ["Anton"],
        body: ["Comfortaa"],
      },
      keyframes: {
        appear: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        appear: "appear 0.25s linear",
      },
    },
  },
  plugins: [],
};
