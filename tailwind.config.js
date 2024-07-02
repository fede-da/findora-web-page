/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "nero-1-findora": "#23282b",
        "nero-3-findora": "#30373b",
        "bianco-1-findora": "#fcf8f8",
        "verde-1-findora": "#1ab58a",
        white: "#fff",
        gainsboro: "#d9d9d9",
      },
      fontFamily: {
        gotham: "Gotham",
      },
      animation: {
        bounce: "bounce 1.5s ease-in-out infinite",
        fadeDown: "fadeDown 1s ease-in-out",
        pulse: "pulse 5s ease-in-out infinite",
      },
      keyframes: {
        fadeDown: {
          "0%": { transform: "translateY(-50%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
    fontSize: {
      "5xl": "1.5rem",
      "13xl": "2rem",
      xl: "1.25rem",
      "45xl": "4rem",
      "21xl": "2.5rem",
      "17xl": "2.25rem",
      base: "1rem",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1920px",
      },
      md: {
        max: "1200px",
      },
      ml: {
        max: "768px",
      },
      sm: {
        max: "500px",
      },
      ss: {
        max: "400px",
      }
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [require("tailwindcss-animated")],
};
