module.exports = {
  plugins: {
    'postcss-preset-env': {},
    "@tailwindcss/postcss": {},
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
  }
}