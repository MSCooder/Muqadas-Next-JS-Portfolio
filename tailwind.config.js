/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/app/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hazel-green': '#22c55e',
        'aisa-black': '#0a0a0a',
      },
      fontFamily: {
        sans: ['var(--font-jakarta)'],
        jetbrains: ['var(--font-jetbrains)'],
      },
    },
  },
  plugins: [],
};