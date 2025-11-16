/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './index.html'
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#6A3EFE',
        'brand-secondary': '#B098FF',
        'dark-bg': '#121212',
        'dark-surface': '#1E1E1E',
        'dark-surface-2': '#2A2A2A',
        'dark-text': '#E0E0E0',
        'dark-text-secondary': '#A0A0A0',
      }
    },
  },
  plugins: [],
};
