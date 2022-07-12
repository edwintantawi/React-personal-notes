/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#f6f6f6',
        secondary: '#fbfbfb',
        accent: '#eeeeee',
        foreground: {
          primary: '#151515',
          secondary: '#797979',
        },
        background: '#ffffff',
        screen: '#f1f1f1',
      },
    },
  },
  plugins: [],
};
