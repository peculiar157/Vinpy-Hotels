import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          50: "#F5EEFF",
          100: "#e8d5ff",
          200: "#d0b8f0",
          300: "#9B59D6",
          400: "#7B3DB0",
          500: "#5B1F8A",
          600: "#4a1a70",
          700: "#3d1260",
          800: "#2a0d4a",
          900: "#1a0830",
        },
        gold: {
          300: "#e8c97a",
          400: "#c9a84c",
          500: "#b8902a",
        },
      },
      fontFamily: {
        playfair: ["'Playfair Display'", "Georgia", "serif"],
        inter: ["'Inter'", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
