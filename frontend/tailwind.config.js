/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          primary: '#1D2955',
          yellowAccent: '#FFD700',
          lightBg: '#F1EEE4',
          deepText: '#100C24',
          emerald: '#10B981',
          scarlet: '#EF4444',
        },
        fontFamily: {
          sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        },
      },
    },
    plugins: [],
  };
  
  