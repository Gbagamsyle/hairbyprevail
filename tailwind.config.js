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
          DEFAULT: '#F5F8FA',
          canvas: '#F5F8FA',
          surface: '#ECF2F4',
          elevated: '#E3EBEE',
        },
        espresso: {
          DEFAULT: '#1A110D',
          rich: '#2D1E17',
          muted: '#453228',
          dark: '#120E0C',
        },
        champagne: {
          DEFAULT: '#C5A880',
          bright: '#D4AF37',
          soft: '#E8D8C3',
          dark: '#A38558',
        },
        taupe: {
          DEFAULT: '#8C7E74',
          light: '#D2C7BE',
          border: '#E8DFD8',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-luxury': '0.18em',
        'wide-luxury': '0.12em',
      },
      boxShadow: {
        'luxury': '0 10px 30px -10px rgba(26, 17, 13, 0.08)',
        'luxury-hover': '0 20px 40px -15px rgba(26, 17, 13, 0.15)',
        'gold-glow': '0 0 25px rgba(197, 168, 128, 0.25)',
      },
      borderRadius: {
        'luxury': '2px',
      }
    },
  },
  plugins: [],
}
