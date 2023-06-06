export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      body: ['General Sans', 'sans-serif']
    },
    extend: {
      colors: {
        'primary': '#1E90FF',
        'secondary': '#4C4CFF',
        'yellow': '#FFE736',
        'fuchsia': '#FF31B4',
        'btnGray': '#e1e1e1d',
        'body': '#EEE',
        'command': '#DEDEDE'
      },
      backgroundImage: {
        'blink': "url('./src/assets/svg/blink.svg')",
        'lines': "url('./src/assets/svg/lines.svg')"
      },
      backgroundSize: {
        'fill': '300%',
      },
    },
  },
  plugins: [],
}
