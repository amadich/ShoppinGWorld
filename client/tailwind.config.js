/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '400px',
      // => @media (min-width: 640px) { ... }

      'md': '1168px',
      // => @media (min-width: 768px) { ... }

      'lg': '1224px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1380px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },

  daisyui: {
    themes: ["cupcake", "cmyk"],
  },
  
  plugins: [
    daisyui,
  ],
}
