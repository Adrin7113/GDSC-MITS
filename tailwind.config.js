/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        gCream: "#FAFDB2",
        gRed: "#EA4335",
        gBlue: "#6038FF",
        gYellow: "#FAFD5D",
        gGreen: "#27AA62",
      },
    },
  },
  plugins: [],
};
