/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transitionDelay: {
        0: "0ms",
        500: "500ms",
        1000: "1000ms",
      },
      animation: {
        "slide-top": "slide-top 0.5s linear both",
      },
      backgroundSize: {
        60: "60%",
      },
      backgroundImage: {
        "index-hero-mobile": "url(/assets/home/mobile/image-header.jpg)",
        "index-hero-tablet": "url(/assets/home/tablet/image-header.jpg)",
        "index-hero-desktop": "url(/assets/home/desktop/image-hero.jpg)",
        "index-speakers-gray-mobile":
          "url(/assets/home/mobile/image-speaker-zx7.jpg)",
        "index-speakers-gray-tablet":
          "url(/assets/home/tablet/image-speaker-zx7.jpg)",
        "index-speakers-gray-desktop":
          "url(/assets/home/desktop/image-speaker-zx7.jpg)",
        "index-speakers-mobile":
          "url(/assets/home/mobile/image-speaker-zx9.png)",
        "index-speakers-desktop":
          "url(/assets/home/desktop/image-speaker-zx9.png)",
      },
      keyframes: {
        "slide-top": {
          "0%": { transform: "translateY(70px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
      colors: {
        transparent: "transparent",
        orange: "#D87D4A",
        "black-10": "#101010",
        "black-50": "rgba(0,0,0,0.5)",
        gray: "#F1F1F1",
        "light-gray": "#FAFAFA",
        "light-orange": "#fbaf85",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
