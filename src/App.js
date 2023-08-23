import React from "react";

import Navigation from "./components/Navigation";

import Home from "./components/pages/Home";

import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className="font-mono">
      <Navigation />
      <Home />
    </div>
  );
};

export default App;
