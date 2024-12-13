import daisyui from 'daisyui';
import Banner from './src/Components/Banner';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url('/banner.jpg')"
      }, 
    },
  },
  plugins: [daisyui],
}