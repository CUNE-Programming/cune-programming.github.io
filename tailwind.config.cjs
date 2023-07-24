/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#172b54",
        light: "#f9f9f9",
        dark: "#3b3b3c",
      },
    },
  },
  plugins: [],
};
