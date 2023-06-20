import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Project from "./components/pages/Project";
import Home from "./components/pages/Home";

import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="font-mono">
      <Router basename={process.env.PUBLIC_URL}>
        <Navigation />

        <Routes>
          <Route path="/portfolio/" element={<Home />} />
          <Route path="/portfolio/projects" element={<Project />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
