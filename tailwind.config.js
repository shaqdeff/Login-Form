/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#EFECEC',
        gray: '#9F9F9F',
        peach: '#F0C2AE',
        melon: '#FC596D',
        cyan: '#8DDDD8',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
