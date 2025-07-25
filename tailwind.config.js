/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'sunset-brown': 'var(--sunset-brown)',
        'sunset-orange': 'var(--sunset-orange)',
        'sunset-peach': 'var(--sunset-peach)',
      },
      fontFamily: {
        sans: [
          'Inter',
          'SF Pro Display',
          'Segoe UI',
          'Arial',
          'sans-serif',
        ],
      },
      boxShadow: {
        sunset: '0 4px 32px 0 rgba(255, 126, 95, 0.15)',
      },
    },
  },
  plugins: [],
};
