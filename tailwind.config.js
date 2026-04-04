/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        accent: {
          DEFAULT: '#D4A053',
          light: '#E8C47A',
          muted: '#A07D3A',
        },
        surface: {
          primary: '#1A1A1D',
          card: '#222225',
          elevated: '#2A2A2E',
          border: '#2E2E32',
        },
        matte: {
          white: '#F0EDE8',
          gray: '#8A8A8F',
          light: '#B0AFA8',
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
