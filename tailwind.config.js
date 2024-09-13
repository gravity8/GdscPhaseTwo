/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#111B47",
        primaryVariantTwo: "#091133",
        secondary:"#505F98",
        gray: "#5D6970"
      },
      screens:{
        maxWidth: {'max':'1440px'},
        //breakpoint for max width of 768px
        maxSm : { 'max': '768px' },
      },
      fontFamily:{
        roboto : ['Roboto','Sans-serif']
      }
    },
  },
  plugins: [],
}
