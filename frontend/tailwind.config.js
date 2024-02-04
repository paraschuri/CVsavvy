/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {
      colors: {
        'lightGreen': '#56e356',
        'darkGreen' : '#028e02',
        'lightBlack' : '#474B4F',
        'darkBlack' : '#222629',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
}

