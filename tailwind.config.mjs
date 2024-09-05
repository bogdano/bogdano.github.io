/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        bunker: {
          50: "#f5f7fa",
          100: "#ebeef3",
          200: "#d1d9e6",
          300: "#aab9cf",
          400: "#7b94b5",
          500: "#5b779c",
          600: "#475e82",
          700: "#3a4c6a",
          800: "#334259",
          900: "#2e394c",
          950: "#13171f",
        },
      },
      fontFamily: {
        sans: ["Lato", "sans-serif"],
        kanit: ["Kanit", "sans-serif"],
        limelight: ["Limelight", "sans-serif"],
      },
    },
  },
  plugins: [],
  darkMode: "selector",
};
