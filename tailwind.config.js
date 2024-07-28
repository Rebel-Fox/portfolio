/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./public/404.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        'underline': 'underline 0.35s ease-out 0s 1 both',
        'slide-right':'slide 0.35s ease-out 0s 1 both'
      },
      keyframes:{
        underline:{
          '0%':{width:'0%'},
          '100%':{width:'100%'},
        },
        slide:{
          '0%':{height:'0%'},
          '100%':{height:'100%'}
        }
      }
    },
  },
  plugins: [],
};
