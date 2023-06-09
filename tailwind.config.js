export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['"General Sans"', 'sans-serif'],
        input: ['"Segoe UI"', '"Helvetica Neue"', 'Helvetica', '"Lucida Grande"', 'Arial', 'Ubuntu', 'Cantarell', '"Fira Sans"', 'sans-serif']
      },
      backgroundImage: {
        'blink': "url('/src/assets/svg/blink.svg')",
        'lines': "url('/src/assets/svg/lines.svg')",
        'tab-decoration': "url('/src/assets/test_browser/tab-rounded.svg')"
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
        'btn-gray': '#e1e1e1d',
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
        'pseudo-line': '#B3B3B3'
      },
      height: {
        'browser-h': '495px',
        'expanded-fst': '4.5rem',
        'expanded-snd_1': '22rem',
        'expanded-snd_2': '21rem',
        'expanded-snd_3': '16.5rem',
        'expanded-snd_4': '14.8rem',
      },
      maxWidth: {
        'img': '50px',
        'command': '70px'
      },
      padding: {
        'textarea': '0.625rem'
      },
      screens: {
        'xs': '300px',
        '2xs': '380px',
        '3xs': '410px',
        '4xs': '450px',
        '5xs': '540px',
        '6xs': '570px',
        '7xs': '585px',
        'sm': '640px',
        '2sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1440px',
      }
    },
  },
  plugins: [],
}
