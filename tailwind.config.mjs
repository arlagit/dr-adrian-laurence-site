/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9fa',
          100: '#ccf2f4',
          200: '#99e5e9',
          300: '#66d8de',
          400: '#33cbd3',
          500: '#0D5C63',
          600: '#0a4a4f',
          700: '#08474C',
          800: '#063e42',
          900: '#043538',
        },
        accent: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#E6B800',
          600: '#caa300',
          700: '#a78b00',
          800: '#847200',
          900: '#615500',
        },
        ink: {
          50: '#f8f9fa',
          100: '#f1f3f4',
          200: '#e8eaed',
          300: '#dadce0',
          400: '#bdc1c6',
          500: '#9aa0a6',
          600: '#80868b',
          700: '#5f6368',
          800: '#3c4043',
          900: '#0B0F13',
        },
        muted: {
          50: '#f8f9fa',
          100: '#f1f3f4',
          200: '#e8eaed',
          300: '#dadce0',
          400: '#bdc1c6',
          500: '#5E6B7A',
          600: '#5f6368',
          700: '#3c4043',
          800: '#202124',
          900: '#171717',
        },
        bg: '#FBFCFE',
      },
      fontFamily: {
        'display': ['Lato', 'system-ui', 'sans-serif'],
        'body': ['Lato', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'soft': '0 2px 8px 0 rgba(11, 15, 19, 0.08)',
        'medium': '0 4px 16px 0 rgba(11, 15, 19, 0.12)',
        'large': '0 8px 32px 0 rgba(11, 15, 19, 0.16)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-in-right': 'slideInRight 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}



