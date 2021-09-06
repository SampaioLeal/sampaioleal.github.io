import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00A7DC",
      contrastText: "#ffffff",
    },
    background: {
      paper: "#445968",
    },
    text: {
      primary: "#ffffff",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
          body {
            background-color: #152c33
          },
        `,
    },
  },
});

export default theme;
