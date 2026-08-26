// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // ====== COLORS ======
      colors: {
        purple: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
        pink: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
        },
        gold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        dark: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#0a0a0a',
        },
      },

      // ====== FONT SIZES ======
      fontSize: {
        'clamp-xs': 'clamp(0.75rem, 1vw, 0.875rem)',
        'clamp-sm': 'clamp(0.875rem, 1.2vw, 1rem)',
        'clamp-base': 'clamp(1rem, 1.5vw, 1.125rem)',
        'clamp-lg': 'clamp(1.125rem, 2vw, 1.25rem)',
        'clamp-xl': 'clamp(1.25rem, 2.5vw, 1.5rem)',
        'clamp-2xl': 'clamp(1.5rem, 3vw, 1.875rem)',
        'clamp-3xl': 'clamp(1.875rem, 4vw, 2.25rem)',
        'clamp-4xl': 'clamp(2.25rem, 5vw, 3rem)',
        'clamp-5xl': 'clamp(3rem, 6vw, 4rem)',
      },

      // ====== SPACING ======
      spacing: {
        'clamp-1': 'clamp(0.25rem, 0.5vw, 0.5rem)',
        'clamp-2': 'clamp(0.5rem, 1vw, 0.75rem)',
        'clamp-3': 'clamp(0.75rem, 1.5vw, 1rem)',
        'clamp-4': 'clamp(1rem, 2vw, 1.5rem)',
        'clamp-5': 'clamp(1.25rem, 2.5vw, 2rem)',
        'clamp-6': 'clamp(1.5rem, 3vw, 2.5rem)',
        'clamp-8': 'clamp(2rem, 4vw, 3rem)',
        'clamp-10': 'clamp(2.5rem, 5vw, 4rem)',
      },

      // ====== BORDER RADIUS ======
      borderRadius: {
        'clamp-sm': 'clamp(0.25rem, 0.5vw, 0.5rem)',
        'clamp-md': 'clamp(0.5rem, 1vw, 0.75rem)',
        'clamp-lg': 'clamp(0.75rem, 1.5vw, 1rem)',
        'clamp-xl': 'clamp(1rem, 2vw, 1.5rem)',
        'clamp-2xl': 'clamp(1.5rem, 2.5vw, 2rem)',
        'clamp-3xl': 'clamp(2rem, 3vw, 2.5rem)',
        'clamp-full': 'clamp(1.5rem, 5vw, 9999px)',
      },

      // ====== ANIMATIONS ======
      animation: {
        // Existing
        'float': 'float 20s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        
        // New
        'float-slow': 'float 25s ease-in-out infinite',
        'float-fast': 'float 15s ease-in-out infinite',
        'pulse-slow': 'pulse-glow 4s ease-in-out infinite',
        'shine': 'shine 3s ease-in-out infinite',
        'slide-in': 'slideIn 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'bounce-gentle': 'bounceGentle 2s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'gradient-shift': 'gradientShift 5s ease-in-out infinite',
      },

      // ====== KEYFRAMES ======
      keyframes: {
        // Existing
        float: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '25%': { transform: 'translate(50px, -30px) scale(1.1)' },
          '50%': { transform: 'translate(-20px, 40px) scale(0.9)' },
          '75%': { transform: 'translate(30px, -20px) scale(1.05)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '0.5' },
        },
        fadeInUp: {
          'from': { opacity: '0', transform: 'translateY(30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },

        // New
        shine: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        slideIn: {
          'from': { opacity: '0', transform: 'translateX(-30px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          'from': { opacity: '0', transform: 'scale(0.9)' },
          'to': { opacity: '1', transform: 'scale(1)' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },

      // ====== BACKGROUND IMAGE ======
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-jun88': 'linear-gradient(135deg, #7c3aed, #ec4899, #f59e0b)',
        'gradient-jun88-purple': 'linear-gradient(135deg, #7c3aed, #a78bfa)',
        'gradient-jun88-pink': 'linear-gradient(135deg, #ec4899, #f472b6)',
        'gradient-jun88-gold': 'linear-gradient(135deg, #f59e0b, #fbbf24)',
      },

      // ====== BOX SHADOW ======
      boxShadow: {
        'glow-purple': '0 0 60px rgba(124, 58, 237, 0.15)',
        'glow-pink': '0 0 60px rgba(236, 72, 153, 0.12)',
        'glow-gold': '0 0 60px rgba(245, 158, 11, 0.08)',
        'glow-card': '0 20px 60px rgba(124, 58, 237, 0.1)',
        'glow-button': '0 10px 40px rgba(124, 58, 237, 0.2)',
        'glow-button-hover': '0 20px 60px rgba(124, 58, 237, 0.4)',
        'glow-soft': '0 4px 20px rgba(0, 0, 0, 0.3)',
        'glow-medium': '0 8px 30px rgba(0, 0, 0, 0.4)',
        'glow-strong': '0 12px 40px rgba(0, 0, 0, 0.5)',
      },

      // ====== BACKDROP BLUR ======
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '20px',
        '3xl': '24px',
      },

      // ====== Z-INDEX ======
      zIndex: {
        'background': '0',
        'overlay': '1',
        'glow': '1',
        'content': '10',
        'header': '20',
        'dropdown': '30',
        'modal': '40',
        'tooltip': '50',
        'popover': '60',
        'max': '9999',
      },

      // ====== SCREEN BREAKPOINTS ======
      screens: {
        'xs': '375px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
      },

      // ====== TRANSITION ======
      transitionDuration: {
        '2000': '2000ms',
        '3000': '3000ms',
        '4000': '4000ms',
        '5000': '5000ms',
      },
    },
  },
  plugins: [],
};

export default config;