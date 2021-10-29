import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ResetCss } from "./Global/Style";
import { Providers } from "./Providers";

ReactDOM.render(
  <React.StrictMode>
    <ResetCss />
    <BrowserRouter>
      <Providers>
        <App />
      </Providers>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
