import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#05454a",
    },
    secondary: {
      main: "#f50057",
    },
    text: {
      primary: "#05454a",
      secondary: "#05454a",
    },
  },
  typography: {
    fontFamily: "Comfortaa",
  },
});

export default theme;
