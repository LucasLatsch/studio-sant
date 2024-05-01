import React, { useState, useEffect, useRef } from "react";
import "./index.css";
import { Row, Col, Modal, Button } from "react-bootstrap";
import { IoClose } from "react-icons/io5";
import Logo from "../Logo";
import { motion } from "framer-motion";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";

export default function Projeto({ setSelectedItem }) {
  const [expanded, setExpanded] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedImg, setSelectedImg] = useState("");
  const expandedContentRef = useRef(null);
  useEffect(() => {
    if (expanded && expandedContentRef.current) {
      expandedContentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [expanded]);

  const handleClick = () => {
    setSelectedItem(null);
    setExpanded(false);
  };

  const handleCardClick = (img) => {
    setSelectedImg(img);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedImg("");
  };

  const items = [
    {
      id: 1,
      img: "https://github.com/LucasLatsch/Img/blob/main/01.jpg?raw=true",
      title: "Cozinha Moderna",
      subtitle: "Some quick example text",
    },
    {
      id: 2,
      img: "https://github.com/LucasLatsch/Img/blob/main/02.jpg?raw=true",
      title: "Casa ao Dia",
      subtitle: "Luz natural",
    },
    {
      id: 3,
      img: "https://github.com/LucasLatsch/Img/blob/main/03.jpg?raw=true",
      title: "Casa ao Dia",
      subtitle: "Varanda espaçosa",
    },
    {
      id: 4,
      img: "https://github.com/LucasLatsch/Img/blob/main/04.jpg?raw=true",
      title: "Cozinha Gourmet",
      subtitle: "Pronta para jantares",
    },
    {
      id: 5,
      img: "https://github.com/LucasLatsch/Img/blob/main/05.jpg?raw=true",
      title: "Cozinha Focada",
      subtitle: "Detalhe na Mesa",
    },
  ];

  return (
    <>
      <motion.div
        className="content back"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
      >
        <div className="inner-content">
          <Row className="white p-0 m-0">
            <Col className="p-0">
              <Logo />
            </Col>
            <Col className="d-flex justify-content-end p-0">
              <IoClose className="btnClose" onClick={() => handleClick()} />
            </Col>
          </Row>
          <Row className="d-flex-justify-space-around">
            <Carousel>
              {items.map((item) => (
                <Carousel.Item key={item.id}>
                  <img
                    loading="lazy"
                    alt={item.title}
                    width="100%"
                    src={item.img}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </Row>
          <Row>
            <Col className="d-flex-justify-space-around p-0 mt-2">
              <button
                onClick={() => setExpanded(!expanded)}
                style={{
                  backgroundColor: "rgba(255,255,255,0.3)",
                  borderRadius: "15px",
                  padding: "5px 20px 5px 20px",
                }}
              >
                {expanded ? "Ver Menos" : "Ver Mais"}
              </button>
            </Col>
          </Row>
        </div>
      </motion.div>
      {expanded && (
        <motion.div
          ref={expandedContentRef}
          className="content1 back2"
          transition={{ duration: 0.5 }}
        >
          <Row className="p-0">
            {items.map((item) => (
              <Col
                className="d-flex justify-content-center mb-3"
                md={6}
                lg={4}
                xl={3}
                xxl={3}
                key={item.id}
              >
                <Card
                  className="cd"
                  style={{ backgroundImage: `url(${item.img})` }}
                  onClick={() => handleCardClick(item.img)}
                >
                  <Card.Body>
                    <div>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>{item.subtitle}</Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </motion.div>
      )}
      <Modal show={showModal} onHide={closeModal}>
        <Modal.Body>
          <IoClose className="btnModal" onClick={closeModal} />
          <img src={selectedImg} alt="Imagem" style={{ height: "90vh" }} />
        </Modal.Body>
      </Modal>
    </>
  );
}
