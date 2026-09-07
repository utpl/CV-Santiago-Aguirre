import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#080D16',
          soft: '#0C1422',
          card: '#111C2E',
          line: '#1D2B41',
        },
        navy: {
          DEFAULT: '#004170',
          light: '#1A5C8F',
          dark: '#002B4A',
        },
        gold: {
          DEFAULT: '#F2BF42',
          soft: '#F7D57E',
          dark: '#C9992B',
        },
        mist: {
          DEFAULT: '#E9EEF6',
          muted: '#94A3B8',
          faint: '#64748B',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'Georgia', 'serif'],
      },
      maxWidth: {
        content: '68rem',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(14px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
      },
    },
  },
  plugins: [],
};

export default config;
