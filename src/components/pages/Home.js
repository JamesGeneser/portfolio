import { React, useEffect, useLayoutEffect, useRef } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const comp = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set(".profileImg", { autoAlpha: 0 });
      gsap.set(".introTxt", { autoAlpha: 0 });
      let tl = gsap.timeline({ delay: 1 });

      tl.to(".profileImg", { autoAlpha: 1, duration: 2 });

      tl.to(".introTxt", { autoAlpha: 1, duration: 2 }, ">-0.5");
    });

    return () => ctx.revert();
  }, []);

  gsap.to(".test", { x: 40, delay: 8 });
  gsap.set(".scrollText", { autoAlpha: 0 });
  gsap.to(".scrollText", {
    scrollTrigger: ".scrollText",
    autoAlpha: 1,
    duration: 2,
  });
  return (
    <>
      <Container className="homePage">
        <p className="d-none">git change</p>
        <Row>
          <Col>
            <img
              alt="profile of James Geneser wearing a blue shirt and tie"
              className="profileImg"
              id="profileImg"
              src={require("../images/profile.jpg")}
            ></img>
          </Col>
          <Col className="introTxt d-flex flex-column justify-content-center">
            <div className="developerTxt">
              <h2 className="title">Front-End Web Developer</h2>
              <h5 className="subTitle">
                with a passion for human-centered design
              </h5>
            </div>
            <Row>
              <Col className="d-flex flex-row">
                <img
                  className="bootcampStamp"
                  src={require("../images/universityDenverBootcamp.png")}
                  alt="DU logo within stamp signifying graduation from the University of Denver Bootcamp"
                ></img>
              </Col>
              <Col>
                <p className=" mt-2">Full Stack Flex Graduate</p>
                <p className="">Community-Oriented Team Member</p>
                <p className="">Passionate About Visual Engagement</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container className="homeExtra">
        <Row className="scrollText">
          <h3 className="title">Skills in</h3>

          <p>
            Experience in: Javascript, React, GraphQl, MongoDB, MySQL, Express,
            Node.js, RESTful APIs
          </p>
        </Row>
      </Container>
    </>
  );
}
