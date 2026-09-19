import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#0A0A0F',
        ivory: '#F5F0E8',
        bone: '#E8E2D6',
        amber: '#C8922A',
        carbon: '#1A1A24',
        slate: '#6B6B7A',
        mist: '#A8A8B3',
        ghost: '#F5F0E8',
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'Georgia', 'serif'],
        inter: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-dm-mono)', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(64px, 8vw, 120px)', { lineHeight: '1.0', letterSpacing: '-0.03em' }],
        'display-l': ['clamp(48px, 6vw, 80px)', { lineHeight: '1.05', letterSpacing: '-0.025em' }],
        'display-m': ['clamp(36px, 4.5vw, 56px)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-s': ['clamp(28px, 3vw, 40px)', { lineHeight: '1.15', letterSpacing: '-0.015em' }],
        'body-l': ['clamp(17px, 1.5vw, 20px)', { lineHeight: '1.65' }],
        'body-m': ['16px', { lineHeight: '1.65' }],
        'caption': ['13px', { lineHeight: '1.4', letterSpacing: '0.08em' }],
        'metric': ['clamp(64px, 8vw, 112px)', { lineHeight: '1.0', letterSpacing: '-0.04em' }],
      },
      spacing: {
        'section': 'clamp(80px, 10vw, 160px)',
        'section-sm': 'clamp(48px, 6vw, 96px)',
      },
      maxWidth: {
        'content': '1440px',
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'draw': 'draw 1.5s ease forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotateX(0deg) rotateY(0deg)' },
          '50%': { transform: 'translateY(-16px) rotateX(2deg) rotateY(2deg)' },
        },
      },
      backdropBlur: {
        'nav': '20px',
      },
      transitionTimingFunction: {
        'expo-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      transitionDuration: {
        '400': '400ms',
        '700': '700ms',
        '900': '900ms',
      },
    },
  },
  plugins: [],
}

export default config
