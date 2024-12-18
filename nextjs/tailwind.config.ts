import plugin from "tailwindcss/plugin";
import animate from "tailwindcss-animate";
import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
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
          text: "hsl(var(--secondary-text))",
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
      },
      borderRadius: {
        lg: "8px",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        sans: ["sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        12: "0.75rem",
        14: "0.875rem",
        16: "1rem",
        18: "1.125rem",
        20: "1.25rem",
        24: "1.5rem",
        26: "1.625rem",
        30: "1.875rem",
        39: "2.4375rem",
        48: "3rem",
        51: "3.1875rem",
        68: "4.25rem",
        110: "6.875rem",
      },
      lineHeight: {
        16: "1rem",
        18: "1.125rem",
        20: "1.25rem",
        22: "1.375rem",
        24: "1.5rem",
        26: "1.625rem",
        28: "1.75rem",
        32: "2rem",
        34: "2.125rem",
        42: "2.625rem",
        52: "3.25rem",
        62: "3.875rem",
        72: "4.5rem",
        116: "7.25rem",
      },
    },
  },
  plugins: [
    animate,
    daisyui,
    plugin(function addTextStyles({ addComponents, theme }) {
      addComponents({
        // Component Regular Text Styles
        ".body-sm": {
          fontFamily: theme("fontFamily.inter"),
          fontSize: theme("fontSize.16"),
          lineHeight: theme("lineHeight.28"),
          fontWeight: theme("fontWeight.regular"),
        },
        ".body-md": {
          fontFamily: theme("fontFamily.inter"),
          fontSize: theme("fontSize.18"),
          lineHeight: theme("lineHeight.28"),
          fontWeight: theme("fontWeight.regular"),
        },

        // Component Semibold Text Styles
        ".body-sm-semibold": {
          fontFamily: theme("fontFamily.inter"),
          fontSize: theme("fontSize.16"),
          lineHeight: theme("lineHeight.28"),
          fontWeight: theme("fontWeight.semibold"),
        },
        ".body-md-semibold": {
          fontFamily: theme("fontFamily.inter"),
          fontSize: theme("fontSize.18"),
          lineHeight: theme("lineHeight.28"),
          fontWeight: theme("fontWeight.semibold"),
        },

        // Label Text Styles
        ".label-sm": {
          fontFamily: theme("fontFamily.inter"),
          fontSize: theme("fontSize.14"),
          lineHeight: theme("lineHeight.24"),
          color: theme("colors.secondary.text"),
        },

        // Title Text Styles
        ".title-md": {
          fontFamily: theme("fontFamily.inter"),
          fontSize: theme("fontSize.48"),
          lineHeight: theme("lineHeight.48"),
          fontWeight: theme("fontWeight.bold"),
          letterSpacing: "-1.2%",
        },

        // Heading Text Styles
        ".heading-sm": {
          fontFamily: theme("fontFamily.inter"),
          fontSize: theme("fontSize.24"),
          lineHeight: theme("lineHeight.32"),
          fontWeight: theme("fontWeight.semibold"),
          letterSpacing: "-0.6%",
        },
        ".heading-md": {
          fontFamily: theme("fontFamily.inter"),
          fontSize: theme("fontSize.30"),
          lineHeight: theme("lineHeight.36"),
          fontWeight: theme("fontWeight.semibold"),
        },

        // Display Text Styles
        ".display": {
          fontFamily: theme("fontFamily.inter"),
          fontSize: "32px",
          lineHeight: "52px",
          fontWeight: theme("fontWeight.bold"),
        },
      });
    }),
  ],
  // DaisyUI theme colors
  daisyui: {
      themes: [
        {
          light: {
            primary: "#93BBFB",
            "primary-content": "#212638",
            secondary: "#DAE8FF",
            "secondary-content": "#212638",
            accent: "#93BBFB",
            "accent-content": "#212638",
            neutral: "#212638",
            "neutral-content": "#ffffff",
            "base-100": "#ffffff",
            "base-200": "#f4f8ff",
            "base-300": "#DAE8FF",
            "base-content": "#212638",
            info: "#93BBFB",
            success: "#34EEB6",
            warning: "#FFCF72",
            error: "#FF8863",
  
            "--rounded-btn": "9999rem",
  
            ".tooltip": {
              "--tooltip-tail": "6px",
            },
            ".link": {
              textUnderlineOffset: "2px",
            },
            ".link:hover": {
              opacity: "80%",
            },
          },
        },
        {
          dark: {
            primary: "#212638",
            "primary-content": "#F9FBFF",
            secondary: "#323f61",
            "secondary-content": "#F9FBFF",
            accent: "#4969A6",
            "accent-content": "#F9FBFF",
            neutral: "#F9FBFF",
            "neutral-content": "#385183",
            "base-100": "#385183",
            "base-200": "#2A3655",
            "base-300": "#212638",
            "base-content": "#F9FBFF",
            info: "#385183",
            success: "#34EEB6",
            warning: "#FFCF72",
            error: "#FF8863",
  
            "--rounded-btn": "9999rem",
  
            ".tooltip": {
              "--tooltip-tail": "6px",
              "--tooltip-color": "oklch(var(--p))",
            },
            ".link": {
              textUnderlineOffset: "2px",
            },
            ".link:hover": {
              opacity: "80%",
            },
          },
        },
      ],
  },
};

export default config;