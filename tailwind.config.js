/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        alata: ['Alata', 'sans-serif'],
        josefin: ['"Josefin Sans"', 'sans-serif'],
      },
      colors: {
        'primary-1': 'hsl(0, 0%, 100%)',
        'primary-2': 'hsl(0, 0%, 0%)',
        'primary-3': 'hsl(0, 0%, 55%)',
        'primary-4': 'hsl(0, 0%, 41%)'
      }
    },
  },
  plugins: [],
}

