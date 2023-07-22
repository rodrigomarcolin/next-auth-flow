/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          DEFAULT: 'var(--color-primary)',      // Primary color
          light: 'var(--color-primary-light)',  // Light variant of primary color
          dark: 'var(--color-primary-dark)',    // Dark variant of primary color
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)',    // Secondary color
          light: 'var(--color-secondary-light)',// Light variant of secondary color
          dark: 'var(--color-secondary-dark)',  // Dark variant of secondary color
        },
        accent: {
          DEFAULT: 'var(--color-accent)',        // Accent color
          light: 'var(--color-accent-light)',    // Light variant of accent color
          dark: 'var(--color-accent-dark)',      // Dark variant of accent color
        },
        font: {
          DEFAULT: 'var(--color-font)',          // Default font color
          light: 'var(--color-font-light)',      // Light variant of font color
          dark: 'var(--color-font-dark)',        // Dark variant of font color
        },
      }
    },
  },
  plugins: [],
}
