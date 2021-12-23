import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { SCMTheme } from "@hellofresh/scm-design-system";
import { BrowserRouter } from "react-router-dom";
import { createTheme } from "@material-ui/core/styles";

const customTheme = createTheme(SCMTheme);
console.log("🚀 ~ file: index.tsx ~ line 13 ~ customTheme", customTheme);

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={customTheme}>
      <StyledThemeProvider theme={customTheme}>
        <CssBaseline />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </StyledThemeProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
