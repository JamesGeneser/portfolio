import React from "react";
import { Nav } from "react-bootstrap";
const HomePortfolio = () => {
  console.log(window.location.pathname);
  let location = window.location.pathname;

  if (location === "/") {
    return (
      <Nav>
        <Nav.Link className="navElement" name="/portfolio" href="portfolio">
          Portfolio
        </Nav.Link>
      </Nav>
    );
  } else if (location === "/portfolio") {
    return (
      <Nav>
        <Nav.Link className="navElement" name="/" href="/">
          Home
        </Nav.Link>
      </Nav>
    );
  }
};

export default HomePortfolio;
