/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        leagueSpartan : ['League Spartan', 'sans-serif'],
        Grandstander : ['Grandstander', 'cursive']
      },
    },
    screens: {
      "2xs": "375px",
      xs: "480px",
      ss: "620px",
      sm: "768px",
      '2sm': "992px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}

