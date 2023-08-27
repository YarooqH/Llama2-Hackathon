/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'electric-violet': {
          '50': '#f3f1ff',
          '100': '#ebe5ff',
          '200': '#d9ceff',
          '300': '#bea6ff',
          '400': '#9f75ff',
          '500': '#843dff',
          '600': '#7916ff',
          '700': '#6b04fd',
          '800': '#5a03d5',
          '900': '#4b05ad',
          '950': '#2c0076',
        },
      },
    },
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
