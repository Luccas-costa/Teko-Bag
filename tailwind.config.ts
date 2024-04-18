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
        green1: "#B9D19D",
        green2: "#86B27A",
        green3: "#3E4D3D",
        pink1: "#FFB9E9",
        brown1: "#3D291C",
      },
    },
  },
  plugins: [],
};
export default config;
