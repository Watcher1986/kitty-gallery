/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      marginInline: {},
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(525px, 1fr))',
      },
    },
  },
  plugins: [],
};
