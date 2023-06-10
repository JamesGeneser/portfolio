import React from "react";
import { Nav } from "react-bootstrap";
const HomePortfolio = () => {
  console.log(window.location.pathname);
  let location = window.location.pathname;

  if (location === "/home") {
    return (
      <Nav>
        <Nav.Link className="navElement" name="/projects" href="/projects">
          Portfolio
        </Nav.Link>
      </Nav>
    );
  } else if (location === "/projects") {
    return (
      <Nav>
        <Nav.Link className="navElement" name="/home" href="/home">
          Home
        </Nav.Link>
      </Nav>
    );
  }
};

export default HomePortfolio;
