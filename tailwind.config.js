/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {


      animation: {
        marquee: 'marquee 25s linear infinite',
        productFadeDown: 'productFadeDown 0.7s cubic-bezier(.22,1,.36,1) forwards',
      },

      keyframes: {
          marquee: {
              '0%': {
                  transform: 'translateX(0)',
              },
              '100%': {
                  transform: 'translateX(-100%)',
              },
          },

          productFadeDown: {
              '0%': {
                  opacity: '0',
                  transform: 'translateY(-30px) scale(.95)',
              },
              '100%': {
                  opacity: '1',
                  transform: 'translateY(0) scale(1)',
              },
          },
      },

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
      }
    },

  },

  plugins: [
    function ({ addVariant }) {
        addVariant('child', '& > *');
        addVariant('child-hover', '& > *:hover');
    }
  ],
}

