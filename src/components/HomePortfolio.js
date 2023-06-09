import React from "react";
import { Nav } from "react-bootstrap";
const HomePortfolio = () => {
  console.log(window.location.pathname);
  let location = window.location.pathname;

  if (location === "/portfolio/home") {
    return (
      <Nav>
        <Nav.Link className="navElement" name="/projects" href="projects">
          Portfolio
        </Nav.Link>
      </Nav>
    );
  } else if (location === "/portfolio/projects") {
    return (
      <Nav>
        <Nav.Link className="navElement" name="/home" href="/">
          Home
        </Nav.Link>
      </Nav>
    );
  }
};

export default HomePortfolio;
