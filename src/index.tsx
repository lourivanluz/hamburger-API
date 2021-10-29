import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ResetCss } from "./Global/Style";

ReactDOM.render(
  <React.StrictMode>
    <ResetCss />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
