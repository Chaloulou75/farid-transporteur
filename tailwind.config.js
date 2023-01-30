/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        faridblue: "#0028ff",
        gold: "#ffd700",
      },
      fontFamily: {
        lobster: ["Lobster"],
      },
    },
  },
  plugins: [],
};
