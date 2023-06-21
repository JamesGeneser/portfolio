import { React, useState, useLayoutEffect } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
      let tl = gsap.timeline({
        scrollTrigger: {
          delay: 5,
          trigger: ".scroll",
          start: "top center",
        },
      });

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
      <Row className="d-block d-sm-none scroll d-flex justify-content-center">
        <Col xs={7}>
          <img
            className="bootcampStamp"
            src={require("../images/universityDenverBootcamp.png")}
            alt="DU logo within stamp signifying graduation from the University of Denver Bootcamp"
          ></img>
        </Col>
      </Row>
      <Container className="d-md-block">
        <Row className="scroll d-none d-sm-none border m-4">
          <Col xs={5} sm={7} md={4} lg={4} className="scroll p-2">
            <img
              className="bootcampStamp "
              src={require("../images/universityDenverBootcamp.png")}
              alt="DU logo within stamp signifying graduation from the University of Denver Bootcamp"
            ></img>
          </Col>
          <Col xs={5} sm={10} md={7} lg={6} className="scroll m-2">
            <p className="item">
              Full Stack Flex Graduate from the University of Denver
            </p>
          </Col>
        </Row>

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

      <Container className="mt-5 carousel">
        <Card className="card mb-4">
          <Row className="m-1">
            <Card.Link href="/portfolio/projects" className="stretched-link">
              <h4 className="carousel-title">See My Portfolio</h4>
            </Card.Link>
          </Row>
        </Card>

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
      </Container>
    </>
  );
}
