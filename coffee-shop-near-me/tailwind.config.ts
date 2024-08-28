import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: "rgba(67,56,202,1)",
        "purple-dark": "rgba(79,70,229,1)",
        black: "rgba(17,24,39,1)",
        "white-100": "rgba(229,231,235,1)",
        "white-900": "rgba(249,250,251,1)",
      },
    },
  },
  plugins: [],
};
export default config;
