/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#06111f',
          900: '#071a2f',
          800: '#0b2541',
          700: '#0f355f'
        },
        cyanbrand: {
          500: '#13c8de',
          400: '#39d7e8',
          300: '#6beaff',
          200: '#a8f4ff',
          100: '#d8fbff'
        },
        ink: '#162132'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Arial', 'sans-serif']
      },
      boxShadow: {
        soft: '0 24px 80px rgba(6, 17, 31, 0.16)',
        line: 'inset 0 0 0 1px rgba(255,255,255,0.12)'
      }
    }
  },
  plugins: []
};
