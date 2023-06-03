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
        primary: '#1E90FF',
        secondary: '#4C4CFF',
        yellow: '#FFE736',
        fuchsia: '#FF31B4',
        body: '#EEE',
      }
    },
  },
  plugins: [],
}
