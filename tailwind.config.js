/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        envelope: '#F6EAEB', // Soft blush pink base
        paper: '#FAF6F0',   // Warm cream/beige
        sage: '#9EB0A2',    // Sage green
        gold: '#D4AF37',    // Soft gold accents
        'seal-red': '#A83B40', // Ivory/gold was requested but the description also called it "realistic ivory/gold Wax Seal"
        'wax-seal': '#EADDCE', // Ivory/gold seal base
        'wax-seal-border': '#D4AF37', // Gold 
        textDark: '#2C2B29', // Dark gray for High-contrast typography
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Montserrat"', 'sans-serif'],
      },
      backgroundImage: {
        'noise': "url('https://www.transparenttextures.com/patterns/stardust.png')",
        'paper-texture': "url('https://www.transparenttextures.com/patterns/cream-paper.png')"
      }
    },
  },
  plugins: [],
}
