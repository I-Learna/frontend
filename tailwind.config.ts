import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          DEFAULT: "#00222C",
        },
        accent: {
          lighter: "#F3FAFA",
          light: "#7BC8EC",
          DEFAULT: "#43B1E4",
          dark: "#368EB6",
          darker: "#1B475B",
        },
        warning: {
          DEFAULT: "#ECF494",
        },
        error: {
          DEFAULT: "#D00000",
        },
        success: {
          DEFAULT: "#38B000",
        },
        customGray: {
          light: "#e5e7eb",
          DEFAULT: "#808080",
        },
      },
    },
  },
  plugins: [],
};
export default config;
