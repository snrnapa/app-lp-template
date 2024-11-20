const purgecss =
  process.env.NODE_ENV === 'production'
    ? {
        '@fullhuman/postcss-purgecss': {
          content: [
            './pages/**/*.{js,jsx,ts,tsx}',
            './components/**/*.{js,jsx,ts,tsx}',
          ],
          defaultExtractor: (content) =>
            content.match(/[\w-/:]+(?<!:)/g) || [],
        },
      }
    : {};

module.exports = {
  plugins: {
    'postcss-import': {},
    tailwindcss: {},
    autoprefixer: {},
    ...purgecss, // PurgeCSS を環境に応じて追加
    'postcss-preset-env': {},
  },
};
