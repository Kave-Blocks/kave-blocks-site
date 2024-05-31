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
    colors: {
      'black': '#1E1E1E',
      'card-text': '#737373',
      'paragraph': '#555555',
      'white': '#FFFFFF',
    },
    fontFamily: {
      'Raleway': ["Raleway", "sans-serif"]
    },
    extend: {},
  },
  plugins: [
    require('daisyui'),
    require('tailwindcss-animated')
  ],
  darkMode: 'class'
}

