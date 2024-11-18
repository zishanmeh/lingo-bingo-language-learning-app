/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "serif"],
      },
      colors: {
        primary_color: "#6244cc",
        secondary_color: "#1e2766",
        light_color: "#9786d1",
      },
    },
  },
  plugins: [daisyui],
};
