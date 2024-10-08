/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
      'monitor': '1536px'
    },
    backgroundColor: {
      'primary': '#F2F3F2',
      'black': '#1e1e1e',
      'white': '#FFFFFF'
    },
    colors: {
      'black': '#1E1E1E',
      'card-text': '#737373',
      'paragraph': '#555555',
      'white': '#FFFFFF',
    },
    borderColor: {
      'primary': '#1e1e1e',
    },
    fontFamily: {
      'Raleway': ["Raleway", "sans-serif"]
    },
    extend: {
      keyframes: {
        "fade-out-down": {
          from: {
            opacity: "1",
            transform: "translateY(0)"
          },
          to: {
            opacity: "0",
            transform: "translateY(50%)"
          }
        }
      },
      animation: {
        "fade-out-down": "fade-out-down 0.5s ease-out forwards"
      }  
    },
  },
  plugins: [
    require('daisyui'),
    require('tailwindcss-animated')
  ],
  darkMode: 'class'
}

