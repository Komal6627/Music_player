/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom, rgba(76, 0, 0, 1), rgba(10, 10, 10, 1))',
      },
    },
  },
  plugins: [],
}

