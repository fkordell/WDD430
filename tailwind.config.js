/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      translate: {
        '1':  '-8px',
        '-1': '8px',
      },
      spacing: {
        '1.5': '0.375rem',
      },
      rotate: {
        '45': '45deg',
      }
    },
  },
  plugins: [],
}

