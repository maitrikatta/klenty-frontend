import Wrapper from "./Components/Wrapper";
import { createTheme, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import "./fonts.css";
import { amber } from "@mui/material/colors";
const theme = createTheme({
  palette: {
    mode: "dark",
    secondary: amber,
    background: {
      default: "#0f1720",
      paper: "#0B0B16",
    },
  },
  typography: {
    fontFamily: "Euclid",
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Wrapper />
    </ThemeProvider>
  );
}

export default App;
