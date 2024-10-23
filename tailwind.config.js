/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}", "./sandbox/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      gray: '#f1f3f3',
      primary: '#4D6564',
      primaryHover: '#438583',
      secondary: '#576b81',
      secondaryHover: '#314963',
      secondaryLight: '#c9d2db',
      textGrey: '#707070',
      customBlack: '#404042',
      lime: '#76cb36',   
    },  
  },
  plugins: [],
}
