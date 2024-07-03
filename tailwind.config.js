module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'ub-grey': '#111111',
      'ub-warm-grey': "#AEA79F",
      'ub-cool-grey-dark': "#222222",
      'ub-cool-grey': "#2b2b2b",
      'ub-cool-grey-light': "#393939",
      'ub-cool-grey-lighter': "#555555",
      'ub-cool-grey-lightest': "#666666",
      'ub-orange': "#E95420",
      'ub-lite-abrgn': "#77216F",
      'ub-med-abrgn': "#5E2750",
      'ub-drk-abrgn': "#2C001E",
      'ub-window-title': "#201f1f",
      'ub-gedit-dark': "#021B33",
      'ub-gedit-light': "#003B70",
      'ub-gedit-darker': "#010D1A",
      "ub-light": "#EEEEEE"
    }),
    textColor: theme => ({
      ...theme('colors'),
      'ubt-grey': '#F6F6F5',
      'ubt-warm-grey': "#AEA79F",
      'ubt-cool-grey': "#333333",
      'ubt-blue': "#3465A4",
      'ubt-green': "#4E9A06",
      'ubt-gedit-orange': "#F39A21",
      'ubt-gedit-blue': "#50B6C6",
      'ubt-gedit-dark': "#003B70",
      'ubt-something' : "#0000ff99",
      "ubt-spring-green" : "#5e8d5a",
      "ubt-reactor-red": "#DC143C"
    }),
    borderColor: theme => ({
      ...theme('colors'),
      DEFAULT: theme('colors.gray.300', 'currentColor'),
      'ubb-orange': '#E95420'
    }),
    minWidth: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
    },
    minHeight: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
    },
    extend: {
      zIndex: {
        '-10': '-10',
      },
      outlineOffset: {
        '2': '2px',
        '4': '4px',
      }
    },
  },
  variants: {
    extend: {
      outlineOffset: ['focus', 'hover'], // Add variants if needed
    }
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.outline-offset-2': {
          'outline-offset': '2px',
        },
        '.outline-offset-4': {
          'outline-offset': '4px',
        },
        // Add more utilities as needed
      }
      addUtilities(newUtilities, ['responsive', 'hover']);
    }
  ],
}
