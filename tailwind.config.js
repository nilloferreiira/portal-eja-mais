import { colors } from "./src/styles/colors"
import lineClamp from "@tailwindcss/line-clamp"

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    extend: {
      colors,
      fontFamily: {
        inter: ["Inter", "sans-serif"]
      }
    }
  },
  plugins: [lineClamp]
}
