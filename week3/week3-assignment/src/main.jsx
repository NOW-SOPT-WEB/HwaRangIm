import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme.js";
import GlobalStyles from "./styles/GlobalStyles.js";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </>
);