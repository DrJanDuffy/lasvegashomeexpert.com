/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F7F9FC',
          100: '#E8F0F9',
          200: '#C7D9F0',
          300: '#96BCE3',
          400: '#5A9DD4',
          500: '#3A8DDE',
          600: '#2B7BC7',
          700: '#1F5A8F',
          800: '#0A2540',
          900: '#061A2B',
        },
        accent: {
          buyer: '#3A8DDE',
          seller: '#16B286',
          success: '#16B286',
          warning: '#F59E0B',
          error: '#EF4444',
        },
        neutral: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        }
      },
      screens: {
        'xs': '475px',
        'sm': '576px',
        'md': '768px',
        'lg': '992px',
        'xl': '1200px',
        '2xl': '1400px',
      },
      boxShadow: {
        'widget': '0 2px 8px rgba(0,0,0,0.08)',
        'modal': '0 10px 25px rgba(0,0,0,0.15)',
        'card': '0 4px 12px rgba(0,0,0,0.1)',
      },
      zIndex: {
        'widget': '1000',
        'modal': '1050',
        'overlay': '1040',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'bounce-gentle': 'bounceGentle 0.6s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      }
    },
  },
  plugins: [],
}
