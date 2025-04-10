import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,

      padding: {
        DEFAULT: "40px",
        xs: "124px",
        md: "50px",
        lg: "78px",
        xl: "40px",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },

    extend: {
      boxShadow: {
        "gray-sm": "0px 1px 3px 0px #181D271A",
        "gray-xs": "0px 1px 2px -1px #181D271A",
        "gray-2xl": "0px 24px 48px -12px #181D272E",
      },
      fontFamily: {
        roboto: "var(--font-roboto)",
        outfit: "var(--font-outfit)",
        cairo: "var(--font-cairo)",
        "noto-kufi-arabic": "var(--font-noto-kufi-arabic)",
      },
      fontWeight: {
        light: "300",
        regular: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        secondaryLight: "var(--secondary-color-light)",
        primaryLight: "var(--primary-color-light)",
        primaryLightAlt: "var(--primary-color-alt)",
        primaryBg: "var( --primary-color-bg)",
        danger: "var(--danger-color)",
        darkGray: "var(--dark-gray)",
        greenishBlack: "var(--greenish-black)",
        titleColor: "var( --title-color)",
      },
      backgroundImage: {
        hero: "url('../../assets/images/heroSection.png')",
        feature: "url('../../assets/images/featureSection.png')",
        footer: "url('../../assets/images/footer.png')",
      },
    },
  },
  plugins: [],
};
export default config;
