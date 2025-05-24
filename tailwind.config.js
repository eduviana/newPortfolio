/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          background: colors.zinc[900], // Fondo principal
          primary: colors.orange[700], // Botones, acentos
          hover: colors.orange[800], // Hover para botones
          borderDark: colors.zinc[800],
          borderLight: colors.slate[500],
        },
        text: {
          base: colors.white, // Texto por defecto
          muted: "rgba(255, 255, 255, 0.6)", // Texto menos destacado
          contrast: colors.black, // Texto negro para fondos claros (si usás alguno)
        },
      },
    },
  },
  plugins: [],
};
