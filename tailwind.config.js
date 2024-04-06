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
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#907A7B",
          secondary: "#C0A4A5",
          accent: "#707070",
          neutral: "#3d4451",
          "base-100": "#F5F0E7",
          "bg-white": "#FFFFFF",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  theme: {
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
