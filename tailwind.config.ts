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
      maxHeight: {
        "128": "32rem",
      },
      height: {
        "128": "32rem",
      },
      gridTemplateColumns: {
        "auto-fill-320": "repeat(auto-fill, minmax(320px, 1fr))",
        "auto-fit-320": "repeat(auto-fit, minmax(320px, 1fr))",
      },
    },
  },
  plugins: [],
};
export default config;
