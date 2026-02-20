import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,js,jsx}',
    './app/components/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}'
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem'
      }
    },
    extend: {
      colors: {
        primary: '#F97316',
        primaryLight: '#FFF7ED',
        accent: '#FDBA74',
        darkText: '#1F2937',
        bg: {
          light: '#FFF7ED',
          DEFAULT: '#FFFBF7',
          dark: '#F7F2EE'
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui']
      },
      borderRadius: {
        xl: '1rem'
      },
      boxShadow: {
        card: '0 6px 18px rgba(13,17,23,0.08)',
        cardHover: '0 12px 30px rgba(13,17,23,0.12)'
      }
    }
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')]
}

export default config
