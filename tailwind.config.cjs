/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#172b54",
        "my-gray": "#f9f9f9",
        "my-gray-dark": "#3b3b3c",
      },
    },
  },
  plugins: [],
};
