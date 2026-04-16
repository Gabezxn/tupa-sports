import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './context/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0A4DFF',
          night: '#05070D',
          steel: '#111827',
          cloud: '#F5F7FA'
        }
      },
      boxShadow: {
        glow: '0 10px 40px -15px rgba(10, 77, 255, 0.55)'
      }
    }
  },
  plugins: []
};

export default config;
