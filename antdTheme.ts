import type { ThemeConfig } from "antd";

const antdTheme: ThemeConfig = {
  token: {
    colorPrimary: "#1c2d63", // Blue for primary button
    borderRadius: 2,
  },
  components: {
    Button: {
      fontWeight: 500, // Semi-bold text
      borderRadius: 8,

      // Default button styles
      defaultBg: "#1c2d63", // Blue background for default button
      defaultBorderColor: "transparent", // Blue border
      defaultColor: "#ffffff", // White text
      defaultHoverBg: "#16224f", // Darker blue for hover
      defaultActiveBg: "#101a3b", // Even darker blue for active
      defaultActiveColor: "#ffffff", // White text on active
      defaultHoverColor: "#ffffff", // White text on hover

      // Primary button styles
      colorPrimaryBg: "#97C620", // White background for primary button
      ghostBg: "#97C620", // Transparent background for ghost button
    },
  },
};

export default antdTheme;
