/** @type {import('tailwindcss').Config} */
const heroPatterns = require("tailwindcss-hero-patterns/src/patterns");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Bruno Ace SC", "sans-serif"],
        serif: ["Raleway", "serif"],
      },
    },
    heroPatterns: {
      topography: heroPatterns.topography,
    },
    heroPatternsShades: [
      "100",
      "200",
      "300",
      "400",
      "500",
      "600",
      "700",
      "800",
      "900",
    ],
    heroPatternsColors: ["green", "yellow", "gray", "indigo", "purple"],
  },
  plugins: [require("tailwindcss-hero-patterns")],
};
