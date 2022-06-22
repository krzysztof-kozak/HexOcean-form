/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        'slide-from-top': 'slide-from-top 0.6s ease-in-out',
      },
      keyframes: {
        'slide-from-top': {
          '0%': { transform: 'translateY(-100px)' },
          '100%': { transform: 'translateY(0px)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
