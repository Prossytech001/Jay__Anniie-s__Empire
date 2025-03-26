import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        tertiary: 'var(--tertiary)',
        quaternary: 'var(--quaternary)',
        white: 'var(--white)',
        black: 'var(--black)',
        quinary: 'var(--quinary)',
        font: 'var(--font)',
        
        
      }
    }
  },
  plugins: [
    tailwindcss(),
    react()],
})
