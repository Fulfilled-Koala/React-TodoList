const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import("tailwindcss").Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "sans": ["Lato", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        dim: {
          50: "#383838",
          100: "#363636",
          200: "#333333",
          300: "#2E2E2E",
          400: "#2C2C2C",
          500: "#272727",
          600: "#242424",
          700: "#222222",
          800: "#1F1F1F",
          900: "#1E1E1E",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")({ strategy: "base" })],
};
