import type { Config } from 'tailwindcss'

export default {
  theme: {
    extend: {
      colors: {
        cyan: {
          50: 'oklch(0.97 0.01 215)',
          100: 'oklch(0.95 0.02 215)',
          200: 'oklch(0.92 0.04 215)',
          300: 'oklch(0.87 0.07 215)',
          400: 'oklch(0.80 0.10 215)',
          500: 'oklch(0.715 0.143 215.221)',
          600: 'oklch(0.65 0.16 215)',
          700: 'oklch(0.58 0.15 215)',
          800: 'oklch(0.48 0.12 215)',
          900: 'oklch(0.38 0.08 215)',
          950: 'oklch(0.20 0.04 215)',
        }
      },
      fontFamily: {
        sans: ['DM Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      }
    }
  }
} satisfies Config
