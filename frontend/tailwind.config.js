/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          900: '#061528',
          800: '#0B1D33',
          700: '#0F2440'
        },
        ink: {
          DEFAULT: '#F4F7FB',
          muted: '#94A3B8',
          faint: '#5B6B82'
        },
        accent: {
          DEFAULT: '#2DD4E0',
          hover: '#5CE1EA',
          muted: 'rgba(45, 212, 224, 0.12)'
        },
        border: {
          subtle: 'rgba(255, 255, 255, 0.08)',
          DEFAULT: 'rgba(255, 255, 255, 0.14)'
        },
        // Legacy aliases are retained for the excluded portfolio demo pages.
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
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      fontSize: {
        display: ['clamp(2.75rem, 5vw, 5.5rem)', { lineHeight: '0.98', letterSpacing: '-0.02em', fontWeight: '800' }],
        headline: ['clamp(2rem, 3vw, 3rem)', { lineHeight: '1.05', letterSpacing: '-0.01em', fontWeight: '800' }],
        eyebrow: ['0.8125rem', { letterSpacing: '0.24em', fontWeight: '700' }]
      },
      borderRadius: {
        card: '1.5rem',
        pill: '9999px'
      },
      boxShadow: {
        hover: '0 20px 40px rgba(0, 0, 0, 0.35)',
        soft: '0 24px 80px rgba(6, 17, 31, 0.16)',
        line: 'inset 0 0 0 1px rgba(255,255,255,0.12)'
      }
    }
  },
  plugins: []
};
