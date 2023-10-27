import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import ReactGA from "react-ga";
import ReactGA from "react-ga4";

// import { createBrowserHistory } from "history";

// Initialize Google Analytics with your tracking ID
// ReactGA.initialize("UA-256628723-1");
ReactGA.initialize("G-V9356FYXZW");
ReactGA.send({ hitType: "pageview", page: window.location.pathname });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
