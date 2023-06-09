import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

function Project() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Container>
        <Row>
          <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="holder.js/800x400?text=First slide&bg=373940"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="holder.js/800x400?text=Second slide&bg=282c34"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="holder.js/800x400?text=Third slide&bg=20232a"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>
      </Container>

      <Container className="cardStack">
        <Row className="portfolioCard">
          <h2 className="portfolioTitle">Discovering Denver</h2>
          <Col>
            <Link target="_blank" to="https://pure-refuge-38397.herokuapp.com/">
              <img
                alt="Discovering Denver homepage"
                className="portfolioImg"
                src={require("../images/DiscoveringDenver.png")}
              ></img>
            </Link>
          </Col>
          <Col xs={2} className="portfolioTxt">
            Explore a variety of activities around Denver. Read and write
            reviews and ratings!
          </Col>
        </Row>

        <Row className="portfolioCard">
          <h2 className="portfolioTitle">Bird Nerd</h2>
          <Col>
            <Link target="_blank" to="https://bird-nerd2023.herokuapp.com/">
              <img
                alt="Bird Nerd home page"
                className="portfolioImg"
                src={require("../images/birdNerd.png")}
              ></img>
            </Link>
          </Col>
          <Col xs={2} className="portfolioTxt">
            Learn about the many birds that live in Colorado. Use the BirdNerd
            ID tool to identify birds by description, then post your sighting on
            the feed.
          </Col>
        </Row>
        <Row className="portfolioCard">
          <h2 className="portfolioTitle">Digital Librarian</h2>
          <Col>
            <Link
              target="_blank"
              to="https://jamesgeneser.github.io/book-search/index.html"
            >
              <img
                alt="Digital Librarian homepage"
                className="portfolioImg"
                src={require("../images/Librarian.png")}
              ></img>
            </Link>
          </Col>
          <Col xs={2} className="portfolioTxt">
            Search for book results from the Google Books Api in a visually
            engaging manner.
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Project;
