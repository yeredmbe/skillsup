/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#000000', // Our pure black accent
        },
        accent: {
          blue: '#2563EB',
          'blue-hover': '#1D4ED8',
          'blue-light': 'rgba(37, 99, 235, 0.1)',
        }
      },
      borderRadius: {
        '8px': '8px',
      }
    },
  },
  plugins: [],
}
