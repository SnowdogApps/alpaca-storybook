module.exports = {
  purge: [
    'src/**/*.vue'
  ],
  theme: {
    extend: {
      maxWidth: {
        content: '1328px'
      },
      colors: {
        gray: {
          20: '#dde1e6',
          40: '#c1c7cd',
          60: '#a2a9b0',
          80: '#6e767c',
          90: '#121619'
        },
        coral: {
          20: '#ffefec',
          40: '#f5dbd7',
          80: '#deb9b3',
          90: '#956760'
        },
        red: {
          20: '#ffd7d9',
          60: '#ff8389',
          90: '#da1e28'
        },
        blue: {
          20: '#d0e2ff',
          60: '#78a9ff',
          90: '#0043ce'
        },
        green: {
          20: '#cfe8cc',
          60: '#6eb966',
          90: '#0e8a00'
        },
        yeallow: {
          20: '#fcf3d1',
          60: '#f7da76',
          90: '#f1c21b'
        },
        orange: {
          20: '#ffe6d5',
          60: '#ffb580',
          90: '#ff832b'
        },
        focus: '#00b8ff'
      }
    },
    screens: {
      xs: '320px',
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1200px',
      xxl: '1600px'
    },
    fontFamily: {
      serif: ['Playfair Display', 'serif'],
      sans: ['Work Sans', 'sans-serif'],
      mono: ['menlo', 'monaco', 'consolas', 'Liberation Mono', 'Courier New', 'monospace']
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      primary: theme('colors.white'),
      secondary: theme('colors.gray.200'),
      dark: theme('colors.gray.800')
    }),
    borderColor: theme => ({
      ...theme('colors'),
      primary: theme('colors.coral.80'),
      secondary: theme('colors.gray.90'),
      form: theme('colors.gray.500'),
      dark: theme('colors.gray.800'),
      light: theme('colors.gray.300'),

    }),
    textColor: theme => ({
      ...theme('colors'),
      primary: theme('colors.gray.90'),
      secondary: theme('colors.gray.80')
    }),
    placeholderColor: theme => ({
      primary: theme('colors.gray.80'),
    }),
    fill: theme => ({
      ...theme('colors'),
      dark: theme('colors.gray.90'),
      light: theme('colors.gray.200')
    }),
    outline: theme => ({
      focus: [`2px solid ${theme('colors.bright-sky-blue')}`, '-1px']
    })
  },
  variants: {},
  plugins: [],
  corePlugins: {
    float: false
  }
}
