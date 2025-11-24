/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 1.5s ease-in forwards',
        float: 'float 3s ease-in-out infinite',
        spinSlow: 'spin 20s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
      },
      colors: {
        gradientStart: '#ff6ec4',
        gradientEnd: '#7873f5',
      },
    },
  },
  plugins: [],
};
