/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      desktop: '1580px',
      tablet: '1200px',
    },
    extend: {
      colors: {
        bgBlackShadow: '#000000b3',
        bgMainTheme: '#e3e6e6',
        darkTextColor: '#555855',
        bgHeader: '#131921',
        bgNav: '#232F3E',
        selectCategoryBtn: '#E6E6E6',
        hoverSelectCategoryBtn: '#D4D4D4',
        searchBtn: '#FEBD69',
        bgShadowMenu: '',
        bgLiMenu: '#eae8e5',
        bgBeige: '#FFEDCC',
        bgBlue: '#01CAFE',
        bgOrange: '#FC4C01',
        bgGreen: '#8ED77D',
        bgYellow: '#E9B410',
        hiperlinkColor: '#007185',
        bgFooterBtn: '#37475A',
        bgFooterBtnHover: '#47596c',
        bgFooter: '#131A22',
      },
    },
  },
  plugins: [],
};
