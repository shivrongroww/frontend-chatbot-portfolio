/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        dark: {
          bg: '#0a0a0f',
          sidebar: '#111118',
          card: '#16161f',
          elevated: '#1e1e2a',
          border: 'rgba(255, 255, 255, 0.06)',
        },
        text: {
          primary: '#f0f0f5',
          secondary: '#8888a0',
          muted: '#55556a',
        },
        accent: {
          DEFAULT: '#8b5cf6',
          light: '#a78bfa',
          dark: '#6d28d9',
          glow: 'rgba(139, 92, 246, 0.3)',
        },
      },
    },
  },
  plugins: [],
}
