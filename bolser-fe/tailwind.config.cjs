/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg':
          "linear-gradient(rgba(212, 202, 88, 0.5), rgba(225, 113, 66, 0.5)),url(./assets/hero-background.jpg)",
        'body-bg':
          "linear-gradient(rgba(212, 202, 88, 0.5), rgba(225, 113, 66, 0.5)),url(./assets/body-background.jpg)",
      },
      colors: {
        'stone': '#f0f1dd',
        'grey': '#cbbebe',
      },
      fontFamily: {
        'NYCD': ['Nothing You Could Do', 'cursive'],
      },
    },
  },
  plugins: [],
}
