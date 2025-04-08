// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Add this if your Tailwind classes appear in .css files:
    "./styles/**/*.{css}",
  ],
  theme: {
    extend: {
      colors: {
        "rich-brown": "#4a2c2a",
        "antique-white": "#f8f1e7",
        "dark-gold": "#aa7e39",
      },
      fontFamily: {
        renaissance: ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [],
};
