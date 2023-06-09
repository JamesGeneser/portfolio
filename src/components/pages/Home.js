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
  gsap.set(".scroll", { autoAlpha: 0 });
  gsap.to(".scroll", {
    scrollTrigger: ".scroll",
    autoAlpha: 1,
    duration: 2,
  });
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
      <Container className="p-4 m-5">
        <Row className="">
          <Col className="scroll">
            <p className="item">Full Stack Flex Graduate</p>
            <p className="item">Community-Oriented Team Member</p>
            <p className="item">Passionate About Visual Engagement</p>
          </Col>
          <Col className="scroll">
            <img
              className="bootcampStamp"
              src={require("../images/universityDenverBootcamp.png")}
              alt="DU logo within stamp signifying graduation from the University of Denver Bootcamp"
            ></img>
          </Col>
        </Row>
        <Row className="scroll">
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
