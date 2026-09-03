import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFBF7',
          100: '#FAF6F0',
          200: '#F3EFE6',
          300: '#E8E1D5',
        },
        sage: {
          50: '#F4F7F4',
          100: '#E6ECE6',
          200: '#CAD8CA',
          700: '#4A5D4E',
          800: '#38483B',
          900: '#263329',
        },
        bronze: {
          400: '#C9A86A',
          500: '#B8934E',
          600: '#9A7737',
        },
        charcoal: {
          800: '#2C302E',
          900: '#1B1E1C',
        }
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-jakarta)', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
