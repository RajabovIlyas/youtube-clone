/** @type {import('postcss-load-config').Config} */
const config = {
  content: ["./src/**/**/*.{js,ts,jsx,tsx,mdx}"],
  plugins: {
    tailwindcss: {},
  },
};

export default config;
