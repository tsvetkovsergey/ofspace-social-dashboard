/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f7fbff',
          100: '#f5f6fd',
          200: '#eff2fa',
          210: '#e8eaf2',
          220: '#c3c5cc',
          300: '#eceefd',
          500: '#c7cdf4',
          700: '#3246d3',
          800: '#1d33cc',
        },
        secondary: {
          300: '#d6daf5',
          500: '#00d0ff',
          600: '#02c7fb',
          800: '#00b7e1',
        },
        typo: {
          300: '#c7c7c7',
          400: '#b8c1d9',
          600: '#717075',
          700: '#65697a',
          800: '#23212b',
        },
      },
    },
  },
  plugins: [require('tailwindcss'), require('autoprefixer')],
};
