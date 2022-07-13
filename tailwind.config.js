module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "450px",
        sm: "600px",
        md: "960px",
        lg: "1280px",
        xl: "1920px",
        "sm-down": { max: "600px" },
        "md-down": { max: "960px" },
        "lg-down": { max: "1280px" },
        "xl-down": { max: "1920px" },
      },
      spacing: {
        "2x": "calc(200%)",
        "3x": "calc(300%)",
        "4x": "calc(400%)",
        "5x": "calc(500%)",
        "6x": "calc(600%)",
        "7x": "calc(700%)",
      },
      backgroundImage: {
        // logo: "url('/src/assets/logo/logo_360.png')",
      },
      colors: {
        primary: "#464CD9",
        secondary: "#000",
        success: "#2DA44E",
        warning: "#FF8B59",
        error: "#FF0000",
      },
    },
  },
  plugins: [],
};
