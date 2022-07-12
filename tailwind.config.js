/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#f6f6f6',
        secondary: '#fbfbfb',
        accent: '#eeeeee',
        foreground: '#151515',
        background: '#ffffff',
        screen: '#f1f1f1',
      },
    },
  },
  plugins: [],
};
