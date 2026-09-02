/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'vb-cream': '#FAF6EF',
        'vb-sand': '#F3EBDD',
        'vb-warm-white': '#FCFAF7',
        'vb-charcoal': '#1B1A17',
        'vb-muted': '#6D665B',
        'vb-saffron': '#D4881E',
        'vb-saffron-light': '#E8A33E',
        'vb-crimson': '#C0392B',
        'vb-crimson-dark': '#9E2B1F',
        'vb-gold': '#C5A059',
        'vb-gold-light': '#DFC48A',
        'vb-border': '#E8DFD0',
        'vb-border-dark': '#D8CCB9',
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
        body: ['Poppins', 'sans-serif'],
        mono: ['Poppins', 'sans-serif'],
        serif: ['Poppins', 'sans-serif'],
        hindi: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'editorial': '0 4px 20px -2px rgba(27, 26, 23, 0.06)',
        'editorial-hover': '0 12px 30px -4px rgba(192, 57, 43, 0.12)',
        'editorial-card': '0 1px 3px rgba(27, 26, 23, 0.05), 0 8px 24px rgba(212, 136, 30, 0.04)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'marquee-slow': 'marquee 40s linear infinite',
      },
    },
  },
  plugins: [],
};
