/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#0a0a0a",
        light: "#ffffff",
        primary: "#1d4ed8", // Custom primary color
      },
      fontFamily: {
        sans: ['Roboto', 'Arial', 'Helvetica', 'sans-serif'], // Set Roboto as the default sans font
        display: ['Poppins', 'sans-serif'], // Set Poppins for headings and display text
      },
      keyframes: {
        bounceHover: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        rotateHover: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      animation: {
        bounceHover: "bounceHover 0.6s ease-in-out infinite",
        rotateHover: "rotateHover 0.5s linear",
        wiggle: "wiggle 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
};
