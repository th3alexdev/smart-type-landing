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
      backgroundImage: {
        'blink': "url('./src/assets/svg/blink.svg')",
        'lines': "url('./src/assets/svg/lines.svg')",
        'tab-decoration': "url('./src/assets/test_browser/tab-rounded.svg')"
      },
      backgroundSize: {
        'fill': '200%',
      },
      colors: {
        'primary': '#1E90FF',
        'primary-hov': '#66B2FF',
        'secondary': '#4C4CFF',
        'secondary-hov': '#8080FF',
        'yellow': '#FFE736',
        'fuchsia': '#FF31B4',
        'btnGray': '#e1e1e1d',
        'body': '#EEE',
        'command': '#DEDEDE',
        'tabs-bar': '#D9D9D9',
        'chatgpt-sidebar-pri': '#202123',
        'chatgpt-sidebar-sec': '#343541bf',
        'ig-sidebar-pri': '#FFF',
        'ig-sidebar-sec': '#EFEFEF',
        'mail-sidebar-pri': '#FFF',
        'mail-sidebar-sec': '#4285F4',
        'mail-sidebar-thi': '#EFEFEF',
      },
    },
  },
  plugins: [],
}
