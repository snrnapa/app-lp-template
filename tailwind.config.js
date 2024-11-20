module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './assets/**/*.{js,jsx,ts,tsx}',  // 必要に応じて追加
  ],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: false,
  theme: {
    fontFamily: {
      "display" : ["Noto Sans","sans-serif"],
      "body" : ["Noto Sans","sans-serif"],
    },
    extend: {},
  },
  variants: {},
  plugins: [],
}
