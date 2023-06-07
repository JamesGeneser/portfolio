import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Contact() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="nav-item navElement" variant="" onClick={handleShow}>
        Resume
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="modalTitle">My Resume</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            alt="James Geneser's resume"
            className="resume"
            src={require("../images/Resume23Big.jpg")}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Exit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

// render(<Contact />);

export default Contact;
