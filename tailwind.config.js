/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#cf291d",
          "secondary": "#ececec",
          "accent": "#131313",
          "neutral": "#cf291d",
          "base-100": "#1d1d1d",
          "info": "#a1afe8",
          "success": "#79e7b2",
          "warning": "#9f8109",
          "error": "#f51920",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

