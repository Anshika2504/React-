

import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({

  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  plugins: [ 
    tailwindcss(),
  ],
})