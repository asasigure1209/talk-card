/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";
import { transform } from "typescript";

const backfaceVisibility = plugin(({ addUtilities }) => {
  addUtilities({
    ".backface-visible": {
      "backface-visibility": "visible",
    },
    ".backface-hidden": {
      "backface-visibility": "hidden",
    },
    ".rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".-rotate-y-180": {
      transform: "rotateY(-180deg)",
    },
    ".rotate-y-0": {
      transform: "rotateY(0)",
    },
  });
});

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [backfaceVisibility],
};
