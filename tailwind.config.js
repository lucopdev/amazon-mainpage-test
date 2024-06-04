/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      desktop: '1580px',
      tablet: '1200px',
    },
    extend: {
      backgroundImage: {
        'gradient-to-b': 'linear-gradient(to top, #e3e6e6, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))',
      },
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
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none',
        },
        '.no-scrollbar': {
          'scrollbar-width': 'none',
          '-ms-overflow-style': 'none',
        },
        '.custom-select': {
          'padding-right': '20px',
          appearance: 'none',
          '-webkit-appearance': 'none',
          '-moz-appearance': 'none',
          position: 'relative',
          width: 'auto',
        },
        '.custom-select-container::after': {
          content: '"\\25BC"',
          position: 'absolute',
          right: '5px',
          top: '50%',
          transform: 'translateY(-50%)',
          'pointer-events': 'none',
          'font-size': '12px',
          color: '#555855',
          'background-color': '#e6e6e6',
          width: '15px',
        },
        '.custom-select-container:hover::after': {
          color: '#333',
          'background-color': '#d4d4d4',
        },
        '.custom-select:focus': {
          'border-color': 'none',
          outline: 'none',
        },
        '.menu-bar-ul': {
          height: 'calc(100vh - 50px)',
        },
        '.menu-open': {
          transition: 'left 0.4s ease',
        },
        '.menu-close': {
          transition: 'left 0.5s ease',
        },
      });
    },
  ],
};
