/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,tsx,jsx}"],
  theme: {
    screens: {
      'md': "1000px"
    },
    extend: {
      fontFamily: {
        'balsamiq': ['Balsamiq Sans'],
        'Montserrat': ['Montserrat'],
      },
    },
  },
  variants: {
    extend: {
      padding: ['last'],
    }
  },
  plugins: [],
}

