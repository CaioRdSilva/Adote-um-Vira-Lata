const defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors : {
        'green' : {
          '900' : '#569562',
        },
        'orange' : {
          '500' : '#FF8A00',
        }
      },
      aspectRatio: {
        'wall': '20 / 9',
      },
      fontFamily: {
        poppins: ['"Poppins"', ...defaultTheme.fontFamily.sans]
      }
    },
    container:{
      padding:{
        sm: '2rem',
        md: '0',
        lg: '0',
        xl: '0',
        '2xl': '0'
      },
      center: true
    }
  },
  plugins: [],
}

