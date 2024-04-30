import React from "react";
import ContatoImg from "../../assets/CONTATO.jpg";
import { Row, Col } from "react-bootstrap";
import { IoClose } from "react-icons/io5";
import Logo from "../Logo";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";
import { TbMailShare } from "react-icons/tb";
import { motion } from "framer-motion";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function Contato({ setSelectedItem }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <motion.div
        className="content"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
        style={{
          backgroundImage: `url("https://github.com/LucasLatsch/Img/blob/main/CONTATO.jpg?raw=true")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            height: "100%",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Row>
            <Col>
              <Logo />
            </Col>
            <Col style={{ display: "flex", justifyContent: "end" }}>
              <IoClose
                style={{ fontSize: "25px", cursor: "pointer" }}
                onClick={() => setSelectedItem(null)}
              />
            </Col>
          </Row>
          <Row>
            <Col style={{ marginLeft: "9px", fontWeight: "500" }}>
              <p>Rio de Janeiro</p>
              <p>
                jsantarquitetura@gmail.com
                <TbMailShare
                  onClick={handleShow}
                  style={{
                    fontSize: "18px",
                    cursor: "pointer",
                    marginLeft: "5px",
                  }}
                />
              </p>
              <p>+55 21 988141565</p>
            </Col>
          </Row>
          <Row>
            <Col
              style={{
                display: "flex",
                justifyContent: "end",
                fontSize: "20px",
                gap: "20px",
              }}
            >
              <a
                href="https://www.linkedin.com/in/studio-j-sant-arquitetura-arte-design-b499ab303"
                target="_blank"
              >
                <FaLinkedin color="white" />
              </a>
              <a
                href="https://www.instagram.com/jsant.arquitetura/?igsh=bWI1NWUyMDl4anIw"
                target="_blank"
              >
                <FaInstagram color="white" />
              </a>
              <a href="https://br.pinterest.com/StudioJsant/" target="_blank">
                <FaPinterestP color="white" />
              </a>
            </Col>
          </Row>
        </div>
      </motion.div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
