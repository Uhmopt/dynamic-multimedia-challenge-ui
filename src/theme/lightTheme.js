import { createTheme } from "@mui/material";
import {
  ERROR_COLOR,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  SUCCESS_COLOR,
  WARNING_COLOR,
  WHITE_COLOR,
} from "./variable";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: PRIMARY_COLOR,
      contrastText: WHITE_COLOR,
    },
    secondary: {
      main: SECONDARY_COLOR,
      contrastText: WHITE_COLOR,
    },
    success: {
      main: SUCCESS_COLOR,
      contrastText: WHITE_COLOR,
    },
    warning: {
      main: WARNING_COLOR,
      contrastText: WHITE_COLOR,
    },
    error: {
      main: ERROR_COLOR,
      contrastText: WHITE_COLOR,
    },
  },
  typography: {
    // In Chinese and Japanese the characters are usually larger,
    // so a smaller fontsize may be appropriate.
    fontSize: 12,
    fontFamily: ["Open Sans"],
    h1: {
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: 60,
      lineHeight: "105px",
      "@media (max-width:600px)": {
        fontSize: 26,
        lineHeight: "46px",
      },
    },
    h2: {
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: 40,
      lineHeight: "70px",
      "@media (max-width:600px)": {
        fontSize: 20,
        lineHeight: "35px",
      },
    },
    h3: {
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: 26,
      lineHeight: "46px",
      "@media (max-width:600px)": {
        fontSize: 20,
        lineHeight: "35px",
      },
    },
  },
  components: {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backdropFilter: "blur(5px)",
        },
      },
    },
  },

  shape: { borderRadius: 0 },
});
