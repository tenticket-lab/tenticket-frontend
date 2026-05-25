/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        forest: '#1E5631',
        leaf: '#4C9A2A',
        sky: '#8FD3FF',
        earth: '#B57F50'
      },
      keyframes: {
        sway: {
          '0%, 100%': { transform: 'rotate(0deg) translateY(0px)' },
          '50%': { transform: 'rotate(1deg) translateY(-4px)' }
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        sway: 'sway 4s ease-in-out infinite',
        fadeUp: 'fadeUp 0.5s ease-out'
      }
    }
  },
  plugins: []
}
