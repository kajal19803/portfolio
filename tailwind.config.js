/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#07070B",
        surface: "#111118",
        primary: "#FFFFFF",
        secondary: "#B4B4C2",
        border: "#2A2638",
        accent: {
          blue: "#4263FF",
          purple: "#7C3AED",
          magenta: "#B43DFF",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
};
