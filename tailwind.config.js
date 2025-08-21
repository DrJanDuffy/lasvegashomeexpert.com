/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/data/**/*.{js,ts,jsx,tsx,mdx}',
    './src/utils/**/*.{js,ts,jsx,tsx,mdx}',
    './src/styles/**/*.{js,ts,jsx,tsx,mdx,css}',
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
        },
        // Luxury color palette
        luxury: {
          gold: '#FFD700',
          platinum: '#E5E4E2',
          diamond: '#B9F2FF',
          emerald: '#50C878',
          sapphire: '#0F52BA',
          ruby: '#E0115F',
          onyx: '#0F0F0F',
          pearl: '#F0EAD6',
        },
        // Slate variations for luxury theme
        slate: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
        // Amber variations for luxury accents
        amber: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
        },
      },
      screens: {
        xs: '475px',
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        '2xl': '1400px',
        '3xl': '1600px',
        '4xl': '1920px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      minHeight: {
        'screen-75': '75vh',
        'screen-50': '50vh',
      },
      height: {
        'screen-75': '75vh',
        'screen-50': '50vh',
      },
      boxShadow: {
        widget: '0 2px 8px rgba(0,0,0,0.08)',
        modal: '0 10px 25px rgba(0,0,0,0.15)',
        card: '0 4px 12px rgba(0,0,0,0.1)',
        'luxury-sm': '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
        'luxury-md': '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
        'luxury-lg': '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
        'luxury-xl': '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
        'luxury-2xl': '0 25px 50px rgba(0,0,0,0.25)',
        'inner-luxury': 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
      },
      zIndex: {
        widget: '1000',
        modal: '1050',
        overlay: '1040',
        'luxury-dropdown': '1100',
        'luxury-tooltip': '1200',
        'luxury-notification': '1300',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'bounce-gentle': 'bounceGentle 0.6s ease-in-out',
        'luxury-fade': 'luxuryFade 0.5s ease-in-out',
        'luxury-slide': 'luxurySlide 0.4s ease-out',
        'luxury-scale': 'luxuryScale 0.3s ease-in-out',
        'luxury-float': 'luxuryFloat 3s ease-in-out infinite',
        'luxury-pulse': 'luxuryPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
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
        luxuryFade: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        luxurySlide: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        luxuryScale: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        luxuryFloat: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        luxuryPulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      backdropSaturate: {
        '125': '1.25',
        '150': '1.5',
      },
      backdropBrightness: {
        '90': '0.9',
        '110': '1.1',
      },
      backdropContrast: {
        '90': '0.9',
        '110': '1.1',
      },
      backdropGrayscale: {
        '25': '0.25',
        '50': '0.5',
        '75': '0.75',
      },
      backdropHueRotate: {
        '15': '15deg',
        '30': '30deg',
        '60': '60deg',
        '90': '90deg',
        '180': '180deg',
      },
      backdropInvert: {
        '25': '0.25',
        '50': '0.5',
        '75': '0.75',
      },
      backdropSepia: {
        '25': '0.25',
        '50': '0.5',
        '75': '0.75',
      },
      fontFamily: {
        'luxury': ['Playfair Display', 'Georgia', 'serif'],
        'luxury-sans': ['Inter', 'system-ui', 'sans-serif'],
        'luxury-mono': ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      lineHeight: {
        'luxury-tight': '1.1',
        'luxury-relaxed': '1.8',
      },
      letterSpacing: {
        'luxury-wide': '0.1em',
        'luxury-wider': '0.2em',
        'luxury-widest': '0.3em',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
      },
      borderWidth: {
        '3': '3px',
        '5': '5px',
        '6': '6px',
      },
      outline: {
        'luxury': '2px solid #3A8DDE',
        'luxury-offset': '2px solid #3A8DDE',
      },
      ringWidth: {
        'luxury': '3px',
      },
      ringColor: {
        'luxury': '#3A8DDE',
      },
      ringOffsetWidth: {
        'luxury': '3px',
      },
      ringOffsetColor: {
        'luxury': '#3A8DDE',
      },
    },
  },
  plugins: [
    // Custom utility classes for better IntelliSense
    ({ addUtilities }) => {
      const luxuryUtilities = {
        '.luxury-gradient': {
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        },
        '.luxury-text-gradient': {
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
        '.luxury-border-gradient': {
          border: '2px solid',
          'border-image': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%) 1',
        },
        '.luxury-shadow-soft': {
          'box-shadow': '0 2px 15px rgba(0, 0, 0, 0.1)',
        },
        '.luxury-shadow-medium': {
          'box-shadow': '0 4px 25px rgba(0, 0, 0, 0.15)',
        },
        '.luxury-shadow-strong': {
          'box-shadow': '0 8px 40px rgba(0, 0, 0, 0.2)',
        },
        '.luxury-backdrop': {
          'backdrop-filter': 'blur(10px)',
          'background-color': 'rgba(255, 255, 255, 0.1)',
        },
        '.luxury-glass': {
          'backdrop-filter': 'blur(16px) saturate(180%)',
          'background-color': 'rgba(255, 255, 255, 0.75)',
          'border': '1px solid rgba(209, 213, 219, 0.3)',
        },
        '.luxury-frost': {
          'backdrop-filter': 'blur(20px)',
          'background-color': 'rgba(255, 255, 255, 0.25)',
          'border': '1px solid rgba(255, 255, 255, 0.18)',
        },
      }
      addUtilities(luxuryUtilities)
    },
    
    // Responsive container utilities
    ({ addComponents, theme }) => {
      const containers = {
        '.container-responsive': {
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: theme('spacing.4'),
          paddingRight: theme('spacing.4'),
          '@screen sm': {
            paddingLeft: theme('spacing.6'),
            paddingRight: theme('spacing.6'),
          },
          '@screen lg': {
            paddingLeft: theme('spacing.8'),
            paddingRight: theme('spacing.8'),
          },
          '@screen xl': {
            maxWidth: theme('screens.xl'),
          },
          '@screen 2xl': {
            maxWidth: theme('screens.2xl'),
          },
        },
        '.container-luxury': {
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: theme('spacing.6'),
          paddingRight: theme('spacing.6'),
          '@screen sm': {
            paddingLeft: theme('spacing.8'),
            paddingRight: theme('spacing.8'),
          },
          '@screen lg': {
            paddingLeft: theme('spacing.12'),
            paddingRight: theme('spacing.12'),
          },
          '@screen xl': {
            maxWidth: theme('screens.xl'),
          },
          '@screen 2xl': {
            maxWidth: theme('screens.2xl'),
          },
        },
      }
      addComponents(containers)
    },
    
    // Button utilities for better IntelliSense
    ({ addComponents, theme }) => {
      const buttons = {
        '.btn-primary': {
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: `${theme('spacing.3')} ${theme('spacing.6')}`,
          fontSize: theme('fontSize.base'),
          fontWeight: theme('fontWeight.semibold'),
          lineHeight: theme('lineHeight.none'),
          color: theme('colors.white'),
          backgroundColor: theme('colors.primary.600'),
          borderRadius: theme('borderRadius.lg'),
          border: 'none',
          cursor: 'pointer',
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            backgroundColor: theme('colors.primary.700'),
            transform: 'translateY(-1px)',
            boxShadow: theme('boxShadow.lg'),
          },
          '&:focus': {
            outline: 'none',
            ring: '2px',
            ringColor: theme('colors.primary.300'),
            ringOffset: '2px',
          },
          '&:disabled': {
            opacity: '0.5',
            cursor: 'not-allowed',
          },
        },
        '.btn-accent-buyer': {
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: `${theme('spacing.3')} ${theme('spacing.6')}`,
          fontSize: theme('fontSize.base'),
          fontWeight: theme('fontWeight.semibold'),
          lineHeight: theme('lineHeight.none'),
          color: theme('colors.white'),
          backgroundColor: theme('colors.accent.buyer'),
          borderRadius: theme('borderRadius.lg'),
          border: 'none',
          cursor: 'pointer',
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            backgroundColor: theme('colors.primary.700'),
            transform: 'translateY(-1px)',
            boxShadow: theme('boxShadow.lg'),
          },
          '&:focus': {
            outline: 'none',
            ring: '2px',
            ringColor: theme('colors.accent.buyer'),
            ringOffset: '2px',
          },
        },
        '.btn-secondary': {
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: `${theme('spacing.3')} ${theme('spacing.6')}`,
          fontSize: theme('fontSize.base'),
          fontWeight: theme('fontWeight.semibold'),
          lineHeight: theme('lineHeight.none'),
          color: theme('colors.primary.700'),
          backgroundColor: 'transparent',
          borderRadius: theme('borderRadius.lg'),
          border: `2px solid ${theme('colors.primary.300')}`,
          cursor: 'pointer',
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            backgroundColor: theme('colors.primary.50'),
            borderColor: theme('colors.primary.400'),
            transform: 'translateY(-1px)',
          },
          '&:focus': {
            outline: 'none',
            ring: '2px',
            ringColor: theme('colors.primary.300'),
            ringOffset: '2px',
          },
        },
      }
      addComponents(buttons)
    },
  ],
};
