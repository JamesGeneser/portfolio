import { React, useEffect, useLayoutEffect, useRef } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { auto } from "@popperjs/core";
import { textAlign } from "@mui/system";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set(".profileImg", { autoAlpha: 0 });
      gsap.set(".introTxt", { autoAlpha: 0 });
      let tl = gsap.timeline({});

      tl.to(".profileImg", { autoAlpha: 1, duration: 1, delay: 0.5 });

      tl.to(".introTxt", { autoAlpha: 1, duration: 1 });
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // gsap.set(".scroll", { autoAlpha: 0 });
      // gsap.set(".skill", { autoAlpha: 0 });
      let tl = gsap.timeline({
        scrollTrigger: {
          delay: 1,
          trigger: ".scroll",
          start: "top top",
        },
      });
      // tl.to(".scroll", { autoAlpha: 1, duration: 1 });
      // tl.to(".skill", { autoAlpha: 1, duration: 1 });
      // tl.from(".skillItem", {
      //   x: -500,
      //   duration: 1.5,
      //   ease: "elastic.out(1, 1)",
      // });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Container fluid>
        <Row className="">
          <Col xs={auto} sm={auto} md={2}>
            <img
              alt="profile of James Geneser wearing a blue shirt and tie"
              className="profileImg"
              id="profileImg"
              src={require("../images/profile.jpg")}
            ></img>
          </Col>
          <Col sm={auto} md={10} className="introTxt p-4 d-flex flex-column ">
            <h2 className="title">Front-End Web Developer</h2>
            <h5 className="subTitle ">
              with a passion for human-centered design
            </h5>
          </Col>
        </Row>
      </Container>
      <Container className="">
        <Row className="scroll">
          <Col xs={7} sm={2} md={4} className="scroll ms-5">
            <img
              className="bootcampStamp "
              src={require("../images/universityDenverBootcamp.png")}
              alt="DU logo within stamp signifying graduation from the University of Denver Bootcamp"
            ></img>
          </Col>
          <Col xs={10} className="scroll m-2">
            <p className="item">
              Full Stack Flex Graduate from the University of Denver
            </p>
          </Col>
        </Row>

        <Row className="mt-5">
          <h3 className="skill-title">Skills</h3>
        </Row>
        <Row className="skills d-flex flex-row justify-content-between m-2">
          <Col xs={4} sm={2} md={1} lg={1} className="skillItem">
            Javascript
          </Col>
          <Col xs={4} sm={4} md={1} lg={1} className="skillItem">
            React
          </Col>
          <Col xs={4} sm={4} md={1} lg={1} className="skillItem">
            GraphQL
          </Col>
          <Col xs={4} sm={4} md={1} lg={1} className="skillItem">
            MongoDB
          </Col>
          <Col xs={4} sm={4} md={1} lg={1} className="skillItem">
            MySQL
          </Col>
          <Col xs={4} sm={4} md={1} lg={1} className="skillItem">
            Express
          </Col>
          <Col xs={4} sm={4} md={1} lg={1} className="skillItem">
            Node.js
          </Col>
          <Col xs={4} sm={4} md={1} lg={1} className="skillItem">
            RESTful APIs
          </Col>
        </Row>
      </Container>
    </>
  );
}
