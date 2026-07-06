import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#0FC6C2",
          dark: "#0AA6A3",
          tint: "#E1F5F4",
          "tint-2": "#EAFBFA",
        },
        ink: {
          DEFAULT: "#16232B",
          soft: "#4A5A63",
          faint: "#7C8A92",
        },
        line: {
          DEFAULT: "#DFE7E8",
          soft: "#EBF1F1",
        },
        bg: "#FBFDFD",
        card: "#FFFFFF",
        warn: {
          bg: "#FAEEDA",
          line: "#BA7517",
        },
        danger: {
          bg: "#FCEBEA",
          line: "#C0392B",
        },
      },
    },
  },
  plugins: [],
}
export default config
