import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  theme: {
    extend: {
      colors: {
        blue: {
          50: 'oklch(0.97 0.01 215)',
          100: 'oklch(0.95 0.02 215)',
          200: 'oklch(0.90 0.05 215)',
          300: 'oklch(0.85 0.08 215)',
          400: 'oklch(0.78 0.12 215)',
          500: 'oklch(0.715 0.143 215.221)',
          600: 'oklch(0.65 0.16 215)',
          700: 'oklch(0.55 0.15 215)',
          800: 'oklch(0.45 0.13 215)',
          900: 'oklch(0.35 0.10 215)',
          950: 'oklch(0.20 0.05 215)',
        }
      },
      fontFamily: {
        sans: ['DM Sans', ...defaultTheme.fontFamily.sans],
        mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
      }
    }
  }
} satisfies Config
