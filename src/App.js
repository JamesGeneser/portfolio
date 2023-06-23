import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Project from "./components/pages/Project";
import Home from "./components/pages/Home";
import { HashRouter } from "react-router-dom";

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
      <HashRouter>
        <Navigation />

        <div>
          <Route exact path="/" component={<Home />} />
          <Route path="/portfolio/projects" element={<Project />} />
        </div>
      </HashRouter>
    </div>
  );
};

export default App;
