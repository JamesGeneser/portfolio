import React from "react";
import { Nav } from "react-bootstrap";

const HomePortfolio = () => {
  console.log(window.location.pathname);
  let location = window.location.pathname;

  if (location === "/portfolio/") {
    return (
      <Nav>
        <Nav.Link className="nav-item" href="/portfolio/projects">
          Portfolio
        </Nav.Link>
      </Nav>
    );
  } else if (location === "/portfolio/projects") {
    return (
      <Nav>
        {" "}
        <Nav.Link className="nav-item" href="/portfolio/">
          Home
        </Nav.Link>
      </Nav>
    );
  }
};

export default HomePortfolio;
