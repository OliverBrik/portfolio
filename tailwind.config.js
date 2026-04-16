/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        olive: 'var(--color-olive, #2B2E1F)',
        moss: 'var(--color-moss, #4A5D3A)',
        sage: 'var(--color-sage, #7A8058)',
        gold: 'var(--color-gold, #B89B4F)',
        white: 'var(--color-white, #F4F4F2)',
        'white-85': 'rgba(244,244,242,0.85)',
      },
    },
  },
  plugins: [],
}
