/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#04060d',
          900: '#070b16',
          850: '#0a0f1f',
          800: '#0e1426',
          700: '#161d33',
          600: '#1f2742',
          500: '#2b3556',
        },
        brand: {
          50: '#eef4ff',
          100: '#d9e6ff',
          200: '#bcd2ff',
          300: '#8eb3ff',
          400: '#5a8bff',
          500: '#3b6bff',
          600: '#2a4fe0',
          700: '#233fb4',
          800: '#1f3790',
          900: '#1d3275',
        },
        violet: {
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c4fe6',
        },
        accent: {
          cyan: '#22d3ee',
          teal: '#2dd4bf',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'grid-faint':
          'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
        'radial-fade':
          'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
      },
      backgroundSize: {
        grid: '56px 56px',
      },
      animation: {
        'blob-float': 'blobFloat 18s ease-in-out infinite',
        'blob-float-slow': 'blobFloat 26s ease-in-out infinite',
        'fade-up': 'fadeUp 0.9s cubic-bezier(0.22,1,0.36,1) both',
        'fade-in': 'fadeIn 1s ease both',
        'shimmer': 'shimmer 3s linear infinite',
        'gradient-pan': 'gradientPan 8s ease infinite',
        'marquee': 'marquee 40s linear infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'spin-slow': 'spin 18s linear infinite',
      },
      keyframes: {
        blobFloat: {
          '0%,100%': { transform: 'translate(0,0) scale(1)' },
          '33%': { transform: 'translate(30px,-40px) scale(1.08)' },
          '66%': { transform: 'translate(-20px,20px) scale(0.96)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(28px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        gradientPan: {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseGlow: {
          '0%,100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
