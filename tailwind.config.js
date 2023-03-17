/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gradient1':'rgba(255, 255, 255, 0.03)',
        'gradient2':'rgba(255, 255, 255, 0.33)',
        'darkGrey':'rgba(38, 50, 56, 1)',
        'lightGrey':'rgba(128, 131, 133, 1)',
        'boxWhite':'rgba(251, 250, 250, 1)',
        'btnYellow':'rgba(246, 159, 23, 1)',
        'background':'rgba(0, 0, 0, 0.35)',
        'siteGrey':'rgb(25,25,25)',
        'textGrey':'rgba(128, 131, 133, 1)',
        'faqGrey':'rgba(216, 216, 216, 1)',
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
      },
      fontSize: {
        sm: ['9px', '13.5px'],
        ss: ['7px', '7px'],
        base:['10px', '15px'],
        lg: ['18px', '27px'],
        l: ['11px', '16.5px'],
        lm: ['8px', '12px'],
        m: ['12px', '18px'],
        smm: ['14px', '21px'],
        xl: ['16px', '24px'],
      },
      backgroundImage: {
        'services1': "url('/src/img/services2.png')",
        'services2': "url('/src/img/services1.png')",
        'working': "url('/src/img/working.png')",
        'iphone': "url('/src/img/iphone.png')",
        'iphoneContent': "url('/src/img/iphoneContent.svg')",
        'innercard1': "url('/src/img/innercard1.svg')",
        'innercard2': "url('/src/img/innercard2.svg')",
        'innercardBig1': "url('/src/img/innercardBig1.png')",
        'innercardBig2': "url('/src/img/innercardBig2.png')",
      }
      
    },
  },
  plugins: [],
}