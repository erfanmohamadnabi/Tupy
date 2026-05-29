/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {

      colors : {
        "bg-body" : {
          DEFAULT : '#041430'
        }
      }

      ,
      spacing : {
        "17" : "4.25rem",
        "88" : "22rem",
        "container" : "1260px",
        "110" : "27.5rem"
      },

      fontFamily : {

        "Yekan" : "Yekan",
        "YekanMedium" : "Yekan Medium",
        "YekanRegular" : "Yekan Regular",

        "YekanLight" : "Yekan Light",

        "YekanBold" : "Yekan Bold",
        "YekanDemiBold" : "Yekan DemiBold",
        "YekanExtraBold" : "Yekan ExtraBold",

      }
      ,

      lineHeight : {
        '14' : '3.5rem'
      }
      ,

      screens: {
        '3xl':{'max':'1850px'},
        '2xl': {'max': '1600px'},
        'desktop': {'max' : '1280px'},
        'laptop':{ 'max' : '1024px'},
        'tablet':{'max' : '630px'},
        'mobile':{ 'max' :' 550px'},
      }
      
    },

    container: {
      center: true,
      padding : {
        DEFAULT : '1rem',
      },
      // screens: {
      //   'mobile': '640px',
      //   'tablet': '768px',
      //   'laptop': '1024px',
      //   'desktop': '1280px',
      //   '2xl': '1300px'
      // }
    },

  },

  plugins: [
    function ({ addVariant }) {
        addVariant('child', '& > *');
        addVariant('child-hover', '& > *:hover');
    }
  ],
}

