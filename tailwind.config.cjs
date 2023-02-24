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
          250: '#e0e2e9',
          260: '#d4d6dd',
          300: '#eceefd',
          500: '#c7cdf4',
          700: '#3246d3',
          710: '#3247cf',
          800: '#1d33cc',
        },
        secondary: {
          200: '#e6faff',
          300: '#d6daf5',
          400: '#c5ccf9',
          500: '#00d0ff',
          600: '#02c7fb',
          800: '#00b7e1',
        },
        typo: {
          300: '#c7c7c7',
          400: '#b8c1d9',
          500: '#aaafd6',
          600: '#717075',
          700: '#65697a',
          800: '#23212b',
        },
        additional: {
          100: '#eeb07a',
          110: '#fdf7f2',
          200: '#00d0ff',
        },
      },
      boxShadow: {
        offset:
          // '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
          '0 10px 15px 5px rgb(0 0 0 / 0.1), 0 4px 6px 3px rgb(0 0 0 / 0.1)',
      },
      transitionProperty: {
        sidebarIcon: 'box-shadow, background-color, outline-color',
      },
      backgroundImage: {
        'account-reached':
          'url("/src/assets/acc_reached.svg"), linear-gradient(180deg, rgba(0,50,182,1) 0%, rgba(52,72,211,1) 100%)',
        'account-engaged':
          'url("/src/assets/acc_engaged.svg"), linear-gradient(180deg, rgba(218,155,100,1) 0%, rgba(240,177,123,1) 100%)',
        'average-reached':
          'url("/src/assets/avrg_reached.svg"), linear-gradient(180deg, rgba(0,190,232,1) 0%, rgba(19,212,255,1) 100%)',
        'average-engaged':
          'url("/src/assets/avrg_engaged.svg"), linear-gradient(180deg, rgba(249,78,111,1) 0%, rgba(228,51,93,1) 100%)',
      },
    },
  },
  plugins: [require('tailwindcss'), require('autoprefixer')],
};
