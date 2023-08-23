import { React, useState, useLayoutEffect } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

import Carousel from "react-bootstrap/Carousel";
import { Card } from "react-bootstrap";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set(".profileImg", { autoAlpha: 0 });
      gsap.set(".introTxt", { autoAlpha: 0 });
      gsap.set(".scroll", { autoAlpha: 0 });
      gsap.set(".skill-title", { autoAlpha: 0 });
      gsap.set(".carousel", { autoAlpha: 0 });
      let tl = gsap.timeline({});

      tl.to(".profileImg", { autoAlpha: 1, duration: 1, delay: 0.5 });

      tl.to(".introTxt", { autoAlpha: 1, duration: 1 });

      tl.to(".scroll", { autoAlpha: 1, duration: 1 });
      tl.to(".skill-title", { autoAlpha: 1, duration: 1 });
      tl.from(".skillItem", {
        x: -2000,
        duration: 1.5,
        ease: "elastic.out(1, 1)",
      });
      // tl.to(".carousel", { autoAlpha: 1, duration: 1, delay: 1 });
      tl.to(".carousel", { y: 500 });
      tl.to(".carousel", { autoAlpha: 1, duration: 1 });
      tl.to(".carousel", { y: 0, duration: 1 });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Container fluid>
        <Row className="">
          <Col xs={6} sm={5} md={6} lg={6}>
            <img
              alt="profile of James Geneser wearing a blue shirt and tie"
              className="profileImg"
              id="profileImg"
              src={require("../images/profile.jpg")}
            ></img>
          </Col>
          <Col
            xs={6}
            sm={4}
            md={4}
            lg={6}
            className="introTxt p-4 d-flex flex-column "
          >
            <h2 className="title">Front-End Web Developer</h2>
            <h5 className="subTitle ">
              with a passion for human-centered design
            </h5>
          </Col>
        </Row>
      </Container>
      <Row className="scroll d-flex justify-content-end me-3">
        <Col xs={7} s={5} md={5} lg={7} className="d-flex justify-content-end ">
          <img
            className="bootcampStamp"
            src={require("../images/universityDenverBootcamp.png")}
            alt="DU logo within stamp signifying graduation from the University of Denver Bootcamp"
          ></img>
        </Col>
      </Row>
      <Container className="">
        <Row className="m-2">
          <h3 className="skill-title ">Skilled In</h3>
        </Row>
        <Row className="skills d-flex flex-row justify-content-around m-2">
          <Col xs={4} sm={2} md={2} lg={2} className="skillItem">
            Javascript
          </Col>
          <Col xs={4} sm={4} md={2} lg={2} className="skillItem">
            React
          </Col>
          <Col xs={4} sm={4} md={2} lg={2} className="skillItem">
            GraphQL
          </Col>
          <Col xs={4} sm={4} md={2} lg={2} className="skillItem">
            GSAP library
          </Col>
        </Row>
      </Container>

      <h4 className="carousel-title m-3">My Portfolio</h4>
      <Container fluid className="colorado-birds-card">
        <Row>
          <Col lg={8}>
            {" "}
            <Card>
              <Card.Img src={require("../images/ColoradoBirds.png")}></Card.Img>
              <Card.Link
                className="bird-link"
                target={"_blank"}
                href="https://jamesgeneser.https://jamesgeneser.github.io/Colorado-Bird-Nerd/github.io/Colorado-Bird-Nerd/"
              >
                {" "}
                Vist Colorado Birds
              </Card.Link>
            </Card>
          </Col>
          <Col>
            <h4>Birds of Colorado</h4>
            <p>
              An education resource for those wanting to learn about the birds
              of Colorado. Read about basic information, hear bird calls and
              songs, and learn about migration patters. This site was built with
              React, and frameworked with Bootstrap. All images, sound files,
              and data are from the Cornell Lab.
            </p>
          </Col>
        </Row>
      </Container>

      {/* <Container className="mt-5 carousel">
        <Row className="m-1 mt-3">
          <h4 className="carousel-title">My Portfolio</h4>
        </Row>

        <Row>
          <Card>
            <Card.Link
              target={"_blank"}
              href="https://jamesgeneser.github.io/Colorado-Bird-Nerd/"
            >
              Colorado Bird Nerd
            </Card.Link>
            <Card.Img></Card.Img>
          </Card>
        </Row>

        <Row>
          <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require("../images/DiscoveringDenver.png")}
                alt="discovering denver"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require("../images/birdNerd.png")}
                alt="bird nerd"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require("../images/Librarian.png")}
                alt="digital librarian"
              />
            </Carousel.Item>
          </Carousel>
        </Row>
      </Container> */}
    </>
  );
}
