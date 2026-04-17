/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px) scale(0.98)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 200ms ease-out',
        slideUp: 'slideUp 250ms ease-out',
        slideInLeft: 'slideInLeft 250ms ease-out',
      },
      colors: {
        // Names kept as `dark.*` for backwards-compat with existing class usage,
        // but values are remapped to the new light theme.
        dark: {
          bg: '#ececec',        // outer page background
          sidebar: '#ffffff',   // sidebar / panel surface
          card: '#ffffff',      // cards
          elevated: '#f5f5f7',  // hovered / elevated rows
          border: 'rgba(0, 0, 0, 0.08)',
        },
        text: {
          primary: '#1a1a1f',
          secondary: '#6b6b76',
          muted: '#9a9aa6',
        },
        accent: {
          DEFAULT: '#f97316',         // orange-500
          light: '#fb923c',           // orange-400
          dark: '#ea580c',            // orange-600
          glow: 'rgba(249, 115, 22, 0.25)',
        },
      },
    },
  },
  plugins: [],
}
