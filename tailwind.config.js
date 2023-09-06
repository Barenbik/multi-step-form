/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'marine-blue': '#02295a',
        'cool-gray': '#9699ab',
        'light-gray': '#d6d9e6',
        'alabaster': '#fafbff'
      },
    },
  },
  plugins: [],
}

