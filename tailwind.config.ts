import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
 colors: {
        // Dark theme base
        'dark-bg': '#0a0e27',
        'dark-secondary': '#1a1f3a',
        'dark-tertiary': '#252d47',
        
        // Neon accents
        'neon-cyan': '#00d9ff',
        'neon-blue': '#0096ff',
        'neon-purple': '#d946ef',
        'neon-pink': '#ec4899',
        
        // Glowing colors with opacity
        'glow-cyan': 'rgba(0, 217, 255, 0.1)',
        'glow-blue': 'rgba(0, 150, 255, 0.1)',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { textShadow: '0 0 10px rgba(0, 217, 255, 0.5)' },
          '50%': { textShadow: '0 0 20px rgba(0, 217, 255, 0.8)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'slide-in': {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'glow-box': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 217, 255, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(0, 217, 255, 0.6)' },
        },
      },
      animation: {
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'slide-in': 'slide-in 0.6s ease-out',
        'fade-in': 'fade-in 0.6s ease-out',
        'glow-box': 'glow-box 2s ease-in-out infinite',
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(10px)',
      },    },
  },
  plugins: [require('tailwindcss-animate')],
}

export default config