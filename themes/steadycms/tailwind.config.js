/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./layouts/index.html", 
            "./layouts/404.html", 
            "./layouts/_default/*.{html,js}",
            "./layouts/page/*.{html,js}",
            "./layouts/partials/*.{html,js}",
            "./layouts/tags/*.{html,js}"
          ],  
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },    
    extend: {
      colors: {
        tint: "#EAEEEF",
        dark: {
          0: "#0E1213",
          1: "#202628",
        }
      }
    },
    backgroundImage: {
      'hero': "url('/img/bg.svg')",
    } 
  },
  plugins: [],
}

