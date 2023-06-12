import HomePortfolio from "./HomePortfolio";

import Contact from "./modals/Contact";

import Resume from "./modals/Resume";
import { gsap } from "gsap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import { useEffect } from "react";

function Navigation() {
  useEffect(() => {
    gsap.from(".nav-item", {
      x: -500,
      duration: 1.5,
      ease: "elastic.out(1, 1)",
    });
  }, []);

  return (
    <Navbar expand="sm" className="m-4">
      <Navbar.Brand>
        <img
          alt="James Geneser logo, name within a box"
          className="logo"
          src={require("../components/images/profileLogo.png")}
        />
      </Navbar.Brand>
      <Navbar.Toggle
        className="navButtonCollapse"
        label="Toggle navigation"
        aria-controls="basic-navbar-nav"
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto my-2 my-lg-0">
          <HomePortfolio />

          <Nav.Link
            className="nav-item"
            target="_blank"
            href="https://www.linkedin.com/in/james-geneser-01967a153/"
          >
            LinkedIn
          </Nav.Link>

          <Resume />

          <Contact />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
