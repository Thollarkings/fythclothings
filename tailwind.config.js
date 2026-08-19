/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#c9a227',
        black: '#111111',
        cream: '#f6f0dd',
        pink: '#e83e8c',
        'dark-blue': '#0d1b2a',
        'navy': '#1b2838',
      },
      fontFamily: {
        sans: ['Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
