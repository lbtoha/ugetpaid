/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

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
      C1A1F2C: "#1A1F2C",
      C47506A: "#47506A",
      CBDC4DA: "#BDC4DA",
      C3D4661: "#3D4661",
      C185330: "#185330",
      C237042: "#237042",
      C3E4762: "#3E4762",
      C626F95: "#626F95",
      C000000: "#000000",
      C02835B: "#02835B",
      C3D3C6B: "#3D3C6B",
      C4C5179: "#4C5179",
      C535E7C: "#535E7C",
      C3C3E5C: "#3C3E5C",
      C0E311F: "#0E311F",
      C00FF7D: "#00FF7D",
      C2F304A: "#2F304A",
      C575988: "#575988",
      C404365: "#404365",
      C1B5C4E: "#1B5C4E",
      CSHADOW: "0px 16px 30px 0px rgba(0, 0, 0, 0.25)",
    },
    extend: {
      backgroundImage: {
        "gradient-offer-walls-1":
          "linear-gradient(155deg, #2E3549 0%, #12292E 100%)",
        "gradient-offer-walls-2":
          "linear-gradient(155deg, #2E3549 0%, #2E1212 100%)",
        "gradient-offer-walls-3":
          "linear-gradient(155deg, #2E3549 0%, #392F1B 100%)",
        "gradient-offer-walls-4":
          "linear-gradient(155deg, #2E3549 0%, #2F1C34 100%)",
        "gradient-offer-walls-5":
          "linear-gradient(155deg, #2E3549 0%, #1C341D 100%)",
      },
      spacing: {
        S5: "0.313rem",
        S10: "0.625rem",
        S15: "0.938rem",
        S30: "1.875rem",
        S50: "3.125rem",
        S60: "3.75rem",
        S70: "4.375rem",
        S80: "5rem",
        S90: "5.625rem",
        S120: "7.5rem",
      },
      keyframes: {},
      animation: {
        "spin-slow": "spin 20s linear infinite",
      },
    },
  },

  plugins: [
    plugin(function ({ addUtilities, addComponents, e, config }) {
      const customComponent = {
        ".custom-transition": {
          transition: "all 0.35s ease-in-out",
        },

        ".border-gradient": {
          background:
            "linear-gradient(#2E3549, #2E3549) padding-box, linear-gradient(to top left, #09FBD3, #FE53BB) border-box",
          border: "1px solid transparent",
          position: "relative",
          "z-index": "0",
        },

        ".border-gradient-before": {
          position: "absolute",
          content: "",
          background: "#2E3549",
          left: "0",
          top: "0",
          "z-index": "-1",
          width: "100%",
          height: "100%",
          transform: "skew(-0.5deg, -0.5deg)",
        },
      };
      addComponents(customComponent);
    }),
  ],
};
