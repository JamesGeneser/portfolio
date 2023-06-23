import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./index.css";
const resizeOps = () => {
  document.documentElement.style.setProperty(
    "--vh",
    window.innerHeight * 0.01 + "px"
  );
};

resizeOps();
window.addEventListener("resize", resizeOps);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
