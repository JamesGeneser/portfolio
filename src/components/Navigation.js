import HomePortfolio from "./HomePortfolio";

import Contact from "./modals/Contact";

import Resume from "./modals/Resume";
import { gsap } from "gsap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useEffect } from "react";

function Navigation() {
  useEffect(() => {
    gsap.from(".navElement", {
      x: -500,
      duration: 1.5,
      ease: "elastic.out(1, 1)",
    });
  }, []);

  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt="James Geneser logo, name within a box"
            className="logo"
            src={require("../components/images/profileLogo.png")}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto d-flex justify-content-between">
            <HomePortfolio as />

            <Nav.Link
              className="navElement"
              target="_blank"
              href="https://www.linkedin.com/in/james-geneser-01967a153/"
            >
              LinkedIn
            </Nav.Link>

            <Resume />

            <Contact />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
