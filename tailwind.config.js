/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1400px",
      "3xl": "1600px",
      "4xl": "1800px",
    },
    fontSize: {
      xs: [
        "0.75rem", // 12px
        {
          lineHeight: "1.125rem",
          fontWeight: "400",
        },
      ],
      sm: [
        "0.875rem", // 14px
        {
          lineHeight: "1.125rem", // 18px
          fontWeight: "400",
        },
      ],
      base: [
        "1rem", // 16px
        {
          lineHeight: "1.5rem", // 24px
          fontWeight: "400",
        },
      ],
      lg: [
        "1.125rem", // 18px
        {
          lineHeight: "1.688rem", // 24px
          fontWeight: "400",
        },
      ],
      xl: [
        "1.25rem", // 20px
        {
          lineHeight: "2.75rem", // 28px
          fontWeight: "600",
        },
      ],

      "2xl": [
        "1.5rem", // 24px
        {
          lineHeight: "2.1rem", // 33.6px
          fontWeight: "600",
        },
      ],
      "2.3xl": [
        "1.75rem", // 28px
        {
          lineHeight: "2.275rem", // 36.4px
          fontWeight: "600",
        },
      ],
      "4xl": [
        "2.5rem", // 40px
        {
          lineHeight: "3.23rem", // 52px
          fontWeight: "600",
        },
      ],
      "7xl": [
        "4.5rem", // 72px
        {
          lineHeight: "5.85rem", // 93.6px
          fontWeight: "600",
        },
      ],
      "3xl": "32px",
    },

    fontFamily: {
      inter: ["var(--body-font)"],
      jost: ["var(--sub-font)"],
    },
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        CFFFFFF: "#FFFFFF",
        C282F41: "#282F41",
        C373F56: "#373F56",
        C09B65E: "#09B65E",
        C212737: "#212737",
        C3F4C71: "#3F4C71",
        C4B517A: "#4B517A",
        C6B7093: "#6B7093",
        C7886AE: "#7886AE",
        C5DDA1D: "#5DDA1D",
        C2E3549: "#2E3549",
        CE0E4FF: "#E0E4FF",
        CBBC2FA: "#BBC2FA",
        C00FF8B: "#00FF8B",
        CFAC400: "#FAC400",
        C333A4E: "#333A4E",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
