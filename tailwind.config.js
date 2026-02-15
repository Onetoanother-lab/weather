/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        earth: {
          50: '#faf9f7',
          100: '#f3f1ec',
          200: '#e6e2d9',
          300: '#d4cdc1',
          400: '#b8ab9a',
          500: '#9d8d77',
          600: '#7d6e5d',
          700: '#5c5043',
          800: '#3d362d',
          900: '#2a241d',
        },
        ocean: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
        crisis: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecdd3',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
        accent: {
          gold: '#f59e0b',
          emerald: '#10b981',
          violet: '#8b5cf6',
          amber: '#fbbf24',
        }
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-up': 'slideUp 1s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-down': 'slideDown 1s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-left': 'slideLeft 1s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-right': 'slideRight 1s cubic-bezier(0.16, 1, 0.3, 1)',
        'scale-in': 'scaleIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-delayed': 'float 7s ease-in-out 2s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2.5s infinite',
        'gradient': 'gradient 15s ease infinite',
        'gradient-slow': 'gradient 20s ease infinite',
        'blob': 'blob 7s infinite',
        'blob-reverse': 'blobReverse 9s infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'reveal': 'reveal 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
        'spin-slow': 'spin 20s linear infinite',
        'spin-slower': 'spin 30s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'tilt': 'tilt 10s infinite linear',
        'morph': 'morph 8s ease-in-out infinite',
        'rotate-y': 'rotateY 20s linear infinite',
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(50px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-50px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-30px) rotate(3deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        gradient: {
          '0%, 100%': { 
            backgroundPosition: '0% 50%',
            backgroundSize: '200% 200%',
          },
          '50%': { 
            backgroundPosition: '100% 50%',
            backgroundSize: '200% 200%',
          },
        },
        blob: {
          '0%, 100%': { 
            transform: 'translate(0px, 0px) scale(1) rotate(0deg)',
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
          },
          '33%': { 
            transform: 'translate(30px, -50px) scale(1.1) rotate(120deg)',
            borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%',
          },
          '66%': { 
            transform: 'translate(-20px, 20px) scale(0.9) rotate(240deg)',
            borderRadius: '50% 60% 30% 70% / 60% 40% 60% 30%',
          },
        },
        blobReverse: {
          '0%, 100%': { 
            transform: 'translate(0px, 0px) scale(1) rotate(0deg)',
            borderRadius: '30% 70% 70% 30% / 30% 50% 50% 70%',
          },
          '33%': { 
            transform: 'translate(-30px, 50px) scale(1.1) rotate(-120deg)',
            borderRadius: '70% 30% 50% 50% / 40% 60% 50% 50%',
          },
          '66%': { 
            transform: 'translate(20px, -20px) scale(0.9) rotate(-240deg)',
            borderRadius: '50% 50% 30% 70% / 60% 30% 70% 30%',
          },
        },
        glow: {
          '0%, 100%': { 
            opacity: '0.8', 
            filter: 'blur(40px)',
            transform: 'scale(1)',
          },
          '50%': { 
            opacity: '1', 
            filter: 'blur(60px)',
            transform: 'scale(1.1)',
          },
        },
        reveal: {
          '0%': { 
            opacity: '0', 
            clipPath: 'polygon(45% 30%, 55% 30%, 55% 70%, 45% 70%)',
            filter: 'blur(10px)',
          },
          '100%': { 
            opacity: '1', 
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            filter: 'blur(0px)',
          },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        tilt: {
          '0%, 50%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(0.5deg)' },
          '75%': { transform: 'rotate(-0.5deg)' },
        },
        morph: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
        },
        rotateY: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'shimmer-gradient': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(14, 165, 233, 0.5)',
        'glow': '0 0 30px rgba(14, 165, 233, 0.6)',
        'glow-lg': '0 0 50px rgba(14, 165, 233, 0.7)',
        'glow-crisis': '0 0 40px rgba(239, 68, 68, 0.6)',
        'glow-emerald': '0 0 40px rgba(16, 185, 129, 0.6)',
        'inner-glow': 'inset 0 0 30px rgba(14, 165, 233, 0.3)',
      },
    },
  },
  plugins: [],
}
