import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import Form from "react-bootstrap/Form";

function Contact() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="nav-item navElement" variant="" onClick={handleShow}>
        Contact Info
      </Button>

      <Modal size="sm" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-dark">Contact Me</Modal.Title>
        </Modal.Header>
        <Modal.Body className="contact-info">
          <p>email: jamesgeneser@gmail.com</p>
          <p>phone: (319)-538-3074</p>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}

// render(<Contact />);

export default Contact;
