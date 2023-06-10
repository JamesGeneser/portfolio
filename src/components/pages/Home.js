import { React, useEffect, useLayoutEffect, useRef } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set(".profileImg", { autoAlpha: 0 });
      gsap.set(".introTxt", { autoAlpha: 0 });
      let tl = gsap.timeline({
        delay: 1,
      });

      tl.to(".profileImg", { autoAlpha: 1, duration: 2 });

      tl.to(".introTxt", { autoAlpha: 1, duration: 1 });
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set(".scroll", { autoAlpha: 0 });
      let tl = gsap.timeline({
        scrollTrigger: {
          delay: 1,
          trigger: ".scroll",
          start: "top top",
        },
      });
      tl.to(".scroll", { autoAlpha: 1, duration: 2 });
      gsap.from(".skillItem", {
        x: -500,
        duration: 1.5,
        ease: "elastic.out(1, 1)",
      });
    });
  }, []);

  return (
    <>
      <Container className="p-4">
        <p className="d-none">git change</p>
        <Row>
          <Col className="align-bottom">
            <img
              alt="profile of James Geneser wearing a blue shirt and tie"
              className="profileImg"
              id="profileImg"
              src={require("../images/profile.jpg")}
            ></img>
          </Col>
          <Col className="introTxt d-flex flex-column align-top">
            <div className="developerTxt">
              <h2 className="title">Front-End Web Developer</h2>
              <h5 className="subTitle">
                with a passion for human-centered design
              </h5>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="p-4 m-5 mt-5">
        <Row className="">
          <Col className="scroll ">
            <h3 className="aboutMe"> About Me </h3>
            <ul className="mt-4 ">
              <li className="item">
                Full Stack Flex Graduate from the University of Denver
              </li>
              <li className="item">Community-Oriented Team Member</li>
              <li className="item">Passionate About Visual Engagement</li>
            </ul>
          </Col>
          <Col className="scroll ms-5">
            <img
              className="bootcampStamp m-5"
              src={require("../images/universityDenverBootcamp.png")}
              alt="DU logo within stamp signifying graduation from the University of Denver Bootcamp"
            ></img>
          </Col>
        </Row>
        <Row className="scroll mb-5">
          <h3 className="skills">Skills in</h3>

          {/* <p>
            Javascript, React, GraphQl, MongoDB, MySQL, Express, Node.js,
            RESTful APIs
          </p> */}
        </Row>
        <Row className="scroll">
          <div className="d-flex flex-row justify-content-between">
            <p className="skillItem">Javascript</p>
            <p className="skillItem">React</p>
            <p className="skillItem">GraphQl</p>
            <p className="skillItem">MongoDB</p>
            <p className="skillItem">MySQL</p>
            <p className="skillItem">Express</p>
            <p className="skillItem">Node.js</p>
            <p className="skillItem">RESTful APIs</p>
          </div>
        </Row>
      </Container>
    </>
  );
}
