import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MantineProvider } from "@mantine/core";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MantineProvider
    withGlobalStyles
    withNormalizeCSS
    theme={{
      fontSizes: {
        xs: "0.6rem",
        sm: "0.75rem",
        md: "0.9rem",
        lg: "1rem",
        xl: "1.2rem",
      },
      fontFamily: "Nunito, sans-serif",
    }}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </MantineProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
