module.exports = {
  purge:[
    "../lib/orion_web/templates/**/*.html.eex",
    "../lib/orion_web/templates/**/*.html.leex",
    "../lib/orion_web/templates/**/*.html.heex",
    "../lib/orion_web/views/**/*.ex",
    "../lib/orion_web/live/**/*.ex",
    "../lib/orion_web/live/**/*.leex",
    "../lib/orion_web/live/**/*.eex",
    "../lib/orion_web/live/**/*.heex",
    "../assets/js/**/*.js"
  ],
  theme: {
    fontFamily: {
      sans: [
        'WorkSans',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      mono: ['Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace']
    },
    extend: {
      minWidth: {
        '0': '0',
        '1/8': '12.5%',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
        'xs': '20rem',
        '6xl': '72rem',
        'sm': '24rem',
      },
      maxWidth: {
        '0': '0',
        '1/8': '12.5%',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
      },

      minHeight: {
        '0': '0',
        '1/8': '12.5%',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
      },
    },
  },
  variants: {},
  plugins: [
    require('tailwindcss-theming'),
  ]
};