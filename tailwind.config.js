/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgColor: '#0f111a',
        surfaceColor: '#1a1d2d',
        surfaceHover: '#23273a',
        primaryColor: '#4facfe',
        textMain: '#f8f9fa',
        textMuted: '#9ca3af',
        borderColor: '#2d3142',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
