/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        de: {
          black: '#111827',
          red: '#DC2626',
          gold: '#F59E0B',
          'gold-dark': '#D97706',
        },
        urdu: {
          green: '#047857',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        urdu: ['"Noto Nastaliq Urdu"', '"Jameel Noori Nastaleeq"', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
