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
        'alabaster': '#fafbff',
        'purplish-blue': '#473dff',
        'light-blue': '#bfe2fd',
        'pastel-blue': '#adbeff'
      },
      backgroundImage: {
        'mobile-header-pattern': "url('../src/assets/images/bg-sidebar-mobile.svg')",
        'desktop-header-pattern': "url('../src/assets/images/bg-sidebar-desktop.svg')",
      }
    },
  },
  plugins: [require("@tailwindcss/forms")],
}

