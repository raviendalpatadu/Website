/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: '#f59e0b',
      },
    },
  },
  plugins: [require('tailwindcss-textshadow')], 
}
