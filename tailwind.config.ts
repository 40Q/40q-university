// https://tailwindcss.com/docs/configuration
import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";

export default {
  content: [
    "./app/**/*.php",
    "./resources/**/*.{php,js,ts,tsx,vue}",
    "./resources/views/**/*.php",
    "./public/content/themes/radicle/index.php",
  ],
  theme: {
    fontFamily: {
      sans: ["sans-serif"],
      serif: ["serif"],
      mono: ["monospace"],
    },
    colors: {
      inherit: "inherit",
      current: "currentColor",
      transparent: "transparent",
      black: "#000",
      white: "#fff",
      text: "#012130",
      gray: {
        50: "#f9fafb",
        100: "#f3f4f6",
        200: "#e5e7eb",
        300: "#d1d5db",
        400: "#9ca3af",
        500: "#6b7280",
        600: "#4b5563",
        700: "#374151",
        800: "#1f2937",
        900: "#111827",
        950: "#030712",
      },
      indigo: {
        50: "#eef2ff",
        100: "#e0e7ff",
        200: "#c7d2fe",
        300: "#a5b4fc",
        400: "#818cf8",
        500: "#6366f1",
        600: "#4f46e5",
        700: "#4338ca",
        800: "#3730a3",
        900: "#312e81",
        950: "#1e1b4b",
      },
      primary: "#45C4AF",
      auxiliar: "#DAFDB9",
      "primary-dark": "#13678B",
      "back-light": "#F1FFEE",
      "detail-gray": "#D9D9D9",
    },
    extend: {
      fontSize: {
        "3xxl": "2rem",
      },
      maxWidth: {
        "temp-container": "1308px",
      },
      spacing: {
        "3.5": "0.875rem",
        "17": "4.25rem",
        "23": "5.75rem",
        "25": "6.25rem",
        "3/5": "60%",
      },
      lineHeight: {
        "7.5": "1.875rem",
        "10.5": "2.625rem",
        "14": "3.5rem",
        tighter: "1.15",
        comfort: "1.75",
      },
      width: {
        "12/25": "48%",
      },
    },
  },
  plugins: [forms],
} satisfies Config;
