import React from "react";

import Navigation from "./components/Navigation";
import Project from "./components/pages/Project";
import Home from "./components/pages/Home";
import { HashRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// const router = createHashRouter([{
//   path: "/*",
//   element: <App />
// }])

const App = () => {
  return (
    <div className="font-mono">
      <Navigation />
      <Home />
    </div>
  );
};

export default App;
