/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          primary: '#00ff9d',
          secondary: '#00b8ff',
          accent: '#ff00ff',
          dark: '#0a192f',
          darker: '#060d1b',
        },
      },
      boxShadow: {
        'neon': '0 0 5px theme(colors.neon.primary), 0 0 20px theme(colors.neon.primary)',
        'neon-hover': '0 0 10px theme(colors.neon.primary), 0 0 40px theme(colors.neon.primary)',
        'neon-blue': '0 0 5px theme(colors.neon.secondary), 0 0 20px theme(colors.neon.secondary)',
        'neon-pink': '0 0 5px theme(colors.neon.accent), 0 0 20px theme(colors.neon.accent)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}