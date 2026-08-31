/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#FAF7F2',
          100: '#F7F3EA', // Primary Background
          DEFAULT: '#F7F3EA',
          200: '#EFE7DA', // Secondary Background
          300: '#E5DCCD',
        },
        card: {
          DEFAULT: '#FFFDF8', // Card Background
        },
        charcoal: {
          DEFAULT: '#302C28', // Primary Text
          muted: '#746B61',   // Secondary Text
          dark: '#1F1C19',
        },
        gold: {
          light: '#F4ECE0',
          soft: '#D2BE91',    // Soft Gold
          DEFAULT: '#B49A6A', // Muted Gold
          dark: '#937B4D',
        },
        maroon: {
          accent: '#702D35',  // Maroon Accent (<3% usage)
          hover: '#5B232A',
          light: '#F9F1F2',
        },
        warmBorder: '#DED4C5', // Subtle Warm Border
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'editorial': '0 4px 20px -2px rgba(48, 44, 40, 0.04), 0 2px 6px -1px rgba(180, 154, 106, 0.03)',
        'editorial-hover': '0 12px 30px -4px rgba(48, 44, 40, 0.07), 0 4px 12px -2px rgba(180, 154, 106, 0.06)',
      },
    },
  },
  plugins: [],
}
