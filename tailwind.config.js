/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#6D4C41", // Your app's primary color
        secondary: "#A36F5B", // Complementary shade
      },
      width: {
        50: "200px",
      },
      height: {
        50: "200px",
      },
    },
  },
  plugins: [],
};
