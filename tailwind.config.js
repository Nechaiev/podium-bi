/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor:   'var(--primaryColor)',
        secondaryColor: 'var(--secondaryColor)',
        bgBody:         'var(--bgBody)',
      },
      fontSize: {
        title_1:              'var(--title_1)',
        title_2:              'var(--title_2)',
        title_3:              'var(--title_3)',
        title_4:              'var(--title_4)',
        title_5:              'var(--title_5)',
        title_6:              'var(--title_6)',
      },
      fontFamily: {
        fontPrimary:          'var(--fontPrimary)',
        fontSecondary:        'var(--fontSecondary)',
      },
    },
  },
  plugins: [],
}

