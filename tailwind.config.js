/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: '#08090D',
          light: '#0E1118',
          card: '#121520',
          border: '#1E2333'
        },
        charcoal: {
          DEFAULT: '#14161F',
          surface: '#1A1E2B',
          hover: '#22283A'
        },
        gold: {
          DEFAULT: '#D4AF37',
          light: '#F5D77F',
          dark: '#9A7B20',
          amber: '#E5A93C',
          glow: 'rgba(212, 175, 55, 0.15)'
        },
        titanium: {
          light: '#E2E6EE',
          DEFAULT: '#B0B7C6',
          muted: '#858E9F',
          dark: '#3A4050'
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'Space Grotesk', 'sans-serif'],
        serif: ['var(--font-cinzel)', 'Cinzel', 'serif']
      },
      boxShadow: {
        'gold-sm': '0 0 15px -3px rgba(212, 175, 55, 0.2)',
        'gold-md': '0 0 30px -5px rgba(212, 175, 55, 0.3)',
        'gold-lg': '0 0 50px -10px rgba(212, 175, 55, 0.4)',
        'dark-card': '0 20px 40px -15px rgba(0, 0, 0, 0.7)'
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite linear'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        }
      }
    },
  },
  plugins: [],
}