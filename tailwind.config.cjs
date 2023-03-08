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
        primary_dark: {
          400: '#3a3a3a',
          500: '#2c2c2c',
          // 600: '#1f1f1f',
          600: '#131224',
          610: '#171717',
          700: '#050505',
          710: '#050510',
        },
        additional_dark: {
          500: '#5336dc',
        },
        typo_dark: {
          300: '#d4d4d4',
          400: '#d3d3d3',
          500: '#d1d1d1',
          600: '#959595',
          700: '#828282',
        },
      },
      boxShadow: {
        offset:
          // '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
          '0 10px 15px 5px rgb(0 0 0 / 0.1), 0 4px 6px 3px rgb(0 0 0 / 0.1)',
        lg_dark:
          '2px 3px 5px 1px rgba(182,71,197,0.5), 0 4px 6px -4px rgba(182,71,197,0.8)',
        sm_dark: '0px 0px 5px 2px rgba(75,158,235,0.5)',
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
        searchbar_dark:
          'linear-gradient(45deg, rgba(80,80,80,1) 0%, rgba(62,62,62,1) 100%)',
        searchbar_dark_hover:
          'linear-gradient(45deg, rgba(60,42,178,1) 0%, rgba(133,28,173,1) 100%)',
        sidebar_dark:
          'linear-gradient(100deg, rgba(62,62,62,1) 0%, rgba(45,45,45,1) 100%)',
      },
    },
  },
  plugins: [require('tailwindcss'), require('autoprefixer')],
};
