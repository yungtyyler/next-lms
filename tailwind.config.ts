import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        dark_green: {
          DEFAULT: "#042a2b",
          100: "#010808",
          200: "#021011",
          300: "#021819",
          400: "#032122",
          500: "#042a2b",
          600: "#0c7b7f",
          700: "#14cdd4",
          800: "#55eaef",
          900: "#aaf5f7",
        },
        moonstone: {
          DEFAULT: "#5eb1bf",
          100: "#102529",
          200: "#214a52",
          300: "#316f7b",
          400: "#4195a3",
          500: "#5eb1bf",
          600: "#7fc0cc",
          700: "#9fd0d9",
          800: "#bfe0e5",
          900: "#dfeff2",
        },
        light_cyan: {
          DEFAULT: "#cdedf6",
          100: "#0e3e4c",
          200: "#1c7d98",
          300: "#34b6da",
          400: "#7fd1e8",
          500: "#cdedf6",
          600: "#d6f0f7",
          700: "#e0f4f9",
          800: "#eaf8fb",
          900: "#f5fbfd",
        },
        crayola_orange: {
          DEFAULT: "#ef7b45",
          100: "#381505",
          200: "#712a0a",
          300: "#a9400f",
          400: "#e15514",
          500: "#ef7b45",
          600: "#f29469",
          700: "#f5af8e",
          800: "#f8cab4",
          900: "#fce4d9",
        },
        chili_red: {
          DEFAULT: "#d84727",
          100: "#2b0e08",
          200: "#561d10",
          300: "#812b18",
          400: "#ac3920",
          500: "#d84727",
          600: "#df6c53",
          700: "#e7917e",
          800: "#efb6a9",
          900: "#f7dad4",
        },
      },
    },
  },
  plugins: [],
};
export default config;
