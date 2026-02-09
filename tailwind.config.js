/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sigh: {
          blue: "#3b4cc0",
          lavender: "#a0aae6",
          muted: "#8b8fad",
          bg1: "#faf6f1",
          bg2: "#f5ede3",
          bg3: "#f0e8dc",
          bg4: "#fdf8f3",
          cream: "#fef9f3",
          warm: "#f7ede0",
        },
      },
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        glow: {
          "0%, 100%": { textShadow: "0 0 8px rgba(59,76,192,0.3), 0 0 20px rgba(59,76,192,0.15)" },
          "50%": { textShadow: "0 0 16px rgba(59,76,192,0.5), 0 0 40px rgba(59,76,192,0.25), 0 0 60px rgba(160,170,230,0.15)" },
        },
        "dot-reveal-1": {
          "0%, 20%": { opacity: "0" },
          "30%, 100%": { opacity: "1" },
        },
        "dot-reveal-2": {
          "0%, 40%": { opacity: "0" },
          "50%, 100%": { opacity: "1" },
        },
        "dot-reveal-3": {
          "0%, 60%": { opacity: "0" },
          "70%, 100%": { opacity: "1" },
        },
      },
      animation: {
        float: "float 60s ease-in-out infinite",
        "fade-in-up": "fade-in-up 1.2s ease-out both",
        "fade-in": "fade-in 1.8s ease-out 0.6s both",
        shimmer: "shimmer 3s ease-in-out infinite",
        glow: "glow 3s ease-in-out infinite",
        "dot-1": "dot-reveal-1 2.4s ease-in-out infinite",
        "dot-2": "dot-reveal-2 2.4s ease-in-out infinite",
        "dot-3": "dot-reveal-3 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
