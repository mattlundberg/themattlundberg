module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--neon-purple)',
        secondary: 'var(--electric-blue)',
        accent: 'var(--neon-pink)',
      },
    },
  },
  plugins: [],
} 